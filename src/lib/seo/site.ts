/**
 * Canonical origin for metadata, sitemap, and structured data.
 * Override with NEXT_PUBLIC_SITE_URL if the launch host is not the apex domain.
 */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? "https://fisiolab.eu";
  return raw.replace(/\/+$/, "");
}

export function absoluteUrl(path: string): string {
  return `${getSiteUrl()}${path}`;
}

/** Branded share image used when a page has no dedicated one. */
export const defaultOgImage = {
  src: "/images/brand/og.jpg",
  alt: "FisioLab Physiotherapy Center — specialized physiotherapy and clinical rehabilitation in Rethymno",
  width: 1024,
  height: 576,
} as const;
