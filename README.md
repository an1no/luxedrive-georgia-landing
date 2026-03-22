# Midi Travel Georgia — Landing Page

Premium Private Tours & VIP Transfers in Georgia.

## Project Overview

This repository contains the source code for the Midi Travel Georgia landing page, featuring a modern design, multi-language support (English, Georgian, Russian, Chinese, Spanish, and Italian), and a responsive layout.

## Technologies Used

Built with the following modern web technologies:

- **React** (with TypeScript)
- **Vite** (Build tool)
- **Tailwind CSS** (Styling)
- **shadcn/ui** (UI Components)
- **Lucide React** (Icons)
- **i18next** (custom implementation for multi-language support)

## Getting Started Locally

To run the project on your local machine, ensure you have **Node.js** and **npm** installed.

1. **Clone the repository:**
   ```sh
   git clone <YOUR_GIT_URL>
   cd luxedrive-georgia-landing
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```

4. **Open your browser:**
   The application will be available at [http://localhost:8080/luxedrive-georgia-landing/](http://localhost:8080/luxedrive-georgia-landing/)

## Deployment

The project is configured with **GitHub Actions** for automatic deployment to GitHub Pages.

- **Trigger**: Every push to the `main` branch.
- **Workflow**: The `.github/workflows/deploy.yml` file handles building the Vite app and uploading it to the `gh-pages` environment.

## Customization

### Adding/Modifying Content
Key content can be found in:
- `src/i18n/translations.ts`: All UI text and translations.
- `src/components/`: Modular UI components for the Hero section, Fleet, Services, etc.

© 2026 Midi Travel Georgia. All rights reserved.
