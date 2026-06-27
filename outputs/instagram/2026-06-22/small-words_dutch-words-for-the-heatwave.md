# Sat 2026-06-27 — Small-words: Dutch for 40 degrees

> **Type:** small-words (renders via ConceptGuide, variant `small-words`)
> **Theme:** one-off — the NL heatwave (hittegolf, ~40°C). Not part of the weekly plan.
> **Setting:** n/a (concept guide)
> **Persona:** early expat living through their first Dutch heatwave, wants the words everyone around them is using
> **Positioning thread:** the words that make you sound like you actually live here, not like a textbook — what DutchwithJoost teaches by dropping you into real moments.
> **Render:** ConceptGuide — props: `remotion/props/2026-06-22/dutch-words-for-the-heatwave.json` — run `/instagram-render dutch-words-for-the-heatwave`
> **Status:** draft   ← set to `approved` (after review + cover.png saved) to allow rendering

## Rules for this post (keep edits on-rails)
- A set of words that share one job (talking about the heat). Each card = the word + a one-line meaning + one A1 example pair, all glossed.
- The heat words (snikheet, tropennacht, om te smelten) are the sanctioned A2-feel payload; the example sentence around each stays A1.
- Remotion renders the final slides. No Canva. Crisp Dutch text is rendered, never baked into the cover image.
- No em-dash (—) anywhere: props JSON, slides, caption, engagement prompt, pinned comment. Use a period, comma, colon, or parentheses.
- Image prompt carries the full Style Block + Negative prompt text inline, verbatim. Copy-paste-ready.
- Caption ends with the standard bio CTA line, verbatim: `Start learning Dutch with Joost: link in bio.`
- Keep it light. The "lekker weer, hè?" card is the comic button: land it last.

## Dutch check
| # | Dutch line | Level | Correct? | Note |
|---|-----------|-------|----------|------|
| 1 | Het is snikheet vandaag. | A1/A2 | yes | "snikheet" is the payload word (sanctioned), rest is A1. V2, common words. |
| 2 | Morgen wordt het een tropische dag. | A2 | yes | Inversion after "Morgen", wordt in position 2, correct. "tropische dag" glossed as the 30+ term. |
| 3 | Wat een tropennacht! | A1 | yes | Exclamation. "tropennacht" is the payload, glossed. |
| 4 | Het is bloedheet buiten. | A1 | yes | V2, common words. "bloedheet" glossed. |
| 5 | Het is om te smelten. | A2 | yes | Idiomatic "om te + infinitive", the payload phrase, glossed. |
| 6 | 40 graden? Lekker weer, hè? | A1 | yes | The joke card. "Lekker weer, hè?" is core small-talk, glossed. |

## Voice check
Clean. Cover sub and card notes read aloud like a person, not a brand. The humor is in the truth of each note ("why nobody slept last night", "a Dutch person will say this while melting"), not in a slogan. No stacked AI shapes.

## ASSETS TO GENERATE (save into remotion/public/2026-06-22/dutch-words-for-the-heatwave/)

COVER IMAGE (ChatGPT). Attach: brand/style-ref-1.png, brand/style-ref-2.png, brand/joost-reference.png.
Generate at VERTICAL 4:5 (1080×1350). Paste this exact prompt:

  Create a warm, hand-drawn storybook illustration, VERTICAL 4:5 (1080×1350, the Instagram feed
  ratio): Joost sitting in front of an electric fan with his eyes half-closed in relief, a tall glass
  of iced water with a slice of lemon beside him, a bright hot sun glowing through the window. Match
  the STYLE of style-ref-1 and style-ref-2 (do not copy their characters or objects). Reproduce JOOST
  exactly from joost-reference. Frame Joost in the UPPER HALF of the image, kept high. The cover crops
  to a horizontal band across the top and fades the lower part into a solid colour panel that holds the
  headline, so keep Joost high and leave the lower third empty. No text in the image. The headline is
  rendered by Remotion.

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

Save it as: remotion/public/2026-06-22/dutch-words-for-the-heatwave/cover.png
(No Canva. The word cards are rendered by Remotion from props, with crisp Dutch text.)

## WHAT REMOTION PRODUCES
A branded ConceptGuide carousel: cover (your image + headline/kicker/sub + a gold SOUND MORE DUTCH
marker) + one card per word (the word, a one-line meaning, an NL/EN example, a "when to use it" note)
+ a save/send CTA slide. One PNG per slide. (No intro slide for this variant.)
Props: remotion/props/2026-06-22/dutch-words-for-the-heatwave.json (variant, theme, cover, cards, cta).

The content (also written into props), each card a heat word:
1. snikheet — sweltering, boiling hot — ex: Het is snikheet vandaag.
2. een tropische dag — a "tropical day": 30 degrees or more — ex: Morgen wordt het een tropische dag.
3. een tropennacht — a "tropical night" that stays above 20 degrees — ex: Wat een tropennacht!
4. bloedheet — boiling hot (literally "blood-hot") — ex: Het is bloedheet buiten.
5. om te smelten — hot enough to melt — ex: Het is om te smelten.
6. lekker weer, hè? — nice weather, eh? (said at ANY temperature) — ex: 40 graden? Lekker weer, hè?

## RENDER (after Status: approved and cover.png saved)
/instagram-render dutch-words-for-the-heatwave
(or, manually: cd remotion && npx remotion render src/index.ts ConceptGuide out/2026-06-22/dutch-words-for-the-heatwave --sequence --image-format=png --props=props/2026-06-22/dutch-words-for-the-heatwave.json)

## CAPTION (paste into Instagram)
Dutch words for a heatwave.
The Netherlands just hit 40 degrees, and nobody has air conditioning. These are the words you'll hear all week.
From snikheet to a tropennacht you can't sleep through, plus the one a Dutch person will say while melting: "lekker weer, hè?"
Save these for the next hot day. Send it to whoever keeps texting you that it's snikheet.
Start learning Dutch with Joost: link in bio.
Keywords woven: Dutch words, Dutch heatwave, hittegolf, snikheet, learn Dutch, Dutch for expats

## PINNED COMMENT
"How are you surviving 40 degrees with no air conditioning? Drop your best tip in Dutch or English."
