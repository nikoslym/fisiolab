import type { ImageMeta } from "@/content/types";
import { Container, Section } from "@/components/layout/Container";
import { ContentImage } from "./ContentImage";
import { cn } from "@/lib/utils";

export function ImageGallery({
  images,
  className,
  heading,
}: {
  images: ImageMeta[];
  className?: string;
  heading?: string;
}) {
  if (!images.length) return null;

  const count = images.length;

  return (
    <Section className={cn("bg-background", className)}>
      <Container>
        {heading && (
          <div className="mb-8 text-center sm:mb-10">
            <div
              aria-hidden="true"
              className="bg-brand-aqua mx-auto mb-4 h-1.5 w-12 rounded-full"
            />
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {heading}
            </h2>
          </div>
        )}
        <div
          className={cn(
            "grid gap-3 sm:gap-4",
            count === 1 && "mx-auto max-w-4xl",
            count === 2 && "sm:grid-cols-2",
            count === 3 && "sm:grid-cols-3",
            count >= 4 && "sm:grid-cols-2 lg:grid-cols-4",
          )}
        >
          {images.map((image) => (
            <div
              key={image.src}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md"
            >
              <ContentImage
                image={image}
                sizes={
                  count >= 4
                    ? "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    : count === 1
                      ? "(min-width: 768px) 80vw, 100vw"
                      : "(min-width: 640px) 50vw, 100vw"
                }
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
