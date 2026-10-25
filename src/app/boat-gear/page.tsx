import type { Metadata } from "next";
import { CheckCircle2, Image as ImageIcon, Radio, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Photo } from "@/components/ui/Photo";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import {
  boatAmenities,
  boatName,
  boatSpecs,
  electronics,
  safetyEquipment,
  tackle,
} from "@/data/boat";

export const metadata: Metadata = {
  title: "Boat & Gear",
  description: `A look at the ${boatName} — our 2022 Orion 29 — plus the tackle, electronics, and safety equipment used on every charter.`,
};

const gallery = [
  {
    src: "/images/boat/profile-running-1.jpg",
    alt: `${boatName}, the 2022 Orion 29, running on the water`,
  },
  {
    src: "/images/boat/helm-cooler.jpg",
    alt: `Helm station, rod storage, and Yeti cooler aboard the ${boatName}`,
  },
  {
    src: "/images/boat/bow-radar.jpg",
    alt: `Bow casting deck and Garmin radar aboard the ${boatName}`,
  },
];

export default function BoatGearPage() {
  return (
    <>
      <PageHero
        eyebrow="The Vessel"
        title={`The ${boatName}`}
        description="A 2022 Orion 29 center console, fully rigged for offshore fishing and cruising with a comprehensive Garmin electronics package."
      />

      <section className="bg-sand-100 py-10 sm:py-14">
        <Container className="grid items-start gap-12 lg:grid-cols-2">
          <Photo
            src="/images/boat/profile-running-2-tight.jpg"
            alt={`${boatName}, the 2022 Orion 29, running on the water`}
            aspect="aspect-[8/7]"
            priority
          />

          <div>
            <h2 className="text-display text-2xl font-bold uppercase tracking-wide text-navy-950 sm:text-3xl">
              Specs
            </h2>
            <dl className="mt-6 divide-y divide-navy-900/10 rounded-2xl bg-white shadow-[0_12px_30px_-18px_rgba(13,27,38,0.25)]">
              {boatSpecs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-center justify-between gap-4 px-5 py-3.5 text-sm"
                >
                  <dt className="font-semibold text-ink-500">{spec.label}</dt>
                  <dd className="text-right font-medium text-navy-950">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>

            <h3 className="text-display mt-10 text-lg font-bold uppercase tracking-wide text-navy-950">
              Onboard Amenities
            </h3>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {boatAmenities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-ink-700"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-ocean-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-sand-200/70 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Rigged & Ready"
            title="Tackle & Electronics"
            description="Everything you need to fish is already on board — no gear to haul, nothing to rent."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-[0_12px_30px_-18px_rgba(13,27,38,0.25)]">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950 text-gold-400">
                <ImageIcon className="h-6 w-6" strokeWidth={2} />
              </span>
              <h3 className="text-display mt-5 text-base font-bold uppercase tracking-wide text-navy-950">
                Tackle
              </h3>
              <ul className="mt-3 space-y-2">
                {tackle.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-ink-700"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-ocean-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-[0_12px_30px_-18px_rgba(13,27,38,0.25)]">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950 text-gold-400">
                <Radio className="h-6 w-6" strokeWidth={2} />
              </span>
              <h3 className="text-display mt-5 text-base font-bold uppercase tracking-wide text-navy-950">
                Electronics
              </h3>
              <ul className="mt-3 space-y-2">
                {electronics.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-ink-700"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-ocean-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500 text-navy-950">
              <ShieldCheck className="h-6 w-6" strokeWidth={2} />
            </span>
            <h2 className="text-display mt-5 text-2xl font-bold uppercase tracking-wide text-sand-50 sm:text-3xl">
              Safety Equipment
            </h2>
            <p className="mt-3 text-sm text-sand-100/70">
              Every trip meets U.S. Coast Guard requirements, no exceptions.
            </p>
          </div>

          <ul className="mx-auto mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
            {safetyEquipment.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 rounded-xl bg-sand-50/5 px-4 py-3 text-sm text-sand-100/90"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-400" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-sand-100 py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Gallery" title="On The Water" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((photo) => (
              <Photo
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                aspect="aspect-square"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
