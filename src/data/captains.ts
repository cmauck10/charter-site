export type Captain = {
  name: string;
  role: string;
  specialty: string;
  credentials: string[];
  bio: string;
  photo: string;
};

export const captains: Captain[] = [
  {
    name: "Captain Matt Mauck",
    role: "Co-Owner & Inshore Specialist",
    specialty: "Inshore Snook & Shark",
    credentials: ["Licensed USCG Captain", "Yamaha-Certified Marine Mechanic"],
    bio: "Matt grew up in Wellington, Florida, where a lifelong love of fishing turned into a career on the water. A licensed USCG captain and Yamaha-certified mechanic, he keeps the boat running right and knows exactly where the snook and shark are holding on any given tide.",
    photo: "/images/catches/matt-tarpon-surf.jpg",
  },
  {
    name: "Dawson Proodian",
    role: "Co-Owner & Offshore Specialist",
    specialty: "Offshore Wahoo, King & Deep-Water Swordfish",
    credentials: ["Offshore Game Fish Specialist", "Deep-Drop Swordfishing"],
    bio: "Dawson grew up right alongside Matt in Wellington, Florida, sharing the same passion for fishing since day one. He's built his name offshore — trolling for wahoo and king mackerel and deep-dropping for swordfish in some of the deepest water off the coast.",
    photo: "/images/catches/dawson-king-mackerel.jpg",
  },
];
