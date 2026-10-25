import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ServiceCard } from "@/components/services/ServiceCard";
import { serviceCategories, services } from "@/data/services";
import { faq } from "@/data/faq";

export const metadata: Metadata = {
  title: "Trips & Pricing",
  description:
    "Shore, inshore, and offshore fishing charters — compare target species, duration, and pricing for every trip.",
};

const categoryBlurb: Record<string, string> = {
  Shore: "No boat required — just hit the sand and fish.",
  Inshore: "Bridges and backwaters for snook, shark, and tarpon.",
  Offshore: "Reef, trolling, and deep-drop trips for serious bites.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Trips & Pricing"
        title="Find Your Trip"
        description="Every trip includes all gear. Pick the experience that fits your crew, or reach out and we'll help you choose."
      />

      {serviceCategories.map((category, categoryIndex) => {
        const categoryServices = services.filter(
          (s) => s.category === category,
        );
        return (
          <section
            key={category}
            className={
              categoryIndex % 2 === 0
                ? "bg-sand-100 py-20 sm:py-24"
                : "bg-sand-200/70 py-20 sm:py-24"
            }
          >
            <Container className="space-y-8">
              <SectionHeading
                eyebrow={category}
                title={`${category} Trips`}
                description={categoryBlurb[category]}
                align="left"
              />

              <div className="space-y-8">
                {categoryServices.map((service, i) => (
                  <ServiceCard
                    key={service.slug}
                    service={service}
                    reverse={i % 2 === 1}
                  />
                ))}
              </div>
            </Container>
          </section>
        );
      })}

      <section className="bg-navy-950 py-20 sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Good To Know"
            title="Frequently Asked Questions"
            tone="light"
          />

          <div className="mt-10 divide-y divide-sand-50/10 rounded-2xl bg-sand-50/5">
            {faq.map((item) => (
              <details key={item.question} className="group p-6">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-semibold text-sand-50 sm:text-base [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <ChevronDown className="h-5 w-5 flex-shrink-0 text-gold-400 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-sand-100/70">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
