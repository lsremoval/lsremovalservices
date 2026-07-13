import { telHref, smsHref } from "@/lib/business";
import ContactLink from "@/components/ContactLink";

export default function MobileCTABar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 lg:hidden border-t-2 border-navy bg-ivory grid grid-cols-2">
      <ContactLink
        href={smsHref}
        method="text"
        location="mobile_sticky_bar"
        className="flex items-center justify-center gap-2 py-4 font-mono-label text-sm font-bold uppercase text-navy border-r-2 border-navy active:bg-navy/10"
      >
        Text Us
      </ContactLink>
      <ContactLink
        href={telHref}
        method="call"
        location="mobile_sticky_bar"
        className="flex items-center justify-center gap-2 py-4 font-mono-label text-sm font-bold uppercase text-ivory bg-ember active:bg-ember-dark"
      >
        Call Now
      </ContactLink>
    </div>
  );
}
