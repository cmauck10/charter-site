import { z } from "zod";
import { services } from "@/data/services";
import { isWeekendDate } from "@/data/availability";

export const tripOptions = [
  ...services.map((s) => ({ value: s.slug, label: `${s.name} (${s.category})` })),
  { value: "not-sure", label: "Not sure yet" },
];

export const partySizeOptions = ["1", "2", "3", "4", "5+"] as const;

export const bookingSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number."),
  preferredDate: z
    .string()
    .trim()
    .min(1, "Please choose a preferred date.")
    .refine(isWeekendDate, "Please choose an available date from the calendar."),
  partySize: z.enum(partySizeOptions, {
    error: "Please select your party size.",
  }),
  tripType: z.string().trim().min(1, "Please select a trip type."),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
  // Honeypot — real visitors never see or fill this field.
  company: z.string().max(0).optional().or(z.literal("")),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;
