import type { Metadata } from "next";
import { Compass, Heart, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Photo } from "@/components/ui/Photo";
import { VerseCard } from "@/components/ui/VerseCard";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { site } from "@/lib/site";
import { captains } from "@/data/captains";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Captain Matt Mauck and Dawson Proodian, the two lifelong friends behind Fishers of Men Charters.",
};

const values = [
  {
    icon: Heart,
    title: "Faith & Family",
    text: "The name comes from Matthew 4:19 — a reminder that this business is built on faith, friendship, and treating every guest like crew.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    text: "Licensed, insured, and Coast Guard compliant. Every trip starts with a safety briefing and ends with everyone back at the dock, happy and safe.",
  },
  {
    icon: Compass,
    title: "Local Expertise",
    text: "Two lifelong friends from Wellington, Florida, who've spent their whole lives on these waters — not just reading about them.",
  },
  {
    icon: Sparkles,
    title: "A Real Experience",
    text: "No rushing, no shortcuts. Every charter is run at a pace that makes sure you actually enjoy the day, not just survive it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Two Friends, One Boat, A Lifetime Of Fishing"
        description="Fishers of Men Charters is run by two lifelong friends from Wellington, Florida, who turned a shared passion into a business."
      />

      <section className="bg-navy-950 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Our Mission"
            title="More Than A Day On The Water"
            tone="light"
            description={
              <>
                Fishers of Men Charters takes its name from Matthew
                4:19, when Jesus called His first disciples to leave their
                nets and become &ldquo;fishers of men.&rdquo; That calling
                still drives us today. Every charter is a chance to slow
                down, soak in the beauty of God&apos;s creation out on the
                open water, and share the gospel with the people in the boat
                — one conversation, one cast at a time.
              </>
            }
          />

          <div className="mx-auto mt-10 grid max-w-3xl gap-5 sm:grid-cols-2">
            <VerseCard
              verse="Come, follow me, and I will send you out to fish for people."
              reference="Matthew 4:19"
            />
            <VerseCard
              verse="The heavens declare the glory of God; the skies proclaim the work of his hands."
              reference="Psalm 19:1"
            />
          </div>
        </Container>
      </section>

      <section className="bg-sand-100 py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Meet Your Captains"
            title="Grew Up Together. Still Fishing Together."
            description="Matt and Dawson have been friends since birth, growing up together in Wellington, Florida — and fishing has always been the thread that ties them together."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
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

      <section className="bg-sand-200/70 py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Our Values" title="What Drives Every Trip" />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-navy-900/5 bg-white p-6 shadow-[0_12px_30px_-18px_rgba(13,27,38,0.25)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950 text-gold-400">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3 className="text-display mt-5 text-base font-bold uppercase tracking-wide text-navy-950">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-950 py-14">
        <Container className="flex flex-col flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center sm:flex-row">
          {site.stats.map((stat) => (
            <div key={stat.label} className="px-4">
              <p className="text-display text-2xl font-bold text-sand-50">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-sand-100/60">
                {stat.label}
              </p>
            </div>
          ))}
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
