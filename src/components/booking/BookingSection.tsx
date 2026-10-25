import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookingForm } from "@/components/booking/BookingForm";
import { site } from "@/lib/site";

export function BookingSection({
  id = "booking",
  defaultTripType,
}: {
  id?: string;
  defaultTripType?: string;
}) {
  return (
    <section id={id} className="bg-sand-100 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Let's Get You On The Water"
          title="Request Your Trip"
          description={`Fill out the form below and we'll confirm availability ${site.booking.responseWindow}.`}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-2xl bg-white p-6 shadow-[0_12px_30px_-18px_rgba(13,27,38,0.25)] sm:p-8">
            <BookingForm defaultTripType={defaultTripType} />
          </div>

          <div className="rounded-2xl bg-navy-950 p-6 text-sand-100 sm:p-8">
            <h3 className="text-display text-lg font-bold uppercase tracking-wide text-sand-50">
              What Happens Next
            </h3>
            <ol className="mt-5 space-y-4 text-sm leading-relaxed text-sand-100/80">
              <li>
                <span className="font-semibold text-gold-300">1. Submit</span>
                <br />
                Send us your dates, party size, and trip preference.
              </li>
              <li>
                <span className="font-semibold text-gold-300">
                  2. Confirm
                </span>
                <br />
                We&apos;ll reach out {site.booking.responseWindow} to confirm
                availability and details.
              </li>
              <li>
                <span className="font-semibold text-gold-300">
                  3. Fish
                </span>
                <br />
                Show up ready to go — we handle the rest.
              </li>
            </ol>

            <div className="mt-8 space-y-3 border-t border-sand-50/10 pt-6 text-sm">
              <a
                href={`tel:${site.contact.phoneHref}`}
                className="flex items-center gap-2.5 text-sand-100/90 hover:text-sand-50"
              >
                <Phone className="h-4 w-4 text-gold-400" />
                {site.contact.phoneDisplay}
              </a>
              <a
                href={`mailto:${site.contact.email}`}
                className="flex items-center gap-2.5 text-sand-100/90 hover:text-sand-50"
              >
                <Mail className="h-4 w-4 text-gold-400" />
                {site.contact.email}
              </a>
              <p className="flex items-center gap-2.5 text-sand-100/90">
                <MapPin className="h-4 w-4 text-gold-400" />
                {site.contact.addressLine}
              </p>
              <p className="flex items-center gap-2.5 text-sand-100/90">
                <Clock className="h-4 w-4 text-gold-400" />
                {site.contact.hours}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
