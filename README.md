# Neural Acres Bio Systems — Investor Website

Full Next.js 14 multi-page investor website with Tailwind CSS.

## Quick Start

### 1. Install Node.js
Download and install from: https://nodejs.org (choose the LTS version)

### 2. Install dependencies
Open a terminal in this folder and run:
```
npm install
```

### 3. Start development server
```
npm run dev
```

Then open: http://localhost:3000

### 4. Build for production
```
npm run build
```
This generates a static export in the `out/` folder — upload it to any web host.

---

## Pages
| Route | Page |
|---|---|
| `/` | Home — hero, problem, solution teaser, investment CTA |
| `/technology` | Metera OS deep-dive, tech stack, live dashboard |
| `/roadmap` | All 5 phases with targets and specs |
| `/financials` | Charts, CapEx breakdown, investment ask |
| `/contact` | Inquiry form + next steps |

## Deployment
The site is configured for static export (`output: 'export'` in next.config.mjs).
Deploy the `out/` folder to: Vercel, Netlify, or any static host.

For Vercel (recommended — free):
1. Push this folder to GitHub
2. Import repo at vercel.com
3. Deploy in one click — no config needed
