import React from "react";
import { Link } from "react-router-dom";

export const Hero: React.FC = () => (
  <section className="relative min-h-screen w-full overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 z-0">
      <img
        src="/background.jpg"
        alt="Hero background"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
    </div>

    {/* Centered content */}
    <div className="absolute inset-0 z-10 flex items-center justify-center">
      <div className="mx-auto max-w-7xl px-4 text-center text-white">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-wide leading-snug whitespace-pre-line">
          DELIVERING QUALITY SERVICE AND
          <br />
          UNPARALLELLED INDUSTRY EXPERTISE
        </h1>

        <div className="mt-6">
          <Link
            to="/about"
            className="inline-flex items-center justify-center rounded-xl border border-white/70 bg-white/10 px-6 py-3 text-sm font-semibold hover:bg-white/20"
          >
            ABOUT US
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
