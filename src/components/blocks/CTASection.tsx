import Link from "next/link";
import type { Cta } from "@/content/types";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/layout/Container";
import { resolveCtaHref } from "@/lib/cta/resolveCtaHref";
import type { Locale } from "@/lib/i18n/config";

export function CTASection({
  heading,
  body,
  cta,
  locale,
}: {
  heading: string;
  body?: string;
  cta: Cta;
  locale: Locale;
}) {
  return (
    <Section>
      <Container>
        <div className="bg-brand-blue-deep relative overflow-hidden rounded-2xl px-6 py-12 text-center text-white sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="bg-brand-aqua/15 absolute -top-20 -right-20 size-64 rounded-full"
          />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {heading}
            </h2>
            {body && (
              <p className="mt-4 text-lg leading-8 text-white/80">{body}</p>
            )}
            <Button
              asChild
              size="lg"
              className="bg-brand-aqua text-brand-blue-deep mt-8 hover:bg-white"
            >
              <Link href={resolveCtaHref(locale, cta.href)}>{cta.label}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
