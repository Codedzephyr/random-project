import React from "react";
import { Card } from "../components/card";
import { SectionTitle } from "../components/section-title";
import { PlaceholderImage } from "../components/placeholder-image";

const OEMsPage: React.FC = () => (
  <main className="bg-white py-16 lg:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="OUR OEM PARTNERS"
        title="Technology Partnerships"
        subtitle="We collaborate with leading OEMs to deliver innovative, reliable, and sustainable solutions for oil & gas projects."
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Sponge-Jet",
            desc: "Leader in clean, dry, low-dust abrasive blasting. Benefits include reduced rework, minimized equipment risk, and cost savings through reusable blasting media.",
          },
          {
            title: "Tesla Nanocoatings",
            desc: "Cutting-edge nano-based two-coat paint systems offering superior corrosion protection, UV and weather resilience, and long surface lifetime.",
          },
          {
            title: "DuraPol",
            desc: "Advanced anti-corrosion coatings designed for highly acidic environments across industries like oil & gas, petrochemical, wastewater, and marine.",
          },
          {
            title: "HCS Controls Systems",
            desc: "Design, manufacture, and maintenance of subsea distribution units, hydraulic production systems, and topside control equipment.",
          },
          {
            title: "Pico Flow Controls (AYMO)",
            desc: "Cloud-based Pipeline Integrity Management System providing real-time monitoring, anomaly detection, corrosion prediction, and maintenance planning.",
          },
        ].map((oem) => (
          <Card key={oem.title}>
            <div className="p-6">
              <h3 className="text-lg font-bold text-neutral-800">{oem.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                {oem.desc}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </main>
);

export default OEMsPage;
