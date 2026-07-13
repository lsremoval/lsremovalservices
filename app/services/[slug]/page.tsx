import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DispatchTicket from "@/components/DispatchTicket";
import Breadcrumbs from "@/components/Breadcrumbs";
import { services, getService } from "@/lib/services";
import { areas } from "@/lib/areas";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.name} in Taylorsville, NC to Charlotte`,
    description: `${service.summary} Serving Taylorsville, NC and the greater Charlotte area. Text a photo for a same-day quote.`,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: {
      "@type": "MovingCompany",
      name: "L&S Removal Services",
    },
    areaServed: areas.map((a) => `${a.city} NC`),
    description: service.summary,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="bg-navy stamp-texture relative">
        <div className="absolute inset-0 bg-navy/95" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-20">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: service.name },
            ]}
          />
          <p className="font-mono-label text-xs uppercase text-brass font-bold mb-3">
            Dispatch Code {service.dispatchCode} &middot; {service.eyebrow}
          </p>
          <h1 className="font-display text-ivory text-5xl sm:text-6xl leading-none mb-4">
            {service.name.toUpperCase()}
          </h1>
          <p className="text-ivory/80 max-w-xl text-lg">{service.summary}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12">
          <div>
            {service.intro.map((p, i) => (
              <p key={i} className="text-charcoal/80 leading-relaxed mb-4">
                {p}
              </p>
            ))}

            <h2 className="font-display text-2xl text-navy mt-10 mb-4">
              HOW IT WORKS
            </h2>
            <ol className="space-y-4">
              {service.process.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-display text-2xl text-ember shrink-0 w-8">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-navy">{step.title}</p>
                    <p className="text-sm text-charcoal/70">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>

            <h2 className="font-display text-2xl text-navy mt-10 mb-4">
              FAQS
            </h2>
            <div className="space-y-5">
              {service.faqs.map((f, i) => (
                <div key={i}>
                  <p className="font-semibold text-navy mb-1">{f.q}</p>
                  <p className="text-sm text-charcoal/70">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="border-2 border-navy/15 rounded-sm p-6 bg-ivory-warm sticky top-28">
              <p className="font-mono-label text-xs uppercase text-ember font-bold mb-4">
                We Take
              </p>
              <ul className="space-y-2">
                {service.whatWeTake.map((item) => (
                  <li key={item} className="text-sm text-charcoal/80 flex gap-2">
                    <span className="text-ember font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-20 sm:pb-28">
        <DispatchTicket
          code={service.dispatchCode}
          heading={`Get a ${service.shortName} Quote`}
          subheading="Text a photo of what needs to go and we'll send back a real price, fast."
        />
      </section>
    </>
  );
}
