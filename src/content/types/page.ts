import type { Cta, ImageMeta, RichText, Seo } from "./common";
import type { ReviewSummary, TrustBar } from "./settings";
import type { ServiceCard } from "./card";

/**
 * Per-page content interfaces. Each page has an explicit, named shape (no
 * generic section-block union). Page components compose blocks by reading these
 * fields directly.
 */

export interface HomeContent {
  hero: PageHero;
  /** Scientific-director lines shown under the hero (from backup). */
  heroCredentials?: string[];
  intro: RichText;
  introCta?: Cta;
  /** Photo gallery shown before the services section. */
  gallery?: ImageMeta[];
  trustBar: TrustBar;
  servicesHeading: string;
  services: ServiceCard[];
  /** Original «Πρώτο Ραντεβού / Απαραίτητα πιστοποιητικά» block from the live site. */
  firstAppointment?: FirstAppointment;
  firstAssessment?: FirstAssessment;
  reviewsHeading: string;
  reviews: ReviewSummary;
  whyTrustUs?: WhyTrustUs;
  seo: Seo;
}

export interface AboutContent {
  hero?: PageHero;
  body: RichText;
  seo: Seo;
}

export interface PrivacyContent {
  title: string;
  body: RichText;
  seo: Seo;
}

export interface TherapiesPageContent {
  hero?: PageHero;
  /** Photo gallery shown after the hero / before therapy lists. */
  gallery?: ImageMeta[];
  therapiesHeading: string;
  therapies: ServiceCard[];
  rehabProgramsHeading?: string;
  rehabPrograms: ServiceCard[];
  seo: Seo;
}

/** Dedicated Πρώτη Αξιολόγηση / Initial Assessment page. */
export interface InitialAssessmentContent {
  hero?: PageHero;
  body: RichText;
  items?: string[];
  seo: Seo;
}

/** Επικοινωνία / Ραντεβού / Contact / Appointment page. */
export interface ContactContent {
  hero?: PageHero;
  seo: Seo;
}

export interface PageHero {
  heading: string;
  subheading?: string;
  image?: ImageMeta;
  cta?: Cta;
}

export interface FirstAssessment {
  title: string;
  items: string[];
}

/** Homepage «Πρώτο Ραντεβού» / First Appointment certificates section. */
export interface FirstAppointment {
  eyebrow: string;
  title: string;
  intro: string;
  bullets: string[];
  certificatesIntro: string;
  certificates: Array<{
    title: string;
    detail: string;
  }>;
  image: ImageMeta;
}

/** Homepage «Γιατί να μας εμπιστευτείτε» feature grid from the backup. */
export interface WhyTrustUs {
  title: string;
  items: Array<{
    label: string;
    text: string;
  }>;
}
