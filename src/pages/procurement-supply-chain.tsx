import React from "react";
import PageHero from "../components/PageHero";
import { SectionTitle } from "../components/section-title";

const ProcurementSupplyChainPage: React.FC = () => (
  <main>
    <PageHero
      title="Procurement & Supply Chain"
      image="/images/procurement-supply-chain-hero.jpg"
    />

    <section className="bg-white py-16 lg:py-24 space-y-8">
      <div className="mx-auto max-w-5xl px-4">
        <SectionTitle eyebrow="SERVICE" title="Procurement & Supply Chain Management" />
        <p className="text-neutral-600 leading-relaxed">
          We manage your entire project supply chain—from vendor evaluation and
          sourcing to expediting, logistics, and on-site delivery coordination.
        </p>
        <ul className="list-disc list-inside text-neutral-600">
          <li>Vendor Evaluation & Qualification</li>
          <li>Material Sourcing & Expediting</li>
          <li>Transportation & Logistics Management</li>
          <li>Warehouse & Inventory Handling</li>
          <li>Supply Chain Reporting & Compliance</li>
        </ul>
      </div>
    </section>
  </main>
);

export default ProcurementSupplyChainPage;
