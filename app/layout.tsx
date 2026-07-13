import type { Metadata } from "next";
import "@fontsource/bebas-neue/400.css";
import "@fontsource/libre-franklin/400.css";
import "@fontsource/libre-franklin/500.css";
import "@fontsource/libre-franklin/600.css";
import "@fontsource/libre-franklin/700.css";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCTABar from "@/components/MobileCTABar";
import { business } from "@/lib/business";
import { areas } from "@/lib/areas";
import { reviews } from "@/lib/reviews";

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: `${business.name} | Junk Removal in Taylorsville, NC`,
    template: `%s | ${business.name}`,
  },
  description:
    "Locally owned junk removal serving Taylorsville, NC to Charlotte. Furniture, appliance, garage, attic, shed & estate cleanouts. Text a photo for a same-day quote.",
  keywords: [
    "junk removal Taylorsville NC",
    "junk removal near me",
    "furniture removal",
    "appliance removal",
    "estate cleanout",
    "garage cleanout",
    "junk removal Charlotte NC",
    "junk removal Hickory NC",
  ],
  openGraph: {
    title: `${business.name} | Junk Removal, Taylorsville to Charlotte`,
    description:
      "Furniture, appliance, garage, attic, shed & estate cleanouts across Taylorsville, NC to Charlotte. Text a photo for a same-day quote.",
    url: business.url,
    siteName: business.name,
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | Junk Removal, Taylorsville to Charlotte`,
    description:
      "Furniture, appliance, garage, attic, shed & estate cleanouts across Taylorsville, NC to Charlotte.",
    images: ["/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/images/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: business.name,
    image: `${business.url}/images/icon-512.png`,
    telephone: business.phoneRaw,
    email: business.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Taylorsville",
      addressRegion: "NC",
      addressCountry: "US",
    },
    areaServed: areas.map((a) => `${a.city} NC`),
    url: business.url,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: (
        reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
      ).toFixed(1),
      reviewCount: reviews.length,
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
      },
      reviewBody: r.text,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "19:00",
      },
    ],
  };

  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1 pb-20 lg:pb-0">{children}</main>
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  );
}
