"use client";

import { useActionState, useId } from "react";
import { CheckCircle2, Loader2, Phone } from "lucide-react";
import {
  initialBookingState,
  submitBookingInquiry,
} from "@/lib/actions/booking";
import { partySizeOptions, tripOptions } from "@/lib/booking-schema";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-xs font-medium text-red-600">{message}</p>;
}

const inputClasses =
  "w-full rounded-lg border border-navy-900/15 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder:text-ink-300 focus-visible:border-ocean-500";

const labelClasses =
  "mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-500";

export function BookingForm({
  defaultTripType,
}: {
  defaultTripType?: string;
}) {
  const [state, formAction, pending] = useActionState(
    submitBookingInquiry,
    initialBookingState,
  );
  const formId = useId();

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-ocean-700/5 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-ocean-600" />
        <h3 className="text-display text-xl font-bold uppercase tracking-wide text-navy-950">
          Inquiry Received
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-ink-500">
          {state.message}
        </p>
        <p className="text-xs text-ink-300">
          Need to talk now? Call{" "}
          <a
            href={`tel:${site.contact.phoneHref}`}
            className="font-semibold text-ocean-600"
          >
            {site.contact.phoneDisplay}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {/* Honeypot — hidden from real visitors, left empty by them. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${formId}-company`}>Company</label>
        <input
          id={`${formId}-company`}
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {state.status === "error" && state.message && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {state.message}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${formId}-name`} className={labelClasses}>
            Full Name
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Smith"
            className={inputClasses}
          />
          <FieldError message={state.fieldErrors?.name} />
        </div>

        <div>
          <label htmlFor={`${formId}-email`} className={labelClasses}>
            Email
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@example.com"
            className={inputClasses}
          />
          <FieldError message={state.fieldErrors?.email} />
        </div>

        <div>
          <label htmlFor={`${formId}-phone`} className={labelClasses}>
            Phone
          </label>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(555) 123-4567"
            className={inputClasses}
          />
          <FieldError message={state.fieldErrors?.phone} />
        </div>

        <div>
          <label htmlFor={`${formId}-preferredDate`} className={labelClasses}>
            Preferred Date
          </label>
          <input
            id={`${formId}-preferredDate`}
            name="preferredDate"
            type="date"
            required
            className={inputClasses}
          />
          <FieldError message={state.fieldErrors?.preferredDate} />
        </div>

        <div>
          <label htmlFor={`${formId}-partySize`} className={labelClasses}>
            Party Size
          </label>
          <select
            id={`${formId}-partySize`}
            name="partySize"
            required
            defaultValue=""
            className={cn(inputClasses, "appearance-none")}
          >
            <option value="" disabled>
              Select party size
            </option>
            {partySizeOptions.map((size) => (
              <option key={size} value={size}>
                {size} people
              </option>
            ))}
          </select>
          <FieldError message={state.fieldErrors?.partySize} />
        </div>

        <div>
          <label htmlFor={`${formId}-tripType`} className={labelClasses}>
            Trip Type
          </label>
          <select
            id={`${formId}-tripType`}
            name="tripType"
            required
            defaultValue={defaultTripType ?? ""}
            className={cn(inputClasses, "appearance-none")}
          >
            <option value="" disabled>
              Select a trip
            </option>
            {tripOptions.map((trip) => (
              <option key={trip.value} value={trip.value}>
                {trip.label}
              </option>
            ))}
          </select>
          <FieldError message={state.fieldErrors?.tripType} />
        </div>
      </div>

      <div>
        <label htmlFor={`${formId}-message`} className={labelClasses}>
          Anything else we should know?{" "}
          <span className="text-ink-300">(optional)</span>
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={4}
          placeholder="Special occasion, experience level, questions, etc."
          className={cn(inputClasses, "resize-none")}
        />
        <FieldError message={state.fieldErrors?.message} />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-navy-950 transition-colors hover:bg-gold-400 disabled:opacity-70"
      >
        {pending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Request This Trip"
        )}
      </button>

      <p className="flex items-center justify-center gap-1.5 text-center text-xs text-ink-300">
        <Phone className="h-3.5 w-3.5" />
        Prefer to talk? Call {site.contact.phoneDisplay}
      </p>
    </form>
  );
}
