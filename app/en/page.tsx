import { notFound } from "next/navigation";
import { getHomeContent } from "@/content";
import { HomePageTemplate } from "@/components/pages/HomePageTemplate";

import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";

export function generateMetadata(): Metadata {
  const content = getHomeContent("en");
  if (!content) return {};
  return buildPageMetadata({
    seo: content.seo,
    locale: "en",
    pageKey: "home",
  });
}

export default function HomePage() {
  const content = getHomeContent("en");
  if (!content) notFound();
  return <HomePageTemplate content={content} locale="en" />;
}
