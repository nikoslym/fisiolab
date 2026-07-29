import type { ServiceCard as ServiceCardContent } from "@/content/types";
import type { Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";
import { ServiceCard } from "./ServiceCard";

export function ServiceGrid({
  items,
  locale,
  className,
  layout = "grid",
}: {
  items: ServiceCardContent[];
  locale: Locale;
  className?: string;
  layout?: "grid" | "bento";
}) {
  if (layout === "bento" && items.length > 1) {
    const [featured, ...rest] = items;
    return (
      <div className={cn("grid gap-6 lg:grid-cols-3", className)}>
        <div className="lg:col-span-2">
          <ServiceCard content={featured} locale={locale} featured />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
          {rest.slice(0, 2).map((item) => (
            <ServiceCard
              key={`${item.title}-${item.cta.href}`}
              content={item}
              locale={locale}
            />
          ))}
        </div>
        {rest.length > 2 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
            {rest.slice(2).map((item) => (
              <ServiceCard
                key={`${item.title}-${item.cta.href}`}
                content={item}
                locale={locale}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {items.map((item) => (
        <ServiceCard
          key={`${item.title}-${item.cta.href}`}
          content={item}
          locale={locale}
        />
      ))}
    </div>
  );
}
