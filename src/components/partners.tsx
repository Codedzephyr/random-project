import React from "react";
import { Link } from "react-router-dom";
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

      {/* Executive team callout */}
      <div className="mt-16 grid items-center gap-8 lg:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold">Meet Our Executive Team</h3>
          <p className="mt-2 text-neutral-600">
            Our executive team is made up of a group of industry leaders in each
            of their respective fields…
          </p>
          <Link
            to="/management-team"
            className="mt-5 inline-flex items-center rounded-xl bg-slate-800 px-4 py-2 text-sm font-semibold text-white"
          >
            VIEW ALL
          </Link>
        </div>

        <Card>
          <div className="relative">
            {/* Replaced placeholder with real image */}
            <img
              src="/images/home-section-2.jpg"
              alt="Executive quote banner"
              className="aspect-[16/9] w-full h-auto rounded-lg object-cover"
            />
            <div className="absolute inset-0 p-8 flex items-end bg-black/30 rounded-lg">
              <blockquote className="max-w-lg text-white text-lg leading-relaxed">
                <span className="mr-2 text-3xl font-bold">“</span>
                Teamwork, synergy, and innovative thinking are crucial traits for
                companies striving to deliver exceptional service in a rapidly
                evolving world.
                <span className="ml-1 text-2xl">”</span>
              </blockquote>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
);
