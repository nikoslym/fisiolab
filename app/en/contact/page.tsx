import { notFound } from "next/navigation";
import { getContactContent, getSiteSettings } from "@/content";
import { ContactPageTemplate } from "@/components/pages/ContactPageTemplate";

import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";

export function generateMetadata(): Metadata {
  const content = getContactContent("en");
  if (!content) return {};
  return buildPageMetadata({
    seo: content.seo,
    locale: "en",
    pageKey: "epikoinonia",
  });
}

export default function ContactPage() {
  const content = getContactContent("en");
  const settings = getSiteSettings("en");
  if (!content || !settings) notFound();

  return (
    <ContactPageTemplate content={content} settings={settings} locale="en" />
  );
}
