# FisioLab - Technical Architecture & Development Blueprint

Status: DRAFT for review. This document defines HOW the project is structured before any code is written. No application has been scaffolded yet. Await approval before implementation.

Scope of this phase: a fully static bilingual (EL/EN) website. No CMS is implemented now. Content is decoupled from components and shaped so a future Sanity headless CMS becomes a data-source swap behind stable access functions (see Section 11).

Source of truth: the project files only (backup dumps, four briefs, PROJECT_RULES.md, and the approved analysis/decisions). Do not scrape or re-fetch the live site.

Stack: Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui + Vercel.

---

## 1. Guiding Principles

1. Content is never hardcoded in components. All copy/media metadata comes from the content layer via typed access functions.
2. Preserve production: existing pages keep their URLs, headings, paragraphs, CTAs, images, sections verbatim - only template cleanup, artifact removal, and explicitly authorized replacements are applied.
3. CMS-ready by construction: the content-layer shape and access-function signatures mirror the intended Sanity schema so the later swap changes only the data source, not components or pages.
4. Static-first: everything is statically generated (SSG). No runtime data fetching, no CMS SDKs, no server DB in this phase.
5. One seam per concern: locale, content access, CTA target, SEO metadata, and design tokens each have a single, documented integration point.
6. Greek-first: `el` is the default locale served at the site root; `en` is served under `/en`. New content ships EL-only; EN is addable later without refactor.
7. Simplicity over abstraction: the pages are known in advance and there is no CMS yet. Prefer explicit, reusable components and plain typed data over generic frameworks, builders, or parsers. Design for a future CMS, but do not simulate one today. When choosing between a generic framework-like solution and a simpler one that meets current requirements, pick the simpler one and leave a clear extension point.

---

## 2. Folder Structure

```
Fisiolab-Website/
  app/                                  # Next.js App Router (routing + metadata only)
    layout.tsx                          # Root <html>, fonts, global providers
    not-found.tsx
    robots.ts
    sitemap.ts
    (el)/                               # Greek (default) - route group, served at the site ROOT (no prefix)
      layout.tsx                        # <body>, Navbar/Footer, locale = "el"
      page.tsx                          # Home (/)
      about-us/page.tsx                 # existing URL preserved
      privacy-policy/page.tsx
      tecar-therapy/page.tsx
      shockwave/page.tsx
      high-power-laser/page.tsx
      kinesio-taping/page.tsx
      lymphatic-drainage/page.tsx
      trigger-points/page.tsx
      ultrasound/page.tsx
      electrotherapy/page.tsx
      diathermy/page.tsx
      vacuum-therapy/page.tsx
      therapeies/page.tsx               # custom Therapies page (canonical; legacy /category/therapeies/ 301s here)
      # --- NEW pages (SEO-friendly Greek transliteration slugs) ---
      clinical-pilates/page.tsx
      therapeftiki-askisi/page.tsx
      metegcheiritiki-apokatastasi/page.tsx
      athlitiki-apokatastasi/page.tsx
      apokatastasi-spondylikis-stilis/page.tsx
      apokatastasi-gonatos-omou-ischiou/page.tsx
      proti-axiologisi/page.tsx         # Πρώτη Αξιολόγηση
      epikoinonia/page.tsx              # Επικοινωνία / Ραντεβού
    en/                                 # English - served under /en
      layout.tsx                        # <body>, Navbar/Footer, locale = "en"
      page.tsx                          # /en (Home)
      about-us/page.tsx
      privacy-policy/page.tsx
      tecar-therapy/page.tsx            # + remaining existing EN therapy pages
      therapeies/page.tsx
      # NEW EN pages only when approved English copy exists:
      # clinical-pilates/, therapeutic-exercise/, post-operative-rehabilitation/,
      # sports-rehabilitation/, spine-rehabilitation/,
      # knee-shoulder-hip-rehabilitation/, initial-assessment/, contact/
  src/
    components/
      ui/                               # shadcn/ui primitives (button, card, accordion, sheet...)
      layout/                           # Navbar, Footer, Container, LanguageSwitcher, StickyMobileCTA, Breadcrumbs
      blocks/                           # Hero, TrustBar, ServiceCard, ServiceGrid, FirstAssessmentList,
                                        #   ReviewSummary, BenefitsList, ThreeModalityCards, FAQ, CTASection,
                                        #   RelatedTherapies, ContactInfo, OpeningHours, MapEmbed, RichTextRenderer
    content/                            # THE CONTENT LAYER (see Section 4)
      el/                               # Greek content modules
      en/                               # English content modules (mirror; partial at launch)
      types/                            # TypeScript interfaces (shared shape = future CMS schema)
      registry.ts                       # slug -> content lookup tables
      index.ts                          # access functions (getPage, getTherapy, ... = the CMS seam)
    lib/
      i18n/                             # Locale type, locale constants, localizedHref(), tiny typed UI dictionary
      seo/                              # metadata builders, JSON-LD helpers, hreflang
      cta/                              # resolveCtaHref() - single CTA target seam (Decision 5)
      routing/                          # slug maps + redirect list (consumed by next.config)
      utils/                            # generic helpers (cn, formatting)
    styles/
      globals.css                       # Tailwind v4 @theme tokens + base styles
  public/
    images/                             # organized assets (see Section 9)
    fonts/                              # self-hosted brand fonts (once confirmed)
  docs/
    ARCHITECTURE.md                     # this file (may move here on scaffold)
    CONTENT_GUIDE.md                    # how to edit/add content + add EN later
    DECISIONS.md                        # locked decisions + open confirmations
    CONTENT_CHANGELOG.md                # every authorized deviation from the backup, with brief refs
    CMS_MIGRATION.md                    # Sanity mapping + swap checklist
  next.config.ts
  tailwind.config.ts (if needed; v4 is mostly CSS-first)
  tsconfig.json
  package.json
  README.md
```

