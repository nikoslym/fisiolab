import type { ContactContent } from "@/content/types";

/**
 * Επικοινωνία / Ραντεβού — new page (PROPOSAL layout content).
 * Contact details come from siteSettings at render time.
 * No invented marketing copy beyond the page title from the sitemap spreadsheet.
 */
export const contactContent: ContactContent = {
  hero: {
    heading: "Επικοινωνία / Ραντεβού",
    cta: {
      label: "Κλείστε αξιολόγηση",
      href: "/epikoinonia",
    },
  },
  seo: {
    // Title from sitemap spreadsheet; no approved meta description yet.
    title: "Επικοινωνία / Ραντεβού | FisioLab",
    description: "",
  },
};
