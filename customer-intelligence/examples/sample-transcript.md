# Sample Call Transcript

**Call type:** Discovery / Demo
**Date:** 2026-03-18
**Duration:** 38 minutes
**ComplianceOS rep:** Sarah Chen, Account Executive
**Prospect:** David Kowalski, VP of Compliance, MeridianCare Health Systems
**Company:** ~2,000 employees, multi-state healthcare network

---

**[00:00:42] Sarah:** Thanks for taking the time today, David. I know compliance leaders in healthcare aren't exactly sitting around with free calendar slots. Before I show you anything, I'd love to understand what's driving this conversation on your end.

**[00:01:15] David:** Yeah, appreciated. So the short version is — we're drowning. We've got HIPAA, SOC 2, and we're starting to get pressure from our larger hospital network partners to add ISO 27001. I've got a team of three, we're managing everything in a mix of spreadsheets and a shared drive, and our next HIPAA audit is in four months.

**[00:01:48] Sarah:** Three people across HIPAA and SOC 2, with ISO on the horizon. How long have you been running that way?

**[00:02:01] David:** About two years at this staffing level. We had two people before that. I got a headcount approved last year by basically scaring the CFO with our audit finding trend line. But honestly, adding Rachel hasn't reduced the chaos as much as I'd hoped. We just have more hands doing the same manual work.

**[00:02:32] Sarah:** Can you walk me through what a typical audit prep cycle looks like for your team right now?

**[00:02:40] David:** Sure. So for HIPAA, we start serious prep about twelve weeks out. The first three weeks are basically my team going around to every department head and control owner — probably forty people across the organization — and saying "we need your evidence updated." That means screenshots of access reviews, training completion records, policy acknowledgments, system configurations. Most of that comes back via email. Some of it goes into a shared Google Drive folder. Some of it goes into our master spreadsheet.

**[00:03:28] Sarah:** How big is the spreadsheet?

**[00:03:32] David:** Eighteen hundred rows, give or take. It started as a simple control tracking sheet and now it's basically our entire compliance management system. I have nightmares about someone accidentally deleting a tab. We did have an incident last year where a filter got saved incorrectly and we thought we were missing forty controls. Turned out they were just hidden. That was a fun Wednesday.

**[00:04:05] Sarah:** [laughs] I've heard that exact story from probably a dozen compliance leaders. The hidden-row panic attack. What happens after you've collected the evidence?

**[00:04:18] David:** Then we spend another three to four weeks organizing it into something the auditor can actually use. Cross-referencing evidence to controls, making sure timestamps are current, filling gaps where evidence is stale or missing. And then the audit itself is another four weeks of back-and-forth with the auditor asking for things we already provided but in a different format, or asking follow-up questions that require us to go back to the control owner again.

**[00:04:58] Sarah:** So roughly twelve weeks total. What does that do to your team's other work during that period?

**[00:05:08] David:** Everything else stops. Risk assessments, policy updates, the ISO 27001 readiness work we're supposed to be doing — it all gets pushed. My team basically has two modes: audit prep mode and catching-up-on-everything-we-neglected-during-audit-prep mode.

**[00:05:32] Sarah:** That's a cycle I hear constantly. Let me ask about the SOC 2 side. Are you managing that the same way, or do you have a tool for it?

**[00:05:44] David:** We actually evaluated Vanta about eighteen months ago. Got pretty far in the process. The SOC 2 piece looked solid — they've got good integrations for pulling evidence from AWS and Okta, which is most of our technical control evidence. But when we asked about HIPAA, it felt like an afterthought. The HIPAA framework was there, but the control mapping between SOC 2 and HIPAA was basically manual. You'd set up your SOC 2 controls, then set up your HIPAA controls separately, and there was no real way to say "this access review satisfies both Trust Services Criteria CC6.1 and HIPAA 164.312(d)."

**[00:06:38] Sarah:** So you'd essentially be managing two parallel compliance programs in the same tool.

**[00:06:44] David:** Exactly. And that's what I'm already doing in spreadsheets. If I'm going to invest in a platform, I need it to actually reduce the total work, not just put a nicer interface on the same duplicated effort. We estimated that forty percent of our SOC 2 controls overlap with HIPAA requirements. That's hundreds of controls we'd be testing twice.

