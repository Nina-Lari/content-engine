# Sat June 27, Vocab scene: Coffee with the neighbor (In de woonkamer)

> **Type:** vocab-scene (VocabScene)
> **Theme:** smiling and nodding, here the words for the room you have coffee in
> **Setting:** coffee with a neighbor, in the living room
> **Persona:** Belonging learner who wants Dutch coffee chats to stay in Dutch (Monika "meet people who are not expats")
> **Positioning thread:** learn the everyday words you actually see and use, not abstract lists
> **Render:** VocabScene. props: `remotion/props/2026-06-22/coffee-with-the-neighbor.json`. run `/instagram-render coffee-with-the-neighbor`
> **Status:** approved

## Rules for this post (keep edits on-rails)

- Labels pulled from `brand/vocab-scenes.md` → "In de woonkamer". Concrete A1 nouns with correct articles. Vocab-scene is NOT a sanctioned exception: a wrong de/het on a rendered label is what natives catch, so the articles below are taken straight from the bank.
- The scene image is generated label-FREE with breathing room around each object. Remotion draws every NL/EN chip. No text in the image.
- No em-dash anywhere: not in the props JSON, the slides, the caption, or the pinned comment.
- Scene image prompt carries the full Style Block + Negative prompt text inline, verbatim. Never a placeholder.
- Caption ends with the standard bio CTA line, verbatim: `Start learning Dutch with Joost: link in bio.`
- Caption, title, pinned comment pass the **Voice check**: no stacked AI-slop sentence shapes; reads aloud like one person talking.
- Label x/y positions below are starting points. Author them against the actual generated image; `/instagram-render studio coffee-with-the-neighbor` is the fastest way to nudge them. Keep labels clear of the top title band.

## Dutch check

| #   | Dutch line   | Level | Correct? | Note                               |
| --- | ------------ | ----- | -------- | ---------------------------------- |
| 1   | de bank      | A1    | yes      | de-word (couch); article per bank. |
| 2   | de tafel     | A1    | yes      | de-word (table).                   |
| 3   | de stoel     | A1    | yes      | de-word (chair).                   |
| 4   | de lamp      | A1    | yes      | de-word (lamp).                    |
| 5   | de televisie | A1    | yes      | de-word (television).              |
| 6   | het raam     | A1    | yes      | het-word (window); verified.       |
| 7   | de gordijnen | A1    | yes      | plural, always de (curtains).      |
| 8   | de plant     | A1    | yes      | de-word (plant).                   |
| 9   | de kast      | A1    | yes      | de-word (cupboard).                |
| 10  | de klok      | A1    | yes      | de-word (clock).                   |
| 11  | het kopje    | A1    | yes      | het-word (diminutive of kop); the coffee cup. |
| 12  | het vloerkleed | A1/A2 | yes    | het-word (the rug / area rug); concrete household item, glossed. |

## Voice check

Checked caption, title, pinned comment. Rewrote the caption to sound like a person, not a brand explaining a method: cut the learning-science line ("easier to remember than a word list"), which read as AI. Now opens on a warm concrete hook (the room you are sitting in) and the words, with one human, concrete tip (de or het is the hard part, no rule, learn the article with the word: het raam but de tafel). Closes on a concrete action. English A1 and literal. No antithesis, tricolon, or grand frame.

## ASSETS TO GENERATE (save into remotion/public/2026-06-22/coffee-with-the-neighbor/)

SCENE IMAGE (ChatGPT). Generate the scene with NO text and breathing room around each object (the labels are added by Remotion). Attach: brand/style-ref-1.png, brand/style-ref-2.png, brand/joost-reference.png. Paste this exact prompt:

Create a warm, hand-drawn storybook illustration, VERTICAL 4:5 (1080x1350): a cosy, lived-in Dutch living room with Joost sitting on the couch with two coffee cups on the table, as if a neighbor just dropped by. Show the everyday objects to be labelled clearly separated, each with calm empty space around it: the couch, the table, a chair, a lamp, the television, the window, the curtains, a houseplant, a cupboard, a wall clock, the two coffee cups on the table, and a floor rug under the table. Spread them around the room so each has room for a small label beside it. Match the STYLE of style-ref-1 and style-ref-2 (do not copy their objects). Reproduce JOOST exactly from joost-reference. IMPORTANT: no text, no letters, no numbers, and no labels anywhere in the image. Every word is added later by Remotion.

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

Save it as: remotion/public/2026-06-22/coffee-with-the-neighbor/scene.png

## WHAT REMOTION PRODUCES

A VocabScene carousel: the labeled poster (your scene + crisp NL/EN chips + arrows + the NL/EN title) + a recap list slide + a CTA. Props: remotion/props/2026-06-22/coffee-with-the-neighbor.json (theme, sceneImage, title, labels, recap, cta).

The labels (also written into props), from the bank:

1. de bank (the couch)
2. de tafel (the table)
3. de stoel (the chair)
4. de lamp (the lamp)
5. de televisie (the television)
6. het raam (the window)
7. de gordijnen (the curtains)
8. de plant (the plant)
9. de kast (the cupboard)
10. de klok (the clock)
11. het kopje (the cup)
12. het vloerkleed (the rug)

## RENDER (after Status: approved and scene.png saved)

/instagram-render coffee-with-the-neighbor
(or, manually: cd remotion && npx remotion render src/index.ts VocabScene out/2026-06-22/coffee-with-the-neighbor --sequence --image-format=png --props=props/2026-06-22/coffee-with-the-neighbor.json)

## CAPTION (paste into Instagram)

Dutch living room vocabulary
The words for the room you are probably sitting in right now: the couch, the table, the lamp, the window. Twelve of them, all labelled on the picture in Dutch.
The tricky part is the de or het in front of each word. Het raam (window) but de tafel (table). There is no rule, so learn the article together with the word.
Save this and name five things around you out loud in Dutch. Send it to someone who is learning too.
Start learning Dutch with Joost: link in bio.
Keywords woven: Dutch living room vocabulary, Dutch household words, learn Dutch vocabulary, de or het, Dutch for beginners, Dutch for expats

## PINNED COMMENT

"Which thing in your living room do you still not know in Dutch?"
