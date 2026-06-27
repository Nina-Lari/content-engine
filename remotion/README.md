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

**Carousels (`Cheatsheet`, `Quiz`, `ConceptGuide`, `VocabScene`, `ComicStory` → PNG slides):**
- Composite a watercolor cover image with a branded headline, kicker, and gradient scrim. **Each type uses a distinct cover treatment** so the tiles differ on the feed grid even on a shared base image: the cheatsheet cover is the bright "guide" tile (image band over a solid cream panel that holds the headline); the quiz cover is the dark "question" tile (heavy scrim, centred question, gold QUIZ marker + faint "?" watermark). The reel's first frame is the photo-forward tile. See the playbook's *Feed-grid differentiation* rule.
- Render crisp, correctly-spelled Dutch text every time (the thing AI image-gen garbles).
- Phrase cards: NL hero line, EN translation, a "WHEN" context panel, a faint number watermark, progress dots, the `NN / NN` counter.
- Quiz: scenario cover with the question overlaid, an options slide (A/B/C cards), and a reveal slide (works with or without a "correct" answer).
- One slide per phrase/option automatically (slide count follows the data).
- Brand colors throughout (blue `#0025DB`, gold `#E0BB00`) — consistent with the app.
- The DWJ logo mark in the wordmark pill on every slide (cover, phrase cards, CTA, quiz slides).
- **`ConceptGuide`** (particles, mistakes, small words, idioms): a cover with a gold variant marker (LITTLE WORD / COMMON MISTAKE / DUTCH IDIOM / SOUND MORE DUTCH), an optional "what is it" intro slide, then one teaching card per concept (a hero term, an optional literal/gloss line, a meaning, one or two NL/EN example pairs, and a gold-underline "when to use it" note), then the CTA. One flexible composition, four post types, chosen by `variant`.
- **`VocabScene`** (labeled vocabulary scenes): a full-bleed, label-free illustration with crisp NL/EN label chips and arrows composited on top from authored `x/y` positions, an optional recap list slide, then the CTA. The Dutch is rendered here, never baked into the image.
- **`ComicStory`** (a funny story that lands one lesson): a true comic strip where **each story beat is its own full-bleed illustration** (a panel), with the spoken Dutch rendered crisply in a real comic-book **speech bubble** drawn on top (a white outlined balloon with a tail pointing at the speaker, holding the NL line + EN gloss), plus a comic caption box for the narration, never baked into the image. After the panels come one or more text **lesson** slides (a headline + right/wrong lines with red ✗ / green ✓ chips + a "remember this" note), then the CTA. This is the multi-panel format the other carousels are not: `Cheatsheet`/`ConceptGuide` illustrate only the cover.

**Everything is data-driven and deterministic:** the same props always render the same
asset. Re-rendering never requires re-doing manual edits.

---

## The compositions and their props

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

