# DWJ Remotion — the editor for every Instagram post

This project is **the only editor** for DutchwithJoost Instagram posts. It replaces
CapCut (reels) and Canva (carousels). Two skills drive it: **`/instagram-content`** writes the
**props JSON** (what the post says), and **`/instagram-render`** runs the render commands here
(turning props + assets into the finished file). You generate the upstream assets and drop them
in `public/`, then one render command produces the finished asset.

Files are grouped by **week** — `<week>` is the week-start date `YYYY-MM-DD`:
`props/<week>/{slug}.json`, `public/<week>/{slug}/`, `out/<week>/{slug}...`. This keeps the
project tidy as weeks accumulate. Asset paths inside a props JSON are relative to `public/`, so
they begin with the week segment (e.g. `2026-06-15/keep-them-in-dutch/cover.png`).

Remotion does **not** replace the upstream generators:

| Layer | Tool | In this project? |
|-------|------|------------------|
| Illustration (Joost, scenes, covers) | ChatGPT / gpt-image-1 | no — dropped into `public/` |
| Motion (reel clips) | Seedance 1 Pro (default; begin frame = end frame = scene image) | no — dropped into `public/` |
| Voice (reel audio) | ElevenLabs | no — dropped into `public/` |
| **Text, layout, subtitles, timing, assembly, export** | **Remotion (here)** | **yes** |

---

## What Remotion can do to the final asset

Use this list when writing a runbook — it is the menu of edits available.

**Reels (`ScenarioReel` → MP4):**
- Loop a short silent clip to cover the full dialogue length (no need to make a 20s clip).
- Sequence multiple ElevenLabs voice lines back-to-back with natural gaps. **Timing is measured automatically** from the audio files (see auto-duration below) — nothing is hand-timed.
- Burn in per-line subtitles: Dutch large, English smaller beneath, on a high-contrast plate.
- Emphasize one line (the teaching payload) in gold with a "SAY THIS ↓" badge.
- A 3-second hook overlay on a scrim that fades out.
- Floating tags timed to a specific line (e.g. "the switch (sound familiar?)").
- A branded outro card (blue, the DWJ logo mark in gold, the one line to remember, save/send CTA).
- Export 9:16 1080×1920 H.264 with the voice track muxed in.

**Carousels (`Cheatsheet`, `Quiz` → PNG slides):**
- Composite a watercolor cover image with a branded headline, kicker, and gradient scrim. **Each type uses a distinct cover treatment** so the tiles differ on the feed grid even on a shared base image: the cheatsheet cover is the bright "guide" tile (image band over a solid cream panel that holds the headline); the quiz cover is the dark "question" tile (heavy scrim, centred question, gold QUIZ marker + faint "?" watermark). The reel's first frame is the photo-forward tile. See the playbook's *Feed-grid differentiation* rule.
- Render crisp, correctly-spelled Dutch text every time (the thing AI image-gen garbles).
- Phrase cards: NL hero line, EN translation, a "WHEN" context panel, a faint number watermark, progress dots, the `NN / NN` counter.
- Quiz: scenario cover with the question overlaid, an options slide (A/B/C cards), and a reveal slide (works with or without a "correct" answer).
- One slide per phrase/option automatically (slide count follows the data).
- Brand colors throughout (blue `#0025DB`, gold `#E0BB00`) — consistent with the app.
- The DWJ logo mark in the wordmark pill on every slide (cover, phrase cards, CTA, quiz slides).

**Everything is data-driven and deterministic:** the same props always render the same
asset. Re-rendering never requires re-doing manual edits.

---

## The three compositions and their props

Props files live in `props/<week>/{slug}.json` (grouped by week-start date). Asset paths are relative to `public/`, so they start with the week segment: `<week>/{slug}/...`.

### `ScenarioReel` (reel → MP4)
```jsonc
{
  "clip": "<week>/{slug}/clip.mp4",                 // the silent image-to-video clip
  "hook": {"l1": "...", "l2": "...", "emphasis": "..."},  // 3-second opener; emphasis is gold
  "switchTagText": "...",                    // floating tag text (optional use)
  "lines": [
    {"file": "<week>/{slug}/roos-1.mp3", "speaker": "Roos", "nl": "...", "en": "..."},
    {"file": "<week>/{slug}/joost-2.mp3", "speaker": "Joost", "english": true, "switchTag": true, "line": "..."},
    {"file": "<week>/{slug}/roos-3.mp3", "speaker": "Roos", "recovery": true, "nl": "...", "en": "..."}
  ],
  "outro": {"kicker": "...", "nl": "...", "en": "...", "cta": "...", "handle": "@dutchwithjoost"}
}
```
Line flags: `english` = spoken in English, shown without a translation. `recovery` = the
teaching line, emphasized in gold. `switchTag` = show the floating tag during this line.

### `Cheatsheet` (carousel → PNG per slide)
```jsonc
{
  "theme": "Bij de bakker",                  // small kicker on each card
  "handle": "@dutchwithjoost",
  "coverImage": "<week>/{slug}/cover.png",          // watercolor cover from ChatGPT
  "cover": {"kicker": "...", "title": "...", "sub": "..."},
  "phrases": [{"nl": "...", "en": "...", "when": "..."}],  // one slide each
  "cta": {"title": "...", "sub": "..."}
}
```
Slides = cover + one per phrase + CTA. 5–8 phrases is the sweet spot.

