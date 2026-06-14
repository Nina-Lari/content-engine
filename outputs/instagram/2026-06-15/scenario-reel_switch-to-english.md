# Mon June 15 — Scenario Reel: When they switch to English, say this

> **Type:** scenario-reel (Tier 1: one composition, no lip-sync, subtitle-led)
> **Theme:** A Dutch person switches to English the moment you try to speak Dutch
> **Persona:** Belonging-motivated expat stuck in the Shame Cycle (Monika, Molly, Nina) — "people instantly switch to English when I try"
> **Positioning thread:** Unlimited, judgment-free practice. You rehearse the recovery line enough times alone that it comes out calm in the real moment.
> **Render:** ScenarioReel — props: `remotion/props/2026-06-15/switch-to-english.json`
> **Status:** approved (rendered in the Remotion validation test → `remotion/out/2026-06-15/switch-to-english.mp4`, ~22s)

## Rules for this post (keep edits on-rails)

- Dutch: A1 default (one light-A2 line: the recovery line), always grammatically correct, usable; service register is **u** throughout this scene (bakery = stranger/service); flagged for a native check (Joost) before posting.
- Tier 1 only: one two-shot composition, no lip-sync, subtitles carry comprehension. Joost is locked from `brand/joost-reference.png`; **Roos** (the learner) is invented here and reused if she recurs — keep her design identical.
- Remotion renders the final asset. Do not assemble in CapCut/Canva. Crisp Dutch text is rendered, never baked into the AI image.
- Hook lives in the first 3 seconds as a Remotion text overlay. Open on the moment, never a logo.
- Joost plays the friendly Dutch baker who switches to English to be helpful (the real reflex), then warmly switches back and slows down. He is never mocking. The point is that staying in Dutch is a polite request, not a confrontation.
- One teaching payload: the recovery line. Subtitles every line (Dutch large, English smaller beneath). Caption line 1 = a searchable phrase; CTA = send/save, not likes.

## ASSETS TO GENERATE (save into remotion/public/2026-06-15/switch-to-english/)

STEP 1 — Voice (ElevenLabs). Use the saved Joost voice **Ido** (ElevenLabs voice ID `dLPO5AsXc3FZDbTh1IKa`; see `brand/brand-kit.md` → Voices). For Roos, pick a warm female Dutch voice and keep it if she recurs. Settings: Stability ~50, Similarity high, Style low, slightly slow for learners. Render each line as its own file and save with these exact names (order matters):

    remotion/public/2026-06-15/switch-to-english/roos-1.mp3   "Hoi, mag ik een bruin brood, alsjeblieft?"            (EN: Hi, may I have one loaf of brown bread, please?)
    remotion/public/2026-06-15/switch-to-english/joost-2.mp3  "Of course, one loaf of brown bread. That's two euros."          (the switch — said warmly, in English)
    remotion/public/2026-06-15/switch-to-english/roos-3.mp3   "Mag ik het in het Nederlands proberen? Ik wil graag oefenen."                (EN: May I try it in Dutch? I’d like to practice.)
    remotion/public/2026-06-15/switch-to-english/joost-4.mp3  "Natuurlijk! Sorry. Een bruin brood. Dat is twee euro."  (EN: Of course! Sorry. One loaf of brown bread. That’s two euros.)
    remotion/public/2026-06-15/switch-to-english/roos-5.mp3   "Dankjewel!"                                          (EN: Thank you!)

(Joost's second line is the only one in English, said warmly — it is the "switch" the whole reel turns on. Remotion measures each file's length automatically; you do not note durations.)

