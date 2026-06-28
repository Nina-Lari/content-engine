# Spoken Carousels — the grounding bank for `spoken-carousel` posts

The source bank for the **`spoken-carousel`** Instagram post type: a short 9:16 video that takes a small set
of **useful, sayable Dutch sentences** and **pronounces each one out loud**, one card at a time, over a
single watercolor backdrop, then shows a summary slide with all of them. It renders via the **`PhraseReel`**
composition (see `remotion/README.md`). It is the cheap sibling of a scenario reel: one still image + one
short voice clip per sentence, and **no image-to-video clip**, so it costs and takes about as much as a
carousel, not a reel.

This is a **standing weekly category**, not a carousel menu option. Every themed week includes **one**
spoken-carousel, the same way every week has its reels. The default 7-post week is **2 reels + 1
spoken-carousel + 4 carousels**.

---

## How this is separate from the silent carousels

A `spoken-carousel` is its **own category**, deliberately kept apart from the read-only carousels
(`cheatsheet`, `small-words`, `vocab-scene`, `particle`, `mistake`). The difference is the job each does:

| | Silent carousels (`Cheatsheet`, `ConceptGuide`, `VocabScene`) | **Spoken carousel (`PhraseReel`)** |
|---|---|---|
| Output | PNG slides | **9:16 MP4 (a reel-format video)** |
| Sense it teaches to | reading | **listening + pronunciation** |
| What it teaches | words, concepts, rules, labels | **full sentences you actually say** |
| The payload | the text on the slide | **hearing it said, then repeating** |
| Cost | a cover image + Remotion | **a cover image + one short voice clip per line** |

A topic can live in **both** worlds and that is fine: the heat *words* (`snikheet`, `tropennacht`) make a
good silent `small-words` carousel, while the heat *sentences* you would actually say (`Het is snikheet
vandaag.`) make a good spoken-carousel. They are produced as **two separate posts**, never merged. When in
doubt: if the value is *reading and saving*, it is a carousel; if the value is **hearing it and saying it
back**, it is a spoken-carousel.

---

## What one post is

- **4 to 8 sentences** built around **one real-life moment** (the bakery, the GP, the phone). One moment per
  post, the same settings model the rest of the week uses, so a spoken-carousel can sit on-theme or stand
  alone.
- The sentences are things you **say**, in the order you would roughly say them, not things you describe.
  ("Mag ik een bruin brood?" not "het brood = the bread".)
- Each sentence card shows the **Dutch large**, the **English a beat later**, and an optional short
  **context pill** (the gold `when` tag).
- A **summary slide** at the end lists every sentence (NL + EN), held long enough to screenshot. It is the
  save driver, so it earns its own `SAVE THIS` cue.
- A `SOUND ON` cue on the cover, because the whole format is dead without audio.

Slide order the composition renders: **cover title card → one card per sentence → summary slide → CTA
outro.** Durations are measured automatically from the voice clips; nothing is hand-timed.

---

## Production (read before authoring)

- **Audio is made by hand in ElevenLabs**, the Joost voice (`brand/brand-kit.md` → Voices). One short clip
  per sentence, saved in order as `phrase-1.mp3 … phrase-N.mp3` in the post's `remotion/public/<week>/<slug>/`
  folder. Settings: Stability ~50, Similarity high, Style low, **slightly slow** (learners repeat after him).
  Just the sentence, a touch slow, no trailing silence needed. Remotion reads each file's length, so you
  never note durations.
- **One full-bleed 9:16 backdrop** (`cover.png`), generated label-free with the brand Style Block, framed
  with the subject upper/centre and a calmer lower third (the cover title sits there). The text plate dims
  the centre, so it does not need to be empty. **No Dutch is ever baked into the image** (the brand's #1
  production rule); every word is rendered by Remotion, correctly spelled.
- **No image-to-video clip.** That is the whole point: this is the format that gives carousels audio without
  paying for a reel clip.
- Pacing and the recap are props-tunable (`pacing.gap` for room to repeat, `pacing.recap` for the summary
  hold, `recap`/`recapTitle`). The defaults live in `remotion/src/compositions/PhraseReel.tsx`; the props
  contract is in `remotion/README.md` → `PhraseReel`.

> **No em-dash in the produced post.** This bank uses ` — ` as a glossing separator for readability (like the
> other banks). The generated **props, slide text, caption, and pinned comment must not** contain an em-dash:
> use a period, comma, colon, or parentheses (brand hard rule, `brand/instagram-voice.md` +
> `.claude/rules/writing-quality.md`).

