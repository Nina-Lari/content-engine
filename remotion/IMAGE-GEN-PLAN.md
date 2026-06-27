# Plan: auto-generate Instagram images via OpenAI from approved runbooks

> Status: **design only, not built.** Captured 2026-06-27. Re-open this doc before
> writing any code. To pick it up again, just say "the image-gen idea" and Claude
> will point back here.

## Goal
Collapse the manual "go to ChatGPT, attach refs, paste prompt, save PNG" step into a
Claude-driven call to OpenAI's `gpt-image-1`, gated by the user picking the Joost
reference. Output lands ready for `/instagram-render`.

## Where it fits
A new step in the gap between the two existing skills — it does not change either:

```
/instagram-content (batch) → Status: approved
        │
        ▼
/instagram-assets <slug>   ← NEW: reads runbook prompt, asks Joost ref, generates PNG
        │  (fills remotion/public/<week>/<slug>/)
        ▼
/instagram-render <slug>   → Remotion makes the final asset
```

It reuses the **exact image prompt already written verbatim in the runbook** (STEP 2
today), so authoring stays in `/instagram-content`. No prompt is re-written
downstream, and `/instagram-content` needs no changes.

## Key feasibility fact
A **Custom GPT** (built in ChatGPT's GPT Builder) cannot be called from code — there
is no API for it. The automation path is the **OpenAI API with `gpt-image-1`**, which
is the same underlying image model ChatGPT uses and accepts multiple reference images.
The user has confirmed they have an OpenAI API key.

## Component 1 — `remotion/scripts/gen-image.mjs` (the thin generator)
- **Dependency:** `openai` npm package, added to `remotion/package.json` (Node is
  already the runtime there).
- **API call:** `images.edit` with model `gpt-image-1`, passing the prompt plus an
  array of reference PNGs (style-ref-1/2 + the chosen Joost ref). `images.edit` is the
  multi-reference endpoint — the code equivalent of attaching files in ChatGPT.
- **Args:** `--prompt-file <path>`, `--refs a.png,b.png,...`, `--out <path>`,
  `--size 1024x1536` (portrait for 9:16), `--quality`.
- **Auth:** reads `OPENAI_API_KEY` from env (never written to a file in the repo).
- **Output:** decodes the b64 PNG, writes to the given path. Pure, deterministic,
  re-runnable. Exits non-zero with a readable message on API error.

## Component 2 — `/instagram-assets <slug>` skill (the wiring + the human gate)
1. Resolve the runbook in `outputs/instagram/<week>/`; **refuse unless
   `Status: approved`** (same gate philosophy as `/instagram-render`).
2. Parse every image-generation step the runbook declares (scene image, vocab scene,
   cover, etc.) — driven by what the runbook says, not a hardcoded per-type list, so
   it covers all ten post types.
3. For each image with Joost in it, **ask the user which Joost reference** (via
   `AskUserQuestion`) → blue / denim / green / olive / summer / base (the refs in
   `brand/reference-images/`). Always attach `style-ref-1.png` + `style-ref-2.png`.
4. Run `gen-image.mjs`, write into `remotion/public/<week>/<slug>/` under the exact
   filename the runbook expects.
5. Show the result and offer **regenerate** (re-call) or **accept** — preserving the
   eyeball-and-retry loop. Never auto-accept.

## Reference mapping (from what exists today)
`brand/reference-images/`: `joost-reference.png` (base), `-blue`, `-denim`, `-green`,
`-olive`, `-summer`, plus `joost-base-emotions.png` and `maya-reference.png`. The skill
offers these by name; multi-character scenes (e.g. Joost + Maya) attach both refs.

## Config & cost
- **Key:** `OPENAI_API_KEY` in the shell env (or `.env`, git-ignored). Documented,
  never committed.
- **Cost:** ~$0.02–0.19 per image; a 7-post week with retries is cents.

## Open questions to resolve before building
1. **Custom-GPT instructions?** If today's images come from a custom GPT with special
   wording, paste its instructions so they fold into the generator's prompt. If it's
   plain ChatGPT, nothing to do.
2. **`images.edit` vs `images.generate`** — assumption is the reference-image (edit)
   endpoint, since Joost consistency is the whole game. Confirm that priority over
   prompt-only generation.
3. **Scope of "images"** — just scenario-reel scenes + vocab scenes, or also carousel
   covers (`cover.png` appears in the tree)?

## Files to touch when building
- `remotion/scripts/gen-image.mjs` (new)
- `remotion/package.json` (+`openai`)
- `.claude/skills/instagram-assets/SKILL.md` (new)
- A one-line pointer in `CLAUDE.md`'s skill list + the file-conventions section
- `.gitignore` for `.env` if that route is taken
