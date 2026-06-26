# Sai Sudheer Reddy — Portfolio

A premium, production-ready personal portfolio for a Senior QA Automation Engineer. Built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed to feel like Apple, Stripe, Linear, and Vercel — minimal, fast, accessible, and SEO-friendly.

## Features

- App Router + React Server Components
- Glassmorphism, soft shadows, animated gradient mesh background
- Dark / Light mode (system-aware, no flash) via `next-themes`
- Sticky glass navigation with mobile sheet
- Smooth scroll-reveal animations (Framer Motion) with `prefers-reduced-motion` support
- Animated stat counters
- Expandable experience timeline
- Categorized skill cards
- Featured projects grid
- Contact form (opens user's mail client via `mailto:` — works on Vercel, Netlify, and GitHub Pages)
- SEO: Open Graph, Twitter Card, JSON-LD `Person` schema, sitemap, robots
- PWA: `manifest.webmanifest`, theme color, maskable icons
- WCAG-friendly: skip link, focus styles, semantic landmarks
- Lighthouse 95+ ready
- Zero runtime dependencies on backend services

## Quick start

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Replace the placeholder content

| Where                            | What to update                                            |
| -------------------------------- | --------------------------------------------------------- |
| `src/lib/site.ts`                | name, email, phone, LinkedIn, GitHub, site URL            |
| `src/lib/data.ts`                | experience, skills, projects, certifications, achievements |
| `public/resume.pdf`              | drop your real PDF (replace `.placeholder` file)          |
| `public/og-image.png`            | 1200×630 social preview image                             |
| `public/favicon.svg`             | brand mark (already provided)                             |
| `public/icon-192.png` / `512.png`| PWA icons (optional — add when ready)                    |

## Available scripts

| Script           | Purpose                                       |
| ---------------- | --------------------------------------------- |
| `npm run dev`    | Start the local dev server                    |
| `npm run build`  | Production build                              |
| `npm start`      | Run the production build                      |
| `npm run lint`   | Lint the project (Next.js + TypeScript rules) |

## Folder structure

```
portfolio/
├─ public/
│  ├─ favicon.svg
│  ├─ robots.txt
│  └─ resume.pdf            (you provide)
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx         metadata, theme provider, JSON-LD
│  │  ├─ page.tsx           composes all sections
│  │  ├─ globals.css        Tailwind + design tokens
│  │  ├─ sitemap.ts
│  │  ├─ robots.ts
│  │  └─ manifest.ts
│  ├─ components/
│  │  ├─ Nav.tsx
│  │  ├─ Hero.tsx
│  │  ├─ About.tsx
│  │  ├─ Experience.tsx
│  │  ├─ Skills.tsx
│  │  ├─ Projects.tsx
│  │  ├─ Certifications.tsx
│  │  ├─ Achievements.tsx
│  │  ├─ Contact.tsx
│  │  ├─ Footer.tsx
│  │  ├─ ThemeProvider.tsx
│  │  ├─ ThemeToggle.tsx
│  │  ├─ Background.tsx
│  │  ├─ SectionHeader.tsx
│  │  └─ Reveal.tsx
│  └─ lib/
│     ├─ site.ts            site-wide config
│     └─ data.ts            experience / skills / projects / certs / stats
├─ tailwind.config.ts
├─ postcss.config.mjs
├─ next.config.mjs
├─ tsconfig.json
└─ package.json
```

## Deployment

### Vercel (recommended)

```bash
npm i -g vercel
vercel
```

Or push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new). Zero config required.

### Netlify

1. Push to GitHub.
2. Connect the repo at [app.netlify.com](https://app.netlify.com).
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Install the official [`@netlify/plugin-nextjs`](https://docs.netlify.com/integrations/frameworks/next-js/overview/) when prompted.

### GitHub Pages (static export)

Next.js can export a fully static site. The contact form falls back to `mailto:` so it works without a backend.

1. In `next.config.mjs`, add:

   ```js
   output: "export",
   images: { unoptimized: true },
   basePath: "/your-repo-name",
   ```

2. Run:

   ```bash
   npm run build
   ```

3. Push the `out/` folder to the `gh-pages` branch, or use the [`gh-pages`](https://www.npmjs.com/package/gh-pages) package or the official [`actions/deploy-pages`](https://github.com/actions/deploy-pages) workflow.

## Performance & a11y checklist

- [x] Self-hosted Google fonts via `next/font` (no FOUT)
- [x] `prefers-reduced-motion` respected
- [x] Skip-to-content link
- [x] Semantic landmarks (`header`, `main`, `footer`, `nav`)
- [x] `aria-expanded`, `aria-controls`, `aria-label` on interactive elements
- [x] Focus-visible outlines
- [x] Lazy/auto image formats (`avif`, `webp`) — drop images into `public/` and reference via `next/image`
- [x] Optimized package imports (`framer-motion`, `lucide-react`)

## License

Personal portfolio — all rights reserved © 2026 Sai Sudheer Reddy.
