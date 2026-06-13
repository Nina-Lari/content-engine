# Instagram Brand Kit

One source of truth for the visual and voice identity of **every** DutchwithJoost Instagram post: reels AND carousels (cheatsheets, quizzes, article remixes). Every runbook the `/instagram-content` skill writes pulls its style, characters, voices, and editor from here. Maintain assets in one place. Update a value here and every future runbook uses it.

---

## Visual assets (drop the image files into this `brand/` folder)

| Asset | Filename | Use |
|-------|----------|-----|
| Joost reference sheet | `brand/joost-reference.png` | Attach to every image where Joost appears. Locks him across all posts. |
| Style reference 1 | `brand/style-ref-1.png` | Attach to every image. Sets the watercolor style. |
| Style reference 2 | `brand/style-ref-2.png` | Attach to every image. Sets the watercolor style. |

**Joost, one-line anchor** (backup if the reference image is missing): A cheerful, watercolor-style young man with tousled brown hair, light stubble, a mustard sweater, rolled jeans, and white sneakers, around 32 years old.

## Logo

The DutchwithJoost logo mark (the four-petal symbol) is **code, not a dropped image** — it is baked into Remotion, so it is not attached to ChatGPT prompts. It renders automatically into the brand furniture: the wordmark pill on every carousel slide and the reel outro card. There is nothing to generate per post.

| Asset | File | Use |
|-------|------|-----|
| Logo source (SVG) | `remotion/public/logo.tsx` | The source of truth for the mark's shape. Edit here when the logo changes. |
| Logo render component | `remotion/src/logo.tsx` (`LogoMark`) | The render-safe version Remotion actually draws (inline-styled, takes a `fill` color). Mirrors the source paths. |

Color: the mark matches the wordmark text. White on the blue wordmark pill, blue on the white (on-dark) pill, and gold only on the reel outro card. The scene illustrations never include the logo; keep it to the rendered graphic layer. The wordmark text is the proper-case name "Dutchwithjoost" (capital D), not the lowercase @handle.

## Voices (ElevenLabs)

| Character | Voice | Notes |
|-----------|-------|-------|
| Joost | Ido (ElevenLabs voice ID `dLPO5AsXc3FZDbTh1IKa`) | Same voice in every reel for audio consistency. |
| Second character | pick per reel | Any Dutch-capable voice. Keep it consistent within a single reel; it can change between reels. |

Settings: Stability ~50, Similarity high, Style low, speed slightly slow for learners.

## Motion (image-to-video, for scenario reels)

The proven recipe for the silent two-shot clip in a scenario reel. This is the model and the
settings that produced clips we were actually happy with — reuse them, don't reinvent per reel.

| Setting | Value |
|---------|-------|
| Model | **Seedance 1 Pro** |
| Begin frame | the scene image (from the ChatGPT step) |
| End frame | the **same** scene image — gives a clean native loop, so never write loop wording into the prompt |
| Ratio | 9:16 |
| Duration | 10s |
| Quality | 720p |
| Negative prompt | **none** — Seedance 1 Pro has no negative-prompt field |

**The one rule that makes or breaks it: don't fight talking with a negative list.** The clip is
silent and Remotion times the voiceover, so the characters must keep their mouths closed. The
instinct is to pile up "no talking, no lip sync, no mouth movement, no open mouth" — that
backfires: naming those actions makes Seedance perform them. (And there is no negative field to
put them in anyway.) Instead the single motion prompt:

1. **Leads with the positive closed-mouth state**, per character by position — e.g. "the woman on
   the right: her mouth and lips remain unchanged and closed for the entire video; her face stays
   still" and "Joost keeps a soft, natural closed-mouth expression, lips closed the whole time."
2. Adds **one short calm clause** of don'ts only — "No speech-like mouth movement, no mouth
   opening, no jaw motion" — never a long list.
3. Gives each character **one tiny body-language gesture** and "returns to the provided end-frame
   pose" (the end frame does the looping, so no loop wording).
