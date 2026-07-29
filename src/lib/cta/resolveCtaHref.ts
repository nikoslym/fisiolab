import type { Locale } from "@/lib/i18n/config";
import { localizedHref } from "@/lib/i18n/config";

/**
 * Single CTA destination seam (Decision 5).
 * Primary CTAs resolve to the Contact / Appointment page for now.
 * Swap this target later for an external booking system without changing UI.
 *
 * Greek: /epikoinonia/
 * English (when EN contact page exists): /en/contact/
 */
const PRIMARY_CTA_PATH_BY_LOCALE: Record<Locale, string> = {
  el: "/epikoinonia",
  en: "/contact",
};

export function resolveCtaHref(locale: Locale, overridePath?: string): string {
  const target = overridePath || PRIMARY_CTA_PATH_BY_LOCALE[locale];

  if (
    target.startsWith("http://") ||
    target.startsWith("https://") ||
    target.startsWith("mailto:") ||
    target.startsWith("tel:") ||
    target.startsWith("#")
  ) {
    return target;
  }

  return localizedHref(target, locale);
}
