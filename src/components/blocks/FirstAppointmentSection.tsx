import Image from "next/image";
import type { FirstAppointment as FirstAppointmentContent } from "@/content/types";
import { Container, Section } from "@/components/layout/Container";

export function FirstAppointmentSection({
  content,
}: {
  content: FirstAppointmentContent;
}) {
  return (
    <Section className="bg-background overflow-hidden">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="reveal-up">
            <div className="mb-5 flex items-center gap-3">
              <div
                aria-hidden="true"
                className="bg-brand-aqua h-1.5 w-12 rounded-full"
              />
              <p className="text-primary text-xs font-semibold tracking-[0.22em] uppercase">
                {content.eyebrow}
              </p>
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {content.title}
            </h2>

            <p className="text-muted-foreground mt-6 text-lg leading-8">
              {content.intro}
            </p>

            <ul className="border-brand-aqua/40 mt-6 space-y-4 border-l-2 pl-5">
              {content.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="text-muted-foreground relative leading-7"
                >
                  <span
                    aria-hidden="true"
                    className="bg-brand-aqua absolute top-2.5 -left-[1.4rem] size-2 rounded-full"
                  />
                  {bullet}
                </li>
              ))}
            </ul>

            <p className="text-brand-blue-deep mt-8 text-base font-semibold">
              {content.certificatesIntro}
            </p>

            <ol className="mt-6 grid gap-4 sm:grid-cols-2">
              {content.certificates.map((item, index) => (
                <li
                  key={item.title}
                  className="bg-muted/70 relative overflow-hidden rounded-2xl border p-5"
                >
                  <span
                    aria-hidden="true"
                    className="text-brand-aqua/25 absolute -top-1 right-3 font-mono text-5xl font-bold"
                  >
                    {index + 1}
                  </span>
                  <p className="text-brand-blue-deep relative z-10 text-lg font-bold">
                    {item.title}
                  </p>
                  <p className="text-muted-foreground relative z-10 mt-2 text-sm leading-6">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="reveal-up relative mx-auto w-full max-w-xl lg:mx-0">
            <div
              aria-hidden="true"
              className="border-brand-blue-deep absolute -inset-3 rounded-[1.75rem] border-2 sm:-inset-4"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl sm:aspect-[5/6]">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
