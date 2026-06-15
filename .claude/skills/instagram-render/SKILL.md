---
name: instagram-render
description: Produce the finished Instagram asset from an approved post — the only place a pixel is made. Renders reels (MP4) and carousels (PNG slides) with Remotion from the props that /instagram-content wrote. Two modes: render (default, gated on Status: approved) and studio (live visual tweaking). Use after a runbook is approved and its assets are saved.
---

# Instagram Render (the production booth)

This is the **production half** of the Instagram pipeline. It is the only place a final asset is produced, and **Remotion is the only tool that produces it** (no CapCut, no Canva). The authoring half is `/instagram-content`, which writes the runbook and the props JSON. This skill takes an **approved** post and turns props + dropped assets into the finished reel or carousel.

It is also the home for everything about how a post **looks** — re-rendering after a change, and tweaking the visual in Remotion Studio. The rule that splits the two skills:

> **Words wrong → `/instagram-content refine <slug>`. Look wrong → here.**

## When to call what

| You want to... | Run |
|----------------|-----|
| Render an approved post into its MP4 / PNG slides | `/instagram-render <slug>` |
| Render every approved post in a week | `/instagram-render --week <date>` (or `--all`) |
| Preview / tweak the look live before posting | `/instagram-render studio [slug]` |
| Re-render after editing props or a composition | `/instagram-render <slug>` again (deterministic, overwrites in place) |
| Change the **words** | go back to `/instagram-content refine <slug>` |

## Trigger

- `/instagram-render <slug-or-path>` -- **render** (default). Gated: refuses unless the post is `Status: approved` and its assets are present.
- `/instagram-render studio [slug]` -- **studio**. Open Remotion Studio to preview and tweak the look live.
- `/instagram-render --week <YYYY-MM-DD>` or `/instagram-render --all` -- batch-render every approved post (drafts skipped and reported).

## Context Consumed

This skill loads **production context only** — not the editorial context. It does not need brand voice, positioning, personas, insights, or the playbook; those shape *what the post says*, which is already locked by the time a post is approved.

- `remotion/README.md` -- the compositions, the props contract, the render commands, and the production lessons. Always load first.
- `outputs/instagram/<week>/{type}_{slug}.md` -- the runbook header, **only to read `Status`** (the gate) and the `Render:` line (which composition).
- `remotion/props/<week>/{slug}.json` -- the render input.
- `remotion/public/<week>/{slug}/` -- the dropped assets, to verify they exist.

Does NOT read `strategy/*`, `brand/instagram-voice.md`, `customer-intelligence/*`, or the playbook. If a render reveals a content problem, hand back to `/instagram-content refine` rather than editing content here.

If the `remotion/` project is missing, stop and point to `remotion/README.md`.

## Resolving a slug to its week

Posts live in week-bundles (`<week>` = the week-start date `YYYY-MM-DD`). Given a slug, locate the week by globbing:

- `remotion/props/*/{slug}.json` -- gives the props path and the `<week>`.
- `outputs/instagram/*/{type}_{slug}.md` -- the runbook (for the `Status` gate).

If several weeks contain the same slug, list them and ask which. If the user passed a full path, use it directly.

---

## Render Mode Workflow

The gated production step. The **only** place a final asset is produced.

1. **Resolve the post and its `<week>`** from the slug (see above). If ambiguous, list and ask.
2. **Check the gate.** Read the runbook header. If `Status` is not `approved`, STOP and tell the user to review and approve in `/instagram-content` first. Do not proceed. Do not edit the `Status` yourself.
3. **Check the assets.** Read `remotion/props/<week>/{slug}.json` and confirm every asset path it references exists under `remotion/public/`. Props paths are relative to `public/`, so they resolve to `remotion/public/<week>/{slug}/...` (the cover/scenario image for carousels; the clip + every voice mp3 for reels). If any are missing, list exactly which files to generate and where to save them, then stop.
4. **Pick the composition.** Use the runbook's `Render:` line, or infer from the props shape: `clip` + `lines` → `ScenarioReel`; `coverImage` + `phrases` → `Cheatsheet`; `scenarioImage` + `options` → `Quiz`.
5. **Render with Remotion** (run from the `remotion/` directory):
   - Reel: `npx remotion render src/index.ts ScenarioReel out/<week>/{slug}.mp4 --props=props/<week>/{slug}.json`
   - Cheatsheet: `npx remotion render src/index.ts Cheatsheet out/<week>/{slug} --sequence --image-format=png --props=props/<week>/{slug}.json`
   - Quiz: `npx remotion render src/index.ts Quiz out/<week>/{slug} --sequence --image-format=png --props=props/<week>/{slug}.json`
   - Reel durations are auto-detected from the audio/clip — no manual timing.
   - Create `remotion/out/<week>/` if it does not exist.
