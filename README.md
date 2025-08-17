# Ruiz-Sourcing - Procurement Management Web Application

## 🎯 Project Overview

**Ruiz-Sourcing** is a Next.js 15+ web application for Juan Ruiz, a Procurement Manager at Happy Dad Hard Seltzer & Tea. This is a professional, mobile-first web application showcasing procurement expertise and professional networking.

## 🏗️ Technical Architecture

### Core Technologies
- **Next.js 15+ (App Router)** with TypeScript
- **PrimeReact 10+** for all UI components and theming
- **PrimeFlex** for responsive layout utilities
- **Tailwind CSS** for custom styling and animations
- **TypeScript** for type safety and maintainability

### Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with PrimeReact provider
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   └── contact/           # Contact page
├── components/             # Reusable UI components
│   ├── common/            # Common UI elements
│   │   ├── Button.tsx     # Enhanced PrimeReact Button
│   │   ├── HeroSection.tsx # Hero section component
│   │   ├── InfoCard.tsx   # Information card component
│   │   ├── SocialLink.tsx # Social media link component
│   │   ├── PageHeader.tsx # Page header component
│   │   ├── WelcomeSection.tsx # Welcome content component
│   │   ├── HighlightItem.tsx # Highlight item component
│   │   └── index.ts       # Barrel exports
│   └── layout/            # Layout components
│       ├── Navbar.tsx     # Sticky PrimeReact Menubar
│       ├── Footer.tsx     # Footer component
│       └── index.ts       # Barrel exports
├── constants/              # Static data and configuration
│   └── navigation.ts      # Navigation items and content
├── types/                  # TypeScript interfaces and enums
│   └── index.ts           # Type definitions
└── styles/                 # Global styles
    └── globals.css        # Global CSS with custom utilities
