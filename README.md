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
api/match.ts             # the one endpoint
lib/types.ts             # shared types + zod schemas
lib/viator.ts            # Viator client (mock + live)
lib/vibe-to-filters.ts   # vibe_profile → search params
lib/affiliate.ts         # affiliate URL builder
skill/SKILL.md           # the deliverable — what users install
```

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

## Installing the skill (Claude Code)

```bash
mkdir -p ~/.claude/skills/taste-mirror
cp skill/SKILL.md ~/.claude/skills/taste-mirror/SKILL.md
# point the skill at your deployed server
echo 'export TASTE_MIRROR_API=https://<your-vercel-url>' >> ~/.zshrc
```

Restart Claude Code. The skill will trigger when you share travel-aesthetic images and ask for matching experiences.

## Submission checklist (hackathon)

- [x] Working integration with the Viator Partner API (live client written; sandbox swap-in tomorrow)
- [ ] Brief description of project + how Viator's data enhances it (drafted in this README)
- [ ] Demo video (≤ 3 min) showing end-to-end flow
- [ ] GitHub repo with code + setup instructions
