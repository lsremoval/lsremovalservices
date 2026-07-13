import Link from "next/link";
import Image from "next/image";
import { business, telHref, smsHref } from "@/lib/business";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur border-b-2 border-navy">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logo.webp"
              alt="L&S Removal Services"
              width={56}
              height={56}
              className="rounded-full"
              priority
            />
            <span className="font-display text-2xl tracking-wide text-navy hidden sm:block">
              L&amp;S REMOVAL SERVICES
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7 font-body text-[15px] font-medium text-navy">
            <Link href="/services" className="hover:text-ember transition-colors">
              Services
            </Link>
            <Link href="/service-areas" className="hover:text-ember transition-colors">
              Service Areas
            </Link>
            <Link href="/blog" className="hover:text-ember transition-colors">
              Blog
            </Link>
            <Link href="/about" className="hover:text-ember transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-ember transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={smsHref}
              className="hidden sm:inline-flex items-center gap-2 rounded-sm border-2 border-navy px-4 py-2 font-mono-label text-xs font-bold uppercase text-navy hover:bg-navy hover:text-ivory transition-colors"
            >
              Text Us
            </a>
            <a
              href={telHref}
              className="inline-flex items-center gap-2 rounded-sm bg-ember px-4 py-2 font-mono-label text-xs font-bold uppercase text-ivory hover:bg-ember-dark transition-colors"
            >
              {business.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
