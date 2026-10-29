# Aster & Pine

A calm, editorial gift-shop storefront built with Next.js App Router, TypeScript, Tailwind CSS, `next/image`, `next/font`, and restrained Framer Motion reveals.

## Run locally

1. Install Node.js 20 or newer.
2. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the canonical production origin. Set `NEXT_PUBLIC_CONTACT_EMAIL` to the shop inbox.
3. Install and start:

   ```sh
   npm install
   npm run dev
   ```

4. Visit `http://localhost:3000`. For production validation, run `npm run typecheck` and `npm run build`, then `npm start`.

The site uses `next/font/google` for Instrument Serif and DM Sans. A production build needs network access to fetch the font files at build time; Next.js then serves those font files locally.

## Content

- Add or edit product records in `data/products.ts`. Each product needs a unique lowercase `slug`, category slug, price in Indian rupees, description, Unsplash source, and descriptive alt text. Category routes at `/shop/[category]` are built from the `categories` list. Add the category to that list and use its `slug` on its products.
- Add or edit journal entries in `data/posts.ts`. Include a unique lowercase slug, excerpt, ISO publication date, reading time, image alt text, and body paragraphs. Journal article routes are generated from these records.
- Occasion landing pages are listed in `data/products.ts` in the `occasions` array.
- Replace the Unsplash sample image identifiers with approved, licensed brand photography before launch. The image loader is configured for `images.unsplash.com`; use `next/image` for new images and provide descriptive alt text.

## Shopping and forms

The sample bag is persisted in browser `localStorage` and supports quantity changes and removal. Checkout is deliberately a placeholder: connect a payment provider and server-side order creation before accepting purchases. The newsletter and contact forms currently demonstrate validation and confirmation states; connect them to a CRM or backend endpoint before launch. No customer data is sent anywhere by this demo.

## Design tokens

Defined in `app/globals.css` and exposed to Tailwind through `tailwind.config.ts`:

| Token | Value | Use |
|---|---|---|
| `--color-cream` | `#F6F2EC` | Main canvas |
| `--color-sage` | `#B7BC9C` | Hero and feature panels |
| `--color-olive` | `#5E6E5A` | Footer and primary actions |
| `--color-ink` | `#3A352F` | Copy and outlines |
| `--color-rose` | `#BD8884` | Quiet accent |
| `--color-paper` | `#FCFAF6` | Cards and inverse surfaces |
| `--color-line` | `rgba(58, 53, 47, .18)` | Editorial hairlines |

Typography: Instrument Serif display and DM Sans body/UI, both loaded with `next/font` and `display: swap`. Layout uses a 4/8px spacing rhythm, fluid `clamp()` headings, a 1360px maximum page width, and mobile breakpoints for narrow devices.

## Component list

- `Header` — sticky navigation, mobile full-screen menu, accessible search disclosure, and bag count.
- `Footer` — location note, navigation and contact links.
- `Reveal` — reduced-motion-aware, scroll-triggered fade-up.
- `ProductCard` and `QuickAdd` — responsive image cards and browser-persisted quick add.
- `CartView` — bag contents, quantities, removal and subtotal.
- `Breadcrumbs` — accessible breadcrumb navigation.
- `Newsletter` and `ContactForm` — validated demo forms ready for backend wiring.
- `SprigIcon` — decorative inline botanical line art.

## SEO launch checklist

- [x] Unique page titles and descriptions, canonical URLs, Open Graph and Twitter metadata.
- [x] Dynamic Open Graph image using `next/og`.
- [x] Organization and WebSite/SearchAction JSON-LD site-wide.
- [x] BreadcrumbList JSON-LD on category, occasion, product and journal detail pages.
- [x] Product JSON-LD with INR offer, availability, brand and aggregate rating.
- [x] FAQPage JSON-LD on the home page and Article JSON-LD for journal posts.
- [x] Semantic landmarks, one page H1, descriptive image alt text, skip link and keyboard-visible focus.
- [x] Static params for product, category, occasion and journal routes; sitemap and robots routes.
- [x] Responsive `next/image` sizing, AVIF/WebP output formats, hero image priority and lazy-loaded below-fold images.
- [ ] Before launch: set the production canonical origin, connect real commerce/forms, replace sample imagery, verify final copy and test Lighthouse / WCAG AA contrast using production content.

## Routes

`/`, `/shop`, `/shop/[category]`, `/product/[slug]`, `/occasions/[slug]`, `/journal`, `/journal/[slug]`, `/about`, `/contact`, and `/cart`.
