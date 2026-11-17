import type { Metadata } from "next";
import { NotFoundContent } from "@/components/pages/NotFoundContent";
import { uiCopy } from "@/lib/i18n/config";

export const metadata: Metadata = {
  title: uiCopy.el.notFoundTitle,
};

export default function NotFound() {
  return <NotFoundContent locale="el" />;
}
