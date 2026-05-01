import { z } from "zod";

export const VibeProfileSchema = z.object({
  themes: z.array(z.string()).min(1).max(12),
  pace: z.enum(["slow", "ambient", "active", "intense"]),
  social: z.enum(["intimate", "small_group", "social", "solo"]),
  aesthetic: z.array(z.string()).max(12).default([]),
  activity_types: z.array(z.string()).min(1).max(8),
  avoid: z.array(z.string()).max(12).default([]),
  summary: z.string().min(1).max(400),
});

export const MatchRequestSchema = z.object({
  vibe_profile: VibeProfileSchema,
  destination: z.string().min(1).max(120),
  window: z
    .object({
      start_local: z.string(),
      end_local: z.string(),
      timezone: z.string().optional(),
    })
    .optional(),
  budget_per_person: z
    .object({
      max: z.number().positive(),
      currency: z.string().length(3),
    })
    .optional(),
  travelers: z
    .object({
      adults: z.number().int().min(1).max(20),
      kids_ages: z.array(z.number().int().min(0).max(17)).default([]),
    })
    .optional(),
  limit: z.number().int().min(1).max(20).default(8),
});

export type VibeProfile = z.infer<typeof VibeProfileSchema>;
export type MatchRequest = z.infer<typeof MatchRequestSchema>;

export interface ProductCandidate {
  product_id: string;
  title: string;
  short_description: string;
  duration_min: number | null;
  rating: number | null;
  review_count: number | null;
  price_from: { amount: number; currency: string } | null;
  image_url: string | null;
  tags: string[];
  destination: string;
  source_url: string;
  affiliate_url: string;
}

export interface MatchResponse {
  destination: string;
  vibe_summary: string;
  candidates: ProductCandidate[];
  meta: {
    mock: boolean;
    candidate_count: number;
    filters_applied: Record<string, unknown>;
  };
}
