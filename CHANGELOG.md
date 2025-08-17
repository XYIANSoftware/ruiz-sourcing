# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2024-12-19

### Added
- Initial project setup with Next.js 15+ and TypeScript
- PrimeReact and PrimeFlex integration with Dark Amber theme
- Project structure with modular components architecture
- Global SCSS styles with minimal layout fixes
- Navigation constants and TypeScript interfaces
- Layout components: Navbar (sticky PrimeReact Menubar), Footer, Container
- Common components: Button with variant and size options
- Home page with hero section and call-to-action
- About page with professional bio and placeholder content
- Contact page with PrimeReact form, validation, and toast notifications
- Mobile-first responsive design using PrimeFlex utility classes
- Barrel exports for clean component imports

### Fixed
- Removed deprecated `appDir` from Next.js config
- Fixed ESLint configuration compatibility
- Fixed unescaped apostrophes in About page
- Converted Home page to client component for interactivity

### Technical Details
- Next.js 15+ with App Router
- TypeScript configuration with path aliases
- ESLint configuration for Next.js and TypeScript
- SASS support for global styles
- PrimeReact components: Card, Button, InputText, InputTextarea, Toast, Menubar
- PrimeFlex utility classes for responsive layout
- Dark Amber theme applied globally

### Author
- Kyle Dilbeck 