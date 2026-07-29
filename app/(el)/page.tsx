import { notFound } from "next/navigation";
import { getHomeContent } from "@/content";
import { HomePageTemplate } from "@/components/pages/HomePageTemplate";

export default function HomePage() {
  const content = getHomeContent("el");
  if (!content) notFound();
  return <HomePageTemplate content={content} locale="el" />;
}
