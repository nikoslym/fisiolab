import { notFound } from "next/navigation";
import { getTherapy } from "@/content";
import { TherapyPageTemplate } from "@/components/pages/TherapyPageTemplate";

import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";

export function generateMetadata(): Metadata {
  const content = getTherapy("kinesio-taping", "el");
  if (!content) return {};
  return buildPageMetadata({
    seo: content.seo,
    locale: "el",
    pageKey: "kinesio-taping",
  });
}

export default function TherapyPage() {
  const content = getTherapy("kinesio-taping", "el");
  if (!content) notFound();
  return <TherapyPageTemplate content={content} locale="el" />;
}
