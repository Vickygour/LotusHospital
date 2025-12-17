import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../assets/Image2.jpg";
import img2 from "../assets/lotus-multispeciality-hospital-burari-delhi-hospitals-tk86l7gabv.jpg";
import img3 from "../assets/Imagehjdj.jpg";
import img4 from "../assets/djjjj.jpg";
import img5 from "../assets/Corridor.jpg";
import img6 from "../assets/General2.jpg";
import {
  ConciergeBell,
  Languages,
  Sofa,
  Phone,
  ClipboardList,
  Bell,
  CheckCircle,
} from "lucide-react";

const COLORS = {
  deep: "#0b5560",
  accent: "#19a6a6",
  warm: "#ff914d",
  muted: "#6b7280",
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const roomHighlights = [
  {
    images: [img3, img2], // Multiple images for each room type
    title: "Private Rooms",
    description:
      "Choose from a range of premium private and semi-private rooms designed to offer comfort, privacy, and a peaceful healing environment.",
    points: [
      "Noise-controlled environment",
      "Hygienic and well-ventilated rooms",
      "Daily housekeeping and linen change",
    ],
  },
  {
    images: [img4, img2],
    title: "Semi Private Rooms",
    description:
      "Enjoy a diverse, nutritious, and hygienic menu curated by our dietary and culinary team as per your medical and personal preferences.",
    points: [
      "Dietitian-approved meal plans",
      "Custom meals for diabetic, cardiac & pediatric patients",
      "Timely meal service at your convenience",
    ],
  },
  {
    images: [img2, img6],
    title: "General Rooms",
    description:
      "Our skilled nursing team is available round the clock to monitor your condition, administer medication, and support all your clinical needs.",
    points: [
      "Regular vitals monitoring",
      "Dedicated nurse allocation for critical cases",
      "Compassionate bedside assistance",
    ],
  },
  {
    images: [img5],
    title: "Corridor Rooms",
    description:
      "Stay connected and relaxed with multiple entertainment options, helping you feel more at home during your hospital stay.",
    points: [
      "LED TV with multiple channels",
      "High-speed Wi‑Fi connectivity",
      "Charging points near bed and seating",
    ],
  },
];

const specialServices = [
  {
    icon: ConciergeBell,
    title: "Concierge Assistance",
    description:
      "From arranging transport and pharmacy support to guiding attendants, our concierge team helps with all non-medical requirements.",
  },
  {
    icon: Languages,
    title: "Interpreter Support",
    description:
      "For patients and families more comfortable in other languages, interpreter services ensure clear and respectful communication.",
  },
  {
    icon: Sofa,
    title: "Comfortable Furnishings",
    description:
      "Spacious rooms with comfortable beds, attendant couch, ample storage, and soothing interiors to promote relaxation and recovery.",
  },
];

const howToRequest = [
  {
    icon: Phone,
    title: "Contact the Front Desk",
    description:
      "Dial the room service or front desk number from your bedside phone for any room-related request or assistance.",
  },
  {
    icon: ClipboardList,
    title: "Share Your Preferences",
    description:
      "Inform our team about your room preferences, meal choices, dietary restrictions, or any special requirements.",
  },
  {
    icon: Bell,
    title: "Nursing & On‑Call Support",
    description:
      "Use the bedside call‑bell for immediate nursing assistance at any time, day or night.",
  },
];

const RoomFacilities = () => {
  return (
    <div className="w-full pt-35">
      {/* Hero Section */}
      <section
        className="relative w-full h-[340px] md:h-[420px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${img5})`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: `${COLORS.deep}CC` }}
        ></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 h-full flex flex-col items-center justify-center px-4"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight text-center">
            ROOM FACILITIES
          </h1>
          <p className="mt-3 text-white/90 text-sm md:text-base max-w-xl text-center">
            Comfort‑focused, patient‑centric rooms at Lotus Hospital to support
            your healing journey.
          </p>
          <div className="mt-5 flex items-center gap-2 text-white/90 text-sm md:text-base">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>›</span>
            <Link to="/service" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>›</span>
            <span className="text-white font-medium">Room Facilities</span>
          </div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight"
              style={{ color: COLORS.deep }}
            >
              Room Services at Lotus Hospital
            </h2>
            <p
              className="mt-4 text-base md:text-lg leading-relaxed"
              style={{ color: COLORS.muted }}
            >
              Experience comfort, safety, and personalized care during your stay
              at Lotus Multispecialty Hospital. Our room facilities are designed
              to support your recovery while creating a calm, hotel‑like
              environment within a fully equipped medical setting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Room Highlights (Alternating with Swiper) */}
      <section className="w-full bg-slate-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <p
              className="text-xs md:text-sm font-semibold tracking-widest uppercase"
              style={{ color: COLORS.accent }}
            >
              Comfort & Convenience
            </p>
            <h3
              className="mt-2 text-2xl md:text-3xl font-bold"
              style={{ color: COLORS.deep }}
            >
              Room Amenities & Services
            </h3>
          </motion.div>

          <div className="space-y-16 md:space-y-20">
            {roomHighlights.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  className={`flex flex-col ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-8 md:gap-12 lg:gap-16`}
                >
                  {/* Swiper Image Side */}
                  <div className="w-full md:w-1/2 flex justify-center">
                    <motion.div
                      variants={scaleIn}
                      className="relative w-full max-w-md md:max-w-lg lg:max-w-xl"
                    >
                      {/* Decorative Background */}
                      <div
                        className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl"
                        style={{
                          background: `linear-gradient(135deg, ${COLORS.accent} 0%, ${COLORS.deep} 100%)`,
                        }}
                      ></div>

                      {/* Swiper Container */}
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        <Swiper
                          modules={[Navigation, Pagination, Autoplay]}
                          navigation
                          pagination={{ clickable: true }}
                          autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                          }}
                          loop={true}
                          className="room-swiper"
                        >
                          {item.images.map((image, imgIndex) => (
                            <SwiperSlide key={imgIndex}>
                              <div className="relative">
                                <img
                                  src={image}
                                  alt={`${item.title} - ${imgIndex + 1}`}
                                  className="w-full h-72 md:h-80 lg:h-96 object-cover"
                                />
                                {/* Gradient Overlay */}
                                <div
                                  className="absolute inset-0 opacity-10"
                                  style={{
                                    background: `linear-gradient(135deg, ${COLORS.accent}40 0%, ${COLORS.deep}40 100%)`,
                                  }}
                                ></div>
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>

                      {/* Decorative Corner Badge */}
                      <div
                        className="absolute -bottom-3 -right-3 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl md:text-3xl shadow-lg z-10"
                        style={{ backgroundColor: COLORS.warm }}
                      >
                        {index + 1}
                      </div>
                    </motion.div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full md:w-1/2">
                    <div
                      className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-l-4 hover:shadow-xl transition-shadow duration-300"
                      style={{ borderColor: COLORS.accent }}
                    >
                      <h4
                        className="text-xl md:text-2xl font-bold mb-3"
                        style={{ color: COLORS.deep }}
                      >
                        {item.title}
                      </h4>
                      <p
                        className="text-sm md:text-base leading-relaxed mb-5"
                        style={{ color: COLORS.muted }}
                      >
                        {item.description}
                      </p>
                      <div className="space-y-2.5">
                        {item.points.map((p) => (
                          <div
                            key={p}
                            className="flex items-start gap-2.5 text-sm md:text-base"
                          >
                            <CheckCircle
                              size={18}
                              className="mt-0.5 flex-shrink-0"
                              style={{ color: COLORS.accent }}
                            />
                            <span style={{ color: COLORS.deep }}>{p}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <p
              className="text-xs md:text-sm font-semibold tracking-widest uppercase"
              style={{ color: COLORS.accent }}
            >
              Beyond the Basics
            </p>
            <h3
              className="mt-2 text-2xl md:text-3xl font-bold"
              style={{ color: COLORS.deep }}
            >
              Special Room Services
            </h3>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid gap-6 md:grid-cols-3"
          >
            {specialServices.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={fadeInUp}
                  className="h-full rounded-2xl border border-slate-100 shadow-sm p-6 md:p-7 hover:shadow-md transition-shadow duration-200 bg-white"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${COLORS.accent}20` }}
                  >
                    <Icon size={22} style={{ color: COLORS.accent }} />
                  </div>
                  <h4
                    className="text-lg font-semibold mb-2"
                    style={{ color: COLORS.deep }}
                  >
                    {service.title}
                  </h4>
                  <p
                    className="text-sm md:text-base leading-relaxed"
                    style={{ color: COLORS.muted }}
                  >
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* How to Request Room Services */}
      <section
        className="w-full py-12 md:py-16"
        style={{ backgroundColor: `${COLORS.deep}05` }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <p
              className="text-xs md:text-sm font-semibold tracking-widest uppercase"
              style={{ color: COLORS.accent }}
            >
              Simple & Accessible
            </p>
            <h3
              className="mt-2 text-2xl md:text-3xl font-bold"
              style={{ color: COLORS.deep }}
            >
              How to Request Room Services
            </h3>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid gap-6 md:grid-cols-3"
          >
            {howToRequest.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className="h-full rounded-2xl bg-white shadow-md p-6 md:p-7 border border-slate-100"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${COLORS.accent}20` }}
                    >
                      <Icon size={20} style={{ color: COLORS.accent }} />
                    </div>
                    <h4
                      className="text-base md:text-lg font-semibold"
                      style={{ color: COLORS.deep }}
                    >
                      {item.title}
                    </h4>
                  </div>
                  <p
                    className="text-sm md:text-base leading-relaxed"
                    style={{ color: COLORS.muted }}
                  >
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Comfort Statement / CTA */}
      <section
        className="w-full py-12 md:py-16"
        style={{ backgroundColor: COLORS.deep }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto px-4 md:px-6 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Your Comfort, Our Priority
          </h3>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6">
            At Lotus Multispecialty Hospital, we believe that a calm,
            comfortable and supportive environment plays a vital role in
            recovery. Our room services are thoughtfully designed to take care
            of the little details, so you and your family can focus on what
            matters most – healing.
          </p>
          <p className="text-sm md:text-base text-cyan-100">
            For any room‑related queries before admission, please contact our
            front desk or patient relations team.
          </p>
        </motion.div>
      </section>

      {/* Custom Swiper Styles */}
      <style jsx>{`
        .room-swiper .swiper-button-next,
        .room-swiper .swiper-button-prev {
          color: ${COLORS.accent};
          background: transparent;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .room-swiper .swiper-button-next:after,
        .room-swiper .swiper-button-prev:after {
          font-size: 18px;
          font-weight: bold;
        }
        .room-swiper .swiper-pagination-bullet {
          background: ${COLORS.accent};
          opacity: 0.5;
        }
        .room-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background: ${COLORS.warm};
        }
        .room-swiper .swiper-pagination {
          bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default RoomFacilities;
