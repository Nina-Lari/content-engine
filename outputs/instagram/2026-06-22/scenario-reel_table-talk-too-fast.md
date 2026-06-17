# Mon June 22 - Scenario Reel: When the table talk gets too fast, say this one line

> **Type:** scenario-reel (Tier 1: one composition, no lip-sync, subtitle-led)
> **Theme:** Smiling and nodding at a Dutch table while the conversation runs too fast
> **Setting:** the in-laws' dinner table
> **Persona:** Partner-visa Family + Belonging learner (personas Pattern A, "I just sit there smiling"; Nina family motivation)
> **Positioning thread:** Unlimited, judgment-free practice. You rehearse the slow-down line enough times alone that it comes out warm, not panicked, at the real table.
> **Render:** ScenarioReel - props: `remotion/props/2026-06-22/table-talk-too-fast.json` - run `/instagram-render table-talk-too-fast`
> **Status:** draft   ← set to `approved` (after review + assets saved) to allow rendering

## Rules for this post (keep edits on-rails)
- Dutch: A1 default, always grammatically correct, usable; register is informal **jullie/je** (family), kept consistent; every line passes the Dutch language check and appears in the **Dutch check** table below; flagged for a native check (Joost) before posting.
- Remotion renders the final asset. Do not assemble in CapCut/Canva. Crisp Dutch text is rendered, never baked into the AI image.
- No em-dash (—) anywhere in this post: not in the props JSON, the slides, the caption, the engagement prompt, or the pinned comment. Use a period, comma, colon, or parentheses. (Brand hard rule: brand/instagram-voice.md + .claude/rules/writing-quality.md.)
- Image prompts carry the full Style Block + Negative prompt text inline, verbatim. Copy-paste-ready, never a placeholder.
- Caption ends with the standard bio CTA line, verbatim: `Start learning Dutch with Joost: link in bio.`
- Tier 1 only: one two-shot, no lip-sync, subtitles carry comprehension. Joost is locked from `brand/joost-reference.png` and plays the warm father-in-law. Roos (the learner) recurs this week, keep her design identical (early 30s, shoulder-length dark hair, olive cardigan).
- Close on connection, not shame: the feeling is being left out and wanting in, not embarrassment. Joost happily slows down and pulls her into the talk.
- One teaching payload: the slow-down line (line 3), emphasized in gold. Hook in the first 3 seconds. Caption line 1 = a searchable phrase; CTA = send/save, not likes.

## Dutch check
| # | Dutch line | Level | Correct? | Note |
|---|-----------|-------|----------|------|
| 1 | Ja, en dan gaan we zaterdag naar het strand! | A1 | yes | Present tense, inversion after "dan" (verb in position 2). Ambient fast table talk, all high-frequency words. |
| 2 | Sorry, het gaat een beetje snel voor mij. | A1 | yes | V2, "het gaat ... voor mij", common words. The honest admission. |
| 3 | Kunnen jullie iets langzamer praten? | A1 | yes | Modal + infinitive at the end, yes/no question (verb first). The teaching payload. 5 content words. |
| 4 | Natuurlijk, Roos! Sorry, joh. | A1 | yes | Interjections. "joh" is a warm informal tag, natural family register. |
| 5 | Vertel, hoe gaat het met jou? | A1 | yes | Imperative "Vertel" + question word "hoe" + V2. Common phrase. |
| 6 | Dank je. Nu doe ik mee. | A1 | yes | "Nu doe ik mee" = inversion + separable verb meedoen (prefix "mee" at the end). The belonging payoff. |

## ASSETS TO GENERATE (save into remotion/public/2026-06-22/table-talk-too-fast/)

