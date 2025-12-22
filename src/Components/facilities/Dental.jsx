// src/Components/facilities/Dental.jsx
// NOTE: This component is for the Dental Care Department.

import React, { useEffect, useRef, useState } from "react";
import { Phone, CheckCircle, ClipboardList, X } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

// --- ASSETS & CONFIGURATION (Updated imports to ensure all icons are available) ---
import doctorImg from "../../assets/Vector.jpg";
import dentalPatientImg from "../../assets/dentalPatientImg.jpg";
import dentalBanner from "../../assets/DentalBanner.jpg";
// Specific Icons
import toothExtractionIcon from "../../assets/dentalImg/toothExtraction.svg";
// import denturesIcon from "../../assets/dentalImg/CosmeticContouring.svg"; // Note: This icon is named CosmeticContouring.svg, keeping variable name for Cosmetic Services later.
import GapClosure from "../../assets/dentalImg/GapClosure.svg";
import airPolishingIcon from "../../assets/dentalImg/airPolishing.svg";
import Bridges from "../../assets/dentalImg/Bridges.svg";
import CosmeticContouring from "../../assets/dentalImg/CosmeticContouring.svg";
import LMJ from "../../assets/dentalImg/Imj.svg"; // Assuming Imj.svg is for TMJ (Temporomandibular Joint)
import Ortho from "../../assets/dentalImg/OrthodonticBraces.svg";
import Partial from "../../assets/dentalImg/partial.svg"; // Added Partial for Partial & Complete Dentures
import root from "../../assets/dentalImg/root.svg"; // Assuming this is for Root Canal Treatment
import Scaling from "../../assets/dentalImg/scaling.svg";
import SingleRTC from "../../assets/dentalImg/singleRTC.svg"; // For Single Sitting RCT
import Sinus from "../../assets/dentalImg/sinus.svg";
import ToothBleach from "../../assets/dentalImg/ToothBleaching.svg";
import TreatmentSingle from "../../assets/dentalImg/treatmentOfsingle.svg"; // For Treatment of Single/Multiple Teeth
import metalFree from "../../assets/dentalImg/metalFree.svg"; // For Metal-Free Ceramic Crown
import Cermic from "../../assets/dentalImg/Cermic.svg"; // For Ceramic and Metal Crowns
import Customized from "../../assets/dentalImg/Customized.svg"; // Unused in data, kept for completeness
import implantIcon from "../../assets/dentalImg/Implant.svg";

/* Colors & variants */
const COLORS = {
  deep: "#0f3b5a",
  accent: "#1f9c9c",
  warm: "#ff914d",
  muted: "#6b7280",
};

const container = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.07 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.52, ease: "easeOut" } },
};

/* --- UTILITY HOOKS (COUNT UP) --- */
function useCountUp(to, duration = 900) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = null;
    const from = 0;
    const diff = to - from;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const pct = Math.min(progress / duration, 1);
      setValue(Math.round(from + diff * pct));
      if (progress < duration) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
    return () => {};
  }, [to, duration]);
  return value;
}

// --- DENTAL SPECIFIC DATA (Icon variables updated here) ---
const PRIMARY_SERVICES = [
  {
    id: 1,
    img: toothExtractionIcon,
    title: "Tooth Extraction",
    desc: "Painless simple and surgical extractions, including wisdom tooth removal.",
  },
  {
    id: 2,
    img: Partial,
    title: "Partial & Complete Dentures",
    desc: "Custom-made removable appliances to replace missing teeth and restore function.",
  },
  {
    id: 3,
    img: Scaling,
    title: "Routine & Surgical Scaling/Cleaning",
    desc: "Professional deep cleaning (scaling and root planing) for gum health and hygiene.",
  },
  {
    id: 4,
    img: airPolishingIcon,
    title: "Air Polishing",
    desc: "Advanced cleaning technique for stain removal and a brighter smile.",
  },
  {
    id: 5,
    img: LMJ,
    title: "TMJ Disorders",
    desc: "Diagnosis and specialized treatment for issues related to the Temporomandibular Joint.",
  },
  {
    id: 6,
    img: root,
    title: "Root Canal Treatment",
    desc: "Endodontic therapy to save a damaged or infected tooth.",
  },
  {
    id: 7,
    img: SingleRTC,
    title: "Single Sitting RCT (done in 40 minutes)",
    desc: "Fast and efficient root canal treatment performed in a single visit.",
  },
  {
    id: 8,
    img: TreatmentSingle,
    title: "Treatment of Single/Multiple Teeth",
    desc: "Comprehensive restorative procedures, including fillings and minor repairs.",
  },
  {
    id: 9,
    img: implantIcon,
    title: "Treatment of Implant-Supported Dentures",
    desc: "Secure and stable replacement teeth anchored by dental implants.",
  },
  {
    id: 10,
    img: Sinus,
    title: "Sinus Lift Surgery",
    desc: "Procedure to add bone to the upper jaw, necessary for certain dental implant placements.",
  },
];