STEP 2 — Scene image (ChatGPT). Attach: `brand/style-ref-1.png`, `brand/style-ref-2.png`, `brand/joost-reference.png`. Paste this exact prompt:

    Create a warm, hand-drawn storybook illustration for a VERTICAL 9:16 video
    frame: a two-shot at a cozy Dutch bakery counter. On the LEFT, behind the counter,
    JOOST stands as the friendly baker, an apron over his clothes, shelves of bread
    and a small cash register behind him, gesturing warmly. On the RIGHT, a woman in
    her early 30s with shoulder-length dark hair, a mustard scarf, and a canvas tote
    bag stands at the counter holding up a finger as she speaks (do not put a name in
    the image prompt). Warm morning window light. Reference rules: match the
    STYLE of style-ref-1 and style-ref-2 (do not copy their characters or objects).
    Reproduce JOOST exactly from joost-reference (same face, hair, stubble, build,
    clothing) under the apron. Invent Roos to fit the scene and keep her consistent.
    Keep the bottom third calmer and less detailed (subtitles render there). No text in the image.

    [Inline the Style Block and Negative prompt from brand/brand-kit.md here.]

Save the result anywhere — it is only the start frame for the clip in Step 3; the render does not use it directly.

STEP 3 — Video (image-to-video; default Seedance 1.5 Pro Fast or Wan 2.6 — cheap, good at gentle 2D motion). Upload the Step 2 image as the start frame. Settings: 9:16, 10s, relevance high. This clip is **silent** and there is **no lip-sync**, so the characters must never look like they are talking. Paste this motion prompt:

    Gentle ambient motion only. The woman on the right tilts her head slightly and
    lifts one finger in a small, polite questioning gesture, then lowers her hand,
    with a soft friendly expression. Joost (the baker on the left) smiles, gives a
    warm nod, and gestures calmly toward the bread on the shelf. Mouths stay softly
    closed or lightly smiling, no talking.
    All movement begins and ends at rest, returning to the starting pose by the end
    so the clip loops cleanly. Camera static with a subtle breathing motion. Soft
    ambient bakery atmosphere, warm morning light. Slow and calm, no fast motion.

Negative prompt (brand-kit negatives + motion negatives): talking, lip sync, mouth movement, moving lips, mouthing words, open mouth, jaw movement, exaggerated mouth animation, fast or jerky motion, morphing faces.

Save the clip as: `remotion/public/2026-06-15/switch-to-english/clip.mp4`
(One 10s clip is enough — Remotion loops it to fill the dialogue.)

## WHAT REMOTION PRODUCES (no CapCut)

Remotion loops the clip to cover the dialogue, sequences the five voice lines with auto-detected timing, burns in NL/EN subtitles (Dutch large, English beneath), emphasizes the recovery line in gold with a "SAY THIS ↓" badge, adds the 3-second hook overlay ("When they switch to English, say THIS"), shows the "the switch (sound familiar?)" tag on Joost's English line, and ends on a branded blue outro card. Output: 9:16 1080×1920 MP4 with audio, ~22s. Props are in `remotion/props/2026-06-15/switch-to-english.json` (hook text, the five lines + flags, outro).

## RENDER (after Status: approved and all assets saved)

    cd remotion && npx remotion render src/index.ts ScenarioReel out/2026-06-15/switch-to-english.mp4 --props=props/2026-06-15/switch-to-english.json

(or: `/instagram-render switch-to-english`)

## CAPTION (paste into Instagram)

What to say when Dutch people switch to English on you.

They're not judging you. Switching to English is a reflex, usually a kind one. You don't have to accept it. One calm line keeps the conversation in Dutch:

"Mag ik het in het Nederlands oefenen?" (Can I practice it in Dutch?)

Say it with a smile. Most people happily switch back and slow down. The trick is having said it a hundred times in practice first, so it comes out steady when you're standing at the counter.

Save this for the next time it happens. Send it to whoever keeps getting answered in English.

Keywords woven: switch to English, speak Dutch, practice Dutch, Dutch bakery phrases, staying in Dutch.

## PINNED COMMENT

"Where does this happen to you the most — the supermarket, the bakery, work? Tell me the exact place and I'll script the line for it."
