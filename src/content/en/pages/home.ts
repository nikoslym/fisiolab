import type { HomeContent } from "@/content/types";
import { trustBar, reviewSummary } from "@/content/en/settings";
import { serviceCards } from "@/content/en/cards";

/**
 * English homepage.
 * Backup text restored for shared sections; Brief 1 §10 hero/SEO fixes kept.
 * Greek keyword-stuffing block from the EN dump is intentionally omitted.
 */
export const homeContent: HomeContent = {
  hero: {
    // Brief 1 §10 English hero
    heading: "Specialized Physiotherapy & Clinical Rehabilitation in Rethymno",
    subheading:
      "Evidence-informed treatment, advanced technology and personalized rehabilitation in a private, modern and patient-focused environment.",
    image: {
      src: "/images/home/physio-session-hero.webp",
      alt: "Physiotherapy treatment session at FisioLab",
      width: 2000,
      height: 1201,
      coverScale: 1.05,
      focalPoint: { x: 0.55, y: 0.35 },
    },
    cta: {
      label: "Book an Assessment",
      href: "/contact",
    },
  },
  // Backup hero credentials (15_en_home.txt)
  heroCredentials: [
    "Scientific Director: Spanoudakis N. Nikos",
    "Graduate of the University of L’Aquila, Italy",
    "Member of the Panhellenic Association of Physiotherapists",
  ],
  // Existing EN intro from backup (verbatim)
  intro: [
    {
      type: "heading",
      level: 2,
      text: "Live without the limitation of pain",
    },
    {
      type: "paragraph",
      text: "FisioLab is a modern physiotherapy center that offers you high-level services with the help of the most advanced machines and the most up-to-date and effective techniques.",
    },
    {
      type: "paragraph",
      text: "Scientific training and long-term experience enable us to choose the best treatment regimen that will provide immediate but mainly long-term relief from the problem that prevents you from performing your tasks.",
    },
    {
      type: "paragraph",
      text: "Our goal is to restore the condition that is bothering you, to strengthen your body, and to re-create a good, functional everyday life.",
    },
  ],
  introCta: {
    label: "View our services",
    href: "/therapeies",
  },
  trustBar,
  servicesHeading: "Our services",
  services: serviceCards,
  // Backup first-appointment block (15_en_home.txt)
  firstAppointment: {
    eyebrow: "FIRST APPOINTMENT",
    title: "Required certificates",
    intro: "The goal of the first appointment is to evaluate the incident.",
    bullets: [
      "We will ask you for a complete history and go back in time to the period when the problem was created or triggered.",
      "We will perform a thorough clinical examination and ask you questions about how you move in your daily life and whether you strain your body through sports or your work.",
    ],
    certificatesIntro: "The necessary certificates we will need are:",
    certificates: [
      {
        title: "Medical report",
        detail: "(if any)",
      },
      {
        title: "Accompanying tests",
        detail:
          "Magnetic Tomography (MRI) - Computed Tomography (CT) - X-ray - M.O.P.",
      },
    ],
    image: {
      src: "/images/home/first-appointment.webp",
      alt: "Clinical assessment and required certificates",
      width: 1067,
      height: 1600,
      focalPoint: { x: 0.5, y: 0.4 },
    },
  },
  reviewsHeading: "Patients who trusted us",
  reviews: reviewSummary,
  // Backup «Why should you trust us» — Call us removed (Brief 1 §1)
  whyTrustUs: {
    title: "Why should you trust us",
    items: [
      {
        label: "Advanced",
        text: "State-of-the-art machinery",
      },
      {
        label: "Expertise",
        text: "Long-term experience in the recovery of serious incidents",
      },
      {
        label: "Personalized",
        text: "Personalized treatment programs",
      },
      {
        label: "Discreet",
        text: "Comfortable spaces with respect for the privacy of each incident",
      },
      {
        label: "Convenient",
        text: "Continuous hours with flexibility in appointments",
      },
    ],
  },
  seo: {
    title: "FisioLab - Specialized Physiotherapy Center in Rethymno",
    // Brief 1 §10 English SEO text
    description:
      "FisioLab is a specialized physiotherapy and rehabilitation center in Rethymno, offering personalized treatment plans for musculoskeletal pain, sports injuries, post-operative rehabilitation and chronic conditions.",
  },
};
