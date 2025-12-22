// src/Components/facilities/Gynecologist.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import doctorImg from "../../assets/Vector.jpg";
import patientImg from "../../assets/patient.jpeg";
import { Phone, X } from "lucide-react";
import gynecologyBanner from "../../assets/BannerGyno.jpg";
import icon1 from "../../assets/GynoVector/21afaf9e283cebe5cd63cce585c93953.svg";
import icon2 from "../../assets/GynoVector/3566ad4bdbbb83f3df0f6c1be58300bc.svg";
import icon3 from "../../assets/GynoVector/38e537276497b3f1b97ad38a0c8d9391.svg";
import icon4 from "../../assets/GynoVector/448ffaf4c2bd63e84e6ed485e71566d4.svg";
import icon5 from "../../assets/GynoVector/8a3fb2019cba96499f2ccecde6d3e2f7.svg";
import icon6 from "../../assets/GynoVector/9bf7e9d7aedb70dd5c39a564a09d18c0.svg";
import icon7 from "../../assets/GynoVector/aa9410a067c15ff3f35ea67979c15a36.svg";
import icon8 from "../../assets/GynoVector/cb2362d88fe9510862170675a2fbf92f.svg";
import icon9 from "../../assets/GynoVector/d3fbf9e3c0b27457e243a9795d8d7039.svg";
import icon10 from "../../assets/GynoVector/ef87ac2e85f8264e5bc9ce617ce5fe8a.svg";
import icon11 from "../../assets/GynoVector/f4d72be59f25229a4de61c54bb155810.svg";
import icon12 from "../../assets/GynoVector/women-1.svg";

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

/* DEFAULT ICON */
const DEFAULT_ICON = "/mnt/data/8a3fb2019cba96499f2ccecde6d3e2f7.svg";

/* Services data (12 items) */
const SERVICES = [
  {
    id: 1,
    img: icon1,
    title: "High-risk Pregnancy Cases and Ensure Safe Delivery",
    desc: "High‑risk pregnancies due to factors such as high blood pressure, diabetes, thyroid disorders, IUGR, previous caesarean, twins, fetal malformations or maternal age are managed by our multidisciplinary team with continuous monitoring and neonatal backup.",
  },
  {
    id: 2,
    img: icon2,
    title: "High-risk Pregnancies",
    desc: "We manage maternal-fetal complications, tailored antenatal monitoring plans, and timely interventions to maximize outcomes for mother and baby.",
  },
  {
    id: 3,
    img: icon3,
    title: "Comprehensive Antenatal Care",
    desc: "Regular antenatal visits, clinical examinations, blood tests, ultrasound scans and counselling on nutrition, exercise and danger signs in pregnancy.",
  },
  {
    id: 4,
    img: icon4,
    title: "Labour Analgesia Care",
    desc: "Labour room equipped for normal, assisted and emergency caesarean deliveries with options including epidural analgesia where appropriate.",
  },
  {
    id: 5,
    img: icon5,
    title: "Postnatal Care",
    desc: "Close monitoring of mothers and newborns for bleeding, infection, blood pressure, breastfeeding issues and jaundice with lactation counselling and follow-up.",
  },
  {
    id: 6,
    img: icon6,
    title: "Minimally Invasive Gynecological Procedures",
    desc: "Laparoscopy and hysteroscopy for fibroids, ovarian cysts, endometriosis, heavy bleeding or pelvic pain with faster recovery and smaller scars.",
  },
  {
    id: 7,
    img: icon7,
    title: "Laparoscopic Hysterectomy",
    desc: "High-precision laparoscopic hysterectomy for benign and select malignant conditions with quicker discharge and minimal scarring.",
  },
  {
    id: 8,
    img: icon8,
    title: "Diagnostic & Therapeutic Hysteroscopic Surgery",
    desc: "Diagnostic and operative hysteroscopy for abnormal bleeding, polyps, adhesions and intrauterine pathology.",
  },
  {
    id: 9,
    img: icon9,
    title: "FOGSI-certified Training Centre for Gynaecologists",
    desc: "Hands-on training, workshops and fellowships in laparoscopy and hysteroscopy for practising gynecologists.",
  },
  {
    id: 10,
    img: icon10,
    title: "Ultrasonographic Evaluation",
    desc: "High-resolution ultrasound, fetal anatomy scans, growth surveillance and doppler studies guided by fetal medicine specialists.",
  },
  {
    id: 11,
    img: icon11,
    title: "Gynecological Oncology",
    desc: "Multidisciplinary management and surgical care for gynecologic cancers with tumour board planning.",
  },
  {
    id: 12,
    img: icon12,
    title: "Gynae-endocrinology Division",
    desc: "Hormonal evaluation and management of menstrual disorders, PCOS, menopause and endocrine infertility.",
  },
];

