import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-16 sm:py-20">
      <div className="bg-grid-navy bg-radial-gold absolute inset-0" />
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <h2 className="text-display max-w-2xl text-3xl font-bold uppercase tracking-wide text-sand-50 sm:text-4xl">
          Ready To Reel In The Adventure Of A Lifetime?
        </h2>
        <p className="max-w-xl text-sm text-sand-100/75 sm:text-base">
          Tell us your preferred dates and party size — we&apos;ll confirm
          availability and get you on the water.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/book" variant="gold" size="lg">
            Book Your Charter
          </Button>
          <Button href={`tel:${site.contact.phoneHref}`} variant="outline-light" size="lg">
            <Phone className="h-4 w-4" />
            {site.contact.phoneDisplay}
          </Button>
        </div>
      </Container>
    </section>
  );
}
