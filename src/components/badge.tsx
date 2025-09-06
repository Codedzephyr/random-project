import React from "react";

export const Badge: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <span className="rounded-full bg-neutral-900 text-white text-[11px] font-semibold px-2.5 py-1">
    {children}
  </span>
);
