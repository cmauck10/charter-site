// TODO: replace with real guest reviews (Google / Facebook / TripAdvisor).

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Best charter we've ever booked. The captain put us on fish within the first twenty minutes and made sure every kid in our group landed one.",
    name: "Sample Guest",
    detail: "Half-Day Inshore Trip",
    rating: 5,
  },
  {
    quote:
      "Professional, patient, and genuinely fun to be out on the water with. We booked the full-day trip and came back with a cooler full of fillets.",
    name: "Sample Guest",
    detail: "Full-Day Nearshore Trip",
    rating: 5,
  },
  {
    quote:
      "Rented the whole boat for a company outing and it was a hit. Everything was organized, safe, and the fishing was unreal.",
    name: "Sample Guest",
    detail: "Private Charter",
    rating: 5,
  },
];
