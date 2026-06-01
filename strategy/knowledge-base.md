# Dutchwithjoost Master Knowledgebase

> This is the single source of truth for all GTM content. Edit this file, then run `/sync-context` to update derived modules.

## Companion Documents

These standalone documents provide specialized guidance that works alongside the derived modules:

| Document | Purpose |
|----------|---------|
| `strategy/factual-accuracy-checklist.md` | Verification workflow: official DUO sources for exam facts, costs, deadlines. Use as a checklist before publishing. |
| `strategy/product/curriculum.md` | Full curriculum design document. Product architecture reference. |

**Note:** Messaging guidelines, competitor language guides, and claims guardrails are now consolidated into this knowledge base (see Communication Guidelines and Competitive Positioning sections). Run `/sync-context` to propagate these to derived modules.

---

## Company Overview

### Vision

A world where immigrants feel at home in the Netherlands — able to understand spoken Dutch and participate in conversations — without wasting energy on memorization that gets forgotten after the exam.

### Mission

Help people pass the A2 inburgering exam as a byproduct of actually learning to speak and use Dutch, through practice and learning by doing.

### Boilerplate

Dutchwithjoost is a structured Dutch language course that helps immigrants pass the A2 inburgering exam by actually learning to speak the language — not by memorizing example exams. The web app offers unlimited speaking practice at home, on your own schedule, so you can build real confidence before using Dutch in the real world.

### What We Do (Plain Language)

We help people in the Netherlands pass their inburgering exam while actually learning to use Dutch. Most courses rely on memorization — you cram example sentences, pass the test, then forget everything. We flip that. Our course is built around speaking practice. You learn by doing, over and over, until Dutch becomes something you can actually use. The exam pass is just a byproduct of real fluency.

### Product

- **Type**: Web app with PWA for mobile
- **Format**: Structured self-paced Dutch language course
- **Levels**: Zero (absolute beginner) to A2 — covers 0→A1, then A1→A2. It does NOT assume you already have A1. Always describe it as a "zero-to-A2" or "0-to-A2" course, never as an "A1-to-A2" course (that wrongly implies it starts at A1).
- **Coverage**: All parts of A2 inburgering exam (read, listen, write, speak, KNM)
- **Price**: €399 for full course access
- **Stage**: Pre-revenue (1 paying customer)

---

## Strategic Positioning

### Narrative

Most Dutch language courses for inburgering follow the same playbook: memorize example sentences, practice with mock exams, pass the test. It works — people pass. But three months later, they still cannot have a basic conversation with their Dutch neighbors. They spent hundreds of hours and hundreds of euros to earn a certificate, not a skill.

The problem is how language is taught. Memorization creates short-term recall, not long-term ability. Speaking is treated as the final exam, not the learning method. And self-paced courses are the worst offenders — endless exercises, zero conversation.

Dutchwithjoost exists because one person was fed up with this. Our co-founder needed to pass the inburgering exam, tried the existing options, and hated all of them. So we built something different: a course where speaking is the central learning mode, not the final test. Where you learn by doing, not by memorizing. Where passing the exam happens because you can actually use Dutch — not because you crammed the right answers.

### Point of View Statements

1. A lesson isn't done when you finish the exercises. It's done when you can use the vocabulary.
2. Memorization creates test-passers, not Dutch speakers. Active production creates both.
3. Recognition is not fluency. If you can't produce it, you haven't learned it.
4. You should be able to practice speaking Dutch without judgment, without scheduling, without paying per hour.
5. The inburgering exam should be a byproduct of fluency, not the goal itself.
6. Confidence comes from practice. You need hundreds of low-stakes production moments before high-stakes real conversations.

### Urgency Drivers

These are visa modifiers and social pressures that add urgency on top of core motivations:

| Driver | Who it affects | What it adds |
|--------|----------------|--------------|
| **3-year deadline** | Partner visa holders | Legal pressure, clear timeline |
| **Deportation risk** | Work visa holders | Security anxiety, "what if I lose my job" |
| **Family pressure** | Anyone with Dutch family | Social judgment, isolation at gatherings |
| **Passport vulnerability** | Work visa holders from non-wealthy countries | Existential stakes, compound anxiety |
| **Career ceiling** | Anyone in Dutch workplace | Professional stagnation, first to be laid off |

Note: Urgency drivers are additive. Someone can have multiple drivers active (e.g., work visa + family pressure + career ceiling).

### Emotional Reality (From Customer Intelligence)

The visa situation creates constant low-grade anxiety that shapes every decision:

- **Continuous proving**: "You continuously have to prove your existence almost... your actions now will determine whether [your visa] will be renewed." Every choice is weighed against citizenship prospects.
- **Can't show weakness**: Taking sick leave, asking for financial help, or any reliance on the government jeopardizes visa renewal. "You have to be better than a Dutch person. You can't fail."
- **Fragile progress**: 5 continuous years required for citizenship. A 2-day gap in visa status = start over from zero. Even a car fine can jeopardize citizenship.
- **Not a choice**: For non-EU nationals, citizenship isn't "voluntary" in any meaningful sense. A weak passport limits everything: jobs require work permits, travel requires visas, layoffs mean deportation.

The language barrier compounds this:

- **Shame cycle**: Can't speak Dutch → feel judged when trying → avoid situations → isolate → can't practice → more shame. "You want to avoid the discomfort and so you avoid the situations and then you avoid speaking Dutch completely."
- **Feeling like a fraud**: "If I get my citizenship but I can't speak at all... I would always feel like an outsider. I don't feel I deserve that passport."
- **Narrowed world**: Without Dutch, you lose access to activities (yoga, sports, therapy), cultural events (theater, comedy), career advancement, and understanding your own environment. "My narrow world became my new world... I totally forgot that those things existed."

---

## Product Capabilities

### Core Features

| Feature | What It Does | Why It Matters |
|---------|--------------|----------------|
| Speaking practice | Unlimited AI-powered conversation practice | Speaking is usually the hardest part. Here it's the central learning mode. |
| All exam parts | Covers read, listen, write, speak, and KNM | One course for everything. No piecing together multiple resources. |
| Learn by doing | Active practice, not passive memorization | You retain what you learn. Actually use Dutch after the exam. |
| Self-paced | Learn anytime, anywhere, on your schedule | No fixed class times. Works for irregular schedules. |
| PWA mobile app | Use on phone like a native app | Practice during commute, lunch break, whenever. |
| Judgment-free practice | Make mistakes without embarrassment | Build confidence before speaking Dutch in the real world. |

### How Lessons Work

Each lesson is scenario-based: ordering at a pharmacy, making an appointment, meeting neighbors. The learner isn't memorizing vocabulary lists. They're preparing to handle a real situation.

**Two phases per lesson:**

1. **Practice phase** — The learner works through the lesson script in small sentence units. Each unit is practiced three ways: read & speak, listen & speak, then write. This interleaved pattern (not "all reading, then all listening, then all writing") transfers language into usable memory. Practice sessions include spaced review of earlier content.

2. **Conversation phase** — After completing 3 practice sessions, the learner unlocks conversation practice with Joost. Joost stays in the lesson scenario but starts a fresh conversation each time, prompting the learner to use the target vocabulary naturally. This is not a single exchange: the learner keeps having conversations with Joost until the completion criterion below is met.

**The completion criterion:**

A lesson is NOT complete when you finish the exercises. A lesson is complete when you've actively used 90% of the target vocabulary in conversation with Joost, with each word requiring 2+ successful uses.

This is the core differentiator: **active production is the success criterion, not passive completion.**

Other courses complete when you click through all the screens. Dutchwithjoost completes when you can produce the language.

> See `strategy/product/curriculum.md` for the full curriculum design document.

### Critical Distinction: Active Production, Not Just Speaking

**Common misconception to avoid:** Dutchwithjoost is NOT a course just for the speaking part of the inburgering exam.

**The truth:** Dutchwithjoost covers ALL 5 parts of the exam (read, listen, write, speak, KNM). The differentiation is not that we focus on speaking as a skill. The differentiation is that **active production is the completion criterion**.

**How other courses work:**
- Completion = finished the exercises
- Success = recognized the correct answer
- Speaking = one exam component among five

