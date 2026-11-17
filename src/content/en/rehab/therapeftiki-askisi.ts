import type { RehabProgram } from "@/content/types";

export const rehabProgram: RehabProgram = {
  slug: "therapeutic-exercise",
  title: "Therapeutic Exercise",
  hero: {
    heading: "Therapeutic Exercise",
    image: {
      src: "/images/rehab/therapeftiki-askisi.webp",
      alt: "Therapeutic exercise at FisioLab",
      width: 4800,
      height: 3200,
      focalPoint: { x: 0.5, y: 0.4 },
    },
    cta: { label: "Book an Assessment", href: "/contact" },
  },
  body: [
    {
      type: "paragraph",
      text: "Therapeutic exercise is a core part of modern physiotherapy and meaningful rehabilitation. At FisioLab it is not treated as ordinary gym work. It is a targeted intervention designed after an assessment, with a specific therapeutic goal and gradual progression.",
    },
    {
      type: "paragraph",
      text: "The aim is not only to reduce pain for a while. The aim is to improve how the body moves, increase the tolerance of the tissues, restore function, and lower the chance of the problem returning.",
    },
    {
      type: "heading",
      level: 2,
      text: "Why it is not ordinary exercise",
    },
    {
      type: "paragraph",
      text: "A general exercise program can be useful for a healthy person who trains. When there is pain, an injury, surgery, muscle weakness, or fear of movement, clinical reasoning is needed. Therapeutic exercise is chosen according to the diagnosis, the stage of the problem, tolerance to load, and the patient's functional goal.",
    },
    {
      type: "heading",
      level: 2,
      text: "How the program is designed",
    },
    {
      type: "list",
      ordered: false,
      items: [
        "Initial assessment of pain, mobility, strength, and function.",
        "A therapeutic goal is set: daily life, work, sport, or return after surgery.",
        "Exercises are chosen with the right dose, range of motion, and level of difficulty.",
        "Load increases gradually, based on how the body responds.",
        "The patient is taught what they are doing, why they are doing it, and how to continue safely.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "When it helps",
    },
    {
      type: "list",
      ordered: false,
      items: [
        "Low-back pain, neck pain, and spinal dysfunction.",
        "Tendinopathies, overuse, and muscle imbalances.",
        "Rehabilitation after injuries of the knee, shoulder, hip, or ankle.",
        "Post-operative rehabilitation after orthopedic surgery.",
        "Sports injuries and return to training.",
        "Chronic pain and reduced confidence in movement.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Combined with physiotherapy technology",
    },
    {
      type: "paragraph",
      text: "At FisioLab, therapeutic exercise can be combined, when indicated, with technologies such as TECAR, shockwave, high-power laser, ultrasound, or electrotherapy. The machines support the process, but lasting improvement is built through the right movement, load, and education.",
    },
    {
      type: "heading",
      level: 2,
      text: "What to expect",
    },
    {
      type: "paragraph",
      text: "The program is adjusted continuously. Sometimes it starts with gentle control and mobility exercises. At other times it starts with progressive strengthening, balance, functional movements, or specific exercises for returning to work and sport. There is no single program for everyone. There is a plan for a specific person, a specific stage, and a specific goal.",
    },
    {
      type: "paragraph",
      text: "Book an assessment at FisioLab and design a personalized therapeutic exercise program with a clear goal and safe progression.",
    },
  ],
  relatedSlugs: [
    "clinical-pilates",
    "athlitiki-apokatastasi",
    "metegcheiritiki-apokatastasi",
  ],
  cta: { label: "Book an Assessment", href: "/contact" },
  seo: {
    title: "Therapeutic Exercise | FisioLab",
    description:
      "Personalized therapeutic exercise at FisioLab for pain, mobility, strength, and function.",
  },
};
