import React from "react";
import { Link } from "react-router-dom";
import { Clock, Activity, Users, Pill, Zap, Hospital } from "lucide-react";

const WhylotusHospitals = () => {
  const ACCENT = "#283B6A"; // dark blue accent like the screenshot
  const ICON_BG = "#E6F7F4"; // light teal circle behind icons
  const ICON_COLOR_CLASS = "text-teal-600";

  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24+ years of excellence in healthcare",
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Expert Care Across Diverse Specialties",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Dedicated Medical Staff 24/7",
    },
    {
      icon: <Pill className="w-6 h-6" />,
      title: "Pharmacy Services at Your Convenience",
    },
    { icon: <Zap className="w-6 h-6" />, title: "Cutting Edge Technology" },
    {
      icon: <Hospital className="w-6 h-6" />,
      title: "ICU – 6 Bed  ",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE CONTENT */}
          <div className="pr-6 md:mt-12">
            <h3 className="text-2xl font-extrabold" style={{ color: ACCENT }}>
              Why Lotus Multispeciality Hospital ??
            </h3>

            <p className="mt-6 text-gray-600 max-w-xl leading-relaxed">
              Lotus Multispeciality Hospital stands as a beacon of health
              excellence, driven by our core mission to provide Exceptional
              Medical Care with Unwavering Compassion. We seamlessly integrate
              cutting-edge medical technology with a highly experienced and
              dedicated team of specialists. Our philosophy is rooted in a
              patient-centric approach, ensuring personalized attention and
              superior outcomes. At Lotus, your well-being isn't just a
              priority—it is the foundation of everything we do.
            </p>

            <Link to="/About-us" className="inline-block mt-8">
              <button
                className="px-6 py-3 rounded-md text-white font-medium shadow-md transition-transform transform hover:-translate-y-0.5"
                style={{ backgroundColor: ACCENT }}
              >
                Read More About Us
              </button>
            </Link>
          </div>

          {/* RIGHT SIDE ICON GRID */}
          <div className="relative rounded-2xl p-7 sm:p-9">
            {/* Vertical Center Divider */}
            <div
              className="hidden lg:block absolute inset-y-0 left-1/2 w-px -translate-x-1/2"
              style={{ backgroundColor: "#E8ECEF" }}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
              {features.map((f, i) => {
                const addBottomBorder = i < 4; // first 2 rows

                return (
                  <div
                    key={i}
                    className={`
            group relative flex items-center gap-5 px-5 py-7 rounded-xl 
            transition-all duration-300 cursor-pointer
            ${addBottomBorder ? "border-b" : ""}
          `}
                    style={{ borderColor: "#E8ECEF" }}
                  >
                    {/* ICON */}
                    <div className="flex-shrink-0">
                      <div
                        className="
                w-14 h-14 rounded-full flex items-center justify-center 
                transition-all duration-300
                group-hover:scale-110 group-hover:shadow-md
              "
                        style={{ backgroundColor: ICON_BG }}
                      >
                        <span
                          className={`
                  text-2xl ${ICON_COLOR_CLASS}
                  transition-all duration-300 group-hover:text-teal-700
                `}
                        >
                          {f.icon}
                        </span>
                      </div>
                    </div>

                    {/* TITLE */}
                    <div className="transition-all duration-300 group-hover:translate-x-1">
                      <p
                        className="text-lg font-semibold transition-colors duration-300"
                        style={{ color: ACCENT, whiteSpace: "pre-line" }}
                      >
                        {f.title}
                      </p>
                    </div>

                    {/* Hover Border Glow */}
                    <div
                      className="
              absolute inset-0 rounded-xl opacity-0 
              group-hover:opacity-100 transition-all duration-300 pointer-events-none
            "
                      style={{
                        boxShadow: "0 0 16px rgba(40, 59, 106, 0.22)",
                        border: `1px solid ${ACCENT}`,
                      }}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhylotusHospitals;
