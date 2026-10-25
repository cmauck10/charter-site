import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { site } from "@/lib/site";

export function Footer() {
  // Static on purpose: Cache Components prerenders this layout, and
  // synchronous calls like `new Date()` aren't allowed during prerender.
  // Bump this once a year (or swap in a small client component if you'd
  // rather it stay perpetually accurate).
  const year = 2026;

  return (
    <footer className="bg-navy-950 text-sand-100">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center" aria-label={`${site.name} — home`}>
            <Image
              src="/brand/logo-horizontal.png"
              alt=""
              width={944}
              height={280}
              className="h-9 w-auto"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand-100/70">
            {site.description}
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-sand-50/5 text-sand-100 transition-colors hover:bg-gold-500 hover:text-navy-950"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-sand-50/5 text-sand-100 transition-colors hover:bg-gold-500 hover:text-navy-950"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ocean-300">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-sand-100/80">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-sand-50">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/book" className="hover:text-sand-50">
                Book Now
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ocean-300">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm text-sand-100/80">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-400" />
              <a href={`tel:${site.contact.phoneHref}`} className="hover:text-sand-50">
                {site.contact.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-400" />
              <a href={`mailto:${site.contact.email}`} className="hover:text-sand-50">
                {site.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-400" />
              <span>{site.contact.addressLine}</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-ocean-300">
            Ready To Fish?
          </p>
          <p className="mt-4 text-sm leading-relaxed text-sand-100/80">
            Tell us your dates and party size — we&apos;ll handle the rest.
          </p>
          <Link
            href="/book"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400"
          >
            Request Your Trip
          </Link>
        </div>
      </Container>

      <div className="border-t border-sand-50/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-sand-100/50 sm:flex-row">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p>Licensed &amp; insured U.S. Coast Guard charter operation.</p>
        </Container>
      </div>
    </footer>
  );
}
