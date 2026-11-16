import type { Therapy } from "@/content/types";

export const therapy: Therapy = {
  slug: "diathermy",
  title: "Diathermy",
  hero: {
    heading:
      "Feel the difference in your body through the power of therapeutic heat",
    cta: {
      label: "Book an Assessment",
      href: "/contact",
    },
  },
  body: [
    {
      type: "heading",
      level: 2,
      text: "What are diathermies?",
    },
    {
      type: "paragraph",
      text: "Diathermy is a basic therapeutic method of physical therapy that uses high-intensity current to heat tissues and relieve muscle and joint conditions.",
    },
    {
      type: "paragraph",
      text: "In diathermy, heat is not emitted to the body but is generated within it. Diathermy is divided into short and sub-short waves, which are used depending on the condition we are dealing with and how deep into the tissues we need to penetrate.",
    },
    {
      type: "heading",
      level: 2,
      text: "How they help the body",
    },
    {
      type: "paragraph",
      text: "Diathermy is applied either exclusively or in combination with other physiotherapeutic procedures. It mainly aims at:",
    },
    {
      type: "list",
      ordered: false,
      items: [
        "Increased blood flow locally",
        "Increase in active metabolism",
        "Pain relief",
        "Improving tissue mobility",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "For which diseases is diathermy suitable?",
    },
    {
      type: "list",
      ordered: false,
      items: [
        "Diseases of the joints and bones: arthritis, chronic arthropathies, ankylosing spondylitis, etc.",
        "Muscle diseases: myalgia, local stiffness, muscular rheumatic diseases, back pain, sciatica, etc.",
        "Blood circulation disorders and skin diseases.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "PATIENTS WHO TRUSTED US",
    },
    {
      type: "paragraph",
      text: "Persistent pain has significant psychological and physical consequences. Don't let it steal moments from your daily life. Make an appointment now and feel the beneficial effects of diathermy.",
    },
  ],
  images: [
    {
      src: "/images/therapies/diathermy.webp",
      alt: "Diathermy at FisioLab",
    },
  ],
  seo: {
    title: "Diathermy - FisioLab",
    description:
      "Diathermy is a basic therapeutic method of physical therapy that uses high-intensity current to heat tissues and relieve muscle and joint conditions.",
  },
};
