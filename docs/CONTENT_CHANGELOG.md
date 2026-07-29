# Content Changelog

Audit trail of every authorized deviation from the WordPress backup.
Source of truth: extracted backup package, raw `.wpress` archive + client briefs. Live site was not scraped.

## Global cleanup (all migrated pages)

| Change                                                                                             | Source                  |
| -------------------------------------------------------------------------------------------------- | ----------------------- |
| Removed `Call us`, `No Comments`, `perrytrademark28`, empty `####`, “Navigate to the next section” | Brief 1 §1              |
| Removed duplicated footer chrome (“ΒΡΕΙΤΕ ΜΑΣ” / FIND US blocks) from page body modules            | Template cleanup        |
| Unified primary CTA labels: EL «Κλείστε αξιολόγηση», EN «Book an Assessment»                       | Brief 1 §10, §14        |
| Therapies archive URL → `/therapeies/` (301 from `/category/therapeies/`)                          | Architecture Decision 1 |

## Home (EL)

| Change                                                                                    | Source                 |
| ----------------------------------------------------------------------------------------- | ---------------------- |
| New hero heading + subheading + CTA                                                       | Brief 1 §2             |
| New intro paragraphs (clinical assessment framing)                                        | Brief 1 §3             |
| Added trust bar (5 items, including hardcoded 109+ Google Reviews)                        | Brief 1 §4; Decision 7 |
| Added 6 new rehab service cards + reordered grid                                          | Brief 2 / Brief 3      |
| Renamed first-appointment section → «Τι περιλαμβάνει η πρώτη αξιολόγηση» + new bullets    | Brief 1 §6             |
| Restored original «Πρώτο Ραντεβού / Απαραίτητα πιστοποιητικά» as its own section above it  | Backup `01_el_page.txt` + explicit request |
| Restored «Γιατί να μας εμπιστευτείτε» feature grid (Call us removed)                       | Backup `01_el_page.txt`; Brief 1 §1        |
| Restored missing machine-therapy homepage titles + scientific-director lines               | Backup `01_el_page.txt` / `15_en_home.txt` |
| Added 4 review-summary bullets                                                            | Brief 1 §7             |
| Replaced keyword-stuffing SEO block with natural SEO text (also used as meta description) | Brief 1 §8             |
| Footer copyright → © 2026; legal label «Πολιτική Απορρήτου»                               | Brief 1 §15            |

## Home (EN)

| Change                                                                                          | Source      |
| ----------------------------------------------------------------------------------------------- | ----------- |
| Replaced “We help you relieve painful pain” with Brief 1 English hero                           | Brief 1 §10 |
| Removed Greek SEO bleed-through from EN page                                                    | Brief 1 §10 |
| SEO description = Brief 1 English SEO text                                                      | Brief 1 §10 |
| “CONTRACTORS WITH EOPYY” → “Contracted with EOPYY” (trust bar)                                  | Brief 1 §10 |
| New Greek homepage sections (rehab cards, assessment rename, review bullets) **not** translated | Decision 6  |

## TECAR (EL)

| Change                                                        | Source      |
| ------------------------------------------------------------- | ----------- |
| Removed absolute claims (90%, 1η συνεδρία, 9 στις 10)         | Brief 1 §12 |
| Removed “Από την 1η συνεδρία” heading + absolute results list | Brief 1 §12 |
| Removed broken SEO headings (ΘΕΡΑΠΕΙΑ ΤΕΨΑΡ / UERAPEIA TECAR) | Brief 1 §12 |
| Inserted authorized TECAR description sentence                | Brief 1 §12 |

## High Power Laser (EL)

| Change                                                                    | Source      |
| ------------------------------------------------------------------------- | ----------- |
| Removed “9 στις 10” absolute claim                                        | Brief 1 §11 |
| Replaced keyword-stuff SEO headings with authorized natural HPL SEO block | Brief 1 §11 |

## TECAR / HPL (EN)

| Change                                                                  | Source     |
| ----------------------------------------------------------------------- | ---------- |
| Template cleanup only; Greek brief claim rewrites **not** applied to EN | Decision 6 |

## About us

| Change                                                                                 | Source             |
| -------------------------------------------------------------------------------------- | ------------------ |
| Recovered EL + EN page bodies and canonical hero image from the local `.wpress` backup | Raw project backup |
| Replaced «εγγυώνται σίγουρο αποτέλεσμα» with approved clinical wording (EL only)       | Brief 1 §9         |
| Removed the keyword-stuffing block and added «Η φιλοσοφία μας» (EL only)               | Brief 1 §9         |
| Preserved the existing mixed-language EN body without translating the Greek paragraphs | Decision 6         |

## New pages

| Page                                                                       | Content source                                                                        |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Clinical Pilates `/clinical-pilates/`                                      | Clinical Pilates Copy Brief v2 (landing); Brief 3 for homepage card only (Decision 1) |
| Θεραπευτική Άσκηση `/therapeftiki-askisi/`                                 | Brief 3 landing page                                                                  |
| Μετεγχειρητική Αποκατάσταση `/metegcheiritiki-apokatastasi/`               | Brief 3                                                                               |
| Αθλητική Αποκατάσταση `/athlitiki-apokatastasi/`                           | Brief 3                                                                               |
| Αποκατάσταση Σπονδυλικής Στήλης `/apokatastasi-spondylikis-stilis/`        | Brief 3                                                                               |
| Αποκατάσταση Γόνατος / Ώμου / Ισχίου `/apokatastasi-gonatos-omou-ischiou/` | Brief 3                                                                               |
| Πρώτη Αξιολόγηση `/proti-axiologisi/`                                      | Brief 1 §6 list + sitemap title                                                       |
| Επικοινωνία / Ραντεβού `/epikoinonia/`                                     | Sitemap title only; details from `siteSettings`                                       |
| Contact / Appointment `/en/contact/`                                       | Approved sitemap title; details from existing EN `siteSettings`                       |

## Blocked / not migrated

| Item                                             | Reason                                                                                         |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| Google Reviews destination URL                   | Backup has label «Διαβάστε περισσότερα» / «Read more» but no URL in project files → `href: ""` |
| Existing machine therapy card short descriptions | Not present in homepage backup → left empty (not invented)                                     |
| EN meta descriptions for new pages               | Not provided → empty until approved                                                            |

## Privacy Policy (EL + EN)

Migrated verbatim from backup texts `03_el_privacy-policy.txt` and `17_en_privacy-policy.txt` (footer chrome omitted). No brief edits.
