import React from "react";
import { Microscope, Scissors, Pill, Users, ArrowRight } from "lucide-react";
import ICU from "../../assets/gallery8.jpg";
import Patient from "../../assets/Corridor.jpg";
import Pharmacy from "../../assets/pharmacy1.jpg";

const OurFacilities = () => {
  const facilities = [
    {
      id: 1,
      title: "Laboratory",
      description:
        "Empowering accurate diagnosis with modern testing equipment and expert lab professionals. Fast reporting & advanced pathology services ensuring better treatment decisions.",
      image:
        "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1200&h=800&fit=crop",
      accent: "#00B8DB",
    },
    {
      id: 2,
      title: "Operation Theatre",
      description:
        "State-of-the-art OT with advanced surgical technology, strict infection control & experienced surgeons. Delivering safe, successful & patient-focused surgical outcomes.",
      image: ICU,
      accent: "#283B6A",
    },
    {
      id: 3,
      title: "Pharmacy & Drug Dispensary",
      description:
        "Fully equipped hospital pharmacy offering genuine medicines & medical essentials round the clock. Efficient dispensing system to ensure accuracy and patient convenience.",
      image: Pharmacy,
      accent: "#00B8DB",
    },
    {
      id: 4,
      title: "Patient & Visitor Amenities",
      description:
        "Comfortable waiting lounges, cafeteria facilities, clean restrooms & supportive staff. Designed to ensure convenience, safety & a stress-free hospital experience.",
      image: Patient,
      accent: "#283B6A",
    },
  ];

  return (
    <section className="relative py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#283B6A] mb-3">
            Our Facilities
          </h2>
          <p className="text-gray-700 text-md md:text-lg max-w-2xl mx-auto leading-relaxed">
            Explore Lotus Multispeciality Hospital's key facilities designed to
            deliver advanced medical care, world-class technology, and a
            comfortable healing environment for every patient.
          </p>
          <div className="w-20 h-1 bg-[#00B8DB] mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Two-column rows, constrained width */}
        <div className="space-y-8">
          {/*
            We render facility cards in pairs to create rows with alternating image placement.
            On mobile they stack vertically.
          */}
          {Array.from({ length: Math.ceil(facilities.length / 2) }).map(
            (_, rowIndex) => {
              const left = facilities[rowIndex * 2];
              const right = facilities[rowIndex * 2 + 1];
              return (
                <div
                  key={rowIndex}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch"
                >
                  {/* LEFT CARD */}
                  {left && (
                    <article className="flex flex-col md:flex-row bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
                      {/* image left on desktop */}
                      <div className="w-full md:w-44 h-40 md:h-auto flex-shrink-0 overflow-hidden">
                        <img
                          src={left.image}
                          alt={left.title}
                          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                          style={{ minHeight: 160 }}
                        />
                      </div>

                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg md:text-xl font-semibold text-[#283B6A]">
                            {left.title}
                          </h3>
                          <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                            {left.description}
                          </p>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                          <div
                            className="h-1 w-20 rounded-full"
                            style={{ backgroundColor: left.accent }}
                          />
                          {/* <button className="flex items-center gap-2 text-sm font-medium text-[#283B6A] hover:text-[#283B6A]">
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                          </button> */}
                        </div>
                      </div>
                    </article>
                  )}

                  {/* RIGHT CARD */}
                  {right ? (
                    <article className="flex flex-col md:flex-row-reverse bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
                      {/* image right on desktop */}
                      <div className="w-full md:w-44 h-40 md:h-auto flex-shrink-0 overflow-hidden">
                        <img
                          src={right.image}
                          alt={right.title}
                          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                          style={{ minHeight: 160 }}
                        />
                      </div>

                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg md:text-xl font-semibold text-[#283B6A]">
                            {right.title}
                          </h3>
                          <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                            {right.description}
                          </p>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                          <div
                            className="h-1 w-20 rounded-full"
                            style={{ backgroundColor: right.accent }}
                          />
                          {/* <button className="flex items-center gap-2 text-sm font-medium text-[#283B6A] hover:text-[#283B6A]">
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                          </button> */}
                        </div>
                      </div>
                    </article>
                  ) : (
                    // If there is no right card (odd number), keep layout consistent with an empty placeholder
                    <div />
                  )}
                </div>
              );
            }
          )}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 text-sm italic">
            Our facilities are designed with patient care and comfort as the top
            priority, ensuring world-class treatment outcomes.
          </p>
        </div>
      </div>

      {/* Soft decorative blobs for subtle depth (non-intrusive) */}
      <div className="absolute top-10 left-4 w-28 h-28 bg-[#00B8DB]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-4 w-32 h-32 bg-[#283B6A]/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default OurFacilities;
