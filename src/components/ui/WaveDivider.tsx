import { cn } from "@/lib/utils";

/**
 * Decorative wave divider between sections. `fill` should match the
 * background color of the section the wave is "pouring into".
 */
export function WaveDivider({
  flip = false,
  className,
  fillClassName = "fill-sand-100",
}: {
  flip?: boolean;
  className?: string;
  fillClassName?: string;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none w-full overflow-hidden leading-[0]",
        flip && "rotate-180",
        className,
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="h-[50px] w-full sm:h-[70px]"
      >
        <path
          d="M0 32L60 38.7C120 45 240 58 360 61.3C480 64 600 58 720 48C840 38 960 26 1080 22.7C1200 19 1320 25 1380 28L1440 31V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0V32Z"
          className={fillClassName}
        />
      </svg>
    </div>
  );
}
