import React from "react";

export const Card: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <div
    className={`rounded-2xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow ${
      className ?? ""
    }`}
  >
    {children}
  </div>
);
