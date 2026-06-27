# Tue June 23, Cheatsheet: Join the small talk at any Dutch event

> **Type:** cheatsheet
> **Theme:** smiling and nodding while the talk runs too fast, here the small talk you can't enter
> **Setting:** any Dutch event (a party, a BBQ, a work borrel). The cover stages a relaxed gathering with drinks, not one specific occasion, so any viewer can map their own onto it.
> **Persona:** Belonging + Family (Molly, couldn't make Dutch friends; "meet people who are not expats")
> **Positioning thread:** functional everyday Dutch you can use tomorrow, judgment-free
> **Render:** Cheatsheet. props: `remotion/props/2026-06-22/join-the-small-talk.json`. run `/instagram-render join-the-small-talk`
> **Status:** approved  

## Rules for this post (keep edits on-rails)

- Dutch: A1 default, grammatically correct, usable; informal register (`je`/`jij`) for a social event; every phrase passes the Dutch check and appears in the **Dutch check** table; flagged for a native check (Joost) before posting.
- Remotion renders the cover headline and the phrase cards. Leave text out of the generated cover image. No Canva.
- No em-dash anywhere: not in the props JSON, the slides, the caption, or the pinned comment.
- Cover image prompt carries the full Style Block + Negative prompt text inline, verbatim. Copy-paste-ready, never a placeholder.
- Caption ends with the standard bio CTA line, verbatim: `Start learning Dutch with Joost: link in bio.`
- Caption, cover headline, the "when" subheads, and pinned comment pass the **Voice check**: no stacked AI-slop sentence shapes; reads aloud like one person talking.
- Phrases cover the real arc for joining when it runs too fast: open, find common ground, buy a moment (ask them to repeat), take the pressure off (your Dutch is still coming), keep them talking, step away. Every line is one you genuinely need at any event tomorrow, not just a party.

## Dutch check

| #   | Dutch line                    | Level | Correct? | Note                                                                            |
| --- | ----------------------------- | ----- | -------- | ------------------------------------------------------------------------------- |
| 1 | Hoi, ik ben [naam]. En jij? | A1 | yes | Greeting + `zijn` + elliptical `En jij?`. `[naam]` is a placeholder the viewer fills in. Informal `jij`. |
| 2 | Ken je hier veel mensen? | A1 | yes | Inversion yes/no question, `kennen` present, neutral `je`. Works at any event, not just a party. |
| 3 | Sorry, kun je dat herhalen? | A1 | yes | Modal `kunnen` + infinitive (A1 structure). `herhalen` (to repeat) is glossed by the simple English line. |
| 4 | Mijn Nederlands is nog niet zo goed. | A1 | yes | Present tense, one clause, all high-frequency. The polite pressure-release; echoes Molly's own words. |
| 5 | Wat leuk! Vertel eens. | A1 | yes | Exclamation + imperative with the softener `eens`. Keeps them talking with almost no output from you. |
| 6 | Ik ga even wat drinken halen. | A1 | yes | `gaan` + separable `halen` at end, softener `even`. A friendly way to step away. |

## Voice check

Checked caption, cover sub, the "when" subheads, pinned comment. Clean. Caption opens on the concrete moment (drink in hand, the talk too fast) and closes on a concrete action (stay in Dutch, not switch to English). No antithesis or tricolon stack. English kept simple for non-native readers (cut "lose the thread"). The cover sub names a general setting (any event with strangers) so a worker, parent, or student can each map their own onto it.

## ASSETS TO GENERATE (save into remotion/public/2026-06-22/join-the-small-talk/)

COVER IMAGE (ChatGPT). Attach: brand/style-ref-1.png, brand/style-ref-2.png, brand/joost-reference.png. Paste this exact prompt:

Create a warm, hand-drawn storybook illustration, VERTICAL 4:5 (1080x1350, the Instagram feed ratio): Joost at a relaxed get-together, standing with a drink in hand, smiling and half-turned as if about to greet someone new. A few other guests softly suggested in the background holding glasses, a side table with drinks and small snacks, warm indoor light. Keep it the kind of easy gathering that could read as a house party, a work borrel, or friends meeting up, with no birthday or single-occasion cues (no balloons, cake, or garlands). Match the STYLE of style-ref-1 and style-ref-2 (do not copy their characters or objects). Reproduce JOOST exactly from joost-reference. Frame Joost in the UPPER HALF of the image, kept high. The cover crops to a horizontal band across the top and fades the lower part into a solid colour panel that holds the headline, so keep Joost high and leave the lower third empty. No text in the image. The headline is rendered by Remotion.

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

Save it as: remotion/public/2026-06-22/join-the-small-talk/cover.png
(No Canva. The phrase slides are rendered by Remotion from props, with crisp Dutch text.)

## WHAT REMOTION PRODUCES

A branded carousel: cover (your image + the headline/kicker/sub overlaid) + one card per phrase (NL hero line, EN translation, a WHEN panel) + a save/send CTA slide. One PNG per slide. Props: remotion/props/2026-06-22/join-the-small-talk.json.

The phrases (also written into props):

1. Hoi, ik ben [naam]. En jij? (Hi, I'm [your name]. And you?) when: walking up and opening, the first line is the hard part
2. Ken je hier veel mensen? (Do you know many people here?) when: an easy way in that works at any event
3. Sorry, kun je dat herhalen? (Sorry, can you say that again?) when: they said something and it went by too fast
4. Mijn Nederlands is nog niet zo goed. (My Dutch isn't that good yet.) when: it takes the pressure off and keeps you in Dutch
5. Wat leuk! Vertel eens. (How nice! Tell me more.) when: keep them talking, you barely have to say a thing
6. Ik ga even wat drinken halen. (I'm going to grab a drink.) when: an easy, friendly way to step away

## RENDER (after Status: approved and cover.png saved)

/instagram-render join-the-small-talk
(or, manually: cd remotion && npx remotion render src/index.ts Cheatsheet out/2026-06-22/join-the-small-talk --sequence --image-format=png --props=props/2026-06-22/join-the-small-talk.json)

## CAPTION (paste into Instagram)

How to make small talk in Dutch
You are standing there with a drink while everyone talks Dutch too fast to join. You wait for a gap and it does not come. The hardest part is the first line, so these six start there. Two are for when you stop following: ask them to say it again, or just say your Dutch is not great yet. That is how you stay in Dutch instead of switching to English.
Save this before your next party or borrel. Send it to the friend you always go with.
Start learning Dutch with Joost: link in bio.

Keywords woven: Dutch small talk, small talk in Dutch, Dutch conversation phrases, make Dutch friends, learn Dutch as an expat

## PINNED COMMENT

"What do you usually do when the Dutch around you gets too fast to follow?"
