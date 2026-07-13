import Link from "next/link";
import type { Metadata } from "next";
import DispatchTicket from "@/components/DispatchTicket";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Junk Removal Tips & Guides",
  description:
    "Practical guides on junk removal costs, estate cleanouts, garage organization, and donation vs. disposal, from L&S Removal Services in Taylorsville, NC.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <section className="bg-navy stamp-texture relative">
        <div className="absolute inset-0 bg-navy/95" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
          <p className="font-mono-label text-xs uppercase text-brass font-bold mb-3">
            Field Notes
          </p>
          <h1 className="font-display text-ivory text-5xl sm:text-6xl leading-none mb-4">
            TIPS &amp; GUIDES
          </h1>
          <p className="text-ivory/80 max-w-xl">
            Practical, no-nonsense advice on cleanouts, pricing, and getting a
            space back under control, from a crew that does this every day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-20">
        <div className="space-y-8">
          {sorted.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block border-2 border-navy/15 hover:border-ember bg-white/40 rounded-sm p-7 transition-colors"
            >
              <p className="font-mono-label text-[11px] uppercase text-brass font-bold mb-3">
                {post.category} &middot; {formatDate(post.date)} &middot;{" "}
                {post.readMinutes} min read
              </p>
              <h2 className="font-display text-3xl text-navy mb-3 leading-tight group-hover:text-ember transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-charcoal/70 leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <span className="font-mono-label text-xs uppercase text-navy group-hover:text-ember font-bold">
                Read More →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-20 sm:pb-28">
        <DispatchTicket location="blog_index_footer" />
      </section>
    </>
  );
}
