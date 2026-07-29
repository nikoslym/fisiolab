import type { HomeContent } from "@/content/types";
import { trustBar, reviewSummary } from "@/content/el/settings";
import { serviceCards } from "@/content/el/cards";

/**
 * Greek homepage.
 * Backup text restored where sections exist; Brief 1 authorized replacements kept
 * for hero, intro, trust bar, first-assessment list, review bullets, and SEO.
 */
export const homeContent: HomeContent = {
  hero: {
    // Brief 1 §2
    heading: "Εξειδικευμένη Φυσικοθεραπεία & Κλινική Αποκατάσταση στο Ρέθυμνο",
    subheading:
      "Αξιολόγηση, προηγμένη τεχνολογία και εξατομικευμένη θεραπευτική άσκηση σε έναν χώρο που σέβεται την ιδιωτικότητα, τον χρόνο και την ποιότητα ζωής σας.",
    image: {
      src: "/images/home/physio-session-hero.png",
      alt: "Συνεδρία φυσικοθεραπείας στο FisioLab",
      width: 1024,
      height: 682,
      coverScale: 1.05,
      focalPoint: { x: 0.58, y: 0.25 },
    },
    cta: {
      label: "Κλείστε αξιολόγηση",
      href: "/epikoinonia",
    },
  },
  // Backup hero credentials (01_el_page.txt) — kept under Brief 1 hero copy
  heroCredentials: [
    "Επιστημονικά Υπεύθυνος: Σπανουδάκης Ν. Νίκος",
    "Πτυχιούχος Πανεπιστημίου L’Aquila Ιταλίας",
    "Μέλος του Πανελλήνιου Συλλόγου Φυσικοθεραπευτών",
  ],
  // Brief 1 §3
  intro: [
    {
      type: "heading",
      level: 2,
      text: "Ζήστε χωρίς τον περιορισμό του πόνου",
    },
    {
      type: "paragraph",
      text: "Στο FisioLab κάθε θεραπευτικό πλάνο ξεκινά από σωστή κλινική αξιολόγηση.",
    },
    {
      type: "paragraph",
      text: "Συνδυάζουμε φυσικοθεραπευτική εμπειρία, προηγμένο εξοπλισμό και εξατομικευμένη θεραπευτική άσκηση, με στόχο όχι μόνο την ανακούφιση από τον πόνο, αλλά τη λειτουργική επιστροφή στην καθημερινότητα.",
    },
  ],
  // Backup CTA label near intro; Brief 1 §14 preferred wording
  introCta: {
    label: "Δείτε τις θεραπείες",
    href: "/therapeies",
  },
  trustBar,
  servicesHeading: "Οι υπηρεσίες μας",
  services: serviceCards,
  // Backup «Πρώτο Ραντεβού» (01_el_page.txt)
  firstAppointment: {
    eyebrow: "ΠΡΩΤΟ ΡΑΝΤΕΒΟΥ",
    title: "Απαραίτητα πιστοποιητικά",
    intro: "Στόχος στο πρώτο ραντεβού είναι η αξιολόγηση του περιστατικού.",
    bullets: [
      "Θα σας ζητήσουμε πλήρες ιστορικό και θα ανατρέξουμε χρονικά στην περίοδο που δημιουργήθηκε ή πυροδοτήθηκε το πρόβλημα.",
      "Θα πραγματοποιήσουμε ενδελεχή κλινική εξέταση και σας κάνουμε ερωτήσεις σχετικά με το πώς κινείστε στην καθημερινότητά σας και αν καταπονείτε το σώμα σας μέσα από την άθληση, την εργασία σας.",
    ],
    certificatesIntro: "Τα απαραίτητα πιστοποιητικά που θα χρειαστούμε είναι:",
    certificates: [
      {
        title: "Ιατρική γνωμάτευση",
        detail: "(εφόσον υπάρχει)",
      },
      {
        title: "Συνοδευτικές εξετάσεις",
        detail:
          "Μαγνητική Τομογραφία (ΜRI) - Αξονική Τομογραφία (CT) - Ακτινογραφία - Μ.Ο.Π.",
      },
    ],
    image: {
      src: "/images/home/first-appointment.png",
      alt: "Κλινική αξιολόγηση και απαραίτητα πιστοποιητικά",
      width: 1024,
      height: 682,
    },
  },
  // Brief 1 §6
  firstAssessment: {
    title: "Τι περιλαμβάνει η πρώτη αξιολόγηση",
    items: [
      "Λήψη αναλυτικού ιστορικού",
      "Έλεγχος εξετάσεων, εφόσον υπάρχουν",
      "Κλινική αξιολόγηση κίνησης, πόνου και λειτουργικότητας",
      "Καθορισμός θεραπευτικού στόχου",
      "Πρόταση εξατομικευμένου πλάνου αποκατάστασης",
    ],
  },
  reviewsHeading: "Θεραπευόμενοι που μας εμπιστεύτηκαν",
  reviews: reviewSummary,
  // Backup «Γιατί να μας εμπιστευτείτε» — Call us removed (Brief 1 §1)
  whyTrustUs: {
    title: "Γιατί να μας εμπιστευτείτε κι εσείς",
    items: [
      {
        label: "Advanced",
        text: "Μηχανήματα τελευταίας τεχνολογίας",
      },
      {
        label: "Expertise",
        text: "Μακρόχρονη εμπειρία στην αποκατάσταση βαρέων περιστατικών",
      },
      {
        label: "Personalized",
        text: "Εξατομικευμένα προγράμματα θεραπείας",
      },
      {
        label: "Discreet",
        text: "Άνετοι χώροι με σεβασμό στην ιδιωτικότητα κάθε περιστατικού",
      },
      {
        label: "Convenient",
        text: "Συνεχές ωράριο με ευελιξία στα ραντεβού",
      },
    ],
  },
  seo: {
    title: "FisioLab - Σπανουδάκης Ν. Νίκος - Κέντρο Φυσικοθεραπείας",
    // Brief 1 §8
    description:
      "Το FisioLab είναι ένα εξειδικευμένο κέντρο φυσικοθεραπείας στο Ρέθυμνο, με έμφαση στην κλινική αξιολόγηση, την αποκατάσταση μυοσκελετικών παθήσεων και τη χρήση προηγμένων τεχνολογιών όπως TECAR, κρουστικά κύματα, laser υψηλής ισχύος και θεραπευτική άσκηση.",
  },
};
