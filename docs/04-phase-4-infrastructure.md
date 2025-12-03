# Phase 4: Infrastructure & QA

**Goal:** Ensure reliability, security, and maintainability.

---

## 🧪 Task 12: Testing & CI/CD

**Context:**
Set up the testing framework to prevent regressions.

**Prompt:**
```text
You are a DevOps Engineer.
Task: Configure Testing and CI/CD.

=========================================
1. UNIT TESTING
=========================================
- Create `vitest.config.ts`.
- Write a sample test for `Button.tsx` and `BookingContext.tsx`.

=========================================
2. E2E TESTING
=========================================
- Create a basic Playwright configuration.
- Write a test spec for the "Login Flow".

Output the config files and sample tests.
```

---

## 🔒 Task 13: Security Audit

**Context:**
Document security practices and secure the application.

**Prompt:**
```text
You are a Security Engineer.
Task: Audit and secure the application.

=========================================
1. SECURITY HEADERS
=========================================
Create a configuration file (e.g., `vercel.json` or `netlify.toml` mock) defining:
- Content-Security-Policy.
- X-Frame-Options.
- Permissions-Policy.

=========================================
2. DOCUMENTATION
=========================================
Create `SECURITY.md`:
- Reporting vulnerabilities.
- Auth flow description.
- RLS policy overview.

Output the config and documentation.
```

---

## 🏥 Task 14: System Health Dashboard

**Context:**
A view for admins to monitor system status.

**Prompt:**
```text
You are a Backend Engineer.
Task: Build the System Health Dashboard.

=========================================
1. UI
=========================================
Create `src/pages/dashboard/admin/SystemHealth.tsx`:
- API Latency graph (mock).
- Error Rate indicator.
- Active Users counter.
- Database Connection status.

=========================================
2. LOGIC
=========================================
- Create a hook `useSystemHealth` that simulates checking endpoint status.

Output the Health Dashboard component.
```
