/**
 * Content access functions — the single CMS seam.
 *
 * Components and pages must call these functions (never import locale modules
 * directly). Today they read local typed modules; later they can query Sanity
 * with the same signatures (optionally async).
 *
 * Until Milestone 3 populates content, most getters return null / [].
 */

import type { Locale } from "@/lib/i18n/config";
import type {
  AboutContent,
  ContactContent,
  Footer,
  HomeContent,
  InitialAssessmentContent,
  Navigation,
  PrivacyContent,
  RehabProgram,
  ReviewSummary,
  ServiceCard,
  SiteSettings,
  TherapiesPageContent,
  Therapy,
  TrustBar,
} from "@/content/types";
import {
  rehabSlugs,
  therapySlugs,
  type RehabSlug,
  type TherapySlug,
} from "@/content/registry";

import * as elSettings from "@/content/el/settings";
import * as enSettings from "@/content/en/settings";
import { serviceCards as elCards } from "@/content/el/cards";
import { serviceCards as enCards } from "@/content/en/cards";

import { homeContent as elHome } from "@/content/el/pages/home";
import { homeContent as enHome } from "@/content/en/pages/home";
import { aboutContent as elAbout } from "@/content/el/pages/about-us";
import { aboutContent as enAbout } from "@/content/en/pages/about-us";
import { privacyContent as elPrivacy } from "@/content/el/pages/privacy-policy";
import { privacyContent as enPrivacy } from "@/content/en/pages/privacy-policy";
import { therapiesPageContent as elTherapiesPage } from "@/content/el/pages/therapies";
import { therapiesPageContent as enTherapiesPage } from "@/content/en/pages/therapies";
import { initialAssessmentContent as elInitialAssessment } from "@/content/el/pages/proti-axiologisi";
import { contactContent as elContact } from "@/content/el/pages/epikoinonia";
import { contactContent as enContact } from "@/content/en/pages/contact";

import { therapy as elTecar } from "@/content/el/therapies/tecar-therapy";
import { therapy as elShockwave } from "@/content/el/therapies/shockwave";
import { therapy as elLaser } from "@/content/el/therapies/high-power-laser";
import { therapy as elKinesio } from "@/content/el/therapies/kinesio-taping";
import { therapy as elLymphatic } from "@/content/el/therapies/lymphatic-drainage";
import { therapy as elTrigger } from "@/content/el/therapies/trigger-points";
import { therapy as elUltrasound } from "@/content/el/therapies/ultrasound";
import { therapy as elElectro } from "@/content/el/therapies/electrotherapy";
import { therapy as elDiathermy } from "@/content/el/therapies/diathermy";
import { therapy as elVacuum } from "@/content/el/therapies/vacuum-therapy";

import { therapy as enTecar } from "@/content/en/therapies/tecar-therapy";
import { therapy as enShockwave } from "@/content/en/therapies/shockwave";
import { therapy as enLaser } from "@/content/en/therapies/high-power-laser";
import { therapy as enKinesio } from "@/content/en/therapies/kinesio-taping";
import { therapy as enLymphatic } from "@/content/en/therapies/lymphatic-drainage";
import { therapy as enTrigger } from "@/content/en/therapies/trigger-points";
import { therapy as enUltrasound } from "@/content/en/therapies/ultrasound";
import { therapy as enElectro } from "@/content/en/therapies/electrotherapy";
import { therapy as enDiathermy } from "@/content/en/therapies/diathermy";
import { therapy as enVacuum } from "@/content/en/therapies/vacuum-therapy";

import { rehabProgram as elClinicalPilates } from "@/content/el/rehab/clinical-pilates";
import { rehabProgram as elTherapeftikiAskisi } from "@/content/el/rehab/therapeftiki-askisi";
import { rehabProgram as elMetegcheiritiki } from "@/content/el/rehab/metegcheiritiki-apokatastasi";
import { rehabProgram as elAthlitiki } from "@/content/el/rehab/athlitiki-apokatastasi";
import { rehabProgram as elSpine } from "@/content/el/rehab/apokatastasi-spondylikis-stilis";
import { rehabProgram as elJoints } from "@/content/el/rehab/apokatastasi-gonatos-omou-ischiou";

const elTherapies: Record<TherapySlug, Therapy | null> = {
  "tecar-therapy": elTecar,
  shockwave: elShockwave,
  "high-power-laser": elLaser,
  "kinesio-taping": elKinesio,
  "lymphatic-drainage": elLymphatic,
  "trigger-points": elTrigger,
  ultrasound: elUltrasound,
  electrotherapy: elElectro,
  diathermy: elDiathermy,
  "vacuum-therapy": elVacuum,
};

const enTherapies: Record<TherapySlug, Therapy | null> = {
  "tecar-therapy": enTecar,
  shockwave: enShockwave,
  "high-power-laser": enLaser,
  "kinesio-taping": enKinesio,
  "lymphatic-drainage": enLymphatic,
  "trigger-points": enTrigger,
  ultrasound: enUltrasound,
  electrotherapy: enElectro,
  diathermy: enDiathermy,
  "vacuum-therapy": enVacuum,
};

const elRehabs: Record<RehabSlug, RehabProgram | null> = {
  "clinical-pilates": elClinicalPilates,
  "therapeftiki-askisi": elTherapeftikiAskisi,
  "metegcheiritiki-apokatastasi": elMetegcheiritiki,
  "athlitiki-apokatastasi": elAthlitiki,
  "apokatastasi-spondylikis-stilis": elSpine,
  "apokatastasi-gonatos-omou-ischiou": elJoints,
};

function isTherapySlug(slug: string): slug is TherapySlug {
  return (therapySlugs as readonly string[]).includes(slug);
}

function isRehabSlug(slug: string): slug is RehabSlug {
  return (rehabSlugs as readonly string[]).includes(slug);
}

export function getSiteSettings(locale: Locale): SiteSettings | null {
  return locale === "en" ? enSettings.siteSettings : elSettings.siteSettings;
}

export function getNavigation(locale: Locale): Navigation | null {
  return locale === "en" ? enSettings.navigation : elSettings.navigation;
}

export function getFooter(locale: Locale): Footer | null {
  return locale === "en" ? enSettings.footer : elSettings.footer;
}

export function getTrustBar(locale: Locale): TrustBar | null {
  return locale === "en" ? enSettings.trustBar : elSettings.trustBar;
}

export function getReviewSummary(locale: Locale): ReviewSummary | null {
  return locale === "en" ? enSettings.reviewSummary : elSettings.reviewSummary;
}

export function getServiceCards(locale: Locale): ServiceCard[] {
  return locale === "en" ? enCards : elCards;
}

export function getHomeContent(locale: Locale): HomeContent | null {
  return locale === "en" ? enHome : elHome;
}

export function getAboutContent(locale: Locale): AboutContent | null {
  return locale === "en" ? enAbout : elAbout;
}

export function getPrivacyContent(locale: Locale): PrivacyContent | null {
  return locale === "en" ? enPrivacy : elPrivacy;
}

export function getTherapiesPageContent(
  locale: Locale,
): TherapiesPageContent | null {
  return locale === "en" ? enTherapiesPage : elTherapiesPage;
}

export function getInitialAssessmentContent(
  locale: Locale,
): InitialAssessmentContent | null {
  // New page: Greek only until approved EN copy exists.
  return locale === "en" ? null : elInitialAssessment;
}

export function getContactContent(locale: Locale): ContactContent | null {
  return locale === "en" ? enContact : elContact;
}

export function getTherapy(slug: string, locale: Locale): Therapy | null {
  if (!isTherapySlug(slug)) return null;
  const map = locale === "en" ? enTherapies : elTherapies;
  return map[slug];
}

export function getAllTherapies(locale: Locale): Therapy[] {
  const map = locale === "en" ? enTherapies : elTherapies;
  return therapySlugs
    .map((slug) => map[slug])
    .filter((t): t is Therapy => t !== null);
}

export function getRehabProgram(
  slug: string,
  locale: Locale,
): RehabProgram | null {
  if (!isRehabSlug(slug)) return null;
  // New rehab pages: Greek only until approved EN copy exists.
  if (locale === "en") return null;
  return elRehabs[slug];
}

export function getAllRehabPrograms(locale: Locale): RehabProgram[] {
  if (locale === "en") return [];
  return rehabSlugs
    .map((slug) => elRehabs[slug])
    .filter((p): p is RehabProgram => p !== null);
}

/**
 * Related therapies as service cards (for therapy detail footers).
 * Returns [] until content is populated in Milestone 3.
 */
export function getRelatedTherapies(
  slug: string,
  locale: Locale,
): ServiceCard[] {
  void slug;
  void locale;
  return [];
}

// Re-export registry helpers for convenience at the content seam.
export {
  getAllRegistryEntries,
  getRegistryEntry,
  pageRegistry,
  rehabEnSlugs,
  rehabSlugs,
  therapySlugs,
} from "@/content/registry";
export type {
  PageKey,
  PageKind,
  PageRegistryEntry,
  RehabSlug,
  TherapySlug,
} from "@/content/registry";
