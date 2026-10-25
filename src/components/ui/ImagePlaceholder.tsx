import type { LucideIcon } from "lucide-react";
import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Stand-in for real photography. Renders a tasteful, on-brand placeholder
 * tile so the layout looks intentional before real photos/video are dropped
 * in. Swap for a real `next/image` once assets are available — the
 * `aspect`/`className` props are designed to make that swap trivial.
 */
export function ImagePlaceholder({
  label = "Photo coming soon",
  icon: Icon = Camera,
  aspect = "aspect-[4/3]",
  rounded = "rounded-2xl",
  className,
}: {
  label?: string;
  icon?: LucideIcon;
  aspect?: string;
  /** Corner radius utility class — pass `"rounded-none"` when a parent already clips corners. */
  rounded?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden border border-dashed border-navy-800/15 bg-gradient-to-br from-navy-800 via-navy-900 to-ocean-700",
        rounded,
        aspect,
        className,
      )}
    >
      <div className="bg-grid-navy absolute inset-0 opacity-40" />
      <div className="relative flex flex-col items-center gap-2 px-4 text-center">
        <Icon className="h-8 w-8 text-sand-50/70" strokeWidth={1.5} />
        <span className="text-xs font-semibold uppercase tracking-wide text-sand-50/60">
          {label}
        </span>
      </div>
    </div>
  );
}
