You are building a Next.js 15+ web application named **Ruiz-Sourcing** for Juan Ruiz, a Procurement Manager at Happy Dad Hard Seltzer & Tea.  

### Requirements:
- Use **Next.js 15+ (App Router)** with **TypeScript**.
- Use **PrimeReact** and **PrimeFlex** for all UI and layout (no plain HTML buttons/inputs where PrimeReact equivalents exist).
- Apply the **PrimeReact Dark Amber theme** globally.
- Use a **mobile-first, fully responsive design**.
- Structure the project with a **clean modular approach**:
  - `components/common/` → reusable UI elements (e.g., styled buttons, nav links).
  - `components/layout/` → layout components like Navbar, Footer, Container.
  - `features/` → page-specific or feature-specific sections.
  - `constants/` → for static data (like links, menu items).
  - `types/` → TypeScript interfaces and types.
  - `styles/` → global SCSS files and partials.
- Follow best practices:
  - Barrel exports (`index.ts`) where useful.
  - Keep components pure and reusable.
  - Use PrimeFlex utility classes over custom CSS when possible.
  - Keep global styles minimal, just for layout fixes.

### Pages:
1. **Home Page**  
   - Hero section introducing Juan Ruiz.  
   - Small blurb: “Procurement Manager at Happy Dad Hard Seltzer & Tea, overseeing product lines like the upcoming lemonade release.”  
   - Call-to-action button linking to Contact.  
   - Use PrimeReact components for structure.

2. **About Page**  
   - Short professional bio (starter text, can be updated later).  
   - Mention Happy Dad and his role in procurement/product management.  
   - Placeholder space for future content (e.g., product highlights).  

3. **Contact Page**  
   - Simple PrimeReact form (Name, Email, Message).  
   - Validation (required fields, email format).  
   - Success message toast when submitted.  

### Additional UI:
- Sticky **PrimeReact Menubar** Navbar with routes (Home, About, Contact).  
- Simple Footer with © year + “Ruiz-Sourcing”.  
- Use PrimeReact **Card**, **Button**, **InputText**, **Toast**, **Dialog** as much as possible.  

### Deployment:
- Must work seamlessly when deployed to **Netlify**.  
- Repo will be named `ruiz-sourcing`.  