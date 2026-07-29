/**
 * Canonical slug registry for the site map (see ARCHITECTURE.md §3).
 * Navigation, sitemap, hreflang, and links all read from here.
 */

export type PageKey =
  | "home"
  | "about-us"
  | "privacy-policy"
  | "therapeies"
  | "tecar-therapy"
  | "shockwave"
  | "high-power-laser"
  | "kinesio-taping"
  | "lymphatic-drainage"
  | "trigger-points"
  | "ultrasound"
  | "electrotherapy"
  | "diathermy"
  | "vacuum-therapy"
  | "clinical-pilates"
  | "therapeftiki-askisi"
  | "metegcheiritiki-apokatastasi"
  | "athlitiki-apokatastasi"
  | "apokatastasi-spondylikis-stilis"
  | "apokatastasi-gonatos-omou-ischiou"
  | "proti-axiologisi"
  | "epikoinonia";

export type PageKind = "page" | "therapy" | "rehab";

export interface PageRegistryEntry {
  key: PageKey;
  kind: PageKind;
  /** Greek path (site root). Trailing slash omitted; next.config adds it. */
  elSlug: string;
  /**
   * English path under /en. Trailing slash omitted.
   * Null = no EN route until approved English copy exists.
   */
  enSlug: string | null;
  /** Existing production page (vs new content). */
  existing: boolean;
}

export const therapySlugs = [
  "tecar-therapy",
  "shockwave",
  "high-power-laser",
  "kinesio-taping",
  "lymphatic-drainage",
  "trigger-points",
  "ultrasound",
  "electrotherapy",
  "diathermy",
  "vacuum-therapy",
] as const;

export const rehabSlugs = [
  "clinical-pilates",
  "therapeftiki-askisi",
  "metegcheiritiki-apokatastasi",
  "athlitiki-apokatastasi",
  "apokatastasi-spondylikis-stilis",
  "apokatastasi-gonatos-omou-ischiou",
] as const;

export type TherapySlug = (typeof therapySlugs)[number];
export type RehabSlug = (typeof rehabSlugs)[number];

/** English slug for a rehab program when EN copy is added later. */
export const rehabEnSlugs: Record<RehabSlug, string> = {
  "clinical-pilates": "clinical-pilates",
  "therapeftiki-askisi": "therapeutic-exercise",
  "metegcheiritiki-apokatastasi": "post-operative-rehabilitation",
  "athlitiki-apokatastasi": "sports-rehabilitation",
  "apokatastasi-spondylikis-stilis": "spine-rehabilitation",
  "apokatastasi-gonatos-omou-ischiou": "knee-shoulder-hip-rehabilitation",
};

export const pageRegistry: Record<PageKey, PageRegistryEntry> = {
  home: {
    key: "home",
    kind: "page",
    elSlug: "",
    enSlug: "",
    existing: true,
  },
  "about-us": {
    key: "about-us",
    kind: "page",
    elSlug: "about-us",
    enSlug: "about-us",
    existing: true,
  },
  "privacy-policy": {
    key: "privacy-policy",
    kind: "page",
    elSlug: "privacy-policy",
    enSlug: "privacy-policy",
    existing: true,
  },
  therapeies: {
    key: "therapeies",
    kind: "page",
    elSlug: "therapeies",
    enSlug: "therapeies",
    existing: true,
  },
  "tecar-therapy": {
    key: "tecar-therapy",
    kind: "therapy",
    elSlug: "tecar-therapy",
    enSlug: "tecar-therapy",
    existing: true,
  },
  shockwave: {
    key: "shockwave",
    kind: "therapy",
    elSlug: "shockwave",
    enSlug: "shockwave",
    existing: true,
  },
  "high-power-laser": {
    key: "high-power-laser",
    kind: "therapy",
    elSlug: "high-power-laser",
    enSlug: "high-power-laser",
    existing: true,
  },
  "kinesio-taping": {
    key: "kinesio-taping",
    kind: "therapy",
    elSlug: "kinesio-taping",
    enSlug: "kinesio-taping",
    existing: true,
  },
  "lymphatic-drainage": {
    key: "lymphatic-drainage",
    kind: "therapy",
    elSlug: "lymphatic-drainage",
    enSlug: "lymphatic-drainage",
    existing: true,
  },
  "trigger-points": {
    key: "trigger-points",
    kind: "therapy",
    elSlug: "trigger-points",
    enSlug: "trigger-points",
    existing: true,
  },
  ultrasound: {
    key: "ultrasound",
    kind: "therapy",
    elSlug: "ultrasound",
    enSlug: "ultrasound",
    existing: true,
  },
  electrotherapy: {
    key: "electrotherapy",
    kind: "therapy",
    elSlug: "electrotherapy",
    enSlug: "electrotherapy",
    existing: true,
  },
  diathermy: {
    key: "diathermy",
    kind: "therapy",
    elSlug: "diathermy",
    enSlug: "diathermy",
    existing: true,
  },
  "vacuum-therapy": {
    key: "vacuum-therapy",
    kind: "therapy",
    elSlug: "vacuum-therapy",
    enSlug: "vacuum-therapy",
    existing: true,
  },
  "clinical-pilates": {
    key: "clinical-pilates",
    kind: "rehab",
    elSlug: "clinical-pilates",
    enSlug: null, // EN when approved copy exists
    existing: false,
  },
  "therapeftiki-askisi": {
    key: "therapeftiki-askisi",
    kind: "rehab",
    elSlug: "therapeftiki-askisi",
    enSlug: null,
    existing: false,
  },
  "metegcheiritiki-apokatastasi": {
    key: "metegcheiritiki-apokatastasi",
    kind: "rehab",
    elSlug: "metegcheiritiki-apokatastasi",
    enSlug: null,
    existing: false,
  },
  "athlitiki-apokatastasi": {
    key: "athlitiki-apokatastasi",
    kind: "rehab",
    elSlug: "athlitiki-apokatastasi",
    enSlug: null,
    existing: false,
  },
  "apokatastasi-spondylikis-stilis": {
    key: "apokatastasi-spondylikis-stilis",
    kind: "rehab",
    elSlug: "apokatastasi-spondylikis-stilis",
    enSlug: null,
    existing: false,
  },
  "apokatastasi-gonatos-omou-ischiou": {
    key: "apokatastasi-gonatos-omou-ischiou",
    kind: "rehab",
    elSlug: "apokatastasi-gonatos-omou-ischiou",
    enSlug: null,
    existing: false,
  },
  "proti-axiologisi": {
    key: "proti-axiologisi",
    kind: "page",
    elSlug: "proti-axiologisi",
    enSlug: null,
    existing: false,
  },
  epikoinonia: {
    key: "epikoinonia",
    kind: "page",
    elSlug: "epikoinonia",
    enSlug: "contact",
    existing: false,
  },
};

export function getRegistryEntry(key: PageKey): PageRegistryEntry {
  return pageRegistry[key];
}

export function getAllRegistryEntries(): PageRegistryEntry[] {
  return Object.values(pageRegistry);
}
