import { Anchor, ShieldCheck, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { HeroSlideshow } from "@/components/sections/HeroSlideshow";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
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

      <Container className="relative flex flex-col items-center gap-8 py-24 text-center sm:py-32 lg:py-40">
        <span className="inline-flex items-center gap-2 rounded-full bg-sand-50/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300 ring-1 ring-sand-50/15">
          <Anchor className="h-3.5 w-3.5" />
          {site.contact.locationLabel}
        </span>

        <h1 className="text-display max-w-4xl text-4xl font-bold uppercase leading-[1.05] tracking-wide text-sand-50 sm:text-6xl lg:text-7xl">
          {site.tagline}
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-sand-100/75 sm:text-lg">
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

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-sand-100/70">
          <span className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-gold-400" />
            USCG Licensed &amp; Insured
          </span>
          <span className="flex items-center gap-2">
            <span className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
              ))}
            </span>
            5.0 Rated Experience
          </span>
        </div>
      </Container>

      <WaveDivider fillClassName="fill-sand-100" />
    </section>
  );
}
