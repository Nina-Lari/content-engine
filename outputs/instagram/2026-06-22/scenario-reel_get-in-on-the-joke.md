# Thu June 25 - Scenario Reel: Everyone is laughing in Dutch. Here is how to get in on it.

> **Type:** scenario-reel (Tier 1: one composition, no lip-sync, subtitle-led)
> **Theme:** Smiling and nodding at a Dutch table while the conversation runs too fast
> **Setting:** a garden BBQ
> **Persona:** Belonging-motivated learner (Nina "feel at home"; Molly exclusion in volunteering groups)
> **Positioning thread:** Judgment-free practice. Asking "what's funny" is low-stakes once you've said it a hundred times where no one is watching.
> **Render:** ScenarioReel - props: `remotion/props/2026-06-22/get-in-on-the-joke.json` - run `/instagram-render get-in-on-the-joke`
> **Status:** draft   ← set to `approved` (after review + assets saved) to allow rendering

## Rules for this post (keep edits on-rails)
- Dutch: A1 default, always grammatically correct, usable; register is informal **je** (friends at a BBQ), kept consistent; every line passes the Dutch language check and appears in the **Dutch check** table below; flagged for a native check (Joost) before posting.
- Remotion renders the final asset. Do not assemble in CapCut/Canva. Crisp Dutch text is rendered, never baked into the AI image.
- No em-dash (—) anywhere in this post: not in the props JSON, the slides, the caption, the engagement prompt, or the pinned comment. Use a period, comma, colon, or parentheses. (Brand hard rule: brand/instagram-voice.md + .claude/rules/writing-quality.md.)
- Image prompts carry the full Style Block + Negative prompt text inline, verbatim. Copy-paste-ready, never a placeholder.
- Caption ends with the standard bio CTA line, verbatim: `Start learning Dutch with Joost: link in bio.`
- Tier 1 only: one two-shot, no lip-sync, subtitles carry comprehension. Joost is locked from `brand/joost-reference.png` and plays a warm friend at the BBQ. Roos recurs from Monday's reel, keep her design identical (early 30s, shoulder-length dark hair, olive cardigan).
- Close on connection, not shame: the feeling is being left out of the joke and wanting in, not embarrassment. Joost is glad she asked and pulls her in.
- One teaching payload: "Wat is er zo grappig?" (line 3), emphasized in gold. Hook in the first 3 seconds. Caption line 1 = a searchable phrase; CTA = send/save, not likes.

## Dutch check
| # | Dutch line | Level | Correct? | Note |
|---|-----------|-------|----------|------|
| 1 | Haha, dat is echt grappig! | A1 | yes | V2, "dat is echt grappig", all high-frequency. Ambient group laughter. |
| 2 | Sorry, ik snap het niet helemaal. | A1 | yes | "snappen" = informal understand, "niet helemaal" = not quite. Word order correct. The admission. |
| 3 | Wat is er zo grappig? | A1 | yes | Question word + V2, expletive "er". Completely natural spoken Dutch. The teaching payload. |
| 4 | O sorry! Ik leg het even uit. | A1 | yes | Separable verb uitleggen splits in the main clause (prefix "uit" at the end). |
| 5 | Kijk! De hond heeft de worst! | A1 | yes | Imperative + present-tense V2. Light, concrete, funny. |
| 6 | Haha, nu snap ik het! | A1 | yes | Inversion after "nu" (verb in position 2). The belonging payoff: she's in on the joke. |

## ASSETS TO GENERATE (save into remotion/public/2026-06-22/get-in-on-the-joke/)

