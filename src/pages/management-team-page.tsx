import React from "react";
import { TeamCard } from "../components/team-card";
// import { TeamCard } from "../components/team/TeamCard";

export const ManagementTeamPage: React.FC = () => (
  <main>
    <section className="relative h-[36vh] w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1400&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/45" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <h1 className="text-white text-3xl sm:text-5xl font-extrabold tracking-wide">
          MANAGEMENT TEAM
        </h1>
      </div>
    </section>

    <section className="py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold">Meet Our Team</h2>
        <p className="mt-2 text-neutral-600 max-w-3xl">
          Our executive team is made up of a group of industry leaders in each
          of their respective fields.
        </p>

        <div className="mt-8 space-y-6">
          <TeamCard
            name="Engr. [Dr.] Okezie Akwiwu"
            role="Group Managing Director / Chief Executive Officer"
            bio="An engineer by training and successful entrepreneur with 25+ years of experience in operations and management across the oil & gas industry. Founder and pioneer CEO of Hyprops Nigeria Limited, piloting it from inception to a major player today."
          />
          <TeamCard
            name="Engr. Ndukwe Akwiwu"
            role="Group Deputy Managing Director"
            bio="Qualified Electronic Engineer with extensive experience in international procurement and business development, forging alliances critical to growth since inception."
          />
          <TeamCard
            name="Engr. [Dr.] Augustine Agomuoh"
            role="Group Chief Operations Officer"
            bio="Transformational leader with almost three decades of experience in Operations, Project Engineering & Management; responsible for strategic planning and effective delivery of projects for the group."
          />
          <TeamCard
            name="Uchenna Egere"
            role="Group Head, External Relations & African Expansion"
            bio="Oversees external relations and expansion efforts across Africa with senior managerial background in business development across the oil & gas sector."
          />
        </div>
      </div>
    </section>
  </main>
);
