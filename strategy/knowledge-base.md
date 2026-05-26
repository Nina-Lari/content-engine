# Dutchwithjoost Master Knowledgebase

> This is the single source of truth for all GTM content. Edit this file, then run `/sync-context` to update derived modules.

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

2. **Conversation phase** — After completing 3 practice sessions, the learner unlocks a conversation with Joost. Joost stays in the lesson scenario but creates a new conversation, prompting the learner to use target vocabulary naturally.

**The completion criterion:**

A lesson is NOT complete when you finish the exercises. A lesson is complete when you've actively used 90% of the target vocabulary in conversation with Joost, with each word requiring 2+ successful uses.

This is the core differentiator: **active production is the success criterion, not passive completion.**

Other courses complete when you click through all the screens. Dutchwithjoost completes when you can produce the language.

> See `strategy/product-curriculum.md` for the full curriculum design document.

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
- **B1 level**: Higher CEFR level required for post-2022 mandatory integration. Not currently offered by Dutchwithjoost.
- **KNM**: Kennis van de Nederlandse Maatschappij — the knowledge of Dutch society exam, one of the inburgering components.
- **BSN**: Burgerservicenummer — Dutch citizen service number. BSN registration date determines whether A2 or B1 is required.

### Key Concepts

**Practice prepares, conversation proves**: The core learning loop. Structured practice (read/speak, listen/speak, write) gives you the material. Conversation with Joost proves you can actually use it. Other courses stop at practice. We require production.

**Active production as completion**: A lesson isn't done when you finish the exercises. It's done when you've actively used 90% of the vocabulary in conversation. Recognition is not enough. You must produce.

**Scenario-based learning**: Every lesson is a realistic situation: ordering at a pharmacy, making an appointment, meeting neighbors. You're not learning vocabulary lists. You're preparing to handle real Dutch interactions.

**Interleaved practice**: For each sentence, you practice three ways in sequence (read → listen → write) before moving on. This interleaving is more effective than batching all reading, then all listening, then all writing.

**Spaced repetition built-in**: Practice sessions include review of earlier material. You meet vocabulary multiple times across sessions before relying on it in conversation.

**Confidence before conversation**: Real-world Dutch conversations are high-stakes — you feel judged, you freeze up, you switch to English. Hundreds of low-stakes practice moments with Joost build confidence first.

---

## Target Market

### ICP Definition

Non-EU nationals living in the Netherlands who need to pass the A2 inburgering exam for permanent residence or Dutch citizenship. They have decided the Netherlands is their permanent home and want to break out of the expat/English bubble.

They cannot commit to fixed class schedules — irregular work hours, family obligations, or preference for home learning. They are self-motivated enough to study alone. They care about actually using Dutch, not just passing the test. They will research and choose their own course rather than being assigned one.

**Exclusions**: Refugees (assigned courses by municipality), anyone requiring B1 level (not offered yet).

### Firmographics

| Attribute | Criteria |
|-----------|----------|
| Nationality | Non-EU |
| Location | Currently in the Netherlands |
| Visa type | Partner visa or Work visa (visa type is a modifier, not a segment — see Personas) |
| Exam requirement | A2 level (pre-2022 BSN or voluntary naturalization) |
| Timeline | Usually start searching in first year of arrival |

### Dream Customer

Someone with strong belonging and family motivations — wants to participate in Dutch life, not just pass an exam. Has a Dutch partner or family connection that creates social pressure beyond the legal requirement. Self-motivated, prefers flexible home learning, frustrated with memorization-based courses that don't teach real speaking. May have tried other courses and been disappointed.

The visa type matters less than the motivation profile: someone with a work visa can have the same belonging/family motivations as a partner visa holder. The dream customer cares about actually using Dutch, not just earning a certificate.

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
- "After 4 months with AI, I passed all exams first try straight 10s" (Reddit success story)
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
- Classroom average: €1,160 for A2. Self-paced: €60-600.
- Schedule inflexibility is a documented frustration for working professionals

**Emotional dimension**: Financial stress, resentment at "integration tax," desire for value clarity.

**Our answer**: One-time €399 pricing with clear completion criteria addresses both cost and trust.

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
| **Belonging** | "I want to feel at home, not like a permanent guest." |
| **Family** | "I can't talk to my nieces, my in-laws, participate in family life." |
| **Identity** | "I don't deserve the passport if I don't speak the language." |
| **Integration** | "I want access to therapy, culture, hobbies, activities." |
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
- Complaints: Billing/subscription issues on Trustpilot, unclear auto-renewal, ignored refund requests
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
- Reddit r/learndutch validates free/AI alternatives; no paid courses in official sidebar
- **From customer intelligence**: "Most people complain that even though they take classes and pass the inburgering, they still don't speak... people don't even expect that at A2 you can have a conversation." The expectation of non-fluency after passing is normalized.

### How We Win

We win when someone wants to actually produce Dutch, not just recognize it on a test. They want flexibility (no fixed class times), affordability (vs classroom), and real production practice (vs recognition-based apps). Dutchwithjoost is the only self-paced course where completion requires active vocabulary use in conversation.

### Where We Lose

- Learners who need peer pressure and accountability → classroom is better
- Learners who want a human teacher relationship → private tutor is better
- Learners who just want to pass fast and don't care about retention → memorization courses are faster
- Budget of €0 → self-study with free resources
- Need B1 level → we don't offer this yet

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
| **Recognition vs. production gap** | Seidlitz Education (education publisher, citable) | Core positioning — we require production |
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
- Subscription fatigue vs. one-time pricing

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
