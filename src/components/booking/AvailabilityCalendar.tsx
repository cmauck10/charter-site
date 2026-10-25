"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import { getAvailableDates, type AvailabilityDate } from "@/data/availability";
import { cn } from "@/lib/utils";

const WEEKDAY_LABELS = ["S", "M", "T", "W", "T", "F", "S"];

function startOfMonth(d: Date): Date {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

function addMonths(d: Date, amount: number): Date {
  return new Date(d.getFullYear(), d.getMonth() + amount, 1);
}

function isSameMonth(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
}

function toISODate(d: Date): string {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/** 42-cell (6x7) grid of the given month, padded with `null` outside it. */
function buildMonthGrid(monthStart: Date): (Date | null)[] {
  const year = monthStart.getFullYear();
  const month = monthStart.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startWeekday = new Date(year, month, 1).getDay();

  const cells: (Date | null)[] = [];
  for (let i = 0; i < startWeekday; i++) cells.push(null);
  for (let day = 1; day <= daysInMonth; day++) cells.push(new Date(year, month, day));
  while (cells.length < 42) cells.push(null);
  return cells;
}

/**
 * Compact date field: collapses to a single input-height trigger button, and
 * only expands into the full month grid in a floating popover on demand.
 *
 * `getAvailableDates()` reads the current date, which Next.js won't allow
 * during prerendering of this statically-generated route. So it's only ever
 * called lazily from the trigger's `onClick` — a real event handler, which
 * always runs client-side after the page is already interactive, never
 * during the server prerender.
 */
export function AvailabilityCalendar({ name }: { name: string }) {
  const [open, setOpen] = useState(false);
  const [availability, setAvailability] = useState<AvailabilityDate[] | null>(
    null,
  );
  const [visibleMonth, setVisibleMonth] = useState<Date | null>(null);
  const [selected, setSelected] = useState<AvailabilityDate | undefined>();
  const containerRef = useRef<HTMLDivElement>(null);

  const availabilityByDate = useMemo(() => {
    const map = new Map<string, AvailabilityDate>();
    for (const entry of availability ?? []) map.set(entry.date, entry);
    return map;
  }, [availability]);

  const firstAvailableMonth = useMemo(() => {
    if (!availability?.length) return null;
    return startOfMonth(new Date(`${availability[0].date}T00:00:00`));
  }, [availability]);

  const lastAvailableMonth = useMemo(() => {
    if (!availability?.length) return null;
    return startOfMonth(
      new Date(`${availability[availability.length - 1].date}T00:00:00`),
    );
  }, [availability]);

  // Close on outside click / Escape — subscribing to document-level events,
  // not synchronizing render state, so setState here is fine inside the effect.
  useEffect(() => {
    if (!open) return;
    function handlePointerDown(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function handleTriggerClick() {
    setOpen((wasOpen) => {
      const nextOpen = !wasOpen;
      if (nextOpen && availability === null) {
        const dates = getAvailableDates();
        setAvailability(dates);
        setVisibleMonth(
          dates[0] ? startOfMonth(new Date(`${dates[0].date}T00:00:00`)) : null,
        );
      }
      return nextOpen;
    });
  }

  const canGoPrev = Boolean(
    visibleMonth && firstAvailableMonth && visibleMonth > firstAvailableMonth,
  );
  const canGoNext = Boolean(
    visibleMonth && lastAvailableMonth && visibleMonth < lastAvailableMonth,
  );
  const cells = useMemo(
    () => (visibleMonth ? buildMonthGrid(visibleMonth) : []),
    [visibleMonth],
  );

  return (
    <div ref={containerRef} className="relative">
      <input type="hidden" name={name} value={selected?.date ?? ""} />

      <button
        type="button"
        onClick={handleTriggerClick}
        aria-haspopup="dialog"
        aria-expanded={open}
        className={cn(
          "flex w-full items-center gap-2 rounded-lg border border-navy-900/15 bg-white px-4 py-2.5 text-left text-sm focus-visible:border-ocean-500",
          selected ? "text-ink-900" : "text-ink-300",
        )}
      >
        <CalendarDays className="h-4 w-4 flex-shrink-0 text-ocean-600" />
        <span className="truncate">
          {selected ? selected.label : "Select an available date"}
        </span>
      </button>

      {open && visibleMonth && (
        <div className="absolute left-0 top-full z-30 mt-2 w-[290px] rounded-xl border border-navy-900/15 bg-white p-3 shadow-[0_18px_40px_-12px_rgba(13,27,38,0.35)]">
          <div className="flex items-center justify-between">
            <button
              type="button"
              aria-label="Previous month"
              disabled={!canGoPrev}
              onClick={() => setVisibleMonth((m) => (m ? addMonths(m, -1) : m))}
              className="rounded-full p-1.5 text-ink-500 transition-colors hover:bg-sand-100 disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-navy-950">
              {visibleMonth.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })}
            </p>
            <button
              type="button"
              aria-label="Next month"
              disabled={!canGoNext}
              onClick={() => setVisibleMonth((m) => (m ? addMonths(m, 1) : m))}
              className="rounded-full p-1.5 text-ink-500 transition-colors hover:bg-sand-100 disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-2 grid grid-cols-7 gap-0.5 text-center text-[9px] font-bold uppercase tracking-wide text-ink-300">
            {WEEKDAY_LABELS.map((label, i) => (
              <span key={i}>{label}</span>
            ))}
          </div>

          <div className="mt-0.5 grid grid-cols-7 gap-0.5">
            {cells.map((day, i) => {
              if (!day || !isSameMonth(day, visibleMonth)) {
                return <span key={i} aria-hidden="true" />;
              }
              const iso = toISODate(day);
              const info = availabilityByDate.get(iso);
              const isSelected = selected?.date === iso;
              return (
                <button
                  key={iso}
                  type="button"
                  disabled={!info}
                  aria-pressed={isSelected}
                  onClick={() => {
                    if (!info) return;
                    setSelected(info);
                    setOpen(false);
                  }}
                  className={cn(
                    "aspect-square rounded-md text-[11px] font-semibold transition-colors",
                    info
                      ? "bg-gold-300 text-navy-950 hover:bg-gold-400"
                      : "cursor-not-allowed text-ink-300",
                    isSelected &&
                      "bg-gold-500 text-navy-950 hover:bg-gold-500",
                  )}
                >
                  {day.getDate()}
                </button>
              );
            })}
          </div>

          <p className="mt-2 text-[10px] leading-relaxed text-ink-300">
            Gold dates are open — Sat & Sun, half &amp; full day trips.
          </p>
        </div>
      )}
    </div>
  );
}
