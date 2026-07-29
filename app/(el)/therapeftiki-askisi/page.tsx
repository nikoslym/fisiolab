import { notFound } from "next/navigation";
import { getRehabProgram } from "@/content";
import { RehabPageTemplate } from "@/components/pages/RehabPageTemplate";

export default function RehabPage() {
  const content = getRehabProgram("therapeftiki-askisi", "el");
  if (!content) notFound();
  return <RehabPageTemplate content={content} locale="el" />;
}