```

## 🎨 Design Philosophy & Best Practices

### 1. **PrimeReact-First Approach** ⭐ CRITICAL
- **ALWAYS use PrimeReact components** over custom HTML elements
- **NEVER create custom buttons** - use PrimeReact Button component
- **NEVER create custom navigation** - use PrimeReact Menubar, Toolbar, or Menu
- **NEVER create custom cards** - use PrimeReact Card component
- **Let PrimeReact handle styling, responsiveness, and accessibility**

### 2. **Pure Functional Component Architecture** ⭐ CRITICAL
- **Every component must be pure and reusable**
- **Create components like `SocialLink`, `HeroSection`, `InfoCard`** for reusability
- **Use barrel exports (`index.ts`) for clean imports**
- **Components should accept props for customization**
- **Example**: `SocialLink` component handles all social platforms with enum-based props

### 3. **Enum-Based Constants** ⭐ CRITICAL
- **NEVER use magic strings** like `'linkedin'` or `'primary'`
- **ALWAYS use TypeScript enums** for type safety
- **Examples**:
  ```typescript
  export enum SocialPlatform {
    LINKEDIN = 'linkedin',
    INSTAGRAM = 'instagram',
    EMAIL = 'email'
  }
  
  export enum ButtonVariant {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    OUTLINE = 'outline'
  }
  ```

### 4. **Component Props & Interfaces**
- **Always define proper TypeScript interfaces** for component props
- **Use optional props with sensible defaults**
- **Extend PrimeReact component props when needed**:
  ```typescript
  interface CustomButtonProps extends Omit<ButtonProps, 'size'> {
    variant?: ButtonVariant
    size?: ButtonSize
    children: React.ReactNode
  }
  ```

### 5. **Styling Best Practices**
- **Use PrimeReact theme system** - don't override with custom CSS
- **Minimal custom styling** - only when absolutely necessary
- **Use Tailwind CSS utilities** for custom styling needs
- **Avoid hardcoded colors and opacity values**
- **Let PrimeReact handle responsive design**

## 🚫 Common Mistakes to Avoid

### 1. **Don't Mix Styling Approaches**
- ❌ **WRONG**: Custom `<button>` with PrimeReact theme
- ✅ **CORRECT**: PrimeReact Button component with theme classes
- ❌ **WRONG**: Custom `<nav>` with PrimeReact styling
- ✅ **CORRECT**: PrimeReact Menubar component

### 2. **Don't Hardcode Values**
- ❌ **WRONG**: `bg-gray-800/50` (hardcoded opacity)
- ✅ **CORRECT**: Use PrimeReact theme system
- ❌ **WRONG**: `'linkedin'` (magic string)
- ✅ **CORRECT**: `SocialPlatform.LINKEDIN` (enum)

### 3. **Don't Create Unnecessary Custom Components**
- ❌ **WRONG**: Custom button component when PrimeReact Button exists
- ✅ **CORRECT**: Extend PrimeReact Button with custom variants
- ❌ **WRONG**: Custom card layout when PrimeReact Card exists
- ✅ **CORRECT**: Use PrimeReact Card with custom content

## 🎯 Component Guidelines

### Button Component
- **Extends PrimeReact Button** with custom variants
- **Uses enum-based props** for type safety
- **Includes shimmer effects** and custom styling
- **Maintains PrimeReact's built-in features**

### HeroSection Component
- **Highly configurable** with optional props
- **Supports hero images** with Next.js Image optimization
- **Uses PrimeReact Card** for consistent styling
- **Responsive design** with proper spacing

### SocialLink Component
- **Platform-agnostic** design
- **Enum-based platform detection**
- **Dynamic styling** based on platform
- **Reusable across the application**

## 🔧 Development Workflow

### 1. **Component Creation**
- Create component in appropriate directory
- Define TypeScript interface for props
- Use PrimeReact components when possible
- Export through barrel exports (`index.ts`)

### 2. **Styling Approach**
- Start with PrimeReact theme
- Add minimal custom styling if needed
- Use Tailwind CSS utilities
- Test responsiveness across devices

### 3. **Testing & Validation**
- Run `npm run build` to check for errors
- Ensure no TypeScript errors
- Verify responsive design
- Check accessibility features

## 📱 Responsive Design

### Mobile-First Approach
- **Start with mobile design**
- **Use PrimeFlex utilities** for responsive layout
- **Test on various screen sizes**
- **Ensure touch-friendly interactions**

### Breakpoint Strategy
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎨 Theme & Styling

### PrimeReact Dark Amber Theme
- **Applied globally** in root layout
- **Consistent color scheme** throughout
- **Professional appearance** with amber accents
- **Dark mode optimized** for readability

### Custom Utilities
- **Animation delays** for staggered effects
- **Custom shadows** for depth
- **Backdrop blur** for modern glass effect
- **Smooth transitions** for user experience

## 🚀 Deployment

### Netlify Configuration
- **Public folder** properly configured
- **Static generation** for optimal performance
- **Build optimization** for production
- **URL**: `juan-ruiz.netlify.app`

### Build Process
- **Clean builds** with no warnings
- **TypeScript compilation** successful
- **ESLint validation** passed
- **Static page generation** optimized

## 📚 Key Learnings & Context

### 1. **Project Setup Lessons**
- **Use `npx .`** in existing directory to avoid nested folders
- **Preserve existing files** (README, .gitignore) during setup
- **Ensure public folder** exists for static assets
- **Zero warnings/errors** requirement for production

### 2. **Component Architecture Lessons**
- **Pure functional components** are essential for maintainability
- **Barrel exports** make imports clean and organized
- **Reusable components** reduce code duplication
- **Props-based customization** enables flexibility

### 3. **PrimeReact Integration Lessons**
- **Theme system** should be used as intended
- **Built-in components** handle most use cases
- **Custom styling** should be minimal and purposeful
- **Responsiveness** is built-in when using PrimeReact properly

### 4. **Type Safety Lessons**
- **Enums eliminate magic strings** and improve maintainability
- **Interface definitions** prevent prop errors
- **TypeScript integration** catches errors at compile time
- **Proper typing** improves developer experience

## 🔮 Future Development Guidelines

### 1. **Always Ask Before Creating Custom Components**
- **Is there a PrimeReact equivalent?**
- **Can we extend an existing PrimeReact component?**
- **Is this component truly reusable?**

### 2. **Maintain Component Purity**
- **No side effects** in components
- **Props-based configuration** only
- **Consistent interface** across similar components

### 3. **Follow Established Patterns**
- **Use existing component structure** as template
- **Maintain enum-based constants** for new features
- **Follow barrel export pattern** for new components

### 4. **Document Changes**
- **Update CHANGELOG.md** with version numbers
- **Commit with descriptive messages** including version
- **Update README** with new patterns or lessons learned

---

## 📝 Author Notes

This README serves as a **living context document** for future development chats. It captures:
- **Best practices established** during development
- **Common mistakes to avoid**
- **Component architecture patterns**
- **PrimeReact integration lessons**
- **TypeScript best practices**
- **Development workflow guidelines**

**Last Updated**: December 19, 2024  
**Version**: 0.6.0  
**Author**: Kyle Dilbeck  