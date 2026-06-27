# Mon June 29, Idiom reel: nu komt de aap uit de mouw

> **Type:** idiom-reel
> **Theme:** Dutch idioms, taken literally (the recurring gag: a real idiom in conversation, pictured literally)
> **Setting:** two friends over coffee at a kitchen table
> **Persona:** the plateaued learner who wants to sound natural and get the jokes (Belonging + fluency signals)
> **Positioning thread:** the real, spoken Dutch you actually hear, taught warmly and judgment-free
> **Render:** IdiomReel. props: `remotion/props/2026-06-29/aap-uit-de-mouw.json`. run `/instagram-render aap-uit-de-mouw`
> **Status:** draft   ← set to `approved` (after review + assets saved) to allow rendering

## Rules for this post (keep edits on-rails)

- Idiom reel = ONE idiom per reel, played for laughs: a Dutch speaker uses it naturally, the learner pictures it LITERALLY (the cutaway), confusion, then the real meaning lands. One idiom per week.
- Dutch: the idiom is the sanctioned above-A1 payload (always glossed, literal + meaning). Everything around it (the reactions, the explanation) stays A1 and is glossed. Every line passes the Dutch check below.
- Remotion renders the final asset (IdiomReel). The literal scene is a separate generated image shown as a timed cutaway. Crisp Dutch text is rendered by Remotion, never baked into an image.
- No em-dash anywhere: not in the props JSON, the subtitles, the caption, or the pinned comment. Use a period, comma, colon, or parentheses.
- Image prompts carry the full Style Block + Negative prompt text inline, verbatim. Copy-paste-ready, never a placeholder.
- Caption ends with the standard bio CTA line, verbatim: `Start learning Dutch with Joost: link in bio.`
- Caption, hook, and outro text pass the Voice check: no stacked AI-slop sentence shapes; reads aloud like one person talking to a friend.
- The reel must loop: the conversation clip begins and ends on the same scene image (begin frame = end frame), so the Instagram loop is seamless.

## Dutch check

| # | Dutch line | Level | Correct? | Note |
|---|-----------|-------|----------|------|
| 1 | Aha! Nu komt de aap uit de mouw. | idiom (sanctioned) | yes | The taught idiom, above A1 by design; glossed literally and by meaning. Surrounding words A1. |
| 2 | Een aap? Uit je mouw? | A1 | yes | The literal-reaction gag. Noun + prepositional question, all high-frequency. |
| 3 | Haha, nee joh. Geen echte aap. | A1 | yes | `joh` = a warm colloquial tag. `geen` + adjective + noun negation, correct. |
| 4 | Het betekent: nu weten we de waarheid. | A1 | yes | `Het betekent` then V2 inversion after `nu`. `de waarheid` (the truth) is glossed. The reveal. |

## Voice check

Clean. Hook opens on the concrete gag (a monkey out of a sleeve), no slop shapes. Caption glosses the idiom (literal + meaning) so the Dutch never sits untranslated, and closes on a concrete moment ("someone's real reason slips out"). Outro states the meaning plainly.

## ASSETS TO GENERATE (save into remotion/public/2026-06-29/aap-uit-de-mouw/)

STEP 1 — Voice (ElevenLabs). Use the Joost voice for Joost; pick one warm Dutch female voice for Maya and keep it consistent across the idiom series. Settings: Stability ~50, Similarity high, Style low, slightly slow. Render each line as its own file and save with these exact names (order matters):

  remotion/public/2026-06-29/aap-uit-de-mouw/joost-1.mp3   "Aha! Nu komt de aap uit de mouw."        (EN: Aha! Now the monkey comes out of the sleeve.)
  remotion/public/2026-06-29/aap-uit-de-mouw/maya-2.mp3    "Een aap? Uit je mouw?"                   (EN: A monkey? Out of your sleeve?)
  remotion/public/2026-06-29/aap-uit-de-mouw/joost-3.mp3   "Haha, nee joh. Geen echte aap."          (EN: Haha, no. Not a real monkey.)
  remotion/public/2026-06-29/aap-uit-de-mouw/joost-4.mp3   "Het betekent: nu weten we de waarheid."  (EN: It means: now we know the truth.)
