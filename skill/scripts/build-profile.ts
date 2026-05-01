/**
 * Distills a user's Claude Code transcripts into a single "traveler profile"
 * the taste-mirror skill consumes when matching trips.
 *
 * Walks ~/.claude/projects/<dir>/*.jsonl, extracts user messages, runs a
 * per-project distillation (cached by transcript fingerprint), then merges
 * everything into ~/.taste-mirror/traveler_profile.md (+ .json).
 *
 * Auth: shells out to `claude -p` (Claude Code in print mode) — uses your
 * existing Claude Code auth (OAuth/keychain or whatever you've already set up).
 * No separate ANTHROPIC_API_KEY required.
 *
 * Usage (the skill bundles this script — invoke from anywhere):
 *   npx tsx ~/.claude/skills/taste-mirror/scripts/build-profile.ts
 *
 * Or, when working in the source repo:
 *   npm run build-profile
 *
 * Env knobs:
 *   PROFILE_MODEL        — model alias (default: opus)
 *   PROFILE_CONCURRENCY  — parallel `claude -p` calls (default: 3)
 *   PROFILE_MAX_PROJECTS — cap projects processed this run (default: all)
 *   PROFILE_REBUILD      — set to "true" to ignore cache
 *   PROFILE_CLAUDE_BIN   — path to claude binary (default: "claude")
 */
import { spawn } from "node:child_process";
import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import readline from "node:readline";

const PROJECTS_DIR = path.join(os.homedir(), ".claude/projects");
const OUT_DIR = path.join(os.homedir(), ".taste-mirror");
const CACHE_DIR = path.join(OUT_DIR, "cache");
const PROFILE_MD = path.join(OUT_DIR, "traveler_profile.md");
const PROFILE_JSON = path.join(OUT_DIR, "traveler_profile.json");
const MEMORY_DIR_NAME = "memory";

const MAX_USER_CHARS_PER_PROJECT = 30_000;
const MAX_USER_MSGS_PER_PROJECT = 200;
const SKIP_PROJECTS_UNDER_BYTES = 5_000;
const MODEL = process.env.PROFILE_MODEL ?? "opus";
const CONCURRENCY = Number(process.env.PROFILE_CONCURRENCY ?? "3");
const MAX_PROJECTS = process.env.PROFILE_MAX_PROJECTS
  ? Number(process.env.PROFILE_MAX_PROJECTS)
  : Infinity;
const REBUILD = process.env.PROFILE_REBUILD === "true";
const CLAUDE_BIN = process.env.PROFILE_CLAUDE_BIN ?? "claude";
const CLAUDE_TIMEOUT_MS = 180_000;

interface ProjectSketch {
  project_dir: string;
  cwd: string | null;
  msg_count: number;
  obsessions: string[];
  working_style: string;
  frustrations: string[];
  excitements: string[];
  blind_spots: string[];
  anxieties: string[];
  aesthetic_signals: string[];
  pace: string;
}

interface CachedSketch {
  fingerprint: string;
  sketch: ProjectSketch;
}

const PER_PROJECT_SYSTEM = `You read raw user messages from one Claude Code project and extract a behavioral sketch of the user — not the work, the user.

You only see the user's side of the conversation (their prompts, corrections, follow-ups). That's deliberate: it shows what they reach for, what they double-check, what frustrates them, what excites them. Read for personality, not topic.

Return ONLY a JSON object matching this exact shape — no prose, no markdown fences, no preamble:

{
  "obsessions": ["short tags for things they kept circling back to"],
  "working_style": "one sentence: how they think/work (terse vs verbose, methodical vs improvisational, exploratory vs decisive, etc.)",
  "frustrations": ["specific things that visibly frustrated them — corrections, 'no don't do that', 'why are you...'"],
  "excitements": ["specific things that energized them — longer/more enthusiastic messages, 'oh nice', 'perfect'"],
  "blind_spots": ["things they consistently forget to mention or assume Claude knows"],
  "anxieties": ["things they double-check, worry about, or guard against"],
  "aesthetic_signals": ["any taste/aesthetic references — fonts, colors, vibes, brands, references they invoked"],
  "pace": "one of: rapid_fire | steady | reflective | bursty"
}

Each array: 0–6 short entries, lowercase tag-style or short phrases. If a field has no signal, use an empty array. Do not invent. If the project is too thin to read, return all empties + working_style: "insufficient signal".`;

