import { notFound } from "next/navigation";
import { getPrivacyContent } from "@/content";
import { PrivacyPageTemplate } from "@/components/pages/PrivacyPageTemplate";

export default function PrivacyPage() {
  const content = getPrivacyContent("el");
  if (!content) notFound();
  return <PrivacyPageTemplate content={content} locale="el" />;
}
