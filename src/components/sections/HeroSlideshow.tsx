"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToMotionPreference(callback: () => void) {
  const query = window.matchMedia(REDUCED_MOTION_QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getMotionPreference() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

// Assume motion is fine during SSR/hydration; corrected immediately on the
// client via useSyncExternalStore once `window` is available.
function getServerMotionPreference() {
  return false;
}

const slides = [
  {
    src: "/images/boat/profile-running-2.jpg",
    alt: "The Weasel, our 2022 Orion 29, running on the water",
  },
  {
    src: "/images/catches/matt-tarpon-surf.jpg",
    alt: "Captain Matt Mauck holding a tarpon caught from the surf",
  },
  {
    src: "/images/catches/matt-shore-shark.jpg",
    alt: "Captain Matt Mauck with a shark caught from shore",
  },
  {
    src: "/images/catches/dawson-wahoo.jpg",
    alt: "Dawson Proodian holding a wahoo",
  },
  {
    src: "/images/captains/matt-and-dawson-tuna.jpg",
    alt: "Captain Matt Mauck and Dawson Proodian with a double catch of yellowfin tuna",
  },
  {
    src: "/images/catches/dawson-swordfish.jpg",
    alt: "Dawson Proodian with a deep-drop swordfish catch",
  },
  {
    src: "/images/catches/dawson-king-mackerel.jpg",
    alt: "Dawson Proodian holding a king mackerel at sunset",
  },
  {
    src: "/images/catches/dawson-tuna.jpg",
    alt: "Dawson Proodian holding a yellowfin tuna offshore",
  },
  {
    src: "/images/catches/dawson-mahi-2.jpg",
    alt: "Dawson Proodian holding a mahi mahi",
  },
  {
    src: "/images/catches/dawson-snapper.jpg",
    alt: "Dawson Proodian holding a double catch of mutton snapper",
  },
];

const INTERVAL_MS = 4500;

/** Full-bleed, auto-advancing photo backdrop for the homepage hero. Purely decorative — the real content lives in the headline/CTAs rendered on top. */
export function HeroSlideshow() {
  const [index, setIndex] = useState(0);
  const reducedMotion = useSyncExternalStore(
    subscribeToMotionPreference,
    getMotionPreference,
    getServerMotionPreference,
  );

  useEffect(() => {
    // Keep cycling photos regardless of the motion preference — a hard cut
    // between photos isn't the kind of motion that setting is meant to
    // suppress. We only drop the animated crossfade below.
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt=""
          fill
          priority={i === 0}
          sizes="100vw"
          className={cn(
            "object-cover",
            reducedMotion
              ? "transition-none"
              : "transition-opacity duration-1000 ease-in-out",
            i === index ? "opacity-100" : "opacity-0",
          )}
        />
      ))}
      {/* Darken + tint so headline/CTA text stays legible over any photo. */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-950/70 to-navy-950/90" />
    </div>
  );
}
