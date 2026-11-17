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

// English root layout - served under /en.
export default function EnRootLayout({ children }: { children: ReactNode }) {
  return <LocaleLayout locale="en">{children}</LocaleLayout>;
}
