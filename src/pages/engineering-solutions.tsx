import React from "react";
import PageHero from "../components/PageHero";
import { SectionTitle } from "../components/section-title";

const EngineeringSolutionsPage: React.FC = () => (
  <main>
    <PageHero title="Engineering Solutions" image="/images/engineering-solutions-hero.jpg" />

    <section className="bg-white py-16 lg:py-24 space-y-8">
      <div className="mx-auto max-w-5xl px-4">
        <SectionTitle
          eyebrow="SERVICE"
          title="Engineering, Procurement & Fabrication"
        />
        <p className="text-neutral-600 leading-relaxed">
          We provide turnkey engineering, procurement, and fabrication
          solutions—ensuring seamless integration from concept through final
          delivery, maintaining quality and compliance at every step.
        </p>
        <h3 className="text-lg font-bold">Our Capabilities</h3>
        <ul className="list-disc list-inside text-neutral-600">
          <li>Detailed Engineering & Design</li>
          <li>Vendor Assessment & Procurement</li>
          <li>Custom Fabrication & Assembly</li>
          <li>Quality Assurance & Testing</li>
          <li>Logistics & Delivery Coordination</li>
        </ul>
      </div>
    </section>
  </main>
);

export default EngineeringSolutionsPage;
