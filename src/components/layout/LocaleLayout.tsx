import type { ReactNode } from "react";
import "@/styles/globals.css";
import { getFooter, getNavigation, getSiteSettings } from "@/content";
import type { Locale } from "@/lib/i18n/config";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { JsonLd } from "@/components/seo/JsonLd";
import { uiCopy } from "@/lib/i18n/config";
import { clinicJsonLd } from "@/lib/seo/jsonld";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { StickyMobileCTA } from "./StickyMobileCTA";

/**
 * Shared root shell for both locale route trees. Each route tree's root layout
 * renders this with its locale so the correct <html lang> is emitted without a
 * dynamic segment or i18n routing library.
 *
 * TODO CONFIRM (Decision 9): typography currently uses a Greek-safe system font
 * stack (Tailwind default). Replace with the confirmed self-hosted brand font in
 * a later milestone.
 */
export function LocaleLayout({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  const settings = getSiteSettings(locale);
  const navigation = getNavigation(locale);
  const footer = getFooter(locale);

  if (!settings || !navigation || !footer) {
    throw new Error(`Missing global content for locale: ${locale}`);
  }

  return (
    <html lang={locale} className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="bg-background text-foreground focus-visible:ring-ring sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-3 focus-visible:left-3 focus-visible:z-50 focus-visible:rounded-md focus-visible:px-4 focus-visible:py-2 focus-visible:ring-2"
        >
          {uiCopy[locale].skipToContent}
        </a>
        <Navbar locale={locale} navigation={navigation} settings={settings} />
        <main id="main" className="flex-1 pb-20 lg:pb-0">
          {children}
        </main>
        <Footer locale={locale} content={footer} settings={settings} />
        <StickyMobileCTA locale={locale} cta={settings.primaryCta} />
        <JsonLd data={clinicJsonLd(locale)} />
        <GoogleAnalytics locale={locale} />
      </body>
    </html>
  );
}
