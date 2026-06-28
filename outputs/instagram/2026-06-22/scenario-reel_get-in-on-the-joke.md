# Thu June 25, Scenario reel: Everyone's laughing in Dutch

> **Type:** scenario-reel
> **Theme:** smiling and nodding while the talk runs too fast, here the group joke you miss
> **Setting:** a garden BBQ
> **Persona:** Belonging (Nina "feel at home"; Molly couldn't break into Dutch friend groups)
> **Positioning thread:** low-stakes practice, one ready line to belong
> **Render:** ScenarioReel. props: `remotion/props/2026-06-22/get-in-on-the-joke.json`. run `/instagram-render get-in-on-the-joke`
> **Status:** draft   ← set to `approved` (after review + assets saved) to allow rendering

## Rules for this post (keep edits on-rails)
- Dutch: A1 default, grammatically correct, usable; register correct by context; every line passes the Dutch check and appears in the **Dutch check** table; flagged for a native check (Joost) before posting.
- Remotion renders the final asset. Do not assemble in CapCut/Canva. Crisp Dutch text is rendered, never baked into an AI image.
- No em-dash anywhere: not in the props JSON, the caption, the hook, the outro, or the pinned comment. Use a period, comma, colon, or parentheses.
- Image prompt carries the full Style Block + Negative prompt text inline, verbatim. Copy-paste-ready, never a placeholder.
- Caption ends with the standard bio CTA line, verbatim: `Start learning Dutch with Joost: link in bio.`
- Caption, hook, and outro pass the **Voice check**: no stacked AI-slop sentence shapes; reads aloud like one person talking.
- Close on connection: people love retelling a joke. The feeling is wanting in, not embarrassment. Do not pin the missed joke on his Dutch.
- Second character is Tom (a man), alternating with Maya in Monday's reel so the recurring cast is inclusive. Keep Tom consistent with his reference (`brand/tom-reference.png`). Joost is a friend here, not the father-in-law.

## Dutch check
| # | Dutch line | Level | Correct? | Note |
|---|-----------|-------|----------|------|
| 1 | Haha, en de hele tent valt zo om! | A1 | yes | Present-tense punchline (historic present keeps it A1), `zo` = just like that; this is the joke she missed. |
| 2 | Wacht, wat is er zo grappig? | A1 | yes | Imperative + question-word question, all high-frequency. The recovery line, the get-in move. |
| 3 | Ik leg het uit. Je gaat lachen, echt! | A1 | yes | Separable `uitleggen` split correctly (`leg ... uit`), `gaan` + infinitive for near future, `echt` warm. He pulls her in. |
| 4 | Wat is er zo grappig? (outro takeaway) | A1 | yes | The one line to remember, same as line 2. |

## Voice check
Checked caption, hook, outro, pinned comment. Clean: hook opens on the BBQ moment, caption opens on laughing half a second late and closes on a concrete send. Removed a "you did not miss the joke, you missed the line" antithesis and the "it's not about your Dutch" reassurance (names an insecurity to deny it). No tricolon.

## ASSETS TO GENERATE (save into remotion/public/2026-06-22/get-in-on-the-joke/)

STEP 1. Voice (ElevenLabs). Joost uses the Ido voice (ElevenLabs voice ID `dLPO5AsXc3FZDbTh1IKa`). Pick one warm Dutch male voice for Tom (a man, our recurring male learner). Settings: Stability ~50, Similarity high, Style low, speed slightly slow. Render each line as its own file and save with these exact names (order matters):

  remotion/public/2026-06-22/get-in-on-the-joke/joost-1.mp3   "Haha, en de hele tent valt zo om!"   (EN: Haha, and the whole tent just falls over!)
  remotion/public/2026-06-22/get-in-on-the-joke/tom-2.mp3     "Wacht, wat is er zo grappig?"        (EN: Wait, what's so funny?)
  remotion/public/2026-06-22/get-in-on-the-joke/joost-3.mp3   "Ik leg het uit. Je gaat lachen, echt!"   (EN: I'll explain. You're going to laugh, really!)
(Remotion measures each file's length automatically. You do not note durations.)

STEP 2. Scene image (ChatGPT). Attach: brand/style-ref-1.png, brand/style-ref-2.png, brand/joost-reference.png, brand/tom-reference.png. Paste this exact prompt:

  A relaxed Dutch back-garden BBQ on a warm summer evening, a 9:16 vertical two-shot. JOOST stands on the LEFT among a small group of friends, mid-laugh, holding a drink, clearly enjoying a story. A man in his early thirties with short dark curly hair and warm light-brown skin, in a short-sleeved olive-green shirt, stands just on the RIGHT, half a step out of the circle, smiling a beat too late, a plate in one hand. Reproduce the man on the right exactly from tom-reference. Behind them: a smoking BBQ, string lights, garden chairs, a wooden fence with plants, other guests suggested softly out of focus. Keep the bottom third of the frame calmer and less detailed (subtitles render there). No text anywhere in the image.

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

Save it as the clip's anchor frame: remotion/public/2026-06-22/get-in-on-the-joke/starting-frame.png (the begin = end frame for the clip).

STEP 3. Video (image-to-video; Seedance 1 Pro). Upload the Step 2 image as BOTH the begin frame AND the end frame. Settings: 9:16, 10s, 720p. SILENT, no lip-sync. Seedance 1 Pro has NO negative-prompt field, so the prompt leads with the positive closed-mouth state. Paste this exact prompt:

  Animate this still image with extremely subtle motion only. Joost, the man on the left, keeps a soft, natural closed-mouth smile, lips closed the whole time, shoulders shaking very slightly with a quiet laugh, then returns to the provided end-frame pose. Tom, the man on the right, keeps his mouth and lips unchanged and closed for the entire video; his face stays still with a small late smile, he tilts his head a touch toward the group. No speech-like mouth movement, no mouth opening, no jaw motion. Static camera with very subtle ambient breathing motion. String lights glow faintly, a thin wisp of BBQ smoke drifts. Warm summer-evening garden atmosphere. Preserve exact style, character design, composition, and lighting.

(No separate negative prompt. Full recipe: brand/brand-kit.md → Motion.)

Save the clip as: remotion/public/2026-06-22/get-in-on-the-joke/clip.mp4
(Generate exactly ONE 10s clip. Remotion loops it to fill the dialogue.)

## WHAT REMOTION PRODUCES (no CapCut)
Remotion loops the clip, sequences the three voice lines with auto-detected timing, burns in NL/EN subtitles, emphasizes the recovery line in gold ("SAY THIS ↓"), shows the 3-second hook overlay, floats the "missed the joke again" tag on line 1, and adds the branded outro. Output: 9:16 MP4 with audio. Props: remotion/props/2026-06-22/get-in-on-the-joke.json.

## RENDER (after Status: approved and all assets saved)
/instagram-render get-in-on-the-joke
(or, manually: cd remotion && npx remotion render src/index.ts ScenarioReel out/2026-06-22/get-in-on-the-joke/get-in-on-the-joke.mp4 --props=props/2026-06-22/get-in-on-the-joke.json)

## CAPTION (paste into Instagram)
How to get in on the joke when everyone is speaking Dutch
The BBQ is going, the group laughs at something, and you laughed half a second late so nobody would notice. You have done it all evening. One question fixes it: "Wat is er zo grappig?" (What's so funny?) People love retelling a joke, and now you are part of it.
Save this for the next garden party. Send it to whoever ends up standing next to you at these things.
Start learning Dutch with Joost: link in bio.
Keywords woven: join Dutch conversations, Dutch small talk, what's so funny in Dutch, make Dutch friends, learn Dutch as an expat

## PINNED COMMENT
"What's a Dutch group joke you wish you could have jumped into?"
