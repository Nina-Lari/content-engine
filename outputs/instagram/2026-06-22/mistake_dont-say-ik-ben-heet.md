# Sat 2026-06-27 — Mistake: "Ik ben heet" (the heatwave comic)

> **Type:** mistake — told as a comic strip (renders via ComicStory)
> **Theme:** one-off — the NL heatwave (hittegolf, ~40°C). Not part of the weekly plan.
> **Setting:** a sunny café terras, two friends
> **Persona:** early expat / beginner sweating through a Dutch summer, wants one usable line that won't embarrass them
> **Positioning thread:** the small, real mistakes a textbook never warns you about, the kind DutchwithJoost catches because the course makes you say it out loud.
> **Render:** ComicStory — props: `remotion/props/2026-06-22/dont-say-ik-ben-heet.json` — run `/instagram-render dont-say-ik-ben-heet`
> **Status:** approved

## The story (slide by slide)
A two-guy comic on a sweltering café terras, then the lesson. Each story beat is its OWN full-bleed drawing (a comic panel); Remotion draws the Dutch line crisply on top in a comic speech bubble (tail pointing at the speaker) with a narrator caption box, never baked into the image.
- **Cover (image):** the scene (Tom melting, Joost's dry look). Headline: "He said 'ik ben heet'".
- **Panel 1 (image, Tom):** "Pfoe, ik ben heet!" He means "I feel hot." A Dutch ear hears "I'm hot," as in attractive.
- **Panel 2 (image, Joost):** "Je zelfvertrouwen is inspirerend." ("Your confidence is inspiring.") Joost thinks his friend just announced he's irresistible.
- **Panel 3 (image, Tom):** "Wat? Wat zei ik?" He just told the whole terras he's gorgeous.
- **Lesson 1 (text):** the fix. ✗ "Ik ben heet" (I'm sexy) / ✓ "Ik heb het warm" (I feel hot).
- **Lesson 2 (text):** warm (weather + your body) vs heet (scorching objects).
- **CTA:** save it / send it.

The joke is about the SPEAKER: "ik ben heet" is Tom declaring he himself is hot/sexy, so Joost teases him for bragging. It is not a compliment to Joost (that would be "jij bent heet").

> **Format note:** this post uses the **ComicStory** composition (built for this). You generate four full-bleed illustrations (cover + panel-1 + panel-2 + panel-3). To keep Tom and the café identical across all four, Tom gets his own reference sheet (`brand/tom-reference.png`) and the other panels are derived from one approved anchor image (see ASSETS below). The lesson and CTA slides are text only. Remotion draws a comic speech bubble on top of each panel (the Dutch line + English gloss inside a balloon, with a tail pointing at the speaker) plus a comic caption box for the narration, so the words stay crisp and editable. Bubble position and tail target are set per panel in the props (`bubble.x/y` and `bubble.tail.x/y`).

## Rules for this post (keep edits on-rails)
- Dutch: A1 default. "Ik ben heet" is the sanctioned wrong line (correct grammar, wrong meaning). The fix ("Ik heb het warm") is A1-clean and glossed. Joost's punchline ("Je zelfvertrouwen is inspirerend") sits at A2/B1 vocab, fully glossed and cognate-supported, kept because it is the comic payload.
- The joke stays about the SPEAKER bragging. Joost reacts to Tom declaring himself hot/sexy. Do not write a reply that only works for "jij bent heet" (you are hot).
- The lesson closes the comic: you do not say "ik ben heet", you say "ik heb het warm".
- Two male characters. Joost from `brand/joost-reference.png`, Tom from `brand/tom-reference.png` (built once in STEP A below). Reproduce each from their reference in every image so they stay identical.
- Lock the café and both men with ONE approved anchor image (panel-1), then derive the other three by attaching it. Do not prompt each panel from scratch, that is what makes the background and Tom drift.
- Stage Tom on the LEFT and Joost on the RIGHT in every panel, so the speech bubbles always point the right way.
- Remotion renders the final slides. No Canva. Crisp Dutch text is rendered, never baked into any panel image.
- Each panel frames BOTH characters in the LOWER TWO-THIRDS of the 4:5 frame (seated, waist-up, heads no higher than the one-third line) and keeps the ENTIRE TOP THIRD a calm, empty background (sky, awning, or soft out-of-focus wall). That empty top band is the reserved "bubble lane" Remotion draws the speech bubble into, so the bubble never lands on a face. Do not fill the top of the frame, and do NOT draw any speech bubbles, balloons, or text in the art (Remotion adds the bubble and caption on top).
- No em-dash (—) anywhere: props JSON, slides, caption, engagement prompt, pinned comment. Use a period, comma, colon, or parentheses.
- Image prompts carry the full Style Block + Negative prompt text inline, verbatim. Copy-paste-ready.
- Caption ends with the standard bio CTA line, verbatim: `Start learning Dutch with Joost: link in bio.`
- Keep the humor warm. The joke is on the language trap, not on Tom.

## Joost's punchline
Written in: **"Je zelfvertrouwen is inspirerend."** ("Your confidence is inspiring.") A dry, deadpan compliment that lands because Tom only thinks he said "I feel hot". Swap-ready alternatives if you ever want a different flavor:
- `Lekker bescheiden, hoor.` ("Real modest of you.") sarcastic, very Dutch.
- `Bescheiden ben je niet.` ("Modest, you are not.")

## Dutch check
| # | Dutch line | Level | Correct? | Note |
|---|-----------|-------|----------|------|
| 1 | Pfoe, ik ben heet! | A1 | yes (intentionally "wrong") | "Pfoe" interjection + the sanctioned error. Grammatically valid; means "I'm hot" in the flirty sense, which is the gag. About the speaker himself. Glossed. |
| 2 | Je zelfvertrouwen is inspirerend. | A2/B1 | yes | Subject + V2 "is" + predicate adjective (uninflected, correct). "zelfvertrouwen" (self-confidence) and "inspirerend" (inspiring) are A2/B1 but near-cognates; kept as the comic punchline and fully glossed. |
| 3 | Wat? Wat zei ik? | A1/A2 | yes | "Wat zei ik?" = "What did I say?", a fixed everyday question. Simple past of zeggen, but 3 words and very common; reads A1 in use. Glossed. |
| 4 | Ik ben heet. | A1 | yes (the ✗ line) | The wrong line, shown in red on the lesson slide and glossed "I'm hot (as in sexy)". |
| 5 | Ik heb het warm. | A1 | yes | The fix: hebben + het. 4 words, core vocab. |
| 6 | Het is warm vandaag. | A1 | yes | V2, common words. |
| 7 | Pas op, de koffie is heet. | A1 | yes | Imperative "pas op" + simple clause. Shows heet on an object that can burn you. |

## Voice check
Clean. Cover and panels open on the concrete moment (40°C, the terras), not an abstract thesis. Joost's line is a dry one-liner, no slop shapes. The lesson states the fix plainly. Pinned comment just asks the question (no "be honest" bad-faith framing).

## ASSETS TO GENERATE (save into remotion/public/2026-06-22/dont-say-ik-ben-heet/)

Four panel images drift if you prompt each from scratch: GPT reinvents the café and Tom every time. So lock the
cast and the location first, then derive every panel from one approved anchor. Three stages:

- **STEP A (one-time):** build Tom's reference sheet, so Tom is a fixed character like Joost.
- **IMAGE 1 (the anchor):** generate panel-1 and APPROVE it. This one image locks the café and both men.
- **IMAGE 2, 3, 4:** generate by ATTACHING the approved anchor and changing only the pose, expression, or framing.

For every image, attach `brand/style-ref-1.png` and `brand/style-ref-2.png` (style), `brand/joost-reference.png`
(Joost), and `brand/tom-reference.png` (Tom). No text in any image (Remotion renders all words).

### STEP A (one-time) — create Tom's reference sheet
In ChatGPT, attach `brand/style-ref-1.png` and `brand/style-ref-2.png` (for the style only) and paste this prompt:

  Create a clean character reference sheet on a plain cream background: a front-facing full-body view plus a head
  close-up of a young man named Tom, with a neutral, friendly expression. Tom is around 30: short dark curly hair,
  warm light-brown skin, clean-shaven, a round friendly face, wearing a simple short-sleeved olive-green shirt and
  dark trousers. Make him clearly DISTINCT from a man with tousled brown hair, light stubble, and a mustard sweater
  (that is a different character). No text in the image.

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
  busy that it distracts from the main moment. The setting is the Netherlands: when
  the scene is outdoors, the architecture and nature are Dutch (brick terraced or
  canal houses with large windows and gabled facades, bicycles, tiled pavements, a
  flat landscape, a soft grey-blue Dutch sky), never Mediterranean or southern
  European (no terracotta roofs, whitewashed stone, stucco walls, or palm trees).

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

Save it as: brand/tom-reference.png
(You attach this to every image below. Remotion never uses it; it is only a ChatGPT reference, like Joost's.)

### IMAGE 1 of 4 — panel-1.png (Tom, overheated) — THE ANCHOR. Approve this first.
Attach: brand/style-ref-1.png, brand/style-ref-2.png, brand/joost-reference.png, brand/tom-reference.png.
Reproduce JOOST from joost-reference and TOM from tom-reference. Paste this exact prompt:

  Create a warm, hand-drawn storybook illustration, FULL-BLEED VERTICAL 4:5 (1080×1350): a sunny Dutch café
  terras on a sweltering summer day, on a quiet brick-paved Dutch street with typical Dutch terraced houses
  (large windows, gabled facades) and a few parked bicycles softly in the background. Two men sit at a small
  outdoor table with iced drinks: TOM on the LEFT, JOOST on the RIGHT (keep this left/right staging in every
  panel). Tom leans back fanning himself dramatically with a paper menu, cheeks bright red, mouth open in a
  theatrical "phew", clearly overheated. Joost, on the right, sips an iced drink, mildly amused. Composition is
  critical: place BOTH men in the LOWER TWO-THIRDS of the frame, seated and shown from about the waist up, their
  heads no higher than the one-third line. The ENTIRE TOP THIRD must be calm, simple background only (open sky,
  a plain café awning, or a soft out-of-focus wall): no heads, no umbrella, no objects, nothing important up
  there. That empty top band is where the speech bubble is added later, so do not fill it. Do NOT draw any
  speech bubbles, balloons, or text: those are added by Remotion.

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
  busy that it distracts from the main moment. The setting is the Netherlands: when
  the scene is outdoors, the architecture and nature are Dutch (brick terraced or
  canal houses with large windows and gabled facades, bicycles, tiled pavements, a
  flat landscape, a soft grey-blue Dutch sky), never Mediterranean or southern
  European (no terracotta roofs, whitewashed stone, stucco walls, or palm trees).

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

Save it as: remotion/public/2026-06-22/dont-say-ik-ben-heet/panel-1.png
**Iterate on this one until you love the café and both men, then APPROVE it.** Every other image is derived from
it, so this is the image that locks the look.

### IMAGE 2 of 4 — panel-2.png (Joost, deadpan) — derive from the anchor
Attach: the APPROVED panel-1.png, plus brand/joost-reference.png and brand/tom-reference.png. Paste this prompt:

  Using the attached image as the exact reference for the setting and the two characters, keep the SAME Dutch café
  terras, the SAME two men (same faces, hair, clothing, and the same left/right staging: Tom LEFT, Joost RIGHT),
  and the SAME framing and style. Change ONLY their poses and expressions: now JOOST, on the right, gives a dry,
  deadpan look with one eyebrow raised and a flat, polite half-smile, holding his iced drink. TOM, on the left,
  looks pleased and proud of himself, oblivious, still a bit flushed. Keep BOTH men in the LOWER TWO-THIRDS of the
  frame, heads no higher than the one-third line, and keep the ENTIRE TOP THIRD calm, simple background only (the
  reserved bubble lane): do not fill it. Do NOT draw any speech bubbles, balloons, or text.

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
  busy that it distracts from the main moment. The setting is the Netherlands: when
  the scene is outdoors, the architecture and nature are Dutch (brick terraced or
  canal houses with large windows and gabled facades, bicycles, tiled pavements, a
  flat landscape, a soft grey-blue Dutch sky), never Mediterranean or southern
  European (no terracotta roofs, whitewashed stone, stucco walls, or palm trees).

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

Save it as: remotion/public/2026-06-22/dont-say-ik-ben-heet/panel-2.png

### IMAGE 3 of 4 — panel-3.png (Tom, confused) — derive from the anchor
Attach: the APPROVED panel-1.png, plus brand/joost-reference.png and brand/tom-reference.png. Paste this prompt:

  Using the attached image as the exact reference for the setting and the two characters, keep the SAME Dutch café
  terras, the SAME two men (same faces, hair, clothing, and the same left/right staging: Tom LEFT, Joost RIGHT),
  and the SAME framing and style. Change ONLY their poses and expressions: now TOM, on the left, looks confused and
  a little sheepish, scratching the back of his head, realizing something is off. Joost, on the right, gives a
  knowing, kind smile. Keep BOTH men in the LOWER TWO-THIRDS of the frame, heads no higher than the one-third line,
  and keep the ENTIRE TOP THIRD calm, simple background only (the reserved bubble lane): do not fill it. Do NOT draw
  any speech bubbles, balloons, or text.

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
  busy that it distracts from the main moment. The setting is the Netherlands: when
  the scene is outdoors, the architecture and nature are Dutch (brick terraced or
  canal houses with large windows and gabled facades, bicycles, tiled pavements, a
  flat landscape, a soft grey-blue Dutch sky), never Mediterranean or southern
  European (no terracotta roofs, whitewashed stone, stucco walls, or palm trees).

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

Save it as: remotion/public/2026-06-22/dont-say-ik-ben-heet/panel-3.png

### IMAGE 4 of 4 — cover.png (the title card) — derive from the anchor, reframed
The cover crops differently from the panels (figures up high, the lower part fades into a solid headline panel),
so this one is REFRAMED. Attach: the APPROVED panel-1.png, plus brand/joost-reference.png and brand/tom-reference.png.
Paste this prompt:

  Using the attached image as the exact reference for the setting and the two characters, keep the SAME Dutch café
  terras and the SAME two men (same faces, hair, clothing: Tom on the LEFT, Joost on the RIGHT) and the SAME style.
  But REFRAME this as a cover: place both figures in the UPPER HALF of the frame, kept high, and leave the LOWER
  THIRD a calm, simple background that can fade into a solid colour headline panel. Tom fans himself with the paper
  menu, cheeks flushed; Joost sits beside him with a calm, friendly look. No text in the image (the headline is
  rendered by Remotion). Do NOT draw any speech bubbles, balloons, or text.

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
  busy that it distracts from the main moment. The setting is the Netherlands: when
  the scene is outdoors, the architecture and nature are Dutch (brick terraced or
  canal houses with large windows and gabled facades, bicycles, tiled pavements, a
  flat landscape, a soft grey-blue Dutch sky), never Mediterranean or southern
  European (no terracotta roofs, whitewashed stone, stucco walls, or palm trees).

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

Save it as: remotion/public/2026-06-22/dont-say-ik-ben-heet/cover.png

## WHAT REMOTION PRODUCES
A branded ComicStory carousel (one PNG per slide): cover (your cover image + headline + a gold COMMON MISTAKE
marker) + three comic panels (each your full-bleed panel image, with a comic-book speech bubble drawn on top:
the big Dutch line + English gloss inside a balloon, with a tail pointing at the speaker, plus a comic caption
box at the bottom for the narration) + two text lesson slides (the fix with red ✗ / green ✓ lines, then warm
vs heet) + a save/send CTA. 7 slides total.
Props: remotion/props/2026-06-22/dont-say-ik-ben-heet.json (theme, cover, panels, lessons, cta).

Bubble placement: `bubble.x/y` is the balloon's centre and `bubble.tail.x/y` is the speaker it points toward,
both 0-1 fractions. The tail is auto-capped short (it never reaches a face) and the bubble auto-clamps clear of
the wordmark and the side margins, so `bubble.tail` only needs to point at the right SIDE (Tom-left, Joost-right),
not the exact mouth. To nudge, open `/instagram-render studio dont-say-ik-ben-heet` and tweak the numbers live.

The content (also written into props):
- cover: "He said 'ik ben heet'" / "It did not mean what he thought."
- panels:
  1. Tom: "Pfoe, ik ben heet!" (Phew, I'm hot!) — caption: he means he feels hot, but a Dutch ear hears "I'm hot", as in attractive
  2. Joost: "Je zelfvertrouwen is inspirerend." (Your confidence is inspiring.) — caption: Joost thinks his friend just announced he's irresistible
  3. Tom: "Wat? Wat zei ik?" (What? What did I say?) — caption: he just told the whole terras he's gorgeous
- lessons:
  1. The fix: ✗ Ik ben heet. (I'm hot, as in sexy) / ✓ Ik heb het warm. (I feel hot) — note: your body = always hebben + het (cold = ik heb het koud)
  2. warm of heet? (two words for hot): Het is warm vandaag. (the weather + how you feel) / Pas op, de koffie is heet. (things that can burn you) — note: both mean "hot"; warm for the weather and yourself, heet only for things that can burn you

## RENDER (after Status: approved and all four images saved)
/instagram-render dont-say-ik-ben-heet
(or, manually: cd remotion && npx remotion render src/index.ts ComicStory out/2026-06-22/dont-say-ik-ben-heet --sequence --image-format=png --props=props/2026-06-22/dont-say-ik-ben-heet.json)

## CAPTION (paste into Instagram)
Dutch mistake: "ik ben heet" does not mean what you think.
It is 40 degrees, you are melting, and you want to say you feel hot. Say "ik ben heet" and you just told everyone you feel attractive.
The line you actually want is "ik heb het warm." Bonus: Dutch has two words for hot, warm for the weather and yourself, heet only for things that can burn you (a coffee, a pan).
Save it so you don't say it on the terras. Send it to a friend who would.
Start learning Dutch with Joost: link in bio.
Keywords woven: Dutch mistake, ik heb het warm, ik ben heet, warm vs heet, Dutch heatwave, learn Dutch

## PINNED COMMENT
"What's a Dutch sentence that came out completely wrong for you? Tell me the story."
