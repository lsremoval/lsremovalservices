import Link from "next/link";
import type { Metadata } from "next";
import DispatchTicket from "@/components/DispatchTicket";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Junk Removal Services",
  description:
    "Furniture, appliance, garage, attic, shed, estate, and yard debris removal serving Taylorsville, NC to Charlotte. Text a photo for a same-day quote.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy stamp-texture relative">
        <div className="absolute inset-0 bg-navy/95" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
          <p className="font-mono-label text-xs uppercase text-brass font-bold mb-3">
            Full Service List
          </p>
          <h1 className="font-display text-ivory text-5xl sm:text-6xl leading-none mb-4">
            WHAT WE HAUL
          </h1>
          <p className="text-ivory/80 max-w-xl">
            From a single couch to a full property cleanout — here&rsquo;s
            everything L&amp;S Removal Services handles across Taylorsville
            and the Charlotte corridor.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group border-2 border-navy/15 hover:border-ember bg-white/40 rounded-sm p-7 transition-colors"
            >
              <p className="font-mono-label text-[11px] uppercase text-brass font-bold mb-3">
                {s.eyebrow}
              </p>
              <h2 className="font-display text-3xl text-navy mb-3 leading-tight group-hover:text-ember transition-colors">
                {s.name}
              </h2>
              <p className="text-sm text-charcoal/70 leading-relaxed mb-4">
                {s.summary}
              </p>
              <span className="font-mono-label text-xs uppercase text-navy group-hover:text-ember font-bold">
                View Details →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-20 sm:pb-28">
        <DispatchTicket />
      </section>
    </>
  );
}
