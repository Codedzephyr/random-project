import React from "react";
import { Card } from "./card";
import { PlaceholderImage } from "./placeholder-image";
// import { Card } from "../../components/ui/Card";
// import { PlaceholderImage } from "../../components/ui/PlaceholderImage";

export const TeamCard: React.FC<{
  name: string;
  role: string;
  bio: string;
  img: string;
}> = ({ name, role, bio, img }) => (
  <Card>
    <div className="grid gap-6 p-6 sm:grid-cols-3">
      <PlaceholderImage
        className="aspect-[4/5] sm:col-span-1"
        label="Portrait"
      />
      <div className="sm:col-span-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold">{name}</h3>
            <div className="text-xs tracking-wide text-neutral-500">
              {role.toUpperCase()}
            </div>
          </div>
          <div className="flex items-center gap-2">
            {["f", "in", "@"].map((i) => (
              <span
                key={i}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200"
              >
                {i}
              </span>
            ))}
          </div>
        </div>
        <p className="mt-3 text-sm text-neutral-600 leading-relaxed">{bio}</p>
        <img src={img} alt="background" />
      </div>
    </div>
  </Card>
);
