import type { Cta, ImageMeta, RichText, Seo } from "./common";

/** A machine/therapy detail page (e.g. TECAR, High Power Laser). */
export interface Therapy {
  slug: string;
  title: string;
  hero?: TherapyHero;
  body: RichText;
  images?: ImageMeta[];
  relatedSlugs?: string[];
  seo: Seo;
}

export interface TherapyHero {
  heading: string;
  subheading?: string;
  image?: ImageMeta;
  cta?: Cta;
}
