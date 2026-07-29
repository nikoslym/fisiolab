import { notFound } from "next/navigation";
import { getInitialAssessmentContent } from "@/content";
import { InitialAssessmentPageTemplate } from "@/components/pages/InitialAssessmentPageTemplate";

export default function InitialAssessmentPage() {
  const content = getInitialAssessmentContent("el");
  if (!content) notFound();
  return <InitialAssessmentPageTemplate content={content} locale="el" />;
}
