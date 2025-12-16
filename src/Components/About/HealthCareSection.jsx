import React from "react";
import { ArrowRight, Quote } from "lucide-react";
import SunilSir from "../../assets/SunilSir.jpg";

const HealthCareSection = () => {
  return (
    <section className="relative w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-[#283B6A] leading-tight mb-8">
              Caring for Life Since 2002
            </h2>

            {/* Philosophy Section */}
            <div className="bg-gray-50 p-6 rounded-lg mb-6 border-l-4 border-[#13C5DD]">
              <h3 className="text-xl font-bold text-[#283B6A] mb-3">
                Our Philosophy
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                At Lotus Hospital, we believe healthcare goes beyond treatment —
                it's about healing with compassion, comfort, and commitment.
                Every patient who walks through our doors is treated as part of
                the Lotus family, receiving personalized care in a clean, safe,
                and healing environment.
              </p>
            </div>

            {/* Right Side - MD Message */}
            <div className="bg-gradient-to-br from-[#13C5DD] to-[#0FA8C0] p-10 rounded-2xl text-white relative overflow-hidden mb-5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

              <div className="relative z-10">
                <Quote size={48} className="text-white/30 mb-4" />
                <p className="text-white text-base leading-relaxed mb-6">
                  At Lotus Hospital, our mission is to deliver medical
                  excellence with a human touch. Every member of our team
                  strives to ensure that patients receive the best possible care
                  — not only in terms of treatment but also compassion and
                  trust. Over the years, we've built a hospital where advanced
                  medicine meets genuine empathy. Our commitment is and will
                  always be — Your Health, Our Priority.
                </p>
                <div className="border-t border-white/30 pt-4">
                  <p className="font-bold text-lg">Mr. Sunil Dutt</p>
                  <p className="text-white/90 text-sm">
                    M.D., Founder & Managing Director
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={SunilSir}
                alt="Healthcare Professional"
                className="w-full h-[500px] md:h-[600px] object-cover"
              />
              {/* Subtle overlay for better text visibility if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>

            {/* Decorative Elements - Optional */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#13C5DD]/10 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#283B6A]/5 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
      </div>

      {/* Background Decorative Circle - Top Right */}
      <div className="absolute top-8 right-8 w-3 h-3 bg-gray-300 rounded-full"></div>
      <div className="absolute top-8 right-20 w-3 h-3 border-2 border-gray-300 rounded-full"></div>
    </section>
  );
};

export default HealthCareSection;
