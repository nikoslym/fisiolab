import type { AboutContent } from "@/content/types";
import type { Locale } from "@/lib/i18n/config";
import { Container, Section } from "@/components/layout/Container";
import { Hero } from "@/components/blocks/Hero";
import { RichTextRenderer } from "@/components/blocks/RichTextRenderer";

export function AboutPageTemplate({
  content,
  locale,
}: {
  content: AboutContent;
  locale: Locale;
}) {
  return (
    <>
      {content.hero && <Hero content={content.hero} locale={locale} />}
      <Section className="bg-dot-grid">
        <Container>
          <div className="bg-card mx-auto max-w-4xl rounded-3xl border p-6 shadow-sm sm:p-10 lg:p-12">
            <RichTextRenderer content={content.body} />
          </div>
        </Container>
      </Section>
    </>
  );
}
