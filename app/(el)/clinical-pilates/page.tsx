import { notFound } from "next/navigation";
import { getRehabProgram } from "@/content";
import { RehabPageTemplate } from "@/components/pages/RehabPageTemplate";

import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";

export function generateMetadata(): Metadata {
  const content = getRehabProgram("clinical-pilates", "el");
  if (!content) return {};
  return buildPageMetadata({
    seo: content.seo,
    locale: "el",
    pageKey: "clinical-pilates",
  });
}

export default function RehabPage() {
  const content = getRehabProgram("clinical-pilates", "el");
  if (!content) notFound();
  return <RehabPageTemplate content={content} locale="el" />;
}
