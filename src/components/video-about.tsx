import React from "react";
import { Card } from "./card";

export const VideoAbout: React.FC = () => (
  <section className="py-16 lg:py-24 bg-neutral-50">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold">
            Local Content, Global Standards
          </h3>
          <p className="mt-3 text-neutral-600 leading-relaxed">
            Hyprops-LPS is constantly focused on seeking out opportunities for
            growth and advancement. Find out about our journey so far.
          </p>
        </div>
        <Card>
          <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-black/5">
            <div className="h-full w-full flex items-center justify-center text-neutral-500">
              Video Placeholder
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
);
