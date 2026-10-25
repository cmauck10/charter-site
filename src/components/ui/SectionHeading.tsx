import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: React.ReactNode;
  align?: "center" | "left";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-xs font-bold uppercase tracking-[0.2em]",
            tone === "dark" ? "text-ocean-600" : "text-gold-300",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-display text-3xl font-bold uppercase tracking-wide sm:text-4xl",
          tone === "dark" ? "text-navy-950" : "text-sand-50",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-ink-500" : "text-sand-200/85",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
