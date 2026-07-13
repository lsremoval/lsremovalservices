import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DispatchTicket from "@/components/DispatchTicket";
import { blogPosts, getBlogPost } from "@/lib/blog";
import { business } from "@/lib/business";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: business.name },
    publisher: { "@type": "Organization", name: business.name },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-navy stamp-texture relative">
        <div className="absolute inset-0 bg-navy/95" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-20">
          <Link
            href="/blog"
            className="font-mono-label text-xs uppercase text-brass hover:text-ivory transition-colors"
          >
            ← All Articles
          </Link>
          <p className="font-mono-label text-xs uppercase text-brass font-bold mt-5 mb-3">
            {post.category} &middot; {formatDate(post.date)} &middot;{" "}
            {post.readMinutes} min read
          </p>
          <h1 className="font-display text-ivory text-4xl sm:text-5xl leading-[1.05]">
            {post.title}
          </h1>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-20">
        {post.body.map((section, i) => (
          <div key={i} className="mb-8">
            {section.heading && (
              <h2 className="font-display text-2xl text-navy mb-3">
                {section.heading}
              </h2>
            )}
            {section.paragraphs.map((p, j) => (
              <p key={j} className="text-charcoal/80 leading-relaxed mb-4">
                {p}
              </p>
            ))}
            {section.list && (
              <ul className="space-y-2 mb-4">
                {section.list.map((item, k) => (
                  <li key={k} className="text-charcoal/80 flex gap-2">
                    <span className="text-ember font-bold shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </article>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-20 sm:pb-28">
        <DispatchTicket
          heading="Have a job like this?"
          subheading="Text a photo of what needs to go — we'll quote it fast."
        />
      </section>
    </>
  );
}
