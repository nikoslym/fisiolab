import { notFound } from "next/navigation";
import { getTherapiesPageContent } from "@/content";
import { TherapiesPageTemplate } from "@/components/pages/TherapiesPageTemplate";

import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";

export function generateMetadata(): Metadata {
  const content = getTherapiesPageContent("en");
  if (!content) return {};
  return buildPageMetadata({
    seo: content.seo,
    locale: "en",
    pageKey: "therapeies",
  });
}

export default function TherapiesPage() {
  const content = getTherapiesPageContent("en");
  if (!content) notFound();
  return <TherapiesPageTemplate content={content} locale="en" />;
}
