---
name: instagram-content
description: Plan a backlog of themed Instagram post ideas, produce a week of ready-to-run post runbooks from it, and refine any single post until it is right. Three modes: plan, batch, refine.
---

# Instagram Content

Content Agent for Instagram. Three modes that form a pipeline: **plan** builds a curated backlog of themed post ideas, **batch** turns one themed pack into a week of ready-to-run post runbooks, **refine** iterates on a single post. Built around the 2026 algorithm: sends > saves > sentence-comments, hook in the first 3 seconds, caption SEO over hashtags, originality over recycled clips.

**Every post is a runbook.** When a post needs assets from another tool (ElevenLabs voice, ChatGPT images, Kling video), the file gives numbered "do this, paste this, attach this" steps with the full prompt already filled in and the exact brand files to attach. The user assembles nothing and decides nothing. See the runbook principle in `instagram-playbook.md`.

## Trigger

User invokes `/instagram-content` with an optional mode and argument:

- `/instagram-content plan [theme hint]` -- **plan mode**. Build or refresh the idea backlog of themed situation packs.
- `/instagram-content` or `/instagram-content batch [theme hint]` -- **batch mode** (default). Produce one themed week of post runbooks, pulling from the backlog if it exists.
- `/instagram-content refine <slug-or-path>` -- **refine mode**. Iterate on one existing post.

## Context Consumed

- `.claude/skills/instagram-content/instagram-playbook.md` -- platform mechanics, cadence, theming, runbook principle, per-type rules. Always load first.
- `brand/brand-kit.md` -- the visual and asset identity for all posts: Style Block, Negative prompt, Joost reference, style-reference filenames, ElevenLabs voices, editor (CapCut), subtitle policy. Inline the relevant pieces into each post's steps.
- `brand/instagram-voice.md` -- the editorial voice and tone identity: brand-specific tone, emotional-accuracy rules, and per-format lessons captured from past refine sessions. Apply it to every caption, slide, dialogue, and quiz. This is the file the refine "capture a lesson" prompt writes back to.
- `strategy/positioning.md` -- value props to thread as undercurrent.
- `strategy/personas.md` -- who each post targets and their pains.
- `customer-intelligence/insights/*.json` -- `lexicon` and `quotes` (phrasing for cheatsheets and dialogue), `pains` and `jtbd` (situations, quiz scenarios, angles), `keyword_candidates` (caption SEO).
- `outputs/articles/*` -- the article library, for remix ideas and (remix production) the source article (prefer `_final.mdx`).
- `outputs/briefs/*_brief.json` -- **remix only**: the article's primary keyword for caption SEO.

The brand `.png` files are attached by the user inside ChatGPT, not read by the skill. The skill only names them. Does NOT read `knowledge-base.md`, `icp.md`, `competitive-landscape.md`, `voice-guide.md`. The global `.claude/rules/writing-quality.md` applies to all captions and slides.

If `brand/brand-kit.md` is missing or its asset slots are unfilled, warn that reel and visual steps will contain placeholders, and point to the one-time setup in `brand/SETUP.md`.

## Output

- `outputs/instagram/idea-backlog.json` -- the curated backlog of themed situation packs (plan mode writes; batch mode reads and updates `status`).
- `outputs/instagram/week-{YYYY-MM-DD}_plan.md` -- the produced week's overview grid (batch mode).
- `outputs/instagram/{YYYY-MM-DD}_{type}_{slug}.md` -- one self-contained runbook per post. `type` is `cheatsheet`, `quiz`, `scenario-reel`, or `article-remix`.
- Create `outputs/instagram/` if it does not exist.

Each post file carries its own rules block plus the runbook, so plain conversational edits stay on-rails without re-invoking the skill.

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

### Step 1: Load context

1. Read `instagram-playbook.md`, `brand/brand-kit.md`, and `brand/instagram-voice.md`.
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

### Step 3: Write the weekly plan file

Write `outputs/instagram/week-{start-date}_plan.md`:

```markdown
# Instagram Week — {start date} to {end date}

Theme: {situation, or "Mixed"}
Cadence: 4 feed posts (about 2-3 reels + 1-2 carousels) + daily Stories.
Grounded in: {intelligence sources / pack id}

| Day | Post file | Type | On-theme | Hook | Job |
|-----|-----------|------|----------|------|-----|
| Mon | {filename} | scenario-reel | yes | {hook} | reach |
| Tue | {filename} | cheatsheet | yes | {hook} | saves |
| Thu | {filename} | quiz | yes | {hook} | comments |
| Fri | {filename} | article-remix | flex | {hook} | reach + SEO |

## Stories (daily)
- Reshare each day's feed post to Stories.
- {2-3 Story quiz-sticker ideas from this week's quiz}

## Next step
Review each post file. To change one: `/instagram-content refine {slug}`.
When a post is ready, set `Status: approved` at the top of its file.
```