### `IdiomReel` (reel → MP4; the funny idiom format)
```jsonc
{
  "clip": "<week>/{slug}/clip.mp4",                 // the conversation clip — ONE clip, looped
  "literalImage": "<week>/{slug}/literal.png",      // full-frame "what I pictured" still (the gag)
  "literalLabel": "WHAT I PICTURED",
  "literalCaption": "a real monkey... out of his sleeve?!",
  "hook": {"l1": "...", "l2": "...", "emphasis": "..."},  // 3-second opener; emphasis is gold
  "lines": [
    {"file": "<week>/{slug}/joost-1.mp3", "speaker": "Joost", "nl": "...", "en": "..."},
    {"file": "<week>/{slug}/maya-2.mp3", "speaker": "Maya", "imagine": true, "nl": "...", "en": "..."},
    {"file": "<week>/{slug}/joost-4.mp3", "speaker": "Joost", "recovery": true, "nl": "...", "en": "..."}
  ],
  "outro": {"kicker": "WHAT IT REALLY MEANS", "nl": "<the idiom>", "literal": "lit. \"...\"", "en": "<the meaning>", "cta": "...", "handle": "@dutchwithjoost"}
}
```
Same subtitle-led, single-looped-clip backbone as `ScenarioReel`, plus the cutaway. Line flags: `imagine` =
during this line, cut away full-frame to `literalImage` (framed as a daydream with the `literalLabel` badge +
`literalCaption`); `recovery` = the reveal/meaning line, emphasized in gold ("WHAT IT MEANS"); `english` =
spoken in English, no translation. One idiom per reel. Drop a 9:16 conversation `clip.mp4` and a 9:16 `literal.png`.

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
  "reveal": "...",
  "cta": "..."             // closing save/send line on the reveal slide; optional, generic fallback if omitted
}
```

### `ConceptGuide` (carousel → PNG per slide; `particle` / `small-words` / `mistake` / `idiom`)
```jsonc
{
  "variant": "particle",                   // particle | small-words | mistake | idiom (sets the gold cover marker)
  "theme": "nog",                          // small kicker on each card
  "handle": "@dutchwithjoost",
  "coverImage": "<week>/{slug}/cover.png", // watercolor Joost cover, 4:5, same treatment as the cheatsheet
  "cover": {"kicker": "...", "title": "...", "sub": "..."},
  "intro": {"title": "...", "body": "...", "points": ["...", "..."]},  // "what is it" slide; set to null to skip (do NOT omit, see merge note)
  "cards": [
    {"nl-note": "card fields: term (required) + sub? + meaning? + examples? + note?"},
    {"term": "Nog = still", "meaning": "When something keeps going.", "examples": [{"nl": "Het regent nog.", "en": "It is still raining."}], "note": "Use nog when something continues."},
    {"term": "door de vingers zien", "sub": "to see through the fingers", "meaning": "to turn a blind eye", "examples": [{"nl": "...", "en": "..."}]}
  ],
  "cta": {"title": "...", "sub": "..."}
}
```
Card fields: only `term` is required. `sub` = the literal line (idioms) or a short gloss, `meaning` = a
rule/meaning line, `examples` = 1–2 NL/EN pairs, `note` = the gold-underline "when to use it". Slides =
cover + intro (if present) + one per card + CTA. 4–8 cards is the sweet spot. (The `nl-note` line above is
just a comment; do not ship it.) **Props-merge note:** Remotion merges input props over `defaultProps`, so to
skip the intro set `"intro": null` (omitting it inherits the sample intro from the defaults). Same for any
optional field that exists in the defaults.

### `VocabScene` (carousel → PNG per slide; labeled vocabulary scene)
```jsonc
{
  "theme": "Dutch vocabulary",
  "handle": "@dutchwithjoost",
  "sceneImage": "<week>/{slug}/scene.png", // label-FREE illustration, 4:5, generated with NO text in it
  "title": {"nl": "Een dagje koken", "en": "A day in the kitchen"},
  "labels": [
    {"nl": "de pan", "en": "the pan", "x": 0.24, "y": 0.5, "point": {"x": 0.4, "y": 0.58}}
  ],
  "recap": true,                           // recap list slide after the poster; set false to skip (omitting inherits default true)
  "cta": {"title": "...", "sub": "..."}
}
```
`x`/`y` are fractions (0–1) of the 1080×1350 canvas and place the label chip's centre; `point` is the spot
its arrow targets (omit `point` for a chip with no arrow). Author the positions against the actual
generated image (Studio is the fastest way). Slides = poster + recap (if `true`) + CTA. 8–12 labels is the
sweet spot; keep them clear of the top title band.

### `ComicStory` (carousel → PNG per slide; a funny story + one lesson)
```jsonc
{
  "theme": "Ik heb het warm",                 // small kicker (unused on most slides; reserved)
  "handle": "@dutchwithjoost",
  "cover": {
    "image": "<week>/{slug}/cover.png",        // 4:5, figures in the upper half (cover crops the top band)
    "marker": "COMMON MISTAKE",                // gold cover pill
    "kicker": "A SUMMER STORY", "title": "...", "sub": "..."
  },
  "panels": [                                  // ONE full-bleed illustration per story beat
    {
      "image": "<week>/{slug}/panel-1.png", "speaker": "Tom",   // speaker is optional, not drawn (the tail shows who talks)
      "nl": "...", "en": "...", "caption": "narrator line",
      "bubble": {"x": 0.62, "y": 0.30, "w": 0.5, "tail": {"x": 0.34, "y": 0.40}}  // bubble centre + tail target, 0-1 fractions
    }
  ],
  "lessons": [                                 // text slides after the panels (no image)
    {"kicker": "The fix", "title": "...", "lines": [
      {"nl": "Ik ben heet.", "en": "I'm hot (as in sexy).", "kind": "wrong"},   // red ✗
      {"nl": "Ik heb het warm.", "en": "I feel hot.", "kind": "right"}          // green ✓
    ], "note": "remember-this subhead"}
  ],
  "cta": {"title": "...", "sub": "..."}
}
```
Slides = cover + one per panel + one per lesson + CTA. Each `panels[]` entry is its own full-bleed 4:5 drawing;
Remotion draws the comic **speech bubble** on top at `bubble.x/y` (its centre) with a short tail pointing toward
`bubble.tail.x/y`, all 0-1 fractions, plus a caption box at the bottom. The tail is **auto-capped to a short stub**
(it can never run down onto a face) and the bubble is **auto-clamped** to stay clear of the top wordmark/counter
and the side margins. So `bubble.tail` only needs to point at the speaker's SIDE (Tom-left vs Joost-right), not the
exact mouth, and `bubble.x/y` can be approximate. Generate the art with the characters in the lower two-thirds and
a calm, empty top third (the bubble lane), and **no bubbles or text drawn in**; tweak `bubble` coords in Studio if
you want. `lessons[].lines[].kind` is `wrong` (red ✗, NL in red), `right` (green ✓),
or `plain` (gold dot). 3 to 5 panels and 1 to 2 lessons is the sweet spot.

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
| `ConceptGuide` | 1080×1350 (4:5) | `cover.png` at **4:5**, Joost in the upper half (same as the cheatsheet cover) |
| `VocabScene` | 1080×1350 (4:5) | `scene.png` at **4:5**, full-bleed, **no text in the image** (labels are rendered) |
| `ComicStory` | 1080×1350 (4:5) | `cover.png` + one `panel-N.png` per beat, each **full-bleed 4:5**, a calm area left for the speech bubble, **no bubbles or text in the image** |
| `ScenarioReel` | 1080×1920 (9:16) | the scene image and the Seedance clip at **9:16** |
| `IdiomReel` | 1080×1920 (9:16) | the conversation scene + clip at **9:16**, and the literal-imagination image at **9:16** full-bleed |

Instagram feed carousels are 4:5; reels are 9:16. A 9:16 image dropped into a 4:5 carousel only shows its vertical top band. That is what cut Joost's head on the first cheatsheet cover.

## Render commands

`/instagram-render <slug>` resolves the week and runs the right command for you. To run by hand,
drop assets in `public/<week>/{slug}/` first, then:

```bash
# Reel → MP4 in out/<week>/{slug}/ (its own folder, like a carousel; durations auto-detected, no manual timing)
npx remotion render src/index.ts ScenarioReel out/<week>/{slug}/{slug}.mp4 --props=props/<week>/{slug}.json
npx remotion render src/index.ts IdiomReel    out/<week>/{slug}/{slug}.mp4 --props=props/<week>/{slug}.json

