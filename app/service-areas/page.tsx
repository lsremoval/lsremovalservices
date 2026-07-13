import Link from "next/link";
import type { Metadata } from "next";
import DispatchTicket from "@/components/DispatchTicket";
import { areas } from "@/lib/areas";

export const metadata: Metadata = {
  title: "Service Areas | Taylorsville to Charlotte, NC",
  description:
    "L&S Removal Services covers Taylorsville, Hickory, Statesville, Lenoir, Newton, Mooresville, Cornelius, Huntersville, and Charlotte, NC.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-navy stamp-texture relative">
        <div className="absolute inset-0 bg-navy/95" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
          <p className="font-mono-label text-xs uppercase text-brass font-bold mb-3">
            Coverage Map
          </p>
          <h1 className="font-display text-ivory text-5xl sm:text-6xl leading-none mb-4">
            TAYLORSVILLE TO CHARLOTTE
          </h1>
          <p className="text-ivory/80 max-w-xl">
            Based in Taylorsville, running the full corridor toward
            Charlotte. Don&rsquo;t see your town? Text us. There&rsquo;s a
            good chance we still cover it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.map((a) => (
            <Link
              key={a.slug}
              href={`/service-areas/${a.slug}`}
              className="group border-2 border-navy/15 hover:border-ember bg-white/40 rounded-sm p-6 transition-colors"
            >
              <p className="font-mono-label text-[11px] uppercase text-brass font-bold mb-2">
                {a.county}
              </p>
              <h2 className="font-display text-3xl text-navy mb-2 leading-tight group-hover:text-ember transition-colors">
                {a.city}, NC
              </h2>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                {a.distanceNote}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-20 sm:pb-28">
        <DispatchTicket location="service_areas_index_footer" />
      </section>
    </>
  );
}
