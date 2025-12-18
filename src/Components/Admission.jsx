import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Banner from "../assets/banner2.jpg";
import {
  ClipboardCheck,
  Calendar,
  FileText,
  Users,
  Stethoscope,
  MessageSquare,
  DollarSign,
  Bed,
  Heart,
  Phone,
  Mail,
  Clock,
  CheckCircle,
} from "lucide-react";

const COLORS = {
  deep: "#0b5560",
  accent: "#19a6a6",
  warm: "#ff914d",
  muted: "#6b7280",
};

const admissionSteps = [
  {
    id: 1,
    icon: ClipboardCheck,
    title: "Pre-Registration",
    description:
      "Begin your admission process by pre-registering online or over the phone. This step helps us gather essential information and prepare for your arrival.",
    highlights: [
      "Online registration available",
      "Phone registration support",
      "Faster admission process",
    ],
  },
  {
    id: 2,
    icon: Calendar,
    title: "Appointment Scheduling",
    description:
      "If your admission is planned, our scheduling team will assist you in fixing a convenient date and time for your admission. For emergency admissions, our team is ready 24/7 to assist you promptly.",
    highlights: [
      "Flexible scheduling options",
      "24/7 emergency support",
      "Dedicated scheduling team",
    ],
  },
  {
    id: 3,
    icon: FileText,
    title: "Document Submission",
    description:
      "Please bring the necessary documents, including a government-issued photo ID, insurance details (if applicable), and any relevant medical records or prescriptions. This helps us streamline the admission process.",
    highlights: [
      "Photo ID required",
      "Insurance details if applicable",
      "Previous medical records",
    ],
  },
  {
    id: 4,
    icon: Users,
    title: "Admission Desk",
    description:
      "Upon arrival, visit our admission desk where our friendly staff will guide you through the necessary paperwork and assist with any queries you may have. You will be issued an admission ID for easy tracking.",
    highlights: [
      "Friendly staff assistance",
      "Quick paperwork processing",
      "Admission ID issued",
    ],
  },
  {
    id: 5,
    icon: Stethoscope,
    title: "Medical Examination",
    description:
      "Our medical team will conduct a thorough examination to assess your health condition and determine the appropriate course of treatment. This step is crucial for ensuring personalized and effective care.",
    highlights: [
      "Comprehensive health assessment",
      "Expert medical evaluation",
      "Personalized care approach",
    ],
  },
  {
    id: 6,
    icon: MessageSquare,
    title: "Treatment Plan Discussion",
    description:
      "After the examination, our healthcare professionals will discuss the proposed treatment plan, including any procedures, surgeries, or therapies required. We encourage you to ask questions and seek clarification about your care.",
    highlights: [
      "Detailed treatment explanation",
      "Open communication encouraged",
      "Patient-centric approach",
    ],
  },
  {
    id: 7,
    icon: DollarSign,
    title: "Financial Counseling",
    description:
      "Our financial counselors will guide you through the billing process, providing a transparent overview of estimated costs, insurance coverage (if applicable), and available payment options. We aim to make financial aspects clear and manageable.",
    highlights: [
      "Transparent cost breakdown",
      "Insurance coordination support",
      "Flexible payment options",
    ],
  },
  {
    id: 8,
    icon: Bed,
    title: "Admission to the Ward",
    description:
      "Once the paperwork is complete, you will be escorted to your assigned ward or room. Our nursing staff will ensure your comfort and address any immediate needs.",
    highlights: [
      "Comfortable room assignment",
      "Professional nursing care",
      "Immediate needs addressed",
    ],
  },
  {
    id: 9,
    icon: Heart,
    title: "Visitor Information",
    description:
      "We encourage family and friends to support you during your stay. Our staff will provide information on visiting hours, amenities, and any guidelines to ensure a conducive healing environment.",
    highlights: [
      "Family support encouraged",
      "Clear visiting guidelines",
      "Conducive healing environment",
    ],
  },
];

