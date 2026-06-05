# Enriched Brief: How Does Dutchwithjoost Work

> **Stage 1 (Enrichment) output.** Evidence mapped to each outline section from the brief. Source hierarchy: Tier 1 = `proof-library/product-design-evidence.md` (product mechanism), Tier 2 = early-tester experience + `customer-intelligence/insights/`, Tier 5 = one capped academic citation. Carries forward to Stage 2 (Outline).

**Slug:** `how-does-dutchwithjoost-work`
**Stage:** BOFU product explainer | **Target:** ~2,000 words | **Primary keyword:** "how does Dutchwithjoost work"
**Thesis:** Dutchwithjoost refuses to call a lesson done until you have used the new words in conversation with Joost, so finishing means you can produce Dutch, not just recognise it.

---

## CRITICAL ENRICHMENT NOTES (read before writing)

### 1. Feedback language conflict — RESOLVED in favour of the primary source
The brief says "AI scoring on speaking and writing" (it pulled this from the competitive-landscape feature matrix). **`product-design-evidence.md` Section 6 — the honesty boundary — forbids that phrasing.** Do NOT write "AI scoring," "AI analyzes your speech," "perfect pronunciation scoring," "real-time correction," or "grades your response." Use only the "can say" column (mapped into the feedback section below). The product-design-evidence.md file is authoritative per CLAUDE.md.

### 2. Screenshots are a HARD DEPENDENCY — cannot be fabricated
The user requested real product screenshots. None are in the repo and product UI cannot be invented. Every screenshot slot below is marked `SCREENSHOT TODO`. **The article ships text-only with these slots flagged for the user to capture from the live product.** Each caption must state the feature → benefit it demonstrates, not "screenshot of the app." Do not describe UI elements you have not verified.

### 3. Attribution rules
- **Origin story** (built by the co-founder for her own inburgering): an approved positioning asset. Refer to "our co-founder" unless naming is confirmed. **VERIFY naming preference.**
- **Product-experience quotes** (praise of how DWJ works): attribute to **"one learner"** / **"an early learner testing the course."** Never a name. (Per product-design-evidence.md Section 5. Also more credible than a founder praising her own product.)
- **Molly** → anonymize to **"a learner evaluating the course."**

### 4. Specificity rule (brief guardrail, restated)
Write "Dutchwithjoost does X," never "learning requires X." The recognition-vs-production *theory* is two sentences max here; the deep dive lives in the linked methodology pillar.

### 5. Academic-citation cap for this article: **1 (maximum)**
Place a single citation in the closing "why it produces speaking" section only. Assigned: **Hopman & MacDonald (2018)** — production learners outperformed comprehension learners on both vocabulary and grammar. Do not add any second citation. If you find a section leaning on research, replace it with Tier 1/2 product or tester evidence.

### 6. Pricing / DUO guardrails
- One factual line only: **€399, one-time, 5-year access** (BOFU page, so a single factual line is allowed). Optionally name the **Exam Pass Guarantee** once. No competitor cost-contrast on this page.
- DUO: never write "not DUO-approved." If funding arises, frame as "check your track first."

### 7. Verified product facts (grounded in product-design-evidence.md — the live-product slice)
- **43 lessons, zero to A2** (runs 0→A1, then A1→A2). Write "zero to A2," NOT "A1 to A2."
- **All 5 inburgering exam parts:** reading, listening, writing, speaking, KNM. **ONA is NOT claimed** (unverified — do not mention).
- Self-paced; web app + PWA mobile.
- Scenario-based lessons (pharmacy, appointment, meeting neighbors).
- Two phases: practice → conversation with Joost. Completion = used-in-conversation.
- **STILL TO VERIFY against live product before publish:** exact streak/session-goal UI wording, the free-first-lesson/trial offer (evidenced by Molly's notes but confirm it's current), current price figure, and the precise on-screen feedback labels.

