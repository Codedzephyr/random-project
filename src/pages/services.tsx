import React from "react";
import { SectionTitle } from "../components/section-title";

const ServicesPage: React.FC = () => (
  <main className="bg-white py-16 lg:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="OUR SERVICES"
        title="What We Do"
        subtitle="Hyprops-LPS provides integrated services across the oil & gas value chain."
      />

      <div className="mt-10 space-y-10">
        <div id="engineering">
          <h3 className="text-lg font-bold">Engineering, Procurement & Fabrication</h3>
          <p className="mt-2 text-neutral-600">
            Detailed engineering, procurement, and fabrication services tailored to client requirements.
          </p>
        </div>

        <div id="construction">
          <h3 className="text-lg font-bold">Construction & Installation</h3>
          <p className="mt-2 text-neutral-600">
            Comprehensive onshore and offshore construction and installation solutions.
          </p>
        </div>

        <div id="subsea">
          <h3 className="text-lg font-bold">Subsea Life of Field Services</h3>
          <p className="mt-2 text-neutral-600">
            End-to-end subsea intervention, inspection, and maintenance services.
          </p>
        </div>

        <div id="facilities">
          <h3 className="text-lg font-bold">Facilities Operations & Maintenance</h3>
          <p className="mt-2 text-neutral-600">
            Operational support and maintenance for energy facilities.
          </p>
        </div>

        <div id="manpower">
          <h3 className="text-lg font-bold">Manpower Outsourcing</h3>
          <p className="mt-2 text-neutral-600">
            Provision of skilled personnel across multiple disciplines.
          </p>
        </div>

        <div id="scm">
          <h3 className="text-lg font-bold">Supply Chain Management</h3>
          <p className="mt-2 text-neutral-600">
            Procurement, logistics, vendor management, and local sourcing expertise.
          </p>
        </div>
      </div>
    </div>
  </main>
);

export default ServicesPage;
