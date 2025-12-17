import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  Users,
  RefreshCw,
  Home,
  CreditCard,
  ShoppingBag,
  Clock4,
  Phone,
  CheckCircle,
} from "lucide-react";

import img1 from "../assets/Pharmacy1.jpg";
import img2 from "../assets/Pharmacy2.jpg";
import pharmacy3 from "../assets/pharmacy3.jpg";
import pharmacy4 from "../assets/pharmacy.jpg";
import pharmacy5 from "../assets/Pharmacy5.jpg";

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

const pharmacyServices = [
  {
    id: 1,
    image: img1,
    title: "Expert Pharmacist Guidance",
    description:
      "Our qualified and experienced pharmacists are available to offer expert guidance, medication counseling, and answer any questions you may have about your prescriptions.",
    highlights: [
      "Medication interaction checks",
      "Proper dosage instructions",
      "Side effect management advice",
    ],
  },
  {
    id: 2,
    image: img2,
    title: "Wide Range of Medications",
    description:
      "The pharmacy stocks a comprehensive range of prescription and over-the-counter medications to address various health conditions, ensuring you find what you need.",
    highlights: [
      "Branded and generic medicines",
      "Emergency critical care drugs",
      "Pediatric and geriatric formulations",
    ],
  },
  {
    id: 3,
    image: pharmacy3,
    title: "Timely Prescription Fulfillment",
    description:
      "We prioritize quick and efficient prescription fulfillment to ensure you have timely access to the medications prescribed by your healthcare provider.",
    highlights: [
      "Express dispensing for in-patients",
      "E-prescription compatibility",
      "Minimal waiting time",
    ],
  },
  {
    id: 4,
    image: pharmacy4,
    title: "Medication Safety & Authenticity",
    description:
      "Our pharmacy adheres to stringent safety standards, providing genuine and properly stored medications to maintain their efficacy and ensure patient safety.",
    highlights: [
      "Temperature-controlled storage",
      "Batch-tracked medications",
      "Regular quality audits",
    ],
  },
  {
    id: 5,
    image: img2,
    title: "Specialized Compounding Services",
    description:
      "In cases where specialized formulations are required, our pharmacy offers compounding services to tailor medications to specific patient needs.",
    highlights: [
      "Custom dosage forms",
      "Pediatric flavor compounding",
      "Allergy-free formulations",
    ],
  },
  {
    id: 6,
    image: img1,
    title: "OTC Products & Health Supplements",
    description:
      "Explore our selection of high-quality over-the-counter products, vitamins, minerals, and health supplements to complement your wellness journey.",
    highlights: [
      "Immunity boosters and multivitamins",
      "Diabetic care products",
      "Personal care and hygiene items",
    ],
  },
];

const additionalFeatures = [
  {
    icon: Users,
    title: "Friendly & Knowledgeable Staff",
    description:
      "Our pharmacy team is dedicated to providing friendly, respectful, and knowledgeable assistance for a positive experience.",
  },
  {
    icon: RefreshCw,
    title: "Easy Prescription Refills",
    description:
      "Request prescription refills easily through our pharmacy counter or phone, streamlining the process for your convenience.",
  },
  {
    icon: Home,
    title: "Home Delivery Options",
    description:
      "For added convenience, we offer home delivery services so you can receive medications without leaving your home.",
  },
  {
    icon: CreditCard,
    title: "Insurance Assistance",
    description:
      "Our staff can help with insurance claims, coverage verification, and reimbursement processes for your pharmacy bills.",
  },
  {
    icon: ShoppingBag,
    title: "Health & Wellness Products",
    description:
      "Beyond medicines, we stock first aid supplies, baby care items, diabetic monitoring kits, and more for holistic care.",
  },
  {
    icon: Clock4,
    title: "24×7 Emergency Availability",
    description:
      "In emergency situations, our pharmacy ensures round-the-clock availability to meet urgent medication needs.",
  },
];

const Pharmacy = () => {
  return (
    <div className="w-full pt-35">
      {/* Hero Section */}
      <section
        className="relative w-full h-[340px] md:h-[420px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1920&h=900&fit=crop)",
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
            PHARMACY SERVICES
          </h1>
          <p className="mt-3 text-white/90 text-sm md:text-base max-w-2xl text-center">
            Convenient, comprehensive pharmaceutical care with expert guidance
            and 24×7 availability at Lotus Hospital.
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
            <span className="text-white font-medium">Pharmacy</span>
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
              In-House Pharmacy at Lotus Hospital
            </h2>
            <p
              className="mt-4 text-base md:text-lg leading-relaxed"
              style={{ color: COLORS.muted }}
            >
              Our in-house pharmacy is dedicated to providing convenient,
              reliable, and comprehensive pharmaceutical services to support
              your healthcare journey. We understand the importance of timely
              access to quality medications, and our pharmacy is designed to
              meet your needs effectively.
            </p>
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
              Comprehensive Care
            </p>
            <h3
              className="mt-2 text-2xl md:text-3xl font-bold"
              style={{ color: COLORS.deep }}
            >
              Key Features of Our Pharmacy
            </h3>
          </motion.div>

          <div className="space-y-16 md:space-y-20">
            {pharmacyServices.map((service, index) => {
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

      {/* Additional Features Grid */}
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
              More Services
            </p>
            <h3
              className="mt-2 text-2xl md:text-3xl font-bold"
              style={{ color: COLORS.deep }}
            >
              Additional Pharmacy Features
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
            style={{ backgroundColor: COLORS.accent }}
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
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
          </div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Your Health, Our Priority
          </h3>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
            At Lotus Hospital, our pharmacy services are an integral part of our
            commitment to comprehensive and patient-centered care. Whether you
            need a prescription filled, have questions about your medications,
            or are looking for health and wellness products, our pharmacy team
            is here to assist you every step of the way.
          </p>
          <p className="text-sm md:text-base text-cyan-100">
            For pharmacy-related queries, contact us or visit our in-house
            pharmacy located on the ground floor.
          </p>
          <motion.div
            variants={fadeInUp}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+919210399470"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: COLORS.warm, color: "white" }}
            >
              <Phone size={20} />
              Call Pharmacy
            </motion.a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl bg-white"
              style={{ color: COLORS.deep }}
            >
              Visit Us
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Pharmacy;
