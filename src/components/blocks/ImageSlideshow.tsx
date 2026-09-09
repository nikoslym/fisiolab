"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ImageMeta } from "@/content/types";
import { Container, Section } from "@/components/layout/Container";
import { ContentImage } from "./ContentImage";
import { cn } from "@/lib/utils";

export function ImageSlideshow({
  images,
  className,
  heading,
}: {
  images: ImageMeta[];
  className?: string;
  heading?: string;
}) {
  const [index, setIndex] = useState(0);
  const count = images.length;

  const goPrev = useCallback(() => {
    setIndex((current) => (current - 1 + count) % count);
  }, [count]);

  const goNext = useCallback(() => {
    setIndex((current) => (current + 1) % count);
  }, [count]);

  useEffect(() => {
    if (count < 2) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") goPrev();
      if (event.key === "ArrowRight") goNext();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [count, goPrev, goNext]);

  if (!count) return null;

  const current = images[index];

  return (
    <Section className={cn("bg-background py-8 sm:py-10 lg:py-12", className)}>
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

        <div className="relative mx-auto max-w-5xl">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-xl sm:aspect-[3/2] lg:aspect-[16/9]">
            {images.map((image, imageIndex) => (
              <div
                key={image.src}
                className={cn(
                  "absolute inset-0 transition-opacity duration-500 ease-out",
                  imageIndex === index
                    ? "opacity-100"
                    : "pointer-events-none opacity-0",
                )}
                aria-hidden={imageIndex !== index}
              >
                <ContentImage
                  image={image}
                  sizes="(min-width: 1024px) 64rem, 100vw"
                  priority={imageIndex === 0}
                />
              </div>
            ))}
          </div>

          {count > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous image"
                className="bg-background/90 text-brand-blue-deep hover:bg-brand-aqua absolute top-1/2 left-3 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full shadow-md transition sm:left-4 sm:size-12"
              >
                <ChevronLeft className="size-6" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next image"
                className="bg-background/90 text-brand-blue-deep hover:bg-brand-aqua absolute top-1/2 right-3 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full shadow-md transition sm:right-4 sm:size-12"
              >
                <ChevronRight className="size-6" />
              </button>

              <div className="mt-5 flex items-center justify-center gap-2">
                {images.map((image, dotIndex) => (
                  <button
                    key={image.src}
                    type="button"
                    aria-label={`Show image ${dotIndex + 1}`}
                    aria-current={dotIndex === index}
                    onClick={() => setIndex(dotIndex)}
                    className={cn(
                      "h-2.5 rounded-full transition-all",
                      dotIndex === index
                        ? "bg-brand-blue w-8"
                        : "bg-brand-aqua/50 hover:bg-brand-aqua w-2.5",
                    )}
                  />
                ))}
              </div>

              <p className="text-muted-foreground mt-3 text-center text-sm">
                {index + 1} / {count}
                {current.alt ? (
                  <span className="sr-only">: {current.alt}</span>
                ) : null}
              </p>
            </>
          )}
        </div>
      </Container>
    </Section>
  );
}