(Remotion measures each file's length automatically. You do not note durations.)

STEP 2 — Conversation scene image (ChatGPT). Attach: brand/style-ref-1.png, brand/style-ref-2.png, brand/joost-reference.png. Paste this exact prompt:

  Create a warm, hand-drawn storybook illustration, VERTICAL 9:16 (1080x1920, the Instagram reel ratio): JOOST on the left and a woman on the right, sitting at a kitchen table over coffee, mid-conversation, warm and relaxed. JOOST is mid-gesture as if he just realised something; the woman on the right leans in, curious. Match the STYLE of style-ref-1 and style-ref-2 (do not copy their characters or objects). Reproduce JOOST exactly from joost-reference. Keep the bottom third of the frame calmer and less detailed, because subtitles are rendered there. No text in the image.

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

  Avoid realistic eyes, detailed pupils, sclera, iris, eyelashes, glossy eyes,
  anime eyes, photorealism, 3D render, plastic texture, harsh outlines, sharp
  digital gradients, overly perfect vector art, exaggerated cartoon expressions,
  complex facial detail, hyperreal skin texture, dramatic lighting, cinematic
  realism, overly polished digital art, cluttered composition, text in the image,
  inconsistent character design.

Save it as the clip's start frame: remotion/public/2026-06-29/aap-uit-de-mouw/starting-frame.png (this is the begin = end frame for the loop).

STEP 3 — Video (image-to-video; Seedance 1 Pro). Upload the Step 2 image as BOTH the begin frame AND the end frame (end frame = begin frame returns the clip to the scene for a clean loop). Settings: 9:16, 10s, 720p. SILENT, no lip-sync. Paste this exact prompt:

  Animate this still image with extremely subtle motion only. The woman on the right keeps her mouth and lips unchanged and closed for the entire video; her face stays still, with one small curious tilt of the head, then returns to the provided end-frame pose. Joost keeps a soft, natural closed-mouth expression, at most a tiny relaxed smile shift, lips closed the entire time. No speech-like mouth movement, no mouth opening, no jaw motion. Joost gives a small head nod and a calm little hand gesture toward the coffee cups. Static camera with very subtle ambient breathing motion. Cozy warm kitchen atmosphere. Preserve exact style, character design, composition, and lighting.

(No separate negative prompt: Seedance 1 Pro has none. Do NOT paste a list of mouth/talking negatives; it triggers the very talking motion you are trying to avoid. Full recipe: brand/brand-kit.md, Motion.)

Save the clip as: remotion/public/2026-06-29/aap-uit-de-mouw/clip.mp4
(Generate exactly ONE 10s clip. With begin frame = end frame the clip already returns to the scene, and Remotion loops it to fill the dialogue, however long.)

STEP 4 — Literal-imagination image (ChatGPT). This is the gag, shown full-frame as a timed cutaway when Maya speaks. Attach: brand/style-ref-1.png, brand/style-ref-2.png, brand/joost-reference.png. Paste this exact prompt:

  Create a warm, hand-drawn storybook illustration, VERTICAL 9:16 (1080x1920): a funny, literal scene. A small, cute monkey is climbing OUT OF THE SLEEVE of JOOST's knit sweater at the same cosy kitchen table, mid-clamber and a little surprised. JOOST looks calm and friendly, the moment is gentle and comedic, not chaotic. Reproduce JOOST exactly from joost-reference. Match the STYLE of style-ref-1 and style-ref-2 (do not copy their characters or objects). Fill the whole frame (this image is shown full-screen). No text in the image.

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

  Avoid realistic eyes, detailed pupils, sclera, iris, eyelashes, glossy eyes,
  anime eyes, photorealism, 3D render, plastic texture, harsh outlines, sharp
  digital gradients, overly perfect vector art, exaggerated cartoon expressions,
  complex facial detail, hyperreal skin texture, dramatic lighting, cinematic
  realism, overly polished digital art, cluttered composition, text in the image,
  inconsistent character design.

Save it as: remotion/public/2026-06-29/aap-uit-de-mouw/literal.png

## WHAT REMOTION PRODUCES (IdiomReel)

Remotion loops the conversation clip, sequences the four voice lines with auto-detected timing, and burns in NL/EN subtitles. At Maya's line it CUTS AWAY to literal.png, framed as a daydream with a gold "WHAT I PICTURED" badge, then returns to the conversation. The reveal line is emphasized in gold ("WHAT IT MEANS"), and the branded outro card shows the idiom, its literal translation, and its real meaning with the save/send CTA. The DWJ logo is baked in. Output: 9:16 MP4 with audio. Props: remotion/props/2026-06-29/aap-uit-de-mouw.json.

## RENDER (after Status: approved and all assets saved)

/instagram-render aap-uit-de-mouw
(or, manually: cd remotion && npx remotion render src/index.ts IdiomReel out/2026-06-29/aap-uit-de-mouw/aap-uit-de-mouw.mp4 --props=props/2026-06-29/aap-uit-de-mouw.json)

## CAPTION (paste into Instagram)

Dutch idioms, taken literally
A Dutch friend said a monkey was about to climb out of his sleeve, and I just blinked. Turns out "nu komt de aap uit de mouw" (literally: now the monkey comes out of the sleeve) means the hidden truth finally comes out. You hear it the moment someone's real reason slips out.
Save it so it makes sense next time. Send it to someone who is also learning Dutch.
Start learning Dutch with Joost: link in bio.

Keywords woven: Dutch idioms, Dutch expressions, Dutch idioms explained, Dutch sayings, learn Dutch as an expat

## PINNED COMMENT

"Which Dutch idiom made no sense the first time you heard it?"
