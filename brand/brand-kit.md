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

## Voices (ElevenLabs)

| Character | Voice | Notes |
|-----------|-------|-------|
| Joost | Ido (ElevenLabs voice ID `dLPO5AsXc3FZDbTh1IKa`) | Same voice in every reel for audio consistency. |
| Second character | pick per reel | Any Dutch-capable voice. Keep it consistent within a single reel; it can change between reels. |

Settings: Stability ~50, Similarity high, Style low, speed slightly slow for learners.

## Editor

**CapCut** — stitching clips, adding the voiceover, and burning in subtitles.

## Subtitle policy

Every reel: Dutch line large, English translation smaller beneath it. Clean, high contrast. Subtitles carry comprehension, so lip-sync is not required (Tier 1).

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
