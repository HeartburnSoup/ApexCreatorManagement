# Apex Creator Management

Marketing site for [Apex Creator Management](https://apexcreatormanagement.com) — a boutique talent agency representing creators, influencers, athletes, and digital entrepreneurs.

## Stack

- [TanStack Start](https://tanstack.com/start) (React 19, SSR)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Nitro](https://nitro.build/) for Vercel deployment

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run preview
```

## Assets

Replace placeholder images in `public/` when you have final brand photography:

| File | Recommended size | Purpose |
|------|------------------|---------|
| `hero-portrait.jpg` | 800×1216 (4:5) | Hero section portrait |
| `og-image.jpg` | 1200×630 | Social share preview |
| `apple-touch-icon.png` | 180×180 | iOS home screen icon |
| `favicon.svg` | — | Browser tab icon |

Regenerate neutral placeholders (optional):

```bash
npm install jimp --save-dev
node scripts/generate-placeholders.mjs
npm uninstall jimp
```

## Deploy to Vercel

1. Push this repo to [GitHub](https://github.com/HeartburnSoup/ApexCreatorManagement).
2. Import the project in [Vercel](https://vercel.com/new).
3. Framework preset: **TanStack Start** (auto-detected via `vercel.json` and Nitro in `vite.config.ts`).
4. Build command: `npm run build` (default).
5. Add custom domains: `apexcreatormanagement.com` and `www.apexcreatormanagement.com`.
6. Configure DNS at your registrar using Vercel's records; set one domain as primary and redirect the other.

### Email

Contact email `hello@apexcreatormanagement.com` requires separate MX/DNS setup (Google Workspace, Zoho, etc.) — not handled by Vercel.

## License

Private — All rights reserved.
