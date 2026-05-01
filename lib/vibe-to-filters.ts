import type { VibeProfile } from "./types.js";

/**
 * Translate a vibe_profile into Viator /products/search params.
 *
 * Viator's search supports filters like destination, tags, price range, duration,
 * sort order, etc. We build the *intent*; the Viator client maps it to the exact
 * request shape (which we'll verify against the real API tomorrow).
 *
 * Keep this conservative. The skill does the final ranking + reasoning, so the
 * server's job is to surface a relevant set of candidates, not to hyper-optimize.
 */

export interface SearchFilters {
  destination: string;
  free_text_tags: string[];
  exclude_tags: string[];
  duration_pref: "short" | "medium" | "long" | "any";
  group_size_pref: "private_or_small" | "any";
  max_price?: { amount: number; currency: string };
  travelers?: { adults: number; kids_ages: number[] };
  sort: "POPULARITY" | "RATING" | "PRICE_LOW_TO_HIGH";
}

const PACE_TO_DURATION: Record<VibeProfile["pace"], SearchFilters["duration_pref"]> = {
  slow: "long",
  ambient: "medium",
  active: "medium",
  intense: "any",
};

const SOCIAL_TO_GROUP: Record<VibeProfile["social"], SearchFilters["group_size_pref"]> = {
  intimate: "private_or_small",
  small_group: "private_or_small",
  social: "any",
  solo: "any",
};

export function vibeToFilters(
  vibe: VibeProfile,
  destination: string,
  opts: {
    budget_per_person?: { max: number; currency: string };
    travelers?: { adults: number; kids_ages: number[] };
  } = {},
): SearchFilters {
  const free_text_tags = dedupe([
    ...vibe.themes,
    ...vibe.activity_types,
    ...vibe.aesthetic,
  ]).slice(0, 16);

  return {
    destination,
    free_text_tags,
    exclude_tags: dedupe(vibe.avoid).slice(0, 8),
    duration_pref: PACE_TO_DURATION[vibe.pace],
    group_size_pref: SOCIAL_TO_GROUP[vibe.social],
    max_price: opts.budget_per_person
      ? { amount: opts.budget_per_person.max, currency: opts.budget_per_person.currency }
      : undefined,
    travelers: opts.travelers,
    sort: "RATING",
  };
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