const MERGE_SYSTEM = `You synthesize many per-project behavioral sketches of the SAME user into one "traveler profile" used to bias trip recommendations.

The user is human. The sketches come from their coding work but reveal personality: pace, novelty tolerance, social load, what they over-prepare for, what they let slide, what drains them, what energizes them. Translate that into travel-relevant terms.

Output a single markdown document with these sections (no preamble, no closing remarks):

# Traveler Profile

## Identity sketch
2–4 sentences. Who they seem to be as a person — not their job. Read between the lines.

## Energy & pace
What energy budget can they sustain? Are they early-mornings-with-coffee or slow-builds-after-noon? Do they want one peak experience per day or back-to-back?

## Novelty vs comfort
Do they reach for the unfamiliar or hedge toward the known? Where on the spectrum, with one concrete tell from the sketches.

## What to push toward
3–5 bullets. Concrete trip qualities they'd light up for. Be specific — not "good food" but "tiny family-run places where the cook comes out".

## What to avoid (and why)
3–5 bullets. Concrete trip qualities that would drain or annoy them, each with the underlying reason from the sketches. This is the most important section — most defaults skew toward what most people want; the avoids are what differentiate.

## Hidden anxieties to honor
2–4 bullets. Things they worry about that a generic recommender would miss. (e.g. "needs reliable wifi mid-trip — keeps surfacing async/connection concerns", "anxious about wasted time — over-plans transitions").

## Blind spots to compensate for
2–3 bullets. Things they consistently forget to specify but probably want. Compensate, don't ask.

Keep total length under 600 words. Be specific and grounded in the sketches — abstract psychobabble is useless. If the sketches collectively offer thin signal on a section, say so plainly in one line rather than padding.`;

function mkdirp(p: string) {
  fs.mkdirSync(p, { recursive: true });
}

function fingerprintFiles(files: { path: string; size: number; mtime: number }[]): string {
  const h = crypto.createHash("sha256");
  for (const f of files.sort((a, b) => a.path.localeCompare(b.path))) {
    h.update(`${f.path}|${f.size}|${f.mtime}\n`);
  }
  return h.digest("hex").slice(0, 16);
}

interface UserMsg {
  ts: string;
  text: string;
}

async function extractUserMessages(jsonlPath: string): Promise<{ msgs: UserMsg[]; cwd: string | null }> {
  const msgs: UserMsg[] = [];
  let cwd: string | null = null;
  const stream = fs.createReadStream(jsonlPath, { encoding: "utf8" });
  const rl = readline.createInterface({ input: stream, crlfDelay: Infinity });

  for await (const line of rl) {
    if (!line) continue;
    let obj: any;
    try {
      obj = JSON.parse(line);
    } catch {
      continue;
    }
    if (!cwd && typeof obj.cwd === "string") cwd = obj.cwd;
    if (obj.type !== "user") continue;
    if (obj.isSidechain) continue;
    const message = obj.message;
    if (!message || message.role !== "user") continue;
    const text = userContentToText(message.content);
    if (!text) continue;
    if (looksLikeToolResult(text)) continue;
    msgs.push({ ts: obj.timestamp ?? "", text });
  }
  return { msgs, cwd };
}

function userContentToText(content: unknown): string {
  if (typeof content === "string") return content.trim();
  if (!Array.isArray(content)) return "";
  const parts: string[] = [];
  for (const block of content) {
    if (typeof block === "string") {
      parts.push(block);
    } else if (block && typeof block === "object") {
      const b: any = block;
      if (b.type === "text" && typeof b.text === "string") parts.push(b.text);
    }
  }
  return parts.join("\n").trim();
}