## Level

A1 by default, with a light A2 reach where a real exchange needs it (inversions, a reflexive, a polite
modal). Every line stays a **common, natural** thing a person actually says, always glossed in English
(`brand/dutch-level-guide.md`). Articles and word order are exactly what a native would catch, so verify any
uncertain line against [woordenlijst.org](https://woordenlijst.org) or [vandale.nl](https://www.vandale.nl),
and keep the per-post **Dutch check** table in the runbook.

---

## The bank (themed sentence-sets)

One set = one post. Pick a set on-theme for the week where you can; otherwise pull an evergreen one. The
`when` note becomes the optional gold context pill on the card.

### Set: Bij de bakker (At the bakery)
Moment: ordering at the bread counter.
- Mag ik een bruin brood, alstublieft? — Could I have a brown loaf, please? — _(ordering bread)_
- Doe mij maar twee broodjes. — I'll have two rolls. — _(ordering rolls)_
- Kunt u het even snijden? — Could you slice it? — _(you want it sliced)_
- Hebt u ook appeltaart? — Do you also have apple pie? — _(asking what they have)_
- Hoeveel is het samen? — How much is it altogether? — _(the total)_
- Pinnen, graag. — By card, please. — _(paying)_

### Set: Bij de huisarts (At the GP)
Moment: phoning or arriving for an appointment.
- Ik wil graag een afspraak maken. — I'd like to make an appointment. — _(booking)_
- Ik voel me niet lekker. — I don't feel well. — _(what's wrong)_
- Ik heb al een paar dagen hoofdpijn. — I've had a headache for a few days. — _(symptoms)_
- Kan ik vandaag nog langskomen? — Can I still come by today? — _(asking for a slot)_
- Waar kan ik dit recept ophalen? — Where can I collect this prescription? — _(the pharmacy)_
- Beterschap! — Get well soon! — _(what they say back)_

### Set: Op het terras (At the café terrace)
Moment: ordering and paying for a drink outside.
- Mag ik de kaart, alstublieft? — Could I have the menu, please? — _(sitting down)_
- Doe mij maar een koffie. — I'll have a coffee. — _(ordering)_
- Heeft u ook iets zonder alcohol? — Do you have anything without alcohol? — _(asking options)_
- Kan ik hier pinnen? — Can I pay by card here? — _(paying)_
- Mag ik afrekenen? — Could I settle up? — _(asking for the bill)_
- Het was lekker, dank u wel. — It was lovely, thank you. — _(leaving)_

### Set: In de supermarkt (At the supermarket)
Moment: finding things and checking out.
- Waar staan de eieren? — Where are the eggs? — _(looking for something)_
- Heeft u dit ook groter? — Do you have this in bigger? — _(sizes)_
- Mag ik een tasje? — Can I have a bag? — _(at the till)_
- Zit dit in de aanbieding? — Is this on offer? — _(checking the price)_
- Kan ik contant betalen? — Can I pay cash? — _(paying)_
- Mag ik de bon? — Can I have the receipt? — _(after paying)_

### Set: Bij de kapper (At the hairdresser)
Moment: getting a haircut.
- Ik wil graag mijn haar laten knippen. — I'd like to get my hair cut. — _(arriving)_
- Niet te kort, alstublieft. — Not too short, please. — _(instructions)_
- Een klein beetje eraf. — Just a little bit off. — _(how much)_
- Mag het wat korter aan de zijkant? — Can it be a bit shorter on the sides? — _(detail)_
- Zo is het goed, dank u. — That's good like this, thanks. — _(finishing)_

