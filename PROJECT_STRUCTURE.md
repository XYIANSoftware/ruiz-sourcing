# Project Structure

## Overview
Ruiz-Sourcing is a Next.js 15+ web application built with TypeScript, PrimeReact, and PrimeFlex.

## Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with PrimeReact provider
│   ├── page.tsx           # Home page
│   ├── about/
│   │   └── page.tsx       # About page
│   └── contact/
│       └── page.tsx       # Contact page
├── components/             # Reusable UI components
│   ├── common/            # Common UI elements
│   │   ├── Button.tsx     # Custom Button component
│   │   └── index.ts       # Barrel exports
│   └── layout/            # Layout components
│       ├── Navbar.tsx     # Sticky navigation
│       ├── Footer.tsx     # Footer component
│       ├── Container.tsx  # Page container
│       └── index.ts       # Barrel exports
├── constants/              # Static data and configuration
│   └── navigation.ts      # Navigation items and content
├── types/                  # TypeScript interfaces
│   └── index.ts           # Type definitions
└── styles/                 # Global styles
    └── globals.scss       # Global SCSS with minimal styles
```

## Key Features

### Components
- **Navbar**: Sticky PrimeReact Menubar with navigation
- **Footer**: Simple copyright footer
- **Button**: Customizable button with variants
- **Container**: Responsive page container

### Pages
- **Home**: Hero section with call-to-action
- **About**: Professional bio and placeholder content
- **Contact**: Form with validation and toast notifications

### Styling
- PrimeReact Dark Amber theme
- PrimeFlex utility classes
- Mobile-first responsive design
- Minimal global SCSS

## Development

### Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Dependencies
- Next.js 15+ with App Router
- PrimeReact for UI components
- PrimeFlex for utility classes
- TypeScript for type safety
- SASS for global styles

## Deployment
Configured for seamless deployment to Netlify. 