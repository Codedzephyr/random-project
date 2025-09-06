import React from "react";
import { Card } from "./card";
import { PlaceholderImage } from "./placeholder-image";
// import { Card } from "../../components/ui/Card";
// import { PlaceholderImage } from "../../components/ui/PlaceholderImage";

export const Intro: React.FC = () => (
  <section className="bg-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-2 items-center">
        <PlaceholderImage className="aspect-[4/3]" label="Head office photo" />
        <Card>
          <div className="p-8">
            <h4 className="text-sm font-bold text-sky-700">
              Welcome to Hyprops
            </h4>
            <h3 className="mt-2 text-2xl md:text-3xl font-extrabold tracking-tight">
              INNOVATIVE SOLUTIONS
              <br />
              QUALITY SERVICES
            </h3>
            <p className="mt-3 text-neutral-600 leading-relaxed">
              Over the last 25 years, we have built our organisation around a
              set of values that ensures everyone on the team works in synergy
              to deliver our objectives. Our success is seen in how our client
              list and size/complexity of work has grown rapidly over the years.
            </p>
            <button className="mt-5 inline-flex items-center rounded-xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white">
              READ MORE
            </button>
          </div>
        </Card>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-4 md:max-w-md">
        {[
          { k: "Years of Experience", v: "25+" },
          { k: "Projects Completed", v: "1,250+" },
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
