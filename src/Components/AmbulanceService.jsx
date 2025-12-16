import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Building2,
  MapPin,
  Shield,
  Radio,
  ShieldCheck,
  DollarSign,
  Phone,
  CheckCircle,
  Clock,
  Activity,
  Wind,
  Syringe,
  HeartPulse,
  Gauge,
  Plane,
  Wrench,
} from "lucide-react";
import ambu from "../assets/ambulance.jpg";

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
      staggerChildren: 0.15,
    },
  },
};

const ambulanceServices = [
  {
    id: 1,
    image: ambu,
    title: "24/7 Emergency Response",
    description:
      "Our fleet of fully-equipped modern ambulances is ready to respond promptly to medical emergencies around the clock, 24 hours a day, 7 days a week.",
    highlights: [
      "Rapid response time under 15 minutes",
      "GPS-enabled fleet for quick dispatch",
      "Dedicated emergency control room",
    ],
  },
];

const additionalFeatures = [
  {
    icon: Activity,
    title: "Cardiac Monitors and Defibrillators",
    description:
      "Our ambulances are outfitted with state-of-the-art cardiac monitors and defibrillators, ensuring real-time monitoring of vital signs and immediate response to cardiac emergencies.",
  },
  {
    icon: Wind,
    title: "Ventilators and Airway Management Equipment",
    description:
      "For patients requiring respiratory support, our ambulances are equipped with advanced ventilators and airway management equipment to ensure optimal oxygenation during transit. In cases of intubated and ventilated patients, our ambulances are equipped with specialised transport ventilators, providing continuous respiratory support during the journey.",
  },
  {
    icon: Syringe,
    title: "Infusion Pumps and Medication Administration Tools",
    description:
      "To facilitate seamless administration of medications and intravenous fluids, our ambulances are equipped with infusion pumps and other essential tools for medication delivery.",
  },
  {
    icon: Shield,
    title: "Spine Boards and Immobilisation Devices",
    description:
      "For patients with suspected spinal injuries or trauma, our ambulances are equipped with spine boards and immobilisation devices to ensure safe and secure transport.",
  },
  {
    icon: HeartPulse,
    title: "Portable Life-Saving Equipment",
    description:
      "Our commitment to patient safety extends to the inclusion of portable life-saving equipment such as balloon pumps, pacemakers, and monitors, ensuring that critical interventions can be initiated during transit.",
  },
  {
    icon: Gauge,
    title: "Oxygen Cylinders",
    description:
      "Every ambulance in our fleet is equipped with oxygen cylinders to provide immediate respiratory support to patients experiencing breathing difficulties.",
  },
  {
    icon: Plane,
    title: "Specialised Equipment for Air Ambulance Services",
    description:
      "In our Air Ambulance services, we go a step further by arranging specialised equipment tailored for air transport. This includes equipment that meets the unique challenges of high-altitude medical care.",
  },
  {
    icon: Wrench,
    title: "Continuous Monitoring and Maintenance",
    description:
      "Our equipment undergoes regular monitoring and maintenance to ensure optimal functionality. Our commitment to patient care extends to the reliability and effectiveness of every piece of equipment in our ambulances.",
  },
];

