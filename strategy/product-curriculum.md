# Curriculum and Lesson Model

This document explains, at a conceptual level, how the Dutch with Joost curriculum works, how learners progress through lessons, and what it means to finish a lesson.

It is intended as a shared mental model for future product decisions, prompts, and coding agents. It deliberately avoids implementation details unless they are important to understanding the learning design.

## Big picture

The course is a sequence of scenario-based Dutch lessons. Each lesson teaches the learner to handle one realistic situation in Dutch, such as a short everyday interaction, appointment, service encounter, or practical conversation.

A lesson is not just a list of vocabulary words. It has three connected layers:

1. **A scenario** — the real-life situation the learner is preparing for.
2. **A practice script** — short Dutch lines that model the kind of conversation the learner needs.
3. **Target vocabulary and patterns** — words, phrases, and grammar patterns the learner should be able to use actively.

The learning goal is not passive recognition. A lesson is finished only when the learner has practiced enough of the scripted material and then used most of the lesson vocabulary in an active conversation with Joost.

## The two-phase lesson structure

Each lesson has two main phases:

1. **Practice phase**
2. **Conversation phase**

The practice phase prepares the learner. The conversation phase tests and reinforces whether the learner can use the language actively.

### Phase 1: Practice

In practice, the learner works through the lesson script in small chunks called **sentence units**.

A sentence unit is one complete thought. Sometimes it is one line. Sometimes it is multiple short lines that belong together. The learner practices one sentence unit at a time instead of trying to absorb the entire lesson at once.

For each sentence unit, the learner practices three skills in order:

1. **Read & Speak** — the learner sees the Dutch and says it aloud.
2. **Listen & Speak** — the learner hears the Dutch and repeats it.
3. **Write** — the learner produces the sentence in writing.

This creates an interleaved pattern:

> Sentence unit 1: read → listen → write
> Sentence unit 2: read → listen → write
> Sentence unit 3: read → listen → write
> and so on

The learner does not complete all reading first, then all listening, then all writing. Instead, every sentence unit is practiced across all three skills before moving on. This makes the practice more active and helps transfer the language into usable memory.

## Practice sessions

A lesson is divided into multiple **practice sessions**.

Each session contains:

- **New sentence units** that introduce new parts of the lesson.
- **Review sentence units** from earlier sessions.

The purpose is spaced repetition. A learner sees new material, then meets it again in later sessions before relying on it in conversation.

Conceptually:

- Session 1 introduces the first batch of lesson content.
- Session 2 reviews earlier content and introduces more.
- Session 3 reviews recent content and introduces more.
- Later sessions continue this rolling pattern.
- The final practice session is mainly review.

A session is complete when the learner has completed all three skills — read, listen, and write — for every sentence unit in that session.

Completing a practice session permanently records that the learner has done that session. The learner may review completed sessions again, but review is different from first-time progression: review does not unlock new curriculum content.

## How the learner progresses through practice

The learner progresses through practice by completing sessions in order.

The current session is the next session that still needs to be completed. Future sessions remain locked until the earlier required sessions are complete.

At any point, a learner can generally think of a lesson as being in one of these states:

1. **Not started** — no meaningful practice has been completed yet.
2. **In practice** — the learner is working through practice sessions.
3. **Conversation unlocked** — the learner has practiced enough to start speaking with Joost.
4. **Practice fully completed** — all practice sessions in the lesson are complete.
5. **Lesson completed** — the learner has used enough target vocabulary in conversation.

Important: practice completion and lesson completion are related, but they are not the same thing.

## Unlocking the conversation with Joost

The learner does not need to finish every practice session before starting the Joost conversation.

Conversation unlocks after the learner has completed the minimum required number of practice sessions. Currently, that threshold is:

> **3 completed practice sessions**

This means the learner must do enough structured practice before entering free conversation. The purpose is to prevent the conversation from becoming too difficult or too ungrounded.

When conversation unlocks, Joost should only focus on language the learner has already practiced. The conversation is scoped to the completed practice sessions, not necessarily the entire lesson.

So if a learner has completed only the first three sessions, Joost should focus on words, themes, and script content from those practiced sessions. As the learner completes more sessions, more lesson content becomes available for conversation.

## The role of Joost conversation

The Joost conversation is where the learner turns practiced material into active Dutch.

Joost is not meant to simply repeat the script. Instead, Joost creates a natural new conversation inside the same lesson scenario and themes.

