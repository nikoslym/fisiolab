"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import type { Navigation, SiteSettings } from "@/content/types";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import type { Locale } from "@/lib/i18n/config";
import { localizedHref, uiCopy } from "@/lib/i18n/config";
import { resolveCtaHref } from "@/lib/cta/resolveCtaHref";
import { Container } from "./Container";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar({
  locale,
  navigation,
  settings,
}: {
  locale: Locale;
  navigation: Navigation;
  settings: SiteSettings;
}) {
  return (
    <header className="bg-background/95 sticky top-0 z-40 border-b backdrop-blur">
      <Container>
        <nav
          className="flex min-h-24 items-center justify-between gap-6"
          aria-label={uiCopy[locale].menu}
        >
          <Link
            href={localizedHref("/", locale)}
            className="focus-visible:ring-ring shrink-0 rounded-md focus-visible:ring-2 focus-visible:outline-none"
            aria-label={settings.siteName}
          >
            <Image
              src="/images/brand/fisiolab-logo-dark.png"
              alt={settings.siteName}
              width={520}
              height={437}
              priority
              className="h-20 w-auto sm:h-24"
            />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navigation.items.map((item) => (
              <Link
                key={item.href}
                href={localizedHref(item.href, locale)}
                className="text-foreground/80 hover:text-primary focus-visible:ring-ring rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <LanguageSwitcher locale={locale} />
            <Button asChild size="lg">
              <Link href={resolveCtaHref(locale, settings.primaryCta.href)}>
                {settings.primaryCta.label}
              </Link>
            </Button>
          </div>

          <div className="flex items-center gap-1 lg:hidden">
            <LanguageSwitcher locale={locale} />
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon-lg"
                  aria-label={uiCopy[locale].menu}
                >
                  <Menu aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent
                className="w-[min(90vw,24rem)]"
                closeLabel={uiCopy[locale].closeMenu}
              >
                <SheetHeader className="border-b">
                  <SheetTitle>{settings.siteName}</SheetTitle>
                </SheetHeader>
                <nav
                  className="flex flex-col gap-1 px-4"
                  aria-label={uiCopy[locale].menu}
                >
                  {navigation.items.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={localizedHref(item.href, locale)}
                        className="hover:bg-secondary focus-visible:ring-ring rounded-lg px-4 py-3 font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto p-4">
                  <SheetClose asChild>
                    <Button asChild size="lg" className="w-full">
                      <Link
                        href={resolveCtaHref(locale, settings.primaryCta.href)}
                      >
                        {settings.primaryCta.label}
                      </Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </Container>
    </header>
  );
}
