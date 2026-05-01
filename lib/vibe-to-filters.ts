import type { VibeProfile } from "./types.js";

/**
 * Translate a vibe_profile into Viator /products/search params.
 *
 * The skill emits an aesthetic vocabulary (themes, activity_types, aesthetic
 * descriptors). We split that into two channels:
 *
 *   - `free_text_tags`  → resolved server-side to integer Viator tag IDs
 *                         (lib/viator-tags.ts) and passed as filtering.tags
 *   - `social=intimate` → mapped to filtering.flags=["PRIVATE_TOUR"]
 *
 * The skill keeps the post-filter for aesthetic descriptors that don't
 * have Viator equivalents (golden_hour, warm_tones, uncrowded).
 */

export interface SearchFilters {
  destination: string;
  free_text_tags: string[];
  exclude_tags: string[];
  duration_pref: "short" | "medium" | "long" | "any";
  prefer_private: boolean;
  max_price?: { amount: number; currency: string };
  travelers?: { adults: number; kids_ages: number[] };
  window?: { start_date: string; end_date: string };
}

// Coarse duration buckets in minutes. Conservative by design — the skill
// does fine-grained filtering once it has the candidates back.
export const DURATION_BUCKETS: Record<
  SearchFilters["duration_pref"],
  { from?: number; to?: number }
> = {
  short: { to: 180 },          // ≤ 3h
  medium: { from: 120, to: 360 }, // 2–6h
  long: { from: 240 },         // ≥ 4h
  any: {},
};

const PACE_TO_DURATION: Record<VibeProfile["pace"], SearchFilters["duration_pref"]> = {
  slow: "long",
  ambient: "medium",
  active: "medium",
  intense: "any",
};

export function vibeToFilters(
  vibe: VibeProfile,
  destination: string,
  opts: {
    budget_per_person?: { max: number; currency: string };
    travelers?: { adults: number; kids_ages: number[] };
    window?: { start_local: string; end_local: string };
  } = {},
): SearchFilters {
  const free_text_tags = dedupe([
    ...vibe.themes,
    ...vibe.activity_types,
    ...vibe.aesthetic,
  ]).slice(0, 16);

  const w = opts.window ? toDateWindow(opts.window) : undefined;

  return {
    destination,
    free_text_tags,
    exclude_tags: dedupe(vibe.avoid).slice(0, 8),
    duration_pref: PACE_TO_DURATION[vibe.pace],
    prefer_private: vibe.social === "intimate",
    max_price: opts.budget_per_person
      ? { amount: opts.budget_per_person.max, currency: opts.budget_per_person.currency }
      : undefined,
    travelers: opts.travelers,
    window: w,
  };
}

// The MatchRequest accepts ISO-ish local times; Viator wants YYYY-MM-DD.
// Take the date prefix and trust the caller — bad inputs surface as 4xx
// from Viator rather than silent passthrough.
function toDateWindow(w: { start_local: string; end_local: string }) {
  const start = w.start_local.slice(0, 10);
  const end = w.end_local.slice(0, 10);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(start) || !/^\d{4}-\d{2}-\d{2}$/.test(end)) {
    return undefined;
  }
  return { start_date: start, end_date: end };
}

function dedupe(arr: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const s of arr) {
    const k = s.trim().toLowerCase();
    if (!k || seen.has(k)) continue;
    seen.add(k);
    out.push(s.trim());
  }
  return out;
}
