# AWS DevOps Portfolio — Mohd Shakir

Personal portfolio site built with React, TypeScript, Vite, and Tailwind CSS.

## Prerequisites

- **Node.js 20+** (developed on Node v24) and **npm 10+** — check with:
  ```bash
  node -v
  npm -v
  ```
  If you need to install/upgrade Node, get it from [nodejs.org](https://nodejs.org/) or use a version manager like `nvm`.
- **Git**

No environment variables, API keys, or external services are required — the site is fully static.

## Setup

Clone the repo and install dependencies:

```bash
git clone https://github.com/shakir-007/aws-devops-portfolio.git
cd aws-devops-portfolio
npm install
```

## Run locally

Start the dev server (hot reload, runs on http://localhost:5173 by default — Vite auto-picks the next free port if that one's busy):

```bash
npm run dev
```

## Build for production

```bash
npm run build
```

Compiles TypeScript and outputs an optimized static build to `dist/`.

Preview the production build locally:

```bash
npm run preview
```

## Lint

```bash
npm run lint
```

## Project structure

```
src/
  components/     # shared UI primitives (button, card, badge, tabs, navbar, icons)
  hooks/          # scroll-progress and active-section hooks used by the navbar
  sections/       # one file per page section (hero, about, experience, projects, ...)
  App.tsx         # assembles all sections in order
public/
  icons/          # tech-stack logos used in the Skills section
  Mohd_Shakir.pdf # resume served by the Download Resume buttons
```

## Deploying

The `dist/` folder from `npm run build` is a static site — deploy it to any static host (Vercel, Netlify, GitHub Pages, S3 + CloudFront, etc.). No server-side runtime is needed.
