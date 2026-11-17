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
    skipToContent: string;
    notFoundTitle: string;
    notFoundHeading: string;
    notFoundBody: string;
    notFoundHome: string;
    notFoundContact: string;
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
    skipToContent: "Μετάβαση στο περιεχόμενο",
    notFoundTitle: "Η σελίδα δεν βρέθηκε | FisioLab",
    notFoundHeading: "Η σελίδα δεν βρέθηκε",
    notFoundBody:
      "Η διεύθυνση που ανοίξατε δεν υπάρχει ή έχει αλλάξει. Επιστρέψτε στην αρχική ή επικοινωνήστε με το κέντρο.",
    notFoundHome: "Αρχική",
    notFoundContact: "Επικοινωνία",
  },
  en: {
    menu: "Menu",
    closeMenu: "Close menu",
    switchLanguage: "Ελληνικά",
    findUs: "Find us",
    openingHours: "Opening hours",
    contact: "Contact",
    eopyy: "Contracted with EOPYY",
    skipToContent: "Skip to content",
    notFoundTitle: "Page not found | FisioLab",
    notFoundHeading: "Page not found",
    notFoundBody:
      "This address does not exist or has changed. Return to the homepage or contact the clinic.",
    notFoundHome: "Home",
    notFoundContact: "Contact",
  },
};

/** Greek is the default. English is only the /en path. */
export function localeFromPathname(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "el";
}

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
