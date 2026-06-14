---
name: instagram-content
description: Author Instagram posts — plan a themed idea backlog, produce a week of reviewable post runbooks (+ render props), and refine any single post. Writes documents to outputs/instagram/<week>/; renders nothing. Three modes: plan, batch, refine. Rendering is the separate /instagram-render skill.
---

# Instagram Content (the writers' room)

This skill **authors the documents** for Instagram. It plans ideas, writes a week of reviewable post runbooks, and edits them — and it produces `outputs/instagram/<week>/`. It never produces a pixel. Turning an approved post into a finished reel or carousel is the companion skill **`/instagram-render`**, which owns the `remotion/` project.

The split is the human gate. This skill ends at `Status: approved`. `/instagram-render` begins there. Built around the 2026 algorithm: sends > saves > sentence-comments, hook in the first 3 seconds, caption SEO over hashtags, originality over recycled clips.

**Three modes:**

- `/instagram-content plan [theme hint]` -- **plan**. Build or refresh the idea backlog of themed situation packs.
- `/instagram-content` or `/instagram-content batch [theme hint]` -- **batch** (default). Produce one themed week of reviewable runbooks + render props. Renders nothing.
- `/instagram-content refine <slug-or-path>` -- **refine**. Iterate on one existing post's content (runbook + props).

## When to call what

| You want to... | Run |
|----------------|-----|
| Build or curate the idea backlog | `/instagram-content plan` |
| Produce this week's posts (runbooks + props) | `/instagram-content` (batch) |
| Fix what a post **says** (Dutch, hook, caption, quiz, slides) | `/instagram-content refine <slug>` |
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
- `brand/brand-kit.md` -- the visual and asset identity for all posts: Style Block, Negative prompt, Joost reference, style-reference filenames, ElevenLabs voices, and the logo. Inline the relevant pieces into each post's asset steps. The logo is rendered automatically by Remotion (into the wordmark and reel outro) and is never a user-generated per-post asset -- do not add a logo step to runbooks.
- `brand/brand-colors.json` -- the brand palette Remotion renders with (blue `#0025DB`, gold `#E0BB00`, etc.). The skill does not set colors per post; the compositions read the palette. Referenced so the skill keeps captions/overlays on-brand.
- `brand/instagram-voice.md` -- the editorial voice and tone identity: brand-specific tone, emotional-accuracy rules, and per-format lessons captured from past refine sessions. Apply it to every caption, slide, dialogue, and quiz. This is the file the refine "capture a lesson" prompt writes back to.
- `strategy/positioning.md` -- value props to thread as undercurrent.
- `strategy/personas.md` -- who each post targets and their pains.
- `customer-intelligence/insights/*.json` -- `lexicon` and `quotes` (phrasing for cheatsheets and dialogue), `pains` and `jtbd` (situations, quiz scenarios, angles), `keyword_candidates` (caption SEO).
- `outputs/articles/*` -- the article library, for remix ideas and (remix production) the source article (prefer `_final.mdx`).
- `outputs/briefs/*_brief.json` -- **remix only**: the article's primary keyword for caption SEO.

The brand `.png` files are attached by the user inside ChatGPT, not read by the skill. The skill only names them. Does NOT read `knowledge-base.md`, `icp.md`, `competitive-landscape.md`, `voice-guide.md`. The global `.claude/rules/writing-quality.md` applies to all captions and slides.

If `brand/brand-kit.md` is missing or its asset slots are unfilled, warn that asset steps will contain placeholders, and point to the one-time setup in `brand/SETUP.md`. If the `remotion/` project is missing, warn that `/instagram-render` will not work and point to `remotion/README.md`.

## Output

This skill writes only authoring artifacts. The finished asset is produced later by `/instagram-render`.

- `outputs/instagram/idea-backlog.json` -- the curated backlog of themed situation packs. **One persistent file at the top of the folder** (plan mode writes; batch mode reads and updates `status`).
- `outputs/instagram/<week>/_plan.md` -- the produced week's overview grid (batch mode). `<week>` is the week-start date `YYYY-MM-DD`.
- `outputs/instagram/<week>/{type}_{slug}.md` -- one reviewable runbook per post. `type` is `cheatsheet`, `quiz`, `scenario-reel`, or `article-remix`. **This is the human-gate artifact.** It carries `Status: draft` until the user approves. (The week folder carries the date, so the filename no longer repeats it.)
- `remotion/props/<week>/{slug}.json` -- the render props for the post, written by batch alongside the runbook. The contract between this skill and the Remotion composition.

