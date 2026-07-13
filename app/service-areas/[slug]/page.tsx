import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DispatchTicket from "@/components/DispatchTicket";
import { areas, getArea } from "@/lib/areas";
import { services } from "@/lib/services";

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return {
    title: `Junk Removal in ${area.city}, NC`,
    description: `Furniture, appliance, garage, attic, shed and estate cleanout junk removal serving ${area.city}, NC. Text a photo for a same-day quote from L&S Removal Services.`,
    alternates: { canonical: `/service-areas/${area.slug}` },
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: "L&S Removal Services",
    areaServed: {
      "@type": "City",
      name: area.city,
      containedInPlace: { "@type": "State", name: "North Carolina" },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-navy stamp-texture relative">
        <div className="absolute inset-0 bg-navy/95" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-20">
          <Link
            href="/service-areas"
            className="font-mono-label text-xs uppercase text-brass hover:text-ivory transition-colors"
          >
            ← All Service Areas
          </Link>
          <p className="font-mono-label text-xs uppercase text-brass font-bold mt-5 mb-3">
            {area.county} &middot; {area.distanceNote}
          </p>
          <h1 className="font-display text-ivory text-5xl sm:text-6xl leading-none mb-4">
            JUNK REMOVAL IN {area.city.toUpperCase()}, NC
          </h1>
          <p className="text-ivory/80 max-w-xl text-lg">{area.blurb}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-20">
        <h2 className="font-display text-2xl text-navy mb-4">
          SERVICES AVAILABLE IN {area.city.toUpperCase()}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="border border-navy/20 hover:border-ember rounded-sm px-5 py-4 transition-colors"
            >
              <p className="font-display text-xl text-navy leading-none mb-1">
                {s.shortName}
              </p>
              <p className="text-xs text-charcoal/60">{s.eyebrow}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-20 sm:pb-28">
        <DispatchTicket
          heading={`Serving ${area.city}, NC`}
          subheading="Text a photo of what needs to go and we'll send back a real price, fast."
        />
      </section>
    </>
  );
}
