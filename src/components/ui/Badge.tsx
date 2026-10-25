import { cn } from "@/lib/utils";

export function Badge({
  children,
  tone = "navy",
  className,
}: {
  children: React.ReactNode;
  tone?: "navy" | "gold" | "light";
  className?: string;
}) {
  const tones = {
    navy: "bg-navy-900/5 text-navy-900 ring-1 ring-navy-900/10",
    gold: "bg-gold-500/15 text-gold-700 ring-1 ring-gold-500/30",
    light: "bg-sand-50/10 text-sand-50 ring-1 ring-sand-50/25",
  } as const;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