### Evidence gaps (flag to user)
- `proof-library/case-studies/` is **empty** → no pass-rate or quantified retention metric to harden the "you can actually speak" claim. The retention proof rests on tester voice only. Do not invent a number.
- No third-party reviews / Trustpilot / named testimonials exist yet.

---

## Section-by-section evidence map

### Section 1 — What Dutchwithjoost is (and the one thing that makes it different) — 220w
**Key argument:** Define the product plainly, then name the defining mechanic in the same breath: a lesson is complete only when you've used the new words in conversation, not when you've clicked through the exercises.

**AEO definition paragraph (refined from brief to match verified facts — note "zero to A2"):**
> Dutchwithjoost is a self-paced online Dutch course that takes you from zero to A2 and prepares you for all five parts of the inburgering exam. You learn each word by using it. A lesson runs in two phases: structured practice that introduces the new vocabulary inside real sentences, then a conversation with Joost, a speaking partner that replies at your level. The lesson counts as complete only when you've used the new words in that conversation — not when you've finished the exercises.

**Evidence:**
- Tier 1: completion criterion (product-design-evidence §3) — *the* differentiator. "Other self-paced courses complete when you've clicked through the screens. Dutchwithjoost completes when you can produce the language."
- Tier 1: scope facts (§1) — zero to A2, all 5 exam parts, self-paced.
- One line of contrast with click-through courses. **Do NOT** write "the only course that requires production" (red line).

**Proof points:** completion criterion (mechanism = proof). No screenshot here.

---

### Section 2 — Why it is built this way (and why it is not memorizing) — 320w
**Key argument:** Design rationale + origin story in one move. The co-founder built it for her own inburgering after memorization courses left her retaining nothing. State the problem it's engineered against: the "pass but can't speak" outcome.

**Evidence:**
- **Origin story** (approved positioning asset): co-founder built it for her own inburgering. Refer to "our co-founder" (VERIFY naming).
- Co-founder's prior-course failure quote (her own story, about competitor courses — usable as co-founder voice): *"I did it, I finished it. But I didn't feel like I retained anything, to be honest."* (Nina insights — after €300 Taalthuis A1.)
- Supporting: *"There is no memorizing, which I really like, because I hated spending two hours on one rule memorizing a million words that don't make sense together."* (attribute to "one learner.")
- Tier 1: no-memorization design (product-design-evidence §2–3).
- Recognition-vs-production theory: **two sentences max**, then link out.

**Internal link:** `what-is-production-based-language-learning` → **PLANNED (not published) → will render as plain text** (deferred link).

**Proof points:** origin story + prior-failure quote. No screenshot.

---

### Section 3 — What the course covers: the curriculum — 300w
**Key argument:** Map the scope so a buyer knows it's complete: all five DUO areas taught through one learn-by-using method, not five separate memorization tracks. Emphasise the gradual, incremental build.

**Evidence:**
- Tier 1: all 5 exam parts incl. KNM (§1). 43 lessons, zero to A2. **ONA not claimed.**
- Tier 1: positioning gap "All exam parts in one" (§4) — "you're not piecing five tools together."
- Gradual-difficulty contrast (tester-evidenced): prior course where *"between lesson one and lesson two, the jump of difficulty was insane."* (Nina insights — anonymize to "one learner" describing a past course.)
- Frame coverage against the pain of stitching multiple resources together.

**`SCREENSHOT TODO #1` — Curriculum / course overview** (the map of reading, listening, writing, speaking, KNM). Caption: feature → benefit, e.g. "All five exam parts in one course, so you're not stitching five resources together."

**Proof points:** scope facts + difficulty-jump contrast quote.

---

### Section 4 — What completing one lesson actually looks like, step by step — 420w (HEART OF ARTICLE)
**Key argument:** Walk the two-phase loop concretely. Practice prepares, conversation proves. The lesson is marked done only after you've produced the words yourself.

