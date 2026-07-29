import { Check } from "lucide-react";
import type { TrustBar as TrustBarContent } from "@/content/types";
import { Container } from "@/components/layout/Container";

export function TrustBar({ content }: { content: TrustBarContent }) {
  return (
    <div className="bg-brand-mesh text-white">
      <Container className="flex flex-wrap items-center justify-center gap-x-2 gap-y-3 py-5 sm:py-6">
        {content.items.map((item, index) => (
          <div key={item} className="flex items-center gap-2 sm:gap-3">
            {index > 0 && (
              <span
                aria-hidden="true"
                className="bg-brand-aqua/35 mx-1 hidden h-4 w-px sm:mx-2 sm:block"
              />
            )}
            <div className="flex items-center gap-2 text-sm font-medium tracking-wide">
              <Check
                aria-hidden="true"
                className="text-brand-aqua size-4 shrink-0"
              />
              <span>{item}</span>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}
