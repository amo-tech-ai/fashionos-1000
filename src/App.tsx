import React, { useLayoutEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

// Layouts
import DashboardLayout from './layouts/DashboardLayout';
import WebsiteLayout from './layouts/WebsiteLayout';

// Website Pages
import HomePage from './pages/site/HomePage';
import HomePageV2 from './pages/site/HomePageV2';
import AboutPage from './pages/site/AboutPage';
import SiteServicesPage from './pages/site/ServicesPage';
import EventsPage from './pages/site/EventsPage';
import DirectoryPage from './pages/site/DirectoryPage';
import StartProjectPage from './pages/site/StartProjectPage';
import PhotographyServicesPage from './pages/site/PhotographyServicesPage';

// Dashboard Pages
import DashboardHome from './pages/dashboard/DashboardHome';
import ProjectsPage from './pages/dashboard/ProjectsPage';
import DashboardServicesPage from './pages/dashboard/ServicesPage';
import SponsorsPage from './pages/dashboard/SponsorsPage';
import EventDashboard from './pages/dashboard/events/EventDashboard';
import EventTimelinePage from './pages/dashboard/events/EventTimelinePage';
import EventLogisticsPage from './pages/dashboard/events/EventLogisticsPage';

// Placeholders for Global Dashboard
const FinancePage = () => <div className="p-8"><h1 className="text-2xl font-bold">Finance</h1></div>;
const GlobalEventsPage = () => <div className="p-8"><h1 className="text-2xl font-bold">All Events</h1></div>;

// Simple Helper for placeholder in routing
const PlaceholderPage = ({ title, section }: { title: string; section: string }) => (
  <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 text-center animate-in fade-in duration-500">
    <div className="text-xs font-bold tracking-widest uppercase mb-2 text-indigo-500">
      {section}
    </div>
    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h1>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      Feature under construction.
    </p>
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Public Site */}
        <Route element={<WebsiteLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/v2" element={<HomePageV2 />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<SiteServicesPage />} />
          <Route path="/services/photography" element={<PhotographyServicesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/directory" element={<DirectoryPage />} />
        </Route>

        {/* Booking Wizard (Standalone Layout) */}
        <Route path="/start-project" element={<StartProjectPage />} />

        {/* Dashboard (Protected) */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          {/* Global Context */}
          <Route index element={<DashboardHome />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="services" element={<DashboardServicesPage />} />
          <Route path="sponsors" element={<SponsorsPage />} />
          <Route path="finance" element={<FinancePage />} />
          <Route path="events" element={<GlobalEventsPage />} />

          {/* Event Context (Nested) */}
          {/* The Sidebar detects this path pattern to switch menus */}
          <Route path="events/:id" element={<EventDashboard />} />
          <Route path="events/:id/timeline" element={<EventTimelinePage />} />
          <Route path="events/:id/logistics" element={<EventLogisticsPage />} />
          <Route path="events/:id/sponsors" element={<SponsorsPage />} /> {/* Reusing component for now */}
          <Route path="events/:id/casting" element={<PlaceholderPage title="Casting" section="Dashboard" />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}