import { Fish } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-28 sm:py-36">
      <div className="bg-grid-navy bg-radial-gold absolute inset-0" />
      <Container className="relative flex flex-col items-center gap-5 text-center">
        <Fish className="h-14 w-14 text-gold-400" strokeWidth={1.5} />
        <h1 className="text-display text-3xl font-bold uppercase tracking-wide text-sand-50 sm:text-4xl">
          The One That Got Away
        </h1>
        <p className="max-w-md text-sm leading-relaxed text-sand-100/75 sm:text-base">
          We couldn&apos;t find the page you&apos;re looking for. Let&apos;s
          get you back on course.
        </p>
        <Button href="/" variant="gold" size="lg">
          Back To Home
        </Button>
      </Container>
    </section>
  );
}
