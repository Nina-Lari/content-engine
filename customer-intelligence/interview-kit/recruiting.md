# ICP Interview Kit: Recruiting

Goal: book 8 to 10 interviews with real people in the ICP who are **not** already Dutchwithjoost users. This is what breaks the single-source problem. Right now every insight, lexicon entry, and keyword candidate traces back to one interview (the co-founder). New voices let `/extract-insights` weight pains by how often they actually come up, instead of treating one person's story as the whole market.

Pair this with `interview-guide.md` (the 30-minute script) and `screening.md` is folded in below.

---

## Who you are looking for

Screen for the ICP, not just anyone learning Dutch.

**Must have all of these:**

- Non-EU national (EU nationals have no integration obligation)
- Currently living in the Netherlands
- Needs to pass, is preparing for, or recently passed the inburgering exam (A2 under the 2013 law, or B1 under the 2021 law — both count, the recognition-vs-production problem applies to both)
- Chose or is actively researching their own way to learn (self-directed, not assigned a course by the municipality)

**Exclude:**

- Refugees on a municipality-assigned track (different buyer, not the ICP)
- People with zero interest in speaking Dutch beyond the certificate (they are a real segment, but interview them last and tag them clearly — they are your contrast case, not your core)

**Aim for a spread across the personas**, so the patterns in `strategy/personas.md` get tested against more than one person. Target roughly two per pattern:

| Pattern | Who | Why you need them |
|---------|-----|-------------------|
| A | Partner visa + Dutch family | Tests the deadline + family-scrutiny + "Dutch partner can't teach me" angles |
| B | Work visa, security-focused, schedule-constrained | Tests procrastination, job-security anxiety, prior-course skepticism |
| C | Work visa, full motivation stack, passport vulnerability | This is Nina's pattern — get 1 or 2 fresh ones to confirm vs. contradict her |
| D | Long-term resident, integration-focused, deadline may have passed | Tests the "life narrowed without Dutch" and resignation angles |

The single most valuable interview is someone in a pattern you currently have **no** data on (A, B, or D). Prioritize those.

---

## Where to find them

- **Facebook expat and inburgering groups** (e.g. groups for internationals in your city, "inburgering" and "learn Dutch" groups). Highest hit rate. Use message A.
- **Reddit r/learndutch and city expat subreddits.** Read the rules first; most ban promotion. You are not promoting anything, so frame it strictly as research. Use message B.
- **Your own network and warm intros** — friends-of-friends who fit. Just do not use existing Dutchwithjoost users or close friends of the co-founder; that reintroduces the bias you are trying to remove. Use message C.
- **LinkedIn**, for the career-motivated work-visa segment (Pattern B and C). Use message D.

---

## Recruiting messages

Keep them short. Do not mention Dutchwithjoost or any product. You are a person doing research, not a company running a campaign. The moment it reads like marketing, your response rate and your honesty both drop.

### Message A — Facebook groups

> Hi everyone. I'm doing some research on what it's actually like to learn Dutch for inburgering as a non-EU expat, and I'd love to hear real stories. If you've prepared for (or are preparing for) the inburgering exam and you sorted out your own way to learn, would you be up for a 30-minute call to tell me how it's gone? Not selling anything, not a course pitch. Just trying to understand the experience properly. I can send a €20 gift card as a thank you. Drop a comment or DM me and I'll share a couple of quick questions to check it's a fit.

### Message B — Reddit (research-framed, no promotion)

> **Looking to interview non-EU expats preparing for the inburgering exam (30 min, thank-you gift)**
>
> I'm researching how people actually go about learning Dutch for inburgering — what you tried, what worked, what was frustrating. If you're a non-EU national in the NL who has prepared for or passed the exam and figured out your own learning path, I'd really value 30 minutes of your time. This is research, not a sales call, and nothing gets shared without anonymizing it. Happy to send a small thank-you. Comment or DM and I'll send a few screening questions.

### Message C — Warm intro / network

> Hi [name], quick favor. I'm interviewing non-EU expats about their experience learning Dutch for inburgering — the courses they tried, what stuck, what didn't. Do you know anyone who's been through it (or is going through it now) who'd give me 30 minutes? Not a sales thing, purely research, and I'll anonymize everything. A small thank-you gift for whoever does it.

### Message D — LinkedIn (work-visa / career segment)

> Hi [name], I'm researching how internationals on work visas handle the Dutch language and inburgering requirement alongside a demanding job. If you've been through it, I'd value a 30-minute conversation about what that was actually like — the time pressure, the courses, what helped. Research only, fully anonymized, and a small thank-you for your time. Open to it?

---

## Screening (before you book)

Once someone responds, send these five questions (or ask in DMs). They take 60 seconds and stop you wasting a slot on the wrong person.

1. What's your nationality, and how long have you lived in the Netherlands?
2. Do you need to pass the inburgering exam? At what level (A2 or B1), and is there a deadline?
3. What visa are you on (partner, work, other)?
4. How have you tried to learn Dutch so far? (course, app, classes, self-study, nothing yet)
5. Are you up for a recorded 30-minute call in the next two weeks?

**Book them if:** non-EU, in the NL, needs/needed inburgering, and has tried or is actively choosing how to learn. Note which persona pattern they seem to fit so you can fill gaps in your spread.

---

## Incentive: keep the research honest

A small neutral incentive (a €20 to €25 gift card) gets you a much higher booking rate and keeps the feedback unbiased.

**Do not** give free course access *before* the interview as the incentive. Someone who's just been handed your €399 product will tell you what they think you want to hear, and you came here for the truth, not for praise. If you want to offer free access, do it as a separate beta invitation *after* the interview is done, framed as a thank-you, not as payment for the call. Better still, keep beta recruiting in its own track so the research interviews stay clean.

---

## Consent and anonymization (say this at the start of every call)

> Mind if I record this? It's just so I don't have to scribble notes while you talk. It stays internal to my research, and if I ever use anything from it publicly, it gets anonymized — no name, no details that identify you.

This matches the anonymization rules the rest of the system already follows (`.claude/rules/writing-quality.md` → Customer Anonymization). Use a pseudonym from the moment you save the file, so no real name ever enters the pipeline.

---

## After the call

1. Get a transcript (see capture instructions at the end of `interview-guide.md`).
2. Save it to `customer-intelligence/transcripts/` using a pseudonym: `{pseudonym}_{YYYY-MM-DD}.md`.
3. Run `/extract-insights customer-intelligence/transcripts/{file}` to turn it into a structured insight file.
4. After about 6 to 10 interviews, regenerate the topic backlog with `/research-brief`. With multiple sources, it can finally weight pains by frequency instead of flagging "single-source backlog."