const COSMETIC_SERVICES = [
  {
    id: 11,
    img: GapClosure,
    title: "Gap Closure",
    desc: "Cosmetic procedures using bonding, veneers, or orthodontic treatment to close spaces between teeth.",
  },
  {
    id: 12,
    img: metalFree,
    title: "Metal-Free Ceramic Crown",
    desc: "High-strength, aesthetic crowns that blend seamlessly with natural teeth.",
  },
  {
    id: 13,
    img: ToothBleach,
    title: "Tooth Bleaching and Gum Bleaching",
    desc: "Professional whitening treatments for teeth and specialized procedures for gum depigmentation.",
  },
  {
    id: 14,
    img: Bridges,
    title: "Bridges",
    desc: "Fixed dental prosthetics used to replace one or more missing teeth by joining to adjacent teeth.",
  },
  {
    id: 15,
    img: CosmeticContouring,
    title: "Cosmetic Contouring",
    desc: "Reshaping teeth to improve their appearance by removing a small amount of tooth enamel.",
  },
  {
    id: 16,
    img: Ortho,
    title: "Orthodontic Braces and Invisalign",
    desc: "Corrective treatments for aligning teeth and jaws, including traditional braces and clear aligners.",
  },
  {
    id: 17,
    img: Customized,
    title: "Orthognathic Surgery",
    desc: "Surgical correction of major jaw and facial bone irregularities.",
  },
  {
    id: 18,
    img: Cermic,
    title: "Ceramic and Metal Crowns",
    desc: "Durable and reliable crown options for strength and restoration.",
  },
];

const COMMON_DISEASES = [
  "Tooth decay (cavities)",
  "Gum disease (periodontitis)",
  "Bad breath (halitosis)",
  "Oral thrush (candidiasis)",
  "Mouth sores (canker sores)",
  "Impacted wisdom tooth",
  "Tooth sensitivity",
  "Toothache",
  "Dry mouth (xerostomia)",
  "Tooth erosion",
];

const team = [
  {
    name: "Dr. Rahul Maruta",
    role: "Sr. Consultant & HOD (Dental)",
    img: doctorImg,
  },
  { name: "Dr. Anjali Verma", role: "Consultant Endodontist", img: doctorImg },
  {
    name: "Dr. Sanjay Tandon",
    role: "Oral Maxillofacial Surgeon",
    img: doctorImg,
  },
  { name: "Dr. Priya Singh", role: "Consultant Orthodontist", img: doctorImg },
];

// --- SMALL UI SUBCOMPONENTS (ServiceTile updated here) ---
const Pill = ({ children }) => (
  <span
    className="inline-block px-3 py-1 rounded-full text-xs font-medium"
    style={{ background: "#eefafa", color: COLORS.accent }}
  >
    {children}
  </span>
);

/* Service tile used in Services grid - ICON RENDERING UPDATED */
const ServiceTile = ({ s, onOpen }) => {
  const iconSrc = s.img;
  return (
    <motion.button
      variants={fadeInUp}
      onClick={(e) => onOpen(s, e)}
      className="group bg-[#eef8fb] p-6 rounded-2xl text-left flex flex-col items-center gap-4 hover:-translate-y-2 transition-transform shadow-sm focus:outline-none focus:ring-4 focus:ring-[rgba(31,156,156,0.08)]"
      aria-haspopup="dialog"
    >
      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-sm ring-1 ring-gray-100 p-2">
        <img
          src={iconSrc}
          alt={`${s.title} icon`}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="text-center text-sm text-[#274c56] leading-tight font-medium">
        {s.title}
      </div>
    </motion.button>
  );
};

