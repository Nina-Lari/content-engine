---
name: instagram-content
description: Author Instagram posts — plan a themed idea backlog, produce a week of reviewable post runbooks (+ render props), and refine any single post. Writes documents to outputs/instagram/<week>/; renders nothing. Three modes: plan, batch, refine. Rendering is the separate /instagram-render skill.
---

# Instagram Content (the writers' room)

This skill **authors the documents** for Instagram. It plans ideas, writes a week of reviewable post runbooks, and edits them — and it produces `outputs/instagram/<week>/`. It never produces a pixel. Turning an approved post into a finished reel or carousel is the companion skill **`/instagram-render`**, which owns the `remotion/` project.

The split is the human gate. This skill ends at `Status: approved`. `/instagram-render` begins there. Built around the 2026 algorithm: sends > saves > sentence-comments, hook in the first 3 seconds, caption SEO over hashtags, originality over recycled clips.

**Three modes:**

- `/instagram-content plan [theme hint]` -- **plan**. Build or refresh the idea backlog of themed packs (each pack = one recurring moment, staged across settings).
- `/instagram-content` or `/instagram-content batch [theme hint]` -- **batch** (default). Produce one themed week of reviewable runbooks + render props. Renders nothing.
- `/instagram-content refine <slug-or-path>` -- **refine**. Iterate on one existing post's content (runbook + props).

## When to call what

| You want to... | Run |
|----------------|-----|
| Build or curate the idea backlog | `/instagram-content plan` |
| Produce this week's posts (runbooks + props) | `/instagram-content` (batch) |
| Fix what a post **says** (Dutch, hook, caption, quiz, slides) | `/instagram-content refine <slug>` |
| Check the Dutch and the English voice (grammar, A1/A2 level, anti-slop) on a post or a week | `/instagram-content check [slug]` |
| Turn an **approved** post into a video / carousel | `/instagram-render <slug>` |
| Change how a rendered post **looks** (layout, timing, colors) | `/instagram-render studio <slug>` |

The rule of thumb: **words → here; pixels → `/instagram-render`.**

## Remotion is the only editor

Every final image and reel is produced by the `remotion/` project, not CapCut or Canva. This skill writes a **props JSON** (`remotion/props/<week>/{slug}.json`) — the contract between authoring and rendering. The user generates the upstream assets (ElevenLabs voice, ChatGPT illustrations, image-to-video clips) and drops them into `remotion/public/<week>/{slug}/`; then `/instagram-render` turns props + assets into the finished MP4 or PNG slides. Read `remotion/README.md` for the menu of edits Remotion can apply, so the props you write stay within its contract.

**Every post is a runbook.** Each post file gives numbered "do this, paste this, save it here" steps with the full prompt already filled in and the exact brand files to attach, plus the render command. The user generates assets and approves content; Remotion does all editing. See the runbook principle in `instagram-playbook.md`.

**The human gate (most important).** Running this skill does **not** create or render anything visual. `batch` produces a Markdown runbook per post for the user to read and verify (above all the Dutch). Rendering happens only in `/instagram-render`, and only on a post whose runbook is marked `Status: approved`. This mirrors the seo-pipeline outline gate: human judgment sits between content and production. Do not render here. Do not auto-approve.

## Context Consumed

- `.claude/skills/instagram-content/instagram-playbook.md` -- platform mechanics, cadence, theming, runbook principle, per-type rules, the gate. Always load first.
- `remotion/README.md` -- the props contract per composition (so the props you write match what Remotion expects) and what Remotion can do to the final asset. Load in batch (and in refine when the edit touches props shape).
- `brand/brand-kit.md` -- the visual and asset identity for all posts: Style Block, Negative prompt, Joost reference, style-reference filenames, ElevenLabs voices, and the logo. Write the full Style Block and Negative prompt text into every image step verbatim (the actual lines, never a placeholder or a "see brand-kit" pointer). The logo is rendered automatically by Remotion (into the wordmark and reel outro) and is never a user-generated per-post asset -- do not add a logo step to runbooks.
- `brand/brand-colors.json` -- the brand palette Remotion renders with (blue `#0025DB`, gold `#E0BB00`, etc.). The skill does not set colors per post; the compositions read the palette. Referenced so the skill keeps captions/overlays on-brand.
- `brand/instagram-voice.md` -- the editorial voice and tone identity: brand-specific tone, emotional-accuracy rules, and per-format lessons captured from past refine sessions. Apply it to every caption, slide, dialogue, and quiz. This is the file the refine "capture a lesson" prompt writes back to.
- `brand/dutch-grammar.md` -- the "is the Dutch correct?" reference for the Dutch language check: word order, conjugation and the `-t`/kofschip rules, de/het, niet/geen, register (`u` vs `je`), and a 10-point error checklist. Load whenever Dutch is written or checked (batch, refine, check).
- `brand/dutch-level-guide.md` -- the "is the Dutch easy enough?" reference for the Dutch language check: the A1 target for our audience, the three difficulty axes (vocabulary, grammar, sentence length), red flags, the rewrite-down-to-A1 ladder, and the *Sanctioned exceptions* rule (which types may teach above A1). Load alongside `dutch-grammar.md`.
- **The grounding banks for the language/knowledge post types** -- `brand/modal-particles.md` (particle), `brand/common-mistakes.md` (mistake), `brand/sound-more-dutch.md` (small-words), `brand/dutch-idioms.md` (idiom), `brand/vocab-scenes.md` (vocab-scene), `brand/knm-facts.md` (knm-quiz), `brand/spoken-carousels.md` (spoken-carousel). **Load only the bank(s) for the types in the week being produced** (the `spoken-carousels.md` bank loads every week, since that slot is standing). Each holds the verified, on-level source content for its type; never invent a particle sense, an idiom meaning, a civic fact, a scene's words, or a spoken-carousel's sentences from memory, pull them from the bank. These are the new-type equivalent of `lexicon`/`quotes` for cheatsheets.
- `strategy/positioning.md` -- value props to thread as undercurrent.
- `strategy/personas.md` -- who each post targets and their pains.
- `customer-intelligence/insights/*.json` -- `lexicon` and `quotes` (phrasing for cheatsheets and dialogue), `pains` and `jtbd` (situations, quiz scenarios, angles), `keyword_candidates` (caption SEO).
- `outputs/articles/*` -- the article library, for remix ideas and (remix production) the source article (prefer `_final.mdx`).
- `outputs/briefs/*_brief.json` -- **remix only**: the article's primary keyword for caption SEO.

The brand `.png` files are attached by the user inside ChatGPT, not read by the skill. The skill only names them. Does NOT read `knowledge-base.md`, `icp.md`, `competitive-landscape.md`, `voice-guide.md`. The global `.claude/rules/writing-quality.md` applies to all captions and slides.

If `brand/brand-kit.md` is missing or its asset slots are unfilled, warn that asset steps will contain placeholders, and point to the one-time setup in `brand/SETUP.md`. If the `remotion/` project is missing, warn that `/instagram-render` will not work and point to `remotion/README.md`.

## Output

This skill writes only authoring artifacts. The finished asset is produced later by `/instagram-render`.

- `outputs/instagram/idea-backlog.json` -- the curated backlog of themed packs (one pack = one theme, staged across settings). **One persistent file at the top of the folder** (plan mode writes; batch mode reads and updates `status`).
- `outputs/instagram/<week>/_plan.md` -- the produced week's overview grid (batch mode). `<week>` is the week-start date `YYYY-MM-DD`.
- `outputs/instagram/<week>/{type}_{slug}.md` -- one reviewable runbook per post. `type` is `scenario-reel`, `idiom-reel`, `cheatsheet`, `quiz`, `article-remix`, `particle`, `small-words`, `mistake`, `vocab-scene`, or `knm-quiz`. **This is the human-gate artifact.** It carries `Status: draft` until the user approves. (The week folder carries the date, so the filename no longer repeats it.)
- `remotion/props/<week>/{slug}.json` -- the render props for the post, written by batch alongside the runbook. The contract between this skill and the Remotion composition.
- `remotion/public/<week>/{slug}/` -- the asset-drop folder, **created empty by batch** so the user has a ready target for the voice/image/clip files the runbook names. The user fills it; this skill never writes assets into it.

Create `outputs/instagram/<week>/`, `remotion/props/<week>/`, and the per-post `remotion/public/<week>/{slug}/` drop folders if they do not exist. Each post file carries its own rules block plus the runbook, so plain conversational edits stay on-rails without re-invoking the skill.

## Week-bundle layout (keep the folders tidy)

A week is a self-contained bundle named by its **week-start date** (`YYYY-MM-DD`). The same date folder appears in four places:

```
outputs/instagram/
  idea-backlog.json                       ← the one persistent editorial calendar
  <week>/                                  ← e.g. 2026-06-15/
    _plan.md
    scenario-reel_{slug}.md
    cheatsheet_{slug}.md
    quiz_{slug}.md
    article-remix_{slug}.md
remotion/
  props/<week>/{slug}.json                 ← written here
  public/<week>/{slug}/...                 ← user drops generated assets here
  out/<week>/{slug}/...                     ← /instagram-render writes here ({slug}.mp4 or element-*.png, plus caption.md)
```

