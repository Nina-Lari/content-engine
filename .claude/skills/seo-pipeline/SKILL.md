---
name: seo-pipeline
description: 6-stage SEO content pipeline that takes a brief through enrichment, outlining, writing, editing, internal linking, and publishing.
---

# SEO Pipeline

6-stage SEO content pipeline orchestrator. Takes a content brief through enrichment, outlining, writing, editing, internal linking, and publishing.

## Trigger

User invokes `/seo-pipeline` with an optional brief path as argument.

## Input

- `$ARGUMENTS` -- path to a content brief JSON file (e.g., `outputs/briefs/compliance-automation-guide_brief.json`)
- If no argument provided, list all `.json` files in `outputs/briefs/` (excluding `topic-backlog.json`) and ask the user to select one.
- If no briefs exist, tell the user: "No content briefs found. Run /research-brief first to generate briefs."

## Resume Logic

Before starting, check which intermediate files exist in `outputs/articles/` for this brief's slug to determine the resume point:

| If this file exists | Skip to |
|---------------------|---------|
| `[slug]_enriched.md` | Stage 2 (Outline) |
| `[slug]_outline.md` (not approved) | Pause -- remind user to review and rename to `_outline-approved.md` |
| `[slug]_outline-approved.md` | Stage 3 (Writer) |
| `[slug]_draft.md` | Stage 4 (Editor) |
| `[slug]_edited.md` | Stage 5 (Internal Linker) |
| `[slug]_linked.md` | Stage 6 (Publisher) |
| `[slug]_final.md` | Done -- inform user the article is already complete |

If no intermediate files exist, start from Stage 1.

---

## Stage 1: Enrichment

**Context consumed:**
- The content brief JSON (the input)
- `proof-library/product-design-evidence.md` (PRIMARY proof: product mechanism + early-tester experience)
- `customer-intelligence/insights/*.json` (structured intelligence)
- `proof-library/case-studies/` (case studies with metrics, when they exist)
- `proof-library/research-sources/` (academic backstop -- capped, see citation policy below)
- `proof-library/` (any other proof assets: use cases, data sheets)
- `customer-intelligence/transcripts/` (last resort -- only if insights are thin)

**Workflow:**

1. Parse the brief. Extract the outline sections, keyword targets, value props to weave, and evidence needs.
2. Mine evidence from context sources in this evidence hierarchy. Exhaust each tier before reaching for the next:
   - **Tier 1 (lead with this) -- `proof-library/product-design-evidence.md`:** how the course is designed and what counts as a complete lesson. Product-mechanism specificity is proof. This is the most ownable, most credible evidence we have. Most sections should be carried by Tier 1.
   - **Tier 2 -- experience and customer voice:** early-tester quotes (in product-design-evidence.md, attribute to "one learner") and `customer-intelligence/insights/` (anonymized pains, lexicon, resonance quotes). Use for the human "does it actually work" signal.
   - **Tier 3 -- `proof-library/case-studies/`:** case studies and outcome metrics. Strongest proof when present; currently empty (flag the gap, do not invent).
   - **Tier 4 -- named publications:** DutchReview, Taalhammer, Seidlitz Education, Dutch-online.com. Citable by name.
   - **Tier 5 (capped backstop) -- `proof-library/research-sources/`:** academic research. Use only when a single mechanism claim genuinely needs external authority that Tiers 1-4 cannot supply.
   - **Last resort -- `customer-intelligence/transcripts/`:** raw transcripts, only if everything above is thin.

   **Citation policy (this is what keeps articles from reading like a literature review):** assign at most **1-2 academic (author-year) citations per article**, and never stack multiple citations on one claim. Academic research validates a *principle* once; it does not carry the article. If a section's only assigned evidence is academic, treat that as an evidence gap and find a Tier 1-2 proof point instead. Record the planned academic-citation count in the enriched doc so Stage 2 can hold the cap.
3. For each outline section in the brief, map available evidence:
   - Which proof points apply?
   - Which customer quotes support the argument?
   - Which case study metrics are relevant?
   - Where are evidence gaps? (Flag these for the user.)
4. Write the enriched document with evidence mapped to each section.

**Output:** `outputs/articles/[slug]_enriched.md`

Proceed automatically to Stage 2.

---

## Stage 2: Outline

**Context consumed:**
- The enriched document from Stage 1
- The original content brief JSON

**Workflow:**

1. Merge the brief structure with enrichment evidence into a writer-ready outline.
2. For each section, specify:
   - H2 heading
   - Word target
   - Assigned proof points (with source references)
   - Key argument to make
   - AEO formatting directive (e.g., "Open with a definition paragraph", "Structure as FAQ with self-contained answers", "Include a summary box for featured snippet targeting")
