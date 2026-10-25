import { Anchor } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { HeroSlideshow } from "@/components/sections/HeroSlideshow";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-navy-950">
      <HeroSlideshow />
      <div className="bg-grid-navy bg-radial-gold absolute inset-0" />
      <div
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-ocean-600/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative flex flex-1 flex-col items-center justify-center gap-5 py-20 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-sand-50/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300 ring-1 ring-sand-50/15">
          <Anchor className="h-3.5 w-3.5" />
          {site.contact.locationLabel}
        </span>

        <h1 className="text-display max-w-4xl text-2xl font-bold uppercase leading-[1.05] tracking-wide text-sand-50 sm:text-4xl lg:text-5xl">
          {site.tagline}
        </h1>

        <p className="max-w-xl text-sm leading-relaxed text-sand-100/75 sm:text-base">
          {site.description}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/book" variant="gold" size="lg">
            Book Your Charter
          </Button>
          <Button href="/services" variant="outline-light" size="lg">
            View Trips &amp; Pricing
          </Button>
        </div>
      </Container>

      {/* Stats overlay — sits directly on the slideshow photos at the bottom of the hero. */}
      <div className="relative z-10 border-t border-sand-50/10 bg-navy-950/50 backdrop-blur-sm">
        <Container className="grid grid-cols-2 gap-6 py-6 sm:grid-cols-4">
          {site.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-display text-2xl font-bold text-sand-50 sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-sand-100/70 sm:text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </Container>
      </div>

      <WaveDivider fillClassName="fill-sand-100" />
    </section>
  );
}