Rationale: `app/` holds only routing, params, and metadata; all rendering logic lives in `src/components`; all copy lives in `src/content`. This keeps pages thin and makes the content/CMS seam obvious.

---

## 3. Sitemap (source of truth)

Canonical site map matching the approved spreadsheet. Existing pages keep their live URLs. Therapies moves to a clean URL with a 301 from the legacy archive. New pages get SEO-friendly slugs (Greek transliteration at the root; English equivalents under `/en/` when EN copy exists).

### 3.1 Existing pages (URLs preserved)

| Page               | Greek                  | English                   |
| ------------------ | ---------------------- | ------------------------- |
| Αρχική             | `/`                    | `/en/`                    |
| Σχετικά με εμάς    | `/about-us/`           | `/en/about-us/`           |
| Privacy Policy     | `/privacy-policy/`     | `/en/privacy-policy/`     |
| Θεραπεία Tecar     | `/tecar-therapy/`      | `/en/tecar-therapy/`      |
| Shockwave          | `/shockwave/`          | `/en/shockwave/`          |
| High Power Laser   | `/high-power-laser/`   | `/en/high-power-laser/`   |
| Kinesio Taping     | `/kinesio-taping/`     | `/en/kinesio-taping/`     |
| Lymphatic Drainage | `/lymphatic-drainage/` | `/en/lymphatic-drainage/` |
| Trigger Points     | `/trigger-points/`     | `/en/trigger-points/`     |
| Ultrasound         | `/ultrasound/`         | `/en/ultrasound/`         |
| Electrotherapy     | `/electrotherapy/`     | `/en/electrotherapy/`     |
| Διαθερμία          | `/diathermy/`          | `/en/diathermy/`          |
| Vacuum Therapy     | `/vacuum-therapy/`     | `/en/vacuum-therapy/`     |
| Θεραπείες          | `/therapeies/`         | `/en/therapeies/`         |

Legacy redirect (permanent 301): `/category/therapeies/` → `/therapeies/` (and `/en/category/therapeies/` → `/en/therapeies/`).

### 3.2 New pages (SEO-friendly URLs)

