# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2024-12-19

### Added

- **Complete Next.js 15+ App Router setup** with proper project structure
- **Public folder** for images and static assets (Netlify ready)
- **PrimeReact and PrimeFlex integration** with Dark Amber theme
- **Professional project architecture** with modular components
- **Tailwind CSS integration** with custom animations and utilities
- **Navigation constants and TypeScript interfaces** for type safety
- **Layout components**: Navbar (sticky, professional design), Footer
- **Common components**: Button with glossy effects and shimmer animations
- **Home page**: Centered hero section with smooth fade-in animations
- **About page**: Professional, Instagram-like info chunks design
- **Contact page**: Welcoming design with social media links (LinkedIn, Instagram, Email)
- **Mobile-first responsive design** using Tailwind CSS utilities
- **Barrel exports** for clean component imports
- **Smooth transitions and animations** throughout the application

### Fixed

- **Proper Next.js 15+ setup** using official create-next-app
- **Added missing public folder** for static assets and images
- **Eliminated all warnings and errors** - clean build
- **Fixed button centering** and overall layout issues
- **Proper TypeScript configuration** with Next.js 15+ standards
- **Clean ESLint configuration** with no conflicts

### Styling Improvements

- **Glossy, professional UI** with backdrop filters and shadows
- **Custom animations** with staggered fade-in effects
- **Professional typography** using Inter font with multiple weights
- **Instagram-like content chunks** for better engagement and retention
- **Proper spacing and professional navigation** design
- **Smooth transitions and micro-interactions** on all elements
- **Custom scrollbar** with amber theme
- **Responsive design** optimized for all devices

### Technical Details

- **Next.js 15+** with App Router (latest version)
- **TypeScript** configuration with proper path aliases
- **Tailwind CSS** with custom utilities and animations
- **PrimeReact components** with Dark Amber theme
- **PrimeFlex utility classes** for responsive layout
- **Professional font loading** with Next.js font optimization
- **Clean build process** with no warnings or errors
- **Netlify deployment ready** with proper static generation

### Netlify Deployment

- **Public folder** properly configured for static assets
- **Build optimization** for production deployment
- **Static page generation** for optimal performance
- **Ready for juan-ruiz.netlify.app** deployment

### Author

- Kyle Dilbeck

## [0.2.0] - 2024-12-19

### Added

- **Pure functional component architecture** for maximum reusability and maintainability
- **Reusable component library** with 7 new components:
  - `SocialLink`: Configurable social media links with platform-specific styling
  - `HeroSection`: Flexible hero section with optional elements
  - `InfoCard`: Reusable information cards with icons and content
  - `HighlightItem`: Highlight items for expertise sections
  - `PageHeader`: Consistent page headers across the application
  - `WelcomeSection`: Welcoming content sections with icons
  - `Button`: Enhanced button with shimmer effects and variants
- **Beverage-themed mobile menu** with beer stein icon (pi pi-beer)
- **Parallax background integration** using your custom background image
- **Enhanced component props** with TypeScript interfaces for type safety
- **Animation delay system** for staggered fade-in effects

### Refactored

- **Home page**: Now uses reusable `HeroSection` component
- **About page**: Refactored to use `PageHeader`, `InfoCard`, and `HighlightItem` components
- **Contact page**: Refactored to use `PageHeader`, `WelcomeSection`, and `SocialLink` components
- **Component architecture**: Moved from page-specific to reusable component-based approach
- **Import structure**: Implemented barrel exports for cleaner imports

### Technical Improvements

- **Component reusability**: All components now accept props for customization
- **Type safety**: Proper TypeScript interfaces for all component props
- **Animation system**: Staggered fade-in effects with configurable delays
- **Code organization**: Better separation of concerns and maintainability
- **Performance**: Reduced code duplication and improved reusability

### Visual Enhancements

- **Consistent animations**: All components use the same animation system
- **Professional appearance**: Components look polished and cohesive
- **Better user experience**: Smooth, engaging interactions throughout
- **Responsive design**: All components adapt to different screen sizes

### Author

- Kyle Dilbeck

## [0.3.0] - 2024-12-19

### Added

- **Enum-based constants** replacing magic strings for type safety and maintainability
- **SocialPlatform enum** for social media platform identification
- **ButtonVariant enum** for button styling variants
- **ButtonSize enum** for button sizing options
- **AnimationDelay enum** for staggered animation timing
- **Enhanced type safety** throughout the application

### Refactored

- **Magic string elimination**: Replaced all hardcoded strings with enum values
- **Component props**: Updated to use enum-based constants
- **Type definitions**: Enhanced with proper enum usage
- **Code quality**: Improved maintainability and reduced runtime errors

### Technical Improvements

