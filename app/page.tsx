import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import DispatchTicket from "@/components/DispatchTicket";
import Testimonials from "@/components/Testimonials";
import ContactLink from "@/components/ContactLink";
import { services } from "@/lib/services";
import { areas } from "@/lib/areas";
import { business, telHref, smsHref } from "@/lib/business";

export const metadata: Metadata = {
  title: "Junk Removal in Taylorsville, NC to Charlotte",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy stamp-texture">
        <div className="absolute inset-0 bg-navy/95" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
          <div>
            <p className="font-mono-label text-xs uppercase text-brass font-bold mb-5">
              Taylorsville, NC to Charlotte
            </p>
            <h1 className="font-display text-ivory leading-[0.92] text-[15vw] sm:text-6xl lg:text-7xl mb-6">
              IF IT NEEDS TO GO,
              <br />
              <span className="text-ember-glow">WE&rsquo;RE ALREADY EN ROUTE.</span>
            </h1>
            <p className="text-ivory/80 text-lg max-w-xl mb-8 leading-relaxed">
              Locally owned junk removal for furniture, appliances, garages,
              attics, sheds, and full property cleanouts. Text a photo,
              get a real price, and never lift a finger.
            </p>
            <div className="flex flex-wrap gap-3">
              <ContactLink
                href={smsHref}
                method="text"
                location="homepage_hero"
                className="inline-flex items-center justify-center rounded-sm border-2 border-ivory px-7 py-4 font-mono-label text-sm font-bold uppercase text-ivory hover:bg-ivory hover:text-navy transition-colors"
              >
                Text a Photo, Get a Quote
              </ContactLink>
              <ContactLink
                href={telHref}
                method="call"
                location="homepage_hero"
                className="inline-flex items-center justify-center rounded-sm bg-ember px-7 py-4 font-mono-label text-sm font-bold uppercase text-ivory hover:bg-ember-dark transition-colors"
              >
                Call {business.phone}
              </ContactLink>
            </div>
          </div>

          <div className="justify-self-center">
            <div className="-rotate-3 bg-ivory p-3 rounded-sm shadow-2xl">
              <Image
                src="/images/logo.webp"
                alt="L&S Removal Services stamp logo"
                width={340}
                height={340}
                priority
                sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 320px"
                className="w-56 sm:w-72 lg:w-80 h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-ivory-warm border-b-2 border-navy/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            ["Locally Owned", "Accountable & reliable"],
            ["Same-Day Quotes", "Text a photo, get a price"],
            ["No Forms", "Just call or text"],
            ["Taylorsville → Charlotte", "Full corridor coverage"],
          ].map(([title, sub]) => (
            <div key={title}>
              <p className="font-display text-lg text-navy leading-tight">{title}</p>
              <p className="text-xs text-charcoal/60">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-2xl mb-12">
          <p className="font-mono-label text-xs uppercase text-ember font-bold mb-3">
            What We Haul
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-navy leading-none mb-4">
            SIX WAYS WE CLEAR YOUR SPACE
          </h2>
          <p className="text-charcoal/70">
            One truck, one crew, no job too awkward. If you&rsquo;re not sure it
            fits a category, it probably still fits in the truck.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group border-2 border-navy/15 hover:border-ember bg-white/40 rounded-sm p-6 transition-colors"
            >
              <p className="font-mono-label text-[11px] uppercase text-brass font-bold mb-3">
                {s.eyebrow}
              </p>
              <h3 className="font-display text-2xl text-navy mb-2 leading-tight group-hover:text-ember transition-colors">
                {s.name}
              </h3>
              <p className="text-sm text-charcoal/70 leading-relaxed mb-4">
                {s.summary}
              </p>
              <span className="font-mono-label text-xs uppercase text-navy group-hover:text-ember font-bold inline-flex items-center gap-1">
                View Service →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* RECENT JOBS GALLERY */}
      <section className="bg-ivory-warm border-y-2 border-navy/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="max-w-2xl mb-10">
            <p className="font-mono-label text-xs uppercase text-ember font-bold mb-3">
              Recent Jobs
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-navy leading-none mb-4">
              REAL LOADS, REAL JOBS
            </h2>
            <p className="text-charcoal/70">
              No stock photos. This is the actual trailer, on actual jobs
              around Taylorsville and Hickory.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { src: "/images/job-trailer-loaded-1.webp", alt: "Loaded dump trailer full of household junk ready for haul-off" },
              { src: "/images/job-trailer-loaded-2.webp", alt: "L&S Removal Services trailer loaded with furniture and debris in a backyard" },
              { src: "/images/job-yard-debris-before.webp", alt: "Backyard full of yard debris, old lumber, and clutter before cleanout" },
              { src: "/images/job-yard-cleared-after.webp", alt: "Side yard cleared and cleaned up after a junk removal job" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-sm border-2 border-navy/10">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES / WHO'S SHOWING UP */}
      <section className="bg-navy text-ivory">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono-label text-xs uppercase text-brass font-bold mb-3">
              Who&rsquo;s Showing Up
            </p>
            <h2 className="font-display text-4xl sm:text-5xl leading-none mb-6">
              LOCAL. RELIABLE. NEIGHBOR-RUN.
            </h2>
            <p className="text-ivory/80 leading-relaxed mb-4">
              L&amp;S Removal Services is a locally owned crew serving
              Taylorsville and the surrounding area. One of our founders
              works as a firefighter, and that same discipline and
              reliability shows up on every job we run.
            </p>
            <p className="text-ivory/80 leading-relaxed">
              That means showing up when we say we will, treating your home
              like it&rsquo;s ours to protect, and doing the job right the
              first time, with no shortcuts and no surprises on the bill.
            </p>
          </div>
          <DispatchTicket
            heading="Talk to a real person"
            subheading="No call centers, no automated forms. Just text or call and we'll quote it straight."
            location="homepage_values_section"
          />
        </div>
      </section>

      <Testimonials />

      {/* SERVICE AREA */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-2xl mb-10">
          <p className="font-mono-label text-xs uppercase text-ember font-bold mb-3">
            Coverage Area
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-navy leading-none mb-4">
            TAYLORSVILLE TO CHARLOTTE
          </h2>
          <p className="text-charcoal/70">
            Based in Taylorsville and running the full corridor toward
            Charlotte. If your town isn&rsquo;t listed, text us anyway,
            there&rsquo;s a good chance we still cover it.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {areas.map((a) => (
            <Link
              key={a.slug}
              href={`/service-areas/${a.slug}`}
              className="border border-navy/20 hover:border-ember hover:bg-ivory-warm rounded-sm px-4 py-3 transition-colors"
            >
              <p className="font-display text-xl text-navy leading-none">{a.city}</p>
              <p className="font-mono-label text-[10px] uppercase text-charcoal/50 mt-1">
                {a.distanceNote}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-20 sm:pb-28">
        <DispatchTicket location="homepage_final_cta" />
      </section>
    </>
  );
}
