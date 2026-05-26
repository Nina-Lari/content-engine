---
name: finalize-links
description: Resolve internal link placeholders based on content registry. Converts INTERNAL_LINK placeholders to real URLs for published articles, strips links to unpublished articles.
---

# Finalize Links

Resolves internal link placeholders in articles based on the content registry. Produces publishable `_final.mdx` files with no broken links.

## Trigger

User invokes `/finalize-links` with optional arguments:
- No argument: prompts user to select an article
- `--all`: processes all articles with `_linked.md` files
- `[slug]`: processes a specific article by slug

## Context Consumed

- `outputs/content-registry.yaml` -- source of truth for article status and URL pattern
- `outputs/articles/[slug]_linked.md` -- article with `INTERNAL_LINK:` placeholders
- `outputs/seo-assets/[slug]_seo-assets.yaml` -- SEO frontmatter data

Does NOT read strategy files, briefs, or customer intelligence.

## How It Works

### Link Resolution Logic

For each link in the format `[anchor text](INTERNAL_LINK: target-slug)`:

1. Look up `target-slug` in `outputs/content-registry.yaml`
2. If status is `published`:
   - Replace with `[anchor text](/blog/target-slug)` (using the `url_pattern` from registry)
3. If status is `planned` or `drafted`:
   - Replace with just `anchor text` (plain text, no link)
   - The linking intent is preserved in `_linked.md` for future resolution

### Processing Steps

1. Read `outputs/content-registry.yaml` to get:
   - `url_pattern` (e.g., `/blog/{slug}`)
   - Status of all articles

2. For each article being processed, check if `_final.mdx` exists:

   **If `_final.mdx` EXISTS (most common case):**
   a. Read the existing `outputs/articles/[slug]_final.mdx` file
   b. Find all `INTERNAL_LINK:` patterns using regex: `\[([^\]]+)\]\(INTERNAL_LINK:\s*([^)]+)\)`
   c. For each match, apply resolution logic (see above)
   d. Write the modified content back to `_final.mdx`
   e. **IMPORTANT: Do NOT change any other content.** This is a find-and-replace operation only. Preserve all frontmatter, all body text, all formatting. Only the `INTERNAL_LINK:` patterns change.

   **If `_final.mdx` does NOT exist:**
   a. Read `outputs/articles/[slug]_linked.md`
   b. Read `outputs/seo-assets/[slug]_seo-assets.yaml`
   c. Find all `INTERNAL_LINK:` patterns and apply resolution logic
   d. Generate MDX with frontmatter (same format as seo-pipeline Stage 6)
   e. Write to `outputs/articles/[slug]_final.mdx`

3. Report results

## Modes

### Single Article Mode

```
/finalize-links
```

If no argument provided:
1. List all articles that have `_linked.md` files in `outputs/articles/`
2. Ask user to select one
3. Process that article

```
/finalize-links how-to-practice-dutch-speaking-alone
```

Process the specified slug directly.

### Batch Mode

```
/finalize-links --all
```

1. Find all `*_linked.md` files in `outputs/articles/`
2. Process each one
3. Report summary of all articles processed

## Output

For each processed article:
- `outputs/articles/[slug]_final.mdx` -- publishable MDX with resolved links

## Report Format

After processing, print:

```
Finalize Links Report
=====================

Articles processed: [count]

[For each article:]
[slug]:
  - Total link placeholders: [count]
  - Resolved to URLs: [count] (targets published)
  - Converted to plain text: [count] (targets not yet published)
  - Links resolved: [list of target slugs that became real links]
  - Links deferred: [list of target slugs converted to plain text]

Registry status:
  - Published articles: [count]
  - Drafted articles: [count]
  - Planned articles: [count]

To add more live links:
  1. Publish articles to your blog
  2. Update outputs/content-registry.yaml (change status to "published")
  3. Run /finalize-links --all
```

## MDX Frontmatter Format

**Only applies when `_final.mdx` does not exist yet.** If `_final.mdx` already exists, do NOT touch the frontmatter or any content other than the `INTERNAL_LINK:` patterns.

When generating a new `_final.mdx` from scratch, use this exact frontmatter format (same as seo-pipeline Stage 6):

```yaml
---
title: "[from SEO assets]"
description: "[from SEO assets - SEO meta description]"
date: "[YYYY-MM-DD of generation]"
author: "Wesley Lam"
category: "[from SEO assets]"
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

## Workflow Integration

### During Article Creation

The seo-pipeline creates `_final.mdx` with unresolved placeholders. You can run `/finalize-links [slug]` immediately after to get a publishable version.

### After Publishing New Articles

When you publish an article to your blog:

1. Edit `outputs/content-registry.yaml`:
   ```yaml
   how-to-practice-dutch-speaking-alone:
     status: published  # was: drafted
   ```

2. Run `/finalize-links --all`

3. All articles that referenced the newly-published article now have working links

### Checking Link Opportunities

To see what links would become active if you published a specific article:

```
/finalize-links --all
```

The report shows "Links deferred" for each article. Publishing those target articles would activate those links.

## Error Handling

- If `_linked.md` does not exist for a requested slug: skip and warn
- If `_seo-assets.yaml` does not exist: warn, generate minimal frontmatter
- If registry file is missing: error, tell user to create it
- If a target slug in `INTERNAL_LINK:` is not in registry: treat as unpublished (convert to plain text), warn user to add it to registry
