import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const NavA: React.FC<{ to: string; label: string }> = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }: { isActive: boolean }) =>
      `text-sm md:text-[15px] font-medium px-3 py-2 transition-colors ${
        isActive
          ? "text-neutral-900"
          : "text-neutral-700 hover:text-neutral-900"
      }`
    }
    end
  >
    {label}
  </NavLink>
);

export const TopBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const nav = [
    { to: "/management-team", label: "Management Team" },
    { to: "/projects", label: "Projects" },
    { to: "/partners", label: "Partners" },
    { to: "/careers", label: "Careers" },
    { to: "/contact", label: "Contact" },
  ];

  const services = [
    { to: "/services/engineering-solutions", label: "Engineering Solutions" },
    { to: "/services/fabrication-construction", label: "Fabrication & Construction" },
    { to: "/services/subsea-life-of-field", label: "Subsea Life of Field" },
    { to: "/services/operations-maintenance", label: "Operations & Maintenance" },
    { to: "/services/manpower-outsourcing", label: "Manpower Outsourcing" },
    { to: "/services/procurement-supply-chain", label: "Procurement & Supply Chain" },
  ];

  return (
    <header className="sticky top-0 z-30 w-full border-b border-neutral-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group inline-flex items-center gap-2">
            <img
              src="/images/logo.png"
              alt="Hyprops-LPS Logo"
              className="max-h-12 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight group-hover:opacity-90">
                HYPROPS-LPS
              </span>
              <span className="-mt-1 text-[10px] tracking-wide text-neutral-500">
                Local Content | Global Standards
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            {/* Services Dropdown (clickable link + dropdown) */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <NavLink
                to="/services"
                className="text-sm md:text-[15px] font-medium px-3 py-2 hover:text-neutral-900 text-neutral-700"
              >
                Services ▾
              </NavLink>
              {servicesOpen && (
                <div className="absolute left-0 mt-2 w-72 bg-white border border-neutral-200 shadow-lg rounded-lg">
                  {services.map((s) => (
                    <NavLink
                      key={s.to}
                      to={s.to}
                      className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100"
                    >
                      {s.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {/* Other Nav Links */}
            {nav.map((n) => (
              <NavA key={n.to} to={n.to} label={n.label} />
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90"
            >
              Get in touch
            </Link>
            <button
              className="inline-flex md:hidden items-center justify-center rounded-xl border border-neutral-200 p-2"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex flex-col">
            {/* Services Submenu */}
            <details>
              <summary className="px-3 py-2 text-sm font-medium cursor-pointer">
                <Link to="/services">Services</Link>
              </summary>
              <div className="pl-4">
                {services.map((s) => (
                  <NavLink
                    key={s.to}
                    to={s.to}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 text-sm text-neutral-700"
                  >
                    {s.label}
                  </NavLink>
                ))}
              </div>
            </details>

            {/* Other links */}
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm text-neutral-800"
              >
                {n.label}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white shadow-sm"
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
