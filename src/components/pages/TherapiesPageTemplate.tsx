import type { TherapiesPageContent } from "@/content/types";
import type { Locale } from "@/lib/i18n/config";
import { Container, Section } from "@/components/layout/Container";
import { Hero } from "@/components/blocks/Hero";
import { ImageGallery } from "@/components/blocks/ImageGallery";
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
      {content.gallery && content.gallery.length > 0 && (
        <ImageGallery
          images={content.gallery}
          className="pt-2 pb-8 sm:pt-3 sm:pb-10 lg:pb-12"
        />
      )}
      <Section className="bg-dot-grid pt-8 sm:pt-10 lg:pt-12">
        <Container>
          <ServiceGrid items={content.therapies} locale={locale} />
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
            <ServiceGrid items={content.rehabPrograms} locale={locale} />
          </Container>
        </Section>
      )}
    </>
  );
}
