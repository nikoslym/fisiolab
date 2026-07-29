import type { InitialAssessmentContent } from "@/content/types";

/**
 * Πρώτη Αξιολόγηση — new page.
 * Body from Brief 1 §6 (same authorized first-assessment copy as homepage).
 */
export const initialAssessmentContent: InitialAssessmentContent = {
  hero: {
    heading: "Πρώτη Αξιολόγηση",
    cta: {
      label: "Κλείστε αξιολόγηση",
      href: "/epikoinonia",
    },
  },
  body: [
    {
      type: "heading",
      level: 2,
      text: "Τι περιλαμβάνει η πρώτη αξιολόγηση",
    },
    {
      type: "list",
      ordered: false,
      items: [
        "Λήψη αναλυτικού ιστορικού",
        "Έλεγχος εξετάσεων, εφόσον υπάρχουν",
        "Κλινική αξιολόγηση κίνησης, πόνου και λειτουργικότητας",
        "Καθορισμός θεραπευτικού στόχου",
        "Πρόταση εξατομικευμένου πλάνου αποκατάστασης",
      ],
    },
  ],
  items: [
    "Λήψη αναλυτικού ιστορικού",
    "Έλεγχος εξετάσεων, εφόσον υπάρχουν",
    "Κλινική αξιολόγηση κίνησης, πόνου και λειτουργικότητας",
    "Καθορισμός θεραπευτικού στόχου",
    "Πρόταση εξατομικευμένου πλάνου αποκατάστασης",
  ],
  seo: {
    // Title from sitemap spreadsheet; no approved meta description in briefs.
    title: "Πρώτη Αξιολόγηση | FisioLab",
    description: "",
  },
};
