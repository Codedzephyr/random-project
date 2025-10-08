import React from "react";
import { SectionTitle } from "../components/section-title";
import PageHero from "../components/PageHero";

const CareersPage: React.FC = () => (
  <main>
    {/* Hero section */}
    <PageHero title="Careers" image="/images/careers-hero.jpg" />

    {/* Page content */}
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="CAREERS"
          title="Join Our Team"
          subtitle="At LPS-Hyprops, we believe in developing talent and growing together."
        />
        <p className="mt-6 text-neutral-600">
          (Details about open positions and recruitment processes will be placed here.)
        </p>
      </div>
    </section>
  </main>
);

export default CareersPage;
