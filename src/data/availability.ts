/**
 * Booking availability.
 *
 * For now, availability is simple: every Saturday & Sunday is open, with
 * both half-day and full-day slots. Once real scheduling exists (blocked
 * dates, already-booked trips, etc.) this is the place to swap in a real
 * data source — the rest of the booking UI just consumes `getAvailableDates`.
 */

export type TripDuration = "Half Day" | "Full Day";

export type AvailabilityDate = {
  /** ISO yyyy-mm-dd, used as the form value. */
  date: string;
  /** e.g. "Saturday, November 1" */
  label: string;
  slots: TripDuration[];
};

/** How far ahead we open the booking calendar. */
export const AVAILABILITY_WINDOW_DAYS = 120;

function toISODate(d: Date): string {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/** All available weekend dates from `referenceDate` through the booking window. */
export function getAvailableDates(
  referenceDate: Date = new Date(),
): AvailabilityDate[] {
  const start = new Date(
    referenceDate.getFullYear(),
    referenceDate.getMonth(),
    referenceDate.getDate(),
  );

  const dates: AvailabilityDate[] = [];
  for (let i = 0; i < AVAILABILITY_WINDOW_DAYS; i++) {
    const day = new Date(start);
    day.setDate(start.getDate() + i);
    const weekday = day.getDay(); // 0 = Sunday, 6 = Saturday
    if (weekday === 0 || weekday === 6) {
      dates.push({
        date: toISODate(day),
        label: day.toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
        }),
        slots: ["Half Day", "Full Day"],
      });
    }
  }
  return dates;
}

/** Saturday/Sunday check used to validate a submitted date server-side. */
export function isWeekendDate(isoDate: string): boolean {
  const parsed = new Date(`${isoDate}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return false;
  const weekday = parsed.getDay();
  return weekday === 0 || weekday === 6;
}
