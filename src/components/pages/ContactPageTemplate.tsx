import type { ContactContent, SiteSettings } from "@/content/types";
import type { Locale } from "@/lib/i18n/config";
import { Container, Section } from "@/components/layout/Container";
import { ContactInfo } from "@/components/blocks/ContactInfo";
import { Hero } from "@/components/blocks/Hero";

export function ContactPageTemplate({
  content,
  settings,
  locale,
}: {
  content: ContactContent;
  settings: SiteSettings;
  locale: Locale;
}) {
  return (
    <>
      {content.hero && <Hero content={content.hero} locale={locale} />}
      <Section className="bg-dot-grid">
        <Container>
          <ContactInfo locale={locale} settings={settings} />
        </Container>
      </Section>
    </>
  );
}
