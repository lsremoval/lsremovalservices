"use client";

import { trackContactClick } from "@/lib/analytics";

export default function ContactLink({
  href,
  method,
  location,
  className,
  children,
}: {
  href: string;
  method: "call" | "text" | "email";
  location: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => trackContactClick(method, location)}
    >
      {children}
    </a>
  );
}