/* Scope of OBS & GYNAE Services */
const SCOPE_SERVICES = [
  "Age under 17 years or over 35 years",
  "Chronic medical conditions such as diabetes or hypertension",
  "Gestational diabetes during pregnancy",
  "Heart disease complicating pregnancy",
  "History of preterm birth",
  "Multiple pregnancies (twins or more)",
  "Pregnancy with Rh-negative blood group",
  "Pregnancy complicated with anemia",
  "Antepartum hemorrhage (APH)",
  "Placenta previa",
  "Pre-eclampsia & eclampsia",
  "Post-dated pregnancy",
  "Premature rupture of membranes (PROM)",
  "Preterm labor",
  "Prolonged or obstructed labor",
  "Cord prolapse",
  "Post-partum hemorrhage",
  "Previous miscarriage",
  "Recurrent pregnancy loss",
  "History of fibroids or other gynecological problems",
  "Infectious diseases during pregnancy",
  "Kidney or gastrointestinal disease",
  "Fetal growth restriction (IUGR)",
];

/* Small UI subcomponents */
const Pill = ({ children }) => (
  <span
    className="inline-block px-2.5 py-1 rounded-full text-xs sm:text-sm font-medium"
    style={{ background: "#eefafa", color: COLORS.accent }}
  >
    {children}
  </span>
);

/* Service tile used in Services grid */
const ServiceTile = ({ s, onOpen }) => {
  const iconSrc = s.img ?? DEFAULT_ICON;

  return (
    <button
      onClick={(e) => onOpen(s, e)}
      className="group bg-[#eef8fb] p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl text-left flex flex-col items-center gap-3 sm:gap-4 hover:-translate-y-2 transition-all duration-300 shadow-sm focus:outline-none focus:ring-4 focus:ring-[rgba(31,156,156,0.08)] active:scale-95"
      aria-haspopup="dialog"
    >
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center shadow-sm ring-1 ring-gray-100">
        <img
          src={iconSrc}
          alt={s.title}
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
        />
      </div>

      <div className="text-center text-xs sm:text-sm text-[#274c56] leading-tight font-medium px-1">
        {s.title}
      </div>
    </button>
  );
};

/* Team card */
function TeamCard({ name, role, img }) {
  return (
    <motion.div variants={fadeInUp} className="relative">
      <div className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg ring-1 ring-gray-100 hover:shadow-xl transition-shadow">
        <img
          src={img}
          alt={name}
          className="w-full h-36 sm:h-44 md:h-48 object-cover"
          loading="lazy"
        />
        <div className="p-3 sm:p-4 text-center">
          <div
            className="text-sm sm:text-base font-semibold"
            style={{ color: COLORS.deep }}
          >
            {name}
          </div>
          <div className="text-xs sm:text-sm text-gray-500 mt-1">{role}</div>
        </div>
      </div>
    </motion.div>
  );
}

