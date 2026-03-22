# Changelog

All notable changes to the **Midi Travel Georgia** landing page will be documented in this file.

## [1.1.0] - 2026-03-23

### Added
- **Multi-language Support**: Added full translations for Spanish (`es`) and Italian (`it`) across the entire user interface.
- **Improved Language Switcher**: Added official flag emojis (🇪🇸 and 🇮🇹) for the new languages.
- **CI/CD Pipeline**: Integrated GitHub Actions (`.github/workflows/deploy.yml`) for automated builds and deployments to GitHub Pages on every push to the `main` branch.

### Changed
- **Rebranding**: Renamed the company from "LuxeDrive Georgia" to "**Midi Travel Georgia**".
- **Email Contact**: Updated official contact email to `miditravelgeorgia@gmail.com`.
- **Project Structure Support**: Configured Vite and React Router with a `base` / `basename` of `/luxedrive-georgia-landing/` to ensure perfect routing on GitHub Pages.
- **README Internal Update**: Rewrote the project documentation to remove third-party tool mentions and focus on core development instructions.

### Fixed
- **Navigation Compatibility**: Resolved a routing issue where the application root was returning "Not Found" when running behind the GitHub Pages subdirectory path.

## [1.0.0] - 2026-03-22
- **Initial Release**: Basic landing page setup with English, Georgian, Russian, and Chinese language support.
- **Core Features**: Services, Fleet, and Reviews sections.
