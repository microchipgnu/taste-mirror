import type { VercelRequest, VercelResponse } from "@vercel/node";
import { z } from "zod";
import { getViatorClient, type ViatorProductDetail } from "../lib/viator.js";

/**
 * /api/enrich
 *
 * The skill calls /api/match, picks the top 2-3 candidates itself, then calls
 * this endpoint with their product codes. We fetch full product detail and
 * return a curated subset the skill can use to write specific, evidence-based
 * "why it fits" reasoning (inclusions, itinerary highlights, accessibility
 * notes) without dumping Viator's full payload back through the agent.
 */

const RequestSchema = z.object({
  product_codes: z.array(z.string().min(1).max(64)).min(1).max(5),
});

interface EnrichedProduct {
  product_code: string;
  title: string | null;
  description: string | null;
  duration_min: number | null;
  itinerary_type: string | null;
  is_private: boolean | null;
  skip_the_line: boolean | null;
  inclusions: string[];
  additional_info: string[];
  cancellation_policy_type: string | null;
  meeting_point: string | null;
  destinations: string[];
  source_url: string | null;
  raw_tags: number[];
}

function summarizeInclusion(
  i: NonNullable<ViatorProductDetail["inclusions"]>[number],
): string | null {
  // Prefer the most specific human-readable string. Viator gives one or more
  // of: description (specific), otherDescription (free-text), typeDescription
  // (the enum's natural-language label).
  const text =
    (i as { description?: string }).description ||
    (i as { otherDescription?: string }).otherDescription ||
    (i as { typeDescription?: string }).typeDescription ||
    null;
  return text ? text.trim() : null;
}

function mapDetail(p: ViatorProductDetail & Record<string, any>): EnrichedProduct {
  const inclusions = (p.inclusions ?? [])
    .map(summarizeInclusion)
    .filter((s): s is string => !!s)
    .slice(0, 12);

  const additional = (p.additionalInfo ?? [])
    .map((a: any) => a?.description)
    .filter((s: unknown): s is string => typeof s === "string" && !!s.trim())
    .slice(0, 8);

  const meetingPoint =
    p.logistics?.start?.[0]?.description?.split("\n")[0]?.trim() || null;

  const itinerary = p.itinerary as
    | {
        itineraryType?: string;
        privateTour?: boolean;
        skipTheLine?: boolean;
        duration?: {
          fixedDurationInMinutes?: number;
          variableDurationFromMinutes?: number;
        };
      }
    | undefined;

  const duration = itinerary?.duration ?? p.duration;
  const durationMin =
    duration?.fixedDurationInMinutes ??
    duration?.variableDurationFromMinutes ??
    null;

  const destinations = (p.destinations ?? [])
    .map((d: any) => d?.ref ?? d?.name ?? null)
    .filter((s: unknown): s is string => typeof s === "string");

  return {
    product_code: p.productCode,
    title: p.title ?? null,
    description: p.description ?? null,
    duration_min: durationMin,
    itinerary_type: itinerary?.itineraryType ?? null,
    is_private: itinerary?.privateTour ?? null,
    skip_the_line: itinerary?.skipTheLine ?? null,
    inclusions,
    additional_info: additional,
    cancellation_policy_type:
      (p.cancellationPolicy as { type?: string } | undefined)?.type ?? null,
    meeting_point: meetingPoint,
    destinations,
    source_url: p.productUrl ?? null,
    raw_tags: (p.tags ?? []) as number[],
  };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "method_not_allowed" });

  const parsed = RequestSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "invalid_request", issues: parsed.error.issues });
  }

  const client = getViatorClient();
  if (!client.getProduct) {
    return res.status(500).json({ error: "client_missing_getProduct" });
  }

  try {
    const results = await Promise.all(
      parsed.data.product_codes.map(async (code) => {
        const p = await client.getProduct!(code);
        return p ? mapDetail(p as any) : { product_code: code, error: "not_found" as const };
      }),
    );

    return res.status(200).json({
      products: results,
      meta: {
        mock: process.env.MOCK_VIATOR === "true" || !process.env.VIATOR_API_KEY,
        count: results.length,
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "unknown_error";
    return res.status(502).json({ error: "viator_upstream_failure", detail: message });
  }
}
