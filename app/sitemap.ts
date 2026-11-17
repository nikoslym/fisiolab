import type { MetadataRoute } from "next";
import { getAllRegistryEntries } from "@/content/registry";
import type { Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/seo/metadata";
import { absoluteUrl } from "@/lib/seo/site";

function languageAlternates(elSlug: string, enSlug: string | null) {
  const languages: Record<string, string> = {
    el: absoluteUrl(localePath("el", elSlug)),
    "x-default": absoluteUrl(localePath("el", elSlug)),
  };
  if (enSlug !== null) {
    languages.en = absoluteUrl(localePath("en", enSlug));
  }
  return { languages };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];

  for (const entry of getAllRegistryEntries()) {
    const locales: Locale[] = entry.enSlug === null ? ["el"] : ["el", "en"];
    for (const locale of locales) {
      const slug = locale === "en" ? entry.enSlug! : entry.elSlug;
      urls.push({
        url: absoluteUrl(localePath(locale, slug)),
        changeFrequency: entry.key === "home" ? "weekly" : "monthly",
        priority: entry.key === "home" ? 1 : entry.kind === "page" ? 0.7 : 0.8,
        alternates: languageAlternates(entry.elSlug, entry.enSlug),
      });
    }
  }

  return urls;
}