STEP 1 - Voice (ElevenLabs). Use the Joost voice **Ido** (ElevenLabs voice ID `dLPO5AsXc3FZDbTh1IKa`). For Roos, use the SAME warm female Dutch voice you picked for Monday's reel (keep her consistent). Settings: Stability ~50, Similarity high, Style low, slightly slow. Render each line as its own file and save with these exact names (order matters):

  remotion/public/2026-06-22/get-in-on-the-joke/joost-1.mp3   "Haha, dat is echt grappig!"          (EN: Haha, that's really funny!)
  remotion/public/2026-06-22/get-in-on-the-joke/roos-2.mp3    "Sorry, ik snap het niet helemaal."   (EN: Sorry, I don't quite get it.)
  remotion/public/2026-06-22/get-in-on-the-joke/roos-3.mp3    "Wat is er zo grappig?"               (EN: What's so funny?)
  remotion/public/2026-06-22/get-in-on-the-joke/joost-4.mp3   "O sorry! Ik leg het even uit."       (EN: Oh sorry! Let me explain.)
  remotion/public/2026-06-22/get-in-on-the-joke/joost-5.mp3   "Kijk! De hond heeft de worst!"       (EN: Look! The dog has the sausage!)
  remotion/public/2026-06-22/get-in-on-the-joke/roos-6.mp3    "Haha, nu snap ik het!"               (EN: Haha, now I get it!)

(Remotion measures each file's length automatically; you do not note durations.)

STEP 2 - Scene image (ChatGPT). Attach: `brand/style-ref-1.png`, `brand/style-ref-2.png`, `brand/joost-reference.png`. Paste this exact prompt:

  Create a warm, hand-drawn storybook illustration for a VERTICAL 9:16 video frame: a sunny Dutch
  garden barbecue. On the LEFT, JOOST stands near a small barbecue with tongs in one hand, laughing
  warmly and turning toward the right. On the RIGHT, a woman in her early 30s with shoulder-length
  dark hair and a simple olive cardigan stands slightly apart at the edge of the group with a
  polite, left-out half-smile (do not put a name in the image). Around them: a leafy back garden
  with a wooden fence, a picnic table with drinks and salad bowls, string lights overhead, the
  shoulders and arms of two other guests mid-laugh at the table edge, and a small dog near the
  grill. Warm late-afternoon summer light. Match the STYLE of style-ref-1 and style-ref-2 (do not
  copy their characters or objects). Reproduce JOOST exactly from joost-reference (same face, hair,
  stubble, build, clothing). Keep the woman on the right consistent with the previous reel. Keep
  the bottom third calmer and less detailed (subtitles render there). No text in the image.

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

Save it as the clip's begin/end frame: remotion/public/2026-06-22/get-in-on-the-joke/starting-frame.png

STEP 3 - Video (image-to-video; Seedance 1 Pro). Upload the Step 2 image as BOTH the begin frame
AND the end frame (Seedance 1 Pro supports both; end frame = begin frame returns the clip to the
scene for a clean loop, so you never write "loop" or "return to the start" into the prompt).
Settings: 9:16, 10s, 720p. SILENT, no lip-sync.

Seedance 1 Pro has NO negative-prompt field, so the prompt is the only steering, and a heavy
"no talking" list backfires (naming those actions makes the model perform them). So the motion
prompt LEADS with the positive closed-mouth state for each character by position, keeps the motion
tiny, then adds ONE short calm clause of don'ts. Paste this exact prompt:

  Animate this still image with extremely subtle motion only. The woman on the right keeps her
  mouth and lips unchanged and closed for the entire video; her face stays still with a soft,
  slightly left-out smile. Joost keeps a soft, natural closed-mouth expression, lips closed the
  entire time, at most a tiny relaxed smile shift. No speech-like mouth movement, no mouth opening,
  no jaw motion. The woman on the right gives one small, polite shift of her weight and a tiny tilt
  of the head, then returns to the provided end-frame pose. Joost, the friend on the left, gives a
  small warm head nod and calmly raises the barbecue tongs a little. The little dog wags its tail
  once. The string lights glow gently. Static camera with very subtle ambient breathing motion.
  Warm, sunny garden-barbecue atmosphere. Preserve exact style, character design, composition, and
  lighting.

(No separate negative prompt. Do NOT paste a list of mouth/talking negatives. Full recipe:
brand/brand-kit.md → Motion.)

Save the clip as: remotion/public/2026-06-22/get-in-on-the-joke/clip.mp4
(Generate exactly ONE 10s clip. With begin frame = end frame the clip already returns to the
scene, and Remotion loops it to fill the dialogue.)

## WHAT REMOTION PRODUCES (no CapCut)
Remotion loops the clip, sequences the six voice lines with auto-detected timing, burns in NL/EN
subtitles (Dutch large, English beneath), emphasizes "Wat is er zo grappig?" in gold with a
"SAY THIS ↓" badge, adds the 3-second hook overlay ("Everyone is laughing in Dutch. Say THIS"),
floats the "sound familiar?" tag on Roos's admission line, and ends on a branded blue outro card
(DWJ logo mark + the one line to remember). The DWJ logo is baked into Remotion. Output: 9:16
1080×1920 MP4 with audio. Props: remotion/props/2026-06-22/get-in-on-the-joke.json.

## RENDER (after Status: approved and all assets saved)
/instagram-render get-in-on-the-joke
(or, manually: cd remotion && npx remotion render src/index.ts ScenarioReel out/2026-06-22/get-in-on-the-joke.mp4 --props=props/2026-06-22/get-in-on-the-joke.json)

## CAPTION (paste into Instagram)
How to get in on the joke when everyone is laughing in Dutch.

There is a specific kind of lonely in standing in a laughing group and not knowing why. You smile along, half a beat behind, hoping nobody turns to ask you something. You do not have to stand there. One line lets you in: "Wat is er zo grappig?" (What's so funny?).

Most people are glad you asked. They want you in on it. Asking is not weak. It is how you join.

Save this for the next BBQ. Send it to whoever smiles along at the edge of the group.
Start learning Dutch with Joost: link in bio.
Keywords woven: laughing in Dutch, what's so funny in Dutch, join the conversation, Dutch BBQ, feeling left out as an expat.

## PINNED COMMENT
"When was the last time you laughed along without knowing why? Where were you?"
