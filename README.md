# Bayview AI Club Website

A polished, student-friendly static site for **Bayview AI Club**, built with **Vite + React + TypeScript + Tailwind CSS**.

## Quick Start

```bash
npm install
npm run dev
```

Open the local URL shown by Vite (usually `http://localhost:5173`).

## Build for Production

```bash
npm run build
npm run preview
```

## GitHub Pages Deployment

This repo includes `.github/workflows/deploy.yml` to deploy automatically on pushes to `main`.

### Important: Set the Vite base path

The project currently uses this placeholder in `vite.config.ts`:

```ts
base: '/ai-club-site/'
```

Change it to your actual GitHub repo name path, for example:
- Repo: `Bayview-AI-Club`
- Base path: `/Bayview-AI-Club/`

If your site is a user/org root site (`username.github.io`), use `base: '/'`.

### GitHub settings to verify

1. Go to **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Ensure your default branch name matches the workflow trigger (`main`).

## Editing Club Content (for students)

All core text/content is in one easy file:

- `src/data/content.ts`

Update there for:
- Navbar links
- About cards
- What We Do cards
- Meetings and events
- Daily Bit featured content
- Projects
- Resources
- Team profiles
- FAQ items
- Join links

## Project Structure

- `src/components` → reusable UI blocks (Navbar, Footer, headings)
- `src/sections` → page sections
- `src/data` → editable content/constants
- `src/graphics` → Byte mascot SVG component

## Accessibility & UX features included

- Sticky responsive navbar with mobile menu
- Smooth anchor scrolling
- Keyboard-friendly FAQ expand/collapse
- High-contrast, readable typography
- Responsive layout for mobile/tablet/desktop
