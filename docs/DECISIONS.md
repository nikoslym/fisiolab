# Project Decisions

Implementation decisions that affect the current static build.

## Brand tokens

- Brand blue: `#1f51a2`
- Brand aqua: `#81cecc`
- Source: dominant solid colors sampled from the canonical
  `fisiolab-Dark-Logo-02.png` included in the project backup.
- The exact brand font is not present in the project files. The site uses a
  Greek-safe system font stack until the client confirms the font. No substitute
  web font has been invented.

## Brand assets

The following canonical files were copied from the project backup without
altering their visual content:

- `public/images/brand/fisiolab-logo-dark.png`
- `public/images/brand/fisiolab-logo-light.png`
- `public/images/brand/eopyy.png`
- `public/images/brand/panhellenic-physiotherapists-association.png`

## CTA destination

Primary CTAs resolve through `resolveCtaHref()`:

- Greek: `/epikoinonia/`
- English: `/en/contact/` when the approved English Contact page is created.
- A future external booking URL can replace this target without changing UI
  components.
