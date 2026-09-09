import type { TherapiesPageContent } from "@/content/types";
import { serviceCards } from "@/content/en/cards";

/**
 * English Therapies index — existing machine therapies only (Decision 6).
 */
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
  therapies: serviceCards,
  rehabPrograms: [],
  seo: {
    title: "Therapies – FisioLab",
    description: "",
  },
};