When composing a week, pick `<week>` = the date the week starts (the date the user is planning from, or today's date if unspecified). Use the **same `<week>` value** for the plan file, every runbook, and every props file in that batch, and bake it into the asset-save paths and render command inside each runbook. Asset paths inside a props JSON are relative to `remotion/public/`, so they must start with `<week>/{slug}/...` (e.g. `"coverImage": "2026-06-15/keep-them-in-dutch/cover.png"`).

---

## The human review gate

The gate sits between this skill (content) and `/instagram-render` (production), mirroring the seo-pipeline outline gate:

1. `batch` writes the runbook MD (`Status: draft`) and the props JSON. **No asset is rendered.**
2. The user reads each runbook, verifies the content -- above all the Dutch (correct, A1-level, usable) -- and refines anything off (`/instagram-content refine <slug>`).
3. The user generates the upstream assets named in the runbook (voice, image, clip) and drops them into `remotion/public/<week>/{slug}/` (batch already created this folder, empty and ready).
4. The user approves by setting `Status: approved` at the top of the runbook.
5. `/instagram-render <slug>` produces the asset -- and refuses if `Status` is not `approved` or assets are missing.

Do not skip the gate. Do not render here. Do not set `Status: approved` yourself.

---

## Plan Mode Workflow

Triggered by `/instagram-content plan [theme hint]`. Produces a backlog the user curates, so weeks are drawn from an approved idea bank instead of invented from scratch each time.

### Step 1: Load context

Read `instagram-playbook.md`, `brand/brand-kit.md`, `brand/instagram-voice.md`, `strategy/positioning.md`, `strategy/personas.md`, all `customer-intelligence/insights/*.json`, and the list of articles in `outputs/articles/`. If a backlog already exists, read it too (to append and dedupe).

If no insights and no theme hint, tell the user to run /extract-insights first or pass a theme. Do not invent learner pains.

### Step 2: Derive the themes

A **theme** is a recurring *moment or tension* a learner lives through, not a single place. It is the experience ("the moment they switch to English on you", "freezing under exam pressure", "small talk you can't enter at the school gate"). Mine `jtbd`, `quotes`, and `pains` for the moments learners struggle with most. Prefer themes that recur across multiple insight files (stronger signal). For each theme, list the concrete **settings** it plays out in (the bakery, the supermarket checkout, the pharmacy, a café, the doctor's reception, a phone call), because those settings become the per-post backdrops that keep the week visually varied. Also note article topics that map onto a theme, for the flex slot.

### Step 3: Build theme packs

For each theme, draft one week's worth of ideas (a pack of 7, max 2 reels). Stage each on-theme post in a **different setting** drawn from the theme's setting list, so the seven posts share one moment but never one backdrop:

- **Two scenario-reel** ideas (Joost + an invented character living the moment), each in a different setting.
- **Two cheatsheet** ideas (the phrases for that moment, grounded in `lexicon`), each tied to a different setting and split by angle, e.g. what to say vs. how to understand the reply.
- **Two quiz** ideas (two real mistakes from the moment, in two settings, each with a reason-seeking prompt).
- A **flex** idea (usually an article-remix tied loosely to the theme, or off-theme for variety). Run it as a carousel so the week stays at 2 reels.

Each idea is lightweight: type, hook, one-line angle, `setting` (the concrete place this post is staged in), source (which insight or article it came from), and `on_theme`.

### Step 4: Prioritize and dedupe

Score each pack `high | medium | low` with a one-line reason, weighting: hook strength, save/send potential, grounding in a repeated pain, and persona coverage (favor packs that fill an under-served persona). Drop packs whose theme was already produced (check `status: produced` in the existing backlog).

Aim to generate 4-6 packs (a month or more of weeks).

### Step 5: Write the backlog

Write or merge `outputs/instagram/idea-backlog.json`. Status lives on each post, so weeks can be themed or mixed:

```json
{
  "generated_date": "ISO date",
  "intelligence_sources": ["insight files and articles used"],
  "reference_log": {"particle": [], "small-words": [], "mistake": [], "idiom": [], "vocab-scene": [], "knm-quiz": []},
  "packs": [
    {
      "pack_id": "slug -- e.g. switch-to-english (a theme, not a place)",
      "theme": "string -- the recurring moment/tension, e.g. the moment they switch to English on you",
      "settings": ["the bakery", "the supermarket checkout", "the pharmacy", "a café", "the doctor's reception", "a phone call"],
      "persona": "string -- target persona",
      "priority": "high | medium | low",
      "priority_reason": "string -- one line",
      "posts": [
        {"post_id": "switch-to-english-reel-1",       "type": "scenario-reel", "setting": "the bakery",                "hook": "string", "angle": "string", "source": "string", "on_theme": true,  "status": "idea"},
        {"post_id": "switch-to-english-cheatsheet-1", "type": "cheatsheet",    "setting": "the supermarket checkout", "hook": "string", "angle": "string", "source": "string", "on_theme": true,  "status": "idea"},
        {"post_id": "switch-to-english-quiz-1",       "type": "quiz",          "setting": "the pharmacy",             "hook": "string", "angle": "string", "source": "string", "on_theme": true,  "status": "idea"},
        {"post_id": "switch-to-english-reel-2",       "type": "scenario-reel", "setting": "a café",                   "hook": "string", "angle": "string", "source": "string", "on_theme": true,  "status": "idea"},
        {"post_id": "switch-to-english-cheatsheet-2", "type": "cheatsheet",    "setting": "the doctor's reception",   "hook": "string", "angle": "string", "source": "string", "on_theme": true,  "status": "idea"},
        {"post_id": "switch-to-english-quiz-2",       "type": "quiz",          "setting": "a phone call",             "hook": "string", "angle": "string", "source": "string", "on_theme": true,  "status": "idea"},
        {"post_id": "switch-to-english-remix",        "type": "article-remix", "setting": "n/a (flex)",               "hook": "string", "angle": "string", "source": "string", "on_theme": false, "status": "idea"}
      ]
    }
  ]
}
```

Post `status` values: `idea` (suggested), `queued` (approved for production), `produced` (batch built it). To make a **themed week**, queue all of a pack's posts. To make a **mixed week**, queue individual posts across packs. Merging keeps existing `queued` and `produced` posts untouched and appends new `idea` packs. (Older backlogs use a `situation` field and carry no per-post `setting`; treat a pack's `situation` as its `theme`, and assign a distinct `setting` per on-theme post when producing.)

The **evergreen reference types** (particle, small-words, mistake, idiom, vocab-scene, knm-quiz) are **not** packs. They are pulled per-week in batch directly from their `brand/` banks and logged in `reference_log` so they do not repeat. Plan mode builds only moment-packs; it may *mention* reference topics worth using, but does not pack them. The two reels in every week still come from the moment-packs.

### Step 6: Report

List each pack: theme, the settings it spans, priority + reason, persona, and the 7 idea hooks. Tell the user: "Queue what you want to make by setting a post's `status` to `queued` -- queue a whole pack for a themed week, or cherry-pick posts across packs for a mixed week. Then run `/instagram-content` to produce them. Edit, add, reorder, or delete freely. It's your editorial calendar."

---

## Batch Mode Workflow

Batch produces **reviewable runbooks + render props. It never renders.**

### Step 1: Load context

1. Read `instagram-playbook.md`, `remotion/README.md`, `brand/brand-kit.md`, `brand/brand-colors.json`, and `brand/instagram-voice.md`.
2. Read `strategy/positioning.md` and `strategy/personas.md` (warn if missing).
3. Read all `.json` in `customer-intelligence/insights/`. Aggregate `lexicon`, `quotes`, `pains`, `jtbd`, `keyword_candidates`.
4. Read `outputs/instagram/idea-backlog.json` if it exists.

### Step 2: Name the theme of the week, then compose it

**First, state the theme of the week in one line — before assembling any posts.** The theme is the recurring *moment or tension* this week is about (e.g. "the moment they switch to English on you"), not a place. Then list the spread of **settings** the seven posts will be staged in (bakery, supermarket, pharmacy, doctor, café, phone, ...): a moment, played out somewhere different each post. In the normal flow the theme comes from the queued pack; on the fly, name it first and derive posts under it. Surface this theme line and the per-post settings in `_plan.md` (Step 3).

Status lives on individual posts (`idea | queued | produced`), so a week can be one theme or a mix.

- **If the backlog has queued posts:** collect every post with `status: queued` across all packs. Take up to the cadence count (default 7), highest-priority first. That set is the week.
  - If all selected posts belong to one pack/theme, treat it as a **themed week**: keep them coherent around the one moment (the cheatsheets hand over its phrases, the quizzes test a mistake from it, the second character can recur), but **stage each in a different setting** so the grid never duplicates. Use each post's `setting`; if a queued pack predates the setting field, assign a distinct setting per on-theme post now.
  - If they span themes, treat it as a **mixed week**: each post stands alone, no forced cross-references.
- **If nothing is queued but a backlog exists:** take the highest-priority pack's `idea` posts as a themed week, and note you did so (the user can queue specific posts instead).
- **If no backlog exists:** name a theme on the fly from a recurring moment in the insights, spread it across the week's settings, derive one post per setting (2 reels max), and tell the user they can run `/instagram-content plan` to build a curated backlog.
- **If a theme hint was passed:** prefer matching posts/pack, or theme the on-the-fly week to it.

Sanity-check the week's shape before producing: **2 reels (the theme anchor) + 1 spoken-carousel (a standing weekly slot) + 5 carousels chosen from the full menu** (`cheatsheet`, `quiz`, `article-remix`, `vocab-scene`, `particle`, `small-words`, `mistake`, `knm-quiz`), with **a maximum of 2 reels** (never more) and **at least one reel**. The **`spoken-carousel`** is its **own standing category, separate from the carousels**: useful sentences pronounced out loud, rendered to an MP4 via `PhraseReel`. Produce **one every week**, its sentence-set drawn from `brand/spoken-carousels.md`. It does NOT count toward the 2-reel cap (no image-to-video clip, so it costs like a carousel). That makes the default week 8 posts; on a busy week trim to 7 by dropping one evergreen carousel, keeping the reels and the spoken-carousel. One of the two reels may be an **`idiom-reel`** (the funny idiom format, one idiom per week, renders via `IdiomReel`) instead of a second scenario-reel. Fill the on-theme slots from the queued pack / insights; fill the rest with **evergreen reference posts drawn from their banks** (load only the banks you need: `modal-particles.md`, `common-mistakes.md`, `sound-more-dutch.md`, `dutch-idioms.md`, `vocab-scenes.md`, `knm-facts.md`). Keep the week coherent: the reels plus one or two on-theme carousels carry the moment, the rest stand alone (a vocab scene staged in the theme's setting counts as on-theme). **Avoid repeats** by checking the backlog's `reference_log` (don't reuse a particle, idiom, KNM indicator, small-word set, mistake, or scene already produced). If a queued selection breaks the shape (three or more reels, or all of one type), warn and suggest a swap, but proceed if confirmed. Honor an explicit count if the user asked for a different number. Assign each post a persona and a positioning thread (evergreen posts get a light positioning thread, not a forced moment).

