import { telHref, smsHref, business } from "@/lib/business";
import ContactLink from "@/components/ContactLink";

export default function DispatchTicket({
  heading = "Ready when you are",
  subheading = "Text a photo of what needs to go. Most jobs get a real quote back same day.",
  location = "dispatch_ticket",
}: {
  heading?: string;
  subheading?: string;
  location?: string;
}) {
  return (
    <div className="ticket-notch bg-ivory-warm border-2 border-dashed border-navy/60 rounded-sm px-6 py-8 sm:px-10 sm:py-10 max-w-3xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <p className="font-mono-label text-xs uppercase text-ember font-bold mb-2">
            Get A Quote
          </p>
          <h3 className="font-display text-3xl sm:text-4xl text-navy leading-none mb-2">
            {heading}
          </h3>
          <p className="text-sm text-charcoal/80 max-w-md">{subheading}</p>
        </div>
        <div className="flex sm:flex-col gap-3 shrink-0">
          <ContactLink
            href={smsHref}
            method="text"
            location={location}
            className="flex-1 sm:flex-none inline-flex items-center justify-center rounded-sm border-2 border-navy px-6 py-3 font-mono-label text-xs font-bold uppercase text-navy hover:bg-navy hover:text-ivory transition-colors whitespace-nowrap"
          >
            Text Us
          </ContactLink>
          <ContactLink
            href={telHref}
            method="call"
            location={location}
            className="flex-1 sm:flex-none inline-flex items-center justify-center rounded-sm bg-ember px-6 py-3 font-mono-label text-xs font-bold uppercase text-ivory hover:bg-ember-dark transition-colors whitespace-nowrap"
          >
            {business.phone}
          </ContactLink>
        </div>
      </div>
    </div>
  );
}