Create `outputs/instagram/<week>/` and `remotion/props/<week>/` if they do not exist. Each post file carries its own rules block plus the runbook, so plain conversational edits stay on-rails without re-invoking the skill.

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
  out/<week>/{slug}.mp4 | out/<week>/{slug}/element-*.png   ← /instagram-render writes here
```

When composing a week, pick `<week>` = the date the week starts (the date the user is planning from, or today's date if unspecified). Use the **same `<week>` value** for the plan file, every runbook, and every props file in that batch, and bake it into the asset-save paths and render command inside each runbook. Asset paths inside a props JSON are relative to `remotion/public/`, so they must start with `<week>/{slug}/...` (e.g. `"coverImage": "2026-06-15/keep-them-in-dutch/cover.png"`).

---

## The human review gate

The gate sits between this skill (content) and `/instagram-render` (production), mirroring the seo-pipeline outline gate:

1. `batch` writes the runbook MD (`Status: draft`) and the props JSON. **No asset is rendered.**
2. The user reads each runbook, verifies the content -- above all the Dutch (correct, A1-level, usable) -- and refines anything off (`/instagram-content refine <slug>`).
3. The user generates the upstream assets named in the runbook (voice, image, clip) and drops them into `remotion/public/<week>/{slug}/`.
4. The user approves by setting `Status: approved` at the top of the runbook.
5. `/instagram-render <slug>` produces the asset -- and refuses if `Status` is not `approved` or assets are missing.

Do not skip the gate. Do not render here. Do not set `Status: approved` yourself.

---

## Plan Mode Workflow

Triggered by `/instagram-content plan [theme hint]`. Produces a backlog the user curates, so weeks are drawn from an approved idea bank instead of invented from scratch each time.

### Step 1: Load context

Read `instagram-playbook.md`, `brand/brand-kit.md`, `brand/instagram-voice.md`, `strategy/positioning.md`, `strategy/personas.md`, all `customer-intelligence/insights/*.json`, and the list of articles in `outputs/articles/`. If a backlog already exists, read it too (to append and dedupe).

If no insights and no theme hint, tell the user to run /extract-insights first or pass a theme. Do not invent learner pains.

### Step 2: Derive situations

A situation is a real-life moment a learner named (the bakery, the doctor, a work intro, the supermarket checkout, a phone call). Mine `jtbd`, `quotes`, and `pains` for situations learners actually struggle with. Prefer situations that recur across multiple insight files (stronger signal). Also note article topics that map onto a situation, for the flex slot.

### Step 3: Build situation packs

For each situation, draft one themed week's worth of ideas (a pack):

- A **scenario-reel** idea (Joost + an invented character in the situation).
- A **cheatsheet** idea (the phrases for that situation, grounded in `lexicon`).
- A **quiz** idea (a real mistake from that situation, with a reason-seeking prompt).
- A **flex** idea (usually an article-remix tied loosely to the theme, or off-theme for variety).

Each idea is lightweight: type, hook, one-line angle, and source (which insight or article it came from), plus `on_theme`.

### Step 4: Prioritize and dedupe

Score each pack `high | medium | low` with a one-line reason, weighting: hook strength, save/send potential, grounding in a repeated pain, and persona coverage (favor packs that fill an under-served persona). Drop packs whose situation was already produced (check `status: produced` in the existing backlog).

Aim to generate 4-6 packs (a month or more of weeks).

### Step 5: Write the backlog

Write or merge `outputs/instagram/idea-backlog.json`. Status lives on each post, so weeks can be themed or mixed:

```json
{
  "generated_date": "ISO date",
  "intelligence_sources": ["insight files and articles used"],
  "packs": [
    {
      "pack_id": "slug -- e.g. the-bakery",
      "situation": "string -- e.g. buying bread at the bakery",
      "persona": "string -- target persona",
      "priority": "high | medium | low",
      "priority_reason": "string -- one line",
      "posts": [
        {"post_id": "the-bakery-reel",       "type": "scenario-reel", "hook": "string", "angle": "string", "source": "string", "on_theme": true,  "status": "idea"},
        {"post_id": "the-bakery-cheatsheet", "type": "cheatsheet",    "hook": "string", "angle": "string", "source": "string", "on_theme": true,  "status": "idea"},
        {"post_id": "the-bakery-quiz",       "type": "quiz",          "hook": "string", "angle": "string", "source": "string", "on_theme": true,  "status": "idea"},
        {"post_id": "the-bakery-remix",      "type": "article-remix", "hook": "string", "angle": "string", "source": "string", "on_theme": false, "status": "idea"}
      ]
    }
  ]
}
```

Post `status` values: `idea` (suggested), `queued` (approved for production), `produced` (batch built it). To make a **themed week**, queue all of a pack's posts. To make a **mixed week**, queue individual posts across packs. Merging keeps existing `queued` and `produced` posts untouched and appends new `idea` packs.

### Step 6: Report

List each pack: situation, priority + reason, persona, and the 4 idea hooks. Tell the user: "Queue what you want to make by setting a post's `status` to `queued` -- queue a whole pack for a themed week, or cherry-pick posts across packs for a mixed week. Then run `/instagram-content` to produce them. Edit, add, reorder, or delete freely. It's your editorial calendar."

---

## Batch Mode Workflow

Batch produces **reviewable runbooks + render props. It never renders.**

### Step 1: Load context

1. Read `instagram-playbook.md`, `remotion/README.md`, `brand/brand-kit.md`, `brand/brand-colors.json`, and `brand/instagram-voice.md`.
2. Read `strategy/positioning.md` and `strategy/personas.md` (warn if missing).
3. Read all `.json` in `customer-intelligence/insights/`. Aggregate `lexicon`, `quotes`, `pains`, `jtbd`, `keyword_candidates`.
4. Read `outputs/instagram/idea-backlog.json` if it exists.

### Step 2: Compose the week from queued posts

Status lives on individual posts (`idea | queued | produced`), so a week can be one theme or a mix.

- **If the backlog has queued posts:** collect every post with `status: queued` across all packs. Take up to the cadence count (default 4), highest-priority first. That set is the week.
  - If all selected posts belong to one pack/situation, treat it as a **themed week**: keep them coherent (the cheatsheet phrases match the reel's scene, the quiz tests a mistake from that situation, the second character can recur).
  - If they span themes, treat it as a **mixed week**: each post stands alone, no forced cross-references.
- **If nothing is queued but a backlog exists:** take the highest-priority pack's `idea` posts as a themed week, and note you did so (the user can queue specific posts instead).
- **If no backlog exists:** invent one themed week on the fly from a recurring situation in the insights, and tell the user they can run `/instagram-content plan` to build a curated backlog.
- **If a theme hint was passed:** prefer matching posts/pack, or theme the on-the-fly week to it.

Sanity-check the week's type mix before producing: aim for the cadence shape (about 2-3 reels + 1-2 carousels) and **at least 2 reels**. If the queued selection is lopsided (e.g., zero reels, or four of one type), warn the user and suggest a swap, but proceed if they confirm. Honor an explicit count if the user asked for 3 or 5. Assign each post a persona and a positioning thread.

Pick `<week>` = the week-start date (the date the user is planning from, else today). Every file in this batch uses that same `<week>` value.

### Step 3: Write the weekly plan file

Write `outputs/instagram/<week>/_plan.md`:

```markdown
# Instagram Week — {start date} to {end date}

Theme: {situation, or "Mixed"}
Cadence: 4 feed posts (about 2-3 reels + 1-2 carousels) + daily Stories.
Grounded in: {intelligence sources / pack id}

| Day | Post file | Type | On-theme | Hook | Job | Status |
|-----|-----------|------|----------|------|-----|--------|
| Mon | scenario-reel_{slug}.md | scenario-reel | yes | {hook} | reach | draft |
| Tue | cheatsheet_{slug}.md | cheatsheet | yes | {hook} | saves | draft |
| Thu | quiz_{slug}.md | quiz | yes | {hook} | comments | draft |
| Fri | article-remix_{slug}.md | article-remix | flex | {hook} | reach + SEO | draft |

## Stories (daily)
- Reshare each day's feed post to Stories.
- {2-3 Story quiz-sticker ideas from this week's quiz}

## How to take these live
1. Review each runbook. Fix content with `/instagram-content refine {slug}`.
2. Generate the assets each runbook names, into `remotion/public/<week>/{slug}/`.
3. Set `Status: approved` at the top of the runbook.
4. Render it: `/instagram-render {slug}`.
```

### Step 4: Write each post as a runbook + props

For every slot, write `outputs/instagram/<week>/{type}_{slug}.md` using the matching template in **Post Runbook Templates** below, AND write `remotion/props/<week>/{slug}.json` with the same content shaped to that composition's props (see `remotion/README.md` for the props contract). Fill every step completely: real Dutch dialogue, real slide text, the full image prompt with the Style Block and Negative prompt inlined from the brand kit, the exact brand files to attach, image-to-video settings, the asset filenames to save under `remotion/public/<week>/{slug}/`, and the render command. Nothing left as a template for the user to complete. **Do not render.**

Asset paths inside the props JSON are relative to `remotion/public/`, so they begin with `<week>/{slug}/` (e.g. `"clip": "<week>/{slug}/clip.mp4"`, `"file": "<week>/{slug}/roos-1.mp3"`, `"coverImage": "<week>/{slug}/cover.png"`).

Keep the on-theme posts coherent but **not visually identical**: the cheatsheet phrases should match the reel's scene, the quiz should test a mistake from that same situation, and the second character can recur across the theme. Coherent means same Joost, same style, same situation -- not the same opening image. Give each on-theme post a different setting or shot so the profile grid never shows the same picture three times (see the playbook's *Feed-grid differentiation* rule). Only reuse one shot if the user explicitly asks for a matched grid row.

Apply the playbook rules: hook in the first frame, sends/saves CTA, caption line 1 = searchable keyword, quiz prompts that ask for a reason (never A/B bait), scenario reels at Tier 1 (single composition, no lip-sync, subtitle-led) with Joost locked, visuals on-brand across all types, remixes that transform rather than paste.

Apply the **Dutch language standard** to every Dutch line: A1 default (light A2 only when the scenario needs it), always grammatically correct (de/het, conjugation, word order, register by context), and usable (passes the "would they say this tomorrow?" test, with English translation). Do a correctness pass over every Dutch line before writing each post out, and flag the post's Dutch for a quick native check.

### Step 5: Update the backlog and report

- Set the `status` of each produced post to `produced` in `idea-backlog.json` (leave the rest of each pack untouched).
- Report: the theme (or "mixed"), the date range, the `<week>` folder, the 4 posts (day, type, working title), runbook + props file paths, any gaps, and whether the brand kit had unfilled slots.
- Reminder, in this order: "These are drafts for your review -- nothing has been rendered. 1) Read each runbook and verify the content, especially the Dutch. 2) Refine any post with `/instagram-content refine <slug>`. 3) Generate the named assets into `remotion/public/<week>/<slug>/`. 4) Set `Status: approved`. 5) Render with `/instagram-render <slug>`."

---

## Refine Mode Workflow

Triggered by `/instagram-content refine <slug-or-path>`. Edits content **before** rendering. (For changing how an already-rendered post *looks* -- layout, timing, colors -- that is a production edit: point the user to `/instagram-render studio <slug>`.)

1. **Resolve the post.** Find the runbook matching the slug under `outputs/instagram/*/`. If none or several match, list the candidate weeks/posts and ask which. Note the `<week>` folder it lives in -- the matching props file is `remotion/props/<week>/{slug}.json`.
2. **Load just what this type needs.** Read `instagram-playbook.md` (focus on this type's section), `brand/brand-kit.md`, `brand/instagram-voice.md` (apply its tone and captured lessons to every edit), and `remotion/README.md` if the edit touches what Remotion renders. For `article-remix`, also read the source article and its `_brief.json`. Re-read insight fields (`lexicon`, `quotes`, `pains`) only if the user wants fresh grounding. Stay tight to this post.
3. **Iterate.** Support both operations:
   - **Edit in place:** a targeted change ("make slide 3 punchier", "shorten the cover hook", "this quiz is drifting into A/B bait"). Apply directly.
   - **Regenerate a piece:** produce alternatives for one component and let the user pick. Examples: "give me 3 cover hooks", "rewrite the quiz", "two alternative scene-image prompts", "a different caption", "a tighter Dutch dialogue". Show options inline, let the user choose or blend, write the chosen version back.
   After each change, write **both** the runbook MD and `remotion/props/<week>/{slug}.json` so they stay in sync, then confirm what changed. Keep going until satisfied. Every revision must still pass the post's rules block, including the Dutch language standard (A1 default, grammatically correct, usable).
4. **Capture durable lessons.** When the user's feedback is a *durable editorial rule* and not a one-off tweak to this single post (e.g. "don't force a correct answer on reflex quizzes", "the switch-to-English feeling is frustration, not shame", "keep the humor but drop the shame"), offer to remember it: ask *"Want me to save this as a durable rule in `brand/instagram-voice.md` so future posts follow it?"* If yes, append a one-line principle plus a short italic _(why / source)_ under the matching heading in `brand/instagram-voice.md` (Tone, Emotional accuracy, Quiz design, or a new heading). Keep it brand-level and reusable, never post-specific. If instead the lesson is about how Remotion *renders* (a visual/production lesson, not editorial), note it belongs in `remotion/README.md` and offer to add it there. All editorial learnings stay in `brand/instagram-voice.md` -- do not write them into `strategy/` files. Skip the offer entirely for purely local edits.
5. **Close out.** Remind the user that content edits do not re-render anything; when the content is right, set `Status: approved`, generate/confirm assets in `remotion/public/<week>/<slug>/`, then run `/instagram-render <slug>`. If they already rendered and now want a different look (not different words), point them to `/instagram-render studio <slug>`.

---

## Post Runbook Templates

Every file opens with this header. `Status` is the gate. `{week}` is the week-start date folder the post lives in.

```markdown
# {Day} {Date} — {Type}: {Working Title}

