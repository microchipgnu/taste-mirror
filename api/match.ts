import type { VercelRequest, VercelResponse } from "@vercel/node";
import { MatchRequestSchema, type MatchResponse } from "../lib/types.js";
import { vibeToFilters } from "../lib/vibe-to-filters.js";
import { getViatorClient } from "../lib/viator.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS — let any agent harness call this from anywhere.
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }
  if (req.method !== "POST") {
    return res.status(405).json({ error: "method_not_allowed" });
  }

  const parsed = MatchRequestSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({
      error: "invalid_request",
      issues: parsed.error.issues,
    });
  }

  const { vibe_profile, destination, budget_per_person, travelers, window, limit } = parsed.data;

  const filters = vibeToFilters(vibe_profile, destination, {
    budget_per_person,
    travelers,
    window,
  });

  try {
    const client = getViatorClient();
    const candidates = await client.search(filters, limit);

    const response: MatchResponse = {
      destination,
      vibe_summary: vibe_profile.summary,
      candidates,
      meta: {
        mock: process.env.MOCK_VIATOR === "true" || !process.env.VIATOR_API_KEY,
        candidate_count: candidates.length,
        filters_applied: {
          free_text_tags: filters.free_text_tags,
          exclude_tags: filters.exclude_tags,
          duration_pref: filters.duration_pref,
          prefer_private: filters.prefer_private,
          window: filters.window,
        },
      },
    };

    return res.status(200).json(response);
  } catch (err) {
    const message = err instanceof Error ? err.message : "unknown_error";
    return res.status(502).json({ error: "viator_upstream_failure", detail: message });
  }
}
