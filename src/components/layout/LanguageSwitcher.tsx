"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import { pageRegistry } from "@/content/registry";
import type { Locale } from "@/lib/i18n/config";
import { uiCopy } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

function normalizePath(pathname: string): string {
  return pathname.replace(/^\/en(?=\/|$)/, "").replace(/^\/|\/$/g, "");
}

function getAlternateHref(pathname: string, locale: Locale): string {
  const currentSlug = normalizePath(pathname);
  const currentField = locale === "el" ? "elSlug" : "enSlug";
  const targetField = locale === "el" ? "enSlug" : "elSlug";

  const entry = Object.values(pageRegistry).find(
    (item) => item[currentField] === currentSlug,
  );
  const targetSlug = entry?.[targetField];

  if (locale === "el") {
    return targetSlug === null || targetSlug === undefined
      ? "/en"
      : targetSlug
        ? `/en/${targetSlug}`
        : "/en";
  }

  return targetSlug ? `/${targetSlug}` : "/";
}

export function LanguageSwitcher({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={getAlternateHref(pathname, locale)}
      className={cn(
        "text-brand-blue-deep hover:text-primary focus-visible:ring-ring inline-flex items-center gap-2 rounded-md px-2 py-2 text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:outline-none",
        className,
      )}
      aria-label={uiCopy[locale].switchLanguage}
    >
      <Languages aria-hidden="true" className="size-4" />
      <span>{locale === "el" ? "EN" : "EL"}</span>
    </Link>
  );
}
