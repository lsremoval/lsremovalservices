import { reviews } from "@/lib/reviews";

function Stars({ rating }: { rating: number }) {
  return (
    <div
      role="img"
      aria-label={`${rating} out of 5 stars`}
      className="flex gap-0.5 text-ember"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={i < rating ? 0 : 1.5}
          className="w-4 h-4"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-2xl mb-10">
        <p className="font-mono-label text-xs uppercase text-ember font-bold mb-3">
          What Customers Say
        </p>
        <h2 className="font-display text-4xl sm:text-5xl text-navy leading-none mb-4">
          REAL REVIEWS FROM REAL JOBS
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {reviews.map((r) => (
          <div
            key={r.name}
            className="border-2 border-navy/15 bg-white/40 rounded-sm p-6"
          >
            <Stars rating={r.rating} />
            <p className="text-charcoal/80 leading-relaxed my-4">
              &ldquo;{r.text}&rdquo;
            </p>
            <p className="font-mono-label text-xs uppercase text-brass font-bold">
              {r.name} &middot; {r.source}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
