import { notFound } from "next/navigation";
import { getRehabProgram } from "@/content";
import { RehabPageTemplate } from "@/components/pages/RehabPageTemplate";

import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";

export function generateMetadata(): Metadata {
  const content = getRehabProgram("clinical-pilates", "en");
  if (!content) return {};
  return buildPageMetadata({
    seo: content.seo,
    locale: "en",
    pageKey: "clinical-pilates",
  });
}

export default function RehabPage() {
  const content = getRehabProgram("clinical-pilates", "en");
  if (!content) notFound();
  return <RehabPageTemplate content={content} locale="en" />;
}