6. **Reels must loop: verify the end frame matches the start frame.** A reel is posted to a feed that loops it forever, so the last frame must return to the same scene as the first or the wrap is a visible jump. This is **not optional** for `ScenarioReel` — always do it; carousels (`Cheatsheet`/`Quiz`) skip this step. Two things make the loop seamless, and you confirm both (full detail in `remotion/README.md` → *Production lessons*):
   - **The clip begins and ends on the scene image.** The user generates `clip.mp4` with `<slug>/starting-frame.png` as both the begin and end frame, so every loop boundary lands on the same frame. If the wrap shows a hard cut, the clip's end frame is wrong — hand back to the user to regenerate (do not try to fix it in Remotion).
   - **The end card fully clears before the final frame** (handled in the `EndCard` composition). If the last frame carries a faint endcard ghost, the fade-out is reaching the last frame — fix it in `remotion/src/compositions/ScenarioReel.tsx` and document it in `remotion/README.md`.
   Confirm by rendering three loop-check stills into `out/<week>/{slug}-stills/` and comparing the last frame to the first:
   ```
   npx remotion still src/index.ts ScenarioReel out/<week>/{slug}-stills/reel-firstframe.png --frame=0    --props=props/<week>/{slug}.json
   npx remotion still src/index.ts ScenarioReel out/<week>/{slug}-stills/reel-lastframe.png  --frame=LAST --props=props/<week>/{slug}.json
   npx remotion still src/index.ts ScenarioReel out/<week>/{slug}-stills/reel-endcard.png    --frame=HOLD --props=props/<week>/{slug}.json
   ```
   `LAST` is `durationInFrames - 1` (the render in step 5 prints the frame count, e.g. `Rendered 960/960` → `--frame=959`); `HOLD` is a frame partway through the outro that shows the full endcard (e.g. ~40 frames before `LAST`). Read `reel-firstframe.png` and `reel-lastframe.png` and confirm the last frame returns to the opening scene. If it does not, fix per the two bullets above and re-render before reporting.
7. **Report** the output path (`remotion/out/<week>/...`), the duration / slide count, the loop-check result (for reels), and where to go next: preview/tweak live with `/instagram-render studio {slug}`; change the **words** with `/instagram-content refine {slug}`; change the **look** by tuning props or the composition (see `remotion/README.md`). Then post.

---

## Studio Mode Workflow

Triggered by `/instagram-render studio [slug]`. For previewing and tweaking how a post **looks**, live, before or after rendering.

1. Launch studio from the `remotion/` directory: `cd remotion && npm run studio`.
2. If a slug was given, tell the user which composition to select (`ScenarioReel` / `Cheatsheet` / `Quiz`) and that this post's props are in `remotion/props/<week>/{slug}.json` — they can load/paste those into the Studio props panel to preview the exact post.
3. Two kinds of look-changes:
   - **Per-post, data-level** (pacing/timing of a reel, the `pacing.leadIn`, slide order, emphasis flags): adjust the props. Small tuning can be done in Studio and copied back into `remotion/props/<week>/{slug}.json`; anything that is really *content* (the words) belongs in `/instagram-content refine`.
   - **Brand-level, layout/animation**: editing the composition itself (`remotion/src/compositions/*`) changes every post of that type. Document the reasoning in `remotion/README.md` → *Production lessons* so it carries forward.
4. After any change, **re-render** with `/instagram-render {slug}`. Rendering is deterministic: the same props always produce the same asset, and re-rendering never redoes manual edits.

Durable **production / visual** lessons go in `remotion/README.md`. Durable **editorial** lessons (tone, Dutch, quiz design) belong in `brand/instagram-voice.md` via `/instagram-content refine` — not here.

---

## Editing / re-rendering an existing output

There is no separate "edit the output" step — editing is just changing the input and re-rendering:

- **The words are wrong** (Dutch, hook, caption, slide text, quiz): `/instagram-content refine <slug>` rewrites the runbook + props, then `/instagram-render <slug>` re-renders. The output at `remotion/out/<week>/{slug}...` is overwritten in place.
- **The look is wrong** (layout, color, timing, animation): `/instagram-render studio <slug>` to preview, tune props or the composition (`remotion/README.md`), then re-render.
- **An asset was bad** (the AI image or clip): regenerate it, drop the new file at the same path under `remotion/public/<week>/{slug}/`, and re-render. No props change needed if the filename is unchanged.

---

## Batch render

`/instagram-render --week <YYYY-MM-DD>` or `/instagram-render --all`:

1. Find the candidate runbooks (`outputs/instagram/<week>/*.md`, or all weeks for `--all`).
2. Render each whose `Status` is `approved` and whose assets are present.
3. Skip the rest and report exactly which were skipped and why (`not approved` / `missing assets: ...`).

---

## Rules

- Never render a post whose `Status` is not `approved`. Never set `Status` yourself — that is the user's gate.
- Never proceed with missing assets. List exactly which files to generate and where, then stop.
- **Every reel must loop.** Its last frame returns to the opening scene (end frame = start frame). After rendering a `ScenarioReel`, always verify with the `reel-firstframe` / `reel-lastframe` stills (workflow step 6) and only consider the render done when they match. The loop is built from the clip's matched begin/end frame plus the end card clearing before the last frame.
- This skill does not write or edit content or props as an authoring act. If a render exposes a content problem, hand back to `/instagram-content refine`. Studio-level props tuning is the one exception, and only for look (timing/layout), never words.
- Rendering is deterministic and idempotent. Re-render freely; it overwrites the output in place.
