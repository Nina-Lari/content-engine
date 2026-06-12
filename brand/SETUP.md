# Instagram One-Time Setup

Do this once. After it, every reel and visual runbook the `/instagram-content` skill writes is paste-ready: it already names your files, your Joost voice, and inlines your style. You never repeat this.

Estimated time: ~10 minutes.

---

## Checklist

- [ ] **1. Add your two style reference images.**
      Copy the two illustrations you normally use as style guidance into this `brand/` folder and name them exactly:
  - `brand/style-ref-1.png`
  - `brand/style-ref-2.png`

- [ ] **2. Create Joost's reference sheet (lock him forever).**
      In ChatGPT (image mode), **attach your existing Joost artwork** and paste the prompt below. Save the result as `brand/joost-reference.png`.

  ```
  Using the attached image of Joost, create a clean character reference sheet on a
  plain cream background: a front-facing full-body view plus a head close-up, with
  a neutral friendly expression. Keep Joost's exact design — same face, hair,
  stubble, build, and clothing.

  Illustration style:
  Warm, hand-drawn storybook illustration in a soft watercolor-and-ink style.
  Gentle pencil-like outlines, subtle paper texture, muted cozy colors, light
  watercolor washes. Slightly imperfect and handmade.

  Characters:
  Eyes drawn only as small solid dark circles or vertical oval dots. No pupils, no
  sclera, no iris, no eyelashes, no glossy or realistic eyes. Small simple nose,
  soft blush, friendly understated expression. Rounded shapes, soft shadows.

  Avoid: realistic eyes, pupils, sclera, iris, eyelashes, glossy or anime eyes,
  photorealism, 3D render, plastic texture, harsh outlines, sharp digital
  gradients, overly perfect vector art, cluttered composition, text in the image.
  ```

- [ ] **3. Fill the two slots in `brand/brand-kit.md`.**
      Open `brand/brand-kit.md` and replace the two `FILL IN` markers:
  - **Joost one-line description** (from your art, e.g. "cheerful young man, ~32, tousled brown hair, light stubble, mustard sweater"). This is a backup anchor.
  - **Joost ElevenLabs voice** — pick a Dutch-capable voice you like, render a test line, and write its name here. This becomes your permanent Joost voice.

- [ ] **4. Confirm your editor.**
      The runbooks assume **CapCut** for stitching, voiceover, and subtitles. If you use something else, change the editor line in `brand/brand-kit.md` and tell me so I update the assembly steps.

---

## Verify

After setup, this folder should contain:

```
brand/
  brand-kit.md          (slots filled in)
  SETUP.md              (this file)
  joost-reference.png   (your locked Joost)
  style-ref-1.png
  style-ref-2.png
```

That is it. From here, run `/instagram-content` to generate a week, and every reel step will already point to these files and your Joost voice.