4. Keeps the camera static with subtle ambient breathing, and closes with "Preserve exact style,
   character design, composition, and lighting" (this stands in for the image-style negatives —
   there is no negative field).

In the motion prompt it is fine to name a character alongside their position ("Maya, the woman on
the right") — that is the video model, not the image model. The *image* prompt still avoids names
(see Reference logic). Heavier models with their own lip-sync (Kling, Veo, Sora) are only for
Tier 2+, when you actually want talking mouths in single-face framing.

## Editor

**Remotion** (the `remotion/` project) is the only editor for every post — reels and carousels. It composites the clip, lays the voiceover on with auto-detected timing, burns in subtitles, adds the hook and outro, and renders carousels from props. No CapCut, no Canva. See `remotion/README.md` for the full menu of edits and the render commands.

## Subtitle policy

Every reel: Dutch line large, English translation smaller beneath it. Clean, high contrast. Subtitles carry comprehension, so lip-sync is not required (Tier 1).

## Brand colors

The DutchwithJoost product palette (from the app + landing page). Canonical machine-readable tokens live in `brand/brand-colors.json`.

| Role | Hex | Use on Instagram |
|------|-----|------------------|
| Primary (blue) | `#0025DB` | Hero NL phrases, wordmark, headlines, links |
| Secondary (gold) | `#E0BB00` | Accents: "when" pills, active progress dots, CTA buttons, underlines |
| Ink (foreground) | `#2E2E2E` | Body text, EN translations |
| Muted ink | `#71717A` | Labels, captions, footnotes |
| Background | `#FCFCFC` | Slide background |
| Muted panel | `#F4F4F5` | Soft panels behind context lines |
| Border | `#CCCCCC` | Hairline dividers |
| Card | `#FFFFFF` | Cards on tinted backgrounds |

**How to use them.** These colors are the *graphic and typographic layer*: the headlines, chips, progress dots, CTA buttons, and subtitle accents that make a post instantly recognizable as DutchwithJoost and consistent with the app. The *illustrations* stay in the watercolor storybook style (Style Block below). Do not recolor Joost or scenes to these hex values. Gold has low contrast on white, so use it as a fill with dark text (`#18181B`) on top, never as small text on a light background.

---

## Style Block (paste into every ChatGPT image prompt)

```
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
busy that it distracts from the main moment.

Mood:
Warm, approachable, educational, calm, friendly, slightly whimsical, human, and
relatable.

Style keywords:
Children's book editorial illustration, loose ink linework, watercolor texture,
soft pastel palette, hand-sketched, slightly whimsical, clean but organic, cozy
everyday atmosphere.
```

## Negative prompt (paste into every image prompt)

```
Avoid realistic eyes, detailed pupils, sclera, iris, eyelashes, glossy eyes,
anime eyes, photorealism, 3D render, plastic texture, harsh outlines, sharp
digital gradients, overly perfect vector art, exaggerated cartoon expressions,
complex facial detail, hyperreal skin texture, dramatic lighting, cinematic
realism, overly polished digital art, cluttered composition, text in the image,
inconsistent character design.
```

---

## Reference logic (how the three attachments are used)

When a runbook tells you to attach the references, ChatGPT uses them with different rules:

- **Style references** (`style-ref-1`, `style-ref-2`): match the feeling, softness, line quality, and color warmth. Do not copy their characters, composition, or objects.
- **Joost reference** (`joost-reference`): reproduce Joost exactly. Same face, hair, stubble, build, clothing.
- **Second character**: not in any reference. Invent to fit the scene, keep identical across that one reel's images.

---

## One-time setup: create Joost's reference sheet

Run once, then reuse forever. In ChatGPT, **attach your existing Joost artwork** and paste:

```
Using the attached image of Joost, create a clean character reference sheet on a
plain cream background: a front-facing full-body view plus a head close-up, with a
neutral friendly expression. Keep Joost's exact design — same face, hair, stubble,
build, and clothing.

[Paste the Style Block above]

[Paste the Negative prompt above]
```

Save the result as `brand/joost-reference.png`. Done. Every future reel attaches this file.