| Page (EL / EN)                                                              | Greek URL                             | English URL (when EN copy exists)       |
| --------------------------------------------------------------------------- | ------------------------------------- | --------------------------------------- |
| Clinical Pilates / Clinical Pilates                                         | `/clinical-pilates/`                  | `/en/clinical-pilates/`                 |
| Θεραπευτική Άσκηση / Therapeutic Exercise                                   | `/therapeftiki-askisi/`               | `/en/therapeutic-exercise/`             |
| Μετεγχειρητική Αποκατάσταση / Post-operative Rehabilitation                 | `/metegcheiritiki-apokatastasi/`      | `/en/post-operative-rehabilitation/`    |
| Αθλητική Αποκατάσταση / Sports Rehabilitation                               | `/athlitiki-apokatastasi/`            | `/en/sports-rehabilitation/`            |
| Αποκατάσταση Σπονδυλικής Στήλης / Spine Rehabilitation                      | `/apokatastasi-spondylikis-stilis/`   | `/en/spine-rehabilitation/`             |
| Αποκατάσταση Γόνατος / Ώμου / Ισχίου / Knee / Shoulder / Hip Rehabilitation | `/apokatastasi-gonatos-omou-ischiou/` | `/en/knee-shoulder-hip-rehabilitation/` |
| Πρώτη Αξιολόγηση / Initial Assessment                                       | `/proti-axiologisi/`                  | `/en/initial-assessment/`               |
| Επικοινωνία / Ραντεβού / Contact / Appointment                              | `/epikoinonia/`                       | `/en/contact/`                          |

Notes:

- New Greek pages ship at launch. New English pages are created only when approved EN copy exists (Decision 6).
- There is no separate "Αποκατάσταση" hub page; rehab programs are listed on Θεραπείες and linked from nav/homepage cards.
- Primary CTAs resolve to `/epikoinonia/` (Contact / Appointment).

---

## 4. Routing Strategy

Chosen for simplicity: two explicit route trees using App Router route groups - no `[locale]` dynamic segment, no middleware, no i18n routing library. The site is small and its pages are known in advance, so being explicit is the easiest to read and maintain.

- `app/(el)/...` is a route group (parentheses = no URL segment), so Greek renders at the site root: `/`, `/tecar-therapy/`, etc.
- `app/en/...` renders English under `/en`: `/en/`, `/en/tecar-therapy/`, etc. It contains only the pages that have approved English content (Decision 6).
- Locale is a literal constant per tree (`"el"` or `"en"`) passed into the shared page components and the content access functions. No runtime locale detection or negotiation.
- `trailingSlash: true` in `next.config.ts` preserves the existing WordPress trailing-slash URLs (SEO equity, Decision 3).
- Therapies page: canonical URL is `/therapeies/` with permanent 301s from `/category/therapeies/` and `/en/category/therapeies/`.
- New-page slugs follow Section 3.2.
- Fully static rendering (SSG); no ISR/webhooks in this phase.
- Redirects: declared in one place (`next.config.ts` `redirects()`). Default posture is zero renames for every other existing page.
- Internal links: a small `localizedHref(path, locale)` helper prefixes `/en` for English and leaves Greek at the root. Keeps links correct without a routing framework.

Route duplication is intentional and minimal: each `page.tsx` is a thin wrapper that renders a shared page component with its locale and content. This keeps English strictly opt-in per page and avoids a generic multilingual abstraction the project does not need. If the site later grows many locales, this can be refactored to a dynamic segment without changing the content layer.

---

## 5. Content Layer Organization

Goal: a typed, file-based content store that a component never bypasses, whose shape equals the future CMS schema.

Format: typed TypeScript modules ONLY (Decision 3 of this round). Every piece of content - pages, therapies, rehab pages, navigation, footer, SEO, cards, settings - is a plain typed TypeScript object validated by an interface. No MDX, no Markdown, no JSON, no parsing layer. Long-form body copy is represented as a typed `RichText` structure (a simple array of typed nodes: heading, paragraph, list, etc.) rendered by `RichTextRenderer`. This keeps content strongly typed and diffable, with zero runtime content dependencies.

Organization (one concept = one "type", EL and EN variants):

