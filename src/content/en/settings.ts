import type {
  Footer,
  Navigation,
  ReviewSummary,
  SiteSettings,
  TrustBar,
} from "@/content/types";

/**
 * Site-wide English settings.
 * Contact/hours from backup. EOPYY wording per Brief 1 §10.
 * Trust-bar Greek copy is not translated (Decision 6); only explicitly
 * approved EN phrases are included.
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
    { days: "Monday-Thursday", hours: "09.00-21.00" },
    { days: "Friday", hours: "09.00-13.00" },
  ],
  eopyyAffiliated: true,
  googleReviewsCount: 130,
  primaryCta: {
    label: "Book an Assessment",
    href: "/contact",
  },
};

export const navigation: Navigation = {
  items: [
    { label: "Home", href: "/" },
    { label: "Therapies", href: "/therapeies" },
    { label: "About us", href: "/about-us" },
    { label: "Contact", href: "/contact" },
  ],
};

/** Brief 1 §15 English footer. */
export const footer: Footer = {
  copyright: "© 2026 FisioLab. All Rights Reserved.",
  legalLinks: [{ label: "Privacy Policy", href: "/privacy-policy" }],
};

/**
 * Only items with approved English wording / numeric fact from briefs.
 * Full Greek trust bar is not translated at launch (Decision 6).
 */
export const trustBar: TrustBar = {
  items: ["130+ Google Reviews", "Contracted with EOPYY"],
};

/** EN review bullets not provided in briefs — empty until approved copy. */
export const reviewSummary: ReviewSummary = {
  bullets: [],
  externalLink: {
    label: "See reviews on Google",
    href: "https://share.google/hwpbuA1C3mie7B1i1",
  },
};
