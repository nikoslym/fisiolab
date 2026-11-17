import type { TherapiesPageContent, ServiceCard } from "@/content/types";
import { serviceCards } from "@/content/en/cards";

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

const therapies: ServiceCard[] = serviceCards.filter((card) =>
  therapyHrefs.has(card.cta.href),
);

const rehabPrograms: ServiceCard[] = serviceCards.filter(
  (card) => !therapyHrefs.has(card.cta.href),
);

export const therapiesPageContent: TherapiesPageContent = {
  hero: {
    heading: "Therapies",
  },
  gallery: [
    {
      src: "/images/therapies/archive-gallery-01.webp",
      alt: "Physiotherapy session at FisioLab",
      width: 2000,
      height: 1201,
    },
  ],
  therapiesHeading: "Therapies",
  therapies,
  rehabProgramsHeading: "Clinical rehabilitation",
  rehabPrograms,
  seo: {
    title: "Therapies – FisioLab",
    description:
      "Physiotherapy treatments and clinical rehabilitation programs at FisioLab in Rethymno.",
  },
};
