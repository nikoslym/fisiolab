import type { TherapiesPageContent, ServiceCard } from "@/content/types";
import { serviceCards } from "@/content/el/cards";

const therapyHrefs = new Set([
  "/tecar-therapy",
  "/shockwave",
  "/high-power-laser",
  "/kinesio-taping",
  "/lymphatic-drainage",
  "/trigger-points",
  "/ultrasound",
  "/electrotherapy",
  "/diathermy",
  "/vacuum-therapy",
]);

const therapies: ServiceCard[] = serviceCards.filter((c) =>
  therapyHrefs.has(c.cta.href),
);

const rehabPrograms: ServiceCard[] = serviceCards.filter(
  (c) => !therapyHrefs.has(c.cta.href),
);

/**
 * Custom Θεραπείες page (replaces /category/therapeies/).
 * Lists all machine therapies + rehab programs (Decision 8).
 * Titles from backup / Brief 3; no invented descriptions.
 */
export const therapiesPageContent: TherapiesPageContent = {
  hero: {
    heading: "Θεραπείες",
  },
  gallery: [
    {
      src: "/images/therapies/archive-gallery-01.webp",
      alt: "Συνεδρία φυσικοθεραπείας στο FisioLab",
      width: 2000,
      height: 1201,
    },
  ],
  therapiesHeading: "Θεραπείες",
  therapies,
  rehabProgramsHeading: "Ολοκληρωμένη Κλινική Αποκατάσταση",
  rehabPrograms,
  seo: {
    // Title from backup category page; meta was empty in source.
    title: "Θεραπείες – FisioLab",
    description: "",
  },
};
