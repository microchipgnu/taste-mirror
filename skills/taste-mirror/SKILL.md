---
name: taste-mirror
description: Use when the user wants travel experiences that match a visual mood or aesthetic — they share images, a Pinterest board, screenshots, mood-board references, or photos from past trips, and want bookable activities that capture the same vibe. Triggers on phrases like "match this vibe to a trip", "find me experiences like these photos", "I want a trip that feels like this", "what should I book in <destination> based on these images", or any message where the user attaches travel-aesthetic images and asks what to do or book.
---

# Taste-Mirror

Turn a visual mood into bookable Viator experiences. The user provides images that capture a vibe; you turn that vibe into a tight shortlist of real, bookable activities at their destination, each with an affiliate link.

You are the vision model and the curator. A small server (`/api/match`) does the Viator plumbing and affiliate-URL generation.

## Server endpoint

```
POST {{TASTE_MIRROR_API}}/api/match
Content-Type: application/json
```

Read the host from the env var `TASTE_MIRROR_API` (set by the user during install). Default to `http://localhost:3000` if unset — useful during local dev.

## When to invoke

Trigger when the user shares (or refers to) **travel-aesthetic images** and asks for activity suggestions. Strong signals:

- Attached or pasted images of landscapes, food, interiors, architecture, scenes from past trips
- A reference to a Pinterest board, mood board, or saved Instagram collection
- Phrases like "match this vibe", "I want a trip like these pictures", "find me things like this in X"

Do **not** invoke when:
- The user just wants generic recommendations for a city (no visual input).
- The user hasn't named or implied a destination — ask once instead of guessing.

## Flow

### 0. Load the traveler profile (once per session)

Read `~/.taste-mirror/traveler_profile.md` if it exists. It's a synthesized portrait of how this user thinks — pace, anxieties, blind spots — built from their Claude Code transcripts. Use it to bias `avoid`, tilt ambiguous vibes, skip questions about things the profile already covers, and break ties at ranking. If missing, proceed without it (don't block). Full usage rules + how to build it: see [references/traveler-profile.md](references/traveler-profile.md).

### 1. Gather images
You need 3–10 images. If the user gave fewer than 3, ask once for more — small samples produce generic vibes that don't differentiate from a stock search.

### 2. Analyze the images yourself
Do NOT call the server for vibe extraction. You have vision; use it. Look across all the images and produce a single `vibe_profile` matching this exact schema:

```json
{
  "themes": ["coastal", "slow_food", "golden_hour"],
  "pace": "slow",
  "social": "intimate",
  "aesthetic": ["warm_tones", "analog", "uncrowded"],
  "activity_types": ["culinary", "nature", "cultural"],
  "avoid": ["mass_tourism", "high_energy"],
  "summary": "Slow, golden-hour-leaning, food + coastal landscapes with an intimate small-group feel."
}
```

Field rules:
- `pace`: one of `slow` | `ambient` | `active` | `intense`
- `social`: one of `intimate` | `small_group` | `social` | `solo`
- `themes`, `activity_types`, `aesthetic`, `avoid`: short lowercase tag-like strings (snake_case if multi-word). 1–8 entries each (`avoid` may be empty).
- `summary`: one sentence, ≤ 50 words, describes the vibe in plain prose.

The `avoid` field is important and often overlooked: if the photos show empty streets and intimate dinners, `mass_tourism` and `high_energy` belong in `avoid`. This is what stops the server returning hop-on/hop-off buses.

### 3. Confirm the vibe with the user
Show the user only the `summary` line, plus a brief read of the visual signals you picked up (one short sentence: "I'm seeing a lot of golden hour, small groups, hands in food"). Ask if that lands or if they want to nudge it ("more food, less hiking"). If they nudge, update the vibe_profile and confirm again — quickly, don't loop.

### 4. Get the destination
If the user hasn't said where they're going, ask. Optional inputs you can also gather in the same turn:
- `window` (start/end local time, if they have a defined slot)
- `budget_per_person` (max + currency)
- `travelers` (adults + kids ages — only ask if there are kids)

Don't ask if not necessary. One short turn, not four questions.

### 5. Call the server
POST the request. **Always request `limit: 15`** so you have room to drop vibe-mismatches in the next step and still present a strong shortlist:

```bash
curl -sS -X POST "${TASTE_MIRROR_API:-http://localhost:3000}/api/match" \
  -H "Content-Type: application/json" \
  -d '{
    "vibe_profile": { ...as above... },
    "destination": "Lisbon",
    "limit": 15
  }'
```

