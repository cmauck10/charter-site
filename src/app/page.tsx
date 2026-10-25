import { Hero } from "@/components/sections/Hero";
import { ValueProps } from "@/components/sections/ValueProps";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { BoatTeaser } from "@/components/sections/BoatTeaser";
import { Testimonials } from "@/components/sections/Testimonials";
import { BookingSection } from "@/components/booking/BookingSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProps />
      <ServicesPreview />
      <BoatTeaser />
      <Testimonials />
      <BookingSection />
    </>
  );
}
