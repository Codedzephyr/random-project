import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

const NavA: React.FC<{ to: string; label: string; white?: boolean }> = ({ to, label, white }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `text-sm md:text-[15px] font-medium px-3 py-2 transition ${
        white
          ? "text-white hover:text-white/80"
          : isActive
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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/" || location.pathname === "/#";
  const isTransparent = isHome && !scrolled;

  return (
    <header
      className={`sticky top-0 z-30 w-full transition-colors duration-300 ${
        isTransparent ? "bg-transparent border-transparent" : "bg-white/90 border-b border-neutral-200 backdrop-blur"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="inline-flex items-center gap-2">
          <img
            src="/images/newlogo.png"
            alt="LPS-HYPROPS Logo"
            className="max-h-16"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <NavA to="/about" label="About Us" white={isTransparent} />
          <div className="relative group">
            <NavA to="/services" label="Services ▾" white={isTransparent} />
            <div className="absolute left-0 mt-2 hidden w-64 bg-white border border-neutral-200 shadow-lg rounded-lg group-hover:block">
              <NavLink to="/services/engineering-solutions" className="block px-4 py-2 text-sm hover:bg-neutral-100">Engineering Solutions</NavLink>
              <NavLink to="/services/fabrication-construction" className="block px-4 py-2 text-sm hover:bg-neutral-100">Fabrication & Construction</NavLink>
              <NavLink to="/services/subsea-life-of-field" className="block px-4 py-2 text-sm hover:bg-neutral-100">Subsea Life of Field</NavLink>
              <NavLink to="/services/operations-maintenance" className="block px-4 py-2 text-sm hover:bg-neutral-100">Operations & Maintenance</NavLink>
              <NavLink to="/services/manpower-outsourcing" className="block px-4 py-2 text-sm hover:bg-neutral-100">Manpower Outsourcing</NavLink>
              <NavLink to="/services/procurement-supply-chain" className="block px-4 py-2 text-sm hover:bg-neutral-100">Procurement & Supply Chain</NavLink>
            </div>
          </div>
          <NavA to="/projects" label="Projects" white={isTransparent} />
          <NavA to="/partners" label="Partners" white={isTransparent} />
          <NavA to="/careers" label="Careers" white={isTransparent} />
          <NavA to="/contact" label="Contact" white={isTransparent} />
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 border border-neutral-200 rounded"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24">
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-white border-t border-neutral-200">
          <div className="px-4 py-3 flex flex-col">
            <NavA to="/about" label="About Us" />
            <details>
              <summary className="px-3 py-2 text-sm font-medium cursor-pointer">Services</summary>
              <div className="pl-4">
                <NavLink to="/services/engineering-solutions" onClick={() => setOpen(false)} className="block py-1">Engineering Solutions</NavLink>
                <NavLink to="/services/fabrication-construction" onClick={() => setOpen(false)} className="block py-1">Fabrication & Construction</NavLink>
                <NavLink to="/services/subsea-life-of-field" onClick={() => setOpen(false)} className="block py-1">Subsea Life of Field</NavLink>
                <NavLink to="/services/operations-maintenance" onClick={() => setOpen(false)} className="block py-1">Operations & Maintenance</NavLink>
                <NavLink to="/services/manpower-outsourcing" onClick={() => setOpen(false)} className="block py-1">Manpower Outsourcing</NavLink>
                <NavLink to="/services/procurement-supply-chain" onClick={() => setOpen(false)} className="block py-1">Procurement & Supply Chain</NavLink>
              </div>
            </details>
            <NavA to="/projects" label="Projects" />
            <NavA to="/partners" label="Partners" />
            <NavA to="/careers" label="Careers" />
            <NavA to="/contact" label="Contact" />
          </div>
        </div>
      )}
    </header>
  );
};
