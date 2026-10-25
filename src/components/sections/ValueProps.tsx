import { Compass, Fish, ShieldCheck, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const values = [
  {
    icon: Compass,
    title: "Expert Local Knowledge",
    text: "Years spent reading these waters mean less searching and more time with a line in the water.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First, Always",
    text: "Fully licensed, insured, and Coast Guard compliant — your family's safety is never an afterthought.",
  },
  {
    icon: Fish,
    title: "All Gear Included",
    text: "Rods, reels, bait, tackle, and ice — everything is rigged and ready before you step on board.",
  },
  {
    icon: Users,
    title: "Built For Your Crew",
    text: "Family trips, group outings, or a solo day on the water — every charter is tailored to who's coming.",
  },
];

export function ValueProps() {
  return (
    <section className="bg-sand-100 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why Fish With Us"
          title="Built Around Your Experience On The Water"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-navy-900/5 bg-white p-6 shadow-[0_12px_30px_-18px_rgba(13,27,38,0.25)] transition-transform hover:-translate-y-1"
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
  );
}
