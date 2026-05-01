# Taste-Mirror

**Claude already knows you. We turn that into travel taste.**

A Claude skill that distills who you are — from your years of work with Claude — into a *traveler profile*, then combines that with the vibe of a few inspiration photos to recommend bookable Viator experiences that match **you specifically**, not the average tourist.

---

## The 30-second pitch

> Every recommender on the internet treats you like a stranger.
>
> But if you use Claude, **Claude isn't a stranger** — it's seen thousands of your messages, knows what frustrates you, what energizes you, the pace you can sustain, the things you double-check, the things you let slide.
>
> Taste-Mirror takes that latent knowledge — already sitting on your laptop in `~/.claude/projects/` — and turns it into a *traveler profile*. Then, when you drop a Pinterest board into Claude and say "match this vibe in Tuscany," it picks Viator experiences that fit **the vibe AND the person you actually are**.
>
> Not "things to do in Tuscany." **Your** things.

---

## The two layers

Most travel recommenders see one signal at a time. We fuse two:

```
       ┌──────────────────────────────┐
       │   PERSISTENT YOU              │   ← built once, refreshed monthly
       │   (the traveler profile)      │
       │                               │
       │   • pace, energy budget       │
       │   • novelty vs comfort        │
       │   • what drains you           │
       │   • hidden anxieties          │
       │   • blind spots to compensate │
       │   • what you'd light up for   │
       └──────────────────────────────┘
                    +
       ┌──────────────────────────────┐
       │   THIS TRIP'S VIBE            │   ← read live from your photos
       │   (the vibe profile)          │
       │                               │
       │   • themes, pace, social      │
       │   • aesthetic, activity types │
       │   • what to avoid this trip   │
       └──────────────────────────────┘
                    ↓
       ┌──────────────────────────────┐
       │   VIATOR CATALOG (1M+ items)  │
       │   ranked + filtered + reasoned│
       └──────────────────────────────┘
```

The vibe says *this trip is golden-hour, intimate, hands-in-food*.
The profile says *this person quietly burns out on social load, double-checks logistics, won't ask for downtime but needs it*.

Together they say: **private cooking class with the host, not the 16-person group tour. Pre-book the transfer. Leave the next morning open.**

---

## How the traveler profile gets built

This is the part that doesn't exist anywhere else.

The skill ships a script: `npx tsx ~/.claude/skills/taste-mirror/scripts/build-profile.ts`

What it does:
1. Walks every Claude Code project on your laptop (`~/.claude/projects/<dir>/*.jsonl`).
2. Extracts **only your messages** — the prompts, corrections, follow-ups, "no, not like that," "perfect, keep going." That side of the conversation reveals personality, not just topic.
3. For each project, asks Claude (via your existing Claude Code auth — no extra API key) to produce a behavioral sketch: obsessions, frustrations, excitements, anxieties, blind spots, aesthetic signals, pace.
4. Caches each sketch by transcript fingerprint — re-runs are nearly instant.
5. Merges all sketches + your saved memories into one markdown profile at `~/.taste-mirror/traveler_profile.md`.

First run on ~100 projects: 30–50 minutes. Then it just sits there, refreshed monthly.

