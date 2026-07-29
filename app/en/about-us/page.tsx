import { notFound } from "next/navigation";
import { getAboutContent } from "@/content";
import { AboutPageTemplate } from "@/components/pages/AboutPageTemplate";

export default function AboutPage() {
  const content = getAboutContent("en");
  if (!content) notFound();
  return <AboutPageTemplate content={content} locale="en" />;
}
