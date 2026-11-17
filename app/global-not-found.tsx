import type { Metadata } from "next";
import { headers } from "next/headers";
import { LocaleLayout } from "@/components/layout/LocaleLayout";
import { NotFoundContent } from "@/components/pages/NotFoundContent";
import { localeFromPathname, uiCopy } from "@/lib/i18n/config";

async function requestLocale() {
  const pathname = (await headers()).get("x-pathname") ?? "";
  return localeFromPathname(pathname);
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await requestLocale();
  return {
    title: uiCopy[locale].notFoundTitle,
  };
}

export default async function GlobalNotFound() {
  const locale = await requestLocale();
  return (
    <LocaleLayout locale={locale}>
      <NotFoundContent locale={locale} />
    </LocaleLayout>
  );
}