# Carousel → PNG slides in out/<week>/{slug}/  (element-0.png … element-N.png)
npx remotion render src/index.ts Cheatsheet   out/<week>/{slug} --sequence --image-format=png --props=props/<week>/{slug}.json
npx remotion render src/index.ts Quiz         out/<week>/{slug} --sequence --image-format=png --props=props/<week>/{slug}.json
npx remotion render src/index.ts ConceptGuide out/<week>/{slug} --sequence --image-format=png --props=props/<week>/{slug}.json
npx remotion render src/index.ts VocabScene   out/<week>/{slug} --sequence --image-format=png --props=props/<week>/{slug}.json
npx remotion render src/index.ts ComicStory   out/<week>/{slug} --sequence --image-format=png --props=props/<week>/{slug}.json

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
  matched begin/end frames.) Drop that anchor image as `<slug>/starting-frame.png` so it is
  obvious it is the clip's begin = end frame.
- **The end card must fully clear before the last frame, or the loop carries a ghost.** The
  `EndCard` fade-out finishes 8 frames before the end and clamps at 0, so the final frames are
  pure scene with nothing left over. Earlier it faded across the very last frame and left a ~6%
  blue ghost on the final frame — invisible at speed but it meant the reel's last frame was not
  identical to its first. To confirm a clean loop, render two stills next to the MP4 in
  `out/<week>/<slug>-stills/`: `reel-endcard.png` (a frame mid-hold, to check the CTA card) and
  `reel-lastframe.png` (the true final frame, to check it returns to the scene and matches frame 0).
- **Natural gaps matter.** A 0.35s gap between turns reads as conversation; back-to-back audio
  feels robotic. Tunable via `pacing` in props.
- **`IdiomReel` is `ScenarioReel` plus a cutaway.** It reuses the looped-clip + subtitle + hook +
  loop-safe outro backbone, and adds the literal-imagination gag: the line flagged `imagine: true` cuts
  full-frame to `literalImage`, framed with a gold daydream border, a "WHAT I PICTURED" badge, and a short
  white flash at each edge, then returns to the conversation. The cutaway is mid-reel, so the loop seam
  (first frame = last frame = the conversation scene) is unaffected. The whole format lives or dies on a
  funny, drawable literal image, so brief the gag hard.
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
- **The quiz reveal slide is the closing CTA, so keep it earning a send and keep it props-driven.**
  The save/send line comes from `cta` in props (a generic fallback renders if it is omitted), so it
  is never hard-locked to one theme. It used to be hardcoded to "send it to whoever keeps getting
  answered in English," which would have leaked the switch-to-English theme onto every other quiz.
  For no-correct reflex quizzes the gold kicker reads **WHICH ONE IS YOU?**, not "NO WRONG ANSWER":
  announcing "no wrong answer" on the slide is over-reassurance (see `brand/instagram-voice.md` →
  Quiz design).
