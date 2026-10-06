# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Development server**: `npm run dev` (starts Vite dev server)
- **Production build**: `npm run build` (outputs to `dist/`)
- **Preview production build**: `npm run preview`
- **Typecheck & Svelte diagnostic**: `npm run check` (runs `svelte-check` and `tsc`)

## High-Level Architecture

This is a personal portfolio web application for **Ifen Faridian Rahmadan** (Expert Industrial Engineer & Fullstack System Integrator), built based on `resume.pdf` and styled according to the design system specified in `DESIGN.md` (Bevel Theme: Cloudlight, SF Pro typography, Paper White canvas `#ffffff`, Charcoal `#1f2025`, Cloud Card `#ebf0f8`, and metric visual accents).

### Stack
- **Framework**: Svelte 5 (`@sveltejs/vite-plugin-svelte`)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite` via `src/app.css` `@theme`)
- **Language**: TypeScript (`strict` mode with `tsconfig.app.json`)
- **Bundler**: Vite 6+

### Key Directories & Files
- `src/app.css`: Tailwind v4 theme configuration, CSS custom property tokens (`--color-paper-white`, `--color-charcoal`, `--color-ink`, `--color-cloud-card`, typography tracking, and radii).
- `src/data/portfolio.ts`: Single source of truth for resume data (personal info, metrics, experiences at Astra Otoparts Nusametal, projects including MES and SAP Scan 2 Go, education, certifications, and organizations).
- `src/types/portfolio.ts`: TypeScript interfaces for portfolio entities.
- `src/components/`:
  - `Navbar.svelte`: Floating capsule navigation header with backdrop blur.
  - `Hero.svelte`: Sunlit hero section with status laurel, typography lockup, and telemetry dashboard preview.
  - `Partners.svelte`: Monochrome partner brand row.
  - `Experience.svelte`: Career timeline with tech stack tags and impact metrics.
  - `Projects.svelte`: Cloud feature cards for smart factory MES, AI visual inspection, and research projects.
  - `Skills.svelte`: Fullstack and industrial IoT matrix, education details (Telkom University), certifications (BNSP Data Scientist), and leadership.
  - `Footer.svelte`: Elevated charcoal contact CTA card and quick links.
