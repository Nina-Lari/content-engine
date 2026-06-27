# Instagram: how the two skills work

A plain-language guide to `/instagram-content` and `/instagram-render`. Read this once and you will know which command to run for any job.

---

## The one idea to hold in your head

There are **two skills**, split by a single line: **content vs. pixels.**

- **`/instagram-content`** is the writers' room. It plans ideas and writes the **documents** for each post (the words, the Dutch, the captions, plus a render spec). It never makes an image or a video.
- **`/instagram-render`** is the production booth. It takes an **approved** post and turns it into the finished reel or carousel using Remotion. It never changes the words.

Between them sits **you**: you review the writing, generate the raw assets, and approve. Nothing gets rendered until you say so.

> **The rule of thumb:** change the **words** → `/instagram-content`. Change the **pixels** → `/instagram-render`.

---

## The lifecycle (the happy path)

```
  /instagram-content plan          (occasionally) build a backlog of ideas
            │
            ▼
  /instagram-content  (batch)      write this week's runbooks + render specs
            │                       → outputs/instagram/<week>/
            ▼
  you review + /instagram-content refine <slug>   fix anything (especially the Dutch)
            │
            ▼
  you generate the assets          voice (ElevenLabs), images (ChatGPT), clip (Seedance)
            │                       → drop them in remotion/public/<week>/<slug>/
            ▼
  you set  Status: approved        at the top of the runbook   ← THE GATE
            │
            ▼
  /instagram-render <slug>         produce the reel / carousel
            │                       → remotion/out/<week>/<slug>...
            ▼
  you post to Instagram            caption + pinned comment are in the runbook
```

Steps you can skip on a given week: `plan` (only when you want fresh ideas), `refine` (only when something needs fixing), and `check` (the Dutch check already runs inside `batch`; run it standalone only when you want a second pass). Everything else runs in order.

**The gate is the whole point.** `batch` produces documents, not media. Rendering happens only on a post you have marked `Status: approved`. This is deliberate, the same as the article pipeline's outline review: a human checks the writing (above all the Dutch) before any production happens.

---

## The two skills at a glance

| | `/instagram-content` | `/instagram-render` |
|---|---|---|
| Job | Author the documents | Produce the finished asset |
| Owns | `outputs/instagram/` + the render spec | `remotion/` (assets + output) |
| Modes | `plan`, `batch`, `refine`, `check` | `render`, `studio` |
| Makes media? | No | Yes (the only one that does) |
| Ends / starts at | Ends at `Status: approved` | Starts at `Status: approved` |

---

## `/instagram-content` — the writers' room

Four modes. Use them in this order, but only `batch` is needed every week (`plan`, `refine`, and `check` are optional).

### `plan` — build a backlog of ideas
- **What it does:** mines your customer insights and articles for recurring **moments** a learner struggles with (the moment people switch to English on you, freezing under exam pressure, small talk you can't enter) and drafts themed "packs" of post ideas into `outputs/instagram/idea-backlog.json`. A theme is a *moment*, not a single place: it plays out across many **settings** (the bakery, the supermarket checkout, the doctor's reception, a phone call), and each post in a pack is staged in a different one so the week never looks duplicated. Each pack is one week's worth: **7 posts with at most 2 reels** (2 scenario-reels, 2 cheatsheets, 2 quizzes, and a flex, usually an article remix run as a carousel).
- **When to use it:** every few weeks, when your idea bank is running low, or to seed the system the first time. You do not run it weekly.
- **How to use it:** run `/instagram-content plan` (optionally `/instagram-content plan doctor visits` to steer it). Then open `idea-backlog.json` and **queue** what you want to make by setting a post's `status` to `queued`. Queue a whole pack for a themed week, or cherry-pick posts across packs for a mixed week. Edit, add, and delete freely. It is your editorial calendar.

