import { Cross } from "lucide-react";
import { cn } from "@/lib/utils";

export function VerseCard({
  verse,
  reference,
  tone = "light",
}: {
  verse: string;
  reference: string;
  /** `"light"` = light text for a dark background (default). `"dark"` = dark text for a light background. */
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-6",
        tone === "light"
          ? "border-gold-400/20 bg-sand-50/5"
          : "border-gold-400/30 bg-white shadow-[0_12px_30px_-18px_rgba(13,27,38,0.25)]",
      )}
    >
      <Cross
        className={cn(
          "h-5 w-5",
          tone === "light" ? "text-gold-400" : "text-gold-500",
        )}
        strokeWidth={2}
      />
      <p
        className={cn(
          "text-display mt-4 text-base italic leading-relaxed sm:text-lg",
          tone === "light" ? "text-sand-100/90" : "text-ink-700",
        )}
      >
        &ldquo;{verse}&rdquo;
      </p>
      <p
        className={cn(
          "mt-3 text-xs font-bold uppercase tracking-[0.2em]",
          tone === "light" ? "text-gold-300" : "text-gold-600",
        )}
      >
        {reference}
      </p>
    </div>
  );
}
