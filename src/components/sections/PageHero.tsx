import { Container } from "@/components/ui/Container";
import { WaveDivider } from "@/components/ui/WaveDivider";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div className="bg-grid-navy bg-radial-gold absolute inset-0" />
      <Container className="relative py-20 text-center sm:py-24">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-300">
          {eyebrow}
        </p>
        <h1 className="text-display mx-auto mt-3 max-w-3xl text-4xl font-bold uppercase leading-tight tracking-wide text-sand-50 sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-sand-100/75 sm:text-base">
            {description}
          </p>
        )}
      </Container>
      <WaveDivider fillClassName="fill-sand-100" />
    </section>
  );
}
