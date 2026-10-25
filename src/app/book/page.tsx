import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/sections/PageHero";
import { BookingSection } from "@/components/booking/BookingSection";

export const metadata: Metadata = {
  title: "Book Now",
  description:
    "Request your fishing charter — tell us your dates, party size, and trip preference and we'll confirm availability.",
};

// Reading `searchParams` is a dynamic API, so it's isolated in its own
// Suspense boundary below. That keeps the rest of the page (the hero)
// static while only this piece renders per-request.
async function BookingSectionFromParams({
  searchParams,
}: {
  searchParams: PageProps<"/book">["searchParams"];
}) {
  const { trip } = await searchParams;
  return (
    <BookingSection
      defaultTripType={typeof trip === "string" ? trip : undefined}
    />
  );
}

export default function BookPage({ searchParams }: PageProps<"/book">) {
  return (
    <>
      <PageHero
        eyebrow="Book Now"
        title="Request Your Trip"
        description="Tell us your dates and party size — we'll confirm availability and get you on the water."
      />
      <Suspense fallback={<BookingSection />}>
        <BookingSectionFromParams searchParams={searchParams} />
      </Suspense>
    </>
  );
}