**[00:07:14] Sarah:** That forty percent number is actually very consistent with what we see. Most healthcare companies managing HIPAA plus SOC 2 have thirty-five to forty-five percent overlap. When you add ISO 27001, it goes higher because ISO covers a lot of the same operational security ground. David, let me ask about the budget side. Is there an approved budget for this, or would you need to build a business case?

**[00:07:48] David:** I'd need to build the case. My CFO, Karen, approved the analyst headcount last year partly because it was a known cost — salary plus benefits. Software is a different conversation. She's going to want to see clear ROI, probably framed as either headcount avoidance or audit cost reduction. The audit itself costs us about two hundred thousand a year across both frameworks when you factor in the external auditor fees and the internal time cost.

**[00:08:28] Sarah:** That's helpful context. When you think about what success looks like if you had the right tool in place twelve months from now, what would be different?

**[00:08:40] David:** Three things, honestly. First, audit prep that doesn't consume my entire team for three months. If we could cut that in half, that alone frees up capacity for the ISO 27001 work without hiring a fourth analyst. Second, I need to give our CISO and our board a real-time view of where we stand. Right now, if someone asks me "are we HIPAA compliant?" my honest answer is "as of the last time we manually checked everything, which was during audit prep." That's not a comfortable answer. Third, I need the framework overlap problem solved. When we add ISO, I can't triple our workload.

**[00:09:32] Sarah:** Those are exactly the three problems we built ComplianceOS to solve. Let me show you how. I'm going to share my screen and walk through a scenario that mirrors what you just described — HIPAA plus SOC 2 with ISO 27001 on the roadmap.

**[00:09:50] David:** Perfect. And Sarah — I want to see the evidence collection workflow specifically. That's where we spend the most time and it's where Vanta fell short for us on the multi-framework side.

**[00:10:04] Sarah:** Absolutely. Let me start there, actually...

*[Demo portion — 18 minutes, covering unified control mapping, automated evidence collection from AWS/Okta/Google Workspace, continuous monitoring dashboard, and Audit Hub walkthrough]*

**[00:28:15] David:** Okay, the cross-framework control mapping is what I was hoping to see. The fact that I can map an access review control once and it automatically satisfies the SOC 2 CC6.1 requirement AND the HIPAA 164.312(d) requirement — that's the thing Vanta couldn't do natively. How many of our tools does ComplianceOS integrate with? We're on AWS, Okta, Google Workspace, Jira, GitHub, and Workday.

**[00:28:52] Sarah:** All six of those are native integrations. We've got over a hundred and fifty total, but those six specifically are in our top tier — meaning they support automated evidence pulling, not just connection.

**[00:29:10] David:** And the audit timeline you mentioned — four to six weeks for implementation. We've got our HIPAA audit starting July fifteenth. If we kicked this off in the next few weeks, would we realistically be operational in time?

**[00:29:30] Sarah:** With a July fifteenth audit date, you'd want to be live by mid-June at the latest to get at least a month of evidence flowing through the system. If we start implementation by the first week of May, that gives us six weeks with buffer. It's tight but doable, and we've done it in similar timelines for healthcare organizations your size.

**[00:30:02] David:** What does pricing look like? Ballpark. I need to know what I'm bringing to Karen.

**[00:30:10] Sarah:** For your scope — two thousand employees, HIPAA plus SOC 2 with ISO 27001 added within twelve months, the integrations you mentioned — you're looking at the mid-tier plan. I'll put together a specific quote, but ballpark you're in the sixty to eighty thousand annual range. That's inclusive of implementation and onboarding.

**[00:30:42] David:** That's... actually less than I expected. We're spending more than that in analyst time just on the evidence collection piece. Okay. What would next steps look like?

**[00:30:58] Sarah:** I'd suggest three things. First, I'll send you a scoped proposal with pricing, implementation timeline, and a migration plan for your existing control spreadsheet. Second, let's schedule a technical session with your CISO to validate the integration depth for your specific stack. Third, I'd love to get Rachel — your analyst — on a hands-on session where she can actually use the platform with your real controls. She's the one who'll live in it daily, and her buy-in matters.

**[00:31:32] David:** That makes sense. Rachel will have strong opinions, and I want her involved early. Let me sync with our CISO, James, and I'll get back to you with availability for next week. Sarah, this was genuinely the most useful vendor conversation I've had in this process. I appreciate that you let me talk about our problems before jumping into the demo.

**[00:31:58] Sarah:** That's how it should work. Talk soon, David.
