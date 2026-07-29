export type Locale = "el" | "en";

export const locales: readonly Locale[] = ["el", "en"] as const;

export const defaultLocale: Locale = "el";

export const uiCopy: Record<
  Locale,
  {
    menu: string;
    closeMenu: string;
    switchLanguage: string;
    findUs: string;
    openingHours: string;
    contact: string;
    eopyy: string;
  }
> = {
  el: {
    menu: "Μενού",
    closeMenu: "Κλείσιμο μενού",
    switchLanguage: "English",
    findUs: "Βρείτε μας",
    openingHours: "Ωράριο",
    contact: "Επικοινωνία",
    eopyy: "Συμβεβλημένο με ΕΟΠΥΥ",
  },
  en: {
    menu: "Menu",
    closeMenu: "Close menu",
    switchLanguage: "Ελληνικά",
    findUs: "Find us",
    openingHours: "Opening hours",
    contact: "Contact",
    eopyy: "Contracted with EOPYY",
  },
};

/**
 * Builds an internal href for a given locale.
 * Greek (default) is served at the site root; English is served under `/en`.
 * Keeps links correct without an i18n routing framework.
 */
export function localizedHref(path: string, locale: Locale): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === "en") {
    return normalized === "/" ? "/en" : `/en${normalized}`;
  }
  return normalized;
}
