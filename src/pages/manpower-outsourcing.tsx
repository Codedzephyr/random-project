import React from "react";
import PageHero from "../components/PageHero";

const ManpowerOutsourcingPage: React.FC = () => (
  <main>
    <PageHero title="Manpower Outsourcing" image="/images/manpower-outsourcing-hero.jpg" />

    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        <p className="text-neutral-600 leading-relaxed">
          Hyprops-LPS provides highly skilled and experienced manpower for
          critical oil & gas operations. Our approach ensures clients have the
          right expertise to deliver projects safely, efficiently, and to
          international standards.
        </p>

        <div>
          <h3 className="text-xl font-bold text-neutral-800">What We Offer</h3>
          <p className="mt-2 text-neutral-600 leading-relaxed">
            From engineers to technicians, our manpower solutions cover
            short-term and long-term project needs. We specialize in recruiting,
            training, and deploying personnel across various oil & gas
            disciplines.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-neutral-800">Why Choose Us</h3>
          <p className="mt-2 text-neutral-600 leading-relaxed">
            With access to a large pool of qualified professionals, we reduce
            downtime, ensure compliance with local content requirements, and
            provide cost-effective solutions for our partners.
          </p>
        </div>
      </div>
    </section>
  </main>
);

export default ManpowerOutsourcingPage;
