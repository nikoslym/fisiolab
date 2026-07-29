import type { WhyTrustUs as WhyTrustUsContent } from "@/content/types";
import { Container, Section } from "@/components/layout/Container";

export function WhyTrustUs({ content }: { content: WhyTrustUsContent }) {
  return (
    <Section className="bg-brand-mesh text-white">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div
            aria-hidden="true"
            className="bg-brand-aqua mx-auto mb-5 h-1.5 w-14 rounded-full"
          />
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {content.title}
          </h2>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {content.items.map((item, index) => (
            <li
              key={item.label}
              className="reveal-up rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <p className="text-brand-aqua text-sm font-semibold tracking-[0.16em] uppercase">
                {item.label}
              </p>
              <p className="mt-3 text-sm leading-6 text-white/90">{item.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
