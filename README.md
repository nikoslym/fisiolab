# FisioLab Website

Custom rebuild of fisiolab.eu - a bilingual (Greek/English) static website.

See [ARCHITECTURE.md](./ARCHITECTURE.md) for the full technical blueprint and
[PROJECT_RULES.md](./PROJECT_RULES.md) for content and implementation rules.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4 + shadcn/ui
- Static generation (no CMS in this phase; a headless CMS is a future data-source swap)

## Requirements

- Node.js 20+

## Scripts

```bash
npm run dev           # start the dev server
npm run build         # production build
npm run start         # serve the production build
npm run lint          # ESLint
npm run format        # Prettier (write)
npm run format:check  # Prettier (check)
```

## Structure

- `app/` - routing and metadata only. Two locale trees: `(el)` (Greek, at the root) and `en` (English, under `/en`).
- `src/components/` - `ui/` (shadcn primitives), `layout/` (shell), `blocks/` (reusable content blocks).
- `src/content/` - typed content layer (`types/` interfaces + per-locale content). The single seam for a future CMS.
- `src/lib/` - `i18n/`, `seo/`, `cta/`, `routing/`, and `utils.ts`.
- `src/styles/globals.css` - Tailwind v4 + design tokens.

## Status

- Milestone 1 (foundation/scaffold) complete.
- Milestone 2 (content layer) complete.
- Milestone 3 (content migration) complete: backup + brief copy populated in
  `src/content/`; see `docs/CONTENT_CHANGELOG.md`. About us blocked (corrupted backup).
- Milestone 4 (design system) complete: verified brand assets/tokens, responsive
  layout shell, shadcn primitives, and core content blocks.
