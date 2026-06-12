# Instagram Playbook (2026)

The platform-mechanics and per-type rules for DutchwithJoost Instagram content. The `/instagram-content` skill reads this file and embeds the relevant slice into every post it writes, so the rules travel with each file and edits stay on-rails.

This playbook governs Instagram voice and structure. The global `.claude/rules/writing-quality.md` (anti-slop, prohibited words, no em-dashes) still applies to every caption and slide.

---

## The runbook principle (most important)

Every post file the skill writes is a **runbook**: a numbered set of "do this, paste this, attach this" steps. The user should never have to assemble instructions, remember which file to attach, or decide settings. Each step states the exact tool, the exact prompt to paste (already filled, not a template), the exact files to attach, and the exact settings. Captions and comment seeds are paste-ready. Minimal thinking, maximal streamline.

When a step uses another AI tool (ElevenLabs, ChatGPT images, Kling) the post file contains the full prompt inline. Do not point the user at the brand kit to copy a block themselves. Inline it.

---

## The brand kit

All visual and voice identity lives in `brand/brand-kit.md`: the watercolor Style Block, the Negative prompt, Joost's locked reference, the style reference images, the ElevenLabs voices, the editor (CapCut), and the subtitle policy.

This kit applies to **every visual post, not just reels.** Cheatsheet covers, quiz scenario images, and article-remix visuals all use the same Style Block and the same Joost so the whole feed looks like one brand. When the skill writes any post with an illustrated visual, it inlines the Style Block and Negative prompt into that post's image step and tells the user which brand files to attach.

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

Default target: **4 feed posts per week (about 2-3 reels + 1-2 carousels) + daily Stories.** This is the balanced starting cadence: the growth engine (reels) keeps running and it stays sustainable solo. Scale to 5 once the runbooks prove fast; drop to 3 (2 reels + 1 carousel) before ever missing a week.

The deeper rule, not the number: **sustainable consistency with at least 2 reels a week** (reels are the discovery engine). Consistency beats volume, a missed week hurts less than a weak post, and the cadence is a dial set to the user's available time.

Default 4-post themed week the batch produces:

| Slot | Type | Format | On-theme? | Job |
|------|------|--------|-----------|-----|
| 1 | scenario-reel | Reel | yes | Reach / discovery |
| 2 | cheatsheet | Carousel | yes | Saves + sends |
| 3 | quiz | Carousel or single | yes | Sentence-comments |
| 4 | article-remix | Reel (default) or carousel | flex (off-theme ok) | Reach + SEO |
| Daily | Stories | Stories | — | Reshare the day's post + a quiz sticker |

Suggested posting days: Mon, Tue, Thu, Fri (spread, not back-to-back). Floor when busy: 3 posts (drop the flex). Never drop to zero.

## Weekly theming (situation packs)

