"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Dialog as DialogPrimitive } from "radix-ui";
import { X } from "lucide-react";
import type { ImageMeta } from "@/content/types";
import { Container, Section } from "@/components/layout/Container";
import { ContentImage } from "./ContentImage";
import { cn } from "@/lib/utils";

export function ImageGallery({
  images,
  className,
  heading,
  lightbox = false,
  singleMaxClassName = "max-w-4xl",
}: {
  images: ImageMeta[];
  className?: string;
  heading?: string;
  /** When true, clicking a thumbnail opens a full-size lightbox. */
  lightbox?: boolean;
  /** Max-width utility for a single-image gallery (default max-w-4xl). */
  singleMaxClassName?: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const count = images.length;
  const open = activeIndex !== null;
  const activeImage = activeIndex !== null ? images[activeIndex] : null;

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (activeIndex === null || count < 2) return;
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null ? current : (current - 1 + count) % count,
        );
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? current : (current + 1) % count,
        );
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, activeIndex, count]);

  if (!count) return null;

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
        <div
          className={cn(
            "grid gap-3 sm:gap-4",
            count === 1 && cn("mx-auto", singleMaxClassName),
            count === 2 && "sm:grid-cols-2",
            count === 3 && "sm:grid-cols-3",
            count >= 4 && "sm:grid-cols-2 lg:grid-cols-4",
          )}
        >
          {images.map((image, index) => {
            const frame = (
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
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
            );

            if (!lightbox) {
              return <div key={image.src}>{frame}</div>;
            }

            return (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="group focus-visible:ring-brand-aqua relative block w-full overflow-hidden rounded-2xl text-left focus-visible:ring-2 focus-visible:outline-none"
                aria-label={`Enlarge image: ${image.alt || `photo ${index + 1}`}`}
              >
                {frame}
                <span className="pointer-events-none absolute inset-0 rounded-2xl bg-slate-950/0 transition group-hover:bg-slate-950/15" />
              </button>
            );
          })}
        </div>
      </Container>

      {lightbox && (
        <DialogPrimitive.Root
          open={open}
          onOpenChange={(nextOpen) => {
            if (!nextOpen) setActiveIndex(null);
          }}
        >
          <DialogPrimitive.Portal>
            <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-slate-950/85 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
            <DialogPrimitive.Content
              className="fixed inset-0 z-50 flex items-center justify-center p-4 outline-none sm:p-8"
              aria-describedby={undefined}
            >
              <DialogPrimitive.Title className="sr-only">
                {activeImage?.alt || "Enlarged gallery image"}
              </DialogPrimitive.Title>

              <DialogPrimitive.Close
                className="bg-background/95 text-brand-blue-deep hover:bg-brand-aqua absolute top-4 right-4 z-20 flex size-11 items-center justify-center rounded-full shadow-md transition sm:top-6 sm:right-6"
                aria-label="Close"
              >
                <X className="size-5" />
              </DialogPrimitive.Close>

              {activeImage && (
                <div className="relative flex h-[min(88vh,900px)] w-full max-w-6xl items-center justify-center">
                  <Image
                    src={activeImage.src}
                    alt={activeImage.alt}
                    width={activeImage.width ?? 2000}
                    height={activeImage.height ?? 1333}
                    className="max-h-[min(88vh,900px)] w-auto max-w-full rounded-lg object-contain shadow-2xl"
                    sizes="(min-width: 1280px) 72rem, 100vw"
                    priority
                  />
                </div>
              )}
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        </DialogPrimitive.Root>
      )}
    </Section>
  );
}
