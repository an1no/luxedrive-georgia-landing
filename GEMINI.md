# Gemini Project Instructions

## Project Overview

This is the landing page for **Midi Travel Georgia** — a premium private tours and VIP transfers service operating in Georgia. The site is a single-page application (SPA) built with React and TypeScript, deployed to GitHub Pages.

## Tech Stack

- **React 18** with **TypeScript**
- **Vite** (build tool, base path: `/luxedrive-georgia-landing/`)
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **Lucide React** for icons
- **React Router DOM v6** (basename: `/luxedrive-georgia-landing`)
- **TanStack Query** for server state
- **Vitest** + **@testing-library/react** for unit tests

## Project Structure

```
src/
├── assets/          # Static assets (e.g., hero-bg.jpg)
├── components/      # Page section components + shadcn/ui primitives
│   └── ui/          # Auto-generated shadcn/ui components — do not edit manually
├── hooks/           # Custom React hooks
├── i18n/
│   ├── LanguageContext.tsx   # Language context + useLanguage hook
│   └── translations.ts      # Translation strings for all supported languages
├── lib/             # Utilities (cn() helper, etc.)
├── pages/           # Route-level page components
├── test/            # Vitest test files
├── App.tsx          # Root component (routing + providers)
└── main.tsx         # Application entry point
```

## Internationalization

The project uses a **custom i18n system** (not a library). All translatable strings are in `src/i18n/translations.ts`.

Supported languages: `en`, `ka` (Georgian), `ru`, `zh`, `es`, `it`

Access translations in components via the `useLanguage` hook:
```tsx
const { t } = useLanguage();
return <h1>{t("hero.title1")}</h1>;
```

When adding new strings, add the translation key to **every** language object in `translations.ts`.

## Coding Conventions

- Import from `src/` using the `@/` path alias (e.g., `@/components/Navbar`)
- One component per file; use functional components with TypeScript
- Apply semantic Tailwind color tokens: `text-primary`, `text-foreground`, `text-muted-foreground`, `bg-card`, `border-border`
- Use `font-display` for headings and `font-body` for body text
- Use `variant="gold"` on `<Button>` for brand CTAs
- Reference public assets with the full base path prefix: `/luxedrive-georgia-landing/<file>`

## Running the Project

```sh
npm install          # Install dependencies
npm run dev          # Dev server at http://localhost:8080/luxedrive-georgia-landing/
npm run build        # Production build → dist/
npm run lint         # ESLint
npm test             # Run tests once (Vitest)
npm run test:watch   # Watch mode
```

## Deployment

Pushes to `main` trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds the app and deploys `dist/` to GitHub Pages.

## Key Files to Know

| File | Purpose |
|------|---------|
| `src/i18n/translations.ts` | All UI text for all languages |
| `src/i18n/LanguageContext.tsx` | Language provider and `useLanguage` hook |
| `src/pages/Index.tsx` | Composes all landing page sections |
| `src/App.tsx` | Root component with providers and routing |
| `tailwind.config.ts` | Custom Tailwind theme (colors, fonts, shadows) |
| `.github/workflows/deploy.yml` | CI/CD pipeline for GitHub Pages deployment |
