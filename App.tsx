import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import DashboardLayout from './layouts/DashboardLayout';
import WebsiteLayout from './layouts/WebsiteLayout';

// Website Pages
import HomePage from './pages/site/HomePage';
import AboutPage from './pages/site/AboutPage';
import SiteServicesPage from './pages/site/ServicesPage';
import EventsPage from './pages/site/EventsPage';
import DirectoryPage from './pages/site/DirectoryPage';

// Dashboard Pages
import DashboardHome from './pages/dashboard/DashboardHome';
import ProjectsPage from './pages/dashboard/ProjectsPage';
import DashboardServicesPage from './pages/dashboard/ServicesPage';

export default function App() {
  return (
    <Routes>
      {/* Public Site */}
      <Route element={<WebsiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<SiteServicesPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/directory" element={<DirectoryPage />} />
      </Route>

      {/* Dashboard (Protected) */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="services" element={<DashboardServicesPage />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}