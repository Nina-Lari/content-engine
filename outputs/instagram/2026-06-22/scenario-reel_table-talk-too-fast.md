# Mon June 22, Scenario reel: When the table talk gets too fast

> **Type:** scenario-reel
> **Theme:** smiling and nodding while a group conversation runs too fast
> **Setting:** a relaxed get-together, a few friends around a table
> **Persona:** expats who go quiet in fast group conversations (friends, gatherings, the dinner table) because they can't follow (personas Pattern A, "I just sit there smiling because I can't follow the conversation")
> **Positioning thread:** learn by using, one line you can actually say (not memorize)
> **Render:** ScenarioReel. props: `remotion/props/2026-06-22/table-talk-too-fast.json`. run `/instagram-render table-talk-too-fast`
> **Status:** approved

## Rules for this post (keep edits on-rails)

- Dutch: A1 default, grammatically correct, usable; register correct by context; every line passes the Dutch check and appears in the **Dutch check** table; flagged for a native check (Joost) before posting.
- Remotion renders the final asset. Do not assemble in CapCut/Canva. Crisp Dutch text is rendered, never baked into an AI image.
- No em-dash anywhere: not in the props JSON, the caption, the hook, the outro, or the pinned comment. Use a period, comma, colon, or parentheses.
- Image prompt carries the full Style Block + Negative prompt text inline, verbatim. Copy-paste-ready, never a placeholder.
- Caption ends with the standard bio CTA line, verbatim: `Start learning Dutch with Joost: link in bio.`
- Caption, hook, and outro pass the **Voice check**: no stacked AI-slop sentence shapes (antithesis "not X but Y", forced rule-of-three, grand opener/closer, curiosity-gap "here's why"); reads aloud like one person talking.
- Close on connection, not shame: the feeling is being left out and wanting in. The family is glad she asked.
- One small move only: ask them to slow down so she can join. No grammar lesson in the reel.
- Three speakers, two of them female: ScenarioReel automatically shows a speaker NAME tag on every line (Joost / Sanne / Maya). That is what tells the viewer who is talking, since the looped clip cannot. The speech text is ALWAYS centred (brand rule), never positioned to a side.
- Do NOT rely on the clip to show who speaks or to act out a reaction: it loops and has no lip-sync, so any beat-specific expression desyncs and reads as weird. Keep the clip to CONSTANT, calm behavior (everyone's mouth closed; Joost and Sanne a little more active with a gesture or a nod, Maya the stillest), never a timed reaction.

## Dutch check

| # | Dutch line | Level | Correct? | Note |
| --- | --- | --- | --- | --- |
| 1 | Zaterdag gaan we naar mijn zus. En zondag komt opa ook! | A1 | yes | Two short main clauses with V2 inversion (A1 grammar); all high-frequency words. Joost's fast plan-making chatter she can't follow. (Matches the recorded joost-1.mp3.) |
| 2 | Oh, leuk! Hoe laat? | A1 | yes | Sanne's quick reply: interjection + elliptical "Hoe laat (komt hij)?". High-frequency, A1. The fast back-and-forth between Joost and Sanne that the expat can't break into. |
| 3 | Mag het iets langzamer? Ik wil graag meepraten. | A1 | yes | Elliptical modal request + modal `wil` with separable infinitive `meepraten` at the end. Neutral register, warm. Maya's recovery line, jumping in. |
| 4 | Natuurlijk. Geen probleem! | A1 | yes | `geen` correctly negates indefinite noun `probleem` (niet/geen rule); both `natuurlijk` and `probleem` are A1. Joost, warm, accepts her request. |
| 5 | Mag het iets langzamer? (outro takeaway) | A1 | yes | The one line to remember, same as line 3. |

## Voice check

Checked caption, hook, outro, pinned comment. Clean and shortened: the hook is two short lines ("Talk too fast to follow? / One line lets you join."), rewritten from the longer, AI-ish "One line, and you're back in the talk." The caption and pinned comment were generalised away from family/in-laws to any fast group conversation. No tricolon, no curiosity gap, reads like one person talking.

## ASSETS TO GENERATE (save into remotion/public/2026-06-22/table-talk-too-fast/)

STEP 1. Voice (ElevenLabs). Joost uses the Ido voice (ElevenLabs voice ID `dLPO5AsXc3FZDbTh1IKa`). Pick TWO different warm Dutch female voices: one for Maya (the expat) and one for Sanne (a friend at the table). The reel labels every line with the speaker's name on screen, so the viewer can always tell them apart, but make the two female voices clearly different by EAR too, and both different from Joost. Keep each voice for this reel only. Settings: Stability ~50, Similarity high, Style low, speed slightly slow (for Joost and Sanne, the fast lines, you can nudge the speed a touch quicker so they sound livelier; keep Maya's line at the slower, clearer pace). Render each line as its own file and save with these exact names (order matters):