3. Generate SEO assets YAML with:
   - title (for title tag and OG title)
   - description (SEO meta description, concise and search-focused)
   - excerpt (blog card teaser, slightly more editorial and click-friendly than description)
   - slug (URL slug)
   - category (one of: `dutch-learning`, `inburgering`, `expat-life`, `product`)
   - tags (array of relevant keyword tags)
   - faqs (array of {question, answer} objects for FAQ schema and rendered FAQ section)
   - internal_link_targets (if sitemap or URL inventory exists)

**Output:**
- `outputs/articles/[slug]_outline.md`
- `outputs/seo-assets/[slug]_seo-assets.yaml`

**STOP. Human review gate.**

Tell the user:
```
Outline written to outputs/articles/[slug]_outline.md
SEO assets written to outputs/seo-assets/[slug]_seo-assets.yaml

Review the outline. When you are satisfied:
  1. Rename the file to [slug]_outline-approved.md
  2. Run /seo-pipeline again to continue from Stage 3 (Writer)

If you want changes, edit the outline directly and then rename.
```

Do not proceed to Stage 3 automatically.

---

## Stage 3: Writer

**Context consumed:**
- `strategy/voice-guide.md` -- tone, style, anti-patterns, prohibited terms
- `strategy/positioning.md` -- value propositions, differentiators, narrative arc
- The approved outline (`outputs/articles/[slug]_outline-approved.md`)

Does NOT read: `icp.md`, `personas.md`, `competitive-landscape.md`, `knowledge-base.md`, or raw transcripts. Everything the writer needs is in the approved outline (which carries evidence forward from enrichment).

**Workflow:**

1. Read `strategy/voice-guide.md` and `strategy/positioning.md`.
2. Read the approved outline.
3. Write the full article following the outline exactly. Do not add sections, remove sections, or reorder.
4. Apply these writing patterns:
   - **Feature to Benefit to Proof:** Never mention a product feature without connecting it to a business outcome and backing it with a specific proof point.
   - **Value props as undercurrent:** Thread positioning themes throughout the article. Never isolate product mentions into a single "Our Solution" section.
   - **Customer anonymization:** Keep role titles, industry, and company size. Remove individual names and company names from quotes and examples. Replace with descriptors (e.g., "a Series B fintech" or "the compliance lead at a mid-market healthcare company").
   - **Conversational authority:** Write like an expert talking to a peer, not a brand talking to a prospect.
5. Apply AEO compliance:
   - **First-paragraph definition:** The opening paragraph must contain a clear, concise definition or answer to the primary keyword query. This targets featured snippets and AI overview citations.
   - **Structured data readiness:** Write FAQ sections with self-contained answers (each answer makes sense without reading the rest of the article).
   - **Summary boxes:** For long sections, include a bolded TL;DR sentence at the top.
6. Check the draft against the voice guide's prohibited terms list. Remove any violations.
7. Verify word count is within 10% of the outline target.

**Output:** `outputs/articles/[slug]_draft.md`

Proceed automatically to Stage 4.

---

## Stage 4: Editor

**Context consumed:**
- `strategy/voice-guide.md` -- style enforcement only
- The draft from Stage 3

Does NOT read any other context files. The editor's job is style enforcement, not content changes.

**Workflow:**

1. Read `strategy/voice-guide.md`.
2. Read the draft.
3. Apply style enforcement:
   - Check all prohibited terms from the voice guide. Replace any found.
   - Check the global rules from `.claude/rules/writing-quality.md`. Apply all anti-slop corrections.
   - Verify consistent terminology throughout (e.g., do not alternate between "compliance automation" and "automated compliance").
   - Check sentence variety. Flag runs of 3+ sentences with the same structure.
   - Verify all claims have specific proof points. Flag any "significant improvement" or "dramatic reduction" without a number.
   - Check heading hierarchy (H2 > H3, no skipped levels).
   - Verify internal consistency (if you mention "three steps" in the intro, there are exactly three steps).
4. Make corrections directly. Do not leave comments or suggestions -- make the edits.
5. At the end, note the changes made in a brief editorial summary comment at the bottom of the file (in an HTML comment so it does not render).

**Output:** `outputs/articles/[slug]_edited.md`

Proceed automatically to Stage 5.

---

## Stage 5: Internal Linker

**Context consumed:**
- The edited article from Stage 4
- Sitemap or URL inventory (if available at `strategy/sitemap.md`, `strategy/url-inventory.md`, or similar)
- SEO assets YAML from Stage 2

