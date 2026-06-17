# JSR Akademy — Premium Training Website

A production-ready marketing site for an educational training institute, built with a high-end edtech aesthetic: deep-blue gradients, a fluorescent-green spotlight accent, glassmorphism cards, and tasteful scroll/hover motion.

## Tech Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with brand tokens configured in `tailwind.config.ts`
- **Framer Motion** for entrance, scroll-reveal, hover, counter, and accordion animations
- **next/font** (Sora + Inter, self-hosted Google Fonts)
- **next/image** with remote patterns configured for Unsplash, Pexels, Pravatar & RandomUser
- **lucide-react** icons
- Fully responsive, mobile-first, accessible, `prefers-reduced-motion` aware
- Zero-config deploy on **Vercel**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # lint
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home — hero, trust bar, stats, features, popular courses, how it works, instructors, testimonials, pricing, FAQ, final CTA |
| `/courses` | Course listing with category filter chips |
| `/courses/[slug]` | Course detail — curriculum, outcomes, instructor, enroll card |
| `/about` | Mission, story, stats, values, team |
| `/contact` | Contact details + client-validated form (UI-only) |

## Project Structure

```
app/                 # Routes, layouts, metadata, robots & sitemap
  layout.tsx         # Root layout — fonts, Navbar, Footer, global metadata
  page.tsx           # Home page (composes section components)
  courses/           # Listing + dynamic [slug] detail
  about/ contact/    # Inner pages
components/           # Section + card components (one per file)
  ui/                # Reusable primitives: Button, Container, SectionHeading,
                     #   GradientBg, Reveal, Counter, PageHeader
lib/                 # Typed content data (courses, instructors, testimonials,
                     #   pricing, faqs, features)
tailwind.config.ts   # Brand color tokens, gradients, glow shadows, type scale
```

## Brand System

Color tokens live in `tailwind.config.ts` under `colors.brand`:

| Token | Hex | Usage |
|-------|-----|-------|
| `brand-blue` | `#1728c5` | Gradient start |
| `brand-darkblue` | `#1f1a80` | Gradient end / page background |
| `brand-green` | `#96ff00` | Spotlight accent — buttons, highlights, key headings |
| `brand-white` | `#ffffff` | Body text on dark backgrounds |

Gradients (`bg-brand-gradient`, `-alt`, `-soft`) and green glow shadows (`shadow-glow`, `-sm`, `-lg`) are also defined there, plus the `hero`/`section` type scale. The `.glass` and `.accent-underline` utilities live in `app/globals.css`.

Button variants are centralized in `components/ui/Button.tsx`.

## Where to Swap Content & Images

- **Course content**: `lib/courses.ts` (titles, blurbs, curriculum, pricing, images)
- **Instructors / team**: `lib/instructors.ts`
- **Testimonials**: `lib/testimonials.ts`
- **Pricing plans**: `lib/pricing.ts`
- **FAQ**: `lib/faqs.ts`
- **Features**: `lib/features.ts`
- **Hero / About imagery**: `components/Hero.tsx`, `app/about/page.tsx`
- **Brand name & logo**: `components/Navbar.tsx` and `components/Footer.tsx`
- **Colors & fonts**: `tailwind.config.ts` and `app/layout.tsx`

All images use real, license-free photos from Unsplash (themed around education/learning) and avatar services. To add a new image host, register it under `images.remotePatterns` in `next.config.js`.

## Deploy

Push to a Git provider and import into Vercel — no configuration changes needed. Update `siteUrl` in `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts` to your production domain.
