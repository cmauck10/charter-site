"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Anchor, Menu, Phone, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu whenever the route changes. Resetting state
  // during render (rather than in an effect) avoids an extra render pass —
  // see https://react.dev/learn/you-might-not-need-an-effect.
  const [renderedPathname, setRenderedPathname] = useState(pathname);
  if (pathname !== renderedPathname) {
    setRenderedPathname(pathname);
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-sand-50/10 bg-navy-950/95 backdrop-blur-sm">
      <Container className="flex h-18 items-center justify-between py-3">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-sand-50"
          aria-label={`${site.name} — home`}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500 text-navy-950">
            <Anchor className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="text-display flex flex-col leading-tight">
            <span className="text-base font-bold uppercase tracking-wide sm:text-lg">
              {site.shortName}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-ocean-300">
              Charters
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {site.nav.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-semibold uppercase tracking-wide transition-colors",
                  active
                    ? "text-gold-400"
                    : "text-sand-100/80 hover:text-sand-50",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={`tel:${site.contact.phoneHref}`}
            className="flex items-center gap-2 text-sm font-semibold text-sand-100/90 hover:text-sand-50"
          >
            <Phone className="h-4 w-4" />
            {site.contact.phoneDisplay}
          </a>
          <Button href="/book" variant="gold" size="md">
            Book Now
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-sand-50 lg:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-sand-50/10 bg-navy-950 lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-sm font-semibold uppercase tracking-wide text-sand-100/90 hover:bg-navy-900 hover:text-sand-50"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${site.contact.phoneHref}`}
              className="flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-semibold text-sand-100/90"
            >
              <Phone className="h-4 w-4" />
              {site.contact.phoneDisplay}
            </a>
            <Button href="/book" variant="gold" size="md" className="mt-2 w-full">
              Book Now
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
