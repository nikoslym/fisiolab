import type { RehabProgram } from "@/content/types";

export const rehabProgram: RehabProgram = {
  slug: "knee-shoulder-hip-rehabilitation",
  title: "Knee, Shoulder & Hip Rehabilitation",
  hero: {
    heading: "Knee, Shoulder & Hip Rehabilitation",
    image: {
      src: "/images/rehab/apokatastasi-gonatos-omou-ischiou.webp",
      alt: "Knee, shoulder, and hip rehabilitation at FisioLab",
      width: 4800,
      height: 2910,
      focalPoint: { x: 0.5, y: 0.4 },
    },
    cta: { label: "Book an Assessment", href: "/contact" },
  },
  body: [
    {
      type: "paragraph",
      text: "Joints such as the knee, shoulder, and hip play a decisive role in daily movement, work, and sport. When there is pain, injury, stiffness, or weakness, rehabilitation needs to be based on an assessment, not on general advice.",
    },
    {
      type: "paragraph",
      text: "At FisioLab we design personalized rehabilitation plans aimed at reducing pain, improving mobility, restoring strength, and supporting a safe return to function.",
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
        "Pain in the knee, shoulder, or hip.",
        "Tendinopathies and overuse syndromes.",
        "Limited mobility or stiffness.",
        "Muscle weakness and instability after an injury.",
        "Rehabilitation after surgery, when there is a relevant medical instruction.",
        "Functional difficulty with walking, stairs, lifting the arm, sitting, or sport.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Knee rehabilitation",
    },
    {
      type: "paragraph",
      text: "Knee rehabilitation can address anterior knee pain, tendinopathies, meniscus or ligament injuries, post-operative rehabilitation, and difficulty with stairs, sitting, or walking. The program focuses on mobility, muscle control, strength, proprioception, and gradual loading.",
    },
    {
      type: "heading",
      level: 2,
      text: "Shoulder rehabilitation",
    },
    {
      type: "paragraph",
      text: "The shoulder needs a fine balance between mobility and stability. Rehabilitation can include pain control, better range of motion, scapular retraining, rotator cuff strengthening, and a functional return to activities above shoulder height.",
    },
    {
      type: "heading",
      level: 2,
      text: "Hip rehabilitation",
    },
    {
      type: "paragraph",
      text: "The hip directly affects walking, the lower back, the knee, and the overall function of the leg. Rehabilitation focuses on mobility, gluteal and stabilizer strength, pelvic control, and a gradual return to walking, stairs, work, or sport.",
    },
    {
      type: "heading",
      level: 2,
      text: "How the plan is applied",
    },
    {
      type: "list",
      ordered: false,
      items: [
        "Clinical assessment of the joint and of movement as a whole.",
        "Control of pain, swelling, or sensitivity where needed.",
        "Targeted mobilization and treatment techniques.",
        "Progressive therapeutic exercise based on tolerance to load.",
        "Functional retraining for daily movements, work, or sport.",
        "Guidance on preventing recurrence and continuing activity safely.",
      ],
    },
    {
      type: "heading",
      level: 2,
      text: "Treatment and exercise together",
    },
    {
      type: "paragraph",
      text: "Depending on the case, the plan can combine TECAR, laser, shockwave, ultrasound, electrotherapy, manual therapy, and therapeutic exercise. Technology supports rehabilitation, but the final result is built with the right loading and a return of function.",
    },
    {
      type: "paragraph",
      text: "Book an assessment at FisioLab so a personalized rehabilitation plan can be organized for the knee, shoulder, or hip, based on your own clinical picture.",
    },
  ],
  relatedSlugs: [
    "tecar-therapy",
    "high-power-laser",
    "shockwave",
    "metegcheiritiki-apokatastasi",
  ],
  cta: { label: "Book an Assessment", href: "/contact" },
  seo: {
    title: "Knee, Shoulder & Hip Rehabilitation | FisioLab",
    description:
      "Personalized physiotherapy for the knee, shoulder, and hip at FisioLab in Rethymno, with assessment, treatment, and progressive exercise.",
  },
};
