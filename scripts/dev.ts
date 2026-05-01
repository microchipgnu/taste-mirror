/**
 * Local dev server. Wraps the Vercel handler in a plain Node http server.
 * Used because `vercel dev` requires authenticated project linking, which we
 * don't need for local mock-mode iteration. Production still runs as a real
 * Vercel function — this is a dev-only adapter.
 */
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import handler from "../api/match.js";

// Minimal .env.local loader (no dotenv dep needed for one file).
const envPath = path.resolve(".env.local");
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const k = trimmed.slice(0, eq).trim();
    const v = trimmed.slice(eq + 1).trim();
    if (process.env[k] === undefined) process.env[k] = v;
  }
}

const PORT = Number(process.env.PORT ?? 3000);

const server = http.createServer(async (req, res) => {
  // Only /api/match for now.
  if (!req.url || !req.url.startsWith("/api/match")) {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "not_found" }));
    return;
  }

  // Read body
  const chunks: Buffer[] = [];
  for await (const chunk of req) chunks.push(chunk as Buffer);
  const raw = Buffer.concat(chunks).toString("utf8");
  let body: unknown = undefined;
  if (raw) {
    try {
      body = JSON.parse(raw);
    } catch {
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: "invalid_json" }));
      return;
    }
  }

  // Build a Vercel-shaped req/res. The handler only uses req.method, req.body,
  // res.setHeader, res.status, res.json, res.end — easy to satisfy.
  const vercelReq = Object.assign(req, { body, query: {}, cookies: {} }) as any;
  const vercelRes = Object.assign(res, {
    status(code: number) {
      res.statusCode = code;
      return vercelRes;
    },
    json(payload: unknown) {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(payload));
      return vercelRes;
    },
    send(payload: string) {
      res.end(payload);
      return vercelRes;
    },
  }) as any;

  try {
    await handler(vercelReq, vercelRes);
  } catch (err) {
    if (!res.writableEnded) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: "internal", detail: String(err) }));
    }
  }
});

server.listen(PORT, () => {
  console.log(`▲ taste-mirror dev server listening on http://localhost:${PORT}`);
  console.log(`  POST /api/match  (MOCK_VIATOR=${process.env.MOCK_VIATOR ?? "<unset>"})`);
});
