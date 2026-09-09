import type { Therapy } from "@/content/types";
import type { Locale } from "@/lib/i18n/config";
import { Container, Section } from "@/components/layout/Container";
import { ContentImage } from "@/components/blocks/ContentImage";
import { Hero } from "@/components/blocks/Hero";
import { RichTextRenderer } from "@/components/blocks/RichTextRenderer";

export function TherapyPageTemplate({
  content,
  locale,
}: {
  content: Therapy;
  locale: Locale;
}) {
  const primaryImage = content.hero?.image ?? content.images?.[0];
  // Internal therapy pages use the therapy name as the page title (H1).
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
          {remainingImages && remainingImages.length > 0 && (
            <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
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
    </>
  );
}
