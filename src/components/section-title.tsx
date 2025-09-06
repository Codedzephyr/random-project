import React from "react";

export const SectionTitle: React.FC<{
  eyebrow?: string;
  title: string;
  subtitle?: string;
}> = ({ eyebrow, title, subtitle }) => (
  <div className="max-w-2xl">
    {eyebrow && (
      <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide text-neutral-600 border-neutral-200 bg-white/50">
        {eyebrow}
      </div>
    )}
    <h2 className="mt-3 text-2xl md:text-4xl font-bold tracking-tight text-neutral-900">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-3 text-neutral-600 leading-relaxed">{subtitle}</p>
    )}
  </div>
);
