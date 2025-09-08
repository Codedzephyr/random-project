import React from "react";

interface pageheroProps {
  title: string;
  image: string;
}

const pagehero: React.FC<pageheroProps> = ({ title, image }) => {
  return (
    <section
      className="relative h-64 md:h-80 lg:h-96 flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      {/* Title */}
      <h1 className="relative z-10 text-3xl md:text-4xl font-extrabold tracking-tight">
        {title}
      </h1>
    </section>
  );
};

export default pagehero;