const AmbulanceService = () => {
  return (
    <div className="w-full pt-35">
      {/* Hero Section */}
      <section
        className="relative w-full h-[340px] md:h-[420px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${ambu})`,
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: `${COLORS.deep}D0` }}
        ></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 h-full flex flex-col items-center justify-center px-4"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight text-center">
            AMBULANCE SERVICES
          </h1>
          <p className="mt-3 text-white/95 text-sm md:text-base max-w-2xl text-center">
            24/7 Emergency Medical Transport with Advanced Life Support &
            Critical Care Facilities
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
            <span className="text-white font-medium">Ambulance</span>
          </div>
        </motion.div>
      </section>

      {/* Emergency Contact Banner */}
      <section
        className="w-full py-6 md:py-8"
        style={{ backgroundColor: COLORS.warm }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-5xl mx-auto px-4 md:px-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-white">
            <div className="flex items-center gap-3">
              <Clock size={32} className="animate-pulse" />
              <div>
                <p className="text-xs md:text-sm font-semibold tracking-wide">
                  24/7 EMERGENCY AMBULANCE
                </p>
                <p className="text-lg md:text-2xl font-bold">Always Ready</p>
              </div>
            </div>
            <div className="h-12 w-px bg-white/30 hidden md:block"></div>
            <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4">
              <a
                href="tel:+919210399470"
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-colors px-4 py-2.5 rounded-lg backdrop-blur-sm"
              >
                <Phone size={20} />
                <span className="font-semibold text-base md:text-lg">
                  +91 9210399470
                </span>
              </a>
              <a
                href="tel:011-49785874"
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-colors px-4 py-2.5 rounded-lg backdrop-blur-sm"
              >
                <Phone size={20} />
                <span className="font-semibold text-base md:text-lg">
                  011-49785874
                </span>
              </a>
            </div>
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
              Emergency Ambulance Services at Lotus Hospital
            </h2>
            <p
              className="mt-4 text-base md:text-lg leading-relaxed"
              style={{ color: COLORS.muted }}
            >
              In medical emergencies, every second counts. Our fleet of modern,
              fully-equipped ambulances with trained medical personnel ensures
              rapid, safe, and high-quality pre-hospital care. Whether it's an
              emergency response, inter-hospital transfer, or critical care
              transport, we're committed to providing the highest level of care
              during transit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Additional Features Grid - Medical Equipment */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
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
              Advanced Equipment
            </p>
            <h3
              className="mt-2 text-2xl md:text-3xl font-bold"
              style={{ color: COLORS.deep }}
            >
              State-of-the-Art Medical Equipment
            </h3>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="h-full rounded-2xl border border-slate-100 shadow-sm p-6 md:p-7 hover:shadow-lg transition-all duration-300 bg-white"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${COLORS.accent}20` }}
                  >
                    <Icon size={24} style={{ color: COLORS.accent }} />
                  </div>
                  <h4
                    className="text-lg md:text-xl font-semibold mb-3"
                    style={{ color: COLORS.deep }}
                  >
                    {feature.title}
                  </h4>
                  <p
                    className="text-sm md:text-base leading-relaxed"
                    style={{ color: COLORS.muted }}
                  >
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Core Services - Alternating Layout with Images */}
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
              Life-Saving Services
            </p>
            <h3
              className="mt-2 text-2xl md:text-3xl font-bold"
              style={{ color: COLORS.deep }}
            >
              Key Features of Our Ambulance Services
            </h3>
          </motion.div>

          <div className="space-y-16 md:space-y-20">
            {ambulanceServices.map((service, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  className={`flex flex-col ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-8 md:gap-12 lg:gap-16`}
                >
                  {/* Image Side */}
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

                      {/* Main Image Container */}
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        <img
                          src={service.image}
                          alt={service.title}
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

                      {/* Decorative Corner Badge */}
                      <div
                        className="absolute -bottom-3 -right-3 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white font-bold text-2xl md:text-3xl shadow-lg"
                        style={{ backgroundColor: COLORS.warm }}
                      >
                        {service.id}
                      </div>
                    </motion.div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full md:w-1/2">
                    <motion.div
                      variants={fadeInUp}
                      className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-l-4 hover:shadow-xl transition-shadow duration-300"
                      style={{ borderColor: COLORS.accent }}
                    >
                      <h4
                        className="text-xl md:text-2xl lg:text-3xl font-bold mb-4"
                        style={{ color: COLORS.deep }}
                      >
                        {service.title}
                      </h4>
                      <p
                        className="text-sm md:text-base lg:text-lg leading-relaxed mb-6"
                        style={{ color: COLORS.muted }}
                      >
                        {service.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-3">
                        {service.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle
                              size={20}
                              className="flex-shrink-0 mt-0.5"
                              style={{ color: COLORS.accent }}
                            />
                            <span
                              className="text-sm md:text-base font-medium"
                              style={{ color: COLORS.deep }}
                            >
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commitment Statement / CTA */}
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
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: COLORS.warm }}
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Your Health & Safety, Our Top Priority
          </h3>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
            Whether you require emergency medical transport, inter-hospital
            transfer, or specialized critical care transport, Lotus Hospital's
            ambulance services are committed to ensuring that you receive the
            highest level of care during transit. Our trained personnel and
            state-of-the-art equipment are ready to serve you 24/7.
          </p>
          <p className="text-sm md:text-base text-cyan-100 mb-8">
            In case of emergency, dial our ambulance helpline immediately for
            rapid response.
          </p>
          <motion.div
            variants={staggerContainer}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+919210399470"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: COLORS.warm, color: "white" }}
            >
              <Phone size={20} />
              Call +919210399470
            </motion.a>
            <motion.a
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:011-49785874"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl bg-white"
              style={{ color: COLORS.deep }}
            >
              <Phone size={20} />
              Call 011-49785874
            </motion.a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default AmbulanceService;