/* Team card */
function TeamCard({ name, role, img }) {
  return (
    <motion.div variants={fadeInUp} className="relative">
      <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-100">
        <img
          src={img}
          alt={name}
          className="w-full h-44 object-cover object-top"
          loading="lazy"
        />
        <div className="p-4 text-center">
          <div className="text-md font-semibold" style={{ color: COLORS.deep }}>
            {name}
          </div>
          <div className="text-sm text-gray-500">{role}</div>
        </div>
      </div>
    </motion.div>
  );
}

/* ServiceCard used in secondary grid for more detail */
function ServiceCard({ title, desc }) {
  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(15,59,90,0.06)" }}
      className="bg-white rounded-2xl p-6 focus:outline-none focus:ring-4 focus:ring-[rgba(31,156,156,0.06)] ring-1 ring-gray-50 shadow-sm"
    >
      <div className="flex items-start gap-4">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: "#f7fdfe" }}
        >
          <CheckCircle className="w-6 h-6" style={{ color: COLORS.accent }} />
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold" style={{ color: COLORS.deep }}>
            {title}
          </h4>
          <p className="mt-2 text-sm text-gray-600">{desc}</p>
        </div>
      </div>
    </motion.article>
  );
}

// --- MAIN COMPONENT ---
export default function Dental() {
  const patients = useCountUp(8500, 900);
  const yearsExperience = useCountUp(25, 900);
  const specialistCount = useCountUp(8, 900);

  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) controls.start("show");
        });
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [controls]);

  const [activeTab, setActiveTab] = useState("primary");
  const servicesToShow =
    activeTab === "primary" ? PRIMARY_SERVICES : COSMETIC_SERVICES;

  const [openService, setOpenService] = useState(null);
  const prevActive = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (openService) document.body.classList.add("modal-open");
    else document.body.classList.remove("modal-open");
  }, [openService]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpenService(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (openService && modalRef.current) {
      const btn = modalRef.current.querySelector(".service-modal-close");
      btn?.focus();
    } else if (!openService && prevActive.current) {
      prevActive.current.focus?.();
    }
  }, [openService]);

  const open = (service, e) => {
    prevActive.current = e?.currentTarget;
    setOpenService(service);
  };

  const renderServiceGrid = () => (
    <motion.div
      key={activeTab}
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full bg-white rounded-2xl p-6 md:p-8 shadow-lg ring-1 ring-gray-100"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {servicesToShow.map((s) => (
          <ServiceTile key={s.id} s={s} onOpen={open} />
        ))}
        <motion.button
          variants={fadeInUp}
          onClick={() => (window.location.href = "/contact")}
          className="group bg-[#d8f0f0] p-6 rounded-2xl text-left flex flex-col items-center justify-center gap-4 hover:-translate-y-2 transition-transform shadow-sm focus:outline-none focus:ring-4 focus:ring-[rgba(31,156,156,0.08)] col-span-2 sm:col-span-1"
          style={{ border: `2px dashed ${COLORS.accent}` }}
        >
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm ring-1 ring-gray-100">
            <Phone className="w-6 h-6" style={{ color: COLORS.accent }} />
          </div>
          <div className="text-center text-sm text-[#144949] leading-tight font-medium">
            Can't find your service? <br /> <strong>Book a Consultation</strong>
          </div>
        </motion.button>
      </div>
    </motion.div>
  );

  return (
    <div className="bg-gray-50 text-gray-900 pt-23 md:pt-40">
      <style>{`body.modal-open { overflow: hidden; } .service-modal-close { width:44px;height:44px;border-radius:9999px;background:${COLORS.warm};color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 20px rgba(0,0,0,0.12); }`}</style>

      <header className="relative">
        <div className="relative h-100 sm:h-64 md:h-72 lg:h-96 xl:h-[420px] overflow-hidden">
          <img
            src={dentalBanner}
            alt="Gynecology banner"
            className="w-full h-full object-cover transform scale-[1.02] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10" />
          <div className="absolute inset-0 flex items-center px-4 sm:px-6 md:px-8">
            <div className="max-w-7xl mx-auto w-full">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-7 lg:p-10 shadow-xl ring-1 ring-gray-100 max-w-3xl"
              >
                <Pill>Centre of Excellence</Pill>
                <h1
                  className="mt-2 sm:mt-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight"
                  style={{ color: COLORS.deep }}
                >
                  Dental Care Department
                </h1>
                <p className="mt-2 sm:mt-3 text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                  We provide comprehensive, compassionate dental care, focusing
                  on preventative health, restorative dentistry, and cosmetic
                  treatments. Our expert team is committed to giving you a
                  healthy, beautiful smile. We also incorporate the principles
                  of minimal access for less trauma and faster recovery in all
                  our surgical procedures.
                </p>
                <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <a
                    href="https://wa.me/919210399470?text=Hi, I would like to book an appointment."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 rounded-lg text-white font-medium text-sm sm:text-base hover:opacity-90 transition-opacity"
                    style={{ background: COLORS.accent }}
                  >
                    {/* WhatsApp Icon (Optional but recommended) */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.06 3.972L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.17-.479 1.338-.942.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                    </svg>
                    Book via WhatsApp
                  </a>

                  <a
                    href="tel:9210399470"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 rounded-lg border-2 text-sm sm:text-base border-[#2FA1A5] hover:bg-[#2FA1A5] hover:text-white transition-all"
                  >
                    <Phone className="text-[#2FA1A5] w-4 h-4 sm:w-5 sm:h-5" />{" "}
                    9210399470
                  </a>
                </div>
                <p className="mt-2 sm:mt-3 text-gray-700 text-xs sm:text-sm leading-relaxed">
                  <span
                    className="font-semibold"
                    style={{ color: COLORS.deep }}
                  >
                    Location:
                  </span>{" "}
                  <span>
                    KH.NO-122/14.PLOT NO-2, 84, Bhagat Colony, Burari, Delhi,
                    110084
                  </span>
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-10 lg:px-0 py-16" ref={ref}>
        <motion.section
          variants={container}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start"
        >
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: COLORS.deep }}
            >
              Overview and Patient Philosophy
            </h2>
            <motion.p
              variants={fadeInUp}
              className="mt-5 text-gray-700 leading-relaxed font-sans prose max-w-none"
            >
              We prioritize the well-being and satisfaction of our patients,
              ensuring they receive high-quality care in a comfortable setting.
              Whether it’s cosmetic enhancements for a confident smile or
              complex surgical interventions, our goal remains steadfast—to
              deliver compassionate and effective dental care that promotes
              long-term oral health.
            </motion.p>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-2xl p-5 shadow-sm ring-1 ring-gray-50"
              >
                <div className="text-sm text-gray-500">Patients Served</div>
                <div
                  className="mt-2 text-2xl font-bold"
                  style={{ color: COLORS.deep }}
                >
                  {patients}+
                </div>
                <div className="mt-1 text-xs text-gray-400">
                  Restored Smiles
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-2xl p-5 shadow-sm ring-1 ring-gray-50"
              >
                <div className="text-sm text-gray-500">Team Expertise</div>
                <div
                  className="mt-2 text-2xl font-bold"
                  style={{ color: COLORS.deep }}
                >
                  {yearsExperience}+
                </div>
                <div className="mt-1 text-xs text-gray-400">
                  Combined years in dentistry
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-2xl p-5 shadow-sm ring-1 ring-gray-50"
              >
                <div className="text-sm text-gray-500">Specialists</div>
                <div
                  className="mt-2 text-2xl font-bold"
                  style={{ color: COLORS.deep }}
                >
                  {specialistCount}+
                </div>
                <div className="mt-1 text-xs text-gray-400">
                  Experts across all domains
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-10 bg-white p-6 rounded-2xl ring-1 ring-gray-50 shadow-sm"
            >
              <h3
                className="text-lg font-semibold flex items-center gap-2"
                style={{ color: COLORS.deep }}
              >
                <ClipboardList className="w-5 h-5" /> Common Diseases We Treat
              </h3>
              <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-700 list-none p-0">
                {COMMON_DISEASES.map((disease, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span
                      className="text-sm font-bold"
                      style={{ color: COLORS.accent }}
                    >
                      ✓
                    </span>
                    {disease}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <motion.aside
            variants={fadeInUp}
            className="w-full lg:w-auto lg:sticky lg:top-8"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg ring-1 ring-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-400">Emergency Line</div>
                  <div
                    className="text-lg font-semibold"
                    style={{ color: COLORS.deep }}
                  >
                    011‑49785874 (Landline)
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-gray-400">Open</span>
                  <span className="text-sm text-green-500 font-medium">
                    24 / 7
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <a
                  href="https://wa.me/919210399470?text=Hi, I would like to book an appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 rounded-lg text-white font-medium text-sm sm:text-base hover:opacity-90 transition-opacity"
                  style={{ background: COLORS.accent }}
                >
                  {/* WhatsApp Icon (Optional but recommended) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.06 3.972L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.17-.479 1.338-.942.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                  Book an Appointment
                </a>
              </div>

              <div className="mt-4 text-xs text-gray-500 text-center">
                Cashless facilities & major insurance partners accepted.
              </div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-6 bg-white rounded-2xl p-4 shadow-lg ring-1 ring-gray-50"
            >
              <h4
                className="text-sm font-semibold"
                style={{ color: COLORS.deep }}
              >
                Location
              </h4>
              <p className="text-xs text-gray-600 mt-2">
                KH.NO-122/14.PLOT NO-2, 84, Bhagat Colony, Burari, Delhi, 110084
              </p>
              <a
                href="https://maps.app.goo.gl/u3t64QQ2kBsR7kj67"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm text-[#2448a5] hover:underline"
              >
                View on map
              </a>
            </motion.div>
          </motion.aside>
        </motion.section>

        <section className="mt-16 w-full">
          <div className="flex justify-center border-b border-gray-200 mb-8">
            <button
              onClick={() => setActiveTab("primary")}
              className={`py-3 px-6 text-lg font-semibold transition-colors ${
                activeTab === "primary"
                  ? "border-b-4"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              style={{
                color: activeTab === "primary" ? COLORS.deep : undefined,
                borderColor:
                  activeTab === "primary" ? COLORS.accent : undefined,
              }}
            >
              Routine & Surgical Services
            </button>
            <button
              onClick={() => setActiveTab("cosmetic")}
              className={`py-3 px-6 text-lg font-semibold transition-colors ${
                activeTab === "cosmetic"
                  ? "border-b-4"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              style={{
                color: activeTab === "cosmetic" ? COLORS.deep : undefined,
                borderColor:
                  activeTab === "cosmetic" ? COLORS.accent : undefined,
              }}
            >
              Cosmetic Dentistry
            </button>
          </div>

          {renderServiceGrid()}
        </section>

        <section className="mt-16">
          <motion.h3
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-2xl font-bold"
            style={{ color: COLORS.deep }}
          >
            Our Specialists
          </motion.h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          >
            {team.map((t, i) => (
              <TeamCard key={i} name={t.name} role={t.role} img={t.img} />
            ))}
          </motion.div>
        </section>
      </main>

      {openService && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 transition-opacity duration-300"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpenService(null);
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            ref={modalRef}
            className="relative max-w-3xl w-full"
          >
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8">
                  <h4
                    id="service-modal-title"
                    className="text-xl font-semibold"
                    style={{ color: COLORS.deep }}
                  >
                    {openService.title}
                  </h4>
                  <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                    {openService.desc}
                  </p>
                  <a
                    href="tel:+919210399470"
                    className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg active:scale-95"
                    style={{
                      background: COLORS.warm,
                      boxShadow: "0 4px 14px 0 rgba(0,0,0,0.1)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    Book Appointment: 9210399470
                  </a>
                </div>
                <div className="hidden md:block">
                  <img
                    src={dentalPatientImg}
                    alt={openService.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <button
              className="service-modal-close absolute -top-6 right-0 -translate-y-1/2 focus:outline-none focus:ring-4 focus:ring-white/50"
              onClick={() => setOpenService(null)}
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
