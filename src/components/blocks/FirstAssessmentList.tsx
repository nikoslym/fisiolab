import type { FirstAssessment } from "@/content/types";
import { cn } from "@/lib/utils";

export function FirstAssessmentList({
  content,
  variant = "onDark",
}: {
  content: FirstAssessment;
  variant?: "onDark" | "onLight";
}) {
  const isDark = variant === "onDark";

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mx-auto max-w-3xl text-center">
        <p
          className={cn(
            "mb-3 text-xs font-semibold tracking-[0.2em] uppercase",
            isDark ? "text-brand-aqua" : "text-primary",
          )}
        >
          01 — 05
        </p>
        <h2
          className={cn(
            "text-3xl font-bold sm:text-4xl",
            isDark ? "text-white" : "text-brand-blue-deep",
          )}
        >
          {content.title}
        </h2>
      </div>

      <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">
        {content.items.map((item, index) => {
          const step = String(index + 1).padStart(2, "0");
          return (
            <li
              key={item}
              className={cn(
                "reveal-up group relative flex flex-col gap-4 rounded-2xl p-5 transition duration-300",
                isDark
                  ? "border border-white/25 bg-white/15 text-white shadow-lg backdrop-blur-md hover:bg-white/25"
                  : "bg-card border shadow-sm hover:-translate-y-0.5 hover:shadow-md",
              )}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "font-mono text-3xl font-bold tracking-tight",
                  isDark ? "text-brand-aqua" : "text-primary/80",
                )}
              >
                {step}
              </span>
              <span className="text-sm leading-6 font-medium sm:text-base sm:leading-7">
                {item}
              </span>
              {index < content.items.length - 1 && (
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute top-1/2 -right-2 hidden h-px w-3 lg:block",
                    isDark ? "bg-white/30" : "bg-border",
                  )}
                />
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
