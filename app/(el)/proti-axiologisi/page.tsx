import { notFound } from "next/navigation";
import { getInitialAssessmentContent } from "@/content";
import { InitialAssessmentPageTemplate } from "@/components/pages/InitialAssessmentPageTemplate";

import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";

export function generateMetadata(): Metadata {
  const content = getInitialAssessmentContent("el");
  if (!content) return {};
  return buildPageMetadata({
    seo: content.seo,
    locale: "el",
    pageKey: "proti-axiologisi",
  });
}

export default function InitialAssessmentPage() {
  const content = getInitialAssessmentContent("el");
  if (!content) notFound();
  return <InitialAssessmentPageTemplate content={content} locale="el" />;
}
