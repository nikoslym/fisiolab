import type { ContactContent } from "@/content/types";

/**
 * Επικοινωνία / Ραντεβού — new page (PROPOSAL layout content).
 * Contact details come from siteSettings at render time.
 * No invented marketing copy beyond the page title from the sitemap spreadsheet.
 */
export const contactContent: ContactContent = {
  hero: {
    heading: "Επικοινωνία / Ραντεβού",
    image: {
      src: "/images/contact/storefront.webp",
      alt: "FisioLab Physiotherapy Center στο Ρέθυμνο",
      width: 2000,
      height: 1992,
      focalPoint: { x: 0.5, y: 0.45 },
    },
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
