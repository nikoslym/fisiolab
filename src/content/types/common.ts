/**
 * Shared content-layer types.
 *
 * These interfaces define the SHAPE of all site content. Content is authored as
 * typed TypeScript objects (no MDX/JSON/parsers). The same shapes are intended
 * to map 1:1 onto a future Sanity schema, so a CMS swap only changes the data
 * source behind the access functions - not components or pages.
 */

export type { Locale } from "@/lib/i18n/config";

/** SEO metadata for a page. */
export interface Seo {
  title: string;
  description: string;
  ogImage?: ImageMeta;
  noindex?: boolean;
}

/** A single call-to-action. `href` is resolved through the CTA seam. */
export interface Cta {
  label: string;
  href: string;
}

/** An image reference with the metadata a future CMS asset pipeline needs. */
export interface ImageMeta {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  /** 0–1 anchor used by object-position / background-position. */
  focalPoint?: { x: number; y: number };
  /**
   * Width multiplier for full-bleed hero backgrounds. Values above 1 zoom in so
   * vertical positioning works on wide panoramic photos (otherwise only the sides
   * are cropped on laptop screens).
   */
  coverScale?: number;
}

/** Typed rich-text: a list of structured nodes (no Markdown/MDX). */
export type RichText = RichTextNode[];

export type RichTextNode =
  | { type: "heading"; level: 2 | 3 | 4; text: string }
  | { type: "paragraph"; text: string }
  | { type: "quote"; lines: string[] }
  | { type: "list"; ordered: boolean; items: string[] };
