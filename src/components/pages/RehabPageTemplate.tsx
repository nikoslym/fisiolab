import Link from "next/link";
import type { RehabProgram } from "@/content/types";
import type { Locale } from "@/lib/i18n/config";
import { resolveCtaHref } from "@/lib/cta/resolveCtaHref";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/layout/Container";
import { FAQ } from "@/components/blocks/FAQ";
import { Hero } from "@/components/blocks/Hero";
import { ImageSlideshow } from "@/components/blocks/ImageSlideshow";
import { RichTextRenderer } from "@/components/blocks/RichTextRenderer";

export function RehabPageTemplate({
  content,
  locale,
}: {
  content: RehabProgram;
  locale: Locale;
}) {
  const primaryImage =
    content.hero?.image ?? content.image ?? content.images?.[0];
  // Internal rehab pages use the program name as the page title (H1).
  const hero = {
    heading: content.title,
    subheading: content.hero?.subheading,
    image: primaryImage,
    cta: content.hero?.cta,
  };
  const remainingImages = content.images?.filter(
    (image) => image.src !== primaryImage?.src,
  );

  return (
    <>
      <Hero content={hero} locale={locale} />
      <Section className="bg-dot-grid pt-8 sm:pt-10 lg:pt-12">
        <Container>
          <div className="bg-card mx-auto max-w-4xl rounded-3xl border p-6 shadow-sm sm:p-10 lg:p-12">
            <RichTextRenderer content={content.body} />
          </div>
        </Container>
      </Section>

      {remainingImages && remainingImages.length > 0 && (
        <ImageSlideshow
          images={remainingImages}
          className="pt-8 sm:pt-10 lg:pt-12"
        />
      )}

      {content.cta && (
        <Section className="pt-0">
          <Container>
            <div className="bg-brand-mesh overflow-hidden rounded-3xl px-6 py-12 text-center text-white sm:px-12">
              <Button
                asChild
                size="lg"
                className="bg-brand-aqua text-brand-blue-deep hover:bg-white"
              >
                <Link href={resolveCtaHref(locale, content.cta.href)}>
                  {content.cta.label}
                </Link>
              </Button>
            </div>
          </Container>
        </Section>
      )}

      {content.faq && content.faq.length > 0 && (
        <Section className="bg-muted">
          <Container>
            <FAQ items={content.faq} />
          </Container>
        </Section>
      )}
    </>
  );
}
