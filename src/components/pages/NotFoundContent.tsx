import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/layout/Container";
import { resolveCtaHref } from "@/lib/cta/resolveCtaHref";
import type { Locale } from "@/lib/i18n/config";
import { localizedHref, uiCopy } from "@/lib/i18n/config";

export function NotFoundContent({ locale }: { locale: Locale }) {
  const copy = uiCopy[locale];

  return (
    <Section className="bg-dot-grid">
      <Container>
        <div className="bg-card mx-auto max-w-2xl rounded-3xl border px-6 py-14 text-center shadow-sm sm:px-12 sm:py-16">
          <p className="text-brand-blue text-sm font-bold tracking-[0.2em]">
            404
          </p>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
            {copy.notFoundHeading}
          </h1>
          <p className="text-foreground/75 mx-auto mt-4 max-w-md text-base leading-7">
            {copy.notFoundBody}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href={localizedHref("/", locale)}>{copy.notFoundHome}</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={resolveCtaHref(locale)}>{copy.notFoundContact}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
