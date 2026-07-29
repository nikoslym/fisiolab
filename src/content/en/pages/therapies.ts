import type { TherapiesPageContent } from "@/content/types";
import { serviceCards } from "@/content/en/cards";

/**
 * English Therapies index — existing machine therapies only (Decision 6).
 */
export const therapiesPageContent: TherapiesPageContent = {
  hero: {
    heading: "Therapies",
  },
  therapiesHeading: "Therapies",
  therapies: serviceCards,
  rehabPrograms: [],
  seo: {
    title: "Therapies – FisioLab",
    description: "",
  },
};