### `batch` — write this week's posts (the default)
- **What it does:** turns your queued ideas into a week of **runbooks** (one Markdown file per post) plus a **render spec** (a props JSON) for each. A runbook is a step-by-step "do this, paste this, save it here" sheet with the Dutch dialogue, the exact image prompt, the asset filenames, the caption, and the pinned comment all filled in. As it writes, it runs the **Dutch language check** on every line (grammar + A1/A2 level) and puts a per-line verdict table in each runbook so you can scan the Dutch fast at review. It renders nothing.
- **When to use it:** once a week, to produce the next batch of posts.
- **How to use it:** run `/instagram-content` (or `/instagram-content batch`). It first **names the theme of the week** (the recurring moment) and the settings it spans, then composes a coherent **7-post week, one per day, with at most 2 reels** (the rest carousels), and writes everything to `outputs/instagram/<week>/`. The `_plan.md` overview shows the theme and a Setting column, so you can see each post's backdrop at a glance. If you have not queued anything, it picks the top idea or invents a week and tells you so.

### `refine` — fix one post
- **What it does:** edits a single post's writing and keeps its render spec in sync. Two styles of edit: a targeted change ("make slide 3 punchier", "this quiz is drifting into bait") or a regenerate ("give me 3 cover hooks", "rewrite the Dutch dialogue tighter") where it shows options and you pick.
- **When to use it:** after reviewing a runbook, whenever the writing needs work. **This is where you fix the Dutch.**
- **How to use it:** run `/instagram-content refine <slug>` (the slug is the post name, e.g. `the-bakery-reel`). Keep going until the post is right. If your feedback is a lasting rule and not a one-off ("the switch-to-English feeling is frustration, not shame"), it will offer to save it to `brand/instagram-voice.md` so future posts follow it. When an edit touches any Dutch, it re-runs the Dutch check on the changed lines and updates the verdict table.

### `check` — verify the Dutch on demand
- **What it does:** runs the **Dutch language check** over posts that already exist, without a full refine. For every Dutch line it confirms grammatical correctness, scores the level (A1 / A2 / above), rewrites anything too hard down toward A1, and refreshes the per-line verdict table in the runbook (keeping the render spec in sync). It is the same check that `batch` and `refine` run for you, just on demand. It never touches the visuals or your `Status` gate.
- **When to use it:** when you want a clean second pass on the Dutch (after hand-editing a runbook, before approving, or to sweep an older week). Our audience watches at A1, so the goal is always the easiest correct Dutch.
- **How to use it:** run `/instagram-content check <slug>` for one post, `/instagram-content check <week>` (e.g. `check 2026-06-15`) for a whole week, or `/instagram-content check` for the most recent week. The two reference files it reads, `brand/dutch-grammar.md` (correctness) and `brand/dutch-level-guide.md` (A1/A2 level), are yours to edit if you want to tune what "correct" and "easy enough" mean.

---

## `/instagram-render` — the production booth

Two modes. This is the **only** place a final image or video is made.

### `render` — produce the asset (the default)
- **What it does:** reads an approved post's render spec, checks your assets are present, and runs Remotion to produce the finished reel (MP4) or carousel (PNG slides) into `remotion/out/<week>/`.
- **When to use it:** after a post is `Status: approved` and you have dropped its assets in `remotion/public/<week>/<slug>/`.
- **How to use it:** run `/instagram-render <slug>`. It is **gated**: if the post is not approved or an asset is missing, it stops and tells you exactly what to fix instead of rendering. To do a whole week at once: `/instagram-render --week <date>` (it renders the approved ones and reports which it skipped).

### `studio` — tweak how it looks, live
- **What it does:** opens Remotion Studio so you can preview a post and adjust the look (timing, layout, spacing) in real time.
- **When to use it:** when the words are right but the **look** is off, or you just want to preview before posting.
- **How to use it:** run `/instagram-render studio <slug>`. Small per-post tuning (like reel pacing) is saved back to the post's render spec. Brand-wide layout changes mean editing the Remotion composition (see `remotion/README.md`).

---

## "How do I…?" — the cookbook

