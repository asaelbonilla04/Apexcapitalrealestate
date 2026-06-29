# Apex Capital Realty

A modern, production-quality marketing website for **Apex Capital Realty**, an
industrial real estate brokerage based in Miami, FL. The centerpiece is a
searchable, filterable property **library** of industrial spaces (warehouse,
distribution, flex, manufacturing, last-mile logistics, cold storage, IOS, and
industrial land) for sale or lease.

## Tech stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** for styling
- **shadcn/ui**-style components (Radix primitives + CVA) in `components/ui`
- **Framer Motion** for subtle entrance/scroll animations
- **Lucide React** for icons
- A **static, typed data layer** (`lib/data`) designed to be swapped for a real
  database/CMS later without rewriting the UI

## Getting started

```bash
npm install
npm run dev      # start the dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

> Node 18.17+ (Node 20+ recommended).

## Project structure

```
app/                     # App Router pages & route segments
  page.tsx               # Home
  properties/            # Property library + dynamic [slug] detail pages
  capabilities/          # Service lines index + [slug] detail pages
  company/  team/  careers/  contact/
  layout.tsx             # Root layout, fonts, global metadata
  sitemap.ts  robots.ts  # SEO
components/
  layout/                # Navbar, footer, logo, nav config
  home/                  # Home page sections (hero, featured, stats, etc.)
  properties/            # Property card + client-side filtering library
  property/              # Detail-page parts (gallery, specs, agent, inquiry)
  contact/               # Contact form
  shared/                # Reveal animation, section heading, map embed
  ui/                    # shadcn/ui base components
lib/
  data/                  # Typed data layer (see below)
  utils.ts               # cn() + formatting helpers
public/images/           # Image assets (see public/images/README.md)
```

## Editing content

All sample content is **typed and centralized** so it's easy to find and
replace. Anything that needs real Apex Capital Realty content is marked with a
`PLACEHOLDER` comment in code.

| What to edit            | Where                                   |
| ----------------------- | --------------------------------------- |
| **Properties/listings** | `lib/data/properties.ts`                |
| **Agents / team**       | `lib/data/agents.ts`                    |
| **Service lines**       | `lib/data/capabilities.ts`              |
| **Company info / NAP / stats / socials** | `lib/data/company.ts`  |
| **Navigation links**    | `components/layout/nav-links.ts`        |
| **Logo**                | `components/layout/logo.tsx` (text wordmark placeholder) |
| **Images**              | see `public/images/README.md`           |
| **Brand colors**        | `tailwind.config.ts` (`brand`, `navy`) + `app/globals.css` tokens |
| **Site URL / metadata** | `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts` |

### Data model

The data layer is defined in `lib/data/types.ts`. The `Property` type is
tailored to industrial real estate (clear height, dock-high/drive-in doors,
power, sprinklered, rail access, zoning, office build-out %, trailer parking,
etc.). Listings reference an `Agent` by `agentId`.

### Swapping the data layer for a real backend

All reads go through thin helper functions — components never touch the raw
arrays directly:

- `getProperties()`, `getProperty(slug)`, `getFeaturedProperties()`,
  `getSimilarProperties(slug)` — `lib/data/properties.ts`
- `getAgents()`, `getAgentById(id)` — `lib/data/agents.ts`
- `getCapabilities()`, `getCapability(slug)` — `lib/data/capabilities.ts`

To go live with a database or CMS, change the **bodies** of these functions to
async fetches (and `await` them in the page components — they are already
server components). The filtering on `/properties` runs client-side against the
data passed in from the server, so it keeps working unchanged.

## Forms

The **Contact** form (`/contact`) and **Request Info** inquiry form (on each
property detail page) validate client-side and currently `console.log` the
submission. Each has a `TODO(integration)` comment marking exactly where to
plug in a real handler — e.g. a Next.js Route Handler (`app/api/.../route.ts`)
backed by an email service (Resend/SendGrid) or a CRM.

## Maps

Property detail pages and the contact page embed an **OpenStreetMap** iframe
(no API key required) driven by `lat`/`lng` from the data. To switch to Google
Maps or Mapbox, update `components/shared/map-embed.tsx` — it's a single
component and the only place the map provider is referenced.

## Accessibility & SEO

- Semantic HTML, skip-to-content link, keyboard-navigable filters/forms, and
  descriptive `alt` text throughout.
- Animations respect `prefers-reduced-motion` (global reset in `globals.css`).
- Per-page metadata, Open Graph tags, `sitemap.xml`, and `robots.txt`.

## Notes / placeholders to replace before launch

- All **property and agent data** is fictional sample data.
- All **imagery** is from Unsplash (see `public/images/README.md`).
- **Company stats**, **NAP/address**, **phone/email**, **social URLs**, and
  **award logos** are placeholders.
- The **logo** is a temporary text wordmark.
- Update the **production domain** in `app/layout.tsx`, `app/sitemap.ts`, and
  `app/robots.ts`.

Search the codebase for `PLACEHOLDER` to find every spot that needs real
content.
