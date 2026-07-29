import type { Cta, ImageMeta } from "./common";

/**
 * A service/therapy card used on the homepage grid and the Therapies page.
 * `href` points to the item's detail page.
 */
export interface ServiceCard {
  title: string;
  description: string;
  image?: ImageMeta;
  cta: Cta;
}
