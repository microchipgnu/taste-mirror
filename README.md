# Taste-Mirror

A Claude skill + Viator-backed API that turns a visual mood into bookable travel experiences.

User shows the agent a handful of travel-aesthetic images (Pinterest, screenshots, photos from past trips). The skill extracts the vibe in-context (using the model's vision), confirms it with the user, asks for a destination, and returns a tight shortlist of real Viator activities that match — each with an affiliate link.

Built for the Viator Travel Tech hackathon. **Affiliate model only** — the skill curates, the user clicks out to Viator to book.

## Architecture

```
┌──────────────────────┐                        ┌────────────────────────┐
│  Agent harness       │   POST /api/match      │  Vercel Function       │
│  (Claude Code, etc.) │──────────────────────▶ │  • Viator search       │
│  + SKILL.md          │   { vibe_profile,      │  • affiliate URL inj.  │
│  • vision analysis   │     destination, ... } │  • holds API key       │
│  • match reasoning   │ ◀──────────────────────│                        │
└──────────────────────┘   ranked candidates    └────────────────────────┘
```

The skill does the *thinking* (vision analysis, vibe distillation, ranking, reasoning, presentation). The server does the *plumbing* (Viator search, affiliate URL injection, holds the API key).

## Repo layout

```
api/match.ts             # POST: vibe + destination → ranked Viator candidates
api/enrich.ts            # POST: product codes → full Viator detail (inclusions, etc.)
lib/types.ts             # shared types + zod schemas
lib/viator.ts            # Viator client (mock + live; uses productUrl as-is)
lib/viator-tags.ts       # /products/tags cache + vibe → tag-id mapping
lib/vibe-to-filters.ts   # vibe_profile → search params
lib/affiliate.ts         # mock-only affiliate URL builder (live uses Viator's productUrl)
skills/taste-mirror/SKILL.md       # the deliverable — what users install
skills/taste-mirror/references/    # detailed docs loaded on demand
skills/taste-mirror/scripts/       # bundled helpers (e.g. traveler-profile builder)
```

The server hits four Viator endpoints: `GET /destinations` (cached, name → ID),
`GET /products/tags` (cached, vibe vocab → tag IDs), `POST /products/search`
(filtered by tags + flags + duration + window + price), and `GET /products/{product-code}`
(detail enrichment for the skill's top 3 picks).

## Local dev

```bash
npm install
cp .env.example .env.local
# leave MOCK_VIATOR=true until you have a Viator API key
npx vercel dev --listen 3000
```

Vercel will serve at `http://localhost:3000`. Smoke-test the endpoint:

```bash
curl -sS -X POST http://localhost:3000/api/match \
  -H "Content-Type: application/json" \
  -d '{
    "vibe_profile": {
      "themes": ["coastal", "slow_food", "golden_hour"],
      "pace": "slow",
      "social": "intimate",
      "aesthetic": ["warm_tones", "uncrowded"],
      "activity_types": ["culinary", "nature"],
      "avoid": ["mass_tourism", "high_energy"],
      "summary": "Slow, golden-hour-leaning, food + coastal landscapes."
    },
    "destination": "Lisbon",
    "limit": 5
  }' | jq
```

Expect 4 candidates (the mass-tourism tuk-tuk should be filtered out by `avoid`).

## Switching to the real Viator API

Tomorrow, when the sandbox API key arrives:

```bash
# .env.local
MOCK_VIATOR=false
VIATOR_API_KEY=<paste sandbox key>
VIATOR_PARTNER_ID=<partner id>
VIATOR_MCID=42383
```

The live client (`lib/viator.ts`) is written from the public docs but unverified. Expect to tweak the request/response shape against the real sandbox — the mock contract is what the rest of the stack depends on, so changes stay isolated to that one file.

## Deploying

```bash
vercel       # link the project, first deploy
vercel env add VIATOR_API_KEY
vercel env add VIATOR_PARTNER_ID
vercel env add VIATOR_MCID
vercel --prod
```

Then set the public URL as `TASTE_MIRROR_API` in the skill install instructions.

## Installing the skill

### Recommended: via [skills.sh](https://skills.sh)

```bash
npx skills add <owner>/<repo>
```

This pulls `skills/taste-mirror/` (SKILL.md + `references/` + `scripts/`) into your agent's skill directory automatically (e.g. `~/.claude/skills/taste-mirror/` for Claude Code). Then point the skill at your deployed server:

```bash
echo 'export TASTE_MIRROR_API=https://<your-vercel-url>' >> ~/.zshrc
```

Restart your agent. The skill triggers when you share travel-aesthetic images and ask for matching experiences.

### Manual install

```bash
mkdir -p ~/.claude/skills
cp -R skills/taste-mirror ~/.claude/skills/taste-mirror
echo 'export TASTE_MIRROR_API=https://<your-vercel-url>' >> ~/.zshrc
```

### Optional: build the traveler profile

For sharper recommendations the skill can read `~/.taste-mirror/traveler_profile.md` — a synthesized portrait of the user distilled from their Claude Code transcripts. Build it with the script bundled in the skill (uses your existing Claude Code auth, **no extra API key**):

```bash
npx tsx ~/.claude/skills/taste-mirror/scripts/build-profile.ts
```

First invocation downloads `tsx` (~1 min, then cached). First profile build takes ~30–50 min for ~100 projects at default settings; subsequent runs are nearly instant for unchanged transcripts. See [`skills/taste-mirror/references/traveler-profile.md`](skills/taste-mirror/references/traveler-profile.md) for knobs and rules.

## Submission checklist (hackathon)

- [x] Working integration with the Viator Partner API (live client written; sandbox swap-in tomorrow)
- [ ] Brief description of project + how Viator's data enhances it (drafted in this README)
- [ ] Demo video (≤ 3 min) showing end-to-end flow
- [ ] GitHub repo with code + setup instructions
