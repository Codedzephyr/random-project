import React from "react";
import { SectionTitle } from "../components/section-title";

const PartnersPage: React.FC = () => (
  <main className="bg-white py-16 lg:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="OUR PARTNERS"
        title="Technology Partnerships"
        subtitle="We collaborate with leading OEMs and service providers globally."
      />
      <p className="mt-6 text-neutral-600">
        (Logos and partner descriptions will be added here.)
      </p>
    </div>
  </main>
);

export default PartnersPage;