### Step 4: Write each post as a runbook

For every slot, write `outputs/instagram/{date}_{type}_{slug}.md` using the matching template in **Post Runbook Templates** below. Fill every step completely: real Dutch dialogue, real slide text, the full image prompt with the Style Block and Negative prompt inlined from the brand kit, the exact brand files to attach, Kling settings, and CapCut steps. Nothing left as a template for the user to complete.

Keep the on-theme posts coherent: the cheatsheet phrases should match the reel's scene, the quiz should test a mistake from that same situation, and the second character can recur across the theme.

Apply the playbook rules: hook in the first frame, sends/saves CTA, caption line 1 = searchable keyword, quiz prompts that ask for a reason (never A/B bait), scenario reels at Tier 1 (single composition, no lip-sync, subtitle-led) with Joost locked, visuals on-brand across all types, remixes that transform rather than paste.

Apply the **Dutch language standard** to every Dutch line: A1 default (light A2 only when the scenario needs it), always grammatically correct (de/het, conjugation, word order, register by context), and usable (passes the "would they say this tomorrow?" test, with English translation). Do a correctness pass over every Dutch line before writing each post out, and flag the post's Dutch for a quick native check.

### Step 5: Update the backlog and report

- Set the `status` of each produced post to `produced` in `idea-backlog.json` (leave the rest of each pack untouched).
- Report: the theme (or "mixed"), the date range, the 4 posts (day, type, working title), file paths, any gaps, and whether the brand kit had unfilled slots.
- Reminder: "Review each post. Refine any one with `/instagram-content refine <slug>`. Set `Status: approved` when ready. Queue more posts (or a whole pack) and run `/instagram-content` again for the next week."

---

## Refine Mode Workflow

Triggered by `/instagram-content refine <slug-or-path>`.

