"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { Button } from "@/components/ui/button";
import type { Locale } from "@/lib/i18n/config";
import { localizedHref } from "@/lib/i18n/config";

const CONSENT_KEY = "fisiolab-analytics-consent";
const MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

type Consent = "granted" | "denied";

function isMeasurementId(value: string): boolean {
  return /^G-[A-Za-z0-9]+$/.test(value);
}

function readConsent(): Consent | null {
  try {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    return stored === "granted" || stored === "denied" ? stored : null;
  } catch {
    return null;
  }
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const copy = {
  el: {
    text: "Χρησιμοποιούμε το Google Analytics για να καταλάβουμε πώς χρησιμοποιείται ο ιστότοπος. Τα αναλυτικά cookies μένουν κλειστά μέχρι να συμφωνήσετε.",
    accept: "Αποδοχή",
    decline: "Απόρριψη",
    privacy: "Πολιτική απορρήτου",
  },
  en: {
    text: "We use Google Analytics to understand how the site is used. Analytics cookies stay off until you agree.",
    accept: "Accept",
    decline: "Decline",
    privacy: "Privacy policy",
  },
} as const;

/**
 * Loads GA4 only when NEXT_PUBLIC_GA_MEASUREMENT_ID is set.
 * Consent Mode defaults to denied, so adding the ID after launch does not
 * track visitors until they accept.
 */
export function GoogleAnalytics({ locale }: { locale: Locale }) {
  const [choice, setChoice] = useState<Consent | null | undefined>(undefined);
  const enabled = isMeasurementId(MEASUREMENT_ID);
  const text = copy[locale];

  useEffect(() => {
    if (!enabled) return;
    setChoice(readConsent());
  }, [enabled]);

  useEffect(() => {
    if (!enabled || choice !== "granted" || typeof window.gtag !== "function") {
      return;
    }
    window.gtag("consent", "update", { analytics_storage: "granted" });
  }, [choice, enabled]);

  if (!enabled) return null;

  function save(next: Consent) {
    try {
      window.localStorage.setItem(CONSENT_KEY, next);
    } catch {
      // Private mode can block storage. The choice still applies this visit.
    }
    setChoice(next);
    if (next === "denied" && typeof window.gtag === "function") {
      window.gtag("consent", "update", { analytics_storage: "denied" });
    }
  }

  return (
    <>
      <Script id="ga-consent" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          var stored = null;
          try { stored = localStorage.getItem(${JSON.stringify(CONSENT_KEY)}); } catch (e) {}
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: stored === 'granted' ? 'granted' : 'denied',
            wait_for_update: 500
          });
          gtag('js', new Date());
          gtag('config', ${JSON.stringify(MEASUREMENT_ID)}, { anonymize_ip: true });
        `}
      </Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      {choice === null && (
        <div className="border-border bg-background fixed inset-x-3 bottom-24 z-50 rounded-2xl border p-4 shadow-lg sm:inset-x-auto sm:right-4 sm:bottom-4 sm:max-w-md">
          <p className="text-sm leading-6">{text.text}</p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <Button type="button" size="sm" onClick={() => save("granted")}>
              {text.accept}
            </Button>
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={() => save("denied")}
            >
              {text.decline}
            </Button>
            <a
              href={localizedHref("/privacy-policy", locale)}
              className="text-muted-foreground ms-auto text-sm underline-offset-2 hover:underline"
            >
              {text.privacy}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
