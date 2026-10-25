import { Quote, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="bg-sand-200/70 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Guest Reviews"
          title="What Our Anglers Say"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.quote}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-[0_12px_30px_-18px_rgba(13,27,38,0.25)]"
            >
              <Quote className="h-6 w-6 text-gold-500" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-5 flex items-center gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <figcaption className="mt-2 text-xs font-semibold uppercase tracking-wide text-ink-500">
                {t.name} &middot; {t.detail}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
