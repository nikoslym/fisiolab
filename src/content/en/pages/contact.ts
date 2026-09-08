import type { ContactContent } from "@/content/types";

/**
 * The approved sitemap supplies the English page title. Contact details and
 * opening hours are rendered from the existing English site settings.
 */
export const contactContent: ContactContent = {
  hero: {
    heading: "Contact / Appointment",
    image: {
      src: "/images/contact/storefront.webp",
      alt: "FisioLab Physiotherapy Center in Rethymno",
      width: 1800,
      height: 1793,
      focalPoint: { x: 0.5, y: 0.45 },
    },
  },
  seo: {
    title: "Contact / Appointment – FisioLab",
    description: "",
  },
};
