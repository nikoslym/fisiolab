import { notFound } from "next/navigation";
import { getHomeContent } from "@/content";
import { HomePageTemplate } from "@/components/pages/HomePageTemplate";

import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo/metadata";

export function generateMetadata(): Metadata {
  const content = getHomeContent("el");
  if (!content) return {};
  return buildPageMetadata({
    seo: content.seo,
    locale: "el",
    pageKey: "home",
  });
}

export default function HomePage() {
  const content = getHomeContent("el");
  if (!content) notFound();
  return <HomePageTemplate content={content} locale="el" />;
}
