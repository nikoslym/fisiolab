import Link from "next/link";
import type { HomeContent } from "@/content/types";
import type { Locale } from "@/lib/i18n/config";
import { getSiteSettings } from "@/content";
import { resolveCtaHref } from "@/lib/cta/resolveCtaHref";
import { Button } from "@/components/ui/button";
import { Container, Section } from "@/components/layout/Container";
import { EditorialIntro } from "@/components/blocks/EditorialIntro";
import { FirstAppointmentSection } from "@/components/blocks/FirstAppointmentSection";
import { FirstAssessmentList } from "@/components/blocks/FirstAssessmentList";
import { Hero } from "@/components/blocks/Hero";
import { ReviewSummary } from "@/components/blocks/ReviewSummary";
import { ServiceGrid } from "@/components/blocks/ServiceGrid";
import { TrustBar } from "@/components/blocks/TrustBar";
import { WhyTrustUs } from "@/components/blocks/WhyTrustUs";

export function HomePageTemplate({
  content,
  locale,
}: {
  content: HomeContent;
  locale: Locale;
}) {
  const settings = getSiteSettings(locale);

  return (
    <>
      <div className="flex min-h-[calc(100svh-5.5rem)] flex-col lg:min-h-[calc(100svh-6rem)]">
        <Hero
          content={content.hero}
          locale={locale}
          mode="background"
          credentials={content.heroCredentials}
          className="flex flex-1 items-center py-6 sm:py-8 lg:py-10"
        />
        <TrustBar content={content.trustBar} />
      </div>

      <Section className="bg-dot-grid relative overflow-hidden">
        <Container>
          <EditorialIntro content={content.intro} />
          {content.introCta && (
            <div className="mt-10 flex justify-center lg:justify-start lg:pl-[calc(41.666%+4rem)]">
              <Button asChild size="lg" variant="outline">
                <Link href={resolveCtaHref(locale, content.introCta.href)}>
                  {content.introCta.label}
                </Link>
              </Button>
            </div>
          )}
        </Container>
      </Section>

      <Section className="bg-muted">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div
              aria-hidden="true"
              className="bg-brand-aqua mx-auto mb-5 h-1.5 w-14 rounded-full"
            />
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              {content.servicesHeading}
            </h2>
          </div>
          <ServiceGrid
            items={content.services}
            locale={locale}
            className="mt-12"
          />
        </Container>
      </Section>

      {content.firstAppointment && (
        <FirstAppointmentSection content={content.firstAppointment} />
      )}

      {content.firstAssessment && content.firstAssessment.items.length > 0 && (
        <Section className="relative py-20 sm:py-24 lg:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed max-md:bg-scroll"
            style={{
              backgroundImage: "url('/images/home/first-assessment-bg.png')",
            }}
          />
          <div className="absolute inset-0 bg-slate-950/55" />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-slate-950/40 to-transparent"
          />
          <Container className="relative z-10">
            <FirstAssessmentList content={content.firstAssessment} />
          </Container>
        </Section>
      )}

      <Section>
        <Container>
          <ReviewSummary
            heading={content.reviewsHeading}
            content={content.reviews}
            reviewCount={settings?.googleReviewsCount}
          />
        </Container>
      </Section>

      {content.whyTrustUs && <WhyTrustUs content={content.whyTrustUs} />}
    </>
  );
}
