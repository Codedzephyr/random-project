import { HashRouter, Routes, Route } from "react-router-dom";
import { TopBar } from "./components/top-bar";
import { Footer } from "./components/footer";
import { HomePage } from "./pages/homepage";
import { ManagementTeamPage } from "./pages/management-team-page";
import ServicesPage from "./pages/services";
import ProjectsPage from "./pages/projects";
import PartnersPage from "./pages/partners";
import CareersPage from "./pages/careers";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";

// ✅ New service pages
import ManpowerOutsourcingPage from "./pages/manpower-outsourcing";
import SubseaLifeOfFieldPage from "./pages/subsea-life-of-field";
import EngineeringSolutionsPage from "./pages/engineering-solutions";
import ProcurementSupplyChainPage from "./pages/procurement-supply-chain";
import OperationsMaintenancePage from "./pages/operations-maintenance";
import FabricationConstructionPage from "./pages/fabrication-construction";

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-neutral-50 text-neutral-900 flex flex-col">
        <TopBar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/management-team" element={<ManagementTeamPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* ✅ New service routes */}
            <Route
              path="/services/manpower-outsourcing"
              element={<ManpowerOutsourcingPage />}
            />
            <Route
              path="/services/subsea-life-of-field"
              element={<SubseaLifeOfFieldPage />}
            />
            <Route
              path="/services/engineering-solutions"
              element={<EngineeringSolutionsPage />}
            />
            <Route
              path="/services/procurement-supply-chain"
              element={<ProcurementSupplyChainPage />}
            />
            <Route
              path="/services/operations-maintenance"
              element={<OperationsMaintenancePage />}
            />
            <Route
              path="/services/fabrication-construction"
              element={<FabricationConstructionPage />}
            />

            {/* Fallback */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}
