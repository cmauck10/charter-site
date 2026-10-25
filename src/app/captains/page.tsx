import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Photo } from "@/components/ui/Photo";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { captains } from "@/data/captains";

export const metadata: Metadata = {
  title: "Our Captains",
  description:
    "Meet Captain Matt Mauck and Dawson Proodian, the two lifelong friends behind Fishers of Men Charters.",
};

export default function CaptainsPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet Your Captains"
        title="Grew Up Together. Still Fishing Together."
        description="Matt and Dawson have been friends since birth, growing up together in Wellington, Florida — and fishing has always been the thread that ties them together."
      />

      <section className="bg-sand-100 py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            <Photo
              src="/images/captains/matt-and-dawson-tuna.jpg"
              alt="Captain Matt Mauck and Dawson Proodian holding a double catch of yellowfin tuna"
              aspect="aspect-[4/3]"
              sizes="(min-width: 640px) 50vw, 100vw"
              priority
            />
            <Photo
              src="/images/captains/matt-and-dawson-tarpon.jpg"
              alt="Captain Matt Mauck and Dawson Proodian holding a massive tarpon together in the surf"
              aspect="aspect-[4/3]"
              sizes="(min-width: 640px) 50vw, 100vw"
            />
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {captains.map((captain) => (
              <div
                key={captain.name}
                className="overflow-hidden rounded-2xl bg-white shadow-[0_12px_30px_-18px_rgba(13,27,38,0.25)]"
              >
                <Photo src={captain.photo} alt={captain.name} aspect="aspect-[4/5]" />
                <div className="p-6 sm:p-7">
                  <h3 className="text-display text-xl font-bold uppercase tracking-wide text-navy-950">
                    {captain.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-ocean-600">
                    {captain.role}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {captain.credentials.map((c) => (
                      <Badge key={c} tone="navy">
                        {c}
                      </Badge>
                    ))}
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-ink-500">
                    {captain.bio}
                  </p>

                  <p className="mt-4 text-xs font-bold uppercase tracking-wide text-ink-300">
                    Specialty
                  </p>
                  <p className="text-sm font-semibold text-navy-950">
                    {captain.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
