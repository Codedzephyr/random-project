import React from "react";

export const Footer: React.FC = () => (
  <footer className="bg-[#163A5B] text-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid gap-10 md:grid-cols-4 items-start">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-xl bg-white/90" />
            <div className="leading-tight">
              <div className="font-extrabold tracking-wide">
                HYPROPS NIGERIA LIMITED
              </div>
              <div className="text-[11px] opacity-80">
                LOCAL CONTENT | GLOBAL STANDARDS
              </div>
            </div>
          </div>
          <div className="mt-4 h-20 w-40 rounded-lg bg-white/10 flex items-center justify-center text-xs">
            ISO Badge
          </div>
        </div>
        <div>
          <div className="text-sm font-bold tracking-wide">OUR SERVICES</div>
          <ul className="mt-3 space-y-2 text-sm opacity-90">
            {[
              "Machine Shop",
              "Subsea Life of Field",
              "Procurement & SCM",
              "Marine Maintenance",
              "EPCI & EPCM",
              "Facilities O&M",
              "Training & Capacity",
              "Manpower Outsourcing",
            ].map((i) => (
              <li key={i} className="hover:opacity-100 opacity-80">
                {i}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-bold tracking-wide">CONTACT</div>
          <ul className="mt-3 space-y-2 text-sm opacity-90">
            <li>+234 (201) 271 7297, +234 (201) 271 7298</li>
            <li>info@hyprops.com</li>
            <li>HyGroup Place – 6, Ojulari Street, Lekki Phase 1, Lagos</li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-bold tracking-wide">
            SOCIAL MEDIA LINKS
          </div>
          <div className="mt-3 flex items-center gap-3 text-sm opacity-90">
            {["F", "X", "in", "@"].map((i) => (
              <div
                key={i}
                className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center"
              >
                {i}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-white/10 pt-6 text-xs opacity-80">
        © {new Date().getFullYear()} Hyprops Nigeria Limited · Privacy Policy
      </div>
    </div>
  </footer>
);
