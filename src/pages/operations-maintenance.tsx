import React from "react";
import PageHero from "../components/PageHero";
import { SectionTitle } from "../components/section-title";

const OperationsMaintenancePage: React.FC = () => (
  <main>
    <PageHero
      title="Operations & Maintenance"
      image="/images/operations-maintenance-hero.jpg"
    />

    <section className="bg-white py-16 lg:py-24 space-y-8">
      <div className="mx-auto max-w-5xl px-4">
        <SectionTitle eyebrow="SERVICE" title="Facilities Operations & Maintenance" />
        <p className="text-neutral-600 leading-relaxed">
          We handle all facets of operations and maintenance—from surface prep to
          coatings, scaffolding, rope access, and anti-corrosion treatments.
        </p>
        <ul className="list-disc list-inside text-neutral-600">
          <li>Surface Preparation & Protective Coatings</li>
          <li>Scaffolding & Rope Access</li>
          <li>Corrosion Control Solutions</li>
          <li>Routine Maintenance Programs</li>
          <li>Asset Shutdown & Recommissioning Support</li>
        </ul>
      </div>
    </section>
  </main>
);

export default OperationsMaintenancePage;