**Workflow:**

1. Read the edited article.
2. Calculate link budget based on word count:
   - Under 1,000 words: 3-5 internal links
   - 1,000-2,000 words: 5-8 internal links
   - 2,000-3,000 words: 8-12 internal links
   - Over 3,000 words: 12-15 internal links
3. If a sitemap or URL inventory exists:
   - Match article topics and keywords to existing pages.
   - Distribute links with priority: pillar pages first, then related articles, then category pages.
   - Use natural anchor text (not keyword-stuffed). The link should feel organic in the sentence.
   - No more than 1 link per 150 words.
   - No duplicate link targets.
4. If no sitemap exists:
   - Insert placeholder links with the format: `[anchor text](INTERNAL_LINK: suggested target topic)`
   - Note to the user that these need to be replaced with real URLs.
5. Add links to the article. Do not change any other content.

**Output:** `outputs/articles/[slug]_linked.md`

Proceed automatically to Stage 6.

---

## Stage 6: Publisher

**Context consumed:**
- The linked article from Stage 5
- SEO assets YAML from Stage 2
- `outputs/content-registry.yaml` (for link resolution)

**Workflow:**

1. Read the linked article and SEO assets.
2. Read `outputs/content-registry.yaml` to get article statuses and URL pattern.
3. Resolve internal link placeholders in the article body:
   - Find all links in format `[anchor text](INTERNAL_LINK: target-slug)`
   - For each link, look up `target-slug` in the content registry:
     - If status is `published`: replace with `[anchor text](/blog/target-slug)` (using the `url_pattern` from registry)
     - If status is `planned` or `drafted`: replace with just `anchor text` (plain text, no link)
   - If a target slug is not in the registry: treat as unpublished (convert to plain text)
4. Generate MDX file with frontmatter in this exact format:

```yaml
---
title: "[from SEO assets]"
description: "[from SEO assets - SEO meta description]"
date: "[YYYY-MM-DD of generation]"
author: "Wesley Lam"
category: "[from SEO assets - one of: dutch-learning, inburgering, expat-life, product]"
coverImage: "/images/blog/PLACEHOLDER.jpg"
coverImageAlt: "PLACEHOLDER - describe the cover image"
excerpt: "[from SEO assets - blog card teaser]"
published: false
tags: [from SEO assets]
faqs:
  - question: "[from SEO assets]"
    answer: "[from SEO assets]"
---
```

5. Append the resolved article body as standard markdown after the frontmatter.
6. Do NOT include JSON-LD scripts in the body. The blog framework generates structured data from frontmatter.
7. Write the final output file.

**Important frontmatter notes:**
- `published: false` by default. User sets to `true` after adding cover image and final review.
- `coverImage` and `coverImageAlt` are placeholders. User must replace before publishing.
- `faqs` must be an array of `{question, answer}` objects. If no FAQs, use `faqs: []`.
- `author` defaults to "Wesley Lam". Change to "Nina Lari" only if explicitly requested.

**Link resolution notes:**
- The `_linked.md` file preserves all linking intent with `INTERNAL_LINK:` placeholders.
- The `_final.mdx` file is always publishable with no broken links.
- When you publish new articles later, run `/finalize-links --all` to update all `_final.mdx` files with newly-available links.

**Output:** `outputs/articles/[slug]_final.mdx`

---

## Consolidated Report

After the pipeline completes (or stops at a review gate), print a report:

```
SEO Pipeline Report: [Article Title]
=====================================

Stages completed: [list]
Current state: [completed | paused at Stage 2 review gate | etc.]

Files produced:
  - outputs/articles/[slug]_enriched.md
  - outputs/articles/[slug]_outline.md
  - outputs/seo-assets/[slug]_seo-assets.yaml
  - outputs/articles/[slug]_draft.md
  - outputs/articles/[slug]_edited.md
  - outputs/articles/[slug]_linked.md
  - outputs/articles/[slug]_final.mdx

Article stats:
  - Word count: [number]
  - Internal link placeholders: [number]
  - Links resolved to URLs: [number] (targets already published)
  - Links converted to plain text: [number] (targets not yet published)
  - FAQ items: [number]
  - Proof points used: [number]

Evidence gaps: [any sections that lacked strong proof points]
Editorial changes: [count of corrections made in Stage 4]
Deferred links: [list of target slugs that were converted to plain text -- these will become active when those articles are published and you run /finalize-links --all]

Before publishing:
  - [ ] Add cover image and update coverImage/coverImageAlt in frontmatter
  - [ ] Set published: true
  - [ ] Copy to content/blog/ in your blog repo

Next step: [what the user should do next]
```