Pick `<week>` = the week-start date (the date the user is planning from, else today). Every file in this batch uses that same `<week>` value.

### Step 3: Write the weekly plan file

Write `outputs/instagram/<week>/_plan.md`:

```markdown
# Instagram Week — {start date} to {end date}

Theme: {the recurring moment/tension, e.g. "the moment they switch to English on you", or "Mixed"}
Settings this week: {the distinct setting per on-theme post, e.g. bakery, supermarket, pharmacy, café, doctor, phone}
Cadence: 8 feed posts (the 7-day grid + the standing spoken-carousel, max 2 reels) + daily Stories.
Grounded in: {intelligence sources / pack id}

| Day | Post file | Type | Setting / topic | On-theme | Hook | Job | Status |
|-----|-----------|------|-----------------|----------|------|-----|--------|
| Mon | scenario-reel_{slug}.md | scenario-reel | {setting} | yes | {hook} | reach | draft |
| Tue | {type}_{slug}.md | {chosen carousel type} | {setting or bank topic} | yes / evergreen | {hook} | saves | draft |
| Wed | {type}_{slug}.md | {chosen carousel type} | {setting or bank topic} | yes / evergreen | {hook} | comments | draft |
| Thu | scenario-reel_{slug}.md | scenario-reel | {setting} | yes | {hook} | reach | draft |
| Fri | {type}_{slug}.md | {chosen carousel type} | {setting or bank topic} | yes / evergreen | {hook} | saves | draft |
| Sat | {type}_{slug}.md | {chosen carousel type} | {setting or bank topic} | yes / evergreen | {hook} | comments | draft |
| Sun | {type}_{slug}.md | {chosen carousel type} | {flex or bank topic} | flex / evergreen | {hook} | reach + SEO | draft |
| +1 | spoken-carousel_{slug}.md | spoken-carousel | {setting or bank topic} | yes / evergreen | {hook} | listen + saves | draft |

(Reels are fixed on Mon + Thu; the spoken-carousel is the standing +1 (post it as a second midweek post). The five carousel slots are the types confirmed from the menu: cheatsheet, quiz, article-remix, vocab-scene, particle, small-words, mistake, knm-quiz (idiom is now an `idiom-reel`, not a carousel). The spoken-carousel's sentence-set comes from `brand/spoken-carousels.md`. "Setting / topic" holds the setting for on-theme posts or the bank topic for evergreen ones, e.g. `particle: toch`, `knm-quiz: zorgverzekering`, `spoken-carousel: bakery`.)

## Stories (daily)
- Reshare each day's feed post to Stories.
- {2-3 Story quiz-sticker ideas from this week's quiz}

## How to take these live
1. Review each runbook. Fix content with `/instagram-content refine {slug}`.
2. Generate the assets each runbook names, into `remotion/public/<week>/{slug}/` (already created, ready to fill).
3. Set `Status: approved` at the top of the runbook.
4. Render it: `/instagram-render {slug}`.
```

### Step 3.5: Propose the lineup and confirm the topics (the topic gate)

Before writing any runbook or props, **present the proposed week to the user and get their go-ahead.** Show the lineup as a short list, one line per slot: day, type, working title / topic, on-theme or evergreen, and the source (the insight/setting for on-theme posts, the bank item for evergreen ones, e.g. `particle: toch`, `idiom: animal idioms`, `knm-quiz: zorgverzekering eigen risico`, `vocab-scene: bij de dokter`). Ask the user to confirm or adjust the **types and topics**: swap a type, change a particle/idiom/indicator, reorder days, or pin a slot on-theme.

This is the topic gate the user asked for: **choose the week together first, then build.** Do not write runbooks or props until the user approves the lineup. It is lighter than the per-post `Status: approved` gate, which still applies after building. The `_plan.md` you just wrote is the proposal artifact; once the user confirms, update it to match the final lineup, then continue to Step 4.

(If the user explicitly says "just build it" or passed a fully-queued pack and asked for no review, you may skip the pause, but still surface the lineup in your reply.)

### Step 4: Write each post as a runbook + props

For every slot **in the confirmed lineup**, write `outputs/instagram/<week>/{type}_{slug}.md` using the matching template in **Post Runbook Templates** below, AND write `remotion/props/<week>/{slug}.json` with the same content shaped to that composition's props (see `remotion/README.md` for the props contract). Fill every step completely: real Dutch dialogue, real slide text, the full image prompt with the **complete Style Block and Negative prompt written out verbatim** (the actual lines from `brand/brand-kit.md`, reproduced in full, never a placeholder, a bracket like `[inline the style block here]`, or a "see brand-kit" pointer), the exact brand files to attach, image-to-video settings, the asset filenames to save under `remotion/public/<week>/{slug}/`, and the render command. Nothing left as a template for the user to complete. **Do not render.**

Also create the post's asset-drop folder, `remotion/public/<week>/{slug}/`, empty (`mkdir -p`), so the user never has to make it by hand before dropping in the voice, image, and clip files the runbook names. Do this for every post in the lineup. Do not write any asset into it -- the user generates those; batch only prepares the empty target.

Three hard rules on every post: (1) every image prompt contains the full Style Block + Negative prompt text inline, so the user copy-pastes it with zero edits; (2) no em-dash (—) appears anywhere in the props JSON or in any caption, slide, prompt, engagement prompt, or pinned comment — use a period, comma, colon, or parentheses instead; (3) every caption ends with the standard bio CTA line, verbatim: `Start learning Dutch with Joost: link in bio.`, placed after the save/send or engagement CTA and before the woven keywords.

Asset paths inside the props JSON are relative to `remotion/public/`, so they begin with `<week>/{slug}/` (e.g. `"clip": "<week>/{slug}/clip.mp4"`, `"file": "<week>/{slug}/roos-1.mp3"`, `"coverImage": "<week>/{slug}/cover.png"`).

Keep the on-theme posts coherent but **not visually identical**: they all orbit the same moment, but each is staged in a different setting from the theme's setting list. The cheatsheets hand over the phrases for that moment, the quizzes test a mistake from it, and the second character can recur across the theme. Coherent means same Joost, same style, same *moment* -- a different *setting* each time, never the same opening image. Give each on-theme post a different setting (and shot) so the profile grid never shows the same picture several times (see the playbook's *Feed-grid differentiation* rule). Only collapse two onto one matched shot if the user explicitly asks for a matched grid row.

Apply the playbook rules: hook in the first frame, sends/saves CTA, caption line 1 = searchable keyword, quiz prompts that ask for a reason (never A/B bait), scenario reels at Tier 1 (single composition, no lip-sync, subtitle-led) with Joost locked, visuals on-brand across all types, remixes that transform rather than paste.

