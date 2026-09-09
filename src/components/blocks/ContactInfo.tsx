import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { SiteSettings } from "@/content/types";
import type { Locale } from "@/lib/i18n/config";
import { uiCopy } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

export function ContactInfo({
  locale,
  settings,
}: {
  locale: Locale;
  settings: SiteSettings;
}) {
  const blocks = [
    {
      key: "findUs",
      icon: MapPin,
      title: uiCopy[locale].findUs,
      body: (
        <p className="text-muted-foreground mt-3 leading-7">
          {settings.contact.mapsUrl ? (
            <a
              href={settings.contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary rounded-sm underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:outline-none"
            >
              {settings.contact.address}
            </a>
          ) : (
            settings.contact.address
          )}
        </p>
      ),
    },
    {
      key: "contact",
      icon: Phone,
      title: uiCopy[locale].contact,
      body: (
        <div className="mt-3 space-y-2">
          <a
            href={`tel:${settings.contact.phone.replace(/[^\d+]/g, "")}`}
            className="text-muted-foreground hover:text-primary block rounded-sm focus-visible:ring-2 focus-visible:outline-none"
          >
            {settings.contact.phone}
          </a>
          <a
            href={`mailto:${settings.contact.email}`}
            className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 rounded-sm focus-visible:ring-2 focus-visible:outline-none"
          >
            <Mail aria-hidden="true" className="size-4" />
            {settings.contact.email}
          </a>
        </div>
      ),
    },
    {
      key: "hours",
      icon: Clock,
      title: uiCopy[locale].openingHours,
      body: (
        <dl className="text-muted-foreground mt-3 space-y-2 text-sm">
          {settings.openingHours.map((item) => (
            <div key={item.days}>
              <dt className="text-foreground font-medium">{item.days}</dt>
              <dd>{item.hours}</dd>
            </div>
          ))}
        </dl>
      ),
    },
  ] as const;

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {blocks.map((block, index) => {
        const Icon = block.icon;
        const featured = index === 1;
        return (
          <div
            key={block.key}
            className={cn(
              "rounded-2xl border p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md",
              featured
                ? "bg-brand-mesh border-transparent text-white"
                : "bg-card",
            )}
          >
            <div
              className={cn(
                "inline-flex size-11 items-center justify-center rounded-xl",
                featured ? "bg-white/15" : "bg-brand-aqua-soft",
              )}
            >
              <Icon
                aria-hidden="true"
                className={cn(
                  "size-5",
                  featured ? "text-brand-aqua" : "text-primary",
                )}
              />
            </div>
            <h2
              className={cn(
                "mt-5 text-xl font-semibold",
                featured && "text-white",
              )}
            >
              {block.title}
            </h2>
            <div
              className={cn(
                featured &&
                  "[&_a]:text-white/85 [&_a:hover]:text-white [&_dd]:text-white/75 [&_dt]:text-white [&_p]:text-white/80",
              )}
            >
              {block.body}
            </div>
          </div>
        );
      })}
    </div>
  );
}
