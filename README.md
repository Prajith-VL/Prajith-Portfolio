# Portfolio — Prajith Loganathan

Professional multi-page developer portfolio built with **Next.js (App Router)**, **Tailwind CSS**, **Framer Motion**, **TypeScript**, and **React Icons**. Styled for a dark, minimal, futuristic look with a canvas-based wave background on the home page.

## Prerequisites

- Node.js 20+ recommended
- npm (or pnpm / yarn)

## Run locally

```bash
cd "portfolio website"
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

- `npm run build` — production build
- `npm start` — serve the production build (after `npm run build`)
- `npm run lint` — ESLint

## Resume download

Place your PDF at **`public/resume.pdf`**. The hero “Resume” button uses `siteConfig.resumePath` (`/resume.pdf` by default). Update paths in `lib/site-config.ts` if you use a different filename.

## Configuration

Edit **`lib/site-config.ts`** for:

- Email, phone, location
- GitHub, LinkedIn, LeetCode URLs
- Hackathon article URL (currently points at your LinkedIn profile until you set the post link)
- Resume path

Project copy lives in **`projects/content.ts`**. Skills are in **`lib/skills.ts`**.

## Deploy on Vercel

1. Push this folder to a GitHub (or GitLab / Bitbucket) repository.
2. Go to [vercel.com](https://vercel.com) and sign in.
3. **Add New Project** → import the repository.
4. Framework Preset: **Next.js** (auto-detected). Root directory: repository root (this folder).
5. Deploy. Vercel runs `npm run build` and hosts the app.

Environment variables are optional for this static-style portfolio; add any later if you connect the contact form to an API.

## Project structure

| Path | Purpose |
|------|--------|
| `app/` | App Router pages and `globals.css` |
| `components/` | UI modules (layout, home, background, about, projects, achievements, contact) |
| `projects/` | Project data (`content.ts`) |
| `lib/` | Site config, skills data |
| `public/` | Static assets (favicon, `resume.pdf`, etc.) |
| `styles/` | Shared theme tokens (`theme.css`) |
