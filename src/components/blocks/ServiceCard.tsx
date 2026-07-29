import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ServiceCard as ServiceCardContent } from "@/content/types";
import { resolveCtaHref } from "@/lib/cta/resolveCtaHref";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";
import { ContentImage } from "./ContentImage";

export function ServiceCard({
  content,
  locale,
  featured = false,
}: {
  content: ServiceCardContent;
  locale: Locale;
  featured?: boolean;
}) {
  const href = resolveCtaHref(locale, content.cta.href);
  const hasDescription = Boolean(content.description);

  return (
    <Link
      href={href}
      className={cn(
        "group bg-card relative flex h-full min-h-[12.5rem] flex-col overflow-hidden rounded-2xl border transition duration-300",
        "hover:border-brand-aqua/60 hover:-translate-y-1 hover:shadow-xl",
        "focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none",
        featured && "lg:min-h-[22rem]",
      )}
    >
      <span
        aria-hidden="true"
        className="bg-brand-aqua absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
      />

      {content.image ? (
        <div
          className={cn(
            "relative overflow-hidden",
            featured ? "aspect-[16/10]" : "aspect-[4/3]",
          )}
        >
          <ContentImage
            image={content.image}
            sizes={
              featured
                ? "(min-width: 1024px) 60vw, 100vw"
                : "(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
            }
            className="transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/55 via-transparent to-transparent" />
          <h3 className="absolute right-5 bottom-5 left-5 text-xl font-bold text-white drop-shadow-sm">
            {content.title}
          </h3>
        </div>
      ) : (
        <div className="flex items-start justify-between gap-4 px-6 pt-6">
          <h3 className="text-brand-blue-deep text-xl leading-snug font-bold">
            {content.title}
          </h3>
          <ArrowUpRight
            aria-hidden="true"
            className="text-primary mt-1 size-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col px-6 pt-5 pb-6">
        {content.image && (
          <div className="mb-3 flex justify-end">
            <ArrowUpRight
              aria-hidden="true"
              className="text-primary size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        )}
        {hasDescription && (
          <p className="text-muted-foreground flex-1 leading-7">
            {content.description}
          </p>
        )}
        <span className="text-primary mt-5 inline-flex items-center gap-2 text-sm font-semibold">
          {content.cta.label}
          <span
            aria-hidden="true"
            className="bg-brand-aqua h-px w-6 transition-all group-hover:w-10"
          />
        </span>
      </div>
    </Link>
  );
}
