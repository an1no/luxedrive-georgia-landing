# GitHub Copilot Instructions

## Project Overview

This is the landing page for **Midi Travel Georgia** — a premium private tours and VIP transfers service operating in Georgia. The site is a single-page application (SPA) deployed to GitHub Pages.

## Tech Stack

- **React 18** with **TypeScript**
- **Vite** as the build tool (base path: `/luxedrive-georgia-landing/`)
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components (configured in `components.json`)
- **Lucide React** for icons
- **React Router DOM v6** with `basename="/luxedrive-georgia-landing"`
- **TanStack Query** for server state management
- **Vitest** + **@testing-library/react** for tests

## Project Structure

```
src/
├── assets/          # Static assets (images)
├── components/      # Reusable UI components
│   ├── ui/          # shadcn/ui primitives (do not edit directly)
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   ├── FleetSection.tsx
│   ├── ReviewsSection.tsx
│   ├── Footer.tsx
│   └── LanguageSwitcher.tsx
├── hooks/           # Custom React hooks
├── i18n/
│   ├── LanguageContext.tsx   # Language context provider + useLanguage hook
│   └── translations.ts      # All UI strings for all supported languages
├── lib/             # Shared utilities (e.g., cn())
├── pages/
│   ├── Index.tsx    # Main landing page (composes all sections)
│   └── NotFound.tsx
├── test/            # Vitest test files
├── App.tsx          # Root component with routing + providers
└── main.tsx         # Entry point
```

## Internationalization (i18n)

The project uses a **custom i18n implementation** — NOT i18next despite the folder name.

- All supported languages: `en`, `ka` (Georgian), `ru`, `zh`, `es`, `it`
- Translation keys and strings live in `src/i18n/translations.ts`
- Access translations in components using the `useLanguage()` hook:
  ```tsx
  const { t, language, setLanguage } = useLanguage();
  // Usage:
  <h1>{t("hero.title1")}</h1>
  ```
- When adding new translatable strings, add the key to **all six** language objects in `translations.ts`
- The `LanguageProvider` wraps the entire app in `App.tsx`

## Coding Conventions

- **Path alias**: Use `@/` to import from `src/` (e.g., `import { cn } from "@/lib/utils"`)
- **Component style**: Functional components with TypeScript, one component per file
- **Fonts**: `font-display` for headings, `font-body` for body text (Tailwind custom classes)
- **Color tokens**: Use semantic Tailwind tokens (`text-primary`, `text-foreground`, `text-muted-foreground`, `bg-card`, `border-border`) — avoid hardcoded colors
- **Gold accent**: The primary brand color is gold; use `variant="gold"` on `<Button>` for CTAs
- **Shadows**: Use `shadow-[var(--shadow-gold)]` for the gold glow shadow on hover effects

## Adding a New Section

1. Create a new component in `src/components/` (e.g., `TestimonialsSection.tsx`)
2. Add translation keys for all six languages in `src/i18n/translations.ts`
3. Import and add the component in `src/pages/Index.tsx`
4. Give the section a unique `id` attribute for navbar anchor links

## Deployment

- Deployed automatically to **GitHub Pages** on every push to `main` via `.github/workflows/deploy.yml`
- Build output goes to `dist/`
- The Vite base path is `/luxedrive-georgia-landing/`; keep this in mind when referencing public assets (e.g., `src="/luxedrive-georgia-landing/logo.svg"`)

## Testing

Run tests with:
```sh
npm test         # single run
npm run test:watch  # watch mode
```

Test files live in `src/test/`. Use `@testing-library/react` and `vitest`.

## Available Scripts

```sh
npm run dev        # Start dev server (http://localhost:8080/luxedrive-georgia-landing/)
npm run build      # Production build
npm run build:dev  # Development build
npm run lint       # ESLint
npm test           # Run tests once
```