Run the **Dutch language check** on every Dutch line before writing the post out (the explicit pass defined in the playbook's *Dutch language standard*; it loads `brand/dutch-grammar.md` for correctness and `brand/dutch-level-guide.md` for level). For each line: correct it against the grammar checklist, score its level against the three difficulty axes, and rewrite anything above A1 down toward A1 (light A2 only when the scene truly needs it, always with the English translation and a one-line reason). The Dutch you write into `remotion/props/<week>/{slug}.json` is the checked, final version, and every line appears in the runbook's **Dutch check** verdict table. Flag the post's Dutch for a quick native check (Joost).

Run the **Voice check** on the English before writing the post out (the editorial pass that matches the playbook's *Caption & voice standard*; it loads `.claude/rules/writing-quality.md` → *Rhetorical-shape tells* and `brand/instagram-voice.md` → *Structural slop*). The free-prose surfaces are: the caption, the cover headline / first-frame hook, the slide editorial subheads (the "when to use it" lines), the engagement prompt, the reel hook and outro lines, and the pinned comment. Read each aloud as if speaking to one friend. Rewrite any surface where the AI sentence-shapes stack (antithesis "not X but Y", forced rule-of-three, grand abstract opener/closer, curiosity-gap "here's why") or that fails the read-aloud test: prefer one plain, concrete sentence over a balanced or clever one, open on the concrete moment, keep the keyword hook human. Density, not zero tolerance: one balanced sentence is fine, do not flatten every line. Record the result as the one-line **Voice check** note in the runbook. The English in the props JSON (`hook`, `outro`, captions, slide subheads) is the checked, final version.

### Step 5: Update the backlog and report

- Set the `status` of each produced post to `produced` in `idea-backlog.json` (leave the rest of each pack untouched).
- For each **evergreen reference post** produced (particle, small-words, mistake, idiom, vocab-scene, knm-quiz), append its specific topic to the backlog's `reference_log` so future weeks do not repeat it. `reference_log` is a flat object keyed by type, e.g. `{"particle": ["nog", "toch"], "idiom": ["animal idioms"], "knm-quiz": ["zorgverzekering eigen risico"], "vocab-scene": ["de keuken"]}`. Create it if it does not exist.
- Report: the theme (or "mixed"), the date range, the `<week>` folder, the 8 posts (day, type, working title), runbook + props file paths, any gaps, and whether the brand kit had unfilled slots.
- Before reporting, verify each runbook: every image prompt contains the full Style Block + Negative prompt text (not a placeholder), every caption ends with `Start learning Dutch with Joost: link in bio.`, and no props JSON or caption text contains an em-dash. Verify the **Voice check** ran: each English free-prose surface (caption, cover hook, slide subheads, engagement prompt, reel hook/outro, pinned comment) reads aloud like one person talking with no stacked AI-slop sentence shapes, and the runbook carries its one-line **Voice check** note.
- Reminder, in this order: "These are drafts for your review -- nothing has been rendered. 1) Read each runbook and verify the content, especially the Dutch. 2) Refine any post with `/instagram-content refine <slug>`. 3) Generate the named assets into `remotion/public/<week>/<slug>/` (already created for you, just drop the files in). 4) Set `Status: approved`. 5) Render with `/instagram-render <slug>`."

---

## Refine Mode Workflow

Triggered by `/instagram-content refine <slug-or-path>`. Edits content **before** rendering. (For changing how an already-rendered post *looks* -- layout, timing, colors -- that is a production edit: point the user to `/instagram-render studio <slug>`.)

1. **Resolve the post.** Find the runbook matching the slug under `outputs/instagram/*/`. If none or several match, list the candidate weeks/posts and ask which. Note the `<week>` folder it lives in -- the matching props file is `remotion/props/<week>/{slug}.json`.
2. **Load just what this type needs.** Read `instagram-playbook.md` (focus on this type's section), `brand/brand-kit.md`, `brand/instagram-voice.md` (apply its tone, its *Structural slop* rules, and captured lessons to every edit), and `remotion/README.md` if the edit touches what Remotion renders. For `article-remix`, also read the source article and its `_brief.json`. Re-read insight fields (`lexicon`, `quotes`, `pains`) only if the user wants fresh grounding. Stay tight to this post.
3. **Iterate.** Support both operations:
   - **Edit in place:** a targeted change ("make slide 3 punchier", "shorten the cover hook", "this quiz is drifting into A/B bait"). Apply directly.
   - **Regenerate a piece:** produce alternatives for one component and let the user pick. Examples: "give me 3 cover hooks", "rewrite the quiz", "two alternative scene-image prompts", "a different caption", "a tighter Dutch dialogue". Show options inline, let the user choose or blend, write the chosen version back.
   After each change, write **both** the runbook MD and `remotion/props/<week>/{slug}.json` so they stay in sync, then confirm what changed. Keep going until satisfied. When a change touches any Dutch, re-run the **Dutch language check** on the changed lines and update the runbook's **Dutch check** verdict table. When a change touches any English caption, slide, hook, or comment, re-run the **Voice check** on that surface and update the runbook's **Voice check** note. Every revision must still pass the post's rules block, including the Dutch language standard (A1 default, grammatically correct, usable), the **Voice check** (no stacked AI-slop sentence shapes; reads aloud like one person talking), the no-em-dash rule (props JSON and every caption/slide/prompt/comment), the full inlined Style Block + Negative prompt in every image step (never a placeholder), and the standard bio CTA line `Start learning Dutch with Joost: link in bio.` in the caption.
4. **Capture durable lessons.** When the user's feedback is a *durable editorial rule* and not a one-off tweak to this single post (e.g. "don't force a correct answer on reflex quizzes", "the switch-to-English feeling is frustration, not shame", "keep the humor but drop the shame"), offer to remember it: ask *"Want me to save this as a durable rule in `brand/instagram-voice.md` so future posts follow it?"* If yes, append a one-line principle plus a short italic _(why / source)_ under the matching heading in `brand/instagram-voice.md` (Tone, Emotional accuracy, Quiz design, or a new heading). Keep it brand-level and reusable, never post-specific. If instead the lesson is about how Remotion *renders* (a visual/production lesson, not editorial), note it belongs in `remotion/README.md` and offer to add it there. All editorial learnings stay in `brand/instagram-voice.md` -- do not write them into `strategy/` files. Skip the offer entirely for purely local edits.
5. **Close out.** Remind the user that content edits do not re-render anything; when the content is right, set `Status: approved`, generate/confirm assets in `remotion/public/<week>/<slug>/` (create this drop folder if it is somehow missing, e.g. on an older post), then run `/instagram-render <slug>`. If they already rendered and now want a different look (not different words), point them to `/instagram-render studio <slug>`.

---

## Check Mode Workflow

Triggered by `/instagram-content check [slug-or-week]`. A standalone run of the **Dutch language check** and the **Voice check** over posts that already exist, for when you want to re-verify the words without a full refine. These are the same two checks that batch and refine run inline, exposed on demand. Loads what the checks need: `brand/dutch-grammar.md` and `brand/dutch-level-guide.md` (Dutch), plus `.claude/rules/writing-quality.md` → *Rhetorical-shape tells* and `brand/instagram-voice.md` → *Structural slop* (voice). It does not touch visuals or the gate, only the words.

1. **Resolve the scope.** With a slug, check that one post. With a `<week>` (`YYYY-MM-DD`), check every runbook in that week. With no argument, check the most recent week. List what was matched.
2. **Check every Dutch line.** For each `nl` line in the props and any Dutch in the runbook: confirm correctness against the grammar checklist, score the level against the three difficulty axes, and rewrite anything above A1 down toward A1 (A2 only when the scene needs it, with a reason). Anything above A2 must be rewritten.
3. **Run the Voice check.** Read each English free-prose surface aloud (caption, cover hook, slide editorial subheads, engagement prompt, reel hook/outro, pinned comment). Rewrite any surface where the AI sentence-shapes stack (antithesis, forced rule-of-three, grand abstract opener/closer, curiosity-gap reveal) or that fails the read-aloud test, per `brand/instagram-voice.md` → *Structural slop*. Density, not zero tolerance.
4. **Write back.** Update the runbook's **Dutch check** verdict table and **Voice check** note, and for any line that changed, the matching `remotion/props/<week>/{slug}.json` so the two stay in sync. **Never change `Status`** (the gate stays the user's). Report per post: Dutch lines checked with their levels, voice surfaces rewritten, and what changed.

## Post Runbook Templates

Every file opens with this header. `Status` is the gate. `{week}` is the week-start date folder the post lives in.

The image steps below embed the brand **Style Block + Negative prompt verbatim** (copied from `brand/brand-kit.md`) so the produced image prompt is copy-paste-ready with nothing left to fill. Reproduce that text in full in every runbook, never a placeholder. The scenario-reel, cheatsheet, and quiz templates carry the canonical inlined blocks; the new-type templates below either **reuse the cheatsheet cover prompt** (concept-guide) or the **quiz scenario prompt** (knm-quiz), or **inline a scene variant** (vocab-scene). The rule is the same in all cases: the **written runbook** must contain the full Style Block + Negative prompt text inline, never a pointer. If you ever change those blocks in `brand/brand-kit.md`, update every template that inlines them.

```markdown
# {Day} {Date} — {Type}: {Working Title}

> **Type:** {scenario-reel | idiom-reel | cheatsheet | quiz | article-remix | particle | small-words | mistake | vocab-scene | knm-quiz | spoken-carousel}
> **Theme:** {the recurring moment, e.g. "the moment they switch to English on you"}
> **Setting:** {the concrete place this post is staged in, e.g. the bakery; "n/a" for the flex/remix}
> **Persona:** {target persona}
> **Positioning thread:** {one value prop woven as undercurrent}
> **Render:** {ScenarioReel | IdiomReel | IdiomShots | PhraseReel | Cheatsheet | Quiz | ConceptGuide | VocabScene} — props: `remotion/props/{week}/{slug}.json` — run `/instagram-render {slug}`
> **Status:** draft   ← set to `approved` (after review + assets saved) to allow rendering

## Rules for this post (keep edits on-rails)
- Dutch: A1 default (light A2 only if the scenario needs it), always grammatically correct, usable; register correct by context; every line passes the Dutch language check and appears in the **Dutch check** table below; flagged for a native check before posting.
- Remotion renders the final asset. Do not assemble in CapCut/Canva. Crisp Dutch text is rendered, never baked into an AI image.
- No em-dash (—) anywhere in this post: not in the props JSON (nl/en/hook/outro/caption text), the slides, the caption, the engagement prompt, or the pinned comment. Use a period, comma, colon, or parentheses. (Brand hard rule: brand/instagram-voice.md + .claude/rules/writing-quality.md.)
- Image prompts carry the full Style Block + Negative prompt text inline, verbatim. Copy-paste-ready, never a placeholder.
- Caption ends with the standard bio CTA line, verbatim: `Start learning Dutch with Joost: link in bio.`
- Caption, hook, and slide text pass the **Voice check**: no stacked AI-slop sentence shapes (antithesis "not X but Y", forced rule-of-three, grand abstract opener/closer, curiosity-gap "here's why"); reads aloud like one person talking to a friend. (See brand/instagram-voice.md → Structural slop + .claude/rules/writing-quality.md → Rhetorical-shape tells.)
- {3-5 more guardrails from the playbook section for this type}

## Dutch check
| # | Dutch line | Level | Correct? | Note |
|---|-----------|-------|----------|------|
| 1 | {nl line} | {A1/A2} | yes | {what was checked or rewritten} |
(One row per Dutch line in the post, filled by the Dutch language check. Anything above A2 is rewritten before approval; an A2 line carries a one-line reason. See the playbook's Dutch language standard.)

## Voice check
{One line: "clean", or what was rewritten and which slop shapes were removed, e.g. "rewrote caption opener (dropped antithesis) and closer (dropped grand frame)." Filled by the Voice check over the caption, cover hook, slide subheads, engagement prompt, reel hook/outro, and pinned comment. See brand/instagram-voice.md → Structural slop.}
```

### scenario-reel (Tier 1: one composition, no lip-sync, subtitle-led)

```markdown
## ASSETS TO GENERATE (save into remotion/public/{week}/{slug}/)

STEP 1 — Voice (ElevenLabs). Use the Joost voice ({voice from brand kit}); pick one warm
Dutch voice for the second character. Settings: Stability ~50, Similarity high, Style low,
slightly slow. Render each line as its own file and save with these exact names (order matters):

  remotion/public/{week}/{slug}/{c1}-1.mp3   "{Dutch}"            (EN: {translation})
  remotion/public/{week}/{slug}/{c2}-2.mp3   "{Dutch or English}" (EN: {translation})
  ...
(Remotion measures each file's length automatically — you do not note durations.)

STEP 2 — Scene image (ChatGPT). Attach: brand/style-ref-1.png, brand/style-ref-2.png,
brand/joost-reference.png. Write the scene description for this reel's two-shot, then append the
Style Block and Negative prompt below it. The pasted prompt must already contain that full text,
written out verbatim. Never leave a placeholder, a bracket like "[inline the style block here]",
or a "see brand-kit" pointer: the runbook must be copy-paste-ready. Paste this exact prompt:

  {Scene description for this reel's 9:16 two-shot. Describe each character by POSITION in the
  frame, e.g. "JOOST behind the counter on the left", "a woman on the right", not by name (names
  confuse image models; the name only lives in the dialogue/subtitles). Keep the bottom third
  calmer and less detailed (subtitles render there). No text in the image.}

  Illustration style:
  Warm, hand-drawn storybook illustration in a soft watercolor-and-ink style. Use
  gentle pencil-like outlines, subtle paper texture, muted cozy colors, and light
  watercolor washes. The image should feel slightly imperfect and handmade, as if
  sketched with ink and colored by hand.

  Characters:
  Characters should have simple friendly faces. Eyes must be drawn only as small
  solid dark circles or vertical oval dots. No pupils, no sclera, no iris, no
  eyelashes, and no glossy or realistic eyes. Keep facial features minimal: a small
  simple nose, soft blush on the cheeks, and a friendly understated expression. Use
  rounded shapes, soft shadows, natural proportions, and expressive but simple
  gestures. Clothing should have gentle fabric texture and small hand-drawn details.

  Setting and background:
  Cozy, calm, and lived-in. Include simple environmental details that support the
  scene (furniture, plants, books, coffee cups, warm window light, shelves,
  textiles, small everyday objects). Detailed enough to feel atmospheric, not so
  busy that it distracts from the main moment. The setting is the Netherlands: when
  the scene is outdoors, the architecture and nature are Dutch (brick terraced or
  canal houses with large windows and gabled facades, bicycles, tiled pavements, a
  flat landscape, a soft grey-blue Dutch sky), never Mediterranean or southern
  European (no terracotta roofs, whitewashed stone, stucco walls, or palm trees).

  Mood:
  Warm, approachable, educational, calm, friendly, slightly whimsical, human, and
  relatable.

  Style keywords:
  Children's book editorial illustration, loose ink linework, watercolor texture,
  soft pastel palette, hand-sketched, slightly whimsical, clean but organic, cozy
  everyday atmosphere.

  Avoid realistic eyes, detailed pupils, sclera, iris, eyelashes, glossy eyes,
  anime eyes, photorealism, 3D render, plastic texture, harsh outlines, sharp
  digital gradients, overly perfect vector art, exaggerated cartoon expressions,
  complex facial detail, hyperreal skin texture, dramatic lighting, cinematic
  realism, overly polished digital art, cluttered composition, text in the image,
  inconsistent character design.

Save it anywhere (it is only the start frame for the clip; the render does not use it).

STEP 3 — Video (image-to-video; Seedance 1 Pro). Upload the Step 2 image as BOTH the begin
frame AND the end frame — Seedance 1 Pro supports both, and setting end frame = begin frame
returns the clip to the scene for a clean loop, so you never write "loop" / "return to the start"
into the prompt. Settings: 9:16, 10s, 720p. SILENT, no lip-sync.

Seedance 1 Pro has NO negative-prompt field, so the prompt is the only steering — and a heavy
"no talking / no lip sync / no mouth movement" list backfires (naming those actions makes the
model perform them). So the motion prompt LEADS with the positive closed-mouth state for each
character by position, keeps the motion tiny, then adds ONE short calm clause of don'ts. Paste
this exact prompt:

  Animate this still image with extremely subtle motion only. {Right character}'s mouth and lips
  remain unchanged and closed for the entire video; {her/his} face stays still. Joost keeps a
  soft, natural closed-mouth expression — at most a tiny relaxed smile shift, lips closed the
  entire time. No speech-like mouth movement, no mouth opening, no jaw motion. {Right character},
  the {woman} on the right, {one tiny body-language gesture}, then returns to the provided
  end-frame pose. Joost, the baker on the left, gives a small head nod and calmly gestures only
  toward {one nearby object}. Static camera with very subtle ambient breathing motion. {Warm calm
  setting} atmosphere. Preserve exact style, character design, composition, and lighting.

(No separate negative prompt — Seedance 1 Pro has none. Do NOT paste a list of mouth/talking
negatives; it triggers the very talking motion you are trying to avoid. Full recipe:
brand/brand-kit.md → Motion.)

Save the clip as: remotion/public/{week}/{slug}/clip.mp4
(Generate exactly ONE 10s clip — never a second one. With begin frame = end frame the clip
already returns to the scene, and Remotion loops it to fill the dialogue, however long, so the
reel loops cleanly on Instagram.)

## WHAT REMOTION PRODUCES (no CapCut)
Remotion loops the clip, sequences the voice lines with auto-detected timing, burns in NL/EN
subtitles, emphasizes the recovery line in gold ("SAY THIS ↓"), adds the 3-second hook overlay,
the "{switch tag}" tag on the English line, and a branded outro (DWJ logo mark + the one line to
remember). The DWJ logo is baked into Remotion — no per-post asset to generate. Output: 9:16 MP4
with audio. Props: remotion/props/{week}/{slug}.json (hook text, the lines + flags, outro).

## RENDER (after Status: approved and all assets saved)
/instagram-render {slug}
(or, manually: cd remotion && npx remotion render src/index.ts ScenarioReel out/{week}/{slug}/{slug}.mp4 --props=props/{week}/{slug}.json)

## CAPTION (paste into Instagram)
{line 1: searchable keyword as a hook}
{2-4 lines of value}
{save/send CTA}
Start learning Dutch with Joost: link in bio.
Keywords woven: {3-6}

## PINNED COMMENT
"{question that pulls a sentence reply}"
```

### cheatsheet

```markdown
## ASSETS TO GENERATE (save into remotion/public/{week}/{slug}/)

COVER IMAGE (ChatGPT). Attach: brand/style-ref-1.png, brand/style-ref-2.png,
brand/joost-reference.png. The pasted prompt must contain the full Style Block and Negative prompt
text below, written out verbatim. Never leave a placeholder or a "see brand-kit" pointer: the
runbook must be copy-paste-ready. Paste this exact prompt:

  Create a warm, hand-drawn storybook illustration, VERTICAL 4:5 (1080×1350, the Instagram feed
  ratio): Joost {at the place, simple friendly action}. Match the STYLE of style-ref-1 and
  style-ref-2 (do not copy their characters or objects). Reproduce JOOST exactly from
  joost-reference. Frame Joost in the UPPER HALF of the image, kept high. The cover crops to a
  horizontal band across the top and fades the lower part into a solid colour panel that holds the
  headline, so keep Joost high and leave the lower third empty. No text in the image. The headline
  is rendered by Remotion.

  Illustration style:
  Warm, hand-drawn storybook illustration in a soft watercolor-and-ink style. Use
  gentle pencil-like outlines, subtle paper texture, muted cozy colors, and light
  watercolor washes. The image should feel slightly imperfect and handmade, as if
  sketched with ink and colored by hand.

  Characters:
  Characters should have simple friendly faces. Eyes must be drawn only as small
  solid dark circles or vertical oval dots. No pupils, no sclera, no iris, no
  eyelashes, and no glossy or realistic eyes. Keep facial features minimal: a small
  simple nose, soft blush on the cheeks, and a friendly understated expression. Use
  rounded shapes, soft shadows, natural proportions, and expressive but simple
  gestures. Clothing should have gentle fabric texture and small hand-drawn details.

  Setting and background:
  Cozy, calm, and lived-in. Include simple environmental details that support the
  scene (furniture, plants, books, coffee cups, warm window light, shelves,
  textiles, small everyday objects). Detailed enough to feel atmospheric, not so
  busy that it distracts from the main moment. The setting is the Netherlands: when
  the scene is outdoors, the architecture and nature are Dutch (brick terraced or
  canal houses with large windows and gabled facades, bicycles, tiled pavements, a
  flat landscape, a soft grey-blue Dutch sky), never Mediterranean or southern
  European (no terracotta roofs, whitewashed stone, stucco walls, or palm trees).

  Mood:
  Warm, approachable, educational, calm, friendly, slightly whimsical, human, and
  relatable.

  Style keywords:
  Children's book editorial illustration, loose ink linework, watercolor texture,
  soft pastel palette, hand-sketched, slightly whimsical, clean but organic, cozy
  everyday atmosphere.

  Avoid realistic eyes, detailed pupils, sclera, iris, eyelashes, glossy eyes,
  anime eyes, photorealism, 3D render, plastic texture, harsh outlines, sharp
  digital gradients, overly perfect vector art, exaggerated cartoon expressions,
  complex facial detail, hyperreal skin texture, dramatic lighting, cinematic
  realism, overly polished digital art, cluttered composition, text in the image,
  inconsistent character design.

Save it as: remotion/public/{week}/{slug}/cover.png
(No Canva. The phrase slides are rendered by Remotion from props, with crisp Dutch text.)

## WHAT REMOTION PRODUCES
A branded carousel: cover (your image + the headline/kicker/sub overlaid) + one card per phrase
(NL hero line, EN translation, a WHEN panel) + a save/send CTA slide. One PNG per slide.
Props: remotion/props/{week}/{slug}.json (cover text, phrases, cta).

The phrases (also written into props):
1. {NL phrase} ({EN translation}) when: {situation}
2. ...

## RENDER (after Status: approved and cover.png saved)
/instagram-render {slug}
(or, manually: cd remotion && npx remotion render src/index.ts Cheatsheet out/{week}/{slug} --sequence --image-format=png --props=props/{week}/{slug}.json)

## CAPTION (paste into Instagram)
{line 1 keyword hook}
{value}
{save/send CTA}
Start learning Dutch with Joost: link in bio.
Keywords woven: {3-6}

## PINNED COMMENT
"{sentence-pulling question}"
```

### spoken-carousel (renders via `PhraseReel` to an MP4 — a "talking carousel")

A carousel of useful sentences turned into a short 9:16 video so each sentence is **pronounced out loud**. The cheap sibling of a scenario reel: ONE still backdrop + one short voice clip per sentence, and **no image-to-video clip** (no Seedance), so it costs like a carousel. Pick it when the value is *hearing* the Dutch. 4–8 phrases (the cheatsheet sweet spot). Audio is made by hand in ElevenLabs and dropped in.

```markdown
## ASSETS TO GENERATE (save into remotion/public/{week}/{slug}/)

STEP 1 — Voice each phrase (ElevenLabs). Use the Joost voice ({voice from brand kit}).
Settings: Stability ~50, Similarity high, Style low, slightly slow (learners repeat after him).
Render EACH phrase as its own file, in order, with these exact names:

  remotion/public/{week}/{slug}/phrase-1.mp3   "{Dutch phrase 1}"   (EN: {translation})
  remotion/public/{week}/{slug}/phrase-2.mp3   "{Dutch phrase 2}"   (EN: {translation})
  ...one mp3 per phrase, numbered in order...
(One sentence per file. Remotion measures each file's length automatically — you never note
durations. Just the clean sentence, a touch slow; no trailing silence needed.)

STEP 2 — Backdrop image (ChatGPT). ONE full-bleed 9:16 watercolor scene that sits behind every
card. Attach: brand/style-ref-1.png, brand/style-ref-2.png, brand/joost-reference.png. The pasted
prompt must contain the full Style Block and Negative prompt below, written out verbatim. Never
leave a placeholder or a "see brand-kit" pointer: the runbook must be copy-paste-ready. Paste this
exact prompt:

  Create a warm, hand-drawn storybook illustration, VERTICAL 9:16 (1080×1920, full-bleed): Joost
  {at the place, simple friendly action}. Match the STYLE of style-ref-1 and style-ref-2 (do not
  copy their characters or objects). Reproduce JOOST exactly from joost-reference. Frame Joost in
  the UPPER or CENTRE of the frame and keep the BOTTOM third calmer and less busy (the cover title
  is rendered there). The centre is dimmed by a text plate at render time, so it need not be empty.
  No text in the image. All Dutch is rendered by Remotion.

  Illustration style:
  Warm, hand-drawn storybook illustration in a soft watercolor-and-ink style. Use
  gentle pencil-like outlines, subtle paper texture, muted cozy colors, and light
  watercolor washes. The image should feel slightly imperfect and handmade, as if
  sketched with ink and colored by hand.

  Characters:
  Characters should have simple friendly faces. Eyes must be drawn only as small
  solid dark circles or vertical oval dots. No pupils, no sclera, no iris, no
  eyelashes, and no glossy or realistic eyes. Keep facial features minimal: a small
  simple nose, soft blush on the cheeks, and a friendly understated expression. Use
  rounded shapes, soft shadows, natural proportions, and expressive but simple
  gestures. Clothing should have gentle fabric texture and small hand-drawn details.

  Setting and background:
  Cozy, calm, and lived-in. Include simple environmental details that support the
  scene (furniture, plants, books, coffee cups, warm window light, shelves,
  textiles, small everyday objects). Detailed enough to feel atmospheric, not so
  busy that it distracts from the main moment. The setting is the Netherlands: when
  the scene is outdoors, the architecture and nature are Dutch (brick terraced or
  canal houses with large windows and gabled facades, bicycles, tiled pavements, a
  flat landscape, a soft grey-blue Dutch sky), never Mediterranean or southern
  European (no terracotta roofs, whitewashed stone, stucco walls, or palm trees).

  Mood:
  Warm, approachable, educational, calm, friendly, slightly whimsical, human, and
  relatable.

  Style keywords:
  Children's book editorial illustration, loose ink linework, watercolor texture,
  soft pastel palette, hand-sketched, slightly whimsical, clean but organic, cozy
  everyday atmosphere.

  Avoid realistic eyes, detailed pupils, sclera, iris, eyelashes, glossy eyes,
  anime eyes, photorealism, 3D render, plastic texture, harsh outlines, sharp
  digital gradients, overly perfect vector art, exaggerated cartoon expressions,
  complex facial detail, hyperreal skin texture, dramatic lighting, cinematic
  realism, overly polished digital art, cluttered composition, text in the image,
  inconsistent character design.

Save it as: remotion/public/{week}/{slug}/cover.png
(No Canva. The phrase cards and all Dutch text are rendered by Remotion, correctly spelled.)

## WHAT REMOTION PRODUCES (PhraseReel → MP4; no CapCut, no Seedance)
A 9:16 MP4 "talking carousel": a cover title card (with a SOUND ON cue), then one card per phrase
that holds for exactly the length of its voice clip — big NL hero line, the EN beneath (revealed a
beat later), an optional gold WHEN pill, a pulsing listen badge, progress dots + counter — over the
slowly zooming backdrop, then a branded blue CTA outro. Durations are auto-measured from the mp3s;
the DWJ logo is baked in. Output: 9:16 1080×1920 MP4 with the voice track muxed in. It ends on the
CTA card, so it skips the reel loop-check.
Props: remotion/props/{week}/{slug}.json (theme, cover {kicker,title,sub}, phrases [each: file, nl,
en, when], outro {title, sub}).

The phrases (also written into props, one voiced mp3 each):
1. {NL phrase} ({EN translation}) when: {situation}  → phrase-1.mp3
2. ...

## RENDER (after Status: approved and all assets saved)
/instagram-render {slug}
(or, manually: cd remotion && npx remotion render src/index.ts PhraseReel out/{week}/{slug}/{slug}.mp4 --props=props/{week}/{slug}.json)

## CAPTION (paste into Instagram)
{line 1: searchable keyword hook, e.g. "How to order at a Dutch bakery (say it out loud)"}
{value: turn the sound on and repeat each line after Joost}
{save/send CTA}
Start learning Dutch with Joost: link in bio.
Keywords woven: {3-6}

## PINNED COMMENT
"{question that pulls a sentence reply}"
```

### quiz

```markdown
## ASSETS TO GENERATE (save into remotion/public/{week}/{slug}/)

SCENARIO IMAGE (ChatGPT). Attach: brand/style-ref-1.png, brand/style-ref-2.png,
brand/joost-reference.png. The pasted prompt must contain the full Style Block and Negative prompt
text below, written out verbatim. Never leave a placeholder or a "see brand-kit" pointer: the
runbook must be copy-paste-ready. Paste this exact prompt:

  Create a warm, hand-drawn storybook illustration, VERTICAL 4:5 (1080×1350, the Instagram feed
  ratio): {the quiz scenario, e.g. Joost behind a bakery counter}. Match the STYLE of style-ref-1
  and style-ref-2. Reproduce JOOST exactly from joost-reference. The question overlay sits CENTRED
  over a dark scrim covering the whole image, so framing is flexible. Just keep the mid-frame from
  being too busy behind the large question. No text in the image. The question is rendered by Remotion.

  Illustration style:
  Warm, hand-drawn storybook illustration in a soft watercolor-and-ink style. Use
  gentle pencil-like outlines, subtle paper texture, muted cozy colors, and light
  watercolor washes. The image should feel slightly imperfect and handmade, as if
  sketched with ink and colored by hand.

  Characters:
  Characters should have simple friendly faces. Eyes must be drawn only as small
  solid dark circles or vertical oval dots. No pupils, no sclera, no iris, no
  eyelashes, and no glossy or realistic eyes. Keep facial features minimal: a small
  simple nose, soft blush on the cheeks, and a friendly understated expression. Use
  rounded shapes, soft shadows, natural proportions, and expressive but simple
  gestures. Clothing should have gentle fabric texture and small hand-drawn details.

  Setting and background:
  Cozy, calm, and lived-in. Include simple environmental details that support the
  scene (furniture, plants, books, coffee cups, warm window light, shelves,
  textiles, small everyday objects). Detailed enough to feel atmospheric, not so
  busy that it distracts from the main moment. The setting is the Netherlands: when
  the scene is outdoors, the architecture and nature are Dutch (brick terraced or
  canal houses with large windows and gabled facades, bicycles, tiled pavements, a
  flat landscape, a soft grey-blue Dutch sky), never Mediterranean or southern
  European (no terracotta roofs, whitewashed stone, stucco walls, or palm trees).

  Mood:
  Warm, approachable, educational, calm, friendly, slightly whimsical, human, and
  relatable.

  Style keywords:
  Children's book editorial illustration, loose ink linework, watercolor texture,
  soft pastel palette, hand-sketched, slightly whimsical, clean but organic, cozy
  everyday atmosphere.

  Avoid realistic eyes, detailed pupils, sclera, iris, eyelashes, glossy eyes,
  anime eyes, photorealism, 3D render, plastic texture, harsh outlines, sharp
  digital gradients, overly perfect vector art, exaggerated cartoon expressions,
  complex facial detail, hyperreal skin texture, dramatic lighting, cinematic
  realism, overly polished digital art, cluttered composition, text in the image,
  inconsistent character design.

Save it as: remotion/public/{week}/{slug}/scenario.png

## WHAT REMOTION PRODUCES
Three slides: a scenario cover with the question overlaid, an options slide (A/B/C cards), and a
reveal slide (reframe or answer + teach). Props: remotion/props/{week}/{slug}.json.

The quiz (also written into props):
- Scenario line: "{real situation}"
- Question: "{Dutch prompt}" (EN: {translation})
- Options: A) {...}  B) {...}  C) {...}
- Correct: {letter, OR omit for a reason-seeking reflex quiz with no right answer}
- Reveal: {one-line reframe or teach}

## RENDER (after Status: approved and scenario.png saved)
/instagram-render {slug}
(or, manually: cd remotion && npx remotion render src/index.ts Quiz out/{week}/{slug} --sequence --image-format=png --props=props/{week}/{slug}.json)

## ENGAGEMENT PROMPT (overlay / caption — beats the bait filter)
"{asks for a reason or personal angle, never bare A/B}"

## CAPTION (paste into Instagram)
{line 1 keyword hook}
{value}
{engagement prompt}
Start learning Dutch with Joost: link in bio.
Keywords woven: {3-6}

## PINNED COMMENT
"{sentence-pulling question}"
```

### article-remix

```markdown
## SOURCE
- Article: {path to _final.mdx}
- Primary keyword (from brief): "{keyword}"
- Chosen angle: {the ONE idea pulled out, not a summary}
- Format: {carousel → Cheatsheet | reel → ScenarioReel}
- Originality note: transform, do not paste. No verbatim paragraphs.

## RUNBOOK
{Reuse the cheatsheet or scenario-reel template above depending on Format, fully filled, including
the ASSETS / WHAT REMOTION PRODUCES / RENDER sections and the matching remotion/props/{week}/{slug}.json.
Caption line 1 = the article's primary keyword.}
```

### concept-guide (particle | small-words | mistake — renders via `ConceptGuide`)

One template, three variants: the post `type` sets the `variant` and the bank. **Read the bank for this type and build the cards from it, never from memory:** particle → `brand/modal-particles.md`, small-words → `brand/sound-more-dutch.md`, mistake → `brand/common-mistakes.md`. (Idioms are no longer a concept-guide variant; they render as an `idiom-reel`, see the template below.)

```markdown
## ASSETS TO GENERATE (save into remotion/public/{week}/{slug}/)

COVER IMAGE (ChatGPT). Same cover treatment as the cheatsheet: Joost in the upper half, VERTICAL 4:5, the
headline rendered by Remotion (leave text out of the image). Attach: brand/style-ref-1.png,
brand/style-ref-2.png, brand/joost-reference.png. Paste the **Cheatsheet COVER IMAGE prompt above verbatim**
(the full Style Block and Negative prompt inline, exactly as written there), changing only the first scene
line to suit the topic, e.g. "Joost at a desk with a notebook in a warm, thinking pose" (particle / mistake),
"Joost chatting over coffee" (small-words), or "Joost reading with a small smile" (idiom). The written runbook
must contain the full Style Block + Negative prompt inline, never a "see brand-kit" pointer.

Save it as: remotion/public/{week}/{slug}/cover.png

## WHAT REMOTION PRODUCES
A branded ConceptGuide carousel: cover (your image + headline/kicker/sub + a gold variant marker) + an
optional intro slide + one card per concept + a save/send CTA slide. One PNG per slide. Props:
remotion/props/{week}/{slug}.json (variant, theme, cover, intro?, cards, cta).

The content (also written into props), pulled from the bank:
- variant: {particle | small-words | mistake}
- intro (use for particle + mistake; set to `null` for small-words, do not omit it, props merge over defaults): {title} / {body} / {points[]}
- cards (4-8), each: {term} (required) + {sub}? (the idiom's literal line, or a short gloss) + {meaning}? +
  {examples}? (1-2 nl/en pairs) + {note}? (the "when to use it" line)
  1. {term} — {sub?} — {meaning?} — ex: {nl} ({en}) — note: {note?}
  2. ...

## RENDER (after Status: approved and cover.png saved)
/instagram-render {slug}
(or, manually: cd remotion && npx remotion render src/index.ts ConceptGuide out/{week}/{slug} --sequence --image-format=png --props=props/{week}/{slug}.json)

## CAPTION (paste into Instagram)
{line 1 keyword hook, e.g. "How to use 'nog' in Dutch" / "niet or geen?" / "5 little words to sound more Dutch" / "Dutch idioms that make no sense"}
{2-4 lines of value}
{save/send CTA}
Start learning Dutch with Joost: link in bio.
Keywords woven: {3-6}

## PINNED COMMENT
"{question that pulls a sentence reply, e.g. which little word trips you up most?}"
```

### idiom-reel (renders via `IdiomReel`)

The funny idiom format: **one idiom per reel, one per week**, from `brand/dutch-idioms.md`. A Dutch speaker uses the idiom naturally; the learner pictures it LITERALLY (a timed cutaway to a full-frame literal image, framed as a daydream); brief confusion; then the meaning lands (by the Dutch speaker, or by us in the outro). Built on the scenario-reel backbone (looped conversation clip, subtitles, hook, loop-safe outro) plus the literal cutaway. The sequence can vary; the literal-imagination is the visual punchline. Keep one recurring learner character across the series.

**Two ways to make this.** The **clip version** here uses a Seedance conversation clip + a full-frame literal cutaway. The **stills version** below (`idiom-reel — stills version`, renders via `IdiomShots`) uses NO Seedance: a wide two-shot, a push-in to the confused learner with the idiom in a thought bubble, and a held gesture. Prefer the stills version to avoid the image-to-video cost and get the zoom + bubble + gesture treatment; use the clip version when you specifically want live motion in the scene.

```markdown
## ASSETS TO GENERATE (save into remotion/public/{week}/{slug}/)

STEP 1 — Voice (ElevenLabs). The conversation lines, one mp3 each, exact names in order. Joost voice for the
Dutch speaker; one warm recurring learner voice for the series. Same settings as the scenario-reel.

  remotion/public/{week}/{slug}/{c1}-1.mp3   "{the idiom, said naturally}"   (EN: {gloss})
  remotion/public/{week}/{slug}/{c2}-2.mp3   "{the literal reaction}"        (EN: {gloss})   <- imagine: true
  remotion/public/{week}/{slug}/{c1}-3.mp3   "{a beat / clearing it up}"     (EN: {gloss})
  remotion/public/{week}/{slug}/{c1}-4.mp3   "{the real meaning}"            (EN: {gloss})   <- recovery: true

STEP 2 — Conversation scene image (ChatGPT). The 9:16 two-shot (the Dutch speaker + the learner, at the
setting). **Paste the scenario-reel STEP 2 prompt verbatim** (the full Style Block + Negative prompt inline,
exactly as written there), changing only the scene description line. Save as `starting-frame.png` (the begin =
end frame for the loop).

STEP 3 — Video (image-to-video; Seedance 1 Pro). **Paste the scenario-reel STEP 3 motion prompt verbatim**
(closed mouths, tiny motion, begin frame = end frame). Save as `clip.mp4`.

STEP 4 — Literal-imagination image (ChatGPT). The gag, shown full-frame as the cutaway: the idiom drawn
LITERALLY (e.g. a monkey climbing out of a sweater sleeve), VERTICAL 9:16, full-bleed. Attach the same brand
refs and **reproduce the full Style Block + Negative prompt inline** (same text as STEP 2), changing only the
scene line to the literal image. No text in the image. Save as `literal.png`.

## WHAT REMOTION PRODUCES (IdiomReel)
Loops the conversation clip, sequences the voice lines with auto-timing, burns in NL/EN subtitles, CUTS AWAY
to `literal.png` at the line flagged `imagine: true` (gold daydream frame + "WHAT I PICTURED" badge +
`literalCaption`), emphasizes the meaning line (`recovery: true`) in gold, and shows the idiom + literal +
meaning on the branded outro. Output: 9:16 MP4 with audio. Props: remotion/props/{week}/{slug}.json (clip,
literalImage, literalLabel, literalCaption, hook, lines, outro).

The dialogue + idiom (also written into props), from the bank:
- hook: {l1} / {l2} / {emphasis} — the literal gag in the first 3 seconds
- lines: the Dutch speaker uses the idiom, then the learner's literal reaction (`imagine: true`), a beat, then
  the meaning (`recovery: true`). The idiom is the sanctioned above-A1 element; everything else A1 and glossed.
- outro: {kicker} / {the idiom, nl} / {literal} / {meaning, en} / {cta} / {handle}

## RENDER (after Status: approved and all assets saved)
/instagram-render {slug}
(or, manually: cd remotion && npx remotion render src/index.ts IdiomReel out/{week}/{slug}/{slug}.mp4 --props=props/{week}/{slug}.json)

## CAPTION (paste into Instagram)
{line 1 keyword hook, e.g. "Dutch idioms, taken literally"}
{2-4 lines of value; always gloss the idiom (literal + meaning) so it never sits untranslated}
{save/send CTA}
Start learning Dutch with Joost: link in bio.
Keywords woven: {3-6}

## PINNED COMMENT
"{question that pulls a sentence reply, e.g. which Dutch idiom made no sense the first time you heard it?}"
```

### idiom-reel — stills version (renders via `IdiomShots`, no Seedance)

The **Seedance-free** idiom reel, and the preferred one when you want the camera move. Instead of a looped clip it is a SHOT SEQUENCE of stills: a wide two-shot (Dutch speaker + learner) → a push-in to a close-up of the confused learner with the idiom in a **thought bubble** above her → a pull-back to the two-shot, where the speaker **switches to a gesture** (hand up, mouth open) on the meaning line and holds it. Same hook + branded outro as the clip version. Costs like a carousel (a few stills, no image-to-video). The whole format lives on **consistency**: every extra frame is made by attaching the wide shot and changing only one thing, so the cross-dissolves animate just that.

```markdown
## ASSETS TO GENERATE (save into remotion/public/{week}/{slug}/)

STEP 1 — Voice (ElevenLabs). Four lines, one mp3 each, exact names in order. Joost for the Dutch speaker, one
warm recurring learner voice. Same settings as the scenario-reel.

  remotion/public/{week}/{slug}/{c1}-1.mp3   "{the idiom, said naturally}"   (EN: {gloss})
  remotion/public/{week}/{slug}/{c2}-2.mp3   "{the literal reaction}"        (EN: {gloss})   <- close + imagine
  remotion/public/{week}/{slug}/{c1}-3.mp3   "{a beat / clearing it up}"     (EN: {gloss})
  remotion/public/{week}/{slug}/{c1}-4.mp3   "{the real meaning}"            (EN: {gloss})   <- recovery + gesture

STEP 2 — Wide two-shot (ChatGPT). The 9:16 two-shot: the Dutch speaker and the learner STANDING, talking,
looking at each other, the learner clearly on ONE side (note which). **Paste the scenario-reel STEP 2 prompt
verbatim** (the full Style Block + Negative prompt inline), changing only the scene description line to this
two-shot. Both mouths closed, no text. Save as `wide.png` — this is the ANCHOR for the next three steps.

STEP 3 — Wide gesture frame (ChatGPT). ATTACH `wide.png` and prompt: "keep EVERYTHING identical (the learner,
the room, framing, lighting, colours); change ONLY the Dutch speaker: raise his nearer hand into an open
'let me explain' gesture (palm up, ~chest height) and open his mouth slightly as if mid-word." Style is
inherited from the attached image, so no full block needed. Save as `wide-gesture.png`.

STEP 4 — Close-up of the learner (ChatGPT). ATTACH `wide.png` and prompt: "a close-up portrait of the SAME
learner (same face, hair, clothes), facing the camera, filling the frame chest-up, a puzzled CONFUSED look
(eyebrows up, head tilted, lips closed). Leave clear EMPTY SPACE above her head for a thought bubble. Same
style, no text." Save as `close.png`.

STEP 5 — Literal-imagination image (ChatGPT). The idiom drawn LITERALLY for the bubble (e.g. a small monkey
climbing out of a sleeve), roughly SQUARE (1:1), the subject CENTERED on a plain soft background (no scene, no
clutter). **Reproduce the full Style Block + Negative prompt inline** (same text as STEP 2). No text. Save as
`ape.png`.

## WHAT REMOTION PRODUCES (IdiomShots, no Seedance)
A stills shot-sequence: a 3-second hook, the wide two-shot, a push-in (scale + cross-dissolve toward `focus`)
to the learner's close-up with the ape in a thought bubble (line flagged `close` + `imagine`), a pull-back to
the wide, the speaker switching to `wide-gesture.png` and holding it (line flagged `gesture`), then the branded
outro card. Per-line NL/EN subtitles; durations auto-measured. Output: 9:16 MP4. Props:
remotion/props/{week}/{slug}.json (shotWide, shotWideGesture, shotClose, apeImage, focus, hook, outro, lines).

The dialogue + idiom (also written into props), from `brand/dutch-idioms.md`:
- focus: {x, y} — the learner's position in the wide shot (the push-in target), 0-1 fractions
- hook: {l1} / {l2} / {emphasis} — the literal gag in the first 3 seconds
- lines: speaker uses the idiom; learner's literal reaction (`close: true, imagine: true`); a beat; the meaning
  (`recovery: true, gesture: true`). The idiom is the sanctioned above-A1 element; the rest A1 and glossed.
- outro: {kicker} / {idiom, nl} / {literal} / {meaning, en} / {cta} / {handle}

## RENDER (after Status: approved and all assets saved)
/instagram-render {slug}
(or, manually: cd remotion && npx remotion render src/index.ts IdiomShots out/{week}/{slug}/{slug}.mp4 --props=props/{week}/{slug}.json)

## CAPTION (paste into Instagram)
{line 1 keyword hook, e.g. "Dutch idioms, taken literally"}
{2-4 lines of value; always gloss the idiom (literal + meaning) so it never sits untranslated}
{save/send CTA}
Start learning Dutch with Joost: link in bio.
Keywords woven: {3-6}

## PINNED COMMENT
"{question that pulls a sentence reply}"
```

### vocab-scene (renders via `VocabScene`)

Read `brand/vocab-scenes.md` for the scene's word list. Pick **8-12 concrete A1 items with correct articles**. Remotion draws the labels, so the image is generated label-free.

```markdown
## ASSETS TO GENERATE (save into remotion/public/{week}/{slug}/)

SCENE IMAGE (ChatGPT). Generate the scene with **NO text and breathing room around each object** (the labels
are added by Remotion). Attach: brand/style-ref-1.png, brand/style-ref-2.png, brand/joost-reference.png. Paste
this exact prompt (the scene description, then the full Style Block and Negative prompt verbatim):

  Create a warm, hand-drawn storybook illustration, VERTICAL 4:5 (1080×1350): {the setting, e.g. a cosy
  kitchen with Joost cooking at the stove}. Show the everyday objects to be labelled clearly separated, each
  with calm empty space around it ({list the items, e.g. the pan, the oven, the tap, the knife, the cutting
  board}), so there is room for a small label beside each one. Match the STYLE of style-ref-1 and style-ref-2
  (do not copy their objects). Reproduce JOOST exactly from joost-reference. IMPORTANT: no text, no letters,
  no numbers, and no labels anywhere in the image. Every word is added later by Remotion.

  Illustration style:
  Warm, hand-drawn storybook illustration in a soft watercolor-and-ink style. Use
  gentle pencil-like outlines, subtle paper texture, muted cozy colors, and light
  watercolor washes. The image should feel slightly imperfect and handmade, as if
  sketched with ink and colored by hand.

  Characters:
  Characters should have simple friendly faces. Eyes must be drawn only as small
  solid dark circles or vertical oval dots. No pupils, no sclera, no iris, no
  eyelashes, and no glossy or realistic eyes. Keep facial features minimal: a small
  simple nose, soft blush on the cheeks, and a friendly understated expression. Use
  rounded shapes, soft shadows, natural proportions, and expressive but simple
  gestures. Clothing should have gentle fabric texture and small hand-drawn details.

  Setting and background:
  Cozy, calm, and lived-in. Include simple environmental details that support the
  scene (furniture, plants, books, coffee cups, warm window light, shelves,
  textiles, small everyday objects). Detailed enough to feel atmospheric, not so
  busy that it distracts from the main moment. The setting is the Netherlands: when
  the scene is outdoors, the architecture and nature are Dutch (brick terraced or
  canal houses with large windows and gabled facades, bicycles, tiled pavements, a
  flat landscape, a soft grey-blue Dutch sky), never Mediterranean or southern
  European (no terracotta roofs, whitewashed stone, stucco walls, or palm trees).

  Mood:
  Warm, approachable, educational, calm, friendly, slightly whimsical, human, and
  relatable.

  Style keywords:
  Children's book editorial illustration, loose ink linework, watercolor texture,
  soft pastel palette, hand-sketched, slightly whimsical, clean but organic, cozy
  everyday atmosphere.

  Avoid realistic eyes, detailed pupils, sclera, iris, eyelashes, glossy eyes,
  anime eyes, photorealism, 3D render, plastic texture, harsh outlines, sharp
  digital gradients, overly perfect vector art, exaggerated cartoon expressions,
  complex facial detail, hyperreal skin texture, dramatic lighting, cinematic
  realism, overly polished digital art, cluttered composition, text in the image,
  inconsistent character design.

Save it as: remotion/public/{week}/{slug}/scene.png

Then place each label in props: {nl, en, x, y, point}, where x/y (0-1) is the chip's centre and point (0-1)
is the object it tags (omit point for a chip with no arrow). Author positions against the actual image;
`/instagram-render studio {slug}` is the fastest way to nudge them. Keep labels clear of the top title band.

## WHAT REMOTION PRODUCES
A VocabScene carousel: the labeled poster (your scene + crisp NL/EN chips + arrows + the NL/EN title) + an
optional recap list slide + a CTA. Props: remotion/props/{week}/{slug}.json (theme, sceneImage, title, labels, recap?, cta).

The labels (also written into props), from the bank:
1. {nl} ({en})  → chip at x,y, arrow to point x,y
2. ...

## RENDER (after Status: approved and scene.png saved)
/instagram-render {slug}
(or, manually: cd remotion && npx remotion render src/index.ts VocabScene out/{week}/{slug} --sequence --image-format=png --props=props/{week}/{slug}.json)

## CAPTION (paste into Instagram)
{line 1 keyword hook, e.g. "Dutch kitchen vocabulary"}
{2-4 lines of value}
{save/send CTA}
Start learning Dutch with Joost: link in bio.
Keywords woven: {3-6}

## PINNED COMMENT
"{question that pulls a sentence reply, e.g. which word is new to you?}"
```

### knm-quiz (renders via `Quiz`, with a correct answer)

Read **one indicator** from `brand/knm-facts.md`. Never invent a civic fact; pull it from there (re-check `⚠️` volatile facts). Question + the three options are in **simple Dutch (A2) with English under each**. This is a correct-answer quiz, so set `correct`.

```markdown
## ASSETS TO GENERATE (save into remotion/public/{week}/{slug}/)

SCENARIO IMAGE (ChatGPT). Same as the reflex-quiz scenario image, for the civic situation. Attach:
brand/style-ref-1.png, brand/style-ref-2.png, brand/joost-reference.png. Paste the **Quiz SCENARIO IMAGE
prompt above verbatim** (the full Style Block and Negative prompt inline, exactly as written there), changing
only the scene line to the civic situation, e.g. "Joost at the huisarts reception", "Joost at the gemeente
counter", or "Joost reading a huurcontract at his kitchen table". No text in the image. The written runbook
must contain the full Style Block + Negative prompt inline, never a pointer.

Save it as: remotion/public/{week}/{slug}/scenario.png

## WHAT REMOTION PRODUCES
The Quiz carousel: a scenario cover with the question overlaid, an options slide (A/B/C cards, each with the
English under the Dutch), and a reveal slide (the correct answer + one-line teach). Props:
remotion/props/{week}/{slug}.json.

The quiz (also written into props), from knm-facts.md:
- Indicator: {theme + indicator, e.g. 4.4.1 zorgverzekering / eigen risico}
- Scenario line: "{the real situation, English}"
- Question: "{A2 Dutch prompt}" (EN: {translation})
- Options (each carries textEn = the English under it):
  A) {nl} ({en})   B) {nl} ({en})   C) {nl} ({en})
- Correct: {letter}
- Reveal: {one-line teach of the verified fact}

## RENDER (after Status: approved and scenario.png saved)
/instagram-render {slug}
(or, manually: cd remotion && npx remotion render src/index.ts Quiz out/{week}/{slug} --sequence --image-format=png --props=props/{week}/{slug}.json)

## ENGAGEMENT PROMPT (overlay / caption — beats the bait filter)
"{ask for a guess or a reason, e.g. did the real answer surprise you?}"

## CAPTION (paste into Instagram)
{line 1 keyword hook, e.g. "Could you pass the inburgering exam?" / "KNM practice question"}
{2-4 lines of value}
{engagement prompt}
Start learning Dutch with Joost: link in bio.
Keywords woven: {3-6}

## PINNED COMMENT
"{question that pulls a sentence reply}"
```
