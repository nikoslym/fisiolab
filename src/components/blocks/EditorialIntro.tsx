import type { RichText } from "@/content/types";
import { cn } from "@/lib/utils";

/**
 * Asymmetric editorial layout for intro-style rich text: large heading on the
 * left, supporting copy on the right with a brand accent rail.
 */
export function EditorialIntro({
  content,
  className,
}: {
  content: RichText;
  className?: string;
}) {
  const heading = content.find((node) => node.type === "heading");
  const body = content.filter((node) => node !== heading);

  return (
    <div
      className={cn(
        "grid items-start gap-10 lg:grid-cols-12 lg:gap-16",
        className,
      )}
    >
      <div className="reveal-up lg:col-span-5">
        <div
          aria-hidden="true"
          className="bg-brand-aqua mb-6 h-1.5 w-16 rounded-full"
        />
        {heading && heading.type === "heading" && (
          <h2 className="text-3xl leading-tight font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {heading.text}
          </h2>
        )}
      </div>

      <div className="reveal-up border-brand-aqua/40 space-y-5 border-l-2 pl-6 sm:pl-8 lg:col-span-7">
        {body.map((node, index) => {
          if (node.type === "paragraph") {
            return (
              <p
                key={`intro-p-${index}`}
                className="text-muted-foreground text-lg leading-8"
              >
                {node.text}
              </p>
            );
          }

          if (node.type === "list") {
            const List = node.ordered ? "ol" : "ul";
            return (
              <List
                key={`intro-list-${index}`}
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

          return null;
        })}
      </div>
    </div>
  );
}
