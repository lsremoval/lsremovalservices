export const GA_MEASUREMENT_ID = "G-250Y6ZG2QQ";

type ContactMethod = "call" | "text" | "email";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Fires a GA4 event when someone taps a call/text/email link. */
export function trackContactClick(method: ContactMethod, location: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "contact_click", {
      method,
      link_location: location,
    });
  }
}

