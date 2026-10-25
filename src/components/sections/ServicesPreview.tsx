import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Photo } from "@/components/ui/Photo";
import { featuredServiceSlugs, services } from "@/data/services";

export function ServicesPreview() {
  const featured = featuredServiceSlugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <section className="bg-sand-200/70 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Trips & Pricing"
          title="Pick Your Adventure"
          description="From shore-based shark fishing to a full-day swordfish run — every trip includes all gear."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featured.map((trip) => (
            <div
              key={trip.slug}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_12px_30px_-18px_rgba(13,27,38,0.25)]"
            >
              {trip.photo ? (
                <Photo
                  src={trip.photo}
                  alt={`${trip.name} — ${trip.species.join(", ")}`}
                  aspect="aspect-[16/10]"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              ) : (
                <ImagePlaceholder label={trip.name} aspect="aspect-[16/10]" />
              )}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-display text-lg font-bold uppercase tracking-wide text-navy-950">
                    {trip.name}
                  </h3>
                  {trip.badge && <Badge tone="gold">{trip.badge}</Badge>}
                </div>

                <p className="mt-3 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-500">
                  <MapPin className="h-3.5 w-3.5 text-ocean-600" />
                  {trip.locationNote}
                </p>

                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-ocean-600">
                  {trip.species.join(" • ")}
                </p>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-500">
                  {trip.summary}
                </p>

                <div className="mt-5 flex items-center justify-between gap-3 border-t border-sand-200 pt-5">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-300">
                      {trip.priceTiers.length > 1 ? "Starting at" : trip.priceTiers[0].duration}
                    </p>
                    <p className="text-display text-xl font-bold text-navy-950">
                      {trip.priceTiers[0].price}
                    </p>
                  </div>
                  <Button href={`/book?trip=${trip.slug}`} variant="navy" size="md">
                    Book
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/services" variant="outline" size="md">
            See All Trips &amp; Pricing
          </Button>
        </div>
      </Container>
    </section>
  );
}