```
src/content/
  types/
    common.ts        # Seo, Cta, ImageMeta, RichText (typed nodes), Locale
    page.ts          # per-page content interfaces (HomeContent, AboutContent, ...)
    therapy.ts       # Therapy
    rehab.ts         # RehabProgram
    card.ts          # ServiceCard
    settings.ts      # SiteSettings, Navigation, Footer, TrustBar, ReviewSummary
  el/
    settings.ts      # site settings, nav, footer, trust bar, reviews (Greek)
    pages/           # home.ts, about-us.ts, privacy-policy.ts, therapies.ts, proti-axiologisi.ts, epikoinonia.ts
    therapies/       # tecar-therapy.ts, shockwave.ts, ... (10)
    rehab/           # clinical-pilates.ts, therapeftiki-askisi.ts, ... (6)
    cards.ts         # homepage service cards
  en/
    ...              # same tree; only pages that have approved EN copy are populated at launch
  registry.ts        # page keys -> slugs (el/en) for nav, sitemap, hreflang, links
  index.ts           # ACCESS FUNCTIONS (the seam)
```

Each page has its own typed content interface (e.g. `HomeContent` with named fields like `hero`, `intro`, `trustBar`, `services`, `firstAssessment`, `reviews`). Content is data; there is no generic "section block" union and no runtime section engine.

Access functions (stable signatures = CMS seam). All are synchronous now, but typed to allow `Promise` later so swapping to async Sanity queries is non-breaking:

```
getSiteSettings(locale): SiteSettings
getNavigation(locale): Navigation
getFooter(locale): Footer
getTrustBar(locale): TrustBar
getReviewSummary(locale): ReviewSummary
getServiceCards(locale): ServiceCard[]
getHomeContent(locale): HomeContent
getAboutContent(locale): AboutContent | null
getTherapy(slug, locale): Therapy | null
getAllTherapies(locale): Therapy[]
getRehabProgram(slug, locale): RehabProgram | null
getAllRehabPrograms(locale): RehabProgram[]
getRelatedTherapies(slug, locale): ServiceCard[]
```

Access functions are per content type (typed return values), not a single generic `getPage`. This is simpler to read and gives each page exactly the shape it needs, while remaining the single seam for a future CMS swap.

Rules:

- Components receive content via props; pages call access functions and pass data down. No component imports content modules directly.
- Every user-visible string (including CTA labels, section titles, microcopy) lives in the content layer, not in JSX.
- EN fallback policy: if an EN content module is absent, the access function returns `null`; that page is simply not created under `app/en/` and is excluded from EN sitemap/hreflang. No auto-translation (Decision 6).
- Content fidelity: existing-page modules are populated verbatim from the backup dumps; each authorized change is recorded in `CONTENT_CHANGELOG.md` with its brief/section reference.

Page composition: each page component reads its typed content object and composes reusable block components explicitly (e.g. the Home page renders `<Hero>`, `<TrustBar>`, `<ServiceGrid>`, ... in order, passing the matching fields). Content stays fully separated from presentation, but rendering is plain, readable JSX - not a data-driven section engine.

---

## 6. Component Architecture

Three tiers, one-directional dependencies (ui <- blocks <- pages). Pages compose blocks explicitly; there is no section-renderer/page-builder layer.

- `components/ui/` - shadcn/ui primitives only (Button, Card, Accordion, Sheet, NavigationMenu, Input, Textarea...). No business logic, no content.
- `components/layout/` - chrome shared across pages: `Navbar` (+ mobile `Sheet`), `Footer`, `Container`/`Section`, `LanguageSwitcher`, `StickyMobileCTA`, `Breadcrumbs`.
- `components/blocks/` - reusable, presentational, fully typed via content types: `Hero`, `TrustBar`, `ServiceCard`, `ServiceGrid`, `SectionIntro`, `FirstAssessmentList`, `ReviewSummary`, `BenefitsList`, `ThreeModalityCards`, `FAQ`, `CTASection`/`CTABand`, `RelatedTherapies`, `ContactInfo`, `OpeningHours`, `MapEmbed`, `RichTextRenderer`.
- Pages (in `app/(el)` and `app/en`) import the blocks they need and arrange them in plain JSX, passing typed content fields as props.

Conventions:

- Server Components by default; add `"use client"` only for interactivity (mobile menu, language switcher, FAQ accordion, form).
- Every block is a pure function of its typed props - trivially reusable when data later comes from Sanity.
- Build a block only when a page actually needs it (no components created "for later").
- CTAs render through the shared CTA seam (`resolveCtaHref`) so the destination is centralized (Decision 5).
- Images render through a single `next/image` wrapper reading `ImageMeta` (src + alt + optional focal point).

