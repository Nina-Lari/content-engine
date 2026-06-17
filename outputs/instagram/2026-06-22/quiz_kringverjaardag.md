# Wed June 24 - Quiz: You walk into the kringverjaardag. What do you say first?

> **Type:** quiz (scenario image + options + reveal)
> **Theme:** Smiling and nodding at a Dutch table while the conversation runs too fast
> **Setting:** the Dutch birthday circle (kringverjaardag)
> **Persona:** Belonging + Integration learner who wants to handle Dutch social customs (Nina, personas Pattern A)
> **Positioning thread:** Knowing the custom is half of belonging. The other half is being able to say the line, which is what practice is for.
> **Render:** Quiz - props: `remotion/props/2026-06-22/kringverjaardag.json` - run `/instagram-render kringverjaardag`
> **Status:** draft   ← set to `approved` (after review + assets saved) to allow rendering

## Rules for this post (keep edits on-rails)
- Dutch: A1 default, always grammatically correct, usable; register is informal **je** (a social party); every Dutch line passes the Dutch language check and appears in the **Dutch check** table below; flagged for a native check (Joost) before posting.
- This is a **correct-answer** quiz (Correct: B), by editorial decision: it tests a genuine cultural fact (the kringverjaardag custom), which is exactly when a right answer is allowed. Do NOT turn it into a reflex quiz.
- Even with a correct answer, the engagement prompt must ask for a **reason or personal angle**, never bare "A or B" and never "tag a friend". This beats the 2026 engagement-bait filter.
- No em-dash (—) anywhere in this post: not in the props JSON, the slides, the caption, the engagement prompt, or the pinned comment. Use a period, comma, colon, or parentheses. (Brand hard rule: brand/instagram-voice.md + .claude/rules/writing-quality.md.)
- Scenario image prompt carries the full Style Block + Negative prompt text inline, verbatim. Copy-paste-ready, never a placeholder. Generate it at 4:5, full-bleed.
- Distinct setting from the rest of the week (a living-room birthday circle) so the grid doesn't repeat. Reveal teaches the custom warmly, never makes the viewer feel they should have known.

## Dutch check
| # | Dutch line | Level | Correct? | Note |
|---|-----------|-------|----------|------|
| 1 | Wie feliciteer je? | A2 | yes | Question word + V2; "feliciteer je" correctly drops the -t. "feliciteren" is the topic verb (to congratulate), glossed in EN; kept because it's the exact word the scene needs. |
| 2 | Alleen de jarige. | A1 | yes | Fragment; "jarige" = the birthday person, glossed. |
| 3 | Iedereen in de kring. | A1 | yes | Fragment; "kring" = circle. The correct answer. |
| 4 | Niemand. Je gaat gewoon zitten. | A1 | yes | "Je gaat gewoon zitten" = V2 present, all common words. |
| 5 | Gefeliciteerd met je zus! | A1 | yes | Fixed congratulation phrase + informal "je". Shown in the reveal as the real thing you say going round the circle. |

## SCENARIO IMAGE (ChatGPT). Attach: `brand/style-ref-1.png`, `brand/style-ref-2.png`, `brand/joost-reference.png`. Paste this exact prompt:

  Create a warm, hand-drawn storybook illustration, VERTICAL 4:5 (1080×1350, the Instagram feed
  ratio): JOOST sitting in a ring of chairs in a cozy Dutch living room at a birthday party,
  smiling and gesturing a friendly welcome toward the viewer as if greeting an arriving guest.
  Around the circle, a few other guests sit holding coffee cups and small plates of cake, a side
  table with flowers and a Dutch vlaai (round fruit pie), soft balloons and a paper banner above
  (no readable text). Warm afternoon living-room light. Match the STYLE of style-ref-1 and
  style-ref-2 (do not copy their characters or objects). Reproduce JOOST exactly from
  joost-reference (same face, hair, stubble, build, clothing). The question overlay sits CENTRED
  over a dark scrim covering the whole image, so framing is flexible. Just keep the mid-frame from
  being too busy behind the large question. No text in the image. The question is rendered by
  Remotion.

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

Save it as: remotion/public/2026-06-22/kringverjaardag/scenario.png

## WHAT REMOTION PRODUCES
Three slides: a scenario cover with the question overlaid (the dark "question" tile with a gold
QUIZ marker), an options slide (A/B/C cards), and a reveal slide (correct answer B + the one-line
teach). The DWJ logo mark sits in the wordmark pill on every slide. Props:
remotion/props/2026-06-22/kringverjaardag.json.

The quiz (also written into props):
- Scenario line: "You arrive at a Dutch birthday. Everyone is sitting in a circle."
- Question: "Wie feliciteer je?" (EN: Who do you congratulate?)
- Options: A) Alleen de jarige. (Only the birthday person.)  B) Iedereen in de kring. (Everyone in the circle.)  C) Niemand. Je gaat gewoon zitten. (No one. You just sit down.)
- Correct: B
- Reveal: In the Netherlands you congratulate everyone, not just the birthday person. You go around the circle: "Gefeliciteerd met je zus!" It feels strange the first time, then it's second nature.

## RENDER (after Status: approved and scenario.png saved)
/instagram-render kringverjaardag
(or, manually: cd remotion && npx remotion render src/index.ts Quiz out/2026-06-22/kringverjaardag --sequence --image-format=png --props=props/2026-06-22/kringverjaardag.json)

## ENGAGEMENT PROMPT (overlay / caption, beats the bait filter)
"Did you know this one already, or did you learn it the hard way? What Dutch custom caught you off guard the most?"

## CAPTION (paste into Instagram)
The Dutch birthday circle, explained.

The first time you walk into a kringverjaardag, the chairs are in a circle, everyone is sitting down, and you have no idea what to do. Here is the rule nobody tells you: you congratulate everyone, not just the birthday person. You go around the circle: "Gefeliciteerd met je moeder, met je zus, met je vriend."

It feels strange the first time. After that, you are the one who knows the custom and can quietly help the next newcomer.

Did you know this one already, or did you learn it the hard way? Tell me about your first kringverjaardag in the comments.
Start learning Dutch with Joost: link in bio.
Keywords woven: kringverjaardag, Dutch birthday circle, gefeliciteerd, Dutch birthday customs, Dutch culture for expats.

## PINNED COMMENT
"What is the Dutch custom that caught you most off guard? Mine was the three kisses."
