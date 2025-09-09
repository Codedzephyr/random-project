import React from "react";
import PageHero from "../components/PageHero";
import { SectionTitle } from "../components/section-title";

const SubseaLifeOfFieldPage: React.FC = () => (
  <main>
    <PageHero title="Subsea Life of Field" image="/images/subsea-life-of-field-hero.jpg" />

    <section className="bg-white py-16 lg:py-24 space-y-8">
      <div className="mx-auto max-w-5xl px-4">
        <SectionTitle eyebrow="SERVICE" title="Subsea Life of Field Services" />
        <p className="text-neutral-600 leading-relaxed">
          Our integrated subsea services extend asset longevity and optimize
          performance. We support key subsea equipment, ROV operations, integrity,
          and inspection solutions.
        </p>
        <h3 className="text-lg font-bold">We Work On</h3>
        <ul className="list-disc list-inside text-neutral-600">
          <li>HPUs, SDUs, IWOCS, Umbilicals</li>
          <li>ROV Deployment & Pipe Surveys</li>
          <li>Pipeline Repair & Corrosion Management</li>
          <li>Integrity & Inspection Services</li>
          <li>Subsea Tracking, Survey & Communication Systems</li>
        </ul>
      </div>
    </section>
  </main>
);

export default SubseaLifeOfFieldPage;
