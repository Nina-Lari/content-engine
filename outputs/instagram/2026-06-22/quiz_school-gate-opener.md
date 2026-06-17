# Sat June 27 - Quiz: Another parent starts chatting at the gate. Which opener is you?

> **Type:** quiz (scenario image + options + reveal)
> **Theme:** Smiling and nodding at a Dutch table while the conversation runs too fast
> **Setting:** the school gate
> **Persona:** Belonging-motivated working parent (Facebook working-parent posts; Molly, making Dutch friends)
> **Positioning thread:** There's no wrong reflex. Trying one line is just the lowest-stakes option, and you get comfortable with it by practicing where no one is watching.
> **Render:** Quiz - props: `remotion/props/2026-06-22/school-gate-opener.json` - run `/instagram-render school-gate-opener`
> **Status:** draft   ← set to `approved` (after review + assets saved) to allow rendering

## Rules for this post (keep edits on-rails)
- Dutch: A1 default, always grammatically correct, usable; register is informal **je** (parent to parent); every Dutch line passes the Dutch language check and appears in the **Dutch check** table below; flagged for a native check (Joost) before posting.
- This is a **reflex** quiz: NO correct answer (the props omit `correct`), by editorial decision. All three are real reactions when a parent chats to you; none is wrong. Do NOT add a "Correct: X" line. (Per brand/instagram-voice.md: reserve correct answers for genuine facts, not personal behavior.)
- Engagement prompt must ask for a **reason or personal angle**, never bare "A or B", never "tag a friend". This beats the 2026 engagement-bait filter.
- No em-dash (—) anywhere in this post: not in the props JSON, the slides, the caption, the engagement prompt, or the pinned comment. Use a period, comma, colon, or parentheses. (Brand hard rule: brand/instagram-voice.md + .claude/rules/writing-quality.md.)
- Scenario image prompt carries the full Style Block + Negative prompt text inline, verbatim. Copy-paste-ready, never a placeholder. Generate it at 4:5, full-bleed.
- Distinct setting from the rest of the week (an outdoor school gate) so the grid doesn't repeat. Reveal declares no winner and gently offers the one line, without shaming the smile-and-nod.

## Dutch check
| # | Dutch line | Level | Correct? | Note |
|---|-----------|-------|----------|------|
| 1 | Wat zeg jij? | A1 | yes | Question word + V2; "zeg jij" correctly drops the -t after the verb. |
| 2 | Je lacht: 'Sorry, my Dutch is not great.' | A1 | yes | Dutch frame "Je lacht" is A1; the quoted line is the English switch (deliberate, option A). |
| 3 | Je zegt: 'Ja, hè? Lekker weer vandaag.' | A1 | yes | The one genuinely usable learner phrase: "Ja, hè?" (agreement tag) + "Lekker weer vandaag" (nice weather today). Natural, A1. |
| 4 | Je knikt vriendelijk en hoopt dat het stopt. | A2 | yes | Narration of option C; "hoopt dat het stopt" is a subordinate dat-clause (verb at the end). Kept because it describes the reflex, it isn't a line the learner produces. |

## SCENARIO IMAGE (ChatGPT). Attach: `brand/style-ref-1.png`, `brand/style-ref-2.png`, `brand/joost-reference.png`. Paste this exact prompt:

  Create a warm, hand-drawn storybook illustration, VERTICAL 4:5 (1080×1350, the Instagram feed
  ratio): JOOST as another parent at a primary-school gate at pick-up time, turning toward the
  viewer with a friendly, open expression as if starting a chat, a bicycle with a child's seat and
  a small backpack beside him. Behind him: a school fence and gate, a brick school building, a few
  other parents with bikes, leafy trees, soft daytime light. Match the STYLE of style-ref-1 and
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

Save it as: remotion/public/2026-06-22/school-gate-opener/scenario.png

## WHAT REMOTION PRODUCES
Three slides: a scenario cover with the question overlaid (the dark "question" tile with a gold
QUIZ marker), an options slide (A/B/C cards), and a reveal slide (no correct answer, the gentle
reframe). The DWJ logo mark sits in the wordmark pill on every slide. Props:
remotion/props/2026-06-22/school-gate-opener.json.

The quiz (also written into props):
- Scenario line: "Pick-up time. Another parent turns to you and starts chatting in Dutch."
- Question: "Wat zeg jij?" (EN: What do you say?)
- Options: A) Je lacht: 'Sorry, my Dutch is not great.' (smile and switch to English)  B) Je zegt: 'Ja, hè? Lekker weer vandaag.' (agree and add a weather line)  C) Je knikt vriendelijk en hoopt dat het stopt. (nod kindly and hope it ends)
- No correct answer. It's whatever your reflex is, and all three are normal. (B is just the lowest-stakes way to stay in Dutch.)
- Reveal: No winner. If B feels out of reach, it's the smallest win: one weather line and you're in a Dutch conversation. Most parents will happily carry the rest.

## RENDER (after Status: approved and scenario.png saved)
/instagram-render school-gate-opener
(or, manually: cd remotion && npx remotion render src/index.ts Quiz out/2026-06-22/school-gate-opener --sequence --image-format=png --props=props/2026-06-22/school-gate-opener.json)

## ENGAGEMENT PROMPT (overlay / caption, beats the bait filter)
"Be honest: A, B, or C? And what usually happens in the next ten seconds?"

## CAPTION (paste into Instagram)
Small talk at the school gate in Dutch.

The school gate is the most reliable small talk in the Netherlands, and the easiest to dodge. Another parent turns to you, and you get a half-second: smile and switch to English, nod and hope it ends, or try one line. None of them is wrong. Only one keeps you in the conversation.

If you want the one line: "Ja, hè? Lekker weer vandaag." (Yeah, right? Nice weather today.) The weather is always a safe way in, and the other parent usually carries the rest.

Be honest in the comments: A, B, or C? And what usually happens in the next ten seconds? Read a few replies and you'll see you're not the only one at the edge of the playground.
Start learning Dutch with Joost: link in bio.
Keywords woven: school gate small talk, talk to Dutch parents, small talk in Dutch, Dutch weather phrases, make Dutch friends.

## PINNED COMMENT
"Parents: is the school gate where you practice, or where you hide? What do you actually say?"
