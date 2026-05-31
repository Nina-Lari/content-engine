# ICP Interview Guide (30 minutes)

A script for interviewing non-EU expats about learning Dutch for inburgering. Every block is built to fill a specific field in the `/extract-insights` schema, so the transcript turns cleanly into structured intelligence. Recruiting and screening live in `recruiting.md`.

The goal is not to validate Dutchwithjoost. It is to understand the problem so well, in their exact words, that the content writes itself. Talk for less than a third of the time.

---

## The five rules that make or break the interview

These are the difference between a transcript full of gold and one full of polite nothing.

1. **Ask about the past, not the future.** "Tell me about the last time you tried to speak Dutch and froze" beats "Would you use a speaking app?" People are honest about what they did and terrible at predicting what they'll do.
2. **Never pitch.** Do not mention Dutchwithjoost, do not describe a solution, do not hint at one. The moment they think you're selling, they start being polite. If they ask what you're building, say "I'll tell you after, I don't want to bias your answers."
3. **Dig for the cost and the emotion.** A pain without a cost is a comment. After every problem, ask "what did that cost you?" and "how did that feel?" The cost (money, time, missed job, isolation) and the feeling (shame, fear, fraud) are what make content land.
4. **Shut up and let silence work.** When they pause, count to three before you speak. The best quotes come right after the silence they're tempted to fill.
5. **Capture their exact words.** Do not paraphrase in your head. The odd phrases ("cheat sheet to the exam", "my narrow world became my new world") are the ones that become headlines and originality nuggets. The transcript keeps them for you; your job is to ask the question that surfaces them.

Avoid leading questions ("Don't you hate memorization?"). Ask neutral ones ("What was studying with that course actually like?") and let them supply the verdict.

---

## Block 0 — Setup (2 min)

- Thank them, set the frame: "I'm trying to understand what learning Dutch for inburgering is really like. There are no right answers, I just want your honest story."
- Consent + recording line (see `recruiting.md`).

---

## Block 1 — Who they are and where they're at (3 min)
*Feeds: `call_meta`, persona classification*

- Where are you from, and how long have you been in the Netherlands?
- What's your situation with the inburgering exam right now — do you need to pass it, are you preparing, did you already pass?
- At what level (A2 or B1)? Is there a deadline hanging over you?
- What visa are you on, and what's the plan — permanent residence, citizenship?
- What do you do for work, and who's at home with you? (Dutch partner? Kids? Dutch in-laws?)

Keep this fast. You're locating them on the persona map (Pattern A/B/C/D), not interviewing yet.

---

## Block 2 — The journey so far (8 min)
*Feeds: `jtbd`, `workflow_reality`, `alternatives_and_competitors`*

This is the spine. Get them telling the story of how they've actually tried to learn, step by step.

- **Walk me through how you've tried to learn Dutch, from the beginning.** What was the first thing you did?
- Then what? What did you try next, and why did you switch?
- For each thing they name (course, app, class, tutor, book, YouTube, partner), probe:
  - What was it actually like to use? Walk me through a typical session.
  - What did it cost you — money and time?
  - What made you stop, or keep going?
  - What did it do well? What did it not do?
- When you were choosing, what options did you compare? What made you pick one over another?
- Is there anything you're doing now to fill the gaps — workarounds, hacks, things you do on your own?

Probes that open people up: "What happened next?" / "Why did you do it that way?" / "Tell me more about that part."

Every named tool becomes an `alternatives_and_competitors` entry with sentiment. Every "I switched because..." is `brittleness`. Every workaround is gold.

---

## Block 3 — The moment it broke (8 min)
*Feeds: `pains` (trigger, cost, urgency, verbatim), `quotes`, the emotional layer*

This is where the most quotable, most usable material comes from. Get specific past moments, not general opinions.

- **Tell me about the last time you tried to speak Dutch and it didn't go the way you wanted.** What happened?
  - Where were you? Who were you with? What did you do after?
  - How did that feel in the moment?
- Has there been a moment that really stuck with you — at work, with family, in a shop, at an appointment — where not speaking Dutch cost you something?
  - What did it cost you? What did you miss out on?
- When you finished a course or passed a test but still couldn't do what you hoped, what did that feel like?
- What do you avoid now because of the language? Walk me through a situation you steer around.

Do not rush this block. Follow the emotion. If they mention shame, switching to English, feeling like an outsider, feeling like a fraud, or avoiding things — slow down and ask them to tell you more. These are the exact pains in `strategy/knowledge-base.md`, and you want to know whether *this* person hits them too, in their own words.

---

## Block 4 — What they actually want (4 min)
*Feeds: `jtbd.desired_outcome`, `lexicon.value_language`, identity and belonging motivations*

- If you woke up tomorrow able to speak Dutch comfortably, what would actually change in your life? Be specific.
- Beyond the visa or the certificate — why does speaking Dutch matter to you personally?
- When you picture yourself having "made it" with Dutch, what does that look like? What are you doing?
- What would "this was worth it" look like to you?

Listen for the words they use for the good outcome ("feel at home", "deserve the passport", "actually belong"). Those become `value_language` and the aspirational language in content.

---

## Block 5 — How they search and decide (3 min)
*Feeds: `keyword_candidates`, `lexicon.category_terms`, buying signals*

- When you were looking for a way to learn, what did you literally type into Google? Try to remember the actual words.
- Where did you go to figure out if something was any good — reviews, Reddit, friends, the group?
- What made you trust an option? What made you suspicious of one?
- What almost stopped you from buying, or made you hesitate?
- If something had been exactly right for you, what would it have needed to do or say to win you over on the spot?

The literal search phrasing is rare and valuable — it's the closest thing to real keyword data you can get without a tool, and it feeds `keyword_candidates` directly.

---

## Block 6 — Wrap (2 min)

- Is there anything I should have asked about but didn't? Anything about this whole experience that we haven't covered?
- (This open question often surfaces the single best insight of the call. Leave room for it.)
- Who else do you know who's going through this that I should talk to? (Referral ask — your cheapest source of the next interview.)
- Thank them, confirm the gift card, and only now answer any "so what are you building?" questions.

---

## Capturing and processing the interview

**Record and transcribe:**
- Use Zoom, Google Meet, or a phone call with any of: Fathom, tl;dv, Otter, or a local Whisper transcription. Any format works — `/extract-insights` handles raw exports, Fathom transcripts, or rough notes.
- Make sure the transcript has **speaker labels** (Interviewer / the person). The extractor relies on dialogue structure.

**Save it:**
- Path: `customer-intelligence/transcripts/{pseudonym}_{YYYY-MM-DD}.md`
- Use a pseudonym, never a real name, so anonymization holds from the first save.

**Process it:**
1. Run `/extract-insights customer-intelligence/transcripts/{file}`. It produces `customer-intelligence/insights/{pseudonym}_{date}_insights.json` with pains, jtbd, competitors, quotes, lexicon, and scored keyword candidates.
2. Repeat for each interview as you go.
3. After about 6 to 10 interviews across the persona spread, run `/research-brief`. With multiple insight files it can finally weight pains by how often they recur, which is the exact thing the current backlog flags as missing ("single-source backlog... no cross-call frequency weighting was possible").

**One transcript per interview.** Resist combining them — the value is in the per-source structure and the frequency patterns that emerge across separate files.