**The result is interior monologue, not a horoscope.** The skill reads it but never quotes it back. It uses the profile to:
- bias the `avoid` list (your photos won't always reveal what drains you — your transcripts will)
- tilt ambiguous vibes (60% cosy / 40% lively → profile decides)
- compensate for what you forget to mention (budget, duration)
- break ranking ties — lean toward what you'd light up for

---

## What the skill is actually doing, end-to-end

When you drop photos into Claude:

1. **Loads the traveler profile** (once per session). If it doesn't exist, proceeds without it and suggests building it later — never blocks.
2. **Analyzes the images** — Claude itself, not an API. The vibe extraction lives inside the agent. It produces a `vibe_profile`: themes, pace, social, aesthetic, activity types, **and `avoid`** (the most important field — what stops the server returning hop-on/hop-off buses).
3. **Confirms the vibe with you** — one short line, not a four-question setup. *"Slow, golden-hour, hands-in-food, rural — sound right?"*
4. **Asks the destination** (and budget/dates if it can't infer them from the profile).
5. **Calls our server** (`POST /api/match`) with the vibe + destination. Server hits Viator's Partner API: `/destinations`, `/products/tags`, `/products/search`, returns 15 candidates with affiliate URLs already baked in.
6. **Picks the top 3** — not the server. The skill drops generic mass-tourism filler the server returned but that doesn't fit the vibe + profile.
7. **Enriches the picks** (`POST /api/enrich`) — pulls full Viator detail for just those 3: inclusions, meeting points, private vs. group, cancellation policy.
8. **Reasons + presents** — for each pick: title + duration + price, one sentence tying it to *your* photos and *your* profile (without quoting the profile), and the affiliate link untouched (Viator bakes attribution in — modifying it breaks commission).

---

## Why this couldn't exist before

Three things had to land at the same time:

1. **Frontier vision in the same model that does the reasoning.** The vibe extraction has to feel like the model "gets it" — that requires Claude doing both perception and curation in one shot, not OCR-style tag extraction.
2. **A persistent user signal Claude can read.** Claude Code transcripts are a goldmine of personality data the user already produced — for free, at high fidelity, over months of real work. No survey, no quiz, no cold start.
3. **Skills as a distribution surface.** No app to install, no website to remember. The user is already inside the agent — the skill ships *to where they are*.

We're not building a travel app. We're building a behavior layer that lives inside the agent.

---

## Why this is the right shape for Viator

- **Affiliate-pure.** We curate, Viator books. Zero inventory, zero payments, zero PCI surface.
- **Top-of-funnel demand.** Inspiration is where the user starts. We meet them there and route to Viator's catalog *with attribution preserved*.
- **The long-tail unlock.** Generic city searches commodify the catalog into the same ten bus tours. Vibe + profile match surfaces the long tail — private boats, intimate cooking classes, quiet sunrise hikes — exactly the high-margin products with the worst keyword discoverability.
- **Differentiated quality.** A user who books from a *"this picks up on the vespa-on-a-dirt-road photo and you specifically tend to over-plan transitions, so this includes pickup"* recommendation churns less than one who booked off SEO.

---

## What's actually built (48h)

- ✅ **Claude Skill** — `SKILL.md`, references, and the profile-builder script. Installable by copy-paste.
- ✅ **Profile builder** — distills ~100 Claude Code projects into a traveler profile via your existing Claude auth. No new API key.
- ✅ **`/api/match`** — Vercel function: vibe + destination → ranked Viator candidates with affiliate URLs.
- ✅ **`/api/enrich`** — full product detail for the top picks.
- ✅ **Live Viator Partner API integration** — `/destinations`, `/products/tags`, `/products/search`, `/products/{code}`.
- ✅ **Affiliate-correct** — `productUrl` passed through as-is.

---

## Demo (≤ 3 min)

1. **(0:00–0:25) The hook.** "Pinterest knows your taste. Viator has the catalog. Nothing connects them — until now." Show a Pinterest board, then a generic Viator search next to it. The mismatch is obvious.
2. **(0:25–1:00) The profile.** Open `~/.taste-mirror/traveler_profile.md`. *"This was built from my own Claude Code transcripts. Claude has been watching me work for a year — now it can travel-recommend like someone who knows me."* Read 2–3 lines aloud (energy & pace, what to avoid).
3. **(1:00–2:15) The flow.** In Claude: drop 6 Tuscany photos, *"match this vibe — 4 days next month."* Watch the vibe come back, confirm, get 3 picks with reasoning that cites the photos *and* compensates for blind spots from the profile.
4. **(2:15–2:45) The result.** Click an affiliate link. Real Viator product page. Real attribution.
5. **(2:45–3:00) Closing.** "Skill = brain. Server = plumbing. Viator = catalog. The user is already inside the agent — we just turn what the agent already knows into travel taste."

---

## Stage one-liners

- *"Every other recommender treats you like a stranger. Claude isn't a stranger."*
- *"We don't build a profile by asking 20 questions. We build it from the way you've already been talking to Claude for a year."*
- *"The vibe is this trip. The profile is who you are. We match on both."*
- *"Three photos in. A you-shaped shortlist out. Affiliate link preserved."*
- *"The skill ships where the user already is — inside the agent."*

---

## What's next

- Push the skill to the Claude marketplace.
- Couple / group mode: blend two travelers' profiles + a shared mood-board into one trip plan.
- "More like this" — turn any booked experience into a vibe seed for future trips.
- Profile diff over time: "you've shifted toward slower, more rural — here's what that means for next year."

---

## One sentence

**Taste-Mirror is the layer between *who Claude already knows you to be* and *what Viator has to sell you*.**
