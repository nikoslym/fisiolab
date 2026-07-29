import type { InitialAssessmentContent } from "@/content/types";
import type { Locale } from "@/lib/i18n/config";
import { Container, Section } from "@/components/layout/Container";
import { FirstAssessmentList } from "@/components/blocks/FirstAssessmentList";
import { Hero } from "@/components/blocks/Hero";
import { RichTextRenderer } from "@/components/blocks/RichTextRenderer";

export function InitialAssessmentPageTemplate({
  content,
  locale,
}: {
  content: InitialAssessmentContent;
  locale: Locale;
}) {
  const listHeading =
    content.body.find((node) => node.type === "heading")?.text ??
    content.hero?.heading ??
    "";

  return (
    <>
      {content.hero && <Hero content={content.hero} locale={locale} />}
      <Section className="bg-dot-grid">
        <Container>
          {content.items && content.items.length > 0 ? (
            <FirstAssessmentList
              content={{ title: listHeading, items: content.items }}
              variant="onLight"
            />
          ) : (
            <div className="bg-card mx-auto max-w-4xl rounded-3xl border p-6 shadow-sm sm:p-10">
              <RichTextRenderer content={content.body} />
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