- **`ConceptGuide` is one composition, four tiles.** The `variant` only changes the gold cover marker
  (LITTLE WORD / COMMON MISTAKE / DUTCH IDIOM / SOUND MORE DUTCH); it exists so the four post types still
  read as distinct tiles on the feed grid, the way the cheatsheet and quiz covers do. The card body is
  shared and adapts to which fields are present (a long idiom term auto-shrinks so it never overflows).
  Keep each card to one concept; 4–8 cards per post.
- **`ComicStory` bubble tail is a short stub, and the bubble is clamped off the furniture.** The tail does NOT draw all the way to `bubble.tail` (the mouth): if it did, it ran long and overlapped the character's face. Instead the apex sits a fixed stub-length (~74px) past the bubble edge along the direction of the mouth, so it points at the speaker without reaching them. The bubble's height is estimated from its text (`estBubbleHeight`) and its centre is clamped so the top always clears the wordmark/counter row (`TOP_SAFE`) and the sides stay within the margins, no matter how high or wide `bubble.x/y/w` is set. So `bubble.tail` only needs to indicate *direction* (which side the speaker is on); exact mouth precision is not required. June 2026.
- **`ComicStory` is the only multi-panel carousel.** Every other carousel illustrates just the cover; ComicStory takes one full-bleed drawing per story beat (`panels[]`) and draws a real comic-book **speech bubble** on top of each, so a story is told "in pictures" while the Dutch stays editable and correctly spelled. The bubble is an opaque white balloon (dark comic outline) at `bubble.x/y`; its tail is a triangle from the bubble centre to `bubble.tail.x/y`, drawn UNDER the balloon so only the part pointing at the speaker shows. That trick needs no text measurement and points in any direction. Generate panels with a calm area for the bubble and **no bubbles/text drawn in**, then nudge the coords in Studio so each tail lands on the right mouth. The closing `lessons[]` slides are text only (red ✗ / green ✓ right-vs-wrong lines), so the takeaway never depends on an illustration. Built for the heatwave "ik ben heet" story, June 2026.
- **`ComicStory` panels reserve a top "bubble lane", and the art must respect it.** The first heatwave render put the bubbles on top of the characters' faces: the panel art filled the whole frame with heads in the upper-middle, leaving nowhere clean for a bubble. Two things fixed it together. (1) **Prompt:** frame both characters in the **lower two-thirds** (seated, waist-up, heads below the one-third line) and keep the **entire top third** a calm, empty background (sky/awning/wall). Drop any "full-bleed, fills the whole frame, no empty bands" wording, which directly fights leaving negative space and makes the image model crowd the top. (2) **Composition:** the top third is now a soft **light scrim** ("bubble lane") and panel bubbles default to `y ≈ 0.21` (centred, `x ≈ 0.5`) with the tail pointing down to the speaker's mouth (`tail.y ≈ 0.5`). The light scrim replaced the old dark top scrim; the bottom scrim stays for the caption box / dots / handle. Net: the bubble always reads on a clean band instead of a face. Prompt-framing is best-effort (image models comply with "subject low, top empty" better than with "leave space," but not perfectly), so the reserved lane is the safety net. After regenerating low-framed art, fine-tune each `bubble.tail.x/y` in Studio so the tail lands on the right mouth.
- **`VocabScene` labels are rendered, never drawn by the image model.** The illustration is generated with
  NO text and breathing room around each object; Remotion overlays the crisp NL/EN chips and arrows from
  `x/y` props. That keeps Dutch spelling and articles exact (the whole point) and lets you nudge a label in
  Studio without regenerating the art. If a chip sits awkwardly, move its `x/y`; if an arrow streaks across
  the frame, the label was placed too far from its object.

---

## Folders

- `src/compositions/` — the three compositions.
- `src/components.tsx` — shared brand furniture (the wordmark pill, counter, dots).
- `src/logo.tsx` — the DWJ logo mark (`LogoMark`), render-safe and color-configurable, drawn into the wordmark and the reel outro.
- `src/theme.ts` — brand colors (mirror of `brand/brand-colors.json`).
- `props/<week>/` — one JSON per post, grouped by week-start date (`/instagram-content` writes these).
- `public/logo.tsx` — the source SVG of the logo (the shape of truth). `src/logo.tsx` mirrors it for rendering; `public/<week>/{slug}/` holds the generated per-post assets you drop in.
- `out/<week>/{slug}/` — one folder per post (reel `{slug}.mp4` or carousel `element-*.png`), each also holding a `caption.md` ship-file the render skill writes for review/sharing. Grouped by week. (Reel loop-check stills go in a throwaway sibling `out/<week>/{slug}-stills/`.)
