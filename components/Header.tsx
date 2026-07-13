"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { business, telHref, smsHref } from "@/lib/business";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ivory/95 backdrop-blur border-b-2 border-navy">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
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
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-ember transition-colors">
                {l.label}
              </Link>
            ))}
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
              className="hidden sm:inline-flex items-center gap-2 rounded-sm bg-ember px-4 py-2 font-mono-label text-xs font-bold uppercase text-ivory hover:bg-ember-dark transition-colors"
            >
              {business.phone}
            </a>

            {/* Hamburger — mobile/tablet only */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="lg:hidden inline-flex flex-col justify-center items-center gap-1.5 w-11 h-11 rounded-sm border-2 border-navy shrink-0"
            >
              <span
                className={`block w-5 h-0.5 bg-navy transition-transform ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-navy transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-navy transition-transform ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav panel */}
      <nav
        id="mobile-nav"
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out bg-ivory border-t-2 border-navy ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col divide-y divide-navy/10">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 sm:px-6 py-4 font-display text-2xl text-navy hover:text-ember transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="flex sm:hidden">
            <a
              href={smsHref}
              className="flex-1 text-center px-4 py-4 font-mono-label text-xs font-bold uppercase text-navy border-r border-navy/10"
            >
              Text Us
            </a>
            <a
              href={telHref}
              className="flex-1 text-center px-4 py-4 font-mono-label text-xs font-bold uppercase text-ivory bg-ember"
            >
              Call {business.phone}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
