import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { TopBar } from "./components/top-bar";
import { Footer } from "./components/footer";
import { HomePage } from "./pages/homepage";
import { ManagementTeamPage } from "./pages/management-team-page";
// import { TopBar } from "./components/layout/TopBar";
// import { Footer } from "./components/layout/Footer";
// import { HomePage } from "./pages/HomePage";
// import { ManagementTeamPage } from "./pages/ManagementTeamPage";

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col">
        <TopBar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/management-team" element={<ManagementTeamPage />} />
            {/* Stubs for other nav items */}
            <Route
              path="/projects"
              element={
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
                  Projects page coming soon.
                </div>
              }
            />
            <Route
              path="/partners"
              element={
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
                  Partners page coming soon.
                </div>
              }
            />
            <Route
              path="/careers"
              element={
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
                  Careers page coming soon.
                </div>
              }
            />
            <Route
              path="/contact"
              element={
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
                  Contact page coming soon.
                </div>
              }
            />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}