const requiredDocuments = [
  "Valid Government-issued Photo ID (Aadhaar Card / Passport / Driving License)",
  "Health Insurance Policy Documents (if applicable)",
  "Previous Medical Records and Prescriptions",
  "Referral Letter from Physician (if any)",
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
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

const Admission = () => {
  return (
    <div className="w-full pt-35">
      {/* Hero Section */}
      <section
        className="relative w-full h-[340px] md:h-[420px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${Banner})`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: `${COLORS.deep}B3` }}
        ></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 h-full flex flex-col items-center justify-center px-4"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            ADMISSION PROCESS
          </h1>
          <div className="mt-6 flex items-center gap-2 text-white/90 text-sm md:text-base">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>›</span>
            <Link to="/service" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>›</span>
            <span className="text-white font-medium">Admission</span>
          </div>
        </motion.div>
      </section>

      {/* Welcome Section */}
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
              Welcome to Lotus Hospital
            </h2>
            <p
              className="mt-4 text-base md:text-lg leading-relaxed"
              style={{ color: COLORS.muted }}
            >
              We are committed to ensuring a seamless and patient-friendly
              admission process to make your healthcare journey as comfortable
              as possible. Here's a step-by-step guide to our admission process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Admission Steps - Alternating Layout */}
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
              Step by Step Guide
            </p>
            <h2
              className="mt-2 text-2xl md:text-3xl font-bold"
              style={{ color: COLORS.deep }}
            >
              Your Journey with Us
            </h2>
          </motion.div>

          <div className="space-y-16 md:space-y-20">
            {admissionSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeInUp}
                  className={`flex flex-col ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-8 md:gap-12 lg:gap-16`}
                >
                  {/* Icon/Vector Side */}
                  <div className="w-full md:w-1/2 flex justify-center">
                    <motion.div
                      variants={scaleIn}
                      className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${COLORS.accent}15 0%, ${COLORS.deep}25 100%)`,
                      }}
                    >
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div
                          className="absolute top-10 left-10 w-32 h-32 rounded-full border-4"
                          style={{ borderColor: COLORS.accent }}
                        ></div>
                        <div
                          className="absolute bottom-10 right-10 w-24 h-24 rounded-full border-4"
                          style={{ borderColor: COLORS.warm }}
                        ></div>
                        <div
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-2"
                          style={{ borderColor: COLORS.deep }}
                        ></div>
                      </div>

                      {/* Icon */}
                      <div
                        className="relative z-10 w-36 h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full flex items-center justify-center shadow-2xl"
                        style={{ backgroundColor: COLORS.accent }}
                      >
                        <Icon
                          size={80}
                          className="text-white"
                          strokeWidth={1.5}
                        />
                      </div>

                      {/* Step Number Badge */}
                      <div
                        className="absolute top-6 right-6 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl md:text-3xl shadow-lg"
                        style={{ backgroundColor: COLORS.warm }}
                      >
                        {step.id}
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
                      <h3
                        className="text-xl md:text-2xl lg:text-3xl font-bold mb-4"
                        style={{ color: COLORS.deep }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-sm md:text-base lg:text-lg leading-relaxed mb-6"
                        style={{ color: COLORS.muted }}
                      >
                        {step.description}
                      </p>

                      {/* Highlights */}
                      <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-3"
                      >
                        {step.highlights.map((highlight, i) => (
                          <motion.div
                            key={i}
                            variants={fadeInUp}
                            className="flex items-start gap-3"
                          >
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
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Documents & Info Section */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Required Documents */}
            <motion.div
              variants={fadeInUp}
              className="rounded-2xl p-6 md:p-8 shadow-lg border-t-4"
              style={{
                backgroundColor: `${COLORS.deep}08`,
                borderColor: COLORS.accent,
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: COLORS.accent }}
                >
                  <FileText size={24} className="text-white" />
                </div>
                <h3
                  className="text-xl md:text-2xl font-bold"
                  style={{ color: COLORS.deep }}
                >
                  Required Documents
                </h3>
              </div>
              <ul className="space-y-4">
                {requiredDocuments.map((doc, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5"
                      style={{ backgroundColor: COLORS.warm }}
                    >
                      {index + 1}
                    </span>
                    <span
                      className="text-sm md:text-base leading-relaxed"
                      style={{ color: COLORS.muted }}
                    >
                      {doc}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Admission Timings */}
            <motion.div
              variants={fadeInUp}
              className="rounded-2xl p-6 md:p-8 shadow-lg border-t-4"
              style={{
                backgroundColor: `${COLORS.accent}08`,
                borderColor: COLORS.warm,
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: COLORS.deep }}
                >
                  <Clock size={24} className="text-white" />
                </div>
                <h3
                  className="text-xl md:text-2xl font-bold"
                  style={{ color: COLORS.deep }}
                >
                  Admission Timings
                </h3>
              </div>
              <div className="space-y-5">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <p
                    className="font-semibold text-base md:text-lg mb-2"
                    style={{ color: COLORS.deep }}
                  >
                    Planned Admissions
                  </p>
                  <p
                    className="text-sm md:text-base"
                    style={{ color: COLORS.muted }}
                  >
                    Monday to Saturday: 9:00 AM – 7:00 PM
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <p
                    className="font-semibold text-base md:text-lg mb-2"
                    style={{ color: COLORS.deep }}
                  >
                    Emergency Admissions
                  </p>
                  <p
                    className="text-base md:text-lg font-bold"
                    style={{ color: COLORS.accent }}
                  >
                    Available 24×7
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="pt-4 border-t"
                  style={{ borderColor: `${COLORS.muted}30` }}
                >
                  <p
                    className="text-sm md:text-base"
                    style={{ color: COLORS.muted }}
                  >
                    <strong style={{ color: COLORS.deep }}>Note:</strong> Sunday
                    & Holidays - Emergency admissions only
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
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
          <motion.div
            variants={scaleIn}
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: COLORS.accent }}
          >
            <Phone size={32} className="text-white" />
          </motion.div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Need Assistance with Admission?
          </h2>
          <p className="text-white/90 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Our admission coordination team is available 24/7 to help you with
            any queries regarding the admission process, documentation, or
            insurance formalities. We're here to make your admission experience
            smooth and hassle-free.
          </p>
          <motion.div
            variants={staggerContainer}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+911234567890"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: COLORS.warm, color: "white" }}
            >
              <Phone size={20} />
              Call Admission Helpline
            </motion.a>
            <motion.div variants={fadeInUp}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl bg-white"
                style={{ color: COLORS.deep }}
              >
                <Mail size={20} />
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Admission;
