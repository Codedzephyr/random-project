import React from "react";
import { Hero } from "../components/hero";
import { Intro } from "../components/intro";
import { Services } from "../components/home-service";
import { Partners } from "../components/partners";
import { VideoAbout } from "../components/video-about";
import PartnersSlider from "../components/partners-slider";
// import { Hero } from "../sections/home/Hero";
// import { Intro } from "../sections/home/Intro";
// import { Services } from "../sections/home/Services";
// import { Partners } from "../sections/home/Partners";
// import { VideoAbout } from "../sections/home/VideoAbout";

export const HomePage: React.FC = () => (
  <main>
    <Hero />
    <PartnersSlider />
    <Intro />
    <Services />
    <Partners />
    <VideoAbout />
  </main>
);
