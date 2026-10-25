import { Cross } from "lucide-react";

export function VerseCard({
  verse,
  reference,
}: {
  verse: string;
  reference: string;
}) {
  return (
    <div className="rounded-2xl border border-gold-400/20 bg-sand-50/5 p-6">
      <Cross className="h-5 w-5 text-gold-400" strokeWidth={2} />
      <p className="text-display mt-4 text-base italic leading-relaxed text-sand-100/90 sm:text-lg">
        &ldquo;{verse}&rdquo;
      </p>
      <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-gold-300">
        {reference}
      </p>
    </div>
  );
}
