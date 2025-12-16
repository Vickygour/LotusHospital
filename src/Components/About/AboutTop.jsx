import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { ArrowRight, ChevronRight, Phone, MapPin } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const AboutTop = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1920&h=1080&fit=crop",
      title: "Lotus Multispeciality Hospital",
      description: `Delivering advanced, compassionate, and affordable healthcare since 2002 — with expert doctors, modern technology, and a patient-first approach for every family.`,
    },
  ];

  return (
    <section className="relative w-full h-[500px] md:mt-40 mt-20 overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          el: ".hero-pagination",
          bulletClass: "hero-bullet",
          bulletActiveClass: "hero-bullet-active",
        }}
        loop={true}
        speed={1200}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              {/* Background Image with Blur */}
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover blur-[2px]" /* BLUR ADDED */
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-transparent"></div>
              </div>

              {/* CONTENT */}
              <div className="relative h-full max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex items-center h-full">
                  <div className="w-full lg:w-3/4 text-white">
                    <p className="text-sm md:text-base mb-3 text-gray-200">
                      Trusted • Compassionate • Affordable Care
                    </p>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
                      {slide.title}
                    </h1>

                    <p className="text-base md:text-lg text-gray-200 mb-6 max-w-xl leading-relaxed">
                      {slide.description}
                    </p>

                    {/* ADDRESS */}
                    <div className="flex items-start gap-3 text-white/90 mb-8">
                      <MapPin size={22} className="mt-1" />
                      <p className="text-sm md:text-base leading-relaxed max-w-md">
                        Bus Stop, Opp. Main Market, Virendar Nagar, <br />
                        Block B, Sant Nagar, Burari, Delhi – 110084.
                      </p>
                    </div>

                    {/* CTA BUTTONS */}
                    <div className="flex flex-wrap gap-4">
                      <button className="flex items-center gap-2 bg-[#13C5DD] hover:bg-[#0FA8C0] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg">
                        <Phone size={20} />
                        011-49785874
                      </button>
                    </div>
                  </div>
                </div>

                {/* Breadcrumb */}
                <div className="absolute bottom-8 right-8 flex items-center gap-2 text-white text-sm">
                  <a
                    href="/"
                    className="hover:text-[#13C5DD] transition-colors"
                  >
                    Home
                  </a>
                  <ChevronRight size={16} />
                  <span>About</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination */}
      <div className="hero-pagination absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3"></div>

      <style jsx>{`
        :global(.hero-bullet) {
          width: 40px;
          height: 4px;
          background: white;
          opacity: 0.3;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        :global(.hero-bullet-active) {
          background: #13c5dd;
          opacity: 1;
          width: 50px;
        }
        :global(.hero-bullet:hover) {
          opacity: 0.7;
        }
      `}</style>
    </section>
  );
};

export default AboutTop;