/* ServiceCard used in secondary grid */
function ServiceCard({ title, desc }) {
  return (
    <motion.article
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(15,59,90,0.06)" }}
      className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 focus:outline-none focus:ring-4 focus:ring-[rgba(31,156,156,0.06)] ring-1 ring-gray-50 shadow-sm hover:shadow-md transition-all"
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <div
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: "#f7fdfe" }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke={COLORS.accent}
            className="sm:w-5 sm:h-5"
          >
            <path d="M12 2v20" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M5 7h14" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <h4
            className="text-base sm:text-lg font-semibold"
            style={{ color: COLORS.deep }}
          >
            {title}
          </h4>
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
            {desc}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

/* Main component */
export default function Gynecologist() {
  const deliveries = useCountUp(1400, 900);
  const laparos = useCountUp(620, 900);
  const nicu = useCountUp(24, 900);

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

  // Modal state
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
    // Optionally scroll to top on mobile when modal opens
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const team = [
    { name: "Dr. Priya Sharma", role: "Head - Obstetrics", img: doctorImg },
    { name: "Dr. Arjun Mehta", role: "Chief Gynaecologist", img: doctorImg },
    {
      name: "Dr. Anjali Gupta",
      role: "Maternal-Fetal Specialist",
      img: doctorImg,
    },
    { name: "Dr. Sunil Verma", role: "Laparoscopic Surgeon", img: doctorImg },
  ];

  return (
    <div className="bg-gray-50 text-gray-900 mt-20 sm:mt-10 md:mt-24 lg:mt-40">
      <style>{`
        body.modal-open { overflow: hidden; }
        .service-modal-close { 
          width: 40px;
          height: 100px;
          border-radius: 9999px;
          background: #ff914d;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(0,0,0,0.12);
        }
        @media (min-width: 640px) {
          .service-modal-close { width: 44px; height: 44px; }
        }
      `}</style>

      {/* HERO */}
      <header className="relative">
        <div className="relative h-100 sm:h-64 md:h-72 lg:h-96 xl:h-[420px] overflow-hidden">
          <img
            src={gynecologyBanner}
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
                <Pill>Speciality Department</Pill>
                <h1
                  className="mt-2 sm:mt-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight"
                  style={{ color: COLORS.deep }}
                >
                  Gynaecology & Obstetrics
                </h1>
                <p className="mt-2 sm:mt-3 text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                  Advanced, compassionate care for pregnancy, childbirth, and
                  women's reproductive health with comprehensive services from
                  routine check-ups to minimally invasive surgery and high-risk
                  pregnancy management.
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

      {/* MAIN CONTENT */}
      <main
        className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0 pb-16 sm:pb-20 md:pb-24"
        ref={ref}
      >
        <motion.section
          variants={container}
          initial="hidden"
          animate={controls}
          className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-start"
        >
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold"
              style={{ color: COLORS.deep }}
            >
              Overview
            </h2>
            <motion.p
              variants={fadeInUp}
              className="mt-3 sm:mt-4 md:mt-5 text-gray-700 text-sm sm:text-base leading-relaxed"
            >
              The Women’s Care Department is a dedicated mother-and-child unit
              offering complete services for pregnancy, childbirth and
              gynaecological problems under one roof, with experienced
              obstetricians, neonatology support and modern OTs.
            </motion.p>

            {/* Metrics */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="mt-4 sm:mt-6 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
            >
              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-sm ring-1 ring-gray-50"
              >
                <div className="text-xs sm:text-sm text-gray-500">
                  Deliveries / year
                </div>
                <div
                  className="mt-1.5 sm:mt-2 text-xl sm:text-2xl font-bold"
                  style={{ color: COLORS.deep }}
                >
                  {deliveries}+
                </div>
                <div className="mt-1 text-xs text-gray-400">
                  Comprehensive maternity and newborn care.
                </div>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-sm ring-1 ring-gray-50"
              >
                <div className="text-xs sm:text-sm text-gray-500">
                  Laparoscopic cases
                </div>
                <div
                  className="mt-1.5 sm:mt-2 text-xl sm:text-2xl font-bold"
                  style={{ color: COLORS.deep }}
                >
                  {laparos}+
                </div>
                <div className="mt-1 text-xs text-gray-400">
                  Minimally invasive gynaecological surgeries.
                </div>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-sm ring-1 ring-gray-50 xs:col-span-2 sm:col-span-1"
              >
                <div className="text-xs sm:text-sm text-gray-500">
                  NICU / newborn beds: {nicu}
                </div>
                <div
                  className="mt-1.5 sm:mt-2 text-xl sm:text-2xl font-bold"
                  style={{ color: COLORS.deep }}
                >
                  {nicu}
                </div>
                <div className="mt-1 text-xs text-gray-400">
                  Level‑3 style neonatal care support.
                </div>
              </motion.div>
            </motion.div>

            {/* Quick Questions */}
            <motion.div
              variants={fadeInUp}
              className="mt-6 sm:mt-8 md:mt-10 bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl ring-1 ring-gray-50 shadow-sm"
            >
              <h3
                className="text-base sm:text-lg font-semibold"
                style={{ color: COLORS.deep }}
              >
                Quick Questions
              </h3>
              <ul className="mt-3 sm:mt-4 space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-gray-700">
                <li>
                  <strong>24/7 Obstetric service:</strong> Full-time labour &
                  delivery team with NICU backup.
                </li>
                <li>
                  <strong>Cashless insurance:</strong> Accepted for eligible
                  providers.
                </li>
                <li>
                  <strong>Teleconsultation:</strong> Available with senior
                  consultants.
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Right column */}
          <motion.aside variants={fadeInUp} className="w-full lg:w-auto">
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-lg ring-1 ring-gray-100 sticky top-4">
              <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-start justify-between gap-3">
                <div>
                  <div className="text-xs text-gray-400">Emergency Line</div>
                  <div
                    className="text-base sm:text-lg font-semibold"
                    style={{ color: COLORS.deep }}
                  >
                    011‑49785874 (Landline)
                  </div>
                </div>
                <div className="flex flex-col items-start sm:items-end">
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
              <div className="mt-3 sm:mt-4 text-xs text-gray-500">
                Cashless facilities & major insurance partners.
              </div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-4 sm:mt-6 bg-white rounded-xl sm:rounded-2xl p-4 shadow-lg ring-1 ring-gray-50"
            >
              <h4
                className="text-sm font-semibold"
                style={{ color: COLORS.deep }}
              >
                Location
              </h4>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                KH.NO-122/14.PLOT NO-2, 84, Bhagat Colony, Burari, Delhi, 110084
              </p>
              <a
                href="https://maps.app.goo.gl/u3t64QQ2kBsR7kj67"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-xs sm:text-sm text-[#2448a5] hover:underline"
              >
                View on map →
              </a>
            </motion.div>
          </motion.aside>
        </motion.section>
        {/* Scope of Obstetrics & Gynaecology Services */}
        <section className="mt-10 sm:mt-12 md:mt-14">
          <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm ring-1 ring-gray-100">
            <h3
              className="text-xl sm:text-2xl md:text-3xl font-bold"
              style={{ color: COLORS.deep }}
            >
              Scope of Obstetrics & Gynaecology Services
            </h3>

            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-600 max-w-4xl">
              Our department is fully equipped to manage both routine and
              high-risk obstetric and gynaecological conditions with experienced
              specialists, advanced monitoring and 24×7 emergency support.
            </p>

            <div className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {SCOPE_SERVICES.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-[#f7fdfe] p-3 sm:p-4 rounded-lg ring-1 ring-gray-50 hover:shadow-md transition"
                >
                  <span
                    className="mt-1 w-5 h-5 flex items-center justify-center rounded-full text-white text-xs shrink-0"
                    style={{ background: COLORS.accent }}
                  >
                    ✓
                  </span>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services grid */}
        <section className="mt-8 sm:mt-10 md:mt-12 w-full">
          <div className="w-full bg-white rounded-xl sm:rounded-2xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
                <h3
                  className="text-xl sm:text-2xl md:text-3xl font-bold"
                  style={{ color: COLORS.deep }}
                >
                  Our Services
                </h3>
                <div className="hidden md:block w-20 lg:w-32 h-1 bg-[#ff914d] rounded-full" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                {SERVICES.map((s) => (
                  <ServiceTile key={s.id} s={s} onOpen={open} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Secondary cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6"
        >
          <ServiceCard
            title="Antenatal Care"
            desc="Expert care throughout pregnancy with routine check-ups, scans and counselling to ensure the health and safety of mother and baby."
          />
          <ServiceCard
            title="High-Risk Pregnancy Management"
            desc="Specialised monitoring and care for high-risk pregnancies with timely interventions to reduce complications."
          />
          <ServiceCard
            title="Gynecological Care"
            desc="Comprehensive gynaecological services, including routine examinations, screenings and treatment of common conditions."
          />
          <ServiceCard
            title="Family Planning and Contraception"
            desc="Personalised family planning counselling and a range of contraceptive options tailored to individual needs."
          />
          <ServiceCard
            title="Infertility Treatment"
            desc="Fertility evaluation and treatment options with compassionate support throughout the journey to parenthood."
          />
          <ServiceCard
            title="Menstrual Disorders Management"
            desc="Diagnosis and management of menstrual irregularities, painful periods and related concerns."
          />
        </motion.div>

        {/* Team */}
        <section className="mt-10 sm:mt-12 md:mt-14">
          <motion.h3
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="text-xl sm:text-2xl md:text-3xl font-bold"
            style={{ color: COLORS.deep }}
          >
            Our Specialists
          </motion.h3>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-4 sm:mt-5 md:mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5"
          >
            {team.map((t, i) => (
              <TeamCard key={i} name={t.name} role={t.role} img={t.img} />
            ))}
          </motion.div>
        </section>
      </main>

      {/* Modal */}
      {openService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 sm:px-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpenService(null);
          }}
        >
          <div ref={modalRef} className="relative max-w-3xl w-full">
            <div className="bg-white rounded-lg sm:rounded-xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 sm:p-8">
                  <h4
                    id="service-modal-title"
                    className="text-lg sm:text-xl font-semibold text-[#153E6B]"
                  >
                    {openService.title}
                  </h4>
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                    {openService.desc}
                  </p>
                </div>
                <div className="hidden md:block h-64 md:h-auto">
                  <img
                    src={patientImg}
                    alt={openService.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              onClick={() => setOpenService(null)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
