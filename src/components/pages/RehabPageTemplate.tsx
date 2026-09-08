import Link from "next/link";
import type { RehabProgram } from "@/content/types";
import type { Locale } from "@/lib/i18n/config";
import { resolveCtaHref } from "@/lib/cta/resolveCtaHref";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/layout/Container";
import { ContentImage } from "@/components/blocks/ContentImage";
import { FAQ } from "@/components/blocks/FAQ";
import { Hero } from "@/components/blocks/Hero";
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
  const hero = content.hero
    ? { ...content.hero, image: primaryImage }
    : { heading: content.title, image: primaryImage };
  const remainingImages = content.images?.filter(
    (image) => image.src !== primaryImage?.src,
  );

  return (
    <>
      <Hero content={hero} locale={locale} />
      <Section className="bg-dot-grid">
        <Container>
          <div className="bg-card mx-auto max-w-4xl rounded-3xl border p-6 shadow-sm sm:p-10 lg:p-12">
            <RichTextRenderer content={content.body} />
          </div>
          {remainingImages && remainingImages.length > 0 && (
            <div
              className={
                remainingImages.length === 1
                  ? "mx-auto mt-12 max-w-4xl"
                  : "mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2"
              }
            >
              {remainingImages.map((image) => (
                <div
                  key={image.src}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md"
                >
                  <ContentImage
                    image={image}
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                </div>
              ))}
            </div>
          )}
        </Container>
      </Section>

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