Joost should:

- Stay in character for the lesson scenario.
- Speak in Dutch at the learner's current level.
- Use the practiced script as a language boundary.
- Encourage the learner to use target words naturally.
- Ask short, relevant questions that keep the conversation moving.
- Avoid forcing vocabulary unnaturally.
- Correct gently by modeling better phrasing, not by over-explaining.

The goal is for the learner to retrieve and use lesson vocabulary in context, not just recognize it.

## How vocabulary progress works

Each lesson has a set of target words or phrases.

A word becomes part of the learner's active progress when they use it in the Joost conversation. The learner usually needs to use a word more than once before it counts as learned.

Current mastery rule:

> A word is considered learned after it has been used successfully **2 times**.

Words can be in three broad states:

1. **New** — introduced by practice, but not yet used enough in conversation.
2. **Practicing** — used at least once, but not yet mastered.
3. **Learned** — used enough times to meet the mastery threshold.

This makes vocabulary completion based on active production, not just exposure.

## How a lesson is finished

A lesson is finished when the learner has:

1. Completed enough practice to unlock conversation with Joost.
2. Used enough of the lesson's target vocabulary in conversation.

Current lesson completion target:

> The learner must learn at least **90% of the lesson vocabulary**.

Because a word currently counts as learned after 2 successful uses, finishing a lesson means the learner has actively used roughly 90% of the target words enough times in conversation.

When this threshold is reached, the lesson is marked as completed.

In plain English:

> A lesson is complete when the learner has practiced the material enough to speak with Joost, then used most of the important words from that lesson correctly in conversation.

## Practice completion vs. lesson completion

These two concepts should stay separate.

### Practice completion

Practice completion means:

> The learner completed all practice sessions for the lesson.

This shows they have worked through the full scripted lesson material across reading, listening, and writing.

### Lesson completion

Lesson completion means:

> The learner has demonstrated active use of the lesson vocabulary in conversation.

A learner can unlock conversation before completing all practice sessions. They can also complete all practice sessions but still need more conversation practice before the lesson itself is complete.

The product should treat lesson completion as the stronger signal: it means the learner has moved from guided practice into active use.

## Progress display concept

Lesson progress is mostly based on vocabulary learned, because active vocabulary use is the main completion goal.

However, unlocking Joost is also a major milestone, so the learner may receive a visible progress boost once conversation is available.

Conceptually:

- Learning more words increases lesson progress.
- Unlocking Joost is a meaningful milestone in progress.
- Once the learner reaches the vocabulary completion target, the lesson should display as 100% complete.
- If the lesson has already been marked complete, it should stay complete.

## Curriculum progression across lessons

The overall course progresses lesson by lesson.

A completed lesson means the learner has successfully handled that lesson's scenario well enough to move forward. The home/lesson journey can use completed lessons to show where the learner is in the curriculum and what lesson they should do next.

The intended progression is:

1. Start the next lesson scenario.
2. Complete structured practice sessions.
3. Unlock conversation with Joost.
4. Use target vocabulary actively.
5. Finish the lesson at the vocabulary mastery threshold.
6. Move to the next lesson.

## Why the system works this way

The curriculum is designed around gradual transfer:

1. **Exposure** — the learner first sees and hears useful Dutch in a realistic script.
2. **Controlled production** — the learner repeats and writes sentence units accurately.
3. **Spaced review** — the learner meets the same material across multiple sessions.
4. **Guided conversation** — Joost prompts the learner to use the language in a new but familiar context.
5. **Active mastery** — the lesson completes only after the learner has used most target words themselves.

The central idea is:

> Practice prepares the learner; conversation proves and strengthens active use.

## Short explanation for future agents

If you need to explain this curriculum to another agent, use this summary:

> Each lesson is a scenario-based Dutch conversation lesson. The learner first practices the lesson script in small sentence units. Every unit is practiced through read/speak, listen/speak, and writing. Lessons are split into spaced practice sessions with both new and review content. After 3 completed practice sessions, the learner unlocks a Joost conversation scoped to the material they have practiced. Joost guides a natural Dutch conversation and encourages the learner to use the lesson's target words. Words count as learned after 2 successful uses. The lesson is completed when the learner has learned about 90% of the lesson vocabulary through active conversation use. Practice completion means all sessions are done; lesson completion means the learner has demonstrated active vocabulary mastery.