> **Type:** {cheatsheet | quiz | scenario-reel | article-remix}
> **Theme:** {situation}
> **Persona:** {target persona}
> **Positioning thread:** {one value prop woven as undercurrent}
> **Render:** {ScenarioReel | Cheatsheet | Quiz} — props: `remotion/props/{week}/{slug}.json` — run `/instagram-render {slug}`
> **Status:** draft   ← set to `approved` (after review + assets saved) to allow rendering

## Rules for this post (keep edits on-rails)
- Dutch: A1 default (light A2 only if the scenario needs it), always grammatically correct, usable; register correct by context; flagged for a native check before posting.
- Remotion renders the final asset. Do not assemble in CapCut/Canva. Crisp Dutch text is rendered, never baked into an AI image.
- {3-5 more guardrails from the playbook section for this type}
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
brand/joost-reference.png. Paste this exact prompt:

  {full scene prompt with Style Block + Negative prompt inlined. Describe each character by
  POSITION in the frame — e.g. "JOOST behind the counter on the left", "a woman on the right" —
  not by name (names confuse image models; the name only lives in the dialogue/subtitles). No
  text in the image.}

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
(or, manually: cd remotion && npx remotion render src/index.ts ScenarioReel out/{week}/{slug}.mp4 --props=props/{week}/{slug}.json)

