# Sat June 27, Spoken-carousel: Dutch for 40 degrees (say it out loud)

> **Type:** spoken-carousel (renders via PhraseReel to an MP4)
> **Theme:** one-off, the NL heatwave (hittegolf, ~40°C). Not part of the weekly plan.
> **Setting:** n/a (spoken carousel; the heatwave moment)
> **Persona:** early expat living through their first Dutch heatwave, wants the words everyone around them is using
> **Positioning thread:** the words that make you sound like you actually live here, not like a textbook. What DutchwithJoost teaches by dropping you into real moments.
> **Render:** PhraseReel. props: `remotion/props/2026-06-22/dutch-words-for-the-heatwave.json`. run `/instagram-render dutch-words-for-the-heatwave`
> **Status:** approved

## Rules for this post (keep edits on-rails)
- Spoken format: each line is a full sentence pronounced out loud, one ElevenLabs mp3 per line (Joost's voice). The value is HEARING and repeating the Dutch, so keep the lines short and say-able.
- One 9:16 backdrop image only (`cover.png`), full-bleed; it sits behind every card. There is NO image-to-video clip: this is the cheap "talking carousel", not a reel, so it costs like a carousel.
- Dutch: A1 default. The heat words (snikheet, bloedheet) are the sanctioned A2-feel payload; the sentence around each stays A1. Every line passes the Dutch check and is flagged for a native check (Joost).
- "Ik heb het zo warm" models the correct way to say you feel hot. If edited, keep it "ik heb het ... warm", never "ik ben warm" or "ik ben heet" (that is the classic learner mistake).
- Remotion (PhraseReel) renders the final MP4 and all the Dutch text. No CapCut, no Canva. Crisp Dutch text is rendered, never baked into the backdrop image.
- No em-dash (—) anywhere: props JSON, slides, caption, pinned comment. Use a period, comma, colon, or parentheses.
- Backdrop image prompt carries the full Style Block + Negative prompt text inline, verbatim. Copy-paste-ready.
- Caption ends with the standard bio CTA line, verbatim: `Start learning Dutch with Joost: link in bio.`
- Keep it light. The "lekker weer, hè?" line is the comic button: it lands last.

## Dutch check
| # | Dutch line | Level | Correct? | Note |
|---|-----------|-------|----------|------|
| 1 | Het is snikheet vandaag. | A1/A2 | yes | "snikheet" is the payload word (sanctioned), rest is A1. V2, common words. Native-confirmed as actually said. |
| 2 | Het is bloedheet buiten. | A1 | yes | V2, common words. "bloedheet" (literally blood-hot) glossed. Native-confirmed as actually said. |
| 3 | Ik heb het zo warm. | A1 | yes | The fixed "het ... warm hebben" construction (heb in position 2, "warm" is a predicate adjective so no -e). All core A1 words. Models the correct form, not the classic mistake "ik ben warm" / "ik ben heet". |
| 4 | 40 graden? Lekker weer, hè? | A1 | yes | The joke line, lands last. "Lekker weer, hè?" is core small-talk, glossed. |

(Four lines, drawn from the heatwave bank. The two lines a native flagged as unnatural ("Wat een tropennacht", "Het is om te smelten") are excluded, and "Morgen wordt het een tropische dag" is left out to keep the set tight. "Ik heb het zo warm" is the natural first-person line: A1, and it models the correct "ik heb het warm" over the classic mistake "ik ben warm".)

## Voice check
Checked caption, cover sub, the "when" pills, pinned comment. Caption updated for the four-line set: line 1 still signals say-it-out-loud, the body walks the four lines (snikheet and bloedheet for the weather, "ik heb het warm" for how you feel with the "never ik ben warm" warning, and the comic "lekker weer, hè?"), all glossed. Cover sub and recap title now say four. Sentence shapes varied so the walk does not read as a parallel list; no antithesis or grand frame.

## ASSETS TO GENERATE (save into remotion/public/2026-06-22/dutch-words-for-the-heatwave/)

STEP 1 — Voice each line (ElevenLabs). Use the Joost voice (Ido, ElevenLabs voice ID dLPO5AsXc3FZDbTh1IKa).
Settings: Stability ~50, Similarity high, Style low, slightly slow (learners repeat after him). Render EACH
line as its own file, in order, with these exact names:

  remotion/public/2026-06-22/dutch-words-for-the-heatwave/phrase-1.mp3   "Het is snikheet vandaag."     (EN: It's sweltering today.)
  remotion/public/2026-06-22/dutch-words-for-the-heatwave/phrase-2.mp3   "Het is bloedheet buiten."     (EN: It's boiling hot outside.)
  remotion/public/2026-06-22/dutch-words-for-the-heatwave/phrase-3.mp3   "Ik heb het zo warm."          (EN: I'm so hot.)
  remotion/public/2026-06-22/dutch-words-for-the-heatwave/phrase-4.mp3   "40 graden? Lekker weer, hè?"  (EN: 40 degrees? Nice weather, eh?)
(One sentence per file. Remotion measures each file's length automatically, you never note durations. Just
the clean sentence, a touch slow; no trailing silence needed.)

STEP 2 — Backdrop image (ChatGPT). ONE full-bleed 9:16 watercolor scene that sits behind every card. Attach:
brand/style-ref-1.png, brand/style-ref-2.png, brand/joost-reference.png. Paste this exact prompt:

Create a warm, hand-drawn storybook illustration, VERTICAL 9:16 (1080×1920, full-bleed): Joost sitting in
front of an electric fan with his eyes half-closed in relief, a tall glass of iced water with a slice of
lemon beside him, a bright hot sun glowing through the window. Match the STYLE of style-ref-1 and style-ref-2
(do not copy their characters or objects). Reproduce JOOST exactly from joost-reference. Frame Joost in the
UPPER or CENTRE of the frame and keep the BOTTOM third calmer and less busy (the cover title is rendered
there). The centre is dimmed by a text plate at render time, so it need not be empty. No text in the image.
All Dutch is rendered by Remotion.

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

Save it as: remotion/public/2026-06-22/dutch-words-for-the-heatwave/cover.png
(No Canva. The phrase cards and all Dutch text are rendered by Remotion, correctly spelled.)

## WHAT REMOTION PRODUCES (PhraseReel → MP4; no CapCut, no Seedance)
A 9:16 MP4 "talking carousel": a cover title card (with a SOUND ON cue), then one card per line that holds for
exactly the length of its voice clip (big NL hero line, the EN beneath a beat later, a gold context pill, a
pulsing listen badge, progress dots + counter) over the slowly zooming backdrop, then a silent recap slide
listing all four lines (the save driver), then a branded blue CTA outro. Durations are auto-measured from the
mp3s; the DWJ logo is baked in. Output: 9:16 1080×1920 MP4 with the voice track muxed in. It ends on the CTA
card, so it skips the reel loop-check.
Props: remotion/props/2026-06-22/dutch-words-for-the-heatwave.json (theme, cover {kicker,title,sub}, phrases
[each: file, nl, en, when], outro {title, sub}, recap, recapTitle).

The lines (also written into props, one voiced mp3 each):
1. Het is snikheet vandaag. (It's sweltering today.) when: snikheet = boiling hot  → phrase-1.mp3
2. Het is bloedheet buiten. (It's boiling hot outside.) when: bloedheet = literally blood-hot  → phrase-2.mp3
3. Ik heb het zo warm. (I'm so hot.) when: not 'ik ben warm'  → phrase-3.mp3
4. 40 graden? Lekker weer, hè? (40 degrees? Nice weather, eh?) when: said at any temperature  → phrase-4.mp3

## RENDER (after Status: approved and all assets saved)
/instagram-render dutch-words-for-the-heatwave
(or, manually: cd remotion && npx remotion render src/index.ts PhraseReel out/2026-06-22/dutch-words-for-the-heatwave/dutch-words-for-the-heatwave.mp4 --props=props/2026-06-22/dutch-words-for-the-heatwave.json)

## CAPTION (paste into Instagram)
Dutch for a heatwave, said out loud
The Netherlands just hit 40 degrees and nobody has air conditioning. Here are four lines you'll actually hear this week, with Joost saying each one out loud.
Turn the sound on and repeat after him. Snikheet and bloedheet both mean it's boiling. When you're hot yourself, it's ik heb het warm, never ik ben warm. And a real Dutch person will still call it lekker weer, hè? (nice weather, eh?)
Save these for the next hot day. Send it to whoever keeps texting you that it's snikheet.
Start learning Dutch with Joost: link in bio.
Keywords woven: Dutch heatwave, hittegolf, snikheet, bloedheet, learn Dutch, Dutch for expats

## PINNED COMMENT
"How are you surviving 40 degrees with no air conditioning? Drop your best tip in Dutch or English."
