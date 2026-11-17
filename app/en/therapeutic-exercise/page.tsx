import { notFound } from "next/navigation";
import { getRehabProgram } from "@/content";
import { RehabPageTemplate } from "@/components/pages/RehabPageTemplate";

import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";

export function generateMetadata(): Metadata {
  const content = getRehabProgram("therapeftiki-askisi", "en");
  if (!content) return {};
  return buildPageMetadata({
    seo: content.seo,
    locale: "en",
    pageKey: "therapeftiki-askisi",
  });
}

export default function RehabPage() {
  const content = getRehabProgram("therapeftiki-askisi", "en");
  if (!content) notFound();
  return <RehabPageTemplate content={content} locale="en" />;
}