---

## 7. Coding Conventions

- TypeScript strict mode; no `any` (use `unknown` + narrowing). All content and props are explicitly typed.
- ESLint (next/core-web-vitals) + Prettier; Tailwind class sorting via the Prettier Tailwind plugin.
- Imports via `@/` path alias (`@/components`, `@/content`, `@/lib`).
- Prefer named exports; one primary component per file.
- No secrets in the repo; environment variables via `.env.local` (none required this phase).
- Accessibility: semantic landmarks, labelled controls, visible focus, correct `lang`/`dir`, alt text mandatory on `ImageMeta`.
- Comments explain intent/constraints only, never narrate code.
- Commit style: Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, `content:`).

---

## 8. Naming Conventions

- React components: PascalCase files and exports (`ServiceCard.tsx`).
- Non-component modules/utilities: camelCase (`resolveCtaHref.ts`).
- Route folders: kebab-case matching the public URL (`high-power-laser/`).
- Content module files: kebab-case by slug (`clinical-pilates.ts`).
- Type/interface names: PascalCase, no `I` prefix (`RehabProgram`, `HomeContent`).
- Content keys / IDs: stable kebab-case strings (used as CMS document IDs later).
- CSS custom properties / design tokens: `--color-*`, `--font-*`, `--radius-*`, `--space-*`.
- Booleans: `is/has/should` prefixes.

---

## 9. Design Token Strategy

- Tailwind v4 CSS-first: tokens defined in `src/styles/globals.css` via `@theme`, exposed as CSS variables and Tailwind utilities.
- Token groups: `--color-*` (brand navy, white, neutrals, accents, semantic fg/bg/border), `--font-*` (heading, body), `--radius-*`, `--space-*`, `--shadow-*`, container widths, breakpoints.
- Brand direction (from Brief 1 §18 / Clinical Pilates brief): white, dark blue, clean light, calm premium. These inform token intent.
- CRITICAL (Decision 9): exact brand font names and colour hex values are NOT reliably determinable from the project files alone. They will be defined as clearly-marked `TODO CONFIRM` placeholder tokens in one place and listed in `DECISIONS.md`. We will NOT guess final values; the design will use provisional tokens until you confirm. No brand change is introduced.
- Single source: components use token utilities only (no ad-hoc hex in JSX/CSS), so confirming brand values later is a one-file change.

---

## 10. Asset Organization

- All images live under `public/images/`, grouped by purpose:
  ```
  public/images/
    brand/       # logos (dark/light), EOPYY, association badge
    therapies/   # per-therapy imagery (tecar, laser, shockwave, ...)
    rehab/       # clinical pilates, therapeutic exercise, rehab programs
    space/       # clinic/reception/room photos
    og/          # social share images
  ```
- Source: the backup `FisioLab_images_only/uploads/` and per-page image URLs in the dumps/CSVs are the canonical asset source. We select the needed originals (avoiding the many WordPress-generated resizes) and let `next/image` handle responsive sizing.
- Naming: kebab-case, descriptive, resolution-agnostic (`tecar-winback.jpg`, not `tecar-800x683.jpg`).
- Every image referenced as `ImageMeta { src, alt, width?, height?, focalPoint? }` in the content layer, so a future Sanity asset pipeline replaces `src` without touching components.
- Fonts self-hosted under `public/fonts/` once the exact brand fonts are confirmed (Decision 9); loaded via `next/font` for performance and CLS control.

---

## 11. i18n Strategy

- Locales: `el` (default, root) and `en` (`/en`). `dir="ltr"` for both.
- Routing: two explicit route trees (`app/(el)` and `app/en`) + `trailingSlash: true`. No `[locale]` segment, no middleware, no i18n routing library. This is the simplest strategy that preserves the existing URLs and supports both languages, and it can be refactored to a dynamic segment later if the site grows many locales.
- Content localization lives in the content layer (`el/` vs `en/` typed modules), NOT in translation files. Small UI-chrome microcopy that is not page content (e.g. "Menu", "Close") lives in a tiny typed dictionary in `src/lib/i18n` (still TypeScript, no JSON/parser).
- hreflang + canonical: emitted per page from `registry.ts` slug maps; `x-default` -> `el`.
- Adding EN later: create the page under `app/en/...`, populate the matching `en/` content module, and add its `en` slug in the registry. Sitemap and hreflang pick it up. No changes to Greek pages or shared components.
- Launch posture (Decision 6): existing EN pages preserved exactly; newly added Greek content has no EN page until approved EN copy exists.

