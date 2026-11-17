import type { RehabProgram } from "@/content/types";

export const rehabProgram: RehabProgram = {
  slug: "sports-rehabilitation",
  title: "Sports Rehabilitation",
  hero: {
    heading: "Sports Rehabilitation",
    image: {
      src: "/images/rehab/athlitiki-apokatastasi.webp",
      alt: "Sports rehabilitation at FisioLab",
      width: 3200,
      height: 4800,
      focalPoint: { x: 0.5, y: 0.4 },
    },
    cta: { label: "Book an Assessment", href: "/contact" },
  },
  body: [
    {
      type: "paragraph",
      text: "Sports rehabilitation does not end when the pain eases. It ends when the athlete, or the person who trains, can return to their activity with safety, control, strength, and confidence. At FisioLab, rehabilitation of sports injuries is based on assessment, treatment, progressive loading, and functional return.",
    },
    {
      type: "paragraph",
      text: "Each program is designed around the sport, how the injury happened, the stage of healing, the person's level, and what returning will demand.",
    },
    {
      type: "heading",
      level: 2,
      text: "Which injuries it covers",
    },
    {
      type: "list",
      ordered: false,
      items: [
        "Muscle strains and overuse injuries.",
        "Ankle sprains and instability.",
        "Tendinopathies, such as Achilles, patellar, or shoulder.",
        "Pain in the knee, hip, shoulder, or lower back related to sport.",
        "Rehabilitation after ligament injuries.",
        "Return to training after surgery, when there is a relevant medical instruction.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "The rehabilitation process",
    },
    {
      type: "list",
      ordered: false,
      items: [
        "Assessment: pain, mobility, strength, control, balance, and the demands of the sport.",
        "Treatment: managing symptoms and supporting healing where needed.",
        "Progressive loading: strength, endurance, proprioception, and functional movement.",
        "Return to sport: a gradual return to movements that resemble the sport or activity.",
        "Preventing recurrence: education, technique, load management, and training strategies.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "The goal is more than the pain passing",
    },
    {
      type: "paragraph",
      text: "The absence of pain does not always mean full readiness. That is why return is based on criteria: strength, control, endurance, quality of movement, and tolerance to load. The body needs to be ready for the real demands of the activity, not only for simple daily movement.",
    },
    {
      type: "heading",
      level: 2,
      text: "How FisioLab supports rehabilitation",
    },
    {
      type: "paragraph",
      text: "The program can combine treatment techniques, TECAR, shockwave, high-power laser, therapeutic exercise, and specific progressive strengthening. The choice is based on the goal and how the person responds, not on one recipe for everyone.",
    },
    {
      type: "heading",
      level: 2,
      text: "For athletes and active people",
    },
    {
      type: "paragraph",
      text: "Sports rehabilitation is for athletes and for people who simply want to return safely to an activity they care about. The approach is the same: a proper assessment, a clear plan, gradual loading, and a return that is not rushed.",
    },
    {
      type: "paragraph",
      text: "Book an assessment at FisioLab and organize a sports rehabilitation plan aimed at a safe return to training and your activity.",
    },
  ],
  relatedSlugs: ["therapeftiki-askisi", "shockwave", "high-power-laser"],
  cta: { label: "Book an Assessment", href: "/contact" },
  seo: {
    title: "Sports Rehabilitation | FisioLab",
    description:
      "Sports rehabilitation at FisioLab for injuries, tendinopathies, and a safe return to training and activity.",
  },
};
