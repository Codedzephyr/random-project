import React from "react";
import PageHero from "../components/PageHero";
import { SectionTitle } from "../components/section-title";

const FabricationConstructionPage: React.FC = () => (
  <main>
    <PageHero
      title="Fabrication & Construction"
      image="/images/fabrication-construction-hero.jpg"
    />

    <section className="bg-white py-16 lg:py-24 space-y-8">
      <div className="mx-auto max-w-5xl px-4">
        <SectionTitle
          eyebrow="SERVICE"
          title="Fabrication & Construction"
        />
        <p className="text-neutral-600 leading-relaxed">
          We execute high-quality fabrication and construction of offshore and
          onshore structures. Our expertise spans HVAC, cargo baskets, ducts,
          and support structures.
        </p>
        <ul className="list-disc list-inside text-neutral-600">
          <li>Structural & Mechanical Fabrication</li>
          <li>Welding & Assembly</li>
          <li>HVAC Systems & Ducting</li>
          <li>Structural Support Fabrication</li>
          <li>Offshore Structural Components</li>
        </ul>
      </div>
    </section>
  </main>
);

export default FabricationConstructionPage;