function looksLikeToolResult(text: string): boolean {
  if (text.startsWith("<system-reminder>") || text.startsWith("[Request interrupted")) return true;
  if (text.startsWith("<command-name>") || text.startsWith("<local-command-stdout>")) return true;
  return false;
}

function sampleMessages(msgs: UserMsg[]): string {
  if (msgs.length === 0) return "";
  const HEAD = 30;
  const TAIL = 30;
  let kept: UserMsg[];
  if (msgs.length <= HEAD + TAIL) {
    kept = msgs;
  } else {
    const middle = msgs.slice(HEAD, msgs.length - TAIL);
    const stride = Math.max(1, Math.floor(middle.length / Math.max(1, MAX_USER_MSGS_PER_PROJECT - HEAD - TAIL)));
    const sampled: UserMsg[] = [];
    for (let i = 0; i < middle.length; i += stride) {
      const m = middle[i];
      if (m) sampled.push(m);
    }
    kept = [...msgs.slice(0, HEAD), ...sampled, ...msgs.slice(-TAIL)];
  }

  const lines: string[] = [];
  let chars = 0;
  for (const m of kept) {
    const snippet = m.text.length > 800 ? m.text.slice(0, 800) + "…" : m.text;
    const entry = `--- ${m.ts}\n${snippet}\n`;
    if (chars + entry.length > MAX_USER_CHARS_PER_PROJECT) break;
    lines.push(entry);
    chars += entry.length;
  }
  return lines.join("\n");
}

function listProjectJsonls(projectDir: string): { path: string; size: number; mtime: number }[] {
  const out: { path: string; size: number; mtime: number }[] = [];
  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(projectDir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const e of entries) {
    if (!e.isFile() || !e.name.endsWith(".jsonl")) continue;
    const p = path.join(projectDir, e.name);
    try {
      const st = fs.statSync(p);
      out.push({ path: p, size: st.size, mtime: st.mtimeMs });
    } catch {
      /* skip */
    }
  }
  return out;
}

interface ClaudeResult {
  result: string;
  raw: string;
}

/**
 * Run `claude -p` headlessly and return the assistant text.
 * Uses --bare to skip hooks/auto-memory/CLAUDE.md discovery (we want a pure
 * LLM call). Disables all built-in tools so the model can only emit text.
 * Auth comes from the user's existing Claude Code login.
 */
function runClaude(systemPrompt: string, userPrompt: string): Promise<ClaudeResult> {
  return new Promise((resolve, reject) => {
    const args = [
      "-p",
      "--system-prompt",
      systemPrompt,
      "--model",
      MODEL,
      "--output-format",
      "json",
      "--no-session-persistence",
      "--disallowedTools",
      "Bash Edit Write Read Glob Grep WebFetch WebSearch TodoWrite NotebookEdit Task",
      "--permission-mode",
      "default",
    ];

    const child = spawn(CLAUDE_BIN, args, {
      stdio: ["pipe", "pipe", "pipe"],
      env: process.env,
    });

    let stdout = "";
    let stderr = "";
    let timed = false;

    const timer = setTimeout(() => {
      timed = true;
      child.kill("SIGKILL");
    }, CLAUDE_TIMEOUT_MS);

    child.stdout.on("data", (d) => (stdout += d.toString()));
    child.stderr.on("data", (d) => (stderr += d.toString()));
    child.on("error", (err) => {
      clearTimeout(timer);
      reject(err);
    });
    child.on("close", (code) => {
      clearTimeout(timer);
      if (timed) return reject(new Error("claude -p timeout"));
      if (code !== 0) return reject(new Error(`claude -p exited ${code}: ${stderr.slice(0, 400)}`));
      try {
        const env = JSON.parse(stdout);
        const result = typeof env.result === "string" ? env.result : "";
        if (env.subtype && env.subtype !== "success") {
          return reject(new Error(`claude -p result subtype=${env.subtype}`));
        }
        resolve({ result, raw: stdout });
      } catch (err) {
        reject(new Error(`could not parse claude -p stdout as JSON: ${(err as Error).message}`));
      }
    });

    child.stdin.write(userPrompt);
    child.stdin.end();
  });
}