**How Dutchwithjoost works:**
- Completion = used 90% of target vocabulary in conversation (2+ uses per word)
- Success = produced the language yourself
- Speaking = the proof mechanism that shows you actually learned

This is a pedagogical difference, not a scope difference. We cover the same exam content, but through a different completion standard. Content creators must be careful not to position this as "a speaking course" — it's "a course where you're not done until you can produce the language."

### Key Terminology

- **Inburgering exam**: The Dutch civic integration exam required for permanent residence or citizenship. We always use "inburgering exam", not "civic integration test".
- **A2 level**: The CEFR language level required for voluntary naturalization and pre-2022 integration obligations. Basic conversational ability.
- **B1 level**: Higher CEFR level required for post-2022 mandatory integration. A dedicated Dutchwithjoost B1 course is coming soon. Until then, our current zero-to-A2 course is still the right foundation for beginners who will eventually need B1 (see Target Market → "B1 learners: who fits and who doesn't"). Needing B1 does not by itself mean the course isn't for you.
- **KNM**: Kennis van de Nederlandse Maatschappij — the knowledge of Dutch society exam, one of the inburgering components.
- **BSN**: Burgerservicenummer — Dutch citizen service number. BSN registration date determines whether A2 or B1 is required.

#### The Two Integration Laws

There are two integration laws currently in effect. Which one applies depends on when someone became required to integrate:

| Law | Applies to | Key differences |
|-----|-----------|-----------------|
| **Wet inburgering 2013** | People who became required to integrate before 1 Jan 2022 | Self-study option, A2 standard, ONA requirement |
| **Wet inburgering 2021** | People who became required to integrate from 1 Jan 2022 onwards | Municipality assigns learning track, B1 often required, MAP instead of ONA |

**2013 Act requirements:**
- 4 language exams at A2 + KNM
- ONA (Orientation Dutch Labour Market) — if required to integrate from 1 Jan 2015 onwards
- PVT (Participation Statement) — if required to integrate from 1 Oct 2017 onwards

**2021 Act learning tracks:**

| Track | Target level | Description |
|-------|--------------|-------------|
| B1 track | B1 | For people aiming for work; must take exams at B1 level |
| Education track (O) | B1 | For young people preparing for MBO/HBO/university |
| Self-reliance track (Z) | A1 (A2 optional) | For people who find B1 too challenging; ends with municipality interview |

**Key point for content:** Under the 2021 Act, most people must achieve B1, not A2. Only people on the Z track have A2 as optional.

#### ONA vs MAP (Don't Confuse These)

- **ONA (Orientation on the Dutch Labour Market):** Required under 2013 Act (for those integrating from 1 Jan 2015 or later)
- **MAP (Module Labour Market and Participation):** Required under 2021 Act, taken with municipality (not DUO)

These are different requirements under different laws. Do not conflate them.

#### Exemptions and Dispensations

**Full exemption (no exams required):**
- Dutch diploma (from NL, Belgium Dutch-language, or Suriname Dutch-language)
- Serious illness or disability (requires medical documentation)
- Lived in NL 10+ years, worked 5+ years
- Reached AOW pension age
- Completed 600+ hours of course (2013 Act only) plus evidence of exam attempts

**Partial exemption (fewer exams):**
- Nt2 certificate/diploma (B1 or B2) — exempts language exams, not KNM
- Worked in NL 6+ months in past year — exempts ONA only (2013 Act)

### Key Concepts

**Practice prepares, conversation proves**: The core learning loop. Structured practice (read/speak, listen/speak, write) gives you the material. Conversation with Joost proves you can actually use it. Other courses stop at practice. We require production.

**Active production as completion**: A lesson isn't done when you finish the exercises. It's done when you've actively used 90% of the vocabulary in conversation. Recognition is not enough. You must produce.

**Scenario-based learning**: Every lesson is a realistic situation: ordering at a pharmacy, making an appointment, meeting neighbors. You're not learning vocabulary lists. You're preparing to handle real Dutch interactions.

**Interleaved practice**: For each sentence, you practice three ways in sequence (read → listen → write) before moving on. This interleaving is more effective than batching all reading, then all listening, then all writing.

**Spaced repetition built-in**: Practice sessions include review of earlier material. You meet vocabulary multiple times across sessions before relying on it in conversation.

**Confidence before conversation**: Real-world Dutch conversations are high-stakes — you feel judged, you freeze up, you switch to English. Hundreds of low-stakes practice moments with Joost build confidence first.

### Common Factual Errors to Avoid

These errors have appeared in content and must be caught during editing.

#### Error 1: "The exam only tests recognition"

**Wrong:** "The inburgering exam only tests whether you can recognize correct answers."

**Correct:** "The inburgering exam tests both recognition AND production. The speaking and writing exams require you to produce Dutch, not just recognize correct answers."

**Why this matters:** The speaking exam explicitly requires speaking Dutch, and the writing exam requires producing written text.

#### Error 2: Confusing A2 with B1 requirements

**Wrong:** "Everyone must pass the exam at A2 level."

**Correct:** "Under the 2013 Act, the standard requirement is A2. Under the 2021 Act, your required level depends on your learning track (B1 track requires B1; self-reliance track requires A1 with optional A2)."

#### Error 3: Mentioning only A2 when content applies to both A2 and B1

**Wrong:** "This experience is common among expats preparing for the A2 inburgering exam."

**Correct:** "This experience is common among expats preparing for the A2 or B1 inburgering exam."

**Why this matters:** Under the 2021 Act, many people are required to pass at B1 level (not A2). Content about the recognition-production gap, speaking practice, or course selection applies to both levels. Always include "A2 or B1" unless you're specifically discussing A2-only requirements.

#### Error 4: Overstating the speaking exam difficulty

**Wrong:** "The speaking exam is the hardest part."

**Correct:** "Many people find the speaking exam challenging because it requires producing Dutch under time pressure."

**Why:** "Hardest" is a subjective claim. What's hard varies by person. The phrasing "many people find it challenging" is more accurate.

#### Error 5: Misrepresenting exam format

**Wrong:** "The writing exam is on a computer."

**Correct:** "The writing exam at A2 level is done with pen and paper." (Per DUO: "Het examen Schrijven op niveau A2 maakt u met pen en papier.")

#### Error 6: Confusing ONA and MAP

See "ONA vs MAP" in Key Terminology above. These are different requirements under different laws.

---

## Target Market

### ICP Definition

Non-EU nationals living in the Netherlands who need to pass the A2 inburgering exam for permanent residence or Dutch citizenship. They have decided the Netherlands is their permanent home and want to break out of the expat/English bubble.

They cannot commit to fixed class schedules — irregular work hours, family obligations, or preference for home learning. They are self-motivated enough to study alone. They care about actually using Dutch, not just passing the test — about integrating and feeling part of the local community and the Dutch people around them, not staying a permanent outsider. They will research and choose their own course rather than being assigned one.

**Exclusions**: Refugees (assigned courses by municipality). B1 is not an automatic exclusion — fit depends on someone's current level, not the level they eventually need (see "B1 learners: who fits and who doesn't" below).

### Firmographics

| Attribute | Criteria |
|-----------|----------|
| Nationality | Non-EU |
| Location | Currently in the Netherlands |
| Visa type | Partner visa or Work visa (visa type is a modifier, not a segment — see Personas) |
| Exam requirement | A2 level (pre-2022 BSN or voluntary naturalization) |
| Timeline | Usually start searching in first year of arrival |

### Dream Learner

Someone with strong belonging and family motivations — wants to participate in Dutch life, not just pass an exam. Has a Dutch partner or family connection that creates social pressure beyond the legal requirement. Self-motivated, prefers flexible home learning, frustrated with memorization-based courses that don't teach real speaking. May have tried other courses and been disappointed.

The visa situation matters less than the motivation profile: someone on a work visa can have the same belonging/family motivations as someone on a partner visa. The dream learner cares about actually using Dutch, not just earning a certificate — about feeling part of the community here and connecting with the Dutch people around them, not staying an outsider.

### B1 learners: who fits and who doesn't

Many people ultimately need B1 (most integrators under the 2021 Act do). That alone does not rule out Dutchwithjoost. What decides fit is where someone is starting from, not the level they eventually need. Everyone has to pass through A1, then A2, before B1 — there is no skipping it.

