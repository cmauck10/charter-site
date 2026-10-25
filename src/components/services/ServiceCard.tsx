import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Photo } from "@/components/ui/Photo";
import type { Service } from "@/data/services";

/** Compact, scannable trip card — designed to fit many per screen in a grid. */
export function ServiceCard({ service }: { service: Service }) {
  return (
    <div
      id={service.slug}
      className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-[0_8px_20px_-16px_rgba(13,27,38,0.3)] transition-shadow hover:shadow-[0_14px_28px_-16px_rgba(13,27,38,0.35)]"
    >
      <div className="relative">
        {service.photo ? (
          <Photo
            src={service.photo}
            alt={`${service.name} — ${service.species.join(", ")}`}
            aspect="aspect-[4/3]"
            rounded="rounded-none"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        ) : (
          <ImagePlaceholder
            label={service.name}
            aspect="aspect-[4/3]"
            rounded="rounded-none"
          />
        )}
        {service.badge && (
          <Badge tone="gold" className="absolute left-3 top-3">
            {service.badge}
          </Badge>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-display text-base font-bold uppercase tracking-wide text-navy-950">
          {service.name}
        </h3>

        <p className="mt-1 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-ink-500">
          <MapPin className="h-3.5 w-3.5 flex-shrink-0 text-ocean-600" />
          <span className="truncate">{service.locationNote}</span>
        </p>

        <p className="mt-1.5 text-[11px] font-bold uppercase tracking-wide text-ocean-600">
          {service.species.join(" • ")}
        </p>

        <div className="mt-3 flex flex-1 items-end justify-between gap-3 border-t border-sand-200 pt-3">
          <div className="flex gap-4">
            {service.priceTiers.map((tier) => (
              <div key={tier.duration}>
                <p className="text-[9px] font-semibold uppercase tracking-wide text-ink-300">
                  {tier.duration}
                </p>
                <p className="text-display text-lg font-bold text-navy-950">
                  {tier.price}
                </p>
              </div>
            ))}
          </div>
          <Button href={`/book?trip=${service.slug}`} variant="gold" size="sm">
            Book
          </Button>
        </div>
      </div>
    </div>
  );
}
