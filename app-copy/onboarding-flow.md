# Onboarding Flow — Joost Chat Questionnaire

> Conversational onboarding copy. Joost is the user's Dutch conversation partner.
> Flow: Welcome → Q1 → (Q2 if exam) → Q3 → Closing. Each answer gets a tailored Joost response.
> Branching: Q1 a2_exam/b1_exam → Q2 → Q3. Q1 other → skips Q2, straight to Q3.
> Each piece has a **Full** and a **Short** version. Pick one per slot, or ship Short for a lighter
> onboarding. Delete whichever you don't use.
> Style guardrails: no em-dashes, no semicolons, no hype, don't label the tech (Joost is just Joost),
> no pricing, no DUO mentions. See `strategy/voice-guide.md` and `.claude/rules/writing-quality.md`.

---

## 0. Welcome

> User clicks Continue → Q1

**Full:** Hoi, I'm Joost. I'm the one you'll actually practise speaking Dutch with, out loud, as much as you want. Before we start, tell me a few things about you so I can meet you where you're at. Quick and honest, no wrong answers.

**Short:** Hoi, I'm Joost, your Dutch speaking partner. A few quick questions so I can meet you where you're at. No wrong answers.

---

## 1. Q1 — Learning goal

**Joost asks:** Why are you learning Dutch?

### a2_exam — 🎓 To pass the A2 inburgering exam

> → Q2

**Full:** A2 is the Dutch of everyday moments: buying a train ticket, calling the doctor, small talk with a neighbour. That's what we practise, in small conversations. Learn the words by using them and they're already there when the exam asks for them.

**Short:** A2 is everyday Dutch: the doctor, the shop, a neighbour. You practise it in real conversations here, so the words are ready when the exam asks.

### b1_exam — 📚 To pass the B1 inburgering exam

> → Q2

**Full:** Quick bit of honesty first: this course takes you from zero up to a solid A2, not all the way to B1 yet. So if you're already comfortable speaking at A2 and just need the final stretch, I'm not your full answer right now. But if you're nearer the start, or you reached A2 by memorising and still can't hold a conversation, this is a strong place to build the foundation B1 needs. B1 is mostly about using Dutch more freely, and that's what you practise here from day one.

**Short:** Honest heads-up: this course covers zero to A2, not B1 yet. But if you're starting out, or got to A2 by memorising and still can't hold a conversation, it's a strong base to build on.

### other — 🌍 Other reasons (work, partner, personal interest)

> → skips Q2, goes to Q3

**Full:** Honestly the best reason there is. The exam fades, but the life stays: following the family dinner instead of smiling through it, joining a class without first checking if it's in English, feeling at home instead of like a guest. We'll build Dutch you actually use, by using it here first.

**Short:** Best reason there is. We'll build Dutch you actually use, the kind that opens up family dinners, classes, and everyday life here.

---

## 2. Q2 — Exam struggle area

> Only shown if Q1 was a2_exam or b1_exam. UI re-shows the Q1 response above this question.

**Joost asks:** Which part of the exam feels like it will be hardest for you?

### speaking — 🗣️ Speaking

> → Q3

**Full:** Speaking scares almost everyone, so you're in good company. Most courses save it for the end, which is why it stays scary. Here you're speaking from the first lesson, at your level, where mistakes cost nothing and you can see which words to clean up. By exam day, the speaking test is just one more conversation, the kind you've been having all along.

**Short:** Speaking worries almost everyone. Most courses save it for the end, so it stays scary. Here you speak from lesson one, at your level, where mistakes are free. By exam day, it's familiar.

### reading — 📖 Reading

> → Q3

**Full:** Reading looks like a wall of unfamiliar words at the start. But you read every line out loud as you practise it, so the words on the page are ones you've already read and used yourself. A word you've produced is a word you recognise on sight, on a sign or in an email. It adds up faster than you'd expect.

**Short:** Reading looks like a wall at first. But you read every line out loud as you learn it, so the words on the page are already yours.

### listening — 👂 Listening

> → Q3