A week is **loosely themed** around one real-life situation (the bakery, a doctor's visit, small talk at work, the supermarket). The three on-theme posts (reel, cheatsheet, quiz) orbit that situation; the flex post (usually the article remix) can go off-theme for variety and a wider discovery net.

Why loose theming:
- **Topic authority:** repeating a situation across a week sharpens the account's identity for the algorithm and for searchers.
- **Batching:** one situation = one production sitting. The reel's scene image, the cheatsheet cover, and the quiz scenario image come out of the same ChatGPT session and the same setting.
- **Within-week funnel:** the reel hooks, the cheatsheet earns the save ("the exact phrases from that scene"), the quiz earns the comment. Posts reference each other and drive profile visits.

Repetition is a feature here, not a bug: organic reach per post is low, so orbiting one situation is how you reach the followers who missed the first post.

The plan-mode backlog is organized as **situation packs** (one pack = one themed week's ideas). But approval status lives on individual posts, so batch composes a week from whatever you queue: a whole pack for a themed week, or posts cherry-picked across packs for a mixed week.

---

## Caption formula (all types)

1. **Line 1 = the keyword phrase a learner would search**, written as a human hook. The only line most people see before "more".
2. **2-4 lines of value** that pay off the hook. Specific, useful.
3. **A soft CTA tied to a send or save**, not a like. "Save this before your next trip to the {place}." / "Send it to whoever you're learning with."
4. **Keywords woven naturally** (3-6), no hashtag wall.

## Hook formulas (cover slide / first frame / caption line 1)

- **The freeze-up:** "How to {do thing} in Dutch without freezing up."
- **The mistake:** "The Dutch phrase everyone gets wrong at the {place}."
- **The shortcut:** "{N} things to say at the {place} (that actually sound Dutch)."
- **The gap:** "You passed A2 but still can't {do real thing}? Here's why."
- **The mini-quiz:** "Could you order this in Dutch? Most people pick the wrong one."

Cover headline: 5-8 words, largest text, readable in under 2 seconds.

---

## Dutch language standard (applies to every Dutch word in every post)

The Dutch in the content is the product on display. It must be correct, the right level, and genuinely usable. This standard is embedded in every post's rules block and checked before any post is finalized.

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

---

## Per-type rules

### Scenario reel (the moat)

Two characters speaking Dutch through a real situation. Joost is always one of them (locked via the brand kit); the other is invented per reel. Native, original, and literally the product's pedagogy.

**Default is Tier 1: one composition, no lip-sync, subtitle-led.** This is the least-work path and it is genuinely good for language content. Reserve heavier tiers for hero reels.

| Tier | Work | What the runbook produces |
|------|------|---------------------------|
| **1 (default)** | Lowest | Joost sheet (reused) + 1 two-shot scene image, 1-2 silent Kling clips, voiceover + subtitles. No lip-sync. |
| 2 | Medium | Per-speaker framing + Kling lip-sync when talking mouths are wanted |
| 3 (hero) | High | 3-5 keyframes, camera variety |

Production flow (output as a 4-step runbook, never a finished video):

1. **Voice (ElevenLabs):** render each Dutch line separately so the user gets per-line durations. Joost uses his locked voice; the second character is any Dutch voice.
2. **Scene image (ChatGPT / gpt-image-1):** one 9:16 two-shot. Attach the two style references and the Joost reference. Inline the Style Block and Negative prompt. Reproduce Joost exactly, invent the second character, keep the bottom third clear for subtitles, no text in the image.
3. **Video (Kling, image-to-video):** upload the scene image as the start frame, 9:16, 10s, relevance biased high to the image. The prompt describes motion and camera only (the image carries the style). If dialogue runs past 10s, a second 10s clip from the same image. Silent.
4. **Assemble (CapCut):** stitch clips, lay the voiceover lines on, add the hook text overlay for the first 3 seconds, burn in Dutch + English subtitles, export 9:16.

Why no lip-sync by default: Kling lip-sync targets one face per clip and is tuned for realistic faces, so a single two-shot of two stylized characters confuses it. Dropping lip-sync removes the fragile step and the subtitles carry comprehension anyway. Offer Tier 2 only when asked.

Dialogue must follow the Dutch language standard above (A1 default, always grammatically correct, usable). Ground scenarios in `jtbd` and `quotes` from insights (situations learners actually named).

### Cheatsheet (carousel)

The save-and-send workhorse. People save phrase lists and send them to a partner who is also learning.

- Cover = a hook headline (5-8 words), not a title. Make the cover an **illustrated, on-brand image** (Joost at the {place}) so the feed stays consistent: the runbook gives a ready ChatGPT image prompt with the Style Block inlined and the brand files to attach.
- Phrase slides = NL phrase, EN translation, and _when to use it_. Ground phrases in the customer `lexicon` and `quotes`. 6-10 slides, one idea each, readable in 2 seconds. (Lay these out in Canva or CapCut; the runbook supplies the text.)
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

---

## Stories

Stories warm the existing audience; they do not drive new reach. Daily:

- Reshare the day's feed post with a one-line nudge.
- Run a quiz sticker (reuse that week's quiz question). Low-effort engagement that also surfaces what learners struggle with.
