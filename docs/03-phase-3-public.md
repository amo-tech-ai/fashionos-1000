# Phase 3: Public & Marketing

**Goal:** Polish the public-facing pages, directory, and SEO.

---

## 📢 Task 09: Brand, SEO & Core Pages

**Context:**
The public site needs to look professional and be SEO-ready.

**Prompt:**
```text
You are a Frontend Developer & SEO Specialist.
Task: Polish the public website pages.

=========================================
1. SEO HEAD
=========================================
Create `src/components/seo/SEOHead.tsx`:
- Inputs: title, description, image.
- Uses `react-helmet-async` (or standard meta tags if preferred).

=========================================
2. PAGE CONTENT
=========================================
Update:
- `HomePage.tsx`: Add a high-impact Hero section with video background capability, Feature Grid, and Call to Action.
- `AboutPage.tsx`: Add Team grid and "Our Story" timeline.
- `ContactPage.tsx`: Add a functional contact form (UI only).

=========================================
3. ASSETS
=========================================
- Use `lucide-react` for all icons.
- Ensure all images use lazy loading.

Output updated page files.
```

---

## 📂 Task 10: Directory & Services

**Context:**
A searchable directory of fashion professionals and service templates.

**Prompt:**
```text
You are a Full Stack Engineer.
Task: Build the Public Directory and Service Templates.

=========================================
1. DIRECTORY GRID
=========================================
Create `src/pages/site/DirectoryPage.tsx`:
- FilterSidebar: Role (Model, Photographer, Stylist), Location.
- Grid: `TalentCard` components.
- SearchBar: Real-time filtering (client-side mock).

=========================================
2. SERVICE TEMPLATES
=========================================
Create `src/pages/site/ServicesPage.tsx`:
- Pricing Tables for "Lookbook Shoot", "Runway Show", "Brand Campaign".
- "Book Now" buttons linking to `/start-project`.

Output the Directory and Services pages.
```

---

## ⚡ Task 11: Performance Optimization

**Context:**
Ensure the application loads fast and handles assets efficiently.

**Prompt:**
```text
You are a Performance Engineer.
Task: Optimize FashionOS for production.

=========================================
1. CODE SPLITTING
=========================================
Update `src/App.tsx`:
- Wrap all route components with `React.lazy` and `Suspense`.
- Create a `LoadingScreen.tsx` with a stylish spinner.

=========================================
2. IMAGE OPTIMIZATION
=========================================
Create `src/components/ui/Image.tsx`:
- Wrapper that handles blur-up loading effect.
- Fallback for error states.

=========================================
3. ERROR BOUNDARIES
=========================================
Create `src/components/ui/ErrorBoundary.tsx`:
- Catch rendering errors and show a friendly "Something went wrong" UI.

Output the App router updates and utility components.
```
