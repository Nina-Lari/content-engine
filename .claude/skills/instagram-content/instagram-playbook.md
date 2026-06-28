# Instagram Playbook (2026)

The platform-mechanics and per-type rules for DutchwithJoost Instagram content. The `/instagram-content` skill reads this file and embeds the relevant slice into every post it writes, so the rules travel with each file and edits stay on-rails.

This playbook governs Instagram voice and structure. The global `.claude/rules/writing-quality.md` (anti-slop: prohibited words, the rhetorical-shape sentence tells, no em-dashes) still applies to every caption and slide, and the **Voice check** enforces it (see *Caption & voice standard* below).

---

## The runbook principle (most important)

Every post file the skill writes is a **runbook**: a numbered set of "do this, paste this, attach this" steps. The user should never have to assemble instructions, remember which file to attach, or decide settings. Each step states the exact tool, the exact prompt to paste (already filled, not a template), the exact files to attach, and the exact settings. Captions and comment seeds are paste-ready. Minimal thinking, maximal streamline.

When a step uses another AI tool (ElevenLabs, ChatGPT images, an image-to-video model) the post file contains the full prompt inline. Do not point the user at the brand kit to copy a block themselves. Inline it.

**Remotion is the only editor, and there is a human gate.** The runbook does not end in manual editing. It tells the user which assets to generate and where to save them (`remotion/public/<week>/{slug}/`), and the skill writes a props file (`remotion/props/<week>/{slug}.json`). The final reel/slides are produced by the `remotion/` project (see `remotion/README.md`), never CapCut or Canva. Critically, `batch` only writes the reviewable runbook + props — it renders nothing. The user reviews the content (above all the Dutch), drops the assets, sets `Status: approved`, and only then does the `/instagram-render` skill produce the asset. Content first, production second.

---

## The brand kit

All visual and voice identity lives in `brand/brand-kit.md`: the watercolor Style Block, the Negative prompt, Joost's locked reference, the style reference images, the ElevenLabs voices, and the subtitle look. Final assembly and slide layout are done by the Remotion project (`remotion/README.md`) using the brand palette in `brand/brand-colors.json`, not a manual editor.

This kit applies to **every visual post, not just reels.** Cheatsheet covers, quiz scenario images, and article-remix visuals all use the same Style Block and the same Joost so the whole feed looks like one brand. When the skill writes any post with an illustrated visual, it writes the full Style Block and Negative prompt text into that post's image step verbatim (the actual lines, never a placeholder or a "see brand-kit" pointer, so the prompt is copy-paste-ready) and tells the user which brand files to attach.

---

## How the 2026 algorithm distributes content

Build every post backwards from one question: **what makes someone send this to a friend who is also learning Dutch?**

Signal weighting, strongest to weakest:

1. **Sends** (DM to a friend), weighted 3-5x higher than likes. The growth engine.
2. **Saves**, weighted ~3x likes. Lasting value.
3. **Comments, but only sentence-length ones.** 200 real-sentence comments outrank 2,000 one-word replies. Emoji-only barely counts.
4. **Likes**, near the bottom. Do not optimize for these.

Other hard rules:

- **The first 3 seconds decide a Reel's fate.** Up to 50% drop off in 3 seconds. A >60% 3-second hold rate can outperform a weak hold by 5-10x. Open on the hook, never a logo.
- **Retention beats length.** A 10-second Reel at 80% retention beats a 60-second one at 30%.
- **Caption SEO replaced hashtags.** Captions are indexed (even by Google). Lead with the keyword phrase a learner would search. Weave a handful of keywords, not a hashtag wall.
- **Originality Score punishes recycled clips.** Never paste article paragraphs into a caption. Never repost watermarked clips. Transform source material.
- **New-account bias:** weight effort toward Reels. ~70% of effort on unconnected reach until the audience builds.

---

## Cadence

Default target: **8 feed posts per week, with a maximum of 2 reels + daily Stories.** That is the 7-day daily grid (a post every day for momentum and reach) plus the standing spoken-carousel as a +1, with reels capped at 2 a week. Reels are the heaviest format to produce, so they are capped and the rest of the week leans on carousels and quizzes. Drop a post before ever missing a day, but keep at least one reel.

