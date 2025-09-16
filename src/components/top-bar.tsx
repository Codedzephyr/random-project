import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

const NavA: React.FC<{ to: string; label: string }> = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `text-sm md:text-[15px] font-medium px-3 py-2 transition ${
        isActive ? "text-neutral-900" : "text-neutral-700 hover:text-neutral-900"
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

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // add bg after scrolling
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if we’re on the homepage
  const isHome = location.pathname === "/" || location.pathname === "/#";

  // Background logic
  const headerClasses = isHome && !scrolled
    ? "bg-transparent border-transparent"
    : "bg-white/90 border-b border-neutral-200 backdrop-blur";

  return (
    <header
      className={`sticky top-0 z-30 w-full transition-colors duration-300 ${headerClasses}`}
    >
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="inline-flex items-center gap-2">
          <img
            src="/images/logo.png"
            alt="LPS-HYPROPS Logo"
            className="max-h-16"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <NavA to="/about" label="About Us" />
          <NavA to="/services" label="Services" />
          <NavA to="/projects" label="Projects" />
          <NavA to="/partners" label="Partners" />
          <NavA to="/careers" label="Careers" />
          <NavA to="/contact" label="Contact" />
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
            <NavA to="/services" label="Services" />
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
