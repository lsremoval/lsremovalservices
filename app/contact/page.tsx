import type { Metadata } from "next";
import { business, telHref, smsHref, mailHref } from "@/lib/business";
import ContactLink from "@/components/ContactLink";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Text or call L&S Removal Services for a same-day junk removal quote. Serving Taylorsville, NC to Charlotte.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy stamp-texture relative">
        <div className="absolute inset-0 bg-navy/95" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-20">
          <p className="font-mono-label text-xs uppercase text-brass font-bold mb-3">
            Get A Quote
          </p>
          <h1 className="font-display text-ivory text-5xl sm:text-6xl leading-none mb-4">
            TEXT US. CALL US. THAT&rsquo;S IT.
          </h1>
          <p className="text-ivory/80 max-w-xl text-lg">
            No forms, no waiting on a callback from a call center. Send a
            photo of what needs to go and we&rsquo;ll quote it straight.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          <ContactLink
            href={smsHref}
            method="text"
            location="contact_page"
            className="border-2 border-navy rounded-sm p-8 hover:bg-navy hover:text-ivory transition-colors group"
          >
            <p className="font-mono-label text-xs uppercase text-ember font-bold mb-3">
              Fastest Response
            </p>
            <p className="font-display text-3xl text-navy group-hover:text-ivory mb-2">
              TEXT US
            </p>
            <p className="text-sm text-charcoal/70 group-hover:text-ivory/80">
              Send a photo of what needs to go and your general location.
              {" "}
              <span className="font-mono-label">{business.phone}</span>
            </p>
          </ContactLink>

          <ContactLink
            href={telHref}
            method="call"
            location="contact_page"
            className="border-2 border-ember bg-ember text-ivory rounded-sm p-8 hover:bg-ember-dark transition-colors"
          >
            <p className="font-mono-label text-xs uppercase text-ivory/80 font-bold mb-3">
              Talk It Through
            </p>
            <p className="font-display text-3xl mb-2">CALL NOW</p>
            <p className="text-sm text-ivory/90 font-mono-label">
              {business.phone}
            </p>
          </ContactLink>
        </div>

        <div className="border-t border-navy/10 pt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <p className="font-mono-label text-xs uppercase text-brass font-bold mb-2">
              Email
            </p>
            <ContactLink
              href={mailHref}
              method="email"
              location="contact_page"
              className="text-navy hover:text-ember break-all"
            >
              {business.email}
            </ContactLink>
          </div>
          <div>
            <p className="font-mono-label text-xs uppercase text-brass font-bold mb-2">
              Hours
            </p>
            {business.hours.map((h) => (
              <p key={h.day} className="text-sm text-charcoal/80">
                {h.day}: {h.time}
              </p>
            ))}
          </div>
          <div>
            <p className="font-mono-label text-xs uppercase text-brass font-bold mb-2">
              Service Area
            </p>
            <p className="text-sm text-charcoal/80">
              Taylorsville, NC to Charlotte, NC
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
