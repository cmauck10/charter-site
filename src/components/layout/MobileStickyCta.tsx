import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";

/** Persistent mobile-only booking bar — keeps the primary conversion actions one thumb-tap away. */
export function MobileStickyCta() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex gap-3 border-t border-navy-800/10 bg-sand-50/95 p-3 backdrop-blur-sm lg:hidden"
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 0.75rem)" }}
    >
      <Button
        href={`tel:${site.contact.phoneHref}`}
        variant="outline"
        size="md"
        className="flex-1"
      >
        <Phone className="h-4 w-4" />
        Call
      </Button>
      <Button href="/book" variant="gold" size="md" className="flex-1">
        Book Now
      </Button>
    </div>
  );
}