- **Type safety**: Enums prevent invalid values and improve IntelliSense
- **Maintainability**: Centralized constants make updates easier
- **Code quality**: Eliminated magic strings for better code standards
- **Developer experience**: Better autocomplete and error detection

### Examples of Enum Usage

```typescript
// Before: Magic strings
variant="primary"
platform="linkedin"

// After: Enum-based
variant={ButtonVariant.PRIMARY}
platform={SocialPlatform.LINKEDIN}
```

### Author

- Kyle Dilbeck

## [0.4.0] - 2024-12-19

### Added

- **PrimeReact component integration** throughout the application for better styling and responsiveness
- **Simplified parallax background** using CSS approach with `.parallax` class
- **Enhanced smooth scrolling** with scroll-padding-top for fixed navbar
- **PrimeReact Card components** replacing custom div containers for better consistency

### Refactored

- **Background implementation**: Simplified from complex React components to clean CSS approach
- **Button component**: Now extends PrimeReact Button while maintaining custom styling and variants
- **HeroSection**: Now uses PrimeReact Card component
- **InfoCard**: Now uses PrimeReact Card component
- **WelcomeSection**: Now uses PrimeReact Card component
- **SocialLink**: Now uses PrimeReact Card component with PrimeReact Button
- **Layout**: Cleaner background implementation with CSS parallax class

### Technical Improvements

- **Better PrimeReact integration**: Leveraging PrimeReact's built-in styling and responsiveness
- **Cleaner CSS**: Simplified background implementation using CSS classes
- **Improved scrolling**: Enhanced smooth scrolling with proper navbar offset
- **Component consistency**: All card-based components now use PrimeReact Card
- **Better maintainability**: PrimeReact handles responsive design and styling

### Benefits of PrimeReact Integration

- **Built-in responsiveness**: PrimeReact components handle mobile/desktop automatically
- **Consistent styling**: All components follow PrimeReact design patterns
- **Better accessibility**: PrimeReact components include accessibility features
- **Professional appearance**: PrimeReact components look polished out of the box
- **Easier maintenance**: Less custom CSS to maintain

### Author

- Kyle Dilbeck

## [0.5.0] - 2024-12-19

### Added

- **Enhanced parallax visibility** with reduced background opacity (50% instead of 90%)
- **Hero image support** above the title text using Next.js Image component
- **Improved background transparency** across all main wrapper components
- **Better parallax background showcase** allowing the custom background to shine through

### Refactored

- **Background opacity**: All card backgrounds changed from `bg-gray-800/90` to `bg-gray-800/50`
- **HeroSection component**: Added optional hero image support with proper image optimization
- **About page**: Removed lemonade reference for confidentiality
- **Constants**: Updated hero description to remove specific product mentions
- **Contact page**: Applied reduced opacity to contact info section

### Content Updates

- **Lemonade reference removed**: Updated to generic "expanding our beverage portfolio" for confidentiality
- **Hero description**: Changed from specific product mention to general procurement excellence
- **Innovation focus**: Updated to be more generic while maintaining professional tone

### Technical Improvements

- **Next.js Image optimization**: Hero images now use proper Next.js Image component
- **Better performance**: Optimized image loading with priority and proper dimensions
- **Enhanced visual appeal**: Parallax background now clearly visible through all components
- **Consistent transparency**: All main components now have 50% opacity for better background visibility

### Visual Enhancements

- **Parallax background**: Now clearly visible through all component backgrounds
- **Hero image**: Professional image display above the main title
- **Better contrast**: Maintained readability while showcasing background
- **Enhanced depth**: Components now have a more layered, professional appearance

### Author

- Kyle Dilbeck

## [0.6.0] - 2024-12-19

### Added

- **Proper PrimeReact Menubar** replacing custom navigation for better theme integration
- **PrimeReact Button components** in navigation for consistent styling
- **Enhanced hero image sizing** increased from 200x200 to 300x300 pixels
- **Reduced gap between hero image and title** from mb-8 to mb-4 for better visual flow

### Refactored

- **Navigation system**: Replaced custom nav with PrimeReact Menubar component
- **Component backgrounds**: Removed custom background colors, now using PrimeReact theme system
- **Card components**: All cards now use proper PrimeReact Card styling without custom overrides
- **Button styling**: Navigation buttons now use PrimeReact Button with proper theme classes

### Technical Improvements

- **Better PrimeReact integration**: Proper use of Menubar, Button, and Card components
- **Theme consistency**: All components now follow PrimeReact Dark Amber theme properly
- **Reduced custom CSS**: Eliminated hardcoded background colors and opacity values
- **Cleaner component architecture**: Components now rely on PrimeReact's built-in styling

### Visual Enhancements

