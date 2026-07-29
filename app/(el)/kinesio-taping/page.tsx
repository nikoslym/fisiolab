import { notFound } from "next/navigation";
import { getTherapy } from "@/content";
import { TherapyPageTemplate } from "@/components/pages/TherapyPageTemplate";

export default function TherapyPage() {
  const content = getTherapy("kinesio-taping", "el");
  if (!content) notFound();
  return <TherapyPageTemplate content={content} locale="el" />;
}
