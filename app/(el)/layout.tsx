import type { Metadata } from "next";
import type { ReactNode } from "react";
import { LocaleLayout } from "@/components/layout/LocaleLayout";

export const metadata: Metadata = {
  title: "FisioLab",
};

// Greek (default) root layout - served at the site root.
export default function ElRootLayout({ children }: { children: ReactNode }) {
  return <LocaleLayout locale="el">{children}</LocaleLayout>;
}