- **Already at A2 and comfortable holding basic conversations, and now needs B1**: Our current zero-to-A2 course is not the right next step for this person. A dedicated Dutchwithjoost B1 course is coming soon; until it ships, they need a B1 course elsewhere.
- **Starting from zero (or close to it) and will eventually need B1**: Still a strong fit. Because you learn here by using the language, what you learn sticks and you can actually speak it. That makes our zero-to-A2 course a solid foundation that sets up a follow-up B1 course well, not a detour.

The old framing ("if you need B1, this isn't for you") was too strict. The level someone eventually needs doesn't decide fit. Their current level does.

### Buying Signals

- Recently received inburgering letter (partner visa deadline trigger)
- Frustrated after a family gathering where they understood nothing
- Complaining about other courses in expat forums (prior course failure)
- Work visa holder worried about job security (security motivation)
- Approaching 5-year permanent residence milestone
- Searching for "inburgering exam speaking practice" or similar
- Expressing shame or frustration about not speaking Dutch after years in NL

---

## Jobs to Be Done

> Evidence collected from Reddit, Facebook groups, Trustpilot, YouTube comments, and competitor content (May 2026). See `customer-intelligence/web-research-jtbd.md` for full source documentation.

### JTBD 1: Pass the Inburgering Exam

**Job statement**: "I need to pass all 5 inburgering exam components to stay in the Netherlands."

**Functional outcome**: Certificate obtained, deadline met, visa/residence secured.

**Evidence**:
- "Within 45 days I passed all exams" (common success metric in reviews)
- Pass rate claims are primary trust signals for courses

**Emotional dimension**: Fear of failure, deadline pressure, visa/residency anxiety.

**Speaking exam is the pain point**: "The spreken examen is often named as one of the hardest exams for internationals because, unlike with reading, listening, or writing, there's almost no chance to edit your work." (DutchReview)

---

### JTBD 2: Actually Speak Dutch (Not Just Pass)

**Job statement**: "I want to hold conversations in Dutch, not just earn a certificate I'll forget."

**Functional outcome**: Real conversational ability that persists beyond the exam.

**Evidence**:
- "Comprehension is not enough if the students are to demonstrate their knowledge through speaking or writing. Words need to travel from the passive lexicon into the active lexicon so we can retrieve them on-demand and produce comprehensible utterances quickly. This transfer does not happen on its own." (Seidlitz Education)
- "They read, they listen, they understand… but when it's time to talk, they freeze." (Facebook group)
- "If you've ever tried learning Dutch, you've probably noticed how quickly isolated words fade away. You can memorize fiets, huis, and eten all week — and still stumble when trying to use them in conversation." (Taalhammer)

**Emotional dimension**: Frustration at recognition vs. production gap, embarrassment at freezing, desire for genuine integration.

**This is our core positioning**: The "pass but can't speak" problem is documented across competitor sites and community discussions. We're the only course where completion requires production.

---

### JTBD 3: Find Speaking Practice

**Job statement**: "I need regular, low-stakes conversation practice without scheduling constraints or judgment."

**Functional outcome**: Consistent speaking practice that fits irregular schedules.

**Evidence**:
- "I've been trying to find other beginners to practice speaking with, but it's been harder than I expected." (Reddit r/learndutch)
- "Hi, I'm looking for a Dutch speaking friend to meet and talk (can pay)" (Facebook group)
- "Dutch partner won't speak Dutch" (Reddit thread — even native partners switch to English)
- Speaking partner exchange sites exist but require scheduling and coordination

**Emotional dimension**: Loneliness in learning, frustration at Dutch people switching to English, desire for judgment-free practice space.

**Our answer**: "Unlimited speaking practice" directly addresses this documented pain. No scheduling, no judgment, always available.

---

### JTBD 4: Affordable Prep Without Classroom Constraints

**Job statement**: "I need to prepare for inburgering without €1,000+ classroom fees or fixed schedules."

**Functional outcome**: Exam preparation that fits budget and schedule.

**Evidence**:
- "Are those €1000 inburgering courses actually worth it? Or scam?" (Reddit thread title)
- Classroom average: €1,160 for A2. Self-paced: roughly €60–€300 for the main exam-prep courses (InburgeringOnline lands around €210–€300 to A2).
- Schedule inflexibility is a documented frustration for working professionals

**Emotional dimension**: Financial stress, resentment at "integration tax," desire for value clarity.

**Our answer**: One-time €399 pricing with clear completion criteria addresses both the cost concern and the desire for value clarity — you know exactly what you pay and exactly what "done" means.

---

### JTBD 5: Remember What I Learn Long-Term

**Job statement**: "I want durable language retention, not temporary exam cramming."

**Functional outcome**: Dutch that sticks beyond the test date.

**Evidence**:
- "How quickly isolated words fade away" (Taalhammer)
- "Moving words from Passive Vocabulary into the corresponding Active Reservoir takes time and effort (and practice!)" (Seidlitz Education)
- Spaced repetition apps acknowledge the problem with phrases like "Cards repeat right before you forget them"

**Emotional dimension**: Frustration at forgetting, wasted effort, desire for "real" learning.

**Our answer**: Production-based completion forces active use, which creates stronger memory traces than recognition-based completion.

---

### JTBD 6: Feel at Home in the Netherlands

**Job statement**: "I want to feel like I belong here, not like a permanent outsider."

**Functional outcome**: Participate in Dutch life — understand conversations, access activities, connect with environment.

**Evidence**:
- **From customer intelligence**: "Not speaking the language makes you always feel like an outsider. You always feel almost rejected... I don't feel home. I cannot really make it completely my home if I don't speak the language."
- "By learning to express things in [Dutch] would probably bring me closer to understanding their mentality and also integrating into the culture better."

**Emotional dimension**: Feeling rejected, not belonging, missing out on life around you.

**What they lose without Dutch**:
- Can't do activities (yoga classes specify if teacher speaks English, sports instructions are 90% Dutch)
- Limited therapy options (English-speaking therapists are hard to find, no English group therapy)
- Cut off from culture (theater, stand-up comedy, most cultural events are Dutch-only)
- Can't understand their environment (bills, admin, politics, news)

**This is deeper than passing**: The exam is a milestone, but the real job is feeling at home.

---

### JTBD 7: Protect and Advance My Career

**Job statement**: "I need Dutch to not be held back at work and to protect my job security."

**Functional outcome**: Equal standing with Dutch colleagues, access to opportunities, protection from being first to go.

**Evidence**:
- **From customer intelligence**: "If you don't speak Dutch, you're treated as an outsider. People switch to Dutch immediately after the meeting so you miss on the bonding with the team... not good for being promoted because you miss on a lot of politics."
- "In some cases you might even be the first one to be laid off because you are not the closest to your manager."
- Story of expat who learned Dutch to B1, did job interview in Dutch, and was hired partly because "they were impressed that she learned that so quickly."

**Emotional dimension**: Fear of being marginalized, frustration at invisible ceiling, desire for equal standing.

**Our angle**: Career protection is an underexplored motivation. Beyond citizenship, Dutch protects your livelihood.

---

### Customer Lexicon: Exact Phrases to Use

These phrases appear in actual customer discussions. Use them in content.

| Phrase | Context | Content Usage |
|--------|---------|---------------|
| "passed all exams" | Success metric | Proof points, testimonials |
| "can't speak" / "I understand but can't speak" | Recognition vs. production gap | Core positioning language |
| "speaking practice" | Documented need | Feature descriptions |
| "speaking partner" | What people search for | SEO targeting |
| "nervous" / "fear" | Exam anxiety | Address in messaging |
| "worth it" | Value assessment | Answer directly in content |
| "forget" / "fade away" | Retention problem | Problem framing |
| "isolated words" | Memorization critique | Contrast with context-based |
| "recognize but cannot use" | Production gap | Exact positioning language |
| "Dutch partner won't speak Dutch" | Real-world frustration | Validates need for AI practice |
| "outsider" / "rejected" | Belonging language | Emotional resonance |
| "feel like a fraud" | Passing without speaking | Validates why speaking matters |
| "scam" | Course skepticism | Address trust directly |
| "cheat sheet" | Memorization critique | Contrast with real learning |
| "ashamed" / "shame" | Emotional barrier | Acknowledge and address |
| "cut off from life" | What's lost without Dutch | Beyond-exam motivation |
| "feel at home" | Integration desire | Aspirational language |
| "deserve the passport" | Earning vs. gaming citizenship | Values-based motivation |

