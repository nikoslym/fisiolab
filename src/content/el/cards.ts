import type { ServiceCard } from "@/content/types";

/**
 * Homepage service cards.
 * Machine-therapy titles: verbatim from backup home (01_el_page.txt).
 * Rehab cards: Brief 2/3 additions with Brief 3 card copy (Decision 1 for Clinical Pilates card).
 * Existing machine therapies had no card body in source → empty description.
 */
export const serviceCards: ServiceCard[] = [
  {
    title: "Θεραπεία TECAR",
    description: "",
    cta: { label: "Μάθετε περισσότερα", href: "/tecar-therapy" },
  },
  {
    title: "Κρουστικά Κύματα",
    description: "",
    cta: { label: "Μάθετε περισσότερα", href: "/shockwave" },
  },
  {
    title: "Laser Yψηλής Ισχύος",
    description: "",
    cta: { label: "Μάθετε περισσότερα", href: "/high-power-laser" },
  },
  {
    title: "Clinical Pilates",
    description:
      "Κλινική θεραπευτική άσκηση από φυσικοθεραπευτές, με βάση την αξιολόγηση, για καλύτερη στάση, έλεγχο, κινητικότητα και λειτουργική δύναμη.",
    cta: { label: "Μάθετε περισσότερα", href: "/clinical-pilates" },
  },
  {
    title: "Θεραπευτική Άσκηση",
    description:
      "Εξατομικευμένα προγράμματα άσκησης για μείωση πόνου, ενδυνάμωση και ασφαλή επιστροφή στις καθημερινές δραστηριότητες.",
    cta: { label: "Μάθετε περισσότερα", href: "/therapeftiki-askisi" },
  },
  {
    title: "Μετεγχειρητική Αποκατάσταση",
    description:
      "Στοχευμένα πλάνα μετά από ορθοπεδικές επεμβάσεις, με σεβασμό στη φάση επούλωσης και στις οδηγίες του θεράποντα ιατρού.",
    cta: {
      label: "Μάθετε περισσότερα",
      href: "/metegcheiritiki-apokatastasi",
    },
  },
  {
    title: "Αθλητική Αποκατάσταση",
    description:
      "Αποκατάσταση αθλητικών τραυματισμών με συνδυασμό θεραπείας, άσκησης και σταδιακής επανένταξης στην προπόνηση ή το άθλημα.",
    cta: { label: "Μάθετε περισσότερα", href: "/athlitiki-apokatastasi" },
  },
  {
    title: "Αποκατάσταση Σπονδυλικής Στήλης",
    description:
      "Εξειδικευμένη προσέγγιση για αυχενικό πόνο, οσφυαλγία, ισχιαλγία και λειτουργικές δυσκολίες της σπονδυλικής στήλης.",
    cta: {
      label: "Μάθετε περισσότερα",
      href: "/apokatastasi-spondylikis-stilis",
    },
  },
  {
    title: "Αποκατάσταση Γόνατος / Ώμου / Ισχίου",
    description:
      "Εξατομικευμένη αποκατάσταση για παθήσεις και τραυματισμούς αρθρώσεων, με στόχο λιγότερο πόνο και καλύτερη λειτουργικότητα.",
    cta: {
      label: "Μάθετε περισσότερα",
      href: "/apokatastasi-gonatos-omou-ischiou",
    },
  },
  {
    title: "Θεραπεία Vacuum",
    description: "",
    cta: { label: "Μάθετε περισσότερα", href: "/vacuum-therapy" },
  },
  {
    title: "Kinesio Tape",
    description: "",
    cta: { label: "Μάθετε περισσότερα", href: "/kinesio-taping" },
  },
  {
    title: "Λεμφική Παροχέτευση / Λεμφικό Μασάζ",
    description: "",
    cta: { label: "Μάθετε περισσότερα", href: "/lymphatic-drainage" },
  },
  {
    title: "Θεραπεία Trigger Points",
    description: "",
    cta: { label: "Μάθετε περισσότερα", href: "/trigger-points" },
  },
  {
    title: "Θεραπευτικός Υπέρηχος",
    description: "",
    cta: { label: "Μάθετε περισσότερα", href: "/ultrasound" },
  },
  {
    title: "Ηλεκτρο – Θεραπεία",
    description: "",
    cta: { label: "Μάθετε περισσότερα", href: "/electrotherapy" },
  },
  {
    title: "Διαθερμίες",
    description: "",
    cta: { label: "Μάθετε περισσότερα", href: "/diathermy" },
  },
];
