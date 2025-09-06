import React from "react";
import { Card } from "./card";
import { SectionTitle } from "./section-title";
// import { Card } from "../../components/ui/Card";
// import { SectionTitle } from "../../components/ui/SectionTitle";

export const Services: React.FC = () => (
  <section className="py-16 lg:py-24 bg-neutral-50">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="OUR SERVICES"
        title="What we offer"
        subtitle="At Hyprops Nigeria Limited, we offer the following services:"
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "MANPOWER OUTSOURCING",
            desc: "Placement and support across the oil and gas value chain.",
          },
          {
            title: "FACILITIES OPERATIONS & MAINTENANCE",
            desc: "Every aspect of operations and maintenance.",
          },
          {
            title: "PROCUREMENT & SUPPLY CHAIN MANAGEMENT",
            desc: "Vendor evaluation, sourcing, expediting.",
          },
          {
            title: "EPCI & EPCM ON TURNKEY BASIS",
            desc: "Seamless, quality turnkey project services.",
          },
          {
            title: "MARINE MAINTENANCE",
            desc: "Wide‑ranging vessel management (subsidiary).",
          },
          {
            title: "SUBSEA LIFE OF FIELD",
            desc: "Integrated, comprehensive life of field solutions.",
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