## CAPTION (paste into Instagram)
{line 1: searchable keyword as a hook}
{2-4 lines of value}
{save/send CTA}
Keywords woven: {3-6}

## PINNED COMMENT
"{question that pulls a sentence reply}"
```

### cheatsheet

```markdown
## ASSETS TO GENERATE (save into remotion/public/{week}/{slug}/)

COVER IMAGE (ChatGPT). Attach: brand/style-ref-1.png, brand/style-ref-2.png,
brand/joost-reference.png. Paste this exact prompt:

  Create a warm, hand-drawn storybook illustration, VERTICAL 4:5 (1080×1350, the Instagram feed
  ratio): Joost {at the place, simple friendly action}. Match the STYLE of style-ref-1 and
  style-ref-2 (do not copy their characters or objects). Reproduce JOOST exactly from
  joost-reference. Frame Joost in the UPPER HALF of the image, kept high. The cover crops to a
  horizontal band across the top and fades the lower part into a solid colour panel that holds the
  headline, so keep Joost high and leave the lower third empty. {Style Block inlined} {Negative prompt inlined}
  (No text in the image. The headline is rendered by Remotion.)

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
Keywords woven: {3-6}

## PINNED COMMENT
"{sentence-pulling question}"
```

### quiz

```markdown
## ASSETS TO GENERATE (save into remotion/public/{week}/{slug}/)

SCENARIO IMAGE (ChatGPT). Attach: brand/style-ref-1.png, brand/style-ref-2.png,
brand/joost-reference.png. Paste this exact prompt:

  Create a warm, hand-drawn storybook illustration, VERTICAL 4:5 (1080×1350, the Instagram feed
  ratio): {the quiz scenario, e.g. Joost behind a bakery counter}. Match the STYLE of style-ref-1
  and style-ref-2. Reproduce JOOST exactly from joost-reference. The question overlay sits CENTRED
  over a dark scrim covering the whole image, so framing is flexible. Just keep the mid-frame from
  being too busy behind the large question. {Style Block inlined} {Negative prompt inlined}
  (No text in the image. The question is rendered by Remotion.)

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
