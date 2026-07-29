import { notFound } from "next/navigation";
import { getContactContent, getSiteSettings } from "@/content";
import { ContactPageTemplate } from "@/components/pages/ContactPageTemplate";

export default function ContactPage() {
  const content = getContactContent("en");
  const settings = getSiteSettings("en");
  if (!content || !settings) notFound();

  return (
    <ContactPageTemplate content={content} settings={settings} locale="en" />
  );
}
