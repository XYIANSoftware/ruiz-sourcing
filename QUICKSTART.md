# Quick Start Guide

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd ruiz-sourcing

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── app/           # Next.js App Router pages
├── components/    # Reusable UI components
├── constants/     # Static data and configuration
├── types/         # TypeScript interfaces
└── styles/        # Global SCSS styles
```

## Key Components

- **Navbar**: Sticky navigation with PrimeReact Menubar
- **Button**: Customizable button component with variants
- **Container**: Responsive page container
- **Pages**: Home, About, Contact with responsive design

## Styling

- **Theme**: PrimeReact Dark Amber theme
- **Utilities**: PrimeFlex utility classes
- **Custom**: Minimal global SCSS for layout fixes
- **Responsive**: Mobile-first design approach

## Development Workflow

1. Make changes to components or pages
2. Test locally with `npm run dev`
3. Build to check for errors: `npm run build`
4. Commit changes with version numbers
5. Update changelog with changes

## Component Guidelines

- Use PrimeReact components when possible
- Prefer PrimeFlex utilities over custom CSS
- Keep components pure and reusable
- Use barrel exports for clean imports
- Follow TypeScript best practices

## Deployment

See `DEPLOYMENT.md` for detailed Netlify deployment instructions. 