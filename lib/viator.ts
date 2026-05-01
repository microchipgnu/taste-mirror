import type { ProductCandidate } from "./types.js";
import type { SearchFilters } from "./vibe-to-filters.js";
import { withAffiliate } from "./affiliate.js";

/**
 * Viator client.
 *
 * Two implementations behind one interface:
 *   - mockSearch:  in-memory fixtures, used when MOCK_VIATOR=true (or no key set)
 *   - liveSearch:  hits Viator Partner API v2 (sandbox or prod via the API key)
 *
 * The real wire shapes will be verified tomorrow against the live sandbox.
 * Until then, liveSearch is written from the public docs and may need
 * tweaking — the mock path is what we develop against today.
 */

export interface ViatorClient {
  search(filters: SearchFilters, limit: number): Promise<ProductCandidate[]>;
}

export function getViatorClient(): ViatorClient {
  const useMock =
    process.env.MOCK_VIATOR === "true" || !process.env.VIATOR_API_KEY;
  return useMock ? new MockViatorClient() : new LiveViatorClient();
}

// ──────────────────────────────────────────────────────────────────────
// Live client (verify against real API tomorrow)
// ──────────────────────────────────────────────────────────────────────

const VIATOR_BASE = process.env.VIATOR_BASE_URL || "https://api.sandbox.viator.com/partner";

class LiveViatorClient implements ViatorClient {
  async search(filters: SearchFilters, limit: number): Promise<ProductCandidate[]> {
    const apiKey = process.env.VIATOR_API_KEY;
    if (!apiKey) throw new Error("VIATOR_API_KEY not set");

    const destId = await this.resolveDestination(filters.destination, apiKey);
    if (!destId) return [];

    // Note: Viator expects integer tag IDs in `filtering.tags`. We deliberately
    // omit tag filtering — the skill does post-filtering against vibe + avoid.
    const body = {
      filtering: {
        destination: destId,
        ...(filters.max_price && { highestPrice: filters.max_price.amount }),
      },
      sorting: { sort: "TRAVELER_RATING", order: "DESCENDING" },
      pagination: { start: 1, count: Math.min(limit, 20) },
      currency: filters.max_price?.currency ?? "USD",
    };

    const res = await fetch(`${VIATOR_BASE}/products/search`, {
      method: "POST",
      headers: this.headers(apiKey),
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      throw new Error(`Viator search failed: ${res.status} ${await res.text()}`);
    }
    const data = (await res.json()) as ViatorSearchResponse;
    return (data.products ?? []).map((p) => mapViatorProduct(p, filters.destination));
  }

  private async resolveDestination(name: string, apiKey: string): Promise<number | null> {
    const all = await this.getDestinations(apiKey);
    if (!all) return null;
    const needle = name.trim().toLowerCase();

    // Prefer IATA match (covers airports like "LIS"), then exact name, then substring.
    const iata = all.find((d) => d.iataCodes?.some((c) => c.toLowerCase() === needle));
    if (iata) return iata.destinationId;

    const exact = all.find((d) => d.name.toLowerCase() === needle);
    if (exact) return exact.destinationId;

    const partial = all.find((d) => d.name.toLowerCase().includes(needle));
    return partial?.destinationId ?? null;
  }

  private async getDestinations(apiKey: string): Promise<ViatorDestination[] | null> {
    if (DESTINATIONS_CACHE) return DESTINATIONS_CACHE;
    try {
      const res = await fetch(`${VIATOR_BASE}/destinations`, {
        method: "GET",
        headers: this.headers(apiKey),
      });
      if (!res.ok) return null;
      const data = (await res.json()) as { destinations?: ViatorDestination[] };
      DESTINATIONS_CACHE = data.destinations ?? [];
      return DESTINATIONS_CACHE;
    } catch {
      return null;
    }
  }

  private headers(apiKey: string): Record<string, string> {
    return {
      "exp-api-key": apiKey,
      "Accept": "application/json;version=2.0",
      "Accept-Language": "en-US",
      "Content-Type": "application/json",
    };
  }
}

interface ViatorSearchResponse {
  products?: ViatorProduct[];
  totalCount?: number;
}

interface ViatorDestination {
  destinationId: number;
  name: string;
  type?: string;
  iataCodes?: string[];
}

let DESTINATIONS_CACHE: ViatorDestination[] | null = null;

interface ViatorProduct {
  productCode: string;
  title: string;
  description?: string;
  duration?: { fixedDurationInMinutes?: number };
  reviews?: { combinedAverageRating?: number; totalReviews?: number };
  pricing?: { summary?: { fromPrice?: number }; currency?: string };
  images?: Array<{ variants?: Array<{ url: string; width: number; height: number }> }>;
  tags?: number[];
  productUrl?: string;
}

function mapViatorProduct(p: ViatorProduct, destination: string): ProductCandidate {
  const sourceUrl = p.productUrl ?? `https://www.viator.com/tours/${p.productCode}`;
  const image =
    p.images?.[0]?.variants?.find((v) => v.width >= 480)?.url ??
    p.images?.[0]?.variants?.[0]?.url ??
    null;

  return {
    product_id: p.productCode,
    title: p.title,
    short_description: (p.description ?? "").slice(0, 300),
    duration_min: p.duration?.fixedDurationInMinutes ?? null,
    rating: p.reviews?.combinedAverageRating ?? null,
    review_count: p.reviews?.totalReviews ?? null,
    price_from:
      p.pricing?.summary?.fromPrice != null
        ? { amount: p.pricing.summary.fromPrice, currency: p.pricing.currency ?? "USD" }
        : null,
    image_url: image,
    tags: [],
    destination,
    source_url: sourceUrl,
    affiliate_url: withAffiliate(sourceUrl),
  };
}

// ──────────────────────────────────────────────────────────────────────
// Mock client — used today (and as a fallback)
// ──────────────────────────────────────────────────────────────────────

class MockViatorClient implements ViatorClient {
  async search(filters: SearchFilters, limit: number): Promise<ProductCandidate[]> {
    const destKey = filters.destination.trim().toLowerCase();
    const pool = MOCK_PRODUCTS[destKey] ?? MOCK_PRODUCTS["__default__"]!;

    // Light pseudo-relevance: bump items whose tags share words with the
    // requested free_text_tags so the mock feels responsive to vibe inputs.
    const tagSet = new Set(filters.free_text_tags.map((t) => t.toLowerCase()));
    const avoidSet = new Set(filters.exclude_tags.map((t) => t.toLowerCase()));

    const ranked = pool
      .filter((p) => !p.tags.some((t) => avoidSet.has(t.toLowerCase())))
      .map((p) => {
        const overlap = p.tags.filter((t) => tagSet.has(t.toLowerCase())).length;
        return { p, score: overlap + (p.rating ?? 0) / 5 };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(({ p }) => ({
        ...p,
        destination: filters.destination,
        affiliate_url: withAffiliate(p.source_url),
      }));

    return ranked;
  }
}

function mockProduct(
  id: string,
  title: string,
  description: string,
  durationMin: number,
  rating: number,
  reviews: number,
  priceUSD: number,
  tags: string[],
  destSlug: string,
  imageId: number,
): ProductCandidate {
  const sourceUrl = `https://www.viator.com/tours/${destSlug}/${id}`;
  return {
    product_id: id,
    title,
    short_description: description,
    duration_min: durationMin,
    rating,
    review_count: reviews,
    price_from: { amount: priceUSD, currency: "USD" },
    image_url: `https://picsum.photos/seed/${imageId}/640/420`,
    tags,
    destination: destSlug,
    source_url: sourceUrl,
    affiliate_url: withAffiliate(sourceUrl),
  };
}

const MOCK_PRODUCTS: Record<string, ProductCandidate[]> = {
  lisbon: [
    mockProduct(
      "lis-fado-dinner",
      "Intimate Fado Dinner in Alfama",
      "A small-group evening of live fado music and traditional Portuguese cuisine in a candlelit Alfama tavern.",
      150,
      4.9,
      842,
      78,
      ["food", "music", "intimate", "small_group", "warm_tones", "evening", "cultural"],
      "lisbon",
      11,
    ),
    mockProduct(
      "lis-tile-tour",
      "Hidden Azulejos Walking Tour",
      "Slow-paced walking tour of Lisbon's lesser-known tiled facades and courtyards with a local design historian.",
      180,
      4.8,
      612,
      45,
      ["walking", "design", "slow", "uncrowded", "cultural", "analog"],
      "lisbon",
      12,
    ),
    mockProduct(
      "lis-sunset-sail",
      "Sunset Sailboat with Wine Tasting",
      "Golden-hour sail along the Tagus on a small wooden sailboat with Portuguese wines and small bites.",
      120,
      4.9,
      1280,
      65,
      ["coastal", "golden_hour", "intimate", "small_group", "wine", "warm_tones"],
      "lisbon",
      13,
    ),
    mockProduct(
      "lis-pasteis-class",
      "Pastéis de Nata Cooking Class",
      "Hands-on small-group class baking Portugal's iconic custard tart in a traditional Belém-style oven.",
      120,
      4.8,
      934,
      55,
      ["food", "culinary", "hands_on", "small_group", "traditional"],
      "lisbon",
      14,
    ),
    mockProduct(
      "lis-tuktuk",
      "Lisbon Highlights by Tuk-Tuk (Group)",
      "Energetic group tuk-tuk tour hitting Lisbon's main viewpoints and landmarks in three fast-paced hours.",
      180,
      4.4,
      2100,
      35,
      ["mass_tourism", "high_energy", "social", "popular"],
      "lisbon",
      15,
    ),
  ],
  tuscany: [
    mockProduct(
      "tus-truffle-hunt",
      "Truffle Hunting + Lunch in Chianti",
      "Half-day truffle hunt in a private Chianti forest followed by a leisurely farmhouse lunch with the family.",
      300,
      4.95,
      540,
      145,
      ["food", "nature", "slow", "intimate", "rural", "culinary", "warm_tones"],
      "tuscany",
      21,
    ),
    mockProduct(
      "tus-vespa-vineyard",
      "Sunset Vespa Tour Through Vineyards",
      "Self-driven Vespa convoy through Chianti vineyards ending at a hilltop winery for golden-hour tastings.",
      240,
      4.9,
      710,
      120,
      ["golden_hour", "wine", "coastal", "small_group", "active", "warm_tones"],
      "tuscany",
      22,
    ),
    mockProduct(
      "tus-pasta-class",
      "Evening Cooking Class in a Montepulciano Farmhouse",
      "Hands-on pasta and tiramisu class in a 16th-century farmhouse, dining with the host family afterward.",
      210,
      4.95,
      980,
      130,
      ["food", "culinary", "intimate", "hands_on", "rural", "traditional", "small_group"],
      "tuscany",
      23,
    ),
    mockProduct(
      "tus-siena-bus",
      "Florence + Siena Big Bus Day Trip",
      "Full-day group coach trip covering Florence and Siena highlights with a guided lunch stop.",
      540,
      4.2,
      3500,
      99,
      ["mass_tourism", "high_energy", "popular"],
      "tuscany",
      24,
    ),
    mockProduct(
      "tus-olive-grove",
      "Private Olive Grove Picnic at Sunset",
      "A quiet two-hour picnic in a working olive grove with curated local cheeses, oils, and breads.",
      120,
      4.9,
      305,
      90,
      ["slow", "intimate", "golden_hour", "rural", "food", "uncrowded"],
      "tuscany",
      25,
    ),
  ],
  __default__: [
    mockProduct(
      "gen-walking-food",
      "Local Food Walking Tour",
      "Small-group walking tour through a local market and tasting stops at family-run spots.",
      180,
      4.7,
      420,
      55,
      ["food", "walking", "small_group", "cultural"],
      "city",
      31,
    ),
    mockProduct(
      "gen-evening-cooking",
      "Evening Cooking Class with a Local Chef",
      "Hands-on regional cooking class in an intimate kitchen, ending in a shared meal.",
      210,
      4.8,
      610,
      78,
      ["food", "culinary", "hands_on", "intimate", "small_group"],
      "city",
      32,
    ),
    mockProduct(
      "gen-sunset-walk",
      "Sunset Photo Walk",
      "Two-hour guided photo walk through quiet neighborhoods at golden hour.",
      120,
      4.8,
      290,
      45,
      ["golden_hour", "slow", "photography", "uncrowded", "warm_tones"],
      "city",
      33,
    ),
    mockProduct(
      "gen-bigbus",
      "Hop-On Hop-Off Bus Tour",
      "All-day group bus tour with a recorded audio guide hitting all major sights.",
      480,
      4.1,
      4800,
      40,
      ["mass_tourism", "high_energy", "popular"],
      "city",
      34,
    ),
  ],
};
