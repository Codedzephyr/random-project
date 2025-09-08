import { HashRouter, Routes, Route } from "react-router-dom";
import { TopBar } from "./components/top-bar";
import { Footer } from "./components/footer";
import { HomePage } from "./pages/homepage";
import { ManagementTeamPage } from "./pages/management-team-page";
import { ServicesPage } from "./pages/ServicesPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { PartnersPage } from "./pages/PartnersPage";
import { CareersPage } from "./pages/CareersPage";
import { ContactPage } from "./pages/ContactPage";

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col">
        <TopBar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/management-team" element={<ManagementTeamPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback route */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}
