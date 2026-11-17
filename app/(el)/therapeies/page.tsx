import { notFound } from "next/navigation";
import { getTherapiesPageContent } from "@/content";
import { TherapiesPageTemplate } from "@/components/pages/TherapiesPageTemplate";

import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";

export function generateMetadata(): Metadata {
  const content = getTherapiesPageContent("el");
  if (!content) return {};
  return buildPageMetadata({
    seo: content.seo,
    locale: "el",
    pageKey: "therapeies",
  });
}

export default function TherapiesPage() {
  const content = getTherapiesPageContent("el");
  if (!content) notFound();
  return <TherapiesPageTemplate content={content} locale="el" />;
}
