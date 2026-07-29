import { notFound } from "next/navigation";
import { getTherapiesPageContent } from "@/content";
import { TherapiesPageTemplate } from "@/components/pages/TherapiesPageTemplate";

export default function TherapiesPage() {
  const content = getTherapiesPageContent("el");
  if (!content) notFound();
  return <TherapiesPageTemplate content={content} locale="el" />;
}
