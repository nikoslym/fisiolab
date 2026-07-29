import Link from "next/link";
import type { PageHero } from "@/content/types";
import { Button } from "@/components/ui/button";
import { resolveCtaHref } from "@/lib/cta/resolveCtaHref";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";
import { Container, Section } from "@/components/layout/Container";
import { ContentImage } from "./ContentImage";

export function Hero({
  content,
  locale,
  className,
  mode = "split",
  credentials,
}: {
  content: PageHero;
  locale: Locale;
  className?: string;
  mode?: "split" | "background";
  credentials?: string[];
}) {
  const hasImage = Boolean(content.image);
  const isBackground = mode === "background" && hasImage;

  return (
    <Section
      className={cn(
        "overflow-hidden",
        isBackground
          ? "relative"
          : "from-brand-aqua-soft/80 bg-linear-to-br from-0% via-white to-white",
        className,
      )}
    >
      {isBackground && content.image && (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-no-repeat"
            style={{
              backgroundImage: `url(${content.image.src})`,
              backgroundSize: "cover",
              backgroundPosition: `${(content.image.focalPoint?.x ?? 0.5) * 100}% ${
                (content.image.focalPoint?.y ?? 0.25) * 100
              }%`,
              transform: `scale(${content.image.coverScale ?? 1.05})`,
              transformOrigin: `${(content.image.focalPoint?.x ?? 0.5) * 100}% ${
                (content.image.focalPoint?.y ?? 0.25) * 100
              }%`,
            }}
          />
          <div className="absolute inset-0 bg-slate-950/45" />
        </>
      )}
      <Container
        className={cn(
          "relative z-10",
          "grid items-center gap-12",
          hasImage && !isBackground && "lg:grid-cols-[1.05fr_0.95fr]",
        )}
      >
        <div
          className={cn(
            "max-w-3xl",
            !hasImage && "mx-auto text-center",
            isBackground && "mx-auto text-center",
          )}
        >
          <h1
            className={cn(
              "text-4xl leading-tight font-bold tracking-tight sm:text-5xl lg:text-6xl",
              isBackground && "text-white",
            )}
          >
            {content.heading}
          </h1>
          {content.subheading && (
            <p
              className={cn(
                "text-muted-foreground mt-6 text-lg leading-8 sm:text-xl",
                isBackground && "text-slate-100",
              )}
            >
              {content.subheading}
            </p>
          )}
          {credentials && credentials.length > 0 && (
            <blockquote
              className={cn(
                "mt-6 space-y-1 border-l-4 pl-4 text-sm leading-6 sm:text-base",
                isBackground
                  ? "border-brand-aqua text-white/90"
                  : "border-brand-aqua text-muted-foreground",
                isBackground ? "mx-auto max-w-2xl text-left" : undefined,
              )}
            >
              {credentials.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </blockquote>
          )}
          {content.cta && (
            <div
              className={cn(
                "mt-8 flex",
                !hasImage && "justify-center",
                isBackground && "justify-center",
              )}
            >
              <Button asChild size="lg">
                <Link href={resolveCtaHref(locale, content.cta.href)}>
                  {content.cta.label}
                </Link>
              </Button>
            </div>
          )}
        </div>

        {content.image && !isBackground && (
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <ContentImage
              image={content.image}
              sizes="(min-width: 1024px) 45vw, 100vw"
              priority
            />
          </div>
        )}
      </Container>
    </Section>
  );
}