---

## Buyer Personas

> **See `strategy/personas.md` for full persona documentation.** This section summarizes the layered model.

### The Layered Model

Visa type is observable and useful for targeting, but it doesn't determine motivation. The actual persona is built from three layers:

```
Layer 1: Core Motivations (universal — anyone learning Dutch might have these)
    +
Layer 2: Visa Modifier (adds specific pressures based on legal situation)
    +
Layer 3: Barrier Profile (what's actually blocking them)
```

A partner visa holder and a work visa holder can share the same core motivations. The visa type adds different pressures on top. The barrier profile determines what product positioning resonates.

### Layer 1: Core Motivations

| Motivation | What it sounds like |
|------------|---------------------|
| **Belonging / community** | "I want to feel at home and part of the community here — connected to the Dutch people around me, not a permanent guest or outsider." |
| **Family** | "I can't talk to my nieces, my in-laws, participate in family life." |
| **Identity** | "I don't deserve the passport if I don't speak the language." |
| **Integration** | "I want to take part in local life — therapy, culture, hobbies, activities — and actually connect with the people around me." |
| **Career** | "I'm treated as an outsider, can't advance." |

Most people have multiple motivations active. These are not visa-specific.

### Layer 2: Visa Modifiers

| Visa Type | What It Adds |
|-----------|--------------|
| **Partner visa** | +Legal deadline (3 years), +Family scrutiny (in-laws watching), +Dutch partner support (with limits) |
| **Work visa** | +Security anxiety (deportation if laid off), +Career ceiling pressure, −Deadline (can procrastinate) |
| **Passport vulnerability** (sub-modifier) | For work visa holders from non-wealthy countries: existential stakes, compound anxiety, "must be better than a Dutch person" |

The visa doesn't determine motivation — it adds concerns on top.

### Layer 3: Barrier Profiles

| Barrier | Description | Product positioning that resonates |
|---------|-------------|-----------------------------------|
| **Shame cycle** | Can't speak → feel judged → avoid → isolate → can't practice | Judgment-free AI practice |
| **Production gap** | Understands Dutch but freezes when speaking | Speaking-first methodology |
| **Schedule constraints** | Can't commit to fixed times | Self-paced, 15-min sessions |
| **Access to practice** | No one to practice with, partner can't help | Unlimited speaking practice built in |
| **Prior course skepticism** | Spent €600+ on courses that didn't work | Proof it's different, origin story |

### The Dutch Partner Problem

Having a Dutch partner does NOT solve the speaking practice problem:

- **Level mismatch**: "Your level of Dutch is native and mine is total beginner... It's hard to find the middle ground."
- **Can't explain why**: "When I ask why is it this way... the native person learned it since they're little so they can't really explain. They're not teachers."
- **Partner fatigue**: Dutch partners help with questions but won't teach systematically.

This validates the need for level-matched practice. Native speakers cannot provide the structured, level-appropriate practice that learning requires.

### Example Persona Combinations

**Pattern A: Partner Visa + Family Pressure**
- Motivations: Belonging + Family (primary)
- Visa modifier: Partner visa (+deadline, +family scrutiny)
- Barriers: Shame cycle, Production gap
- Trigger: Family gathering where they understood nothing

**Pattern B: Work Visa + Security Focus**
- Motivations: Career + Security (primary)
- Visa modifier: Work visa (+security anxiety, −deadline)
- Barriers: Schedule constraints, Prior skepticism
- Trigger: Layoff news, approaching 5-year milestone

**Pattern C: Work Visa + Full Motivation Stack**
- Motivations: Belonging + Family + Identity + Integration + Career (all five)
- Visa modifier: Work visa + Passport vulnerability
- Barriers: Shame cycle, Prior failures, Schedule constraints
- Trigger: Compound pressure — career anxiety + identity crisis + prior failures

**Pattern D: Long-term Resident + Integration Focus**
- Motivations: Integration + Identity (primary)
- Visa modifier: Either (deadline may have passed)
- Barriers: Production gap, possibly resignation
- Trigger: Realization of what they've been missing

---

## Communication Guidelines

> **Sync note:** When generating `voice-guide.md`, include a cross-reference to `.claude/rules/writing-quality.md` at the top. That document contains the consolidated anti-slop rules (prohibited terms, AI vocabulary, structural anti-patterns). Voice-guide.md handles brand voice; writing-quality.md handles universal quality enforcement. Both apply to all content.

### Voice and Tone

| Attribute | Description |
|-----------|-------------|
| **Friendly** | Warm and approachable. Learning a language is hard; we're on your side. |
| **Encouraging** | Acknowledge the challenge, celebrate progress, build confidence. |
| **No-nonsense** | Direct and clear. No fluff, no hype, no corporate speak. |
| **Practical** | Focused on what actually helps. Concrete advice, real examples. |

### Perspective

Use "we" (Dutchwithjoost as a company), not "I" (Joost as an individual).

### How to Refer to the People We Serve

- **Avoid "customer" in reader-facing content.** It's impersonal. Use "learners," "people learning Dutch," "expats," or just speak to the reader directly. ("Customer" can stay in internal strategy labels and the `customer-intelligence/` evidence base — this rule is about published content, not internal filing.)
- **Don't reduce people to a visa label.** Avoid framing anyone as a "partner visa holder" or "work visa holder" as though that's their identity. The visa situation is context that adds pressure (a deadline, a job-security worry), not who someone is. Mention it only when the visa situation is the actual point, and even then put the person first: "someone on a partner visa," not "a partner visa holder." The motivation profile, not the visa type, is who they are.

### Competitor Stance

Respectful. No talking down to competitors. Honest when another option is a better fit. Some learners need classroom peer pressure — that's valid. Some want a private tutor — that's valid. We're the right choice for self-motivated learners who want speaking-focused, flexible, affordable practice.

### Style Rules

- Lead with the insight, not the product
- Use active voice
- Short sentences for clarity
- Be specific — "speaking practice" not "language training"
- Acknowledge that learning a language is hard
- Never promise fluency in X weeks

### Anti-Patterns

- No corporate jargon ("leverage", "synergy", "ecosystem")
- No pushy sales language ("Act now!", "Don't miss out!", "Limited time!")
- No talking down to learners
- No talking down to competitors
- No overpromising or hype ("Master Dutch in 30 days!")
- No condescending tone ("It's easy!", "Anyone can do it!")
- No academic stiffness

### AI Writing Pattern Anti-Patterns

> **Full list:** See `.claude/rules/writing-quality.md` for the complete anti-slop enforcement rules (AI vocabulary, significance puffery, structural anti-patterns like copula avoidance, trailing -ing analysis, elegant variation, false ranges, vague attributions).

These DutchwithJoost-specific patterns also signal AI-generated content. Avoid them:

- **Reassurance-reframe structure**: "This is not your failure. It is a systemic problem." Rewrite as direct statements.
- **Rule of three for emphasis**: "It's fast, flexible, and effective." Vary sentence structure.
- **Negative parallelisms**: "It's not X, it's Y" / "It's not just X, it's Y"

### Technical Jargon Anti-Patterns

Never use development or course-design jargon in reader-facing content:

| Don't Say | Say Instead |
|-----------|-------------|
| target vocabulary | the words from the lesson, vocabulary |
| completion criterion | what counts as done (or avoid the concept) |
| production-based learning | describe what happens, don't label the methodology |
| recognition vs. production | explain the difference without naming the framework |
| cognitive pathways | just describe what happens when you try to speak |

### AI/Technology Terminology

Never label the technology. Describe the experience instead:

| Don't Say | Say Instead |
|-----------|-------------|
| AI-powered | describe what it does ("practice anytime," "get feedback instantly") |
| AI conversation partner | "Joost" or "speaking practice" |
| unlimited AI | "practice whenever you want" |
| human sessions | "sessions with a teacher" or "classroom time" |

### Product Implementation vs. Universal Requirements

Never present Dutchwithjoost's specific design as universal requirements:

| Wrong | Right |
|-------|-------|
| "Production-based learning requires 90% vocabulary usage" | "Dutchwithjoost considers a lesson complete when you've used most of the vocabulary in conversation" |
| "This is what effective learning requires" | "This is how we designed the course" |
| "You need 2+ successful uses per word" | "In our course, each word needs multiple successful uses before it counts" |

