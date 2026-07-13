import Image from "next/image";
import type { Metadata } from "next";
import DispatchTicket from "@/components/DispatchTicket";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "L&S Removal Services is a firefighter-owned junk removal company founded by Caleb and Jeremy, based in Taylorsville, NC, serving the corridor to Charlotte.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy stamp-texture relative">
        <div className="absolute inset-0 bg-navy/95" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
          <p className="font-mono-label text-xs uppercase text-brass font-bold mb-3">
            Our Story
          </p>
          <h1 className="font-display text-ivory text-5xl sm:text-6xl leading-none mb-4">
            FIREFIGHTER-OWNED. NEIGHBOR-RUN.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 items-start">
        <div className="space-y-5 text-charcoal/80 leading-relaxed">
          <p>
            L&amp;S Removal Services was founded by Caleb and Jeremy, two
            partners who set out to bring reliable, fairly priced junk
            removal to Taylorsville and the surrounding area — the kind of
            service where the crew shows up on time, quotes it straight, and
            treats every property with respect.
          </p>
          <p>
            As a working firefighter, Caleb brings the same standards to
            every job that the fire service demands — discipline,
            reliability, and a level head under a heavy couch on a narrow
            staircase. That&rsquo;s not a marketing line, it&rsquo;s just how
            the crew operates.
          </p>
          <p>
            No job is too small. Whether it&rsquo;s a single item pickup or
            an entire property cleanout, we handle it the same way — with a
            straight quote and a crew that actually shows up.
          </p>
          <p>
            We started with single-item furniture pickups around Alexander
            County and have grown to cover the full corridor from
            Taylorsville to Charlotte — handling everything from a single
            recliner to full estate cleanouts, garage-to-attic clearouts,
            and post-storm yard debris.
          </p>
          <p>
            No call centers, no long intake forms — just text a photo or
            call, and you&rsquo;ll talk to someone who can actually quote the
            job.
          </p>
        </div>

        <div className="justify-self-center lg:justify-self-end">
          <div className="rotate-2 bg-ivory p-3 rounded-sm shadow-xl border border-navy/10">
            <Image
              src="/images/logo.webp"
              alt="L&S Removal Services stamp logo"
              width={320}
              height={320}
              className="w-64 h-auto"
            />
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-20 sm:pb-28">
        <DispatchTicket />
      </section>
    </>
  );
}

