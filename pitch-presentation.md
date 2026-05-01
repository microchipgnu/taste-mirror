# Taste-Mirror

**Turn a vibe into a bookable trip.**

Show Claude a Pinterest board, a few screenshots, or photos from a past trip — get a tight shortlist of real Viator experiences that match the *feeling*, not the keyword.

---

## The 30-second pitch

> Travel search is broken because we search with **words** but plan with **taste**.
>
> You don't know you want "small-group olive oil tasting in rural Chianti." You know you want **that vibe** — the one in the six photos you just saved.
>
> Taste-Mirror reads the vibe straight from your images and hands you bookable Viator experiences that match it. No keywords. No 40-tab Pinterest-to-Google translation.

---

## The problem

- Taste is **visual**. Travel search is **textual**.
- Travelers spend hours translating mood-boards into search queries — and lose the vibe in the translation.
- "Top things to do in Lisbon" returns the same hop-on/hop-off bus to everyone, regardless of who's asking.
- The gap between *inspiration* (Pinterest, IG saves, screenshots) and *booking* (Viator) is a manual, lossy human step.

## The insight

The frontier model is already a world-class vision system. **The vibe extraction shouldn't be an API call — it should happen inside the agent itself.**

So we built Taste-Mirror as a **Claude Skill** — not a website, not an app. It lives where the user is already pasting their inspiration.

---

## How it works

```
┌─────────────────────┐                        ┌──────────────────────┐
│  Claude (the agent) │   POST /api/match      │  Vercel Function     │
│  + Taste-Mirror     │──────────────────────▶ │  • Viator search     │
│    skill            │   { vibe_profile,      │  • affiliate URL     │
│                     │     destination }      │  • holds API key     │
│  • vision analysis  │ ◀──────────────────────│                      │
│  • vibe distillation│   ranked candidates    │                      │
│  • ranking + reason │                        │                      │
└─────────────────────┘                        └──────────────────────┘
```

**The skill does the thinking.** Vision, vibe distillation, ranking, reasoning, presentation.
**The server does the plumbing.** Viator Partner API, affiliate URL generation, API key custody.

### The flow (live demo path)

1. **User drops 6 photos** — misty vineyards, hands holding olive oil, a group around a farmhouse table, vespa on a dirt road.
2. **Claude reads the vibe** — `slow`, `intimate`, `golden_hour`, `culinary`, `rural`. Avoid: `mass_tourism`, `high_energy`.
3. **Confirms in one line** — *"Slow, golden-hour, hands-in-food, rural. Sound right?"*
4. **Asks the destination** — "4 days in Tuscany."
5. **Calls Viator via our server** — gets 15 candidates, drops the bus tours, picks the top 3.
6. **Enriches the picks** — pulls inclusions, private vs. group, meeting point, cancellation policy.
7. **Presents 3 picks** — each with concrete reasoning ("the vespa-on-a-dirt-road photo basically *is* this product") and a clickable Viator affiliate link.

---

## What's actually built

- ✅ **Claude Skill** (`SKILL.md` + references) — installable in any Claude Code / Claude.ai surface that supports skills.
- ✅ **`/api/match`** — Vercel function: vibe + destination → ranked Viator candidates.
- ✅ **`/api/enrich`** — full product detail for the top picks (inclusions, meeting points, private/group, policy).
- ✅ **Live Viator Partner API integration** — `/destinations`, `/products/tags`, `/products/search`, `/products/{code}`.
- ✅ **Affiliate-correct** — Viator's `productUrl` is passed through *as-is*. Commission attribution intact.
- ✅ **Optional traveler profile** — synthesized from the user's Claude Code transcripts to bias `avoid` and break ties. No extra API key. ~30 min one-time build.

---

## Why this is the right shape for Viator

- **Affiliate-pure.** We curate. Viator books. Zero inventory or payments to manage.
- **Demand at the top of funnel.** Inspiration is where users *are* — we meet them there and route to Viator's catalog.
- **The vibe is the moat.** Generic city searches commodify the catalog. Vibe-matched picks surface the long tail — private boats, intimate cooking classes, quiet sunrise hikes — exactly the products with the best margins and worst keyword discoverability.
- **Distribution = the agent.** Every Claude user is a potential Taste-Mirror user. No app to install, no website to remember.

---

## Demo (≤ 3 min)

1. **(0:00–0:20) The hook.** "Search by keyword → bus tour. Search by vibe → this." Side-by-side.
2. **(0:20–1:30) The flow.** Drop 6 Tuscany mood photos in Claude. Watch the vibe come back, confirm, name the destination.
3. **(1:30–2:30) The result.** 3 picks, each with reasoning that *cites the photos*. Click through to a real Viator product page.
4. **(2:30–3:00) The architecture.** One slide: skill = brain, server = plumbing, Viator = catalog. "Built in 48h. Affiliate-clean. Installs in 30 seconds."

---

## Stage talking points (one-liners)

- *"We don't search travel — we curate it from your taste."*
- *"The vision model and the curator are the same model. That's why this works now and didn't a year ago."*
- *"The skill ships where the user already is — inside the agent."*
- *"Viator has a million products. The discovery problem is the bottleneck. We unlock it visually."*
- *"Three photos in. Three bookable links out. Affiliate attribution preserved."*

---

## What's next

- Ship the Skill to the Claude marketplace.
- Group / couple mode: blend two users' mood-boards into one shared vibe.
- "More like this" — turn any booked experience into a vibe seed for future trips.
- Calendar-aware: "vibe + dates I'm in Lisbon + budget" → ranked itinerary, not just activities.

---

## Team / repo

- Built solo for the Viator Travel Tech hackathon.
- Repo: skill (`SKILL.md` + references + scripts) + Vercel API (`/api/match`, `/api/enrich`) + Viator Partner client.
- Stack: TypeScript, Vercel Functions, Zod, Claude (vision + reasoning), Viator Partner API.

**One sentence:** *Taste-Mirror is the layer between your Pinterest board and your Viator cart.*
