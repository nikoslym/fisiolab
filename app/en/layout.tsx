import type { Metadata } from "next";
import type { ReactNode } from "react";
import { LocaleLayout } from "@/components/layout/LocaleLayout";

export const metadata: Metadata = {
  title: "FisioLab",
};

// English root layout - served under /en.
export default function EnRootLayout({ children }: { children: ReactNode }) {
  return <LocaleLayout locale="en">{children}</LocaleLayout>;
}
