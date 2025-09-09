import React from "react";
import { TeamCard } from "../components/team-card";
import PageHero from "../components/PageHero";

export const ManagementTeamPage: React.FC = () => (
  <main>
    <PageHero
      title="Management Team"
      image="/images/management-team-hero.jpg"
    />

    <section className="py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Meet Our Team
        </h2>
        <p className="mt-2 text-neutral-600 max-w-3xl mx-auto text-center">
          Our executive team is made up of a group of industry leaders in each
          of their respective fields.
        </p>

        <div className="mt-8 space-y-6">
          <TeamCard
            name="Engr. [Dr.] Okezie Akwiwu"
            role="Group Managing Director / Chief Executive Officer"
            bio="An engineer by training and successful entrepreneur with 25+ years of experience in operations and management across the oil & gas industry. Founder and pioneer CEO of Hyprops Nigeria Limited, piloting it from inception to a major player today."
            img="/images/Okezie-Akwiwu.png"
          />
          <TeamCard
            name="Engr. Ndukwe Akwiwu"
            role="Group Deputy Managing Director"
            bio="Qualified Electronic Engineer with extensive experience in international procurement and business development, forging alliances critical to growth since inception."
            img="/images/Ndukwe-Akwiwu.jpg"
          />
          <TeamCard
            name="Engr. [Dr.] Augustine Agomuoh"
            role="Group Chief Operations Officer"
            bio="Transformational leader with almost three decades of experience in Operations, Project Engineering & Management; responsible for strategic planning and effective delivery of projects for the group."
            img="/images/Augustine-Agomuoh.jpg"
          />
          <TeamCard
            name="Uchenna Egere"
            role="Group Head, External Relations & African Expansion"
            bio="Oversees external relations and expansion efforts across Africa with senior managerial background in business development across the oil & gas sector."
            img="/images/Uchenna-Egere.jpg"
          />
        </div>
      </div>
    </section>
  </main>
);
