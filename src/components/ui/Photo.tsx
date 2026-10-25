import Image from "next/image";
import { cn } from "@/lib/utils";

/** Real photo tile — same footprint as `ImagePlaceholder` so the two drop in interchangeably. */
export function Photo({
  src,
  alt,
  aspect = "aspect-[4/3]",
  className,
  priority,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-navy-900",
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