remotion/public/2026-06-22/table-talk-too-fast/joost-1.mp3 "Zaterdag gaan we naar mijn zus. En zondag komt opa ook!" (EN: Saturday we're going to my sister's. And Sunday grandpa's coming too!)
remotion/public/2026-06-22/table-talk-too-fast/sanne-2.mp3 "Oh, leuk! Hoe laat?" (EN: Oh, nice! What time?)
remotion/public/2026-06-22/table-talk-too-fast/maya-3.mp3 "Mag het iets langzamer? Ik wil graag meepraten." (EN: Can it be a bit slower? I'd like to join in.)
remotion/public/2026-06-22/table-talk-too-fast/joost-4.mp3 "Natuurlijk. Geen probleem!" (EN: Of course. No problem!)
(Remotion measures each file's length automatically. You do not note durations.)

STEP 2. Scene image (ChatGPT). Attach: brand/style-ref-1.png, brand/style-ref-2.png, brand/joost-reference.png. Paste this exact prompt:

A cozy Dutch living room on a relaxed evening, warm light, a 9:16 vertical three-shot of three friends around a low table. IMPORTANT: every character has their mouth CLOSED (a gentle closed-mouth smile), nobody is shown mid-sentence or with an open mouth. JOOST sits on the LEFT, warm and friendly with a closed-mouth smile, one hand lifted in a small relaxed gesture. In the CENTRE (slightly further back) sits SANNE, a friend in her thirties, leaning in and attentive with a closed-mouth smile, a hand resting easily on her knee. On the RIGHT sits MAYA, a woman in her early thirties with shoulder-length dark hair and a mustard-and-grey knit, sitting back a little with a polite closed-mouth smile, holding a glass (she is the quiet one taking it in). Between them: a low table with drinks, snacks, a board of bites, and candles, a couple of other friends suggested softly out of focus. Keep all three faces in the upper two-thirds, and the bottom third of the frame calmer and less detailed (subtitles render there). No text anywhere in the image.

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

Save it as the clip's anchor frame: remotion/public/2026-06-22/table-talk-too-fast/starting-frame.png (it is the begin = end frame for the clip; the render itself uses the clip, not this still).

STEP 3. Video (image-to-video; Seedance 1 Pro). Upload the Step 2 image as BOTH the begin frame AND the end frame (end frame = begin frame returns the clip to the scene for a clean loop, so never write "loop" into the prompt). Settings: 9:16, 10s, 720p. SILENT, no lip-sync. Seedance 1 Pro has NO negative-prompt field, so the prompt leads with the positive closed-mouth state. Paste this exact prompt:

Animate this still image with subtle, continuous ambient motion only. Joost, the man at the head of the table on the left: his mouth and lips remain unchanged and closed for the entire video; he makes one small, slow, warm hand gesture and a gentle head movement, then settles. Sanne, the friend in the centre: her mouth and lips remain unchanged and closed for the entire video; she leans in slightly and gives a couple of small slow nods, one hand moving a little. Maya, the woman on the right: her mouth and lips remain unchanged and closed for the entire video; she sits mostly still, with a tiny shift of her water glass and a soft slow blink. No speech-like mouth movement, no mouth opening, no jaw motion. Static camera with very subtle ambient breathing motion. Candle flames flicker faintly. Warm, calm, relaxed get-together atmosphere. Preserve exact style, character design, composition, and lighting.

(No separate negative prompt. Full recipe: brand/brand-kit.md → Motion.)
(Two rules that keep the mouths closed. 1) Do NOT describe anyone as talking, telling a story, chatting, mid-conversation, or animated: those words make the video model open the mouth even when you also write "mouth closed." Describe only physical body language (a hand gesture, a nod, a lean, a sip). 2) The begin frame must already show closed mouths (Step 2 is written that way), because the clip continues from it. The "who is talking" job is the on-screen speaker name tags, not the clip, so the clip only needs calm ambient motion: Joost and Sanne a little more active (gesture, nods), Maya the stillest.)

Save the clip as: remotion/public/2026-06-22/table-talk-too-fast/clip.mp4
(Generate exactly ONE 10s clip. Remotion loops it to fill the dialogue.)

## WHAT REMOTION PRODUCES (no CapCut)

Remotion loops the clip, sequences the four voice lines with auto-detected timing, burns in NL/EN subtitles (always centred), and (because this reel has three speakers) shows a speaker NAME tag on every line (Joost / Sanne / Maya), so the viewer always knows who is talking. It emphasizes the recovery line in gold ("SAY THIS ↓"), shows the 3-second hook overlay, and adds the branded outro (DWJ logo mark + the one line to remember). No floating side tag. The logo is baked into Remotion. Output: 9:16 MP4 with audio. Props: remotion/props/2026-06-22/table-talk-too-fast.json.

## RENDER (after Status: approved and all assets saved)

/instagram-render table-talk-too-fast
(or, manually: cd remotion && npx remotion render src/index.ts ScenarioReel out/2026-06-22/table-talk-too-fast/table-talk-too-fast.mp4 --props=props/2026-06-22/table-talk-too-fast.json)

## CAPTION (paste into Instagram)

How to keep up when a group conversation gets too fast
You have been smiling and nodding for an hour. You catch maybe half of it, and asking everyone to slow down feels rude, so you stay quiet. It is not rude at all. One short line does it: "Mag het iets langzamer? Ik wil graag meepraten." (Can it be a bit slower? I'd like to join in.) Most people are glad you asked.
Save this for the next time the talk runs away from you. Send it to whoever goes quiet in a group.
Start learning Dutch with Joost: link in bio.
Keywords woven: follow fast Dutch, join the conversation in Dutch, keep up with fast Dutch, Dutch conversation practice, learn Dutch as an expat

## PINNED COMMENT

"Where does the Dutch get too fast for you to jump in? Tell me about it."