async function distillProject(projectDir: string): Promise<ProjectSketch | null> {
  const files = listProjectJsonls(projectDir);
  if (files.length === 0) return null;

  const totalBytes = files.reduce((s, f) => s + f.size, 0);
  if (totalBytes < SKIP_PROJECTS_UNDER_BYTES) return null;

  const fingerprint = fingerprintFiles(files);
  const cachePath = path.join(CACHE_DIR, `${path.basename(projectDir)}.json`);

  if (!REBUILD && fs.existsSync(cachePath)) {
    try {
      const cached: CachedSketch = JSON.parse(fs.readFileSync(cachePath, "utf8"));
      if (cached.fingerprint === fingerprint) return cached.sketch;
    } catch {
      /* fall through */
    }
  }

  const allMsgs: UserMsg[] = [];
  let cwd: string | null = null;
  for (const f of files) {
    const { msgs, cwd: c } = await extractUserMessages(f.path);
    if (!cwd && c) cwd = c;
    for (const m of msgs) allMsgs.push(m);
  }
  if (allMsgs.length < 5) return null;

  allMsgs.sort((a, b) => a.ts.localeCompare(b.ts));
  const sample = sampleMessages(allMsgs);

  const userPrompt = `Project directory: ${cwd ?? path.basename(projectDir)}
Total user messages in project: ${allMsgs.length}
(Sample below — head + strided middle + tail.)

${sample}`;

  const { result } = await runClaude(PER_PROJECT_SYSTEM, userPrompt);

  let parsed: any;
  try {
    parsed = JSON.parse(stripJsonFence(result));
  } catch {
    console.warn(`  ! ${path.basename(projectDir)}: could not parse JSON`);
    return null;
  }

  const sketch: ProjectSketch = {
    project_dir: path.basename(projectDir),
    cwd: cwd,
    msg_count: allMsgs.length,
    obsessions: arr(parsed.obsessions),
    working_style: str(parsed.working_style),
    frustrations: arr(parsed.frustrations),
    excitements: arr(parsed.excitements),
    blind_spots: arr(parsed.blind_spots),
    anxieties: arr(parsed.anxieties),
    aesthetic_signals: arr(parsed.aesthetic_signals),
    pace: str(parsed.pace),
  };

  if (sketch.working_style === "insufficient signal") return null;

  fs.writeFileSync(cachePath, JSON.stringify({ fingerprint, sketch } satisfies CachedSketch, null, 2));
  return sketch;
}

