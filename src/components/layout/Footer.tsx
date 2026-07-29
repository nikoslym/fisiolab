import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import type { Footer as FooterContent, SiteSettings } from "@/content/types";
import type { Locale } from "@/lib/i18n/config";
import { localizedHref, uiCopy } from "@/lib/i18n/config";
import { Container } from "./Container";

function phoneHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

export function Footer({
  locale,
  content,
  settings,
}: {
  locale: Locale;
  content: FooterContent;
  settings: SiteSettings;
}) {
  return (
    <footer className="bg-brand-blue-deep mt-auto text-white">
      <Container className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.15fr_1fr_1fr]">
        <div>
          <Image
            src="/images/brand/fisiolab-logo-light.png"
            alt={settings.siteName}
            width={520}
            height={436}
            className="h-28 w-auto"
          />
          <div className="mt-5 flex items-center gap-4">
            {settings.eopyyAffiliated && (
              <Image
                src="/images/brand/eopyy.png"
                alt={uiCopy[locale].eopyy}
                width={225}
                height={225}
                className="size-16 rounded-md bg-white object-contain p-1"
              />
            )}
            <Image
              src="/images/brand/panhellenic-physiotherapists-association.png"
              alt=""
              width={550}
              height={93}
              className="h-10 w-auto max-w-52 rounded-sm bg-white object-contain p-1"
            />
          </div>
        </div>

        <div className="space-y-7">
          <div>
            <h2 className="text-brand-aqua text-sm font-bold tracking-widest uppercase">
              {uiCopy[locale].findUs}
            </h2>
            <p className="mt-3 flex gap-3 text-sm leading-6 text-white/80">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {settings.contact.address}
            </p>
          </div>
          <div>
            <h2 className="text-brand-aqua text-sm font-bold tracking-widest uppercase">
              {uiCopy[locale].openingHours}
            </h2>
            <dl className="mt-3 space-y-1 text-sm text-white/80">
              {settings.openingHours.map((item) => (
                <div key={item.days} className="flex flex-wrap gap-x-2">
                  <dt>{item.days}:</dt>
                  <dd>{item.hours}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div>
          <h2 className="text-brand-aqua text-sm font-bold tracking-widest uppercase">
            {uiCopy[locale].contact}
          </h2>
          <div className="mt-3 space-y-3 text-sm">
            <a
              href={`mailto:${settings.contact.email}`}
              className="focus-visible:ring-brand-aqua flex items-center gap-3 rounded-sm text-white/80 transition-colors hover:text-white focus-visible:ring-2 focus-visible:outline-none"
            >
              <Mail className="size-4 shrink-0" aria-hidden="true" />
              {settings.contact.email}
            </a>
            <a
              href={phoneHref(settings.contact.phone)}
              className="focus-visible:ring-brand-aqua flex items-center gap-3 rounded-sm text-white/80 transition-colors hover:text-white focus-visible:ring-2 focus-visible:outline-none"
            >
              <Phone className="size-4 shrink-0" aria-hidden="true" />
              {settings.contact.phone}
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/15">
        <Container className="flex flex-col gap-3 py-5 text-xs text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>{content.copyright}</p>
          <div className="flex flex-wrap gap-4">
            {content.legalLinks.map((item) => (
              <Link
                key={item.href}
                href={localizedHref(item.href, locale)}
                className="rounded-sm transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
