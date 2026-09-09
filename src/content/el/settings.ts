import type {
  Footer,
  Navigation,
  ReviewSummary,
  SiteSettings,
  TrustBar,
} from "@/content/types";

/**
 * Site-wide Greek settings.
 * Contact/hours from backup home dump. CTAs/nav per approved decisions + Brief 1.
 */
export const siteSettings: SiteSettings = {
  siteName: "FisioLab",
  contact: {
    address: "Χ. Δασκαλάκη 5, Ρέθυμνο, 74132",
    mapsUrl: "https://share.google/hwpbuA1C3mie7B1i1",
    phone: "+302831025854",
    email: "spanoudakis@fisiolab.eu",
  },
  openingHours: [
    { days: "Δευτέρα-Πέμπτη", hours: "09.00-21.00" },
    { days: "Παρασκευή", hours: "09.00-13.00" },
  ],
  eopyyAffiliated: true,
  googleReviewsCount: 130,
  primaryCta: {
    label: "Κλείστε αξιολόγηση",
    href: "/epikoinonia",
  },
};

/** Brief 1 §17 proposed menu structure. */
export const navigation: Navigation = {
  items: [
    { label: "Αρχική", href: "/" },
    { label: "Θεραπείες", href: "/therapeies" },
    { label: "Clinical Pilates", href: "/clinical-pilates" },
    { label: "Σχετικά με εμάς", href: "/about-us" },
    { label: "Επικοινωνία", href: "/epikoinonia" },
  ],
};

/** Brief 1 §15 footer. */
export const footer: Footer = {
  copyright: "© 2026 FisioLab. All Rights Reserved.",
  legalLinks: [{ label: "Πολιτική Απορρήτου", href: "/privacy-policy" }],
};

/** Brief 1 §4 trust bar (hardcoded value per Decision 7). */
export const trustBar: TrustBar = {
  items: [
    "130+ Google Reviews",
    "Επιστημονική αξιολόγηση",
    "Προηγμένος εξοπλισμός",
    "Στο κέντρο του Ρεθύμνου",
    "Συμβεβλημένο με ΕΟΠΥΥ",
  ],
};

/** Brief 1 §7 review summary bullets. */
export const reviewSummary: ReviewSummary = {
  bullets: [
    "Εξατομικευμένη προσέγγιση και ουσιαστική αξιολόγηση",
    "Άμεση ανακούφιση και καθοδήγηση με σαφές θεραπευτικό πλάνο",
    "Σύγχρονος, καθαρός και προσεγμένος χώρος",
    "Επαγγελματισμός, συνέπεια και ανθρώπινη επικοινωνία",
  ],
  externalLink: {
    label: "Δείτε τις αξιολογήσεις στο Google",
    // Google Search reviews panel (not the business profile share link).
    href: "https://www.google.com/search?q=fisiolab&si=APenkKnzv9m99ToiohAuzpadUwbOz34nZJ3j2Ukmo5XOUYWAppVTc7-QhL3GmxrX-iY4UQCtRhyjYqfr6RWs3nYL2SxU7Lmt0Ghlu0x-P--Vv3nfuIQvMF8%3D&uds=AJ5uw1-CsN_VmOWvV4nQCD6b3IOKz_GIrudMQ3L0t3Rtl7xUQS2QR1EzHKaXHJR4ly0MMI9VcSbrfLFSfJInEIm1STPdljFppIRHvbZQ6wZ-_ZcgTvQKQcQ#sv=CAESzQEKuQEStgEKd0FKaVQ0dEtocDk3LUlWd29sSVJXQjllYWpGaGl5YllvQ3hlV0pLODdFMk1WNmlBU0RyWExWV0k1UVZEa1NFeDdrbGdMM3VKMHpyS0tGTXNlOHZoU3F6clZvSXNkYzJGdnM2d184MDVlSzZYY0NzeG43cTdLYU9NEhdEaHFoYW9lSUhNVzZpLWdQN1otbDZBVRoiQURzcjlmUkR0ZkQ3OTk1c2o3MkxiVTR5dkZZZnBldEZHURIEODA1MRoBMyoAMAA4AUAAGAAgr5XXjAI6AEoCEAE",
  },
};
