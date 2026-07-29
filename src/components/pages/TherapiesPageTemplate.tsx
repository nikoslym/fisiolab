import type { TherapiesPageContent } from "@/content/types";
import type { Locale } from "@/lib/i18n/config";
import { Container, Section } from "@/components/layout/Container";
import { Hero } from "@/components/blocks/Hero";
import { ServiceGrid } from "@/components/blocks/ServiceGrid";

export function TherapiesPageTemplate({
  content,
  locale,
}: {
  content: TherapiesPageContent;
  locale: Locale;
}) {
  return (
    <>
      {content.hero && <Hero content={content.hero} locale={locale} />}
      <Section className="bg-dot-grid">
        <Container>
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <div
                aria-hidden="true"
                className="bg-brand-aqua mb-4 h-1.5 w-12 rounded-full"
              />
              <h2 className="text-3xl font-bold sm:text-4xl">
                {content.therapiesHeading}
              </h2>
            </div>
          </div>
          <ServiceGrid
            items={content.therapies}
            locale={locale}
          />
        </Container>
      </Section>
      {content.rehabPrograms.length > 0 && content.rehabProgramsHeading && (
        <Section className="bg-muted">
          <Container>
            <div className="mb-10">
              <div
                aria-hidden="true"
                className="bg-brand-aqua mb-4 h-1.5 w-12 rounded-full"
              />
              <h2 className="text-3xl font-bold sm:text-4xl">
                {content.rehabProgramsHeading}
              </h2>
            </div>
            <ServiceGrid
              items={content.rehabPrograms}
              locale={locale}
            />
          </Container>
        </Section>
      )}
    </>
  );
}