| You want to… | Do this |
|---|---|
| Get a fresh set of post ideas | `/instagram-content plan`, then queue posts in `idea-backlog.json` |
| Make this week's posts | `/instagram-content` |
| Fix what a post **says** (Dutch, hook, caption, quiz) | `/instagram-content refine <slug>` |
| Check the **Dutch** (grammar + A1/A2 level) on a post or week | `/instagram-content check <slug>` or `/instagram-content check <week>` |
| Tune what "correct" / "easy enough" Dutch means | Edit `brand/dutch-grammar.md` (correctness) and `brand/dutch-level-guide.md` (A1/A2 level) |
| Generate the assets for a post | Follow the numbered steps in the post's runbook; save into `remotion/public/<week>/<slug>/` |
| Approve a post for rendering | Open its runbook, set `Status: approved` at the top |
| Render one approved post | `/instagram-render <slug>` |
| Render the whole approved week | `/instagram-render --week <week>` |
| Change how a **rendered** post looks | `/instagram-render studio <slug>`, then re-render |
| Fix the words on a post you already rendered | `/instagram-content refine <slug>`, then `/instagram-render <slug>` again |
| Replace a bad image or clip | Regenerate it, save over the same filename in `remotion/public/<week>/<slug>/`, then re-render |
| Teach the system a lasting **writing** rule | Say it during `refine`; accept the offer to save it to `brand/instagram-voice.md` |
| Teach the system a lasting **visual** rule | Note it during `studio`; it belongs in `remotion/README.md` |

**Editing something you already rendered is never a special step.** You change the input (the words via `refine`, the look via `studio`, or the asset file itself) and render again. Re-rendering always overwrites the old output, so there is no cleanup.

---

## Where everything lives

Each week is a self-contained bundle named by its start date (`<week>` = `YYYY-MM-DD`). The same date folder appears in four places, so a week is easy to find and old weeks never clutter the active one.

```
outputs/instagram/
  idea-backlog.json                 ← your editorial calendar (one file, always at the top)
  2026-06-15/                       ← one week (themed on one moment; 7 posts, ≤2 reels)
    _plan.md                        ← the week's overview grid (theme + a Setting column)
    scenario-reel_switch-at-the-bakery.md   ← a runbook (this is what you review + approve)
    cheatsheet_keep-them-in-dutch.md
    quiz_switched-at-the-checkout.md
    scenario-reel_switch-at-the-cafe.md
    cheatsheet_understand-the-cashier.md
    quiz_what-the-pharmacist-asked.md
    article-remix_why-they-switch.md

remotion/
  props/2026-06-15/<slug>.json      ← the render spec (written for you; rarely touched by hand)
  public/2026-06-15/<slug>/         ← YOU drop generated assets here (voice, images, clip)
  out/2026-06-15/<slug>...          ← the finished reel / carousel lands here
```

You mostly live in two places: **reading runbooks** in `outputs/instagram/<week>/`, and **dropping assets** in `remotion/public/<week>/<slug>/`. The rest is handled for you.

---

## The five things that never change

1. **Two skills, one line:** words → `/instagram-content`, pixels → `/instagram-render`.
2. **You are the gate.** Nothing renders until you set `Status: approved`. The skills will not approve on your behalf.
3. **You generate the raw assets.** The runbook gives you the exact prompts and filenames; you run ElevenLabs / ChatGPT / Seedance and drop the files in `remotion/public/<week>/<slug>/`.
4. **Remotion is the only editor.** Every final image and video is rendered from the spec. No CapCut, no Canva. Crisp Dutch text is always rendered, never baked into an AI image. This holds even for the comic-strip format (`ComicStory`): you generate each panel as a **full scene with no speech bubble and no text in it**, and Remotion draws the comic speech bubble, its tail, and the Dutch line on top at render time, so the words stay crisp and editable and you can nudge a bubble onto the right mouth in `studio`.
5. **The Dutch is the product.** Every post runs through the **Dutch language check** (grammar + A1/A2 level) and shows a per-line verdict table, but you still review it before approving: A1 by default, grammatically correct, and something a learner would actually say tomorrow. The standard lives in `brand/dutch-grammar.md` and `brand/dutch-level-guide.md`.
```

