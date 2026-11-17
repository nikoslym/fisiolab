import { notFound } from "next/navigation";
import { getPrivacyContent } from "@/content";
import { PrivacyPageTemplate } from "@/components/pages/PrivacyPageTemplate";

import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";

export function generateMetadata(): Metadata {
  const content = getPrivacyContent("en");
  if (!content) return {};
  return buildPageMetadata({
    seo: content.seo,
    locale: "en",
    pageKey: "privacy-policy",
  });
}

export default function PrivacyPage() {
  const content = getPrivacyContent("en");
  if (!content) notFound();
  return <PrivacyPageTemplate content={content} locale="en" />;
}
