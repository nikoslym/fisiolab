import type { RehabProgram } from "@/content/types";

export const rehabProgram: RehabProgram = {
  slug: "spine-rehabilitation",
  title: "Spine Rehabilitation",
  hero: {
    heading: "Spine Rehabilitation",
    image: {
      src: "/images/rehab/apokatastasi-spondylikis-stilis.webp",
      alt: "Spine rehabilitation at FisioLab",
      width: 3200,
      height: 4800,
      focalPoint: { x: 0.5, y: 0.4 },
    },
    cta: { label: "Book an Assessment", href: "/contact" },
  },
  body: [
    {
      type: "paragraph",
      text: "Pain in the spine can affect work, sleep, movement, and daily quality of life. At FisioLab, spine rehabilitation starts with a clinical assessment and is not based on one general approach for everyone.",
    },
    {
      type: "paragraph",
      text: "The aim is to understand the patient's functional picture: how they move, what loads them, what relieves them, which limits exist, and which strategy they need in order to return safely to daily life.",
    },
    {
      type: "heading",
      level: 2,
      text: "Which conditions it covers",
    },
    {
      type: "list",
      ordered: false,
      items: [
        "Neck pain and stiffness.",
        "Low-back pain and repeated pain in the lumbar area.",
        "Sciatica or symptoms traveling into the leg, when the clinical picture supports it.",
        "Disc problems and mechanical dysfunction, alongside the medical diagnosis when one exists.",
        "Pain related to posture, desk work, or repeated loading.",
        "Reduced mobility, muscle weakness, or fear of movement after an episode of pain.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "How the assessment is done",
    },
    {
      type: "paragraph",
      text: "The assessment includes the history, mobility testing, functional tests, an evaluation of posture and movement, and a discussion of daily habits, work, and the patient's goals. When imaging exists, it is read together with the clinical picture, not on its own.",
    },
    {
      type: "heading",
      level: 2,
      text: "How rehabilitation is applied",
    },
    {
      type: "list",
      ordered: false,
      items: [
        "Symptom management: physiotherapy techniques and supportive technologies when indicated.",
        "Better mobility: exercises and techniques for safer, more comfortable movement.",
        "Retraining control: stability, breathing, trunk control, and quality of movement.",
        "Progressive strengthening: gradual loading so the body tolerates the demands of daily life better.",
        "Patient education: guidance on ergonomics, activity, loading, and preventing recurrence.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "The role of Clinical Pilates and therapeutic exercise",
    },
    {
      type: "paragraph",
      text: "In many cases, therapeutic exercise and Clinical Pilates can be an important part of rehabilitation. Exercises are chosen according to tolerance, control, and the patient's stage, so movement works as a rehabilitation tool rather than as random exercise.",
    },
    {
      type: "heading",
      level: 2,
      text: "Our approach",
    },
    {
      type: "paragraph",
      text: "We do not treat the spine as one MRI image. We treat the person who is in pain, who moves, works, gets tired, and wants to return to their life. That requires assessment, a clear plan, and consistency.",
    },
    {
      type: "paragraph",
      text: "Book an assessment at FisioLab so a personalized rehabilitation plan can be designed for neck pain, low-back pain, sciatica, or spinal dysfunction.",
    },
  ],
  relatedSlugs: [
    "tecar-therapy",
    "high-power-laser",
    "clinical-pilates",
    "therapeftiki-askisi",
  ],
  cta: { label: "Book an Assessment", href: "/contact" },
  seo: {
    title: "Spine Rehabilitation | FisioLab",
    description:
      "Physiotherapy for neck pain, low-back pain, sciatica, and spinal dysfunction at FisioLab in Rethymno.",
  },
};