The deeper rule, not the number: **sustainable daily consistency with no more than 2 reels a week** (reels are the discovery engine but the most work, so they are capped and the carousel and quiz formats carry the daily volume). Consistency beats volume, a missed day hurts less than a weak post, and the cadence is a dial set to the user's available time.

Default 8-post themed week the batch produces: **2 reels (fixed) + 1 spoken-carousel (fixed) + 5 carousels chosen from the full menu.** The 2 reels carry the theme; the **spoken-carousel is a standing weekly slot** (its own category, see *Spoken carousel* below); the 5 carousel slots are picked per week from any carousel type. Batch **proposes the whole lineup for you to confirm before it builds anything** (see the lineup checkpoint in the skill's batch flow). (Busy week? Trim to 7 by dropping one evergreen carousel, but keep the reels and the spoken-carousel.)

| Day | Slot | Type | Format | On-theme? | Job |
|-----|------|------|--------|-----------|-----|
| Mon | 1 | scenario-reel | Reel | yes | Reach / discovery |
| Tue | 2 | carousel (your pick) | Carousel | yes / evergreen | Saves + sends |
| Wed | 3 | carousel (your pick) | Carousel | yes / evergreen | Sentence-comments |
| Thu | 4 | scenario-reel | Reel | yes | Reach / discovery |
| Fri | 5 | carousel (your pick) | Carousel | yes / evergreen | Saves + sends |
| Sat | 6 | carousel (your pick) | Carousel | yes / evergreen | Sentence-comments |
| Sun | 7 | carousel (your pick) | Carousel | flex / evergreen | Reach + SEO |
| +1 | 8 | spoken-carousel | MP4 (spoken) | yes / evergreen | Listen + saves (a 2nd midweek post) |
| Daily | — | Stories | Stories | — | Reshare the day's post + a quiz sticker |

The **carousel menu** (any of the five carousel slots can be one of these; the spoken-carousel is its own standing slot, not in this menu):

| Type | Composition | Grounded in | On-theme or evergreen |
|------|-------------|-------------|-----------------------|
| `cheatsheet` | `Cheatsheet` | `lexicon`, `quotes` | on-theme (the phrases for the moment) |
| `quiz` | `Quiz` | `pains`, `lexicon` | on-theme (a reflex from the moment) |
| `article-remix` | `Cheatsheet` / `ScenarioReel` | an article | flex |
| `vocab-scene` | `VocabScene` | `brand/vocab-scenes.md` | on-theme (the scene **is** the setting) or evergreen |
| `particle` | `ConceptGuide` | `brand/modal-particles.md` | evergreen |
| `small-words` | `ConceptGuide` | `brand/sound-more-dutch.md` | evergreen |
| `mistake` | `ConceptGuide` | `brand/common-mistakes.md` | evergreen |
| `knm-quiz` | `Quiz` | `brand/knm-facts.md` | evergreen |

(`idiom` used to live here as a `ConceptGuide` carousel. As of June 2026 it is an **`idiom-reel`** that renders via `IdiomReel`, see *Idiom reel* below. It is a reel, so it takes a reel slot, not a carousel slot.)

One of the two reels can instead be an **`idiom-reel`** (the funny idiom format, detailed below): one idiom per week, taking a reel slot, so a week that uses it runs as one scenario-reel + one idiom-reel + one spoken-carousel + five carousels. Idioms are no longer a carousel.

**Spoken carousel (the talking carousel), a standing weekly slot.** Every week also includes **one** `spoken-carousel`: a 9:16 MP4 that pronounces a set of useful sentences out loud (cover → one card per sentence → a summary slide → CTA), rendered via `PhraseReel`. It is its **own category, separate from the carousels** (it teaches *listening and saying it back*, not reading), and it does **not** count toward the 2-reel cap because it has no image-to-video clip, so it costs like a carousel. Pick its sentence-set from `brand/spoken-carousels.md`; the props contract is in `remotion/README.md`.

Keep the week coherent: the 2 reels plus at least one or two on-theme carousels carry the moment; the remaining slots can be **evergreen reference posts** (a particle, a KNM quiz, a vocab scene) that stand alone and are useful any week. A week can be mostly on-theme or a healthy mix. Batch proposes a balance and you confirm it.

Suggested posting: one post every day, Mon through Sun, plus the standing spoken-carousel as a +1 (8 posts). Floor when busy: drop an evergreen carousel first, then a quiz, but keep at least one reel and the spoken-carousel. Never drop to zero.

## Weekly theming (theme packs)

A week is **loosely themed** around one recurring *moment or tension* a learner lives through, not a single place. The theme is the experience ("the moment they switch to English on you", "freezing under exam pressure", "small talk you can't enter at the school gate"); it plays out across many concrete **settings** (the bakery, the supermarket checkout, the pharmacy, a café, the doctor's reception, the school gate, a phone call). The two reels plus one or two on-theme carousels orbit that one moment; the remaining carousel slots can be **evergreen reference posts** (a particle, an idiom, a KNM quiz, a vocab scene) or an off-theme remix for a wider discovery net. A vocab scene staged in the theme's setting counts as on-theme.

Stage each on-theme post in a **different setting** within the theme. On-theme posts under one *moment* but across different *places* is variety, not repetition: it is truer to life (the experience really does happen everywhere) and it gives distinct profile tiles instead of one picture posted several times. The anti-pattern is collapsing a theme onto a single place — six bakery shots — which is what makes a grid look duplicated (see *Feed-grid differentiation* below).

Why theme-first:
- **Topic authority:** repeating one *moment* across a week sharpens the account's identity for the algorithm and for searchers, without making the grid look duplicated.
- **Batching:** one theme = one production sitting. The reels' scene images, the cheatsheet covers, and the quiz scenario images come out of the same ChatGPT session — same Joost, same style references, same palette — but **a different setting and shot each time**, so the on-theme posts never open on one identical image (see *Feed-grid differentiation* below).
- **Within-week funnel:** the reels hook, the cheatsheets earn the save ("the exact phrases for that moment"), the quizzes earn the comment. Posts reference each other and drive profile visits.

Repetition is a feature here, not a bug: organic reach per post is low, so orbiting one *moment* is how you reach the followers who missed the first post. But that is *topical* repetition. *Visual* repetition works against you: the on-theme posts opening on the same image make the profile grid look duplicated and train the scroll to skip the repeats as déjà vu. Keep the moment tight and the opening frames distinct.

### Feed-grid differentiation (don't ship a duplicated grid)

The first frame of each reel and slide 1 of each carousel are what land on the profile grid and in the feed. If the on-theme posts all open on the same shot, the grid reads as one picture posted several times. Three levers, in order of leverage:

1. **Vary the setting within the situation.** The situation is a *moment* ("they switch to English"), not a *place*. It happens at the bakery, the supermarket checkout, the pharmacy, a café, a doctor's reception. Stage each on-theme post somewhere different. Same Joost, same style references, same palette keep it unmistakably one brand; the changed backdrop gives distinct tiles and is truer to life.
2. **Vary the shot when you do reuse a setting.** If two posts share a place, change the camera: wide establishing vs. medium two-shot vs. tight reaction close-up, or switch POV (Joost's side of the counter vs. the customer's). Re-rolling the *same* prompt for a near-identical image is the weakest option — vary the shot, not the seed.
3. **Lean on the graphic layer.** Remotion already gives each type a distinct cover treatment so the tiles differ even on a shared base image: the reel cover is photo-forward (the scene fills the frame, hook on a scrim), the cheatsheet cover is the bright "guide" tile (an image band over a solid colour panel that holds the headline), the quiz cover is the dark "question" tile (heavy scrim, centred question, gold QUIZ marker), the concept-guide cover carries a gold **variant marker** (LITTLE WORD / COMMON MISTAKE / DUTCH IDIOM / SOUND MORE DUTCH) so particles, mistakes, idioms, and small-words read apart from each other and from cheatsheets, and the vocab-scene is a labeled poster that looks like nothing else on the grid. Keep choosing cover headlines and kickers that read differently at thumbnail size.

When batch writes the on-theme image prompts, give each a different setting or shot by default. Only collapse two onto one matched shot if the user explicitly asks for a deliberately matched grid row.

The plan-mode backlog is organized as **theme packs** (one pack = one theme's week of ideas, staged across settings). But approval status lives on individual posts, so batch composes a week from whatever you queue: a whole pack for a themed week, or posts cherry-picked across packs for a mixed week.

---

## Caption formula (all types)

1. **Line 1 = the keyword phrase a learner would search**, written as a human hook. The only line most people see before "more".
2. **2-4 lines of value** that pay off the hook. Specific, useful.
3. **A soft CTA tied to a send or save**, not a like. "Save this before your next trip to the {place}." / "Send it to whoever you're learning with."
4. **The standard bio CTA line, verbatim on every post:** `Start learning Dutch with Joost: link in bio.` Instagram captions carry no clickable link, so it points readers to the profile bio. Place it after the save/send CTA, before the woven keywords. Same line every post.
5. **Keywords woven naturally** (3-6), no hashtag wall.

## Hook formulas (cover slide / first frame / caption line 1)

- **The freeze-up:** "How to {do thing} in Dutch without freezing up."
- **The mistake:** "The Dutch phrase everyone gets wrong at the {place}."
- **The shortcut:** "{N} things to say at the {place} (that actually sound Dutch)."
- **The gap:** "You passed A2 but still can't {do real thing}? Here's why."
- **The mini-quiz:** "Could you order this in Dutch? Most people pick the wrong one."

Cover headline: 5-8 words, largest text, readable in under 2 seconds.

**These are angles, not paste-shapes.** The formulas above are starting points for *what* to say, not templates to drop in verbatim. Pasted literally they read as AI: "The Dutch phrase everyone gets wrong at the {place}" is a curiosity-gap, "{N} things that actually sound Dutch" is a listicle shape. Rewrite each in a human voice and run it through the Voice check. Open the caption on the concrete moment (the coffee going to English), not an abstract thesis about it.

---

## Caption & voice standard (anti-slop)

The English in the content is on display as much as the Dutch. It must sound like one person talking to a friend, not a brand performing. This standard is embedded in every post's rules block and checked before any post is finalized, the same shape as the Dutch standard. The authority is two files and the explicit check loads both: `.claude/rules/writing-quality.md` → *Rhetorical-shape tells* (the structural AI tells and their fixes) and `brand/instagram-voice.md` → *Structural slop* (the Instagram-specific emphasis and brand before/afters).

**The slop is sentence shape, not vocabulary.** A caption can contain zero banned words and still read as AI because of its *architecture*: antithesis ("not X, but Y"), forced rule-of-three lists, a grand abstract opener and a fortune-cookie closer wrapped around a concrete middle, balanced epigrams, curiosity-gap hooks ("here's why"). The free-prose surfaces (caption, cover hook, slide "when to use it" subheads, engagement prompt, reel hook/outro, pinned comment) are where it pools. Dutch dialogue and NL/EN phrase pairs are usually clean because they are grounded and short.

**Two rules govern the fix:**
- **Density, not presence.** Each shape appears in good human writing alone. Flag a surface when two or three stack, or the same shape repeats. Do not flatten every sentence.
- **The read-aloud test.** Say it as if to one friend over coffee. If it sounds like a slogan or a TED talk, rewrite it flatter and more concrete: one plain sentence over a balanced or clever one, open on the moment, close on a concrete detail.

**The Voice check (the explicit pass).** Run this over every English free-prose surface before a post reaches `Status: approved`. It runs automatically inside batch and refine, and on demand via `/instagram-content check`, alongside the Dutch check. Rewrite what stacks or trips the read-aloud test, then record a one-line **Voice check** note in the runbook so the reviewer can see it ran.

---

## Dutch language standard (applies to every Dutch word in every post)

The Dutch in the content is the product on display. It must be correct, the right level, and genuinely usable. This standard is embedded in every post's rules block and checked before any post is finalized. Two reference files in `brand/` are the authority and the explicit check loads both: `brand/dutch-grammar.md` answers "is it correct?" (word order, conjugation, de/het, register, the error checklist) and `brand/dutch-level-guide.md` answers "is it easy enough?" (the A1 target, the three difficulty axes, the rewrite ladder).

**Level: A1 by default, light A2 only when the scenario truly needs it.**
- Short sentences, mostly under ~7 words.
- High-frequency everyday words tied to the actual scene.
- Simple present tense, common modals (kan, mag, wil, moet), basic questions (wat, waar, hoe, hoeveel), basic V2 word order and simple inversion.
- Avoid subordinate-clause stacking, low-frequency vocabulary, idioms, and long compound sentences.
- One new structure per post, not five. Do not overload.
- A phrase may reach into A2 only when the real situation demands it, and always with the English translation.

**Grammatically correct, always. Non-negotiable.**
- Correct de/het, correct conjugation and word order, register kept consistent within a scene.
- Register by context: "u" with strangers and services (shop, doctor, officials), "je" with friends and peers. The brand addresses the viewer as "je" in captions and on-screen text.
- The safety rule: when unsure of a word's gender or a construction, rewrite to something you are certain is correct. Simpler-but-correct beats impressive-but-wrong.
- Before writing out any post, do a correctness pass over every Dutch line (articles, conjugation, word order, register). Each post flags its Dutch for a quick native check (Joost) before posting.

**Real and usable. The value test.**
- Every phrase must pass: "would a learner actually say this, in this situation, tomorrow?" No textbook-artificial lines (the "my elephant is green" trap the interviews complain about).
- Always pair Dutch with the English translation and a one-line "when to use it." The viewer should finish able to say something new in a real scenario.

**Sanctioned exceptions (some types teach an above-A1 item on purpose).** A few types exist to teach something above A1 by design: `particle` (the particle's nuance), `small-words` (the stance/filler word), `idiom` (the figurative expression), `knm-quiz` (an A2 question + options and the civic term), and `mistake` (the wrong sentence being corrected). For these, do **not** rewrite the taught item down to A1 out of existence. The carve-out has four conditions: (1) only the target item is above A1, everything around it stays A1; (2) it is always glossed in English with a plain explanation; (3) A2 surrounding language still needs a one-line reason and anything above A2 around it is still rewritten; (4) the Dutch-check table marks it as a sanctioned exception, not a missed flag. Full rule and per-type table: `brand/dutch-level-guide.md` → *Sanctioned exceptions*. `vocab-scene` is **not** an exception: its labels are concrete A1 nouns.

**The Dutch language check (the explicit pass).**
Run this over every Dutch line (the `nl` strings in props and any Dutch in the runbook) before a post reaches `Status: approved`. It runs automatically inside batch and refine, and on demand via `/instagram-content check`. For each line:
- **Correctness:** check it against the grammar error checklist in `brand/dutch-grammar.md` (word order, conjugation and the `-t`/kofschip rules, de/het, niet/geen, register consistency).
- **Level:** score it A1 / A2 / above A2 against the three difficulty axes in `brand/dutch-level-guide.md` (vocabulary, grammar structure, sentence length).
- **Fix:** rewrite anything above A1 down toward A1 using the rewrite ladder. Keep A2 only when the scene truly needs it, and then with a one-line reason. Anything scored above A2 must be rewritten before approval, **unless it is the sanctioned taught item for this post type** (an idiom, a particle, a civic term, the wrong line in a `mistake` post), in which case keep it, gloss it, and mark it as a sanctioned exception in the table.

Write the result into the runbook as a per-line verdict table so the reviewer can scan it at the gate, and keep the checked Dutch in sync with the props JSON:

| # | Dutch line | Level | Correct? | Note |
|---|-----------|-------|----------|------|
| 1 | Mag ik het in het Nederlands proberen? | A1 | yes | modal + infinitive, all high-frequency |
| 2 | {line} | A2 | yes | kept at A2: perfect tense needed for this meaning |

The default expectation is that the whole post reads at A1.

---

## Per-type rules

### Scenario reel (the moat)

Two characters speaking Dutch through a real situation. Joost is always one of them (locked via the brand kit); the other is invented per reel. Native, original, and literally the product's pedagogy.

**Default is Tier 1: one composition, no lip-sync, subtitle-led.** This is the least-work path and it is genuinely good for language content. Reserve heavier tiers for hero reels.

| Tier | Work | What the runbook produces |
|------|------|---------------------------|
| **1 (default)** | Lowest | Joost sheet (reused) + 1 two-shot scene image, **1** silent image-to-video clip (**Seedance 1 Pro**, begin frame = end frame = the scene image), voiceover + subtitles. No lip-sync; mouths stay still; the clip loops on its own end frame and Remotion loops it to cover the dialogue. |
| 2 | Medium | Per-speaker framing + model lip-sync (e.g. Kling) when talking mouths are wanted |
| 3 (hero) | High | 3-5 keyframes, camera variety |

Production flow (output as a 4-step runbook, never a finished video):

1. **Voice (ElevenLabs):** render each Dutch line separately so the user gets per-line durations. Joost uses his locked voice; the second character is any Dutch voice.
2. **Scene image (ChatGPT / gpt-image-1):** one 9:16 two-shot. Attach the two style references and the Joost reference. Write the full Style Block and Negative prompt text into the prompt verbatim (never a placeholder). Reproduce Joost exactly and invent the second character, but describe each by **position in the frame** ("Joost behind the counter on the left", "a woman on the right") rather than by name — names confuse image models. Keep the bottom third clear for subtitles, no text in the image.
3. **Video (image-to-video):** use **Seedance 1 Pro** — the proven model for this style (full recipe and settings live in `brand/brand-kit.md` → Motion). Reserve premium lip-sync models (Kling, Veo, Sora) for Tier 2+, when talking mouths are actually wanted. Upload the scene image as **both the begin frame and the end frame** (Seedance 1 Pro takes both; end frame = begin frame makes the clip return to the scene, so you never write loop wording into the prompt). Settings: 9:16, 10s, 720p. The prompt describes body-language motion and camera only (the image carries the style), referring to characters by position; mouths stay still and never talk (the clip is silent and there is no lip-sync, so any mouth movement just desyncs from the voiceover). Generate exactly **one** 10s clip — never a second one; Remotion loops it to fill the dialogue, however long. Silent.
4. **Render (Remotion):** the skill writes the props; Remotion loops the clip to cover the dialogue, lays the voice lines on with auto-detected timing (it measures each audio file itself), burns in Dutch + English subtitles, emphasizes the recovery line, adds the 3-second hook overlay and a branded outro, and exports 9:16 with audio. No CapCut.

Why no lip-sync by default: model lip-sync targets one face per clip and is tuned for realistic faces, so a single two-shot of two stylized characters confuses it. Dropping lip-sync removes the fragile step and the subtitles carry comprehension anyway. Offer Tier 2 only when asked.

Keeping mouths shut (the lesson that took testing): the clip is silent and Remotion times the voiceover, so any talking motion just desyncs. The instinct is to stuff a negative prompt with "no talking, no lip sync, no mouth movement, no open mouth" — that **backfires**: naming those actions makes Seedance perform them, and Seedance 1 Pro has no negative-prompt field anyway. What works instead: **lead the main prompt with the positive closed-mouth state**, per character by position ("her mouth and lips remain unchanged and closed for the entire video; her face stays still"; "Joost keeps a soft, natural closed-mouth expression, lips closed the whole time"), then add **one short calm clause** of don'ts only ("No speech-like mouth movement, no mouth opening, no jaw motion") — never a long list. The full proven prompt shape is in `brand/brand-kit.md` → Motion.

Looping: Seedance 1 Pro **exposes both a begin frame and an end frame**, so set both to the scene image — the clip returns to the scene on its own and loops cleanly with no loop wording in the prompt. Remotion then loops that clip automatically to fill the dialogue, so the visual repeats while the voiceover plays once. This gives a tighter native loop seam than the old begin-and-end-at-rest prompting trick.

Dialogue must follow the Dutch language standard above (A1 default, always grammatically correct, usable). Ground scenarios in `jtbd` and `quotes` from insights (situations learners actually named).

### Cheatsheet (carousel)

The save-and-send workhorse. People save phrase lists and send them to a partner who is also learning.

- Cover = a hook headline (5-8 words), not a title. The cover is an **illustrated, on-brand image** (Joost at the {place}) with the headline overlaid by Remotion (so leave text out of the generated image): the runbook gives a ready ChatGPT image prompt with the full Style Block and Negative prompt text written in verbatim and the brand files to attach.
- Phrase slides = NL phrase, EN translation, and _when to use it_. Ground phrases in the customer `lexicon` and `quotes`. 6-10 slides, one idea each, readable in 2 seconds. Remotion renders these from the props (crisp Dutch text); the runbook supplies the content.
- Last slide = an explicit save + send CTA.
- Caption per the formula. Comment seed = a question that pulls a sentence reply.

### Quiz (multiple choice)

Drives comments, but **bare "A or B?" prompts are flagged as engagement bait in 2026 and get suppressed.** Design the question so the answer needs a _reason_. That converts one-word bait into sentence-length comments, which the algorithm rewards.

- Anchor the question in a real scenario. Use an **on-brand illustrated scenario image** for the hook (runbook supplies the ChatGPT prompt + brand attachments).
- 3 options, one correct, plausible distractors from real learner mistakes (mine `pains` and `lexicon`).
- **The engagement prompt must ask for a reason or personal angle:** "Which did you pick, and what tripped you up?" Never "Comment A or B." Never "Tag a friend to enter."
- Provide the reveal (correct answer + one-line teach) for slide 2 or a pinned comment.

### Article remix

Transform an existing article into a native Instagram artifact. **Never paste paragraphs** (Originality Score).

- Pull _one_ angle from the article, not a summary.
- Choose a format: carousel or reel. Then follow that type's rules and brand-kit visuals.
- Reuse the article's primary keyword (from its `_brief.json`) as caption line 1 for SEO continuity.

### Concept-guide carousels (particle, small-words, mistake)

All three are **evergreen** teaching carousels rendered by the one `ConceptGuide` composition (the post `type` sets the `variant`, which sets the gold cover marker). They are not tied to the week's moment; they ride a themed week as standalone value. (Idioms were a fourth variant here; as of June 2026 they are their own **idiom reel**, see below.) Shared rules:

- **Cover** = a hook headline (5-8 words) over a Joost illustration, the same cover treatment as the cheatsheet (Joost in the upper half, 4:5, headline rendered by Remotion, no text in the generated image). The runbook gives a ready ChatGPT prompt with the full Style Block + Negative prompt inline.
- **Intro slide (optional)** = "what is it / what's the difference"; used by `particle` and `mistake`, skipped for `small-words` and `idiom` where the cards speak for themselves.
- **Cards** = 4-8, one concept each (`term` + optional `sub` + `meaning` + one or two NL/EN `examples` + a "when to use it" `note`). Pulled from the type's bank, never invented.
- **Dutch:** the taught item (the particle, the idiom, the stance word, the `❌` line) is the sanctioned above-A1 exception; every example sentence around it stays A1 and glossed (see the Dutch standard's *Sanctioned exceptions*).
- **Caption** per the formula, line 1 a searchable keyword. **Comment seed** pulls a sentence reply.

**Particle** — one particle per post (`nog`, `toch`, `even`), from `brand/modal-particles.md`. The intro names what it does and that you can't translate it, you learn it. Cards = its senses/uses, two examples each. Cover marker: LITTLE WORD.

**Small words** — a set of 5-7 small stance/filler words that share a job ("5 ways to agree", "little words Dutch people add"), from `brand/sound-more-dutch.md`. One card per word: word + one-line meaning + one example. Cover marker: SOUND MORE DUTCH.

**Mistake** — one confusable pair or common error (`niet` vs `geen`, `kennen` vs `weten`, word order), from `brand/common-mistakes.md`. Teaching, not a quiz: the intro states the one-line difference, then a card per side (the rule + examples) and a "quick test" card. Show the contrast with `✅` / `❌`. Cover marker: COMMON MISTAKE.

### Idiom reel (renders via `IdiomReel`)

The funny idiom format, a **reel**, not a carousel. **One idiom per reel, one per week.** A Dutch speaker uses an idiom naturally in a short conversation; the learner pictures it LITERALLY (a timed cutaway to a full-frame literal illustration, framed as a daydream with a "WHAT I PICTURED" badge); brief confusion; then the real meaning lands (spoken by the Dutch speaker, or by us in the outro). Pulled from `brand/dutch-idioms.md`, one idiom deep. The sequence can vary; the literal-imagination is the visual punchline.

- Pick an idiom with a **strong, drawable literal** (the monkey out of the sleeve, raining pipe stems). The more visual the literal, the better the gag.
- The idiom is the sanctioned above-A1 payload, always glossed (literal + meaning). Everything around it (the reactions, the explanation) stays A1.
- Assets: a 9:16 conversation clip (the two-shot, looped, like a scenario reel) AND a 9:16 full-frame literal image for the cutaway. In props, mark the learner's confused line `imagine: true` to trigger the cutaway, and the meaning line `recovery: true` for the gold reveal.
- The outro card shows the idiom, its literal, and its real meaning. Caption line 1 = a searchable keyword ("Dutch idioms"). Comment seed pulls a reply ("which idiom made no sense at first?").
- Keep one recurring learner character across the series so it reads as a running bit. Log each idiom in the backlog `reference_log` so the series never repeats one.

### Vocab scene

A labeled illustration of one setting, rendered by `VocabScene` (Remotion draws the labels; the image is generated label-free). The scene **is** a setting, so it can be the on-theme post for that week's place, or an evergreen "a day at {place}".

- **Image** = a label-FREE 4:5 illustration with breathing room around each object and **no text in it** (the runbook's prompt says so explicitly, full Style Block + Negative prompt inline).
- **Labels** = 8-12 concrete A1 items from `brand/vocab-scenes.md`, each `{nl, en, x, y, point}`. Positions are authored against the generated image (Studio is the fastest way); keep labels clear of the top title band.
- **Slides** = the labeled poster + optional recap list + CTA.
- **Dutch:** concrete A1 nouns with correct articles (no carve-out). A wrong `de`/`het` on a rendered label is exactly what natives catch, so verify uncertain ones.
- **Caption** line 1 a searchable keyword ("Dutch kitchen vocabulary"). **Comment seed:** "which word is new to you?"

### KNM quiz

An inburgering knowledge quiz, rendered by the existing `Quiz` composition with a real `correct` answer (KNM facts have right answers, so this is the sanctioned correct-answer quiz type, unlike the reflex quizzes that omit `correct`).

- **Source:** one indicator from `brand/knm-facts.md`. Never invent a civic fact; pull it from there. (Volatile `⚠️` facts: re-check the source before posting.)
- **Language:** the question and the three options are in **simple Dutch (A2)** with the **English under each** (`questionNl` / `questionEn`, and `textEn` on each option). The civic term is the sanctioned above-A1 item; keep the framing A2 and glossed.
- **One question, three options, one correct**, with plausible distractors. The reveal teaches the fact in one line. Set `correct` in props.
- **Scenario image:** Joost in the relevant civic situation (at the huisarts, the gemeente, reading a huurcontract); the same on-brand illustrated cover the reflex quiz uses. For an abstract fact with no natural scene, a simple Joost-at-a-desk works.
- **Engagement prompt:** still ask for a reason or a guess, never bare A/B ("which did you pick, did the real answer surprise you?"). **Caption** line 1 a searchable keyword ("inburgering exam question", "KNM practice").

---

## Stories

Stories warm the existing audience; they do not drive new reach. Daily:

- Reshare the day's feed post with a one-line nudge.
- Run a quiz sticker (reuse that week's quiz question). Low-effort engagement that also surfaces what learners struggle with.
