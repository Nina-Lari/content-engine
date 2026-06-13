# Tue June 16 - Cheatsheet: 5 polite ways to keep them speaking Dutch to you

> **Type:** cheatsheet (carousel)
> **Theme:** A Dutch person switches to English the moment you try to speak Dutch
> **Persona:** Belonging-motivated expat stuck in the Shame Cycle (Monika, Molly): "feels bad making people switch", "wants to at least start in Dutch"
> **Positioning thread:** You learn these by using them, not memorizing them. Each line is short enough to actually say out loud under pressure.
> **Render:** Cheatsheet (props: `remotion/props/keep-them-in-dutch.json`)
> **Status:** approved

## Rules for this post (keep edits on-rails)

- Dutch: A1/light-A2, always grammatically correct, usable; polite **u** register kept consistent across all five lines (safe with strangers and shop staff). Flag for a native check (Joost) before posting.
- These are the exact phrases from Monday's reel situation. The carousel is the "save the lines" payoff of the reel. Keep them matched.
- **Cover setting is intentionally a café, not the bakery** (the reel's setting): same situation, different place, so the three on-theme posts don't share one image on the feed grid. Same Joost, style refs, and palette keep it on-brand. See the playbook's _Feed-grid differentiation_ rule.
- Remotion renders the slides from props (crisp Dutch text). Do not lay out in Canva/CapCut. The cover headline is overlaid by Remotion, so the cover image carries no text.
- 5 phrase slides, one idea each, readable in 2 seconds: NL phrase, EN translation, and _when to use it_. Last slide = explicit save + send CTA.
- No A/B/hashtag wall in the caption. Caption line 1 = searchable phrase. Comment seed pulls a sentence reply.

## ASSETS TO GENERATE (save into remotion/public/keep-them-in-dutch/)

COVER IMAGE (ChatGPT). Attach: `brand/style-ref-1.png`, `brand/style-ref-2.png`, `brand/joost-reference.png`. Paste this exact prompt:

    Create a warm, hand-drawn storybook illustration, VERTICAL 4:5 (1080×1350, the
    Instagram feed ratio): JOOST as a
    friendly café barista behind the counter of a small cozy coffee bar, smiling and
    giving a small open-handed gesture as if happily continuing a conversation in
    Dutch. Behind him: an espresso machine, a few hanging mugs, a shelf with cups and
    a small plant, soft warm window light. Frame JOOST in the UPPER HALF of the image,
    kept high. The cover crops to a horizontal band across the top and fades the lower
    part into a solid colour panel that holds the headline, so leave the lower third
    empty. Match the
    STYLE of style-ref-1 and style-ref-2 (do not copy their characters or objects).
    Reproduce JOOST exactly from joost-reference (same face, hair, stubble, build,
    clothing). No text in the image (Remotion renders the headline).

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

    Negative prompt:
    Avoid realistic eyes, detailed pupils, sclera, iris, eyelashes, glossy eyes,
    anime eyes, photorealism, 3D render, plastic texture, harsh outlines, sharp
    digital gradients, overly perfect vector art, exaggerated cartoon expressions,
    complex facial detail, hyperreal skin texture, dramatic lighting, cinematic
    realism, overly polished digital art, cluttered composition, text in the image,
    inconsistent character design.

Save it as: `remotion/public/keep-them-in-dutch/cover.png`
(No Canva. The phrase slides are rendered by Remotion from props.)

## WHAT REMOTION PRODUCES

A branded carousel: cover (your image + the headline "Keep them speaking Dutch to you" overlaid) + one card per phrase (NL hero line, EN translation, a WHEN panel) + a save/send CTA slide. One PNG per slide. Props: `remotion/props/keep-them-in-dutch.json`.

The phrases (also in props):

1. **Mag ik het in het Nederlands proberen?** (Can I try it in Dutch?) _when:_ they switch to English to be helpful. The friendliest reset.
2. **U mag gewoon Nederlands tegen me praten.** (You can just speak Dutch to me.) _when:_ a shop assistant or stranger flips to English out of habit.
3. **Kunt u iets langzamer praten?** (Can you speak a bit slower?) _when:_ you understood, you just need slower. Ask for slower, not for English.
4. **Ik leer Nederlands. Ik wil graag oefenen.** (I'm learning Dutch. I'd like to practice.) _when:_ say it FIRST, before they switch. Sets the frame up front.
5. **Hoe zegt u dat in het Nederlands?** (How do you say that in Dutch?) _when:_ you got stuck on a word. Keeps them teaching you instead of translating for you.

## RENDER (after Status: approved and cover.png saved)

    cd remotion && npx remotion render src/index.ts Cheatsheet out/keep-them-in-dutch --sequence --image-format=png --props=props/keep-them-in-dutch.json

(or: `/instagram-content render keep-them-in-dutch`)

> Register note for the user: all five lines use polite **u**, safe with strangers and shop staff. With a friend or your partner, swap to **je**: "Mag ik het in het Nederlands proberen?" stays the same; "U mag gewoon..." → "Je mag gewoon Nederlands tegen me praten"; "Kunt u..." → "Kun je iets langzamer praten?"; "Hoe zegt u dat..." → "Hoe zeg je dat...".

## CAPTION (paste into Instagram)

How to keep Dutch people speaking Dutch to you (instead of switching to English).

Most switches aren't judgment. People switch to be kind, or out of pure habit. You can gently steer it back, and you don't need perfect Dutch to do it. Five short lines, all polite enough for a stranger:

1. Mag ik het in het Nederlands proberen?
2. U mag gewoon Nederlands tegen me praten.
3. Kunt u iets langzamer praten?
4. Ik leer Nederlands. Ik wil graag oefenen.
5. Hoe zegt u dat in het Nederlands?

Pick one and use it tomorrow. The point isn't to know them. It's to have said them out loud enough times that they come out calm.

Save this. Send it to whoever keeps getting answered in English.

Keywords woven: keep them speaking Dutch, switch to English, polite Dutch phrases, practice Dutch, Dutch for beginners.

## PINNED COMMENT

"Which line are you most likely to actually use, and which situation are you saving it for?"
