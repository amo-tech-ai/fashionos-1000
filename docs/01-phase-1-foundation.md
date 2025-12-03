# Phase 1: Core Foundation

**Goal:** Establish a pristine, error-free frontend skeleton using the environment's native React 19 stack and the visual design system.

---

## 🪄 Task 01: Project Initialization

**Context:**
We need to establish a clean, error-free React 19 environment. We explicitly use `aistudiocdn` import maps to ensure compatibility.

**Prompt:**
```text
You are a Senior Frontend Architect.
Action: Initialize the FashionOS 2.0 codebase with React 19.

=========================================
SPECIFICATIONS
=========================================
1.  **Stack:** React 19.2.0 (via aistudiocdn), Vite, Tailwind CSS.
2.  **Structure:**
    - `index.html`: Entry point with specific Import Map.
    - `src/main.tsx`: React Root.
    - `src/App.tsx`: Route definitions (react-router-dom v7).
    - `src/layouts/`: `DashboardLayout`, `WebsiteLayout`.
    - `src/pages/`: `dashboard/*`, `site/*`.
    - `src/components/ui/`: Shared atoms.

=========================================
STEPS TO EXECUTE
=========================================

1.  **Clean `index.html`**:
    - Remove all existing scripts.
    - Add this EXACT import map (Updated for environment compatibility):
      <script type="importmap">
      {
        "imports": {
          "react": "https://aistudiocdn.com/react@^19.2.0",
          "react-dom/client": "https://aistudiocdn.com/react-dom@^19.2.0/client",
          "react-dom": "https://aistudiocdn.com/react-dom@^19.2.0",
          "react-router-dom": "https://aistudiocdn.com/react-router-dom@^7.1.5",
          "react/": "https://aistudiocdn.com/react@^19.2.0/",
          "clsx": "https://aistudiocdn.com/clsx@^2.1.1",
          "tailwind-merge": "https://aistudiocdn.com/tailwind-merge@^3.4.0",
          "lucide-react": "https://aistudiocdn.com/lucide-react@^0.555.0"
        }
      }
      </script>
    - Add Tailwind CDN.

2.  **Directory Structure**:
    - Create folders: `src/layouts`, `src/pages/dashboard`, `src/pages/site`, `src/components/ui`.

3.  **Router (`src/index.tsx` & `src/App.tsx`)**:
    - **CRITICAL:** Use `HashRouter` instead of `BrowserRouter` for environment compatibility.
    - Define routes for:
      - `/` -> `site/HomePage`
      - `/dashboard` -> `dashboard/OverviewPage`

4.  **Layouts**:
    - `WebsiteLayout`: Header + Outlet + Footer.
    - `DashboardLayout`: Sidebar + Topbar + Outlet.

Output the full content for: `index.html`, `src/index.tsx`, `src/App.tsx`.
```

---

## 🎨 Task 02: Design System & UI Primitives

**Context:**
We have a basic React scaffold. Now we need the visual foundation.
Style: "High-Fashion Tech" (Vogue meets Linear). Minimalist, serif headers, plenty of whitespace.

**Prompt:**
```text
You are a Senior UI Engineer.
Task: Implement the "Atelier" Design System for FashionOS 2.0.

=========================================
1. TAILWIND CONFIGURATION
=========================================
Update `index.html` tailwind config script to include:
- Fonts: 'Playfair Display' (Serif), 'Inter' (Sans).
- Colors:
  - Cream: #FBF8F5 (Background)
  - Black: #1A1D2D (Text)
  - Purple: #C084FC (Accent/AI)
  - Success: #059669
  - Warning: #D97706

=========================================
2. UI PRIMITIVES (src/components/ui/)
=========================================
Create the following reusable components using `clsx` and `tailwind-merge`:

A. `Button.tsx`
   - Props: variant (primary, secondary, ghost, outline), size (sm, md, lg), icon, isLoading.
   - Style: Rounded-full, uppercase tracking-widest font-bold.

B. `Input.tsx` / `Textarea.tsx`
   - Props: label, error, icon.
   - Style: Large touch targets (56px), bg-white, subtle border.

C. `Card.tsx`
   - Style: bg-white, rounded-3xl, border-gray-100, shadow-sm, hover:shadow-md transition.

D. `FadeIn.tsx`
   - Wrapper for smooth entry animations.

E. `Badge.tsx`
   - Status indicators (Pending, Active, Paid).

=========================================
3. GLOBAL CSS
=========================================
- Set body background to #FBF8F5.
- Set default text color to #1A1D2D.
- Import Google Fonts in `index.html`.

Output the file contents for: `index.html` (head updates), and the components listed above.
```
