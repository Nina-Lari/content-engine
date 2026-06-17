# Fri June 26 - Cheatsheet: 6 lines for coffee with your Dutch neighbor

> **Type:** cheatsheet (carousel)
> **Theme:** Smiling and nodding at a Dutch table while the conversation runs too fast
> **Setting:** coffee with a neighbor
> **Persona:** Belonging-motivated learner (Monika, "meet people who are not expats")
> **Positioning thread:** Practical, usable Dutch you produce in a real moment, not phrases you only recognize on a test.
> **Render:** Cheatsheet - props: `remotion/props/2026-06-22/coffee-with-your-neighbor.json` - run `/instagram-render coffee-with-your-neighbor`
> **Status:** draft   ← set to `approved` (after review + assets saved) to allow rendering

## Rules for this post (keep edits on-rails)
- Dutch: A1 default, always grammatically correct, usable; register is informal **je/jij** (a neighbor you're getting to know), kept consistent; every line passes the Dutch language check and appears in the **Dutch check** table below; flagged for a native check (Joost) before posting.
- Remotion renders the final carousel from props. Do not assemble in Canva. Crisp Dutch text is rendered, never baked into the AI image (leave text out of the cover image).
- No em-dash (—) anywhere in this post: not in the props JSON, the slides, the caption, or the pinned comment. Use a period, comma, colon, or parentheses. (Brand hard rule: brand/instagram-voice.md + .claude/rules/writing-quality.md.)
- Cover image prompt carries the full Style Block + Negative prompt text inline, verbatim. Copy-paste-ready, never a placeholder.
- Caption ends with the standard bio CTA line, verbatim: `Start learning Dutch with Joost: link in bio.`
- Cover is a hook headline (rendered by Remotion), not a title. Generate the cover at 4:5 with Joost in the upper half. Six phrases follow a real arc: offer, follow-up, small talk, small talk, repeat-invite, goodbye. Last slide is an explicit save + send CTA.
- Different setting and shot from the party cheatsheet so the grid doesn't repeat (a quiet kitchen table here, not a party). Close on connection: a neighbor becomes a friend six small lines at a time.

## Dutch check
| # | Dutch line | Level | Correct? | Note |
|---|-----------|-------|----------|------|
| 1 | Wil je koffie of thee? | A1 | yes | Yes/no question; "wil je" correctly drops the -t after the verb. |
| 2 | Melk en suiker? | A1 | yes | Two-word fragment, the standard coffee follow-up. |
| 3 | Hoe lang woon je al hier? | A1 | yes | Question word + V2; "woon je" drops the -t; "al" = already. |
| 4 | Wat doe jij in het weekend? | A1 | yes | "doe jij" drops the -t. Common everyday small talk. |
| 5 | Gezellig! Doen we dit nog eens? | A1 | yes | "gezellig" is the iconic Dutch word for cozy/nice; "Doen we dit nog eens?" is verb-first (plural keeps -en). |
| 6 | Bedankt voor de koffie! | A1 | yes | Fixed thank-you phrase, all high-frequency. |

## ASSETS TO GENERATE (save into remotion/public/2026-06-22/coffee-with-your-neighbor/)

COVER IMAGE (ChatGPT). Attach: `brand/style-ref-1.png`, `brand/style-ref-2.png`, `brand/joost-reference.png`. Paste this exact prompt:

  Create a warm, hand-drawn storybook illustration, VERTICAL 4:5 (1080×1350, the Instagram feed
  ratio): JOOST sitting at a cozy kitchen table as a friendly neighbor, holding a coffee mug with
  both hands and smiling warmly toward someone just off-frame, a second mug and a small plate of
  cookies on the table, a window with soft daylight, a plant on the sill and a kettle behind him.
  Match the STYLE of style-ref-1 and style-ref-2 (do not copy their characters or objects).
  Reproduce JOOST exactly from joost-reference (same face, hair, stubble, build, clothing). Frame
  Joost in the UPPER HALF of the image, kept high. The cover crops to a horizontal band across the
  top and fades the lower part into a solid colour panel that holds the headline, so keep Joost
  high and leave the lower third empty. No text in the image. The headline is rendered by Remotion.

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

Save it as: remotion/public/2026-06-22/coffee-with-your-neighbor/cover.png
(No Canva. The phrase slides are rendered by Remotion from props, with crisp Dutch text.)

## WHAT REMOTION PRODUCES
A branded carousel: cover (your image + the headline/kicker/sub overlaid) + one card per phrase
(NL hero line in blue, EN translation, a WHEN editorial subhead with a gold underline) + a
save/send CTA slide. One PNG per slide. The DWJ logo mark sits in the wordmark pill on every slide.
Props: remotion/props/2026-06-22/coffee-with-your-neighbor.json.

The phrases (also written into props):
1. Wil je koffie of thee? (Would you like coffee or tea?) when: You're hosting. The classic Dutch offer.
2. Melk en suiker? (Milk and sugar?) when: The follow-up nobody teaches you.
3. Hoe lang woon je al hier? (How long have you lived here?) when: Easy small talk that gets them talking.
4. Wat doe jij in het weekend? (What do you do on the weekend?) when: Keep it going past the weather.
5. Gezellig! Doen we dit nog eens? (So nice! Shall we do this again?) when: Turn one coffee into a habit.
6. Bedankt voor de koffie! (Thanks for the coffee!) when: A warm way to say goodbye.

## RENDER (after Status: approved and cover.png saved)
/instagram-render coffee-with-your-neighbor
(or, manually: cd remotion && npx remotion render src/index.ts Cheatsheet out/2026-06-22/coffee-with-your-neighbor --sequence --image-format=png --props=props/2026-06-22/coffee-with-your-neighbor.json)

## CAPTION (paste into Instagram)
How to have coffee with your Dutch neighbor in Dutch.

Meeting your neighbors is how the expat bubble finally opens. But the coffee turns to English the second it gets hard. These six lines keep it in Dutch, from the first "milk and sugar?" to "shall we do this again?".

You are not trying to be fluent over one coffee. You are trying to stay in Dutch for six small lines. That is how a neighbor slowly becomes a friend.

Save this before you invite them in. Send it to whoever waves at the neighbor but never quite talks.
Start learning Dutch with Joost: link in bio.
Keywords woven: coffee with your Dutch neighbor, small talk in Dutch, meet Dutch people, gezellig, Dutch neighbor phrases.

## PINNED COMMENT
"Do you actually know your neighbors' names? What stops the coffee from happening?"
