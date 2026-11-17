import { notFound } from "next/navigation";
import { getAboutContent } from "@/content";
import { AboutPageTemplate } from "@/components/pages/AboutPageTemplate";

import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";

export function generateMetadata(): Metadata {
  const content = getAboutContent("el");
  if (!content) return {};
  return buildPageMetadata({
    seo: content.seo,
    locale: "el",
    pageKey: "about-us",
  });
}

export default function AboutPage() {
  const content = getAboutContent("el");
  if (!content) notFound();
  return <AboutPageTemplate content={content} locale="el" />;
}
