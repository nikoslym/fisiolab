import { notFound } from "next/navigation";
import { getTherapy } from "@/content";
import { TherapyPageTemplate } from "@/components/pages/TherapyPageTemplate";

import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";

export function generateMetadata(): Metadata {
  const content = getTherapy("shockwave", "el");
  if (!content) return {};
  return buildPageMetadata({
    seo: content.seo,
    locale: "el",
    pageKey: "shockwave",
  });
}

export default function TherapyPage() {
  const content = getTherapy("shockwave", "el");
  if (!content) notFound();
  return <TherapyPageTemplate content={content} locale="el" />;
}
