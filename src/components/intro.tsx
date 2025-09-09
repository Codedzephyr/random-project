import React from "react";
import { Card } from "./card";

export const Intro: React.FC = () => (
  <section className="bg-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-2 items-center">
        {/* Replace placeholder with actual image */}
        <img
          src="/images/home-section-1.jpg"
          alt="Hyprops-LPS Head Office"
          className="rounded-lg shadow-md object-cover w-full h-80"
        />

        <Card>
          <div className="p-8">
            <h4 className="text-sm font-bold text-sky-700">
              Welcome to Hyprops-LPS
            </h4>
            <h3 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight">
              LOCAL CONTENT
              <br />
              GLOBAL STANDARDS
            </h3>
            <p className="mt-3 text-neutral-600 leading-relaxed">
              LPS Hyprops – Oil & Gas Service, LDA is an Angolan-owned joint
              venture between LPS Lda and Hyprops Nigeria Limited, representing
              HyGroup.
              <br />
              <br />
              By leveraging LPS Lda’s industrial services and Hyprops Nigeria’s
              oilfield expertise, we deliver engineering, procurement,
              fabrication, construction, installation, subsea life-of-field,
              operations & maintenance, manpower outsourcing, and supply chain
              management.
              <br />
              <br />
              We are committed to world-class safety, environmental stewardship,
              and promoting local content across all our operations.
            </p>
            <button className="mt-5 inline-flex items-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white">
              READ MORE
            </button>
          </div>
        </Card>
      </div>

      {/* Stats */}
      <div className="mt-10 grid grid-cols-2 gap-4 md:max-w-md">
        {[
          { k: "Years of Experience", v: "—" },
          { k: "Projects Completed", v: "—" },
        ].map((s) => (
          <div
            key={s.k}
            className="rounded-xl border border-neutral-200 bg-white p-5 text-center"
          >
            <div className="text-2xl font-extrabold">{s.v}</div>
            <div className="mt-1 text-xs tracking-wide text-neutral-500">
              {s.k.toUpperCase()}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
