export type PriceTier = {
  duration: string;
  price: string;
};

export type ServiceCategory = "Shore" | "Freshwater" | "Inshore" | "Offshore";

export type Service = {
  slug: string;
  category: ServiceCategory;
  name: string;
  locationNote: string;
  species: string[];
  priceTiers: PriceTier[];
  summary: string;
  highlights: string[];
  badge?: string;
  /** Real action shot for this trip type, if we have one on file. */
  photo?: string;
};

export const services: Service[] = [
  {
    slug: "shore-shark",
    category: "Shore",
    name: "Shore Shark Fishing",
    locationNote: "From the beach — no boat needed",
    species: ["Shark"],
    priceTiers: [{ duration: "4 Hours", price: "$400" }],
    summary:
      "Wade into the surf and battle serious shark straight from the sand. A budget-friendly, high-adrenaline trip with zero boat required.",
    highlights: [
      "All gear included",
      "No boat required",
      "Great for thrill-seekers",
    ],
    photo: "/images/catches/matt-shore-shark.jpg",
  },
  {
    slug: "inshore-bridge",
    category: "Inshore",
    name: "Bridge Fishing",
    locationNote: "From the bridge — no boat",
    species: ["Snook", "Shark"],
    priceTiers: [{ duration: "4 Hours", price: "$250" }],
    summary:
      "The most budget-friendly way to target snook and shark — fishing right from one of our go-to bridges. All gear included.",
    highlights: [
      "All gear included",
      "No boat required",
      "Our most affordable trip",
    ],
    photo: "/images/catches/matt-snook.jpg",
  },
  {
    slug: "freshwater-bass",
    category: "Freshwater",
    name: "Freshwater Fishing",
    locationNote: "Local lakes & canals",
    species: ["Peacock Bass", "Largemouth Bass", "Clown Knifefish", "Snakehead"],
    priceTiers: [{ duration: "4 Hours", price: "$200" }],
    summary:
      "Sight-fish the local lakes and canals for South Florida's wild mix of exotics — peacock bass, largemouth, clown knife, and snakehead.",
    highlights: [
      "All gear included",
      "No boat required",
      "Great for kids & first-timers",
    ],
  },
  {
    slug: "inshore-on-water",
    category: "Inshore",
    name: "Bridge & Intracoastal",
    locationNote: "On the water, by boat",
    species: ["Snook", "Shark", "Tarpon"],
    priceTiers: [{ duration: "4 Hours", price: "$500" }],
    summary:
      "We run the bridges and intracoastal by boat for a shot at snook, shark, and the one every inshore angler wants — tarpon.",
    highlights: [
      "All gear included",
      "On-the-water access to more spots",
      "Best shot at hooking a tarpon",
    ],
    badge: "Most Popular",
    photo: "/images/catches/matt-tarpon-release.jpg",
  },
  {
    slug: "offshore-reef",
    category: "Offshore",
    name: "Reef Fishing",
    locationNote: "60–120 ft reefs",
    species: ["Snapper", "Grouper"],
    priceTiers: [
      { duration: "Half Day", price: "$600" },
      { duration: "Full Day", price: "$900" },
    ],
    summary:
      "Bottom fishing the reefs for snapper, grouper, and whatever else is biting — a cooler-filling offshore classic.",
    highlights: [
      "All gear included",
      "Half or full day options",
      "Excellent table fare",
    ],
    photo: "/images/catches/dawson-grouper.jpg",
  },
  {
    slug: "offshore-game",
    category: "Offshore",
    name: "Offshore Game Fishing",
    locationNote: "Open water trolling",
    species: ["Wahoo", "King Mackerel"],
    priceTiers: [
      { duration: "Half Day", price: "$750" },
      { duration: "Full Day", price: "$1,200" },
    ],
    summary:
      "High-speed trolling for wahoo and king mackerel on Rupp outriggers — fast fish, hard runs, big rewards.",
    highlights: [
      "All gear included",
      "Half or full day options",
      "Multi-line trolling spread",
    ],
    badge: "Most Popular",
    photo: "/images/catches/dawson-wahoo.jpg",
  },
  {
    slug: "offshore-swordfish",
    category: "Offshore",
    name: "Swordfish Charter",
    locationNote: "20–30 mi offshore, deep drop",
    species: ["Swordfish"],
    priceTiers: [{ duration: "Full Day", price: "$4,500" }],
    summary:
      "The ultimate offshore pursuit. We run 20–30 miles out and deep-drop with premium electric reels for the fight of a lifetime.",
    highlights: [
      "Premium LP electric reel gear",
      "Full-day deep-drop trip",
      "Bucket-list offshore experience",
    ],
    badge: "Premium Trip",
    photo: "/images/catches/dawson-swordfish.jpg",
  },
];

export const serviceCategories: ServiceCategory[] = [
  "Shore",
  "Freshwater",
  "Inshore",
  "Offshore",
];

/** One trip per category for homepage preview — all three now have real action shots. */
export const featuredServiceSlugs = [
  "shore-shark",
  "inshore-on-water",
  "offshore-swordfish",
];
