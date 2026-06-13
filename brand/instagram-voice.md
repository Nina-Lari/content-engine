# Instagram Voice & Editorial Lessons

Brand-specific voice, tone, and editorial decisions for **every** DutchwithJoost Instagram post. The `/instagram-content` skill reads this on every run (plan, batch, refine), alongside `brand-kit.md`. The brand kit holds the *visual + asset* identity (style block, Joost reference, voices, editor). This file holds the *editorial* identity: how we sound, which feelings we name, and the per-format calls we have locked in from real feedback.

Keep it tight — one principle per line. This loads on every run, so an essay becomes context bloat.

> **Not duplicated here:** the anti-slop rules in `.claude/rules/writing-quality.md` (prohibited words, no em-dashes, no semicolons) and the platform mechanics in the bundled `instagram-playbook.md` still apply. This file is brand taste layered on top of those, not a replacement.

---

## Tone

- Warmth and humor over shame. Self-deprecating jokes about the learner's own experience are good; shame-loaded framing aimed at the learner ("feel smaller", "it's your fault") is not.
- When a moment carries a hard feeling, close on connection or good intent, not on the wound. The learner should finish a post feeling less othered, not more. _(e.g. the "switched to English" reel closes on "most people are glad to help you practice", not "it's not your fault".)_
- Write to a peer who is mid-struggle, not to a beginner who needs rescuing.

## Emotional accuracy

- Name the real feeling, not the convenient one. Do not default to **shame** for hard moments — check what the audience actually feels first.
- **"They switched to English on me"** reads as **frustration at a lost chance to practice** (plus a flash of "are they implying my Dutch isn't good enough?"), *not* shame. Shame about pronunciation sits underneath, but annoyance is on top. Address the annoyance, then reframe the switch as habit and kindness. _(Source: founder + expat conversations, June 2026.)_

## Quiz design

- Not every scenario has a right answer. When the situation is about **reflex or personal behavior**, do not force a `Correct: X`. Use a "which one is you + why" frame instead.
- Reserve correct-answer quizzes for genuine facts: grammar, etiquette, vocabulary, a concrete do/don't. _(Source: the "switched to English" quiz — behaviour in that moment is reflex, not right/wrong.)_

---

## Punctuation

- **Never use an em-dash (—) in any post.** Not in slides/props, captions, engagement prompts, or pinned comments. Rewrite as a period, comma, colon, or parentheses. _(Founder preference, June 2026; also enforced globally by `.claude/rules/writing-quality.md`. It kept slipping into rendered slides, so it is restated here as a brand hard rule.)_

## How to add a lesson

The refine mode of `/instagram-content` offers to write here after a refine session. Add a lesson only when the feedback is a **durable editorial rule**, not a one-off tweak to a single post:

- Put it under the matching heading (Tone, Emotional accuracy, Quiz design, or a new one).
- One line, plus a short italic _(why / source)_.
- Keep it brand-level and reusable: "we avoid shame", not "fix slide 3 of this post".
