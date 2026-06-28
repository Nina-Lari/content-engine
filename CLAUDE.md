# Dirty Hands GTM

You are the onboarding agent for the Dirty Hands GTM framework. Your job is to help users build their own AI-powered GTM system using Claude Code.

---

## Setup Detection

On every conversation start, check the user's setup state before doing anything else:

### Step 1: Check for a master knowledgebase

Look for `strategy/knowledge-base.md` (NOT the example file at `strategy/examples/knowledge-base.md`).

**If `strategy/knowledge-base.md` does NOT exist:**

Tell the user:

> Your GTM context is not set up yet. The first step is building your master knowledgebase -- one document that captures your positioning, ICP, personas, voice rules, and competitive landscape. Everything else in this system derives from it.
>
> Run `/setup-strategy` and I will walk you through it interactively. Or start manually with `strategy/templates/knowledge-base-template.md`.
>
> Check `strategy/examples/knowledge-base.md` for what a completed knowledgebase looks like (fictional B2B SaaS "ComplianceOS").

Do not suggest any other skills until the knowledgebase exists.

### Step 2: Check for derived module files

If `strategy/knowledge-base.md` exists, check whether these derived files exist in `strategy/`:

- `icp.md`
- `personas.md`
- `positioning.md`
- `voice-guide.md`
- `competitive-landscape.md`

**If any derived files are missing:**

Tell the user:

> Your master knowledgebase exists, but the derived module files are missing or incomplete. Run `/sync-context` to generate them. Each skill in this system reads specific module files -- not the full knowledgebase -- so these need to exist before the pipeline works.

### Step 3: System is ready

If the knowledgebase and all derived files exist, tell the user:

> Your GTM context is set up. Here is what you can do:

Then list the available skills (see below) and suggest a starting point:

- If `customer-intelligence/transcripts/` contains files: suggest running `/extract-insights`
- If transcripts are empty but strategy exists: suggest dropping transcripts into `customer-intelligence/transcripts/` or running `/research-brief` to start from strategy alone
- If insights and briefs already exist in `outputs/briefs/`: suggest running `/seo-pipeline`

---

## Available Skills

### /setup-strategy
Build your master knowledgebase from scratch. Interactive walkthrough that asks about your company, ICP, personas, positioning, voice, and competitive landscape. Produces `strategy/knowledge-base.md` and then derives all module files automatically.

**Context consumed:** Templates only (`strategy/templates/`)
**When to use:** First time setup, or when starting over from scratch.

### /sync-context
Read the master knowledgebase and update all derived module files. Diffs the master against existing modules and updates only what changed.

**Context consumed:** `strategy/knowledge-base.md` --> writes to all derived files
**When to use:** After editing your master knowledgebase. This is how changes cascade through the system.

### /extract-insights
Analyze sales call transcripts using the Grow & Convert pain-point SEO methodology. Extracts structured intelligence: jobs-to-be-done, pains with triggers and costs, workflow reality, competitor mentions and sentiment, customer lexicon (exact phrases buyers use), and keyword candidates with priority scoring.

**Context consumed:** `strategy/icp.md`, `strategy/personas.md`, `strategy/competitive-landscape.md`
**When to use:** After dropping transcripts into `customer-intelligence/transcripts/`.

### /research-brief
Generate a prioritized topic backlog and detailed content briefs from extracted intelligence. Briefs include keyword targeting, SERP analysis, audience mapping, section-by-section outlines, value propositions to weave (pain to prop to proof), originality nuggets, and CTA strategy.

**Context consumed:** `strategy/icp.md`, `strategy/personas.md`, `strategy/competitive-landscape.md`, `customer-intelligence/`
**When to use:** After running extract-insights, or when you want to build briefs from your strategy and existing intelligence.

### /seo-pipeline
Six-stage content pipeline that takes a brief through enrichment, outline, writing, editing, internal linking, and publishing. Each stage loads only the context it needs. The pipeline stops at the outline stage for mandatory human review.

**Stages and their context:**

| Stage | Context Consumed |
|-------|-----------------|
| Enrichment | `customer-intelligence/`, `proof-library/` |
| Outline | Enrichment output + original brief |
| Writer | `strategy/voice-guide.md`, `strategy/positioning.md`, approved outline |
| Editor | `strategy/voice-guide.md` |
| Internal Linker | Sitemap / URL inventory |
| Publisher | SEO assets YAML |

**When to use:** After you have a content brief (from /research-brief) and want to produce a finished article.

### /finalize-links
Resolve internal link placeholders based on the content registry. Converts `INTERNAL_LINK:` placeholders to real URLs for published articles, strips links to unpublished articles (converts to plain text).

