import type { Metadata } from "next";
import type { ReactNode } from "react";
import { LocaleLayout } from "@/components/layout/LocaleLayout";
import { getSiteUrl } from "@/lib/seo/site";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "FisioLab",
    template: "%s",
  },
  applicationName: "FisioLab",
};

// Greek (default) root layout - served at the site root.
export default function ElRootLayout({ children }: { children: ReactNode }) {
  return <LocaleLayout locale="el">{children}</LocaleLayout>;
}
