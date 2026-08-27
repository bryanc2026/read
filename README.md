# Boom Ecommerce Coaching — Website

A Next.js 14 (App Router) + TypeScript + Tailwind rebuild of the Boom coaching site, matching the brand system and copy from the Circle mockup (bold black/yellow, capped-at-20-brands positioning, "Your Numbers" system, member results, coach profiles, reviews wall, FAQ).

## Run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Project structure

- `app/` — Next.js App Router entry (`layout.tsx`, `page.tsx`, `globals.css`, `icon.tsx`)
- `components/` — one file per page section (Hero, Differentiators, HowItWorks, Results, WhatMakesDifferent, Coaches, Testimonials, Qualification, PressAndPartners, FAQ, CTASection, Footer) plus `components/ui/` for shared primitives (Sparkline, PlaceholderImage, Icon)
- `lib/data.ts` — **all page copy lives here.** Edit headlines, stats, testimonials, FAQ answers, etc. in this one file rather than hunting through JSX.

## Adding real photos

Every photo on the site (hero, coach headshots, the conference stage image) is currently a styled placeholder built with `components/ui/PlaceholderImage.tsx` — no external images are loaded, so nothing is broken while final photography is pending.

To swap in real photos:
1. Drop the image files into `public/images/` using the filenames already referenced in `lib/data.ts` (e.g. `coach-iain.jpg`, `coach-bryan.jpg`, `hero-stage.jpg`, `conference-stage.jpg`).
2. Replace the `<PlaceholderImage ... />` usage in the relevant component with `next/image`'s `<Image src={...} alt={...} fill className="object-cover" />` inside the same wrapping `div`.

## Deploying to Vercel

1. Push this branch/repo to GitHub (already done if you're reading this on the `claude/boome-coaching-redesign-odgane` branch).
2. In Vercel: **Add New Project** → import the `bryanc2026/read` repo → framework preset auto-detects **Next.js** → Deploy. No environment variables are required yet.
3. Once you're happy with a preview deployment, point your domain (e.g. `coaching.boomecommerce.com.au`) at the Vercel project under **Settings → Domains**, and update DNS at your registrar (Vercel gives you the exact CNAME/A record).
4. Every push to this branch will generate a new Vercel preview URL; merging to `main` (or whichever branch you set as Production) ships it live.

## Known follow-ups

- **Real photography** — hero image, both coach headshots, and the conference stage photo are placeholders (see above).
- **Real logo marks** — the "Who We've Worked With", "As Featured By" and "Official Partners Of" strips currently render brand names as styled wordmarks (no external logo assets were available to fetch). Swap in real SVG/PNG logos when you have brand-safe files for Billabong, Quiksilver, Shopify, Meta, Klaviyo, etc.
- **Lead capture** — the closing CTA form currently posts nowhere (`action="#"`). Wire it to whatever you use today (HubSpot, a Calendly embed, a simple API route + email/Slack notification) before launch.
- **Next.js version** — pinned to `14.2.35` (latest patched 14.x). A handful of `npm audit` advisories only apply to Server Actions / Image Optimization API / i18n middleware, none of which this static site uses; a Next 16 major upgrade would clear them but is a separate, riskier piece of work.
- **Analytics** — no analytics/pixel wired up yet (GA4, Meta Pixel, etc.) — add before driving paid traffic.
