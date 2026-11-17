import type { Metadata } from "next";
import type { Seo } from "@/content/types";
import { getRegistryEntry, type PageKey } from "@/content/registry";
import type { Locale } from "@/lib/i18n/config";
import { absoluteUrl, defaultOgImage } from "@/lib/seo/site";

const DESCRIPTION_LIMIT = 160;

/** Public path for a registry slug, including the trailing slash Next.js emits. */
export function localePath(locale: Locale, slug: string): string {
  if (locale === "en") {
    return slug ? `/en/${slug}/` : "/en/";
  }
  return slug ? `/${slug}/` : "/";
}

function metaDescription(text: string): string | undefined {
  const clean = text.replace(/\s+/g, " ").trim();
  if (!clean) return undefined;
  if (clean.length <= DESCRIPTION_LIMIT) return clean;
  const cut = clean.slice(0, DESCRIPTION_LIMIT - 1);
  const lastSpace = cut.lastIndexOf(" ");
  const trimmed = (lastSpace > 80 ? cut.slice(0, lastSpace) : cut).trimEnd();
  return `${trimmed}…`;
}

/**
 * Page metadata from the content layer plus hreflang/canonical from the registry.
 * Greek is x-default. English is omitted when that page has no English route.
 */
export function buildPageMetadata({
  seo,
  locale,
  pageKey,
}: {
  seo: Seo;
  locale: Locale;
  pageKey: PageKey;
}): Metadata {
  const entry = getRegistryEntry(pageKey);
  const slug = locale === "en" ? (entry.enSlug ?? "") : entry.elSlug;
  const path = localePath(locale, slug);
  const description = metaDescription(seo.description);
  const greekUrl = absoluteUrl(localePath("el", entry.elSlug));
  const languages: Record<string, string> = {
    el: greekUrl,
    "x-default": greekUrl,
  };
  if (entry.enSlug !== null) {
    languages.en = absoluteUrl(localePath("en", entry.enSlug));
  }

  const image = seo.ogImage ?? defaultOgImage;
  const imageUrl = image.src.startsWith("http")
    ? image.src
    : absoluteUrl(image.src);

  return {
    title: seo.title,
    description,
    alternates: {
      canonical: absoluteUrl(path),
      languages,
    },
    openGraph: {
      title: seo.title,
      description,
      url: absoluteUrl(path),
      siteName: "FisioLab",
      locale: locale === "el" ? "el_GR" : "en_GB",
      alternateLocale:
        entry.enSlug === null
          ? undefined
          : locale === "el"
            ? ["en_GB"]
            : ["el_GR"],
      type: "website",
      images: [
        {
          url: imageUrl,
          alt: image.alt,
          width: image.width,
          height: image.height,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description,
      images: [imageUrl],
    },
    robots:
      seo.noindex || process.env.VERCEL_ENV === "preview"
        ? { index: false, follow: false }
        : { index: true, follow: true },
  };
}