STEP 1 - Voice (ElevenLabs). Use the Joost voice **Ido** (ElevenLabs voice ID `dLPO5AsXc3FZDbTh1IKa`). For Roos, pick one warm female Dutch voice and keep it for her second appearance this week (the BBQ reel). Settings: Stability ~50, Similarity high, Style low, slightly slow. Render each line as its own file and save with these exact names (order matters):

  remotion/public/2026-06-22/table-talk-too-fast/joost-1.mp3   "Ja, en dan gaan we zaterdag naar het strand!"   (EN: Yes, and then we're going to the beach on Saturday!)
  remotion/public/2026-06-22/table-talk-too-fast/roos-2.mp3    "Sorry, het gaat een beetje snel voor mij."      (EN: Sorry, it's going a bit fast for me.)
  remotion/public/2026-06-22/table-talk-too-fast/roos-3.mp3    "Kunnen jullie iets langzamer praten?"           (EN: Can you speak a bit slower?)
  remotion/public/2026-06-22/table-talk-too-fast/joost-4.mp3   "Natuurlijk, Roos! Sorry, joh."                  (EN: Of course, Roos! Sorry!)
  remotion/public/2026-06-22/table-talk-too-fast/joost-5.mp3   "Vertel, hoe gaat het met jou?"                  (EN: Tell us, how are you doing?)
  remotion/public/2026-06-22/table-talk-too-fast/roos-6.mp3    "Dank je. Nu doe ik mee."                        (EN: Thanks. Now I'm joining in.)

(Joost's line 1 is the fast, cheerful host talk the reel turns on. Remotion measures each file's length automatically; you do not note durations.)

STEP 2 - Scene image (ChatGPT). Attach: `brand/style-ref-1.png`, `brand/style-ref-2.png`, `brand/joost-reference.png`. Paste this exact prompt:

  Create a warm, hand-drawn storybook illustration for a VERTICAL 9:16 video frame: a cozy, lively
  Dutch family dinner seen across the table. On the LEFT, JOOST sits as the warm father-in-law in
  his mustard sweater, mid-gesture with a fork in one hand, smiling and turning toward the right as
  he tells a story. On the RIGHT, a woman in her early 30s with shoulder-length dark hair and a
  simple olive cardigan sits with a polite, slightly lost smile, hands resting near her plate (do
  not put a name in the image). Around them: a full dinner table with plates of food, a bread
  board, glasses, two lit candles, a water jug, and the shoulders and arms of two other family
  members at the table edges to suggest a busy gathering. Warm evening light from a low hanging
  lamp. Match the STYLE of style-ref-1 and style-ref-2 (do not copy their characters or objects).
  Reproduce JOOST exactly from joost-reference (same face, hair, stubble, build, clothing). Invent
  the woman on the right to fit the scene and keep her consistent. Keep the bottom third calmer and
  less detailed (subtitles render there). No text in the image.

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

Save it as the clip's begin/end frame: remotion/public/2026-06-22/table-talk-too-fast/starting-frame.png

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
  slightly unsure smile. Joost keeps a soft, natural closed-mouth expression, lips closed the
  entire time, at most a tiny relaxed smile shift. No speech-like mouth movement, no mouth opening,
  no jaw motion. The woman on the right gives one small, polite shift of her shoulders and a tiny
  tilt of the head, then returns to the provided end-frame pose. Joost, the father-in-law on the
  left, gives a small warm head nod and calmly lowers his fork toward his plate. The candle flames
  flicker gently. Static camera with very subtle ambient breathing motion. Warm, cozy family-dinner
  atmosphere. Preserve exact style, character design, composition, and lighting.

(No separate negative prompt. Do NOT paste a list of mouth/talking negatives. Full recipe:
brand/brand-kit.md → Motion.)

Save the clip as: remotion/public/2026-06-22/table-talk-too-fast/clip.mp4
(Generate exactly ONE 10s clip. With begin frame = end frame the clip already returns to the
scene, and Remotion loops it to fill the dialogue.)

## WHAT REMOTION PRODUCES (no CapCut)
Remotion loops the clip, sequences the six voice lines with auto-detected timing, burns in NL/EN
subtitles (Dutch large, English beneath), emphasizes the slow-down line in gold with a "SAY THIS ↓"
badge, adds the 3-second hook overlay ("When the table talk gets too fast, say THIS"), floats the
"the smile-and-nod" tag on Roos's admission line, and ends on a branded blue outro card (DWJ logo
mark + the one line to remember). The DWJ logo is baked into Remotion. Output: 9:16 1080×1920 MP4
with audio. Props: remotion/props/2026-06-22/table-talk-too-fast.json.

## RENDER (after Status: approved and all assets saved)
/instagram-render table-talk-too-fast
(or, manually: cd remotion && npx remotion render src/index.ts ScenarioReel out/2026-06-22/table-talk-too-fast.mp4 --props=props/2026-06-22/table-talk-too-fast.json)

## CAPTION (paste into Instagram)
How to join the conversation at a Dutch family dinner.

You know the moment. The table is laughing, the story is three sentences ahead of you, and you are smiling and nodding at something you did not catch. You are not rude and you are not slow. The talk is just fast.

One calm line brings the table back to you: "Kunnen jullie iets langzamer praten?" (Can you speak a bit slower?). Most families are glad to slow down. They want you in the conversation as much as you do.

The trick is having said it out loud a hundred times before, so it comes out warm instead of panicked.

Save this for the next family dinner. Send it to whoever goes quiet at their in-laws' table.
Start learning Dutch with Joost: link in bio.
Keywords woven: Dutch family dinner, join the conversation in Dutch, talk to your in-laws in Dutch, ask someone to slow down in Dutch, smile and nod.

## PINNED COMMENT
"What's the situation where you smile and nod the most? The dinner table, the birthday circle, the school gate?"
