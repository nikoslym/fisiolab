import { Star } from "lucide-react";
import type { ReviewSummary as ReviewSummaryContent } from "@/content/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ReviewSummary({
  heading,
  content,
  reviewCount,
}: {
  heading: string;
  content: ReviewSummaryContent;
  reviewCount?: number;
}) {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">{heading}</h2>
      </div>

      {typeof reviewCount === "number" && (
        <div className="bg-brand-mesh mt-10 overflow-hidden rounded-2xl px-6 py-8 text-center text-white sm:px-10">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-8">
            <p className="text-5xl font-bold tracking-tight sm:text-6xl">
              {reviewCount}+
            </p>
            <div className="text-left">
              <div className="flex items-center gap-1" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="text-brand-aqua size-5 fill-current"
                  />
                ))}
              </div>
              <p className="mt-2 text-sm tracking-wide text-white/80 uppercase">
                Google Reviews
              </p>
            </div>
          </div>
        </div>
      )}

      {content.bullets.length > 0 && (
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {content.bullets.map((item, index) => (
            <li
              key={item}
              className={cn(
                "reveal-up relative overflow-hidden rounded-2xl border bg-white p-6 shadow-sm",
                index % 2 === 1 && "sm:translate-y-4",
              )}
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <span
                aria-hidden="true"
                className="text-brand-aqua/40 absolute -top-2 left-4 font-serif text-6xl leading-none"
              >
                “
              </span>
              <p className="text-brand-blue-deep relative z-10 pt-4 text-base leading-7 font-medium">
                {item}
              </p>
            </li>
          ))}
        </ul>
      )}

      {content.externalLink?.href && (
        <div className="mt-10 text-center">
          <Button asChild size="lg">
            <a
              href={content.externalLink.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content.externalLink.label}
            </a>
          </Button>
        </div>
      )}
    </div>
  );
}