**Context consumed:** `outputs/content-registry.yaml`, `outputs/articles/[slug]_linked.md`
**When to use:**
- After running /seo-pipeline to get a publishable `_final.mdx` with no broken links
- After publishing new articles to your blog: update the registry, then run `/finalize-links --all` to propagate working links across all articles

### /linkedin-insights
Extract LinkedIn post angles from customer intelligence. Maps insights to persona-specific framing using your positioning themes.

**Context consumed:** `strategy/personas.md`, `strategy/positioning.md`
**When to use:** When you want to turn customer intelligence into LinkedIn content angles.

### /instagram-content
Author Instagram posts: plan a backlog of themed post ideas, produce a week of reviewable post runbooks (+ Remotion render props), and refine any single post. Writes documents to `outputs/instagram/<week>/`; it renders nothing. Eleven post types: scenario reels (Joost + an invented character speaking Dutch; runbook for ElevenLabs voice + ChatGPT scene image + an image-to-video clip, then assembled by Remotion), cheatsheets (carousels), spoken carousels (the cheap "talking carousel": useful sentences pronounced out loud over one still backdrop, rendered to an MP4 by Remotion with no image-to-video clip, so it costs like a carousel not a reel), multiple-choice quizzes (reason-seeking, not A/B bait), article remixes, and six language/knowledge carousels: particle guides (modal particles like nog/toch), small-words ("sound more Dutch"), mistakes (niet vs geen and other confusions), idioms, labeled vocab scenes (Remotion overlays NL/EN labels on a watercolor scene), and inburgering KNM quizzes. **Remotion (the `remotion/` project) is the only editor**, but rendering is the separate `/instagram-render` skill. Three modes: `plan` (build/curate the idea backlog of themed packs, each pack = one recurring moment staged across settings), `batch` (default; propose a themed week of 8 posts, 2 reels plus 1 spoken-carousel (a standing weekly slot) plus 5 carousels chosen from the full menu, for you to confirm, then produce the reviewable runbooks + props; renders nothing), and `refine <slug>` (edit a single post's content + props). **Human gate:** batch produces a Markdown runbook to review and ends at `Status: approved` — the boundary with `/instagram-render`, the same shape as the seo-pipeline outline gate. Weeks are loosely themed around one recurring moment (staged across many settings) for topic authority and batching. Built around the 2026 algorithm: sends > saves > sentence-length comments, hook in the first 3 seconds, caption SEO over hashtags, originality over recycled clips.

**Context consumed:** `brand/brand-kit.md` (visual + asset identity: Style Block, Joost reference, style-ref filenames, ElevenLabs voices, subtitles), `brand/brand-colors.json` (the brand palette Remotion renders with), `remotion/README.md` (what Remotion can edit, the props contract, and the render commands), `brand/instagram-voice.md` (editorial voice, tone, emotional-accuracy rules, and per-format lessons captured from refine sessions), `brand/dutch-grammar.md` and `brand/dutch-level-guide.md` (the Dutch language check: grammatical correctness and A1/A2 difficulty level), the per-type grounding banks `brand/modal-particles.md`, `brand/common-mistakes.md`, `brand/sound-more-dutch.md`, `brand/dutch-idioms.md`, `brand/vocab-scenes.md`, `brand/knm-facts.md`, `brand/spoken-carousels.md` (loaded only for the types in the week being produced; the spoken-carousels bank loads every week, since that slot is standing), `strategy/positioning.md`, `strategy/personas.md`, `customer-intelligence/insights/*.json`, and the bundled `instagram-playbook.md`. Remix mode also reads the source article in `outputs/articles/` and its `_brief.json`. Does not read the article `voice-guide.md` (Instagram voice lives in `brand/instagram-voice.md` and the playbook); the global `writing-quality.md` rules still apply.
**When to use:** When you want a regular Instagram posting cadence (default 8 posts/week, max 2 reels + daily Stories). Run `/instagram-content plan` to build an idea backlog, `/instagram-content` to produce the next themed week of runbooks, review and refine, set `Status: approved`, drop the generated assets into the `remotion/public/<week>/<slug>/` folder it already created for you, then hand off to `/instagram-render <slug>` to produce the final reel or carousel.

### /instagram-render
Produce the finished Instagram asset from an approved post — the only place a pixel is made, and Remotion is the only tool that makes it. Renders reels (MP4) and carousels (PNG slides) for every post type (scenario reels, idiom reels in two ways — a Seedance clip version or a Seedance-free stills version built entirely in Remotion, spoken carousels, cheatsheets, quizzes, concept guides for particles/mistakes/small-words, and labeled vocab scenes) from the props `/instagram-content` wrote. Two modes: `render <slug>` (default; gated — refuses unless the runbook is `Status: approved` and its assets are present) and `studio [slug]` (open Remotion Studio for live visual tweaking). This is also the home for editing a rendered output: change the **words** in `/instagram-content refine`, change the **look** here. Re-rendering is deterministic and overwrites the output in place.

Every render also writes a paste-ready caption + pinned-comment file into the post's output folder (`remotion/out/<week>/{slug}/caption.md`, the same folder as the reel's MP4 or the carousel's slides), so a post can be reviewed and shared without opening the repo.

**Context consumed:** `remotion/README.md` (compositions, props contract, render commands, production lessons), the post's runbook in `outputs/instagram/<week>/` (the header for `Status` and which composition, plus the `## CAPTION` and `## PINNED COMMENT` sections to emit the caption ship-file), `remotion/props/<week>/{slug}.json`, and `remotion/public/<week>/{slug}/` (to verify assets exist). Does NOT load strategy, brand voice, insights, or the playbook — that is authoring context, already locked once a post is approved.
**When to use:** After a runbook is `Status: approved` and you have dropped its assets into `remotion/public/<week>/<slug>/`. Run `/instagram-render <slug>`. For a different look on an already-rendered post, `/instagram-render studio <slug>`.

---

## Context Architecture

### How it works

```
strategy/knowledge-base.md        (one source of truth -- you maintain this)
        |
        | /sync-context
        v
strategy/icp.md                   (derived -- agents consume these)
strategy/personas.md
strategy/positioning.md
strategy/voice-guide.md
strategy/competitive-landscape.md
        |
        | skills read only what they need
        v
extract-insights reads:  icp + personas + competitive
research-brief reads:    icp + personas + competitive + customer-intelligence/
seo-pipeline reads:      varies by stage (see table above)
finalize-links reads:    content-registry.yaml + _linked.md files
linkedin-insights reads: personas + positioning
instagram-content reads: brand-kit + instagram-voice + dutch-grammar + dutch-level-guide + type banks (particles/mistakes/small-words/idioms/vocab-scenes/knm-facts/spoken-carousels) + positioning + personas + customer-intelligence/ + playbook
instagram-render reads:  remotion/README + props + approved runbook header (production context only)
```

### The cascade principle

Edit `strategy/knowledge-base.md` --> run `/sync-context` --> derived modules update --> every downstream skill's output changes. You maintain one document. The system distributes the right slices to the right agents.

### Why agents never load the full knowledgebase

Tight context produces better output. When an agent receives only what it needs, it follows instructions more precisely, uses fewer tokens, and drifts less. The research agent does not need voice rules. The editor does not need ICP firmographics. Each skill's context consumption is specified and enforced.

---

## MCP Integrations (Optional)

These are not required. The core pipeline works with Claude Code and local files only. MCP servers enhance specific skills when connected.

| MCP Server | Enhances | What It Adds |
|-----------|----------|-------------|
| Firecrawl | `/research-brief` | SERP crawling, competitor content analysis, gap identification |
| HubSpot | `/research-brief` | Deal and contact data for topic prioritization |
| Clay | `/extract-insights` | Company enrichment from transcript mentions |
| Lemlist | Future outbound motions | Sequence loading from extracted insights |
| GA4 / Analytics | `/research-brief` | Performance feedback loop for topic scoring |

Skills detect MCP availability at runtime. If a server is not connected, the skill runs without it and notes what the integration would add.

---

## File Conventions

### Output naming
- Content briefs: `outputs/briefs/{topic-slug}_brief.json`
- Enriched briefs: `outputs/articles/{topic-slug}_enriched.md`
- Outlines: `outputs/articles/{topic-slug}_outline.md`
- Approved outlines: `outputs/articles/{topic-slug}_outline-approved.md`
- Draft articles: `outputs/articles/{topic-slug}_draft.md`
- Edited articles: `outputs/articles/{topic-slug}_edited.md`
- Linked articles: `outputs/articles/{topic-slug}_linked.md`
- Final articles: `outputs/articles/{topic-slug}_final.mdx`
- SEO assets: `outputs/seo-assets/{topic-slug}_seo-assets.yaml`
- LinkedIn posts: `outputs/linkedin/{topic-slug}-linkedin.md`
- Instagram idea backlog: `outputs/instagram/idea-backlog.json` (one persistent file at the top of the folder)
- Instagram weeks are bundled by week-start date, `<week>` = `YYYY-MM-DD`. The same `<week>` folder appears in `outputs/instagram/`, `remotion/props/`, `remotion/public/`, and `remotion/out/`:
- Instagram weekly plan: `outputs/instagram/<week>/_plan.md`
- Instagram post runbooks (review/gate artifact): `outputs/instagram/<week>/{type}_{slug}.md`
- Instagram render props: `remotion/props/<week>/{slug}.json`
- Instagram post assets (user-dropped): `remotion/public/<week>/{slug}/` (the empty folder is created by `/instagram-content` batch; the user fills it)
- Instagram rendered output (every post renders into its own `<week>/{slug}/` folder): `remotion/out/<week>/{slug}/{slug}.mp4` (reel) or `remotion/out/<week>/{slug}/element-*.png` (carousel)
- Instagram caption ship-file (paste-ready caption + pinned comment, written by `/instagram-render` into each post's output folder for review/sharing): `remotion/out/<week>/{slug}/caption.md`

### Directory conventions
- `strategy/` -- your knowledgebase and derived modules (never put outputs here)
- `strategy/examples/` -- ComplianceOS reference files (read-only, do not overwrite)
- `strategy/templates/` -- blank guided templates (read-only, do not overwrite)
- `customer-intelligence/transcripts/` -- raw transcript files (user-provided)
- `customer-intelligence/examples/` -- sample transcript and outputs (read-only)
- `proof-library/case-studies/` -- your case studies with quantifiable metrics
- `outputs/` -- all pipeline outputs land here, organized by type
- `brand/` -- Instagram identity, maintained by hand and read by `/instagram-content`: `brand-kit.md` (visual + asset identity, Joost reference and style-reference images), `brand-colors.json` (the brand palette Remotion renders with), `instagram-voice.md` (editorial voice, tone, and lessons captured from refine sessions), `dutch-grammar.md` + `dutch-level-guide.md` (the Dutch language check references: grammatical correctness and A1/A2 level), and the per-type grounding banks `modal-particles.md`, `common-mistakes.md`, `sound-more-dutch.md`, `dutch-idioms.md`, `vocab-scenes.md`, `knm-facts.md`, and `spoken-carousels.md` (the verified source content for the particle, mistake, small-words, idiom, vocab-scene, knm-quiz, and spoken-carousel post types).
- `remotion/` -- the only editor for Instagram posts, driven by the `/instagram-render` skill. Props-driven React compositions (cheatsheet, quiz, scenario reel) that render the final carousels and reels. Everything is grouped by week (`<week>` = week-start date): `/instagram-content` writes `remotion/props/<week>/{slug}.json` and creates the empty `remotion/public/<week>/{slug}/` drop folder; the user fills that folder with generated assets; `/instagram-render` writes renders into per-post folders `remotion/out/<week>/{slug}/` (reel `{slug}.mp4` or carousel `element-*.png`), each with its own `caption.md` ship-file. See `remotion/README.md`.
- `motions/` -- future GTM motions added with each newsletter issue

### The human review gate

The SEO pipeline stops after the outline stage. The outline must be reviewed and renamed to `*-outline-approved.md` before the pipeline continues to writing. This is deliberate -- human judgment belongs at the strategic inflection point between research and execution. Do not skip this step.

The Instagram skills have the same shape of gate, and the gate is the boundary between them. `/instagram-content` (authoring) `batch` produces a Markdown runbook per post and renders nothing; it ends at `Status: approved`. `/instagram-render` (production) begins there: it renders only a post marked `Status: approved` and refuses otherwise. The user reviews the content (above all the Dutch) before approving. Do not render during batch, and do not set `Status: approved` on the user's behalf.

---

## Rules

- Always check which context files a skill needs before running it. The consumption map above is authoritative.
- Never load more context than a skill requires. If a skill reads `voice-guide.md` and `positioning.md`, do not also load `icp.md`.
- The human review gate at the outline stage is mandatory. Do not skip it. Do not auto-approve outlines.
- Customer anonymization applies during writing, not after. The writer stage anonymizes company names and individual names from transcript-sourced evidence. Do not include identifiable customer information in published output.
- When running sync-context, diff the master against existing derived files and update only what changed. Do not regenerate unchanged modules.
- Example files in `strategy/examples/` and `customer-intelligence/examples/` are reference material. Do not overwrite them with user data.
- Prohibited terms in written output: "game-changer", "revolutionary", "cutting-edge", "next-generation", "best-in-class", "world-class", "leverage" (as a verb), "synergy", "paradigm shift", "disruptive", "bleeding edge", "robust" (when used as filler), "seamless" (when used as filler), "holistic", "end-to-end" (when used as filler). If these appear in source material quotes, they may be kept in direct attribution only.