If describing how the product works, be explicit: "Dutchwithjoost does X" not "Learning requires X."

### Dismissive Competitor Language

When describing competitor limitations, state facts without implying lazy or obvious choices:

| Wrong | Right |
|-------|-------|
| "Building a course around exercises is straightforward" | "Most courses use exercise completion as the progress metric" |
| "They just track clicks" | "Progress is measured by exercises completed" |
| "You get maybe 5 minutes of speaking" | "With 15 students, individual speaking time is limited" |

Avoid words that imply competitors took shortcuts: "straightforward," "simple," "just," "only"

### Prohibited Terms

| Don't Say | Say Instead | Why |
|-----------|-------------|-----|
| Cutting-edge | Describe the specific capability | Empty hype |
| Revolutionary | Describe what's actually different | Overused |
| Leverage | Use | Corporate jargon |
| Synergy | Describe the specific benefit | Meaningless |
| Game-changer | State the actual impact | Hype |
| Seamless | Describe the actual experience | Vague |
| Master Dutch in X days | Build real Dutch skills | Overpromising |

### Product Descriptions (Approved Versions)

Use these one-sentence descriptions consistently across all content:

**Primary (outcome-focused):**
Dutchwithjoost teaches you Dutch you can actually use in daily life. The A2 inburgering exam becomes straightforward because you've learned the language, not just memorized answers.

**Alternative (method + outcome):**
Dutchwithjoost teaches Dutch through practical conversations, so you pass the A2 inburgering exam because you've learned the language.

**Alternative (comprehensive):**
Dutchwithjoost teaches you Dutch you can actually use, covering all five exam parts (reading, listening, writing, speaking, KNM). The exam becomes a natural result of what you've learned.

### Lesson Description Phrasings

**Approved phrasings (use these):**

- "You practice the vocabulary, then use it in conversation"
- "Lessons complete when you can have conversations on the topic"
- "Joost speaks at your level and only uses words you've already practiced"
- "Each lesson teaches you to handle an everyday situation in Dutch"
- "The conversation changes based on what you say. It's not repeating a script."
- "You learn all five exam parts together, not as separate modules"
- "For each sentence, you read it, listen to it, then write it — all three before moving on"
- "Practice sessions mix new material with review"
- "Conversation unlocks after you've practiced the basics"
- "A word counts as learned when you've used it in conversation, not when you've seen it"

**Avoid these phrasings:**

