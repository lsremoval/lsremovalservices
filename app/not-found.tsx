import Link from "next/link";
import DispatchTicket from "@/components/DispatchTicket";

export default function NotFound() {
  return (
    <>
      <section className="bg-navy stamp-texture relative">
        <div className="absolute inset-0 bg-navy/95" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 py-20 sm:py-28 text-center">
          <p className="font-mono-label text-xs uppercase text-brass font-bold mb-3">
            Page Not Found
          </p>
          <h1 className="font-display text-ivory text-6xl sm:text-7xl leading-none mb-5">
            NOTHING HERE TO HAUL
          </h1>
          <p className="text-ivory/80 max-w-lg mx-auto mb-8">
            That page doesn&rsquo;t exist, but if there&rsquo;s something at
            your place that does, we can still help with that.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-sm border-2 border-ivory px-7 py-4 font-mono-label text-sm font-bold uppercase text-ivory hover:bg-ivory hover:text-navy transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <DispatchTicket location="404_page" />
      </section>
    </>
  );
}
