import React from "react";
import { SectionTitle } from "../components/section-title";

const CareersPage: React.FC = () => (
  <main className="bg-white py-16 lg:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="CAREERS"
        title="Join Our Team"
        subtitle="At Hyprops-LPS, we believe in developing talent and growing together."
      />
      <p className="mt-6 text-neutral-600">
        (Details about open positions and recruitment processes will be placed here.)
      </p>
    </div>
  </main>
);

export default CareersPage;
