import React from "react";
import { HeartHandshake, Target } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#283B6A]">
            Our Mission & Vision
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A commitment to compassionate care, clinical excellence, and a
            healthier tomorrow.
          </p>
        </div>

        {/* Two Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* MISSION */}
          <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-[#13C5DD]/10 rounded-full flex items-center justify-center">
                <HeartHandshake size={32} className="text-[#13C5DD]" />
              </div>
              <h3 className="text-3xl font-bold text-[#283B6A]">Our Mission</h3>
            </div>

            <ul className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <li className="flex gap-3">
                <span className="text-[#13C5DD] text-xl">•</span>
                Deliver ethical, safe, and patient-centered healthcare.
              </li>
              <li className="flex gap-3">
                <span className="text-[#13C5DD] text-xl">•</span>
                Provide advanced medical treatment using modern technology.
              </li>
              <li className="flex gap-3">
                <span className="text-[#13C5DD] text-xl">•</span>
                Ensure compassionate support for patients & families.
              </li>
              <li className="flex gap-3">
                <span className="text-[#13C5DD] text-xl">•</span>
                Promote transparency, trust, and comfort throughout care.
              </li>
            </ul>
          </div>

          {/* VISION */}
          <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-[#283B6A]/10 rounded-full flex items-center justify-center">
                <Target size={32} className="text-[#283B6A]" />
              </div>
              <h3 className="text-3xl font-bold text-[#283B6A]">Our Vision</h3>
            </div>

            <ul className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <li className="flex gap-3">
                <span className="text-[#283B6A] text-xl">•</span>
                Become a leading centre of excellence in modern healthcare.
              </li>
              <li className="flex gap-3">
                <span className="text-[#283B6A] text-xl">•</span>
                Inspire confidence with innovative medical solutions.
              </li>
              <li className="flex gap-3">
                <span className="text-[#283B6A] text-xl">•</span>
                Expand specialized departments & advanced diagnostics.
              </li>
              <li className="flex gap-3">
                <span className="text-[#283B6A] text-xl">•</span>
                Create a healing environment built on dignity & hope.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
