# FisioLab Development Rules

This project is a recreation of an existing production website.

## CMS Strategy

The CMS is NOT part of the initial implementation.

The first milestone is a fully functional static website.

Requirements:

- Keep content separate from UI components.
- Do not hardcode copy directly inside components.
- Organize content so it can later be replaced by a headless CMS with minimal changes.
- Avoid introducing CMS-specific libraries, schemas, APIs, or dependencies at this stage.
- When suggesting architecture, assume a future headless CMS integration, but do not implement it.

## Highest Priority Rule

DO NOT rewrite, improve, summarize, shorten, expand, or paraphrase existing website content.

Existing content must remain IDENTICAL unless an explicit client document instructs otherwise.

If a document provides replacement copy:

Replace ONLY that specific section.

Everything else must remain unchanged.

When uncertain:

STOP and ask.

Never invent content.

Never create placeholder text.

Never generate SEO copy unless explicitly provided.

Never change headings, CTAs, URLs or structure unless instructed.

The WordPress backup is the canonical source of truth.

Client briefs override the backup only where explicitly stated.