The server returns up to `limit` candidates, each with `affiliate_url`, `title`, `short_description`, `duration_min`, `rating`, `review_count`, `price_from`, `image_url`, and `tags`. Top-rated results in many cities skew toward mass-tourism options (hop-on/hop-off buses, generic city tours) — fetching more candidates gives you headroom to filter those out without ending up with a thin pool.

### 6. Rank
The server gives you a relevant set; **you** pick the top 3 (or up to 5 if the user explicitly wants more) **before** writing reasoning. Skip candidates that don't actually fit the vibe even if the server returned them. Generic mass-tourism options should be omitted, not included as filler.

If the server returns 0 candidates, say so plainly. Don't fabricate.

### 7. Enrich the picks
Once you've chosen, call the enrichment endpoint to pull full Viator detail for *just* the picks. This gives you concrete inclusions, meeting points, accessibility notes, and itinerary type — the difference between "this looks intimate" and "private boat, wine + sunset tasting included, no hotel transfer, free cancellation up to 24h."

```bash
curl -sS -X POST "${TASTE_MIRROR_API:-http://localhost:3000}/api/enrich" \
  -H "Content-Type: application/json" \
  -d '{ "product_codes": ["5010SYDNEY", "21972P3", "..."] }'
```

Each enriched product returns: `title`, `description` (full), `duration_min`, `itinerary_type`, `is_private`, `skip_the_line`, `inclusions[]`, `additional_info[]`, `cancellation_policy_type`, `meeting_point`. Use these to write specific, evidence-based reasoning — quote details, don't paraphrase.

If `/api/enrich` fails or times out, fall back to the `short_description` from the match response. Don't block the whole reply on it.

### 8. Reason, present
For each pick:

- **Title** + duration + price-from
- **Why it fits** — one sentence tying the choice to specific signals from *their* photos, citing concrete details from the enrichment payload where helpful. Example: "Picks up the golden-hour + intimate-small-group signals — private boat (`is_private: true`), wine + sunset tasting included, no transfer."
- **Affiliate link** — the `affiliate_url` from `/api/match`, presented as the booking path. Make it visible and clickable. **Do not modify the URL** — Viator bakes attribution into it; modification breaks commission tracking.

## Anti-patterns

- ❌ Calling `/api/match` without first analyzing the images yourself (no vibe_profile = generic results).
- ❌ Calling `/api/match` more than once for the same vibe + destination (it's deterministic; cache the response in the conversation).
- ❌ Calling `/api/enrich` *before* picking the top 3. Enrich the picks, not the long list — it's wasted requests and longer latency.
- ❌ Modifying the `affiliate_url` (adding/removing query params, shortening). Viator's docs are explicit: the URL must be used as-is or commission attribution breaks.
- ❌ Generic match reasoning ("this is a popular tour"). The reasoning must reference the actual photos.
- ❌ Inventing products. Only present what the server returned.
- ❌ Trying to book, hold inventory, or take payment. The hand-off is the affiliate URL — your job ends there.
- ❌ Asking 4 setup questions in a row. One short turn for confirmation + missing inputs.

## Example interaction

> **User:** *(uploads 6 photos: misty Tuscan vineyards, hands holding olive oil bottles, a small group at a wooden farmhouse table, golden-hour shot of a vespa on a dirt road, close-up of fresh pasta, an empty olive grove at dawn)* "Match this vibe — I'm spending 4 days in Tuscany next month."

> **Skill (you):** "I'm seeing slow, golden-hour, small-group, hands-in-food, rural — warm and uncrowded. Sound right?"

> **User:** "Yes, exactly."

> **Skill (you):** *(POSTs to /api/match with the vibe_profile and `"destination": "Tuscany"`, gets back candidates, picks the top 3)*
>
> "Three picks for Tuscany:
>
> **1. Truffle Hunting + Lunch in Chianti** — 5h, from $145.
> Why: hits the rural + slow + hands-in-food signals — small private hunt, family lunch, no crowds.
> [Book on Viator](affiliate_url)
>
> **2. Sunset Vespa Tour Through Vineyards** — 4h, from $120.
> Why: that vespa-on-a-dirt-road photo basically *is* this product, with a winery at golden hour.
> [Book on Viator](affiliate_url)
>
> **3. Evening Cooking Class in a Montepulciano Farmhouse** — 3.5h, from $130.
> Why: matches the hands-on pasta and farmhouse-table images — intimate, ends in a shared meal.
> [Book on Viator](affiliate_url)"