### `Quiz` (carousel → 3 PNG slides)
```jsonc
{
  "theme": "...", "handle": "@dutchwithjoost",
  "scenarioImage": "<week>/{slug}/scenario.png",
  "scenarioLine": "...", "questionNl": "...", "questionEn": "...",
  "options": [{"key": "A", "text": "..."}, {"key": "B", "text": "..."}, {"key": "C", "text": "..."}],
  "correct": "B",          // OMIT entirely for reflex/"which one is you" quizzes
  "reveal": "..."
}
```

### article-remix
Not its own composition. Pick `Cheatsheet` (carousel) or `ScenarioReel` (reel) and fill
its props with article-derived content.

---

## Source image aspect ratios (match the canvas)

Generate each dropped image at the **same aspect as the composition that renders it**, or it gets cropped:

| Composition | Canvas | Source image to generate |
|-------------|--------|--------------------------|
| `Cheatsheet` | 1080×1350 (4:5) | `cover.png` at **4:5**, Joost in the upper half (the cover shows only the top band) |
| `Quiz` | 1080×1350 (4:5) | `scenario.png` at **4:5**, full-bleed |
| `ScenarioReel` | 1080×1920 (9:16) | the scene image and the Seedance clip at **9:16** |

Instagram feed carousels are 4:5; reels are 9:16. A 9:16 image dropped into a 4:5 carousel only shows its vertical top band. That is what cut Joost's head on the first cheatsheet cover.

## Render commands

`/instagram-render <slug>` resolves the week and runs the right command for you. To run by hand,
drop assets in `public/<week>/{slug}/` first, then:

```bash
# Reel → MP4 (durations are auto-detected; no manual timing)
npx remotion render src/index.ts ScenarioReel out/<week>/{slug}.mp4 --props=props/<week>/{slug}.json

# Carousel → PNG slides in out/<week>/{slug}/  (element-0.png … element-N.png)
npx remotion render src/index.ts Cheatsheet out/<week>/{slug} --sequence --image-format=png --props=props/<week>/{slug}.json
npx remotion render src/index.ts Quiz      out/<week>/{slug} --sequence --image-format=png --props=props/<week>/{slug}.json

# Preview / tweak props live before rendering (or: /instagram-render studio <slug>)
npm run studio
```

Run all commands from the `remotion/` directory.

---

## Auto-duration (why the skill never measures audio)

`ScenarioReel` uses `calculateMetadata` + `@remotion/media-utils` to read the real length of
each voice file and the clip at render time. The skill only needs to list the line files in
order — Remotion computes where each line starts, how long the reel is, and how many times to
loop the clip. Measured-by-hand and auto-detected timings matched to within rounding
(22.19s vs 22.23s on the first reel).

---

## Production lessons (carried forward)

- **Subtitles need a dark plate, not just a shadow.** White text over a light watercolor
  background (bread, warm light) is unreadable with a shadow alone. The hook overlay learned
  the same lesson — it now sits on a scrim panel.
- **The recovery line must be visually louder than the rest.** Gold + "SAY THIS ↓" makes the
  one teaching payload unmissable in a fast scroll.
- **Loop seam is clean when the clip starts and ends on the scene image.** Seedance 1 Pro takes
  both a begin frame and an end frame; setting both to the scene image makes every loop boundary
  land on the same frame, so the hard cut is invisible. (Before we used the end frame, the wrap
  was a visible cut and a ~0.5s cross-dissolve was the planned fix — no longer needed with
  matched begin/end frames.)
- **Natural gaps matter.** A 0.35s gap between turns reads as conversation; back-to-back audio
  feels robotic. Tunable via `pacing` in props.
- **Crisp Dutch is the whole point.** Never bake Dutch text into an AI image — render it here,
  where spelling and diacritics (één, alstublieft) are exact.
- **The cheatsheet cover anchors the image to the top, not the center.** The cover band is the
  top 56% of the frame with `objectFit: cover`, which crops the *bottom* of the image (the part
  that fades into the cream headline panel) — it uses `objectPosition: 'center top'` so a face
  framed in the upper-middle (as the cover prompt instructs) is never lopped off. If a cover ever
  cuts Joost's head, the source image put him too low; regenerate with him in the upper-middle.
- **No boxed callouts.** A light-grey rounded card with a coloured left accent bar and a
  tracked-out uppercase label is the overused AI/Canva-template tell, and viewers now read it as
  "this is AI." The cheatsheet's "when to use it" is an editorial subhead with a gold underline
  swash instead. Reuse the brand's own graphic vocabulary (the gold rule, the blue display type)
  over generic info-callout boxes.
- **Hook overlaps the first line by design** (both visible while the hook fades). If it feels
  busy, raise `pacing.leadIn` so the first line starts after the hook clears.

---

## Folders

- `src/compositions/` — the three compositions.
- `src/components.tsx` — shared brand furniture (the wordmark pill, counter, dots).
- `src/logo.tsx` — the DWJ logo mark (`LogoMark`), render-safe and color-configurable, drawn into the wordmark and the reel outro.
- `src/theme.ts` — brand colors (mirror of `brand/brand-colors.json`).
- `props/<week>/` — one JSON per post, grouped by week-start date (`/instagram-content` writes these).
- `public/logo.tsx` — the source SVG of the logo (the shape of truth). `src/logo.tsx` mirrors it for rendering; `public/<week>/{slug}/` holds the generated per-post assets you drop in.
- `out/<week>/` — rendered MP4s and PNG slide folders, grouped by week.
