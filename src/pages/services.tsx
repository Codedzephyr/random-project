import React from "react";
import { SectionTitle } from "../components/section-title";
import { Card } from "../components/card";

const ServicesPage: React.FC = () => (
  <main className="bg-white py-16 lg:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="OUR SERVICES"
        title="Comprehensive Oil & Gas Services"
        subtitle="Hyprops-LPS provides integrated services covering the entire project lifecycle."
      />

      <div className="mt-10 space-y-8">
        <Card>
          <div className="p-6">
            <h3 className="text-lg font-bold text-neutral-800">
              Engineering, Procurement & Fabrication
            </h3>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              We specialize in the design and fabrication of offshore cargo baskets, cutting boxes,
              HVAC systems, ducts, and waste skips. Our team ensures safety, quality, and cost
              efficiency across all engineering and fabrication projects.
            </p>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <h3 className="text-lg font-bold text-neutral-800">
              Construction & Installation
            </h3>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              Turnkey EPC and EPCM services including installation of subsea structures, pipelines,
              and offshore facilities. We deliver projects with strict adherence to global standards
              and local content requirements.
            </p>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <h3 className="text-lg font-bold text-neutral-800">
              Subsea Life of Field Services
            </h3>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              Maintenance, testing, refurbishment, and enhancement of subsea equipment such as HPUs,
              SDUs, IWOCS, accumulators, umbilical reelers, and chemical injection units.
            </p>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <h3 className="text-lg font-bold text-neutral-800">
              Facilities Operations & Maintenance
            </h3>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              We ensure asset reliability with flowline and pipeline maintenance, turbine servicing,
              NDT inspections, scaffolding, rope access, corrosion control, and communication
              infrastructure services.
            </p>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <h3 className="text-lg font-bold text-neutral-800">
              Manpower Outsourcing
            </h3>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              Recruitment, employment contracts, background checks, immigration support, and
              placement of both local and expatriate personnel to meet client project needs.
            </p>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <h3 className="text-lg font-bold text-neutral-800">
              Supply Chain Management
            </h3>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              End-to-end procurement, vendor evaluation, expediting, and logistics management.
              Strategic alliances with OEMs such as Tesla Nanocoatings, SpongeJet, and HCS Controls
              strengthen our supply chain capacity.
            </p>
          </div>
        </Card>
      </div>
    </div>
  </main>
);

export default ServicesPage;
