import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper-bundle.css';


const partners = [
  {
    id: "spongejet",
    title: "Sponge-Jet",
    img: "/images/spongejet.jpg",
  },
  {
    id: "tesla",
    title: "Tesla Nanocoatings",
    img: "/images/tesla.jpg",
  },
  { id: "durapol", title: "DuraPol", img: "/images/partners/durapol.jpg" },
  { id: "hcs", title: "HCS Control Systems", img: "/images/partners/hcs.jpg" },
  {
    id: "pico",
    title: "Pico Flow Controls (AYMO)",
    img: "/images/pico.jpg",
  },
];

const PartnersSlider: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xl font-bold text-neutral-800">Our Partners</h2>
        <p className="mt-2 text-sm text-neutral-600">
          Trusted technology partnerships driving innovation.
        </p>
      </div>

      <div className="mt-8">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {partners.map((p) => (
            <SwiperSlide key={p.id}>
              <a href="">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-24 w-auto object-contain mx-auto grayscale hover:grayscale-0 transition"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PartnersSlider;
