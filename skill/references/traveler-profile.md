# Traveler Profile

A synthesized portrait of the user, built once from their Claude Code transcripts and read on every taste-mirror invocation. Lives at `~/.taste-mirror/traveler_profile.md`.

## How to build it

The skill ships with `scripts/build-profile.ts`. From the installed skill directory (e.g. `~/.claude/skills/taste-mirror/`):

```bash
npx tsx scripts/build-profile.ts
```

What it does:
1. Walks `~/.claude/projects/<dir>/*.jsonl` and extracts the user's own messages (head + strided middle + tail, capped at 30K chars per project).
2. Distills each project into a behavioral sketch via `claude -p` (uses your existing Claude Code auth — **no separate `ANTHROPIC_API_KEY` needed**).
3. Caches each sketch by transcript fingerprint at `~/.taste-mirror/cache/`. Reruns are nearly instant for unchanged projects.
4. Merges all sketches plus saved Claude memories (`~/.claude/projects/*/memory/`) into one `~/.taste-mirror/traveler_profile.md`.

First run on ~100 projects takes 30–50 min at concurrency 3 with Opus 4.7. Knobs (env vars):

| Var | Default | Purpose |
|---|---|---|
| `PROFILE_MODEL` | `opus` | Model alias passed to `claude -p` |
| `PROFILE_CONCURRENCY` | `3` | Parallel `claude -p` calls |
| `PROFILE_MAX_PROJECTS` | unset | Cap projects (useful for smoke tests) |
| `PROFILE_REBUILD` | unset | Set to `true` to ignore cache |
| `PROFILE_CLAUDE_BIN` | `claude` | Path to the claude binary |

Tell the user to rerun periodically (monthly is plenty) so the profile reflects how they've shifted.

## How to use it during a match

When the file exists, load it once at the start of the session. Then:

- **Bias the `avoid` list** (step 2). The profile's "what to avoid" and "hidden anxieties" sections become candidate entries in `avoid` even when the photos don't surface them. Example: profile says "drained by perpetual small talk" → add `crowded_group_tours` to `avoid` even if photos look social-leaning.
- **Tilt ambiguous vibes** (step 2). If photos read 60% cosy-dinner / 40% lively-bar, let the profile decide which side. The `summary` and aesthetic interpretation should reflect that tilt.
- **Compensate for blind spots** (step 4). If the profile says "won't specify duration or budget — assume 5–7 day mid-to-upper-budget", don't re-ask. If it says "won't ask for downtime but needs it", quietly leave room in your shortlist.
- **Sharpen ranking** (step 6). When two candidates tie on photo-fit, the profile breaks the tie. Lean toward what the profile says they'd "light up for"; demote anything matching their "what to avoid".

## Hard rules

- **Never quote the profile back to the user verbatim.** It's interior monologue, not a horoscope. Use it to *act* differently, not to *announce* what you've decided about them.
- **Never confront the user with the profile.** If the profile says they're anxious about wasted time, don't say "I noticed you're anxious about wasted time"; just pre-book transfers and add buffer.
- **Don't block on the profile.** If `~/.taste-mirror/traveler_profile.md` doesn't exist, proceed without it. You can mention once at the end ("FYI: run `npx tsx scripts/build-profile.ts` from the skill dir to enrich future runs"), but don't nag.
- **Trust but verify.** The profile reflects past behavior; the current vibe and conversation override it. If photos clearly say "high-energy nightlife" but the profile says "drained by social load", trust the photos for *this* trip. The profile is a prior, not a veto.
- **Don't blend the profile into the `vibe_profile` JSON sent to the server.** The server's filter logic only knows about photo-derived vibes. Use the profile to shape what *you* put in `avoid` and how you rank; don't smuggle personality fields the server doesn't understand.
