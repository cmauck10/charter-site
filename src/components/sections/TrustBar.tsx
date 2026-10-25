import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export function TrustBar() {
  return (
    <section className="bg-sand-100">
      <Container className="grid grid-cols-2 gap-6 pb-16 sm:grid-cols-4 sm:pb-20">
        {site.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-display text-3xl font-bold text-navy-900 sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ink-500 sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </Container>
    </section>
  );
}
