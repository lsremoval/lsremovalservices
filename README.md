# L&S Removal Services

Fireman-owned junk removal company website — Taylorsville, NC to Charlotte, NC.

Built with Next.js 16 (App Router), Tailwind CSS v4, self-hosted fonts.

## Stack
- Next.js (SSG — all pages prerendered as static HTML for speed)
- Tailwind CSS v4
- Self-hosted fonts via `@fontsource` (no external font requests)
- Deployed on Vercel

## Local development
```bash
npm install
npm run dev
```

## Structure
- `app/services/[slug]` — individual service pages (data in `lib/services.ts`)
- `app/service-areas/[slug]` — individual city pages (data in `lib/areas.ts`)
- `lib/business.ts` — site-wide business info (phone, email, hours)
