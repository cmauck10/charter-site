import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Photo } from "@/components/ui/Photo";
import { boatAmenities, boatName } from "@/data/boat";

export function BoatTeaser() {
  return (
    <section className="bg-sand-100 py-20 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <Photo
          src="/images/boat/profile-running-1.jpg"
          alt={`${boatName}, our 2022 Orion 29, running on the water`}
          aspect="aspect-[4/3]"
          className="order-last lg:order-first"
        />

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ocean-600">
            The Vessel
          </p>
          <h2 className="text-display mt-3 text-3xl font-bold uppercase tracking-wide text-navy-950 sm:text-4xl">
            Meet The {boatName}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-500">
            Every trip runs aboard the {boatName}, our 2022 Orion 29 — twin
            Suzuki 200HP outboards and a full Garmin electronics package mean
            a smooth ride and a serious day of fishing, rain or shine.
          </p>

          <ul className="mt-6 space-y-3">
            {boatAmenities.slice(0, 4).map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm text-ink-700"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-ocean-600" />
                {item}
              </li>
            ))}
          </ul>

          <Button href="/boat-gear" variant="outline" size="md" className="mt-8">
            See The Boat &amp; Gear
          </Button>
        </div>
      </Container>
    </section>
  );
}
