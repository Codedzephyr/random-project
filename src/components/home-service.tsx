import React from "react";
import { Card } from "./card";
import { SectionTitle } from "./section-title";

export const Services: React.FC = () => (
  <section className="py-16 lg:py-24 bg-neutral-50">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="OUR SERVICES"
        title="What we offer"
        subtitle="At Hyprops-LPS, we deliver a full spectrum of oil & gas services:"
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "ENGINEERING, PROCUREMENT & FABRICATION",
            desc: "Turnkey solutions in engineering, procurement, and fabrication across oil & gas projects.",
          },
          {
            title: "CONSTRUCTION & INSTALLATION",
            desc: "Specialized construction and installation of facilities, infrastructure, and offshore assets.",
          },
          {
            title: "SUBSEA LIFE OF FIELD SERVICES",
            desc: "Maintenance, refurbishment, testing, and enhancement of subsea and topside equipment.",
          },
          {
            title: "FACILITIES OPERATIONS & MAINTENANCE",
            desc: "Reliable operations and maintenance services for critical assets, ensuring efficiency and safety.",
          },
          {
            title: "MANPOWER OUTSOURCING",
            desc: "Recruitment, contracts, compliance, and workforce support for both local and expatriate personnel.",
          },
          {
            title: "SUPPLY CHAIN MANAGEMENT",
            desc: "Comprehensive procurement, logistics, and inventory management through global and local networks.",
          },
        ].map((s) => (
          <Card key={s.title}>
            <div className="p-6">
              <h3 className="text-[15px] font-bold tracking-wide text-neutral-800">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                {s.desc}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