**Evidence (Tier 1, product-design-evidence §2 — describe what happens, not the jargon):**
- **Phase 1 — Practice:** small sentence units; each unit practiced three ways in sequence — read and speak, listen and speak, then write — before moving on. Practice mixes new material with review. Write it as: "you read it, listen to it, then write it, all three before moving on." Do NOT say "interleaving" / "spaced repetition" / "production-based learning."
- **Phase 2 — Conversation with Joost:** Joost stays in the lesson scenario but starts a *new* conversation, prompting you to use the lesson's vocabulary. He speaks at your level and uses only words you've already practiced. The conversation changes based on what you say — it's not a script.
- Completion criterion restated: done only after you've used the words in that conversation.
- Scenario examples: ordering at a pharmacy, making an appointment, meeting neighbors.
- Tester voice (attribute to "one learner"):
  - *"The words that you learn you use… it helps me communicate."*
  - *"I don't have the cognitive load of trying to engineer my lesson… it's just guided. You just do it and then you progress naturally."*
- **Do NOT** expose implementation specifics (90% vocab / 2+ uses / 3 sessions to unlock) — too technical and presents design as universal law.

**`SCREENSHOT TODO #2` — Practice phase** (a sentence unit being introduced in context). Caption: "You meet each word inside a sentence you'll actually say, not as an isolated list."
**`SCREENSHOT TODO #3` — Conversation-with-Joost phase [HERO IMAGE]** (the chat/speaking screen). Caption: "The lesson isn't done until you've used the new words talking to Joost."
**`SCREENSHOT TODO #4` — Lesson-complete state.** Caption: "A lesson completes when you've produced the language, not when you've clicked through the screens."

**Pattern:** feature → benefit → proof for each beat. Use guided/low-cognitive-load quote against the "self-paced courses leave you to figure it out" pain.

---

### Section 5 — The feedback you get — 330w
**Key argument:** Three threads — Joost replies at your level; tips let you infer rules as you go; you get correction on what you produce. Frame feedback as immediate and private (make mistakes with no human watching) for the shame-cycle reader.

**Evidence — USE ONLY THE "CAN SAY" COLUMN (product-design-evidence §6). NO "AI scoring."**
- **Level-matched replies:** Joost replies at your level. Tester: *"He's not gonna use C2 level Dutch to reply to you."* (one learner). Benefit: the calibration a native speaker structurally can't give (they learned as children and can't dial down).
- **Pronunciation feedback:** "Shows which specific words need work." + "Replay your own recording and compare to correct pronunciation." (NOT "AI analyzes your speech.")
- **Writing feedback:** "Guides you to discover the answer instead of just showing it." This maps to the tester point about inferring rules as you go (NOT front-loaded rule memorization). (NOT "corrects all grammar mistakes.")
- **Vocabulary feedback:** "Acknowledges correct Dutch, asks you to use the lesson's words." (NOT "accepts any correct answer.")
- **Conversation feedback:** "Available but doesn't interrupt the flow." (NOT "real-time correction.")
- **Comprehension check:** "Shows whether you answered meaningfully." (NOT "grades your response.")
- Evaluation voice (Molly → "a learner evaluating the course"): an initial worry about grammar coverage *was resolved by seeing the grammar feedback.*
- **Privacy/shame angle:** you make mistakes with no human watching and nobody switching to English on you (product-design-evidence §4: "make mistakes without anyone switching to English").

**`SCREENSHOT TODO #5` — A feedback moment** (Joost's level-matched reply, or a pronunciation/words-need-work view, or a writing-feedback hint). Caption: "Joost replies at your level, so the practice stays usable."

**Pattern:** feature → benefit → proof throughout.

---

### Section 6 — How you see your progress and stay consistent — 230w
**Key argument:** You set a session goal; when you hit it, the product tells you and you choose to stop or continue; your effort/consistency is visible day to day. Connect to engagement-as-retention (built to feel like play). Supports retention without overpromising outcomes.

**Evidence (tester voice → "one learner"):**
- *"It's very clear how much effort I'm putting in every session. I can feel that I'm consistent."* + (Nina insights) *"I wasn't able to track that in my past lessons."*
- Engagement metaphor: *"I don't see time passing with Joost because I'm having fun and I'm engaged."* + gym-vs-badminton framing (still a workout, but you enjoy it).
- Frame: engagement is a retention mechanism, not a vanity feature — it's why a self-paced learner actually keeps showing up (the failure point of other self-paced courses).

**`SCREENSHOT TODO #6` — Session-goal / progress / effort-tracking screen.** Caption: "You can see your effort day to day, so consistency stops being a guess."

**VERIFY:** the exact goal/streak feature wording before publishing.

---

### Section 7 — Why this method produces speaking (not just a pass) — and who it is not for — 280w
**Key argument:** Payoff + honest close. Two sentences on why using words in context builds the retrieval pathway memorization skips, then link to the methodology pillar. Be honest about fit. Soft CTA.

**Evidence:**
- **The ONE academic citation goes here:** Hopman & MacDonald (2018) — production learners outperformed comprehension learners on both vocabulary AND grammar. State the point in plain language first ("using words is a different skill from recognising them, and it's the one that transfers to speaking"), then anchor with the single source. **No second citation.**
- Honest fit (where-we-lose): rewards self-motivation; not for someone who wants peer pressure and a human classroom, or who is already at A2 and needs B1 now.
- **Pricing:** one factual line — €399 one-time, 5-year access. May name the Exam Pass Guarantee once. No cost-contrast.
- **CTA:** try the first lesson and watch the loop close yourself. (Molly was offered "the first lesson free" — **VERIFY** the current offer before stating "free.")

**Internal links:**
- `what-is-production-based-language-learning` (why it works) → PLANNED → plain text (deferred).
- `who-is-dutchwithjoost-not-for` (honest fit) → **PUBLISHED → real link.**
- `inburgering-course-that-teaches-speaking` (buyer guide) → **PUBLISHED → real link.**
- Problem it solves: use `why-cant-speak-dutch-after-studying` → **PUBLISHED → real link** (preferred over `passed-inburgering-cant-speak-dutch`, which is PLANNED → would be plain text).

---

### Section 8 — Frequently asked questions — 200w
**Key argument:** AEO block. Each answer 2–4 sentences, definition-first, self-contained. Map the verified facts only.

FAQ set (from brief aeo_directives, answers grounded in verified facts):
1. **How is Dutchwithjoost different from memorization-based courses?** → completion criterion; you use the words in conversation, a word counts as learned when you've used it, not when you've seen it.
2. **What happens in a Dutchwithjoost lesson?** → two phases: practice (read/listen/write a sentence) then a conversation with Joost using the new words; done when you've used them.
3. **Does Dutchwithjoost cover all the inburgering exam parts?** → yes: reading, listening, writing, speaking, KNM. (Do NOT mention ONA.)
4. **Do I need a teacher or a speaking partner to use Dutchwithjoost?** → no; Joost is the speaking partner and replies at your level; self-paced, make mistakes privately.
5. **Is Dutchwithjoost self-paced, and how long does it take?** → self-paced, practice anytime; 43 lessons from zero to A2; 5-year access. (Do not promise a fixed duration or "faster than X.")

---

## Enrichment summary
- **Proof points mapped:** completion criterion, two-phase mechanism, all-5-parts scope, level-matched feedback, guided/low-cognitive-load, progress/effort tracking, engagement-as-retention, origin story, prior-course-failure contrast, grammar-feedback-resolved-worry. (~10 distinct proof points.)
- **Tester quotes available (anonymized):** 8+ usable.
- **Academic citations planned:** 1 (Hopman & MacDonald 2018), Section 7 only.
- **Screenshot slots (TODO, hard dependency):** 6.
- **Internal links:** 3 will resolve to real URLs (published), 2 will defer to plain text (planned).
- **Evidence gaps:** case studies empty (no outcome metric); no third-party reviews. Flagged, not invented.
