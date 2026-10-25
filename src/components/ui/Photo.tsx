import Image from "next/image";
import { cn } from "@/lib/utils";

/** Real photo tile — same footprint as `ImagePlaceholder` so the two drop in interchangeably. */
export function Photo({
  src,
  alt,
  aspect = "aspect-[4/3]",
  rounded = "rounded-2xl",
  className,
  priority,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  src: string;
  alt: string;
  aspect?: string;
  /** Corner radius utility class — pass `"rounded-none"` when a parent already clips corners. */
  rounded?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-navy-900",
        rounded,
        aspect,
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
