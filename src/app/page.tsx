import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ValueProps } from "@/components/sections/ValueProps";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { BoatTeaser } from "@/components/sections/BoatTeaser";
import { Testimonials } from "@/components/sections/Testimonials";
import { BookingSection } from "@/components/booking/BookingSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ValueProps />
      <ServicesPreview />
      <BoatTeaser />
      <Testimonials />
      <BookingSection />
    </>
  );
}
