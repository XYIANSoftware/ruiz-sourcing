# Deployment Guide - Netlify

## Overview
This guide explains how to deploy the Ruiz-Sourcing application to Netlify.

## Prerequisites
- Netlify account
- Git repository connected to Netlify
- Node.js 18+ installed locally for testing

## Local Testing
Before deploying, test the application locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Test production build
npm run start
```

## Netlify Deployment

### Option 1: Git Integration (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: 18 or higher

### Option 2: Manual Deployment
1. Build the application: `npm run build`
2. Upload the `.next` folder to Netlify
3. Set the publish directory to `.next`

## Build Configuration
The application is configured for optimal Netlify deployment:
- Static generation for all pages
- Optimized bundle sizes
- Responsive design for all devices
- Dark Amber theme applied globally

## Environment Variables
No environment variables are required for basic functionality.

## Post-Deployment
After successful deployment:
1. Test all pages and functionality
2. Verify responsive design on mobile devices
3. Check that PrimeReact components render correctly
4. Test contact form submission

## Troubleshooting
- **Build fails**: Ensure Node.js version is 18+
- **Styling issues**: Verify PrimeReact theme is loaded
- **Routing issues**: Check Next.js App Router configuration

## Support
For deployment issues, refer to:
- [Netlify Documentation](https://docs.netlify.com/)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment) 