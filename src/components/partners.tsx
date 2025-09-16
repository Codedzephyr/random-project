import React from "react";
import { Card } from "./card";
import { SectionTitle } from "./section-title";

export const Partners: React.FC = () => (
  <section className="py-16 lg:py-24 bg-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionTitle eyebrow="OUR PARTNERS" title="Brands we work with" />
      
      {/* Partner logos/names */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
        {["ExxonMobil", "HCS", "Hydrasun", "Tesla Nano", "Coldpad"].map((p) => (
          <div
            key={p}
            className="h-12 w-40 rounded-lg border border-neutral-200 bg-white flex items-center justify-center text-xs text-neutral-500"
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  </section>
);
