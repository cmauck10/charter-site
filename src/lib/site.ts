/**
 * Central site configuration.
 *
 * Everything that's likely to change (phone number, address, hours, social
 * links, pricing) lives here so the rest of the app never hardcodes it.
 * Swap the TODO values for the real business details whenever they're ready
 * — nothing else needs to change.
 */

export const site = {
  name: "Fishers of Men Charters",
  shortName: "Fishers of Men",
  tagline: "Reel In The Adventure Of A Lifetime",
  description:
    "Faith-driven, family-owned fishing charters offering shore, inshore, and offshore trips. Licensed, insured, and committed to putting you on the fish — and enjoying God's creation along the way.",
  // TODO: swap in the real production domain once it's registered/live.
  url: "https://www.fishersofmencharters.com",

  contact: {
    // TODO: replace with the real phone number.
    phoneDisplay: "(555) 867-5309",
    phoneHref: "+15558675309",
    // TODO: replace with the real inbox.
    email: "captain@fishersofmencharters.com",
    // TODO: replace with the real marina name once confirmed.
    locationLabel: "Based in Palm Beach County, FL",
    addressLine: "Palm Beach County, FL",
    hours: "Daily, dawn departures — by appointment",
  },

  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },

  booking: {
    responseWindow: "within 24 hours",
    note: "No payment required to inquire — we'll confirm availability and details with you directly.",
  },

  nav: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Trips & Pricing" },
    { href: "/boat-gear", label: "Boat & Gear" },
    { href: "/captains", label: "Our Captains" },
    { href: "/about", label: "About" },
  ],

  stats: [
    { value: "15+", label: "Years On The Water" },
    { value: "1,000+", label: "Happy Anglers" },
    { value: "5.0", label: "Average Rating" },
    { value: "USCG", label: "Licensed & Insured" },
  ],
} as const;
