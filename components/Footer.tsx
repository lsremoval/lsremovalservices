import Link from "next/link";
import { business, telHref, mailHref } from "@/lib/business";
import { services } from "@/lib/services";
import { areas } from "@/lib/areas";

export default function Footer() {
  return (
    <footer className="bg-navy text-ivory">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <p className="font-display text-2xl tracking-wide mb-3">
            L&amp;S REMOVAL SERVICES
          </p>
          <p className="text-sm text-ivory/70 leading-relaxed mb-4">
            Locally owned junk removal serving Taylorsville, NC and every stop
            on the way to Charlotte.
          </p>
          <p className="font-mono-label text-xs uppercase text-brass">
            {business.hours[0].day}: {business.hours[0].time}
            <br />
            {business.hours[1].day}: {business.hours[1].time}
          </p>
        </div>

        <div>
          <p className="font-mono-label text-xs uppercase text-brass mb-4">
            Services
          </p>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-ember transition-colors">
                  {s.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono-label text-xs uppercase text-brass mb-4">
            Service Areas
          </p>
          <ul className="space-y-2 text-sm">
            {areas.slice(0, 6).map((a) => (
              <li key={a.slug}>
                <Link href={`/service-areas/${a.slug}`} className="hover:text-ember transition-colors">
                  {a.city}, NC
                </Link>
              </li>
            ))}
            <li>
              <Link href="/service-areas" className="hover:text-ember transition-colors font-semibold">
                View All Areas →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-mono-label text-xs uppercase text-brass mb-4">
            Get In Touch
          </p>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/blog" className="hover:text-ember transition-colors">
                Tips &amp; Guides
              </Link>
            </li>
            <li>
              <a href={telHref} className="hover:text-ember transition-colors">
                {business.phone}
              </a>
            </li>
            <li>
              <a href={mailHref} className="hover:text-ember transition-colors break-all">
                {business.email}
              </a>
            </li>
            <li className="text-ivory/70">
              Taylorsville, NC &amp; surrounding area
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/15">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs text-ivory/60">
          <p>© {new Date().getFullYear()} L&amp;S Removal Services. All rights reserved.</p>
          <p>Locally owned &amp; operated.</p>
        </div>
      </div>
    </footer>
  );
}