### Set: Aan de telefoon (On the phone)
Moment: making or taking a call you half understand.
- Met Sanne, goedemiddag. — This is Sanne, good afternoon. — _(answering)_
- Kunt u dat herhalen, alstublieft? — Could you repeat that, please? — _(didn't catch it)_
- Kunt u iets langzamer praten? — Could you speak a bit more slowly? — _(too fast)_
- Ik bel over mijn afspraak. — I'm calling about my appointment. — _(the reason)_
- Kunt u mij doorverbinden? — Could you put me through? — _(transfer)_
- Ik bel zo terug. — I'll call back shortly. — _(ending)_

### Set: Klein praten (Small talk that makes you sound local)
Moment: the throwaway lines Dutch people actually trade.
- Hoe gaat het ermee? — How's it going? — _(greeting)_
- Lekker weer, hè? — Nice weather, eh? — _(weather small talk)_
- Druk gehad vandaag? — Busy day? — _(chatting)_
- Fijn weekend! — Have a nice weekend! — _(parting on Friday)_
- Tot de volgende keer! — Until next time! — _(leaving)_
- Doe de groetjes! — Say hi to them! — _(signing off)_

### Set: Bij de gemeente (At the town hall)
Moment: a registration or admin appointment.
- Ik heb een afspraak om tien uur. — I have an appointment at ten. — _(arriving)_
- Ik kom me inschrijven. — I'm here to register. — _(the reason)_
- Welke documenten heb ik nodig? — Which documents do I need? — _(asking)_
- Kan ik dit ook online doen? — Can I also do this online? — _(alternatives)_
- Hoelang duurt het ongeveer? — Roughly how long does it take? — _(timing)_

### Set: In het OV (On public transport)
Moment: catching and riding the train.
- Van welk spoor vertrekt de trein? — Which platform does the train leave from? — _(at the station)_
- Is deze plek vrij? — Is this seat free? — _(sitting down)_
- Stopt deze trein in Utrecht? — Does this train stop in Utrecht? — _(checking)_
- Moet ik overstappen? — Do I have to change trains? — _(the route)_
- Sorry, mag ik er even langs? — Sorry, may I get past? — _(getting off)_

### Set: Bij de buren (With the neighbours)
Moment: the doorstep hello when you've just moved in.
- Hoi, ik ben net komen wonen. — Hi, I've just moved in. — _(introducing yourself)_
- Ik woon hiernaast. — I live next door. — _(explaining)_
- Sorry voor de herrie gisteren. — Sorry for the noise yesterday. — _(apologising)_
- Kan ik iets voor je halen? — Can I get something for you? — _(offering)_
- Tot ziens, fijne dag! — Bye, have a nice day! — _(parting)_

### Set: Hittegolf (Heatwave small talk) — seasonal
Moment: surviving a Dutch heatwave out loud. This is the worked example used for the first sample render.
_(Updated June 2026: "Wat een tropennacht" and "Het is om te smelten" removed after a native speaker said nobody actually says them. Added "Ik heb het zo warm." Do not re-add the two removed lines.)_
- Het is snikheet vandaag. — It's sweltering today. — _(snikheet = boiling hot)_
- Morgen wordt het een tropische dag. — Tomorrow will be a tropical day. — _(30 degrees or more)_
- Het is bloedheet buiten. — It's boiling hot outside. — _(literally blood-hot)_
- Ik heb het zo warm. — I'm so hot. — _(say "ik heb het warm", never "ik ben warm")_
- 40 graden? Lekker weer, hè? — 40 degrees? Nice weather, eh? — _(said at any temperature)_

---

## How a `spoken-carousel` post uses this bank

1. **Pick one set** (on-theme for the week if possible; otherwise an evergreen one). Use 4 to 8 lines; trim
   the set to the strongest if it runs long.
2. The runbook lists the exact Dutch lines to voice and names the files (`phrase-1.mp3 … phrase-N.mp3`) plus
   the one `cover.png` backdrop, with the full image prompt inline. (Use the `spoken-carousel` runbook
   template in the skill.)
3. Write the props at `remotion/props/<week>/<slug>.json` to the `PhraseReel` contract (`theme`, `handle`,
   `coverImage`, `cover`, `phrases[{file, nl, en, when}]`, `outro`, `recapTitle`).
4. Caption line 1 = a searchable keyword ("How to order at a Dutch bakery (say it out loud)"). Tell people to
   turn the sound on and repeat after Joost.
5. Pin a comment that pulls a reply ("which line will you use first?").

The human gate is unchanged: the runbook is reviewed (above all the Dutch) and set to `Status: approved`
before `/instagram-render` produces the MP4.

---

## Adding a set

A set is just one moment plus 4 to 8 natural, sayable lines, in roughly the order you would say them, each
glossed and tagged with a short `when`. Reuse the week's settings where you can so a spoken-carousel can be
the on-theme post. Keep every line common and A1/A2; verify any uncertain article or phrasing against
[woordenlijst.org](https://woordenlijst.org) or [vandale.nl](https://www.vandale.nl). Log produced sets in
the backlog's `reference_log` so a moment is not repeated week to week.