- **Professional navigation**: Menubar with proper PrimeReact styling and glossy appearance
- **Better image proportions**: Hero image now properly sized and positioned
- **Improved spacing**: Reduced gap between hero image and title for better visual hierarchy
- **Theme consistency**: All components now follow the same visual language

### Styling Philosophy

- **PrimeReact-first approach**: Using PrimeReact components and theme system as intended
- **Minimal custom CSS**: Only custom styling where absolutely necessary
- **Theme integration**: Proper use of PrimeReact's built-in styling and responsiveness
- **Professional appearance**: Leveraging PrimeReact's polished component design

### Author

- Kyle Dilbeck

## [0.7.0] - 2024-12-19

### Added

- **Proper background opacity** for all cards and panels (close to transparent backgrounds)
- **Enhanced hero image styling** with softer corners, borders, and elevation
- **Fancy text styling for Juan's name** with complex gradient, glow effects, and shadows
- **Text shadow effects** throughout for better readability against transparent backgrounds

### Refactored

- **Background transparency**: All components now use `rgba(17, 24, 39, 0.15)` for near-transparent backgrounds
- **Hero section spacing**: Reduced gap between image and title from `mb-4` to `mb-2`
- **Text visibility**: All text now uses proper contrast colors and shadows for readability
- **Component styling**: Consistent opacity and backdrop blur across all cards

### Visual Enhancements

- **Juan's name prominence**: Now the fanciest text with complex gradient, glow, and shadow effects
- **Background transparency**: Parallax background now clearly visible through all components
- **Enhanced image styling**: Hero image with rounded corners, subtle borders, and elevation shadows
- **Professional appearance**: Maintained readability while achieving desired transparency

### Technical Improvements

- **Proper opacity implementation**: Backgrounds are now close to transparent as requested
- **Text shadow system**: Consistent shadow effects for all text elements
- **Backdrop blur**: Enhanced glass effect with `backdrop-filter: blur(20px)`
- **Border styling**: Subtle amber borders with proper transparency

### Styling Details

- **Hero card**: `rgba(17, 24, 39, 0.1)` - very transparent for main content
- **Info cards**: `rgba(17, 24, 39, 0.15)` - slightly more opaque for content areas
- **Juan's name**: Complex gradient with glow effects and multiple shadows
- **Text shadows**: Varying shadow intensities for different text hierarchy levels

### Author

- Kyle Dilbeck

## [0.8.0] - 2024-12-19

### Added

- **Mobile-responsive header** with proper PrimeReact Sidebar navigation
- **Beer stein icon** for mobile menu toggle (pi pi-beer)
- **Right-side mobile sidebar** with themed navigation and footer blurb
- **Mobile-specific navigation items** with proper active state styling

### Refactored

- **Mobile header**: Replaced basic hamburger with beer stein icon button
- **Navigation structure**: Added mobile menu state management with useState
- **Sidebar implementation**: Used PrimeReact Sidebar component for mobile navigation
- **Mobile menu items**: Restructured for proper mobile navigation flow

### Visual Enhancements

- **Beer stein icon**: Professional amber-themed button with subtle background and border
- **Mobile sidebar**: Right-side slide-out with themed styling and backdrop blur
- **Navigation buttons**: Full-width mobile buttons with proper active state indicators
- **Footer section**: Company branding with briefcase icon and professional description

### Technical Improvements

- **Responsive design**: Proper mobile/desktop header behavior
- **State management**: Mobile menu visibility controlled with React state
- **PrimeReact integration**: Proper use of Sidebar component for mobile navigation
- **Accessibility**: Mobile navigation properly integrated with routing system

### Mobile Features

- **Beer stein toggle**: Amber-themed button positioned in top-right corner
- **Right-side sidebar**: Slides in from right with themed styling
- **Full navigation**: All pages accessible from mobile menu
- **Professional footer**: Company branding and description in sidebar footer
- **Active states**: Current page highlighted in mobile navigation

### Author

- Kyle Dilbeck

## [0.8.1] - 2024-12-19

### Added

- **Enhanced mobile menu button positioning** with proper sticky top-right placement
- **Improved button spacing** with 2rem margins and 1rem padding
- **Enhanced shadow effects** for better button visibility

### Refactored

- **Button positioning**: Changed from `absolute` to `fixed` for proper sticky behavior
- **Spacing system**: Implemented proper margins (`m-8`) and padding (`p-4`)
- **Visual hierarchy**: Enhanced shadow for better button prominence

### Technical Improvements

- **Sticky positioning**: Button now stays in place while scrolling
- **Proper spacing**: Consistent margins and padding for professional appearance
- **Enhanced visibility**: Better shadow effects for improved button recognition

### Author

- Kyle Dilbeck

## [0.8.2] - 2024-12-19

### Added

