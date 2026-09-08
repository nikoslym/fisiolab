import type { Cta, ImageMeta, RichText, Seo } from "./common";

/** A clinical-rehabilitation landing page (e.g. Clinical Pilates). */
export interface RehabProgram {
  slug: string;
  title: string;
  hero?: RehabHero;
  body: RichText;
  faq?: FaqItem[];
  relatedSlugs?: string[];
  cta?: Cta;
  image?: ImageMeta;
  images?: ImageMeta[];
  seo: Seo;
}

export interface RehabHero {
  heading: string;
  subheading?: string;
  image?: ImageMeta;
  cta?: Cta;
}

export interface FaqItem {
  question: string;
  answer: string;
}
