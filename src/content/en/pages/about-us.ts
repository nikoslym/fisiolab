import type { AboutContent } from "@/content/types";

export const aboutContent: AboutContent = {
  hero: {
    heading: "About us",
    image: {
      src: "/images/about/about-hero.webp",
      alt: "About FisioLab",
      width: 1333,
      height: 2000,
      focalPoint: { x: 0.5, y: 0.4 },
    },
    cta: { label: "Book an Assessment", href: "/contact" },
  },
  body: [
    {
      type: "paragraph",
      text: "In the center of Rethymno, with comfortable spaces that respect each patient's privacy, for personalized treatment and rehabilitation programs for muscular, neurological, and other conditions that need a physiotherapy approach.",
    },
    {
      type: "paragraph",
      text: "Modern equipment, long experience, and ongoing scientific development allow us to design personalized treatment plans adapted to the needs of each case.",
    },
    {
      type: "paragraph",
      text: "FisioLab is open Monday to Thursday with continuous hours and on Friday morning, with flexibility in appointments.",
    },
    {
      type: "quote",
      lines: [
        "Scientific Director: Spanoudakis N. Nikos",
        "Graduate of the University of L’Aquila, Italy",
        "Member of the Panhellenic Association of Physiotherapists",
      ],
    },
    { type: "heading", level: 2, text: "Our philosophy" },
    {
      type: "paragraph",
      text: "Our approach is based on assessment, precision, and consistency. Each case is treated individually, with the aim of reducing pain, improving function, and supporting a safe return to daily life.",
    },
  ],
  seo: {
    title: "About us – FisioLab",
    description:
      "A physiotherapy center in the center of Rethymno, with personalized treatment and rehabilitation programs. Scientific Director: Spanoudakis N. Nikos.",
  },
};
