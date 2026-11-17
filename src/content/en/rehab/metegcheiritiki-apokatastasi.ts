import type { RehabProgram } from "@/content/types";

export const rehabProgram: RehabProgram = {
  slug: "post-operative-rehabilitation",
  title: "Post-operative Rehabilitation",
  hero: {
    heading: "Post-operative Rehabilitation",
    image: {
      src: "/images/rehab/metegcheiritiki-apokatastasi.webp",
      alt: "Post-operative rehabilitation at FisioLab",
      width: 4800,
      height: 2817,
      focalPoint: { x: 0.5, y: 0.4 },
    },
    cta: { label: "Book an Assessment", href: "/contact" },
  },
  body: [
    {
      type: "paragraph",
      text: "Post-operative rehabilitation is decisive for the quality of the final result after orthopedic surgery. At FisioLab the rehabilitation plan is designed around the type of operation, the stage of healing, the treating doctor's instructions, and the patient's functional needs.",
    },
    {
      type: "paragraph",
      text: "The right physiotherapy after surgery helps the patient gradually regain mobility, strength, control, and confidence in movement. The aim is not to rush the process, but to move forward with safety and precision.",
    },
    {
      type: "heading",
      level: 2,
      text: "Which operations it covers",
    },
    {
      type: "list",
      ordered: false,
      items: [
        "Rehabilitation after knee or shoulder arthroscopy.",
        "Rehabilitation after an anterior cruciate ligament tear or reconstruction.",
        "Hip or knee replacement.",
        "Fractures and orthopedic surgery after an injury.",
        "Shoulder surgery, such as rotator cuff repair, when there is a relevant medical instruction.",
        "Spinal surgery, when physiotherapy is permitted.",
        "Tendon repairs or other musculoskeletal operations that need a gradual return.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "How rehabilitation is carried out",
    },
    {
      type: "paragraph",
      text: "Rehabilitation progresses in stages. Each stage has a different goal: reducing pain and swelling, protecting the tissues, regaining mobility, retraining muscle control, strengthening, and finally returning to activity.",
    },
    {
      type: "list",
      ordered: false,
      items: [
        "First stage: control of pain and swelling, and safe mobilization.",
        "Second stage: better range of motion, gentle activation, and gradual functional use.",
        "Third stage: progressive strengthening, balance, proprioception, and endurance.",
        "Final stage: return to work, daily life, or sport, using functional criteria.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "The role of technology and exercise",
    },
    {
      type: "paragraph",
      text: "Depending on the stage and the patient's tolerance, the program can include therapeutic exercise, mobilization, neuromuscular retraining, and supportive technologies such as TECAR, laser, electrotherapy, or pressotherapy. Each tool is used for a specific purpose.",
    },
    {
      type: "paragraph",
      text: "Quality shows in the precision. Progress is monitored, the plan is adapted, medical instructions are respected, and the criteria for moving from one stage to the next are clear. The patient should know where they are, what is allowed, what to avoid, and what the next step is.",
    },
    {
      type: "paragraph",
      text: "Book an assessment at FisioLab so a safe, personalized post-operative plan can be organized around your operation and your doctor's instructions.",
    },
  ],
  relatedSlugs: ["apokatastasi-gonatos-omou-ischiou", "therapeftiki-askisi"],
  cta: { label: "Book an Assessment", href: "/contact" },
  seo: {
    title: "Post-operative Rehabilitation | FisioLab",
    description:
      "Specialized post-operative physiotherapy at FisioLab after orthopedic surgery, with a personalized rehabilitation plan.",
  },
};