- **New hero avatar image** using `juan-avatar.png` for personal branding
- **Enhanced personal connection** with Juan's actual photo/avatar

### Refactored

- **Hero image source**: Changed from generic `main-icon.png` to personal `juan-avatar.png`
- **Image alt text**: Updated to reflect personal avatar usage

### Visual Enhancements

- **Personal branding**: Juan's photo now prominently displayed above the title
- **Professional appearance**: More engaging and credible hero section
- **Better user connection**: Visitors can see who they're working with

### Technical Details

- **Next.js Image optimization**: Maintained for optimal performance
- **Priority loading**: Avatar loads with high priority for above-the-fold content
- **Responsive design**: Avatar scales properly across all devices
- **Professional styling**: Maintains rounded corners, borders, and elevation shadows

### Author

- Kyle Dilbeck

## [0.8.3] - 2024-12-19

### Fixed

- **Contact page spacing**: Increased vertical spacing between social link cards on mobile (`gap-y-16`) and added internal padding to `SocialLink` cards for better breathing room.
- **About page gap**: Reduced oversized gap before the highlights section by changing `mb-32` to `mb-16 md:mb-24` on the info grid.

### Refactored

- **SocialLink**: Wrapped content in `p-6 md:p-8` for consistent internal padding across breakpoints.

## [0.8.4] - 2024-12-19

### Changed

- **Unified Button styling**: PRIMARY variant now uses darker semi-transparent amber background with dark-blue text for improved theme consistency.
- **Contact page layout**: Replaced social links grid with a simple `flex` column using `gap-4` for clean, predictable spacing on mobile.

### Notes

- Header/menubar components remain unchanged as requested.

## [0.8.5] - 2024-12-19

### Added

- **Social sharing metadata**: Set global title/description to “Juan Ruiz” and “The Man, The Myth, The Legend - Juan”. Added Open Graph and Twitter cards using `public/juan-avatar.png` and configured icons to use `favicon.ico` and `main-icon.png`.

## [0.8.6] - 2024-12-19

### Fixed

- **Custom button visibility**: Enforced PRIMARY button styling with inline background/text colors so PrimeReact theme cannot override it. Dark semi-transparent amber background with dark-blue text now appears consistently across all pages.

## [0.8.7] - 2024-12-19

### Added

- **Animation utility**: `.animate-fade-in-up` keyframes with delays and reduced-motion safeguard.

### Changed

- Applied fade-in-up to `HeroSection` card and CTA, Contact page hero image and info card, and `HighlightItem`s for consistent entrance animations.

### Rationale

- Improves visibility of the global parallax background without changing the global theme or color system.

## [0.8.8] - 2024-12-19

### Tweaked

- **Button PRIMARY**: Increased background opacity to 0.98 and ensured dark-blue text is enforced for better contrast.

### Fixed

- **Parallax background not visible on mobile/iOS**: Added mobile and iOS-specific fallbacks to use `background-attachment: scroll` so the background image reliably renders on mobile devices.

### Notes

- No theme, color, or component visual changes. Only background-attachment behavior adjusted for mobile compatibility.

## [0.8.9] - 2024-12-19

### Changed

- **Global buttons (PRIMARY/SECONDARY)**: Made gradients 50% transparent with hover at ~60% to allow background to show through while maintaining readability. OUTLINE variant now uses a subtle 20% amber hover fill.

### Impact

- Homepage CTA and all usages of the custom `Button` now have a semi-transparent look consistent with the glassmorphism theme.

## [0.8.9] - 2025-08-17

### Fixed

- **Next.js metadata warning**: Added `metadataBase` using env or localhost fallback to ensure absolute URLs for Open Graph/Twitter images.

## [0.8.10] - 2025-08-17

### Changed

- **Open Graph/Twitter image**: Switched to `public/og-image.png` (1200x630) to encourage platforms to show the description instead of only the domain.
- Added `openGraph.url` and `openGraph.locale` for richer previews.

## [0.8.11] - 2025-08-17

### Changed

- **Open Graph/Twitter**: Reverted preview image to `juan-avatar.png`, set OG `type: profile`, and added Twitter `site`/`creator` to encourage platforms to display the description beneath the title.

## [0.8.12] - 2025-08-17

### Changed

- **Domain**: Updated base URL to `https://juanruiz.work` and added canonical URL for SEO.

## [0.8.13] - 2025-08-17

### Changed

- **Desktop header brand**: Updated Menubar brand label from `COMPANY_INFO.name` to "Juan Ruiz" as requested.

## [0.8.14] - 2025-08-17

### Changed

- **Desktop navigation**: Removed legacy white Menubar items and moved the amber-styled navigation button group to the left with a briefcase icon. Mobile sidebar remains unchanged.