**Full:** Yeah, Dutch comes at you fast, and nobody catches it all at first. In every lesson you hear each line and say it straight back, so your ear trains on the exact words you're learning to use. Then you have to follow me to keep the conversation going. Your ear sharpens because you're using what you hear, lesson by lesson.

**Short:** Dutch comes fast, and nobody catches it all at first. Each lesson you hear a line, say it back, then follow me to answer. Your ear sharpens by using what you hear.

### writing — ✍️ Writing

> → Q3

**Full:** Writing trips people up because it's a blank page. We don't start you there. You write each sentence right after you've heard it and said it out loud, so the spelling and word order are already familiar by the time you write them down.

**Short:** Writing is hardest on a blank page, so we don't start you there. You write each sentence right after you've heard it and said it out loud, when it's already familiar.

### knm — 🇳🇱 KNM (Dutch society knowledge)

> → Q3

**Full:** KNM sounds like a trivia test about the Netherlands, but it's about how daily life works here: doctors, housing, work, money. Rather than studying it as a separate block of facts, you meet these themes inside the lesson scenarios themselves. You learn how the country runs as part of learning the Dutch to handle each situation.

**Short:** KNM sounds like trivia, but it's how daily life works here: doctors, housing, work, money. You meet it inside the lessons, so you learn how the country runs as you go.

---

## 3. Q3 — Speaking confidence

> UI re-shows the previous response (Q2 if shown, otherwise Q1) above this question.

**Joost asks:** How do you feel about speaking Dutch right now?

### nervous — 😰 Nervous. I'm afraid of making mistakes

> → Closing

**Full:** That fear is normal. The hardest part is that everyone around you expects you to just know. In here, nobody's watching. You can say it wrong, laugh, and try again ten times, and the only one who hears is me. Make your mistakes in here, where they cost you nothing.

**Short:** That fear is normal. In here, nobody's watching. Say it wrong, laugh, try again ten times. Make your mistakes where they cost you nothing.

### freeze — 🥶 I freeze up in real conversations

> → Closing

**Full:** Freezing usually means the Dutch is already in there, you just can't pull it up fast enough yet. Speed like that only comes from doing it. Every conversation here makes you reach for the words, so next time they arrive a little quicker, until reaching for them stops feeling like freezing.

**Short:** Freezing usually means the Dutch is in there, you just can't grab it fast enough yet. Speed comes from doing it. Every conversation makes the words arrive quicker.

### confident — 💪 Confident, but I want to improve my fluency

> → Closing

**Full:** Nice, that's a head start. From here, fluency is mostly volume. The more you talk, the smoother it gets. So we'll push you into longer conversations and tidy up the small mistakes that slip through, while adding new words so you're never stuck for one.

**Short:** Nice, that's a head start. From here, fluency is mostly volume. We'll stretch your conversations and clean up the small stuff as you go.

### avoid — 🙈 I avoid speaking Dutch when I can

> → Closing

**Full:** Avoiding it makes complete sense, it's the safe move. The catch is the loop: skip speaking, stay rusty, dread it more, skip it again. The way out is a version of speaking that costs nothing when it goes wrong. That's this. Practise where it's private, and trying it out there stops feeling like such a risk.

**Short:** Avoiding it makes sense, it's the safe move. But it's a loop: skip, stay rusty, dread it more, skip again. The way out is speaking where it costs nothing. That's here.

---

## 4. Closing

> UI re-shows the Q3 response above this line. User clicks Let's Start → onComplete(answers).

**Full:** Okay, I've got a feel for you now, where you're starting and what you're after. Enough talking about it. Let's go and actually speak some Dutch. Klaar? (ready)

**Short:** Okay, I've got a feel for you now. Enough talking about it, let's go speak some Dutch. Klaar? (ready)

---

## Branch summary

- **Path 1 — A2:** Welcome → Q1(A2) → Q2 → Q3 → Closing
- **Path 2 — B1:** Welcome → Q1(B1) → Q2 → Q3 → Closing
- **Path 3 — Other:** Welcome → Q1(Other) → Q3 → Closing

Captured answers: `learningGoal`, `examStruggleArea` (null if skipped), `speakingConfidence`
