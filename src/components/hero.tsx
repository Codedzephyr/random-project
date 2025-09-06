import React from "react";
import { Link } from "react-router-dom";

export const Hero: React.FC = () => (
  <section className="relative min-h-[76vh] w-full overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <img
        src="/background.jpg" // <-- from public/
        alt="Hero background"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
    </div>

    {/* Content */}
    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 flex items-center">
      <div className="w-full text-center text-white">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-wide">
          DELIVERING QUALITY SERVICE AND
          <br className="hidden sm:block" /> UNPARALLELLED INDUSTRY EXPERTISE
        </h1>
        <Link
          to="/about"
          className="mt-8 inline-flex items-center justify-center rounded-xl border border-white/70 bg-white/10 px-6 py-3 text-sm font-semibold hover:bg-white/20"
        >
          ABOUT US
        </Link>
      </div>
    </div>
  </section>
);
