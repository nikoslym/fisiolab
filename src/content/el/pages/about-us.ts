import type { AboutContent } from "@/content/types";

/**
 * Canonical page copy recovered from the local .wpress backup. Brief 1 §9
 * replaces the absolute-result claim, removes the keyword-stuffing block and
 * adds the approved philosophy section.
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
    cta: { label: "Κλείστε αξιολόγηση", href: "/epikoinonia" },
  },
  body: [
    {
      type: "paragraph",
      text: "Στο κέντρο του Ρεθύμνου, με άνετους χώρους σεβόμενοι την ιδιωτικότητα των ασθενών, για εξατομικευμένα προγράμματα θεραπείας και αποκατάστασης μυϊκών, νευρολογικών και άλλων παθήσεων που χρήζουν φυσιοθεραπευτικής προσέγγισης.",
    },
    {
      type: "paragraph",
      text: "Ο σύγχρονος εξοπλισμός, η πολυετής εμπειρία και η συνεχής επιστημονική εξέλιξη μάς επιτρέπουν να σχεδιάζουμε εξατομικευμένα θεραπευτικά πλάνα, προσαρμοσμένα στις ανάγκες κάθε περιστατικού.",
    },
    {
      type: "paragraph",
      text: "Το FisioLab λειτουργεί από Δευτέρα έως Πέμπτη με συνεχές ωράριο και Παρασκευή πρωί, με ευελιξία στα ραντεβού.",
    },
    {
      type: "quote",
      lines: [
        "Επιστημονικά Υπεύθυνος: Σπανουδάκης Ν. Νίκος",
        "Πτυχιούχος Πανεπιστημίου L’Aquila Ιταλίας",
        "Μέλος του Πανελλήνιου Συλλόγου Φυσικοθεραπευτών",
      ],
    },
    { type: "heading", level: 2, text: "Η φιλοσοφία μας" },
    {
      type: "paragraph",
      text: "Η προσέγγισή μας βασίζεται στην αξιολόγηση, την ακρίβεια και τη συνέπεια. Κάθε περιστατικό αντιμετωπίζεται εξατομικευμένα, με στόχο τη μείωση του πόνου, τη βελτίωση της λειτουργικότητας και την ασφαλή επιστροφή στην καθημερινότητα.",
    },
  ],
  seo: {
    title: "Σχετικά με εμάς – FisioLab",
    description: "",
  },
};
