"use server";

import { bookingSchema } from "@/lib/booking-schema";

export type BookingFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<string, string>>;
};

export const initialBookingState: BookingFormState = { status: "idle" };

/**
 * Handles the booking inquiry form. There's no email/CRM integration wired
 * up yet — this validates the submission and logs it so the form is fully
 * functional end-to-end while real content/integrations are finalized.
 *
 * TODO: send this to the real inbox / CRM, e.g. via Resend, Postmark, or a
 * Google Sheet webhook, before going live.
 */
export async function submitBookingInquiry(
  _prevState: BookingFormState,
  formData: FormData,
): Promise<BookingFormState> {
  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    preferredDate: String(formData.get("preferredDate") ?? ""),
    partySize: String(formData.get("partySize") ?? ""),
    tripType: String(formData.get("tripType") ?? ""),
    message: String(formData.get("message") ?? ""),
    company: String(formData.get("company") ?? ""),
  };

  // Honeypot tripped — pretend success so bots don't learn anything useful.
  if (raw.company.length > 0) {
    return { status: "success" };
  }

  const result = bookingSchema.safeParse(raw);

  if (!result.success) {
    const fieldErrors: Partial<Record<string, string>> = {};
    for (const issue of result.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key]) {
        fieldErrors[key] = issue.message;
      }
    }
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      fieldErrors,
    };
  }

  // Stand-in for real delivery until an inbox/CRM is wired up.
  console.log("New booking inquiry received:", result.data);

  return {
    status: "success",
    message:
      "Thanks! Your inquiry is in — we'll be in touch soon to confirm your trip.",
  };
}