function stripJsonFence(s: string): string {
  const trimmed = s.trim();
  const fence = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (fence && fence[1]) return fence[1].trim();
  // Some responses prepend prose; locate the first { or [ and parse from there.
  const start = trimmed.search(/[{[]/);
  return start >= 0 ? trimmed.slice(start) : trimmed;
}

function arr(v: unknown): string[] {
  if (!Array.isArray(v)) return [];
  return v.filter((x): x is string => typeof x === "string").slice(0, 8);
}
function str(v: unknown): string {
  return typeof v === "string" ? v : "";
}

function readMemoryFiles(): string {
  const parts: string[] = [];
  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(PROJECTS_DIR, { withFileTypes: true });
  } catch {
    return "";
  }
  for (const e of entries) {
    if (!e.isDirectory()) continue;
    const memDir = path.join(PROJECTS_DIR, e.name, MEMORY_DIR_NAME);
    if (!fs.existsSync(memDir)) continue;
    const indexPath = path.join(memDir, "MEMORY.md");
    if (fs.existsSync(indexPath)) {
      try {
        parts.push(`# ${e.name}/MEMORY.md\n${fs.readFileSync(indexPath, "utf8")}`);
      } catch {}
    }
    let memFiles: fs.Dirent[];
    try {
      memFiles = fs.readdirSync(memDir, { withFileTypes: true });
    } catch {
      continue;
    }
    for (const m of memFiles) {
      if (!m.isFile() || !m.name.endsWith(".md") || m.name === "MEMORY.md") continue;
      try {
        const text = fs.readFileSync(path.join(memDir, m.name), "utf8");
        parts.push(`# ${e.name}/${m.name}\n${text}`);
      } catch {}
    }
  }
  return parts.join("\n\n").slice(0, 40_000);
}

async function mergeSketches(sketches: ProjectSketch[], memoryDump: string): Promise<string> {
  const compactSketches = sketches.map((s) => ({
    cwd: s.cwd,
    msg_count: s.msg_count,
    obsessions: s.obsessions,
    working_style: s.working_style,
    frustrations: s.frustrations,
    excitements: s.excitements,
    blind_spots: s.blind_spots,
    anxieties: s.anxieties,
    aesthetic_signals: s.aesthetic_signals,
    pace: s.pace,
  }));

  const userPrompt = `${sketches.length} per-project sketches of this user follow, plus their saved Claude memories. Synthesize the traveler profile per the rules in the system prompt.

== PER-PROJECT SKETCHES ==
${JSON.stringify(compactSketches, null, 2)}

== SAVED MEMORIES (from ~/.claude/projects/*/memory/) ==
${memoryDump || "(none found)"}
`;

  const { result } = await runClaude(MERGE_SYSTEM, userPrompt);
  return result.trim();
}

async function pool<T, R>(items: T[], n: number, fn: (item: T, i: number) => Promise<R>): Promise<R[]> {
  const out: R[] = new Array(items.length);
  let next = 0;
  const workers = Array.from({ length: Math.min(n, items.length) }, async () => {
    while (true) {
      const i = next++;
      if (i >= items.length) return;
      const item = items[i];
      if (item === undefined) return;
      out[i] = await fn(item, i);
    }
  });
  await Promise.all(workers);
  return out;
}

async function main() {
  if (!fs.existsSync(PROJECTS_DIR)) {
    console.error(`No Claude projects dir at ${PROJECTS_DIR}`);
    process.exit(1);
  }

  mkdirp(OUT_DIR);
  mkdirp(CACHE_DIR);

  const projectDirs = fs
    .readdirSync(PROJECTS_DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => path.join(PROJECTS_DIR, e.name))
    .slice(0, MAX_PROJECTS);

  console.log(`Found ${projectDirs.length} project(s) under ${PROJECTS_DIR}`);
  console.log(`Model: ${MODEL}, concurrency: ${CONCURRENCY}, rebuild: ${REBUILD}`);
  console.log(`Using claude binary: ${CLAUDE_BIN}\n`);

  let done = 0;
  const sketches: ProjectSketch[] = [];

  await pool(projectDirs, CONCURRENCY, async (dir) => {
    try {
      const sketch = await distillProject(dir);
      done++;
      if (sketch) {
        sketches.push(sketch);
        console.log(`  ✓ [${done}/${projectDirs.length}] ${sketch.cwd ?? path.basename(dir)} (${sketch.msg_count} msgs)`);
      } else {
        console.log(`  · [${done}/${projectDirs.length}] ${path.basename(dir)} skipped`);
      }
    } catch (err) {
      done++;
      const msg = err instanceof Error ? err.message : String(err);
      console.warn(`  ! [${done}/${projectDirs.length}] ${path.basename(dir)}: ${msg}`);
    }
  });

  console.log(`\nUsable sketches: ${sketches.length}`);
  if (sketches.length === 0) {
    console.error("No sketches produced — aborting merge.");
    process.exit(1);
  }

  fs.writeFileSync(PROFILE_JSON, JSON.stringify(sketches, null, 2));
  console.log(`Wrote ${PROFILE_JSON}`);

  console.log("\nReading saved memories...");
  const memoryDump = readMemoryFiles();
  console.log(`Memory dump size: ${memoryDump.length} chars`);

  console.log("\nSynthesizing traveler profile...");
  const profile = await mergeSketches(sketches, memoryDump);

  fs.writeFileSync(PROFILE_MD, profile + "\n");
  console.log(`Wrote ${PROFILE_MD}`);
  console.log(`\nDone. Profile is ${profile.length} chars.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
