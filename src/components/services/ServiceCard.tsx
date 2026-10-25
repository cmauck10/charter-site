import { CheckCircle2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Photo } from "@/components/ui/Photo";
import type { Service } from "@/data/services";

export function ServiceCard({
  service,
  reverse = false,
}: {
  service: Service;
  reverse?: boolean;
}) {
  const imageClassName = reverse ? "lg:order-last" : undefined;

  return (
    <div
      id={service.slug}
      className="grid gap-8 rounded-2xl bg-white p-6 shadow-[0_12px_30px_-18px_rgba(13,27,38,0.25)] sm:p-8 lg:grid-cols-[1fr_1.3fr] lg:items-center"
    >
      {service.photo ? (
        <Photo
          src={service.photo}
          alt={`${service.name} — ${service.species.join(", ")}`}
          aspect="aspect-[4/3]"
          className={imageClassName}
        />
      ) : (
        <ImagePlaceholder
          label={service.name}
          aspect="aspect-[4/3]"
          className={imageClassName}
        />
      )}

      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-display text-2xl font-bold uppercase tracking-wide text-navy-950">
            {service.name}
          </h3>
          {service.badge && <Badge tone="gold">{service.badge}</Badge>}
        </div>

        <p className="mt-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-500">
          <MapPin className="h-4 w-4 text-ocean-600" />
          {service.locationNote}
        </p>

        <p className="mt-1.5 text-xs font-bold uppercase tracking-wide text-ocean-600">
          Targeting: {service.species.join(" • ")}
        </p>

        <p className="mt-4 text-sm leading-relaxed text-ink-500 sm:text-base">
          {service.summary}
        </p>

        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
          {service.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm text-ink-700">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-ocean-600" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-5 border-t border-sand-200 pt-6">
          <div className="flex gap-6">
            {service.priceTiers.map((tier) => (
              <div key={tier.duration}>
                <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-300">
                  {tier.duration}
                </p>
                <p className="text-display text-2xl font-bold text-navy-950">
                  {tier.price}
                </p>
              </div>
            ))}
          </div>
          <Button href={`/book?trip=${service.slug}`} variant="gold" size="md">
            Book This Trip
          </Button>
        </div>
      </div>
    </div>
  );
}
