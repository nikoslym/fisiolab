import type { RichText } from "@/content/types";
import { cn } from "@/lib/utils";

export function RichTextRenderer({
  content,
  className,
}: {
  content: RichText;
  className?: string;
}) {
  return (
    <div className={cn("space-y-5", className)}>
      {content.map((node, index) => {
        const key = `${node.type}-${index}`;

        if (node.type === "heading") {
          if (node.level === 2) {
            return (
              <div key={key} className="pt-10 first:pt-0">
                <div
                  aria-hidden="true"
                  className="bg-brand-aqua mb-4 h-1 w-12 rounded-full"
                />
                <h2 className="text-3xl font-bold">{node.text}</h2>
              </div>
            );
          }

          if (node.level === 3) {
            return (
              <h3 key={key} className="pt-6 text-2xl font-semibold">
                {node.text}
              </h3>
            );
          }

          return (
            <h4 key={key} className="pt-4 text-xl font-semibold">
              {node.text}
            </h4>
          );
        }

        if (node.type === "list") {
          const List = node.ordered ? "ol" : "ul";
          return (
            <List
              key={key}
              className={cn(
                "text-muted-foreground marker:text-primary space-y-2 pl-6 leading-7",
                node.ordered ? "list-decimal" : "list-disc",
              )}
            >
              {node.items.map((item, itemIndex) => (
                <li key={`${item}-${itemIndex}`}>{item}</li>
              ))}
            </List>
          );
        }

        if (node.type === "quote") {
          return (
            <blockquote
              key={key}
              className="border-brand-aqua from-brand-aqua-soft/80 to-brand-aqua-soft/20 relative overflow-hidden rounded-2xl border-l-4 bg-linear-to-br p-6 sm:p-8"
            >
              <span
                aria-hidden="true"
                className="text-brand-aqua/30 absolute -top-1 right-4 font-serif text-7xl leading-none"
              >
                ”
              </span>
              <div className="text-brand-blue-deep relative z-10 space-y-1 leading-7 font-medium">
                {node.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </blockquote>
          );
        }

        return (
          <p key={key} className="text-muted-foreground leading-8">
            {node.text}
          </p>
        );
      })}
    </div>
  );
}
