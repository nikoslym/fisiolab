import type { AboutContent } from "@/content/types";

/**
 * Existing English page preserved from the local .wpress backup. The source
 * page contains Greek body paragraphs and an English professional profile;
 * Decision 6 forbids translating or rewriting this existing page at launch.
 */
export const aboutContent: AboutContent = {
  hero: {
    heading: "Σχετικά με εμάς – FisioLab",
    image: {
      src: "/images/about/about-hero.webp",
      alt: "Σχετικά με εμάς – FisioLab",
      width: 1333,
      height: 2000,
      focalPoint: { x: 0.5, y: 0.4 },
    },
    cta: { label: "Book an Assessment", href: "/contact" },
  },
  body: [
    {
      type: "paragraph",
      text: "Στο κέντρο του Ρεθύμνου, με άνετους χώρους σεβόμενοι την ιδιωτικότητα των ασθενών, για εξατομικευμένα προγράμματα θεραπείας και αποκατάστασης μυϊκών, νευρολογικών και άλλων παθήσεων που χρήζουν φυσιοθεραπευτικής προσέγγισης.",
    },
    {
      type: "paragraph",
      text: "Ο υπερσύγχρονος εξοπλισμός, η πολυετής εμπειρία και η συνεχιζόμενη μετεκπαίδευση μας, εγγυώνται σίγουρο αποτέλεσμα.",
    },
    {
      type: "paragraph",
      text: "Το FisioLab λειτουργεί από Δευτέρα έως Πέμπτη με συνεχές ωράριο και Παρασκευή πρωί, με ευελιξία στα ραντεβού.",
    },
    {
      type: "quote",
      lines: [
        "Scientific Director: Spanoudakis N. Nikos",
        "Graduate of the University of L’Aquila, Italy",
        "Member of the Panhellenic Association of Physiotherapists",
      ],
    },
  ],
  seo: {
    title: "About us – FisioLab",
    description: "",
  },
};