---

## 12. Future CMS Integration Points (Sanity)

The architecture makes the CMS a data-source replacement, not a rewrite. Single seam: `src/content/index.ts` access functions.

Swap plan (documented fully in `docs/CMS_MIGRATION.md`):

1. Keep access-function names and return types identical; change only their internals from local-module reads to Sanity GROQ queries.
2. Access functions are typed to permit `async`/`Promise` returns from day one, so pages can `await` them post-swap without signature churn.
3. Content types in `src/content/types/` are authored to map 1:1 onto Sanity documents/objects.

Content-layer -> Sanity mapping:

| Content layer (now)               | Sanity (later)                          |
| --------------------------------- | --------------------------------------- |
| `el                               | en/settings.ts`                         | `siteSettings` singleton (localized) |
| `Navigation`                      | `navigation` singleton (localized)      |
| `Footer`                          | `footer` singleton (localized)          |
| `pages/*.ts` (typed page content) | `page` docs with fields per page        |
| `therapies/*.ts`                  | `therapy` docs                          |
| `rehab/*.ts`                      | `rehabProgram` docs                     |
| `cards.ts`                        | `serviceCard` docs/objects              |
| `TrustBar`, `ReviewSummary`       | `trustBar`, `reviewSummary` objects     |
| `ImageMeta`                       | Sanity image asset + alt/focal fields   |
| `registry.ts` slugs               | `slug` fields + localized slug strategy |
| `redirects.ts`                    | `redirect` docs                         |

Non-goals now: no `sanity`, `next-sanity`, GROQ, Studio, or dataset config is added in this phase (PROJECT_RULES.md). Localization strategy in Sanity (field-level EL/EN) is pre-decided so current content shape matches.

Other seams that stay stable across the swap: `resolveCtaHref` (CTA target -> future booking system), `lib/seo` metadata builders, and the `ImageMeta` wrapper. Because pages compose blocks explicitly, moving to a CMS means the access functions return CMS data of the same shape - the page JSX is unchanged.

---

## 13. Documentation Files

- `README.md` - setup, scripts, stack overview, how to run/build/deploy.
- `docs/ARCHITECTURE.md` - this blueprint (kept current).
- `docs/CONTENT_GUIDE.md` - content-layer structure, how to edit copy safely, how to add a new page, how to add EN later, EN-fallback policy.
- `docs/DECISIONS.md` - the locked decisions + open confirmations (brand fonts/colours, contact-form delivery).
- `docs/CONTENT_CHANGELOG.md` - every authorized deviation from the backup (page, section, old -> new, brief reference); the audit trail proving content fidelity.
- `docs/CMS_MIGRATION.md` - Sanity mapping table + step-by-step swap checklist.

---

## 14. AI Implementation Rules

These rules govern all future implementation work on this project.

- Implement the project incrementally.
- Never implement multiple milestones in a single step.
- Every milestone must result in a compilable, working application.
- Do not anticipate future milestones.
- Do not create unused abstractions.
- Do not create placeholder components "for later."
- Future CMS support should influence architecture, not implementation.
- Favor simple solutions over generalized frameworks.
- Avoid premature optimization.
- Every completed milestone should be production-ready.

---

## 15. Open Items to Confirm (non-blocking)

1. Exact brand font family names and colour hex values (Decision 9) - will use flagged placeholder tokens until confirmed; no guessing.
2. Contact form delivery mechanism for a static site (e.g. email service/serverless endpoint) - only affects the Contact page; CTA architecture is unaffected.

Resolved this round: Therapies URL is now `/therapeies/` (canonical) with a 301 from `/category/therapeies/`; localization uses two explicit route trees (no dynamic segment); content format is typed TypeScript only (no MDX); rendering uses explicit page composition (no page-builder/SectionRenderer).

---

End of blueprint. Sitemap updated to match the approved spreadsheet (existing URLs preserved; new pages use SEO-friendly slugs).
