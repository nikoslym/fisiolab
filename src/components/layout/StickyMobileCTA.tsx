import Link from "next/link";
import type { Cta } from "@/content/types";
import { Button } from "@/components/ui/button";
import { resolveCtaHref } from "@/lib/cta/resolveCtaHref";
import type { Locale } from "@/lib/i18n/config";

export function StickyMobileCTA({ locale, cta }: { locale: Locale; cta: Cta }) {
  return (
    <div className="bg-background/95 fixed inset-x-0 bottom-0 z-40 border-t p-3 backdrop-blur lg:hidden">
      <Button asChild size="lg" className="w-full">
        <Link href={resolveCtaHref(locale, cta.href)}>{cta.label}</Link>
      </Button>
    </div>
  );
}
