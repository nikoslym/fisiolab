import type { FaqItem } from "@/content/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ({ items }: { items: FaqItem[] }) {
  return (
    <Accordion
      type="single"
      collapsible
      className="bg-card mx-auto max-w-4xl overflow-hidden rounded-2xl border px-2 shadow-sm sm:px-4"
    >
      {items.map((item, index) => (
        <AccordionItem
          key={item.question}
          value={`faq-${index}`}
          className="border-border/70"
        >
          <AccordionTrigger className="text-left text-lg hover:no-underline">
            <span className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="text-brand-aqua mt-0.5 font-mono text-sm font-bold"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{item.question}</span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground ps-9 text-base leading-7">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
