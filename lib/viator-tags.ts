/**
 * Viator tag dictionary — fetched once from /products/tags, cached in-memory,
 * used to translate the skill's free-text vibe vocabulary into the integer
 * tag IDs that /products/search expects.
 *
 * Viator's tag tree has thousands of entries. We don't try to match every
 * vibe word — we keep a curated synonym table for the categorical signals
 * the skill consistently emits (food, wine, walking, nature, etc.) and
 * silently drop the rest. The skill's post-filter handles aesthetic
 * descriptors ("golden_hour", "warm_tones", "uncrowded") that don't have
 * Viator equivalents.
 *
 * Filtering by `tags` is AND in Viator's API, so over-mapping kills recall.
 * mapVibeToTagIds returns at most MAX_TAGS to keep the search forgiving.
 */

const MAX_TAGS = 2;

interface ViatorTag {
  tagId: number;
  parentTagIds?: number[];
  allNamesByLocale?: Record<string, string>;
}

interface TagsResponse {
  tags: ViatorTag[];
}

type TagCache = { byNormalizedName: Map<string, number> };

let CACHE: TagCache | null = null;
let inflight: Promise<TagCache> | null = null;

/**
 * Vibe-string → list of candidate Viator tag names (English). The first
 * candidate that resolves wins. Names are normalized before lookup so
 * casing/punctuation doesn't matter.
 */
const SYNONYMS: Record<string, string[]> = {
  // food / culinary
  food: ["food, wine & nightlife", "food tours", "cooking classes"],
  culinary: ["cooking classes", "food tours"],
  cooking: ["cooking classes"],
  gastronomy: ["food tours", "cooking classes"],
  slow_food: ["food tours"],
  street_food: ["food tours"],
  market: ["food tours"],
  // drink
  wine: ["wine tasting", "wine tours & tastings"],
  winery: ["wine tasting", "wine tours & tastings"],
  beer: ["beer & brewery tours"],
  cocktails: ["bar, club & pub tours"],
  // outdoor / nature
  nature: ["nature & wildlife", "outdoor activities"],
  wildlife: ["nature & wildlife"],
  hiking: ["hiking tours", "walking tours"],
  outdoor: ["outdoor activities"],
  rural: ["nature & wildlife"],
  forest: ["nature & wildlife"],
  // water
  coastal: ["sailing", "boat tours", "day cruises"],
  beach: ["beach tours"],
  sailing: ["sailing"],
  boat: ["boat tours", "day cruises"],
  ocean: ["sailing", "day cruises"],
  river: ["river cruises"],
  // movement
  walking: ["walking tours"],
  bike: ["bike tours"],
  cycling: ["bike tours"],
  vespa: ["vespa, scooter & moped tours"],
  // culture
  cultural: ["cultural tours"],
  history: ["historical tours"],
  art: ["art tours"],
  museum: ["museum tickets & passes"],
  architecture: ["architecture tours"],
  music: ["concerts & shows"],
  // city
  photography: ["photography tours"],
  // wellness
  wellness: ["spas"],
  spa: ["spas"],
};

function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[_-]+/g, " ")
    .replace(/[^a-z0-9 &,]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

async function loadTagDictionary(
  _apiKey: string,
  baseUrl: string,
  headers: Record<string, string>,
): Promise<TagCache> {
  if (CACHE) return CACHE;
  if (inflight) return inflight;

  inflight = (async (): Promise<TagCache> => {
    const res = await fetch(`${baseUrl}/products/tags`, {
      method: "GET",
      headers,
    });
    if (!res.ok) {
      throw new Error(`/products/tags failed: ${res.status} ${await res.text()}`);
    }
    const data = (await res.json()) as TagsResponse;
    const byNormalizedName = new Map<string, number>();
    for (const tag of data.tags ?? []) {
      const en = tag.allNamesByLocale?.en;
      if (!en) continue;
      const key = normalize(en);
      if (!byNormalizedName.has(key)) byNormalizedName.set(key, tag.tagId);
    }
    CACHE = { byNormalizedName };
    return CACHE;
  })();

  try {
    return await inflight;
  } finally {
    inflight = null;
  }
}

/**
 * Resolve a vibe-string to a Viator tagId, or null if no synonym matches.
 * Tries the synonym table first; falls back to a direct normalized-name
 * match against the tag dictionary.
 */
function resolveOne(vibe: string, dict: Map<string, number>): number | null {
  const key = normalize(vibe);
  const candidates = SYNONYMS[vibe.toLowerCase()] ?? SYNONYMS[key.replace(/ /g, "_")] ?? [vibe];
  for (const c of candidates) {
    const id = dict.get(normalize(c));
    if (id) return id;
  }
  // last-ditch: direct match against dict
  return dict.get(key) ?? null;
}

export interface VibeTagMapping {
  tagIds: number[];
  matched: { vibe: string; tagId: number }[];
  unmatched: string[];
}

export async function mapVibeToTagIds(
  vibeStrings: string[],
  ctx: { apiKey: string; baseUrl: string; headers: Record<string, string> },
): Promise<VibeTagMapping> {
  let dict: Map<string, number>;
  try {
    const cache = await loadTagDictionary(ctx.apiKey, ctx.baseUrl, ctx.headers);
    dict = cache.byNormalizedName;
  } catch {
    return { tagIds: [], matched: [], unmatched: vibeStrings };
  }

  const matched: { vibe: string; tagId: number }[] = [];
  const unmatched: string[] = [];
  const seen = new Set<number>();

  for (const v of vibeStrings) {
    if (matched.length >= MAX_TAGS) {
      unmatched.push(v);
      continue;
    }
    const id = resolveOne(v, dict);
    if (id && !seen.has(id)) {
      seen.add(id);
      matched.push({ vibe: v, tagId: id });
    } else {
      unmatched.push(v);
    }
  }

  return { tagIds: matched.map((m) => m.tagId), matched, unmatched };
}

// Test-only: reset the in-memory cache between runs.
export function _resetTagCache(): void {
  CACHE = null;
  inflight = null;
}
