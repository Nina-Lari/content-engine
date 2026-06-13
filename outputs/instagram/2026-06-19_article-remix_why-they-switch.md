# Fri June 19 — Article Remix (Reel): Why people keep switching to English on you

> **Type:** article-remix → produced as a **scenario-reel** (Tier 1)
> **Theme:** A Dutch person switches to English the moment you try to speak Dutch (the reframe: it's kindness and a lost-practice problem, not a verdict on you)
> **Persona:** Belonging-motivated expat (Nina, Monika) who feels the switch as frustration and wasted effort more than shame — "I'm making the effort and they still switch". The reframe: the switch is kindness, not rejection.
> **Positioning thread:** The switch is kindness, not a verdict on your Dutch. You turn the lost moment into practice by naming it first, and the nerve to do that comes from low-stakes practice, not one brave day.
> **Render:** ScenarioReel — props: `remotion/props/why-they-switch.json`
> **Status:** draft   ← set to `approved` (after review + assets saved) to allow rendering

## SOURCE
- Article: `outputs/articles/passed-inburgering-cant-speak-dutch_enriched.md` (no `_final.mdx` yet — using the enriched draft + brief)
- Primary keyword (from `outputs/briefs/passed-inburgering-cant-speak-dutch_brief.json`): **"passed inburgering but can't speak Dutch"**
- Chosen angle (the ONE idea, not a summary): *The switch to English isn't a verdict on your Dutch. It's a habit and a kindness reflex. Name it first, and most people will gladly help you practice.*
- Format: reel (ScenarioReel).
- Originality note: transform, do not paste. No verbatim sentences from the article. This is a new café scene that dramatizes one idea from it.

## Rules for this post (keep edits on-rails)
- Dutch: A1 with light-A2 phrasing on the frame line and the close ("het makkelijker voor je maken", "helpen je graag oefenen"), always grammatically correct, usable; **je** register here (Joost + the learner are friendly peers at a café). Flag for a native check (Joost) before posting.
- Remotion renders the final asset. Do not assemble in CapCut/Canva. Crisp Dutch text is rendered, never baked into the AI image.
- Tier 1 only: one two-shot composition, no lip-sync, subtitles carry comprehension. Joost is locked from `brand/joost-reference.png`; the learner is **Roos**, the SAME recurring character from Monday's reel — keep her design identical (early 30s, shoulder-length dark hair, mustard scarf, canvas tote). Describe her by position ("the woman on the right"), not by name, in the image/motion prompts.
- Hook in the first 3 seconds. Open on the feeling, not a logo. One teaching payload: the frame line (rendered in gold).
- Caption line 1 = the article's primary keyword. Pull one angle only; never paste paragraphs (Originality Score).
- This is the emotional close of the week: tactical fix on Mon/Tue/Thu, and today reframes the frustration: the switch is kindness, and most people are glad to help you practice.

## ASSETS TO GENERATE (save into remotion/public/why-they-switch/)

STEP 1 — Voice (ElevenLabs). Joost voice **Ido** (`dLPO5AsXc3FZDbTh1IKa`); use the SAME Roos voice as Monday's reel. Stability ~50, Similarity high, Style low, slightly slow. Render each line separately and save with these exact names (order matters):

    remotion/public/why-they-switch/roos-1.mp3   "Ik doe zo mijn best. En toch schakelt iedereen over op Engels."                          (EN: I try so hard. And still everyone switches to English.)
    remotion/public/why-they-switch/joost-2.mp3  "Nee, het is niet persoonlijk. Het is een gewoonte. Ze willen aardig zijn en het makkelijker voor je maken."  (EN: No, it's not personal. It's a habit. They want to be nice and make it easier for you.)
    remotion/public/why-they-switch/roos-3.mp3   "Wat kan ik doen?"                                                                        (EN: What can I do?)
    remotion/public/why-they-switch/joost-4.mp3  "Zeg het meteen: ik leer Nederlands, praat alsjeblieft Nederlands met me."                (EN: Say it right away: I'm learning Dutch, please speak Dutch with me.)
    remotion/public/why-they-switch/roos-5.mp3   "Oké. Ik zeg het gewoon."                                                                 (EN: Okay. I'll just say it.)
    remotion/public/why-they-switch/joost-6.mp3  "De meeste mensen helpen je graag oefenen."                                               (EN: Most people are happy to help you practice.)

(Remotion measures each file's length automatically; you do not note durations.)

> Register note: with a stranger the frame line takes the **u** form — "Ik leer Nederlands, praat alstublieft Nederlands met me." Keep the **je** form ("alsjeblieft / met me") in this café scene with Joost.

STEP 2 — Scene image (ChatGPT). Attach: `brand/style-ref-1.png`, `brand/style-ref-2.png`, `brand/joost-reference.png`. Paste this exact prompt:

    Create a warm, hand-drawn storybook illustration for a VERTICAL 9:16 video
    frame: a two-shot of two people at a small café table with coffee cups between
    them. On the LEFT, JOOST sits leaning in warmly and reassuring. On the RIGHT
    sits a woman in her early 30s with shoulder-length dark hair, a mustard scarf,
    and a canvas tote on her lap, looking a little discouraged but listening (do not
    put a name in the prompt). Soft window light, a cozy café with plants and shelves
    behind them. Reference rules: match the STYLE of style-ref-1 and style-ref-2 (do
    not copy their characters or objects). Reproduce JOOST exactly from
    joost-reference. Keep the bottom third calmer (subtitles render there). No text in the image.

    [Inline the Style Block and Negative prompt from brand/brand-kit.md here.]

Save the result anywhere — it is only the start frame for the clip.

STEP 3 — Video (image-to-video; Seedance 1.5 Pro Fast or Wan 2.6). Upload the Step 2 image, 9:16, 10s, relevance high. SILENT, no lip-sync — mouths never look like they are talking. Paste this motion prompt:

    Gentle ambient motion only. The woman on the right looks down, a little
    frustrated, then her expression softens as she listens and she lifts her eyes.
    Joost on the left leans in gently and gives a warm, reassuring nod, one hand
    resting open on the table. Mouths stay softly closed, no talking. Calm, tender,
    slow. Steam drifting from the coffee. Camera static with a subtle breathing
    motion. Soft ambient café atmosphere. All motion begins and ends at rest.

Negative prompt (brand-kit negatives + motion negatives): talking, lip sync, mouth movement, moving lips, open mouth, jaw movement, fast or jerky motion, morphing faces.

Save the clip as: `remotion/public/why-they-switch/clip.mp4`
(Generate exactly ONE 10s clip — never a second one. Remotion loops it to fill the dialogue.)

## WHAT REMOTION PRODUCES (no CapCut)

Remotion loops the clip, sequences the six voice lines with auto-detected timing, burns in NL/EN subtitles, emphasizes the frame line (Joost's "Zeg het meteen…") in gold with "SAY THIS ↓", adds the 3-second hook ("It's not your accent — it's a HABIT"), and ends on a branded card over the scene with the frame line, then fades back to the scene so the reel loops cleanly. Output: 9:16 MP4 with audio. Props: `remotion/props/why-they-switch.json`.

## RENDER (after Status: approved and all assets saved)

    cd remotion && npx remotion render src/index.ts ScenarioReel out/why-they-switch.mp4 --props=props/why-they-switch.json

(or: `/instagram-content render why-they-switch`)

## CAPTION (paste into Instagram)
Passed inburgering but can't speak Dutch? Here's why people still switch to English on you.

You make the effort. You order in Dutch. They answer in English anyway. The annoying part isn't your accent. It's the lost chance to practice the thing you've worked so hard on. It's easy to read the switch as rejection, like they're telling you your Dutch isn't good enough. Usually it's the opposite. Switching is a reflex, and most of the time it's kindness: they think they're making it easier for you. So you get to set the frame first: "Ik leer Nederlands, praat alsjeblieft Nederlands met me." Say it early, before the reflex kicks in. You won't always feel up for it in the moment, which is exactly why you practice it where the stakes are zero, until the line is just there when you need it.

De meeste mensen helpen je graag oefenen.

Save this for the next time it happens. Send it to someone who gets that little stab of frustration every time.

Keywords woven: passed inburgering but can't speak Dutch, switch to English, speaking Dutch confidence, practice Dutch speaking, inburgering after the exam.

## PINNED COMMENT
"When someone switches to English on you, what's the first thing you feel? And does it land differently knowing they probably think they're helping?"