1. **Resolve the post.** Find the file in `outputs/instagram/` matching the slug. If none or several match, list the week's posts and ask which.
2. **Load just what this type needs.** Read `instagram-playbook.md` (focus on this type's section), `brand/brand-kit.md`, and `brand/instagram-voice.md` (apply its tone and captured lessons to every edit). For `article-remix`, also read the source article and its `_brief.json`. Re-read insight fields (`lexicon`, `quotes`, `pains`) only if the user wants fresh grounding. Stay tight to this post.
3. **Iterate.** Support both operations:
   - **Edit in place:** a targeted change ("make slide 3 punchier", "shorten the cover hook", "this quiz is drifting into A/B bait"). Apply directly.
   - **Regenerate a piece:** produce alternatives for one component and let the user pick. Examples: "give me 3 cover hooks", "rewrite the quiz", "two alternative scene-image prompts", "a different caption", "a tighter Dutch dialogue". Show options inline, let the user choose or blend, write the chosen version back.
   After each change, write the file and confirm what changed. Keep going until satisfied. Every revision must still pass the post's rules block, including the Dutch language standard (A1 default, grammatically correct, usable).
4. **Capture durable lessons.** When the user's feedback is a *durable editorial rule* and not a one-off tweak to this single post (e.g. "don't force a correct answer on reflex quizzes", "the switch-to-English feeling is frustration, not shame", "keep the humor but drop the shame"), offer to remember it: ask *"Want me to save this as a durable rule in `brand/instagram-voice.md` so future posts follow it?"* If yes, append a one-line principle plus a short italic _(why / source)_ under the matching heading in `brand/instagram-voice.md` (Tone, Emotional accuracy, Quiz design, or a new heading). Keep it brand-level and reusable, never post-specific. All Instagram learnings stay in `brand/instagram-voice.md` — do not write them into `strategy/` files. Skip the offer entirely for purely local edits.
5. **Close out.** Remind the user they can set `Status: approved`, and point to the next unrefined post if any remain.

---

## Post Runbook Templates

Every file opens with this header:

```markdown
# {Day} {Date} — {Type}: {Working Title}

> **Type:** {cheatsheet | quiz | scenario-reel | article-remix}
> **Theme:** {situation}
> **Persona:** {target persona}
> **Positioning thread:** {one value prop woven as undercurrent}
> **Status:** draft

## Rules for this post (keep edits on-rails)
- Dutch: A1 default (light A2 only if the scenario needs it), always grammatically correct, usable; register correct by context; flagged for a native check before posting.
- {3-5 more guardrails from the playbook section for this type}
```

### scenario-reel (Tier 1: one composition, no lip-sync, subtitle-led)

```markdown
## STEP 1 — Voice (ElevenLabs)
Use your Joost voice ({voice from brand kit}). For the second character, pick any
Dutch voice. Render each line separately and note its length in seconds.

  Joost:  "{Dutch}"   (EN: {translation})
  {B}:    "{Dutch}"   (EN: {translation})
  ...

## STEP 2 — Scene image (ChatGPT)
Attach these 3 files: brand/style-ref-1.png, brand/style-ref-2.png, brand/joost-reference.png
Paste this exact prompt:

  Create a warm, hand-drawn storybook illustration for a VERTICAL 9:16 video
  frame: a two-shot of two characters {at the place, doing the scene}.
  Reference rules: match the STYLE of style-ref-1 and style-ref-2 (do not copy
  their characters or objects). Reproduce JOOST exactly from joost-reference
  (same face, hair, glasses, build, clothing). Invent the second character to fit
  the scene. Keep the bottom third calmer so subtitles can be added later.
  {Style Block, inlined from brand kit}
  {Negative prompt, inlined from brand kit}

(You need 1 image for this reel.)

## STEP 3 — Video (Kling, Image-to-Video)
Upload the Step 2 image as the start frame. Settings: 9:16, 10s, relevance high.
Paste this motion prompt:

  {motion + camera + ambient only, e.g. "Joost gives a small friendly gesture and
  warm smile; the customer nods. Subtle natural movement, calm. Camera static with
  gentle breathing motion. Soft ambient {place} life."}

Negative prompt: {from brand kit}
If the dialogue runs past 10s, make a second 10s clip from the same image.

## STEP 4 — Assemble (CapCut)
1. Place the clip(s) in order.
2. Lay the Step 1 voiceover lines onto the matching moments.
3. Add the hook text overlay for the first 3 seconds: "{hook line}"
4. Burn in subtitles per line: Dutch large, English smaller beneath.
5. Export 9:16.

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
## COVER IMAGE (ChatGPT)
Attach: brand/style-ref-1.png, brand/style-ref-2.png, brand/joost-reference.png
Paste this exact prompt:

  Create a warm, hand-drawn storybook illustration, VERTICAL 9:16: Joost {at the
  place, simple friendly action}. Match the STYLE of style-ref-1 and style-ref-2
  (do not copy their characters or objects). Reproduce JOOST exactly from
  joost-reference. Leave the top clear for a headline overlay.
  {Style Block inlined} {Negative prompt inlined}

Headline to overlay on the cover (in CapCut/Canva): "{5-8 word hook}"

## SLIDES (lay out in Canva/CapCut)
2. {NL phrase} — {EN translation} — _when:_ {situation}
3. ...
N (last). Save + send CTA: "Save this for your next trip to the {place}. Send it
to whoever you're learning with."

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
## SCENARIO IMAGE (ChatGPT)
Attach: brand/style-ref-1.png, brand/style-ref-2.png, brand/joost-reference.png
Paste this exact prompt:

  Create a warm, hand-drawn storybook illustration, VERTICAL 9:16: {the quiz
  scenario, e.g. Joost behind a bakery counter asking a customer}. Match the STYLE
  of style-ref-1 and style-ref-2. Reproduce JOOST exactly from joost-reference.
  Leave room for a question overlay.
  {Style Block inlined} {Negative prompt inlined}

## THE QUIZ (overlay text)
- Scenario line: "{real situation}"
- Question: "{Dutch prompt}"
- Options: A) {...}  B) {...}  C) {...}
- Correct: {letter} — {one-line teach}

## ENGAGEMENT PROMPT (overlay / caption — beats the bait filter)
"{asks for a reason or personal angle, never bare A/B}"

## REVEAL (slide 2 or pinned comment)
{correct answer + the one-line teach, friendly}

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
- Format: {carousel | reel}
- Originality note: transform, do not paste. No verbatim paragraphs.

## RUNBOOK
{Reuse the cheatsheet or scenario-reel runbook above depending on Format, fully
filled. Caption line 1 = the article's primary keyword.}
```
