import { notFound } from "next/navigation";
import { getContactContent, getSiteSettings } from "@/content";
import { ContactPageTemplate } from "@/components/pages/ContactPageTemplate";

export default function ContactPage() {
  const content = getContactContent("el");
  const settings = getSiteSettings("el");
  if (!content || !settings) notFound();
  return (
    <ContactPageTemplate content={content} settings={settings} locale="el" />
  );
}
