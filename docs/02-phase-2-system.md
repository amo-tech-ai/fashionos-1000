# Phase 2: System Build

**Goal:** Implement the business logic, data layer, and core functional modules (Bookings, Events, CRM).

---

## 🗄️ Task 03: Database Schema & Auth

**Context:**
We need a multi-tenant system for a fashion production platform using Supabase.

**Prompt:**
```text
You are a Database Architect.
Task: Design the Supabase SQL Schema for FashionOS.

=========================================
1. CORE TABLES
=========================================
Generate the SQL to create these tables (enable RLS on all):

- `profiles`: Extends auth.users (id, email, full_name, avatar_url, role).
- `organizations`: Tenant container (name, slug, logo).
- `projects`: Work container (title, status, client_id).
- `shoots`: Production booking (type, date, look_count, status).
- `events`: Runway/Party (title, date, venue_id, capacity).
- `sponsors`: CRM profiles (brand_name, industry, contact_info).
- `event_sponsors`: Join table (event_id, sponsor_id, tier, status).

=========================================
2. ENUMS & TYPES
=========================================
Define Postgres Enums for:
- `user_role`: 'admin', 'member', 'client'.
- `project_status`: 'draft', 'active', 'completed'.
- `shoot_type`: 'photography', 'video', 'hybrid'.
- `sponsor_status`: 'lead', 'negotiating', 'signed'.

=========================================
3. RLS POLICIES
=========================================
- Users can read/write their own `profiles`.
- Organization members can read/write `projects` and `shoots` belonging to their org.
- Public can read `events` if `is_public` is true.

Output a single clean `.sql` file content.
```

---

## 🖥️ Task 04: Dashboard Architecture

**Context:**
FashionOS has two dashboard modes: Global (all projects) and Event Context (specific event management).

**Prompt:**
```text
You are a React Frontend Architect.
Task: Implement the Advanced Dashboard Layout logic.

=========================================
1. ROUTING UPDATE
=========================================
Update `src/App.tsx`:
- `/dashboard` (Global)
- `/dashboard/events/:id/*` (Event Context)

=========================================
2. COMPONENT: `Sidebar.tsx`
=========================================
- Logic: Check URL params. If `:id` exists and is not 'new', render "Event Menu". Otherwise, render "Global Menu".
- Global Menu: Overview, Projects, Calendar, CRM, Finance.
- Event Menu: < Back to Global, Command Center, Timeline, Casting, Logistics, Sponsors.

=========================================
3. COMPONENT: `DashboardLayout.tsx`
=========================================
- Integrate the smart Sidebar.
- Add a `TopBar` with Breadcrumbs and User Profile.

Output the code for `Sidebar.tsx`, `DashboardLayout.tsx`, and the updated `App.tsx`.
```

---

## 📸 Task 05: Shoot Booking Engine

**Context:**
A 13-step "Airbnb-style" booking flow for photoshoots at `/start-project`.

**Prompt:**
```text
You are a UX Engineer.
Task: Build the "Shoot Booking Wizard".

=========================================
1. STATE MANAGEMENT
=========================================
Create `BookingContext.tsx`:
- Store: serviceType, category, shotCount, date, creativeBrief.
- Logic: Calculate `estimatedPrice` in real-time.

=========================================
2. WIZARD LAYOUT
=========================================
Create `src/layouts/WizardLayout.tsx`:
- Left col: Form Step.
- Right col (Desktop): Sticky "Receipt" summary.
- Bottom (Mobile): Sticky "Next" button.

=========================================
3. STEPS IMPLEMENTATION
=========================================
Build components in `src/features/booking/`:
- `StepCategory.tsx`: Grid of cards.
- `StepQuantity.tsx`: Slider input.
- `StepBrief.tsx`: Textarea with AI polish button.
- `StepReview.tsx`: Summary.

Output `BookingContext.tsx` and `WizardLayout.tsx`.
```

---

## 🤖 Task 06: AI Infrastructure (Edge Functions)

**Context:**
Secure backend proxy for Gemini 3 API calls using Supabase Edge Functions.

**Prompt:**
```text
You are a Backend Security Engineer.
Task: Create Supabase Edge Functions to handle AI requests securely.

=========================================
1. FUNCTION: `ai-copilot`
=========================================
Create `supabase/functions/ai-copilot/index.ts`:
- Input: `{ prompt, context, task }`
- Logic:
  - Initialize GoogleGenAI with `process.env.GEMINI_API_KEY`.
  - Tasks: 'polish_brief', 'generate_schedule'.
  - Model: `gemini-2.5-flash`.
- Output: JSON response.

=========================================
2. FRONTEND SDK
=========================================
Create `src/lib/ai-service.ts`:
- `polishBrief(text)`: Calls the edge function.
- `generateEventDraft(text)`: Calls edge function.

Output the TypeScript code for the Edge Function and the Frontend Service.
```

---

## 🤝 Task 07: Sponsor CRM System

**Context:**
Kanban board for tracking sponsorship deals.

**Prompt:**
```text
You are a Product Engineer.
Task: Build the Sponsor CRM Module.

=========================================
1. TYPES & MOCK DATA
=========================================
Define `Sponsor` interface and mock data.

=========================================
2. VIEW: `SponsorPipeline.tsx`
=========================================
- Implement a Kanban Board (Horizontal scrolling columns).
- Columns: Lead, Contacted, Proposal, Signed.
- Cards: Draggable (simulated).

=========================================
3. VIEW: `SponsorProfile.tsx`
=========================================
- Detail view for a single sponsor.
- Tabs: Overview, Deliverables.

Integrate these into `/dashboard/sponsors`.
```

---

## 🗺️ Task 08: Event Management & Logistics

**Context:**
Tools for managing physical event aspects.

**Prompt:**
```text
You are a Frontend Specialist.
Task: Build the Event Logistics UI.

=========================================
1. TIMELINE COMPONENT
=========================================
Create `EventTimeline.tsx`:
- Vertical list of phases.
- Visual progress bar.

=========================================
2. VENUE & MAP COMPONENT
=========================================
Create `EventVenue.tsx`:
- Display Venue Name & Address.
- Embed a Google Map placeholder.
- "AI Scout" input field.

=========================================
3. RUN OF SHOW
=========================================
Create `RunOfShow.tsx`:
- Minute-by-minute schedule builder.

Integrate these into the Event Context routes.
```