- "Use each word in sentences before moving on" (too vague, doesn't land)
- "Production-based learning" (jargon)
- "Active recall" (jargon)
- "Spaced repetition" (jargon, unless explaining the method)
- "Real conversations" (implies human conversation partner)
- "3 practice sessions to unlock" (too implementation-specific for content)
- "2 successful uses = learned" (too implementation-specific for content)

**How to describe Joost:**

- "Joost speaks at your level"
- "Joost only uses words you've already practiced"
- "You can practice whenever you want, as much as you want"
- "You can make mistakes without anyone watching or switching to English"

Avoid:
- "AI tutor" without explanation (sounds cold)
- "Chatbot" (sounds basic)
- "Unlimited AI conversations" (sounds like a feature, not a benefit)

### Pain Point to Messaging Map

Use this when threading product messaging into content about specific topics.

#### Speaking Dutch / conversation practice

| Pain point | Messaging to thread |
|------------|---------------------|
| "I can understand but can't speak" | Lessons complete based on conversation use, not exercises |
| "Native speakers switch to English" | Joost speaks at your level, doesn't switch |
| "I'm scared to make mistakes" | Conversation feedback is non-blocking, corrections available but optional |
| "I don't get enough speaking practice" | Unlimited conversation practice on your schedule |
| "Speaking practice is expensive" | One price, unlimited practice vs. per-hour tutoring |

#### Pronunciation

| Pain point | Messaging to thread |
|------------|---------------------|
| "I don't know what I'm doing wrong" | Feedback shows which specific words need work |
| "I can't hear my own mistakes" | Replay your recording, compare word by word |
| "Feedback feels arbitrary" | See pronunciation and completeness scores, adjust strictness |
| "Apps just say 'try again'" | See exactly what to fix, not just pass/fail |

#### Writing Dutch

| Pain point | Messaging to thread |
|------------|---------------------|
| "Apps just mark me wrong without helping" | Feedback acknowledges what's correct, guides you to fix one thing |
| "I learn better when I figure it out myself" | Hints help you discover the answer, not just reveal it |
| "My Dutch was correct but marked wrong" | Correct Dutch with different words acknowledged, asked to use lesson vocabulary |

#### Exam preparation / inburgering

| Pain point | Messaging to thread |
|------------|---------------------|
| "I passed but can't actually speak Dutch" | Lessons require conversation use, not just recognition |
| "I'm worried about the speaking exam" | You practice speaking from lesson 1, not as a separate module |
| "I don't know if I'm ready" | Lesson completes when you've demonstrated vocabulary use |
| "Other courses feel like memorization" | Two approaches exist — describe both, let reader choose |

#### Self-study / structure

| Pain point | Messaging to thread |
|------------|---------------------|
| "I don't know what to study next" | Course guides you step by step |
| "I forget what I learned" | Practice sessions mix new material with review |
| "I need accountability" | Clear progress, lessons complete based on demonstrated ability |
| "ChatGPT doesn't give me structure" | Curriculum covers what you need, conversation practice built in |

#### Learning Dutch as an adult / expat

| Pain point | Messaging to thread |
|------------|---------------------|
| "Dutch people speak too fast" | Joost speaks at your level |
| "My partner can't teach me" | Native speakers can't slow down to match your level |
| "I don't have time for classes" | Practice whenever you want, any amount |
| "Classes don't give me enough speaking time" | Unlimited speaking practice vs. time divided among students |

### Quick Reference: Approved vs Prohibited Language

| Prohibited | Approved alternative |
|------------|---------------------|
| "Use each word in sentences before moving on" | "Lessons complete when you can have conversations on the topic" |
| "Production-based learning" | "You learn by using the vocabulary, not just seeing it" |
| "Memorization courses" (as dismissive) | "Memorization-based courses" (neutral) or describe what they do |
| "Just exercises" / "clicking through screens" | Describe what their approach does, not how it feels |
| "Track record" comparisons | Do not mention |
| "Newer course" | Do not mention |
| "Faster/slower" | Do not compare speed |
| "The exam only tests recognition" | "The exam tests both recognition and production" |
| "Easy to build" (about competitors) | Do not say |
| "Cheat sheet to the exam" | Do not say |
| "AI tutor" (without context) | "Joost, a conversation partner who speaks at your level" |
| "Real conversations" | "Practical conversations" or "everyday conversations" |
| "AI-powered" / "AI conversation" | Describe what Joost does, not what technology powers it |
| "Progress = words you can use" | "Progress = situations you can handle in Dutch" |
| "AI speech recognition" | "Shows which specific words need work" |
| "Real-time correction" | "Feedback appears beside your message" or describe what happens |
| "Intelligent feedback" | Describe specifically what the feedback does |
| "Corrects your grammar" (in conversation) | "Grammar coaching available but doesn't interrupt" |

### Claims Guardrails

#### Claims We Can Make

**Factual claims (verifiable):**

- 43 lessons taking an absolute beginner from zero through A1 to A2 (a complete 0→A2 course, not a course that assumes you already have A1)
- Covers all 5 inburgering exam parts: reading, listening, writing, speaking, KNM
- €399 one-time payment, 5-year access
- Exam Pass Guarantee: complete all lessons, fail the exam, get refunded
- Practice anytime, on your own schedule
- Feedback on grammar, comprehension, and pronunciation
- Pronunciation feedback shows which specific words need work
- You can replay your own recordings and compare to correct pronunciation
- Writing feedback guides you to the answer instead of just showing it
- Conversation feedback is available but doesn't interrupt the flow

**Experience claims (supported by user feedback):**

- You learn vocabulary by using it in conversation
- You learn sentence structure, grammar, and situational communication together
- Joost speaks at your level
- The course is guided. You know what to do next.
- You can practice speaking as much as you want
- The conversation changes based on what you say. It's not repeating a script.
- "The words that you learn, you use" (can attribute to "one learner")

**Outcome claims (careful framing needed):**

Can say:
- "Prepares you for all 5 parts of the A2 inburgering exam: reading, listening, writing, speaking, and KNM"
- "You learn all five exam parts together, not as separate modules"
- "The exam becomes straightforward because you've actually learned the language"
- "You pass the exam because you can actually use Dutch"
- "We're confident enough to offer an exam pass guarantee"

#### Claims We Cannot Make

**About the exam:**
- Do NOT say "the exam only tests recognition" — it tests both recognition AND production
- Do NOT say "the speaking exam is the hardest" as absolute fact — say "many people find the speaking exam challenging"

**About competitors:**
- Do NOT say their courses are "easy to make" or "cheaper to scale"
- Do NOT say they "only" do memorization (implies limitation without evidence)
- Do NOT mention that we have less track record or are newer
- Do NOT assume their intentions ("they treat speaking as one more thing to cram")

**About speed:**
- Do NOT say we are faster or slower than alternatives
- Do NOT say memorization is "faster for passing" (implies we are slower)

**About completion:**
- Do NOT say "exercises" or "clicking through screens" as negatives — this talks down on other courses
- DO describe what each approach does: memorization-based courses teach through memorizing vocabulary and rules; Dutchwithjoost teaches through practicing conversations
- Be precise: "A lesson completes when you can have conversations on the topic"
- Do NOT reduce it to just "vocabulary" — you're learning sentence structure, grammar, and situational communication together

**About outcomes:**
- "You will pass" — guarantee has conditions
- "Faster than other courses" — depends on the person
- "You will be fluent" — A2 is not fluency
- "The exam becomes easy" — use "straightforward" instead

**About financing (DUO loan):**
- Dutchwithjoost is NOT on DUO's list of approved courses, so you cannot pay for it with a DUO inburgering loan.
- Do NOT mention DUO loans in any content about Dutchwithjoost, and never imply our course is loan-eligible. The DUO loan exists for approved courses and exam costs; we are not on that list, so leave it out of our content entirely.

#### Feedback Feature Claims

| Feature | Can say | Cannot say |
|---------|---------|------------|
| Pronunciation feedback | "Shows which specific words need work" | "Perfect pronunciation scoring" |
| Recording playback | "Replay your own recording and compare to correct" | "AI analyzes your speech" |
| Writing feedback | "Guides you to discover the answer" | "Corrects all grammar mistakes" |
| Target word feedback | "Acknowledges correct Dutch, asks for specific vocabulary" | "Accepts any correct answer" |
| Conversation feedback | "Available but not blocking" | "Real-time correction" |
| Comprehension check | "Shows whether you answered meaningfully" | "Grades your response" |
| Pattern feedback | "Highlights recurring habits after conversation" | "Tracks all your mistakes" |

---

## Proof Points

### Current Proof

| Type | Detail |
|------|--------|
| **Origin story** | Built for co-founder's own inburgering journey. She was fed up with existing solutions — memorization-heavy, no real speaking practice. |
| **Co-creation** | Business partner is primary tester. Course evolved based on what actually helps her learn. |
| **Early results** | Fun learning experience, making correct sentences, expressing herself without memorizing exact phrases, increased confidence. |
| **Status** | Co-founder is actively learning with the course. Real user, real feedback, real iteration. |

### What Works (From Co-Founder Testing)

Documented feedback on why Dutchwithjoost works differently:

**Level-matched responses**: "Joost knows your level... he's not gonna use C2 level Dutch to reply to you." Unlike native speakers who can't calibrate, Joost stays at lesson difficulty.

**No memorization**: "There is no memorizing which I really like because I really hated it so much to spend two hours on one rule with memorizing a million words that don't make sense together."

**Words in context**: "The words that you learn you use... If I'm learning new words and I'm using them in a sentence and I know in which context I'm using them... it helps me communicate."

**Guided structure (low cognitive load)**: "I don't have to think about what now what do I do now. It's just guided... I don't have the cognitive load of trying to engineer my lesson."

**Engaging (time flies)**: "I don't see time passing by with Joost because I'm having fun, because I am very engaged." Compared to gym vs. playing badminton — "still working out but you're having fun doing it."

**Clear progress tracking**: "It's very clear how much effort I'm putting in every day, every session... I can feel that I'm consistent."

**Contrast with past courses**: Previous courses left her feeling "more lost than in the beginning" with isolated vocabulary that didn't connect. Dutchwithjoost ties everything together in usable combinations.

### Proof to Collect

- Pass rate: "X% of users passed the exam"
- Connection stories: how users connected with their environment and local people
- Beyond-exam impact: positive effects after using the tool
- Trustpilot reviews
- Website testimonials

### Case Studies

*None yet. Will add as customers complete the course and pass their exams.*

---

## Competitive Positioning

### Market Category

Dutch language learning for inburgering exam preparation (A2 level). Positioned as the speaking-focused alternative to memorization-based self-paced courses.

### Competitive Landscape

| Competitor | What They Offer | Where They're Strong | Where They're Weak |
|------------|-----------------|---------------------|-------------------|
| **InburgeringOnline** | Popular self-paced online course | Well-known, structured, exam-focused | Relies on memorization. Pass and forget. |
| **Classroom schools** | In-person group classes with teacher | Peer pressure, accountability, human teacher | Expensive, fixed schedule, surprisingly little speaking time |
| **Virtual classroom schools** | Online group classes via video | More accessible than in-person | Same problems as classroom, even less speaking time |
| **Private tutors** | 1-on-1 lessons | Maximum speaking practice, personalized | Expensive per hour, not structured for exam content |
| **Duolingo** | Free gamified language app | Free, fun, habit-forming | Does not prepare for inburgering at all. Community meme about useless Dutch. |
| **Babbel** | Structured language app with A2 package | Better than Duolingo, has curriculum | Not inburgering-focused, no exam prep |
| **Self-study (books/YouTube)** | DIY with free resources | Cheapest option | Requires extreme motivation. No speaking practice. |
| **Other self-paced online courses** | Various online courses | Flexible, self-paced | Heavy memorization, outdated software, don't teach actual usage |

### What Customers Actually Say (Web Research, May 2026)

**About InburgeringOnline**:
- Praise: "Within 45 days I passed all exams", "It's truly a 'one-stop shop'", "Worth every penny"
- Differentiator vs. them: method, not billing — they own "pass the exam," we own "actually speak Dutch afterward." (They have some billing/subscription complaints online, but those are OFF-LIMITS in content — see Red Lines. Never use them.)
- Gap: They dominate "pass the exam" but don't own "actually speak Dutch afterward"
- **From customer intelligence**: "It's basically cards to memorize... It's a cheat sheet to the exam." One user's friend got citizenship through InburgeringOnline but "couldn't even pronounce inburgering" the day he got his passport.

**About Taalthuis** (self-study platform):
- **From customer intelligence**: €300 for 0 to A1. "Very boring grammar rules that I had to memorize... two hours a day... no speaking at all." User finished A1 but "didn't feel like I retained anything."
- Gap: Completion without retention. Users are happy to finish, then realize they learned nothing usable.

**About UVA Amsterdam self-study course**:
- **From customer intelligence**: €390 for A1 to A2. "The UX of the platform was fucking horrible." Difficulty jumps between lessons were "insane" — not incremental. Translation grading rejected synonyms (e.g., "it's okay" marked wrong because expected answer was "it's fine").
- Gap: Poor UX and rigid grading break learning flow.

**About classroom/Zoom courses**:
- Praise: Social experience, networking, human accountability
- Complaints: €500-2,000 for A2, fixed schedules don't fit work/family, limited actual speaking time per person
- **From customer intelligence**: Skepticism about Zoom quality ("Zoom is already messy with meetings, so learning with other people might be more difficult"). Also: "If you're in a class of 12, the teacher can't give you attention full time. It's impossible."
- Gap: Self-motivated learners who don't need peer pressure are underserved

**About Duolingo**:
- "On Useless Language Learning in DuoLingo Dutch" (actual blog post title)
- "Duolingo: Pros and cons for inburgering" content exists — competitors acknowledge its limitations
- Does not prepare for exam format; habit-building yes, exam prep no

**About language exchange / taalcafes**:
- **From customer intelligence**: "In taalcafes everyone comes with different levels. They're not teachers. So you're just mumbling together. You don't even know if what you're learning is correct."
- Gap: Unstructured practice with mismatched levels doesn't work.

**About the market overall**:
- "Most learners don't fail because they don't know Dutch — they underestimate speaking and writing." (Dutch-online.com)
- "The spreken examen is often named as one of the hardest exams" (DutchReview)
- AI conversation practice is emerging (LangBuddy.ai, ChatGPT success stories on Reddit)
- Reddit r/learndutch recommends free resources; no paid courses in official sidebar
- **From customer intelligence**: "Most people complain that even though they take classes and pass the inburgering, they still don't speak... people don't even expect that at A2 you can have a conversation." The expectation of non-fluency after passing is normalized.

### How We Win

We win when someone wants to actually produce Dutch, not just recognize it on a test. They want flexibility (no fixed class times), affordability (vs classroom), and real production practice (vs recognition-based apps). Dutchwithjoost is the only self-paced course where completion requires active vocabulary use in conversation.

### Where We Lose

- Learners who need peer pressure and accountability → classroom is better
- Learners who want a human teacher relationship → private tutor is better
- Learners who learn well by memorizing, just want to pass fast, and don't care about retention → a memorization-based course may suit them better. This isn't universal: for people who hate memorizing or don't retain that way, learning by using the language can be the faster route, not the slower one. Don't assume memorization is faster for everyone.
- Budget of €0 → self-study with free resources
- Already at A2, comfortable in basic conversations, and need B1 now → our zero-to-A2 course isn't the right next step (a B1 course is coming soon). A beginner who will eventually need B1 is still a fit — see "B1 learners: who fits and who doesn't."

### Positioning Gaps We Own

1. **Active production as completion**: No other self-paced course requires you to use vocabulary in conversation to complete a lesson. Others complete when you finish exercises.
2. **Practice prepares, conversation proves**: Two-phase lesson structure where structured practice leads to Joost conversation. The conversation is the proof mechanism.
3. **All exam parts in one**: Covers read, listen, write, speak, and KNM together.
4. **Unlimited production practice**: No scheduling, no hourly rates, make mistakes without judgment.

### Validated Pain Points (Use in Content)

These pain points are documented across community discussions, competitor sites, and reviews:

| Pain Point | Evidence Source | Content Angle |
|------------|-----------------|---------------|
| **Speaking exam anxiety** | DutchReview (named publication, citable) | Position unlimited practice as anxiety reducer |
| **Recognition vs. production gap** | Hopman & MacDonald (2018), "Production Practice During Language Learning Improves Comprehension," Psychological Science (DOI 10.1177/0956797618754486) — peer-reviewed; production-learning participants beat comprehension-learning participants on later comprehension. Also Seidlitz Education. | Core positioning — we require production |
| **Underestimating production skills** | Dutch-online.com (named publication, citable) | Content angle: production skills are where people fail |
| **Isolated word memorization fails** | Taalhammer blog (named publication, citable) | Context-based learning vs. flashcards |
| **Finding speaking partners is hard** | Community discussions (anonymize in content) | Speaking practice solves this |
| **Speaking partners don't match your level** | Customer intelligence (internal use) | Joost always speaks at the lesson's difficulty level |
| **Course value uncertainty** | Community discussions (anonymize in content) | One-time €399 pricing, clear completion criteria |

### Deep Pain Points (From Customer Intelligence)

These pain points are documented in customer interviews. Use the insight, not the source.

**The Shame Cycle**:

A self-reinforcing avoidance pattern that keeps expats from practicing:

1. Can't speak Dutch well
2. Try to speak → feel judged, make Dutch person uncomfortable
3. Dutch person switches to English or struggles to find words
4. Feel responsible for their discomfort + ashamed of own inability
5. Avoid situations where Dutch might be required
6. Isolate ("don't want to ask people, don't want to go out")
7. Can't practice → can't improve → cycle continues

"Everyone expects you to just know... it just makes you feel bad. Makes you feel more of a failure, makes you feel ashamed."

**Content angle**: Judgment-free practice breaks the shame cycle. You can make mistakes without making someone uncomfortable.

**Life Without Dutch**:

Concrete limitations documented in customer interviews:

| Domain | What's Lost |
|--------|-------------|
| **Activities** | Yoga classes, sports, hobbies — all require checking if teacher speaks English. 90% of instructions are Dutch. Feel like a fool missing instructions. |
| **Healthcare** | English-speaking therapists are hard to find. Group therapy unavailable in English. Mental health access limited. |
| **Culture** | Theater, stand-up comedy, most cultural events are Dutch-only. "Very few" English options with "such limited choice." |
| **Career** | Dutch speakers favored for jobs. Non-Dutch speakers miss team bonding (colleagues switch to Dutch after meetings). First to be laid off. |
| **Daily admin** | Bills, tax rules, utilities — all in Dutch. Without a Dutch speaker in household, easy to miss important information. |
| **Understanding environment** | Can't follow politics, news, understand how the country works. "Missing on a lot of my environment." |

"My narrow world became my new world... I totally forgot that those things existed because I'm so used to just not even thinking about it because I know I can't have access to it."

**Content angle**: Dutch isn't just for the exam. It's for accessing your own life.

### Citation Guidelines

**Citable sources (name them in content):**
- Named publications: DutchReview, Taalhammer, Seidlitz Education, Dutch-online.com
- Official sources: DUO, government sites, exam bodies
- Named expert quotes with credentials

**Anonymize (use the insight, not the source):**
- Reddit threads → "A common frustration among Dutch learners..."
- Facebook groups → "Many expats preparing for inburgering report..."
- Forum posts → "Learners often describe..."

**Internal use only (informs writing, never cited):**
- Customer intelligence from transcripts
- Specific implementation details from our product

The insight matters more than the source. Readers don't need to know you found something on Reddit.

#### Evidence Balance and Citation Cap

Our strongest, most ownable proof is how the course works and what early learners experience, not academic research. Lead with product mechanism and experience; treat papers as a backstop.

Evidence order: (1) product mechanism (how a lesson works, what counts as done), (2) experience (early-tester feedback, "one learner"), (3) named publications, (4) academic research.

**Hard cap: at most 1-2 academic (author-year) citations per article, and never stacked on one claim.** More than that reads like a literature review and violates "no academic stiffness." State the point in plain language first; add a citation only as a single anchor for a principle the reader might doubt. The cap protects AEO too: answer engines reward specific, self-contained claims and clean definitions, not citation density.

> The pipeline's primary proof source is `proof-library/product-design-evidence.md` (the pipeline-readable slice of the Product Capabilities and Proof Points sections). Refresh that file when those sections change. The academic backstop lives in `proof-library/research-sources/`.

> **Sync note:** When generating `voice-guide.md`, carry this Evidence Balance rule and the 1-2 citation cap into the "Numbers and Sources" guidance.

### Sales and Pricing in Content

**Include pricing in:**
- BOFU content (comparison pages, pricing pages, "is X worth it" articles)
- Direct response content where price is the point
- Product pages

**Never include pricing in:**
- MOFU thought leadership content
- Educational articles where you're building trust through insight
- Sections that would otherwise feel like advice

Price mentions in thought leadership break the frame. The reader was learning, now they're being sold to.

### Advice Section Guidelines

When giving advice (e.g., "What to look for in a Dutch course"), criteria must be:
- Genuinely useful even if the reader chooses a competitor
- Applicable to multiple options, not just us
- Not suspiciously specific to our product's features

**Test:** If a competitor satisfied these criteria, would you be happy? If no, you've written criteria to disqualify competitors, not to help readers.

### Content Opportunities from Research

**High-intent SEO topics identified**:
- "inburgering speaking exam tips"
- "passed inburgering but can't speak Dutch"
- "inburgering course worth it"
- "Dutch speaking practice online"
- "how to remember Dutch vocabulary"

**Comparison content angles**:
- InburgeringOnline vs. classroom: honest trade-offs
- Free resources vs. structured courses
- One-time pricing vs. subscription cost (BOFU/comparison content only — never in educational/MOFU pieces; frame as a neutral cost comparison, never as a billing-complaint attack)

**Thought leadership angles**:
- "Why you pass the exam but can't order coffee in Dutch"
- "The recognition vs. production gap in language learning"
- "What 500 days on Duolingo won't teach you about Dutch"

**New angles from customer intelligence**:

| Topic | Source Insight | Content Angle |
|-------|----------------|---------------|
| **The shame cycle** | Documented avoidance pattern: can't speak → feel judged → avoid → isolate → can't practice | "Why expats stop trying to speak Dutch (and how to break the cycle)" |
| **Life without Dutch** | Concrete losses: therapy, activities, career, culture access | "What you can't do in the Netherlands without Dutch" |
| **Dutch partner doesn't help** | Level mismatch, can't explain grammar, partner fatigue | "Why your Dutch partner can't teach you Dutch" |
| **Career protection** | Dutch speakers favored, non-Dutch first to be laid off | "How Dutch protects your career in the Netherlands" |
| **Visa anxiety depth** | Constant proving, can't be weak, fragile 5-year progress | "The hidden anxiety of building a life on a temporary visa" |
| **Citizenship ≠ just passing** | "I don't feel I deserve that passport if I don't speak" | "Why passing the exam isn't enough to feel Dutch" |
| **Normalized non-fluency** | "People don't even expect A2 means conversation" | "The dirty secret of A2: why most people can't speak after passing" |
| **Taalcafe reality** | Different levels, not teachers, "mumbling together" | "Why language cafes don't work (and what does)" |

### Red Lines (Never Cross)

These are absolute prohibitions when writing about competitors:

1. **Never claim competitors don't work.** People pass with every approach.

2. **Never mock competitor methods.** "Clicking through screens" and "just memorization" are dismissive.

3. **Never compare track record.** We're newer. Don't mention it.

4. **Never compare speed.** "Faster" or "slower" claims are unverifiable.

5. **Never assume competitor intentions.** We don't know why they built their course the way they did.

6. **Never use competitor billing or Trustpilot complaints in any published content — at all.** This covers auto-renewal, surprise charges, refused refunds, and billing-issue reviews. They are about billing, not learning quality, and citing them is unfair and off-brand. This is a hard rule, not a "use carefully." Stating that a competitor uses subscription pricing is allowed only as a neutral cost fact in BOFU/comparison content (see Comparison content angles), never in educational/MOFU content and never framed as a complaint.

7. **Never say "we're the only course that..."** It's almost always false and sounds arrogant.

8. **Never position competitors as the enemy.** The enemy is not speaking Dutch. Competitors are just different approaches to the same goal.

9. **Never imply competitor courses are "easy to build" or that they took shortcuts.** Phrases to avoid:
   - "easier to build and assess"
   - "straightforward to create and grade"
   - "optimize for what's easy to deliver"
   - "courses favor X because it's easier"

   Instead, simply state what those courses train without explaining *why* they were built that way.

### Per-Competitor Language Guides

#### InburgeringOnline

| Do NOT say | Say instead |
|------------|-------------|
| "Just memorization" | "Memorization-based approach" |
| "Clicking through screens" | "Video lessons and practice exercises" |
| "Easy to build" | Do not mention |
| "They focus on quantity over quality" | Do not say (judgmental) |
| "Cheat sheet to the exam" | Do not say (too harsh) |
| "They have more track record than us" | Do not mention track record comparison |
| "We're newer" | Do not mention |
| "Their approach is faster" | Do not compare speed |
| "They only teach you to pass" | "Their approach focuses on exam preparation" |

**When to mention:**

| Content type | Mention by name? | How to frame |
|--------------|------------------|--------------|
| Comparison article | Yes | Neutral side-by-side |
| "Best inburgering courses" roundup | Yes | As one option among several |
| "Why speaking practice matters" | No | Reference "memorization-based courses" generally |
| Thought leadership | No | Do not mention competitors |

#### Duolingo

| Do NOT say | Say instead |
|------------|-------------|
| "Useless for inburgering" | "Not designed for inburgering" |
| "Just a game" | "Gamified learning app" |
| "You'll learn nothing useful" | "Focuses on vocabulary basics" |
| "Waste of time" | "Good for habit building, limited for exam prep" |

#### Classroom Courses

| Do NOT say | Say instead |
|------------|-------------|
| "Expensive" | State the price range, let readers judge |
| "Rigid schedules" | "Fixed schedules" |
| "You only get 5 minutes of speaking time" | "Speaking time is divided among students" |
| "Outdated" | Do not say |
| "You're just a number" | Do not say |
| "Teachers aren't qualified" | Do not say (often untrue) |

#### Generic AI Tools (ChatGPT, etc.)

| Do NOT say | Say instead |
|------------|-------------|
| "Random practice" | "Unstructured conversation practice" |
| "AI doesn't work" | "AI doesn't follow a curriculum" |
| "You can't learn from AI" | "AI practice works best alongside structured learning" |
| "Chatbots are basic" | "General-purpose AI isn't designed for exam prep" |

**Critical warning:** Do NOT include quotes like "I passed all exams with AI alone" in content. This undermines our positioning.

### Handling Common Competitor Questions

**"Is InburgeringOnline good?"**
Fair answer: "InburgeringOnline works well for exam preparation. They have good reviews and many people have passed using their course. Their approach focuses on memorization and mock exams. If speaking practice is a priority for you, that's where Dutchwithjoost differs."

**"Should I use Duolingo for inburgering?"**
Fair answer: "Duolingo isn't designed for the inburgering exam. It won't cover KNM and doesn't match the exam format. It can help build a daily habit and learn basic vocabulary. Many people use it alongside other preparation."

**"Are classroom courses worth the money?"**
Fair answer: "Classroom courses are worth it if you value a social environment, human teacher, and fixed schedule. They typically cost €500-2,000 for A2. Speaking time is divided among students. If you want more individual practice time and flexible scheduling, self-paced options may fit better."

**"Can I just use ChatGPT?"**
Fair answer: "You can practice conversation with ChatGPT. It won't teach you what you need for the KNM section or follow a curriculum. Some people use AI alongside structured learning. If you want guidance on what to learn and when, a course with a curriculum helps."

### Verified Competitor Facts (Check Before Publishing)

These facts must be verified on competitor websites before publishing. Prices and ratings change.

**InburgeringOnline:**

| Fact | Value | Verification needed? |
|------|-------|---------------------|
| Pricing | €24.95/month (12-month plan) to €34.95/month (6-month plan) — roughly €210–€300 total to reach A2 | Check their website before publishing |
| Trustpilot rating | ~4.4 stars | Check current rating before publishing |
| Method | Video lessons, practice exercises, mock exams | Verified from website |
| Coverage | All exam components | Verified |
| Endorsed by | DutchReview recommends them | Verified |

**Duolingo:**

| Fact | Value |
|------|-------|
| Price | Free (with ads) or Plus subscription |
| Inburgering-specific content | No |
| KNM coverage | No |
| Speaking practice | Minimal (repeat-after-me style) |
| Gamification | Strong (streaks, XP, leaderboards) |

**Classroom Courses:**

| Fact | Typical range |
|------|---------------|
| Price | €500 - €2,000 for A2 level |
| Format | Scheduled group sessions |
| Class size | 8-15 students typically |
| Duration | 3-6 months typically |
| Human teacher | Yes |

**Generic AI Tools:**

| Fact | Value |
|------|-------|
| Price | Free or subscription |
| Curriculum | None (open-ended) |
| Exam-specific content | None |
| Conversation ability | Yes (unlimited) |
| Dutch accuracy | Generally good, occasional errors |

### Quick Reference: Per-Competitor Summary

| Competitor | Name directly? | Key distinction | What to acknowledge |
|------------|----------------|-----------------|---------------------|
| InburgeringOnline | Yes in comparison content | Exam prep focus vs. conversation focus | Track record, comprehensive coverage |
| Duolingo | Yes | Not designed for inburgering | Habit building, low barrier |
| Classroom courses | General term OK | Fixed schedule vs. flexible | Human teacher, social environment |
| ChatGPT/AI | General term OK | Unstructured vs. curriculum | Unlimited practice, free |
| Free resources | Mention DUO practice exams | Supplement vs. complete solution | Accessibility, official practice exams |
| Babbel/Pimsleur | Only if asked | General Dutch vs. exam prep | Quality for general learning |
