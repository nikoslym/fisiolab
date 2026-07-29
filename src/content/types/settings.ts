import type { Cta } from "./common";

/** Global site settings (maps to a Sanity `siteSettings` singleton later). */
export interface SiteSettings {
  siteName: string;
  contact: ContactInfo;
  openingHours: OpeningHours[];
  eopyyAffiliated: boolean;
  googleReviewsCount?: number;
  social?: SocialLink[];
  primaryCta: Cta;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface OpeningHours {
  days: string;
  hours: string;
}

export interface SocialLink {
  platform: string;
  href: string;
}

/** Primary navigation. */
export interface Navigation {
  items: NavItem[];
}

export interface NavItem {
  label: string;
  href: string;
}

/** Footer content. */
export interface Footer {
  copyright: string;
  legalLinks: NavItem[];
}

/** Homepage trust bar (short trust signals). */
export interface TrustBar {
  items: string[];
}

/** Homepage review/social-proof summary. */
export interface ReviewSummary {
  bullets: string[];
  externalLink?: Cta;
}
