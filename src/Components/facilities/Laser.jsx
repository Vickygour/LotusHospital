// src/Components/facilities/LaserSurgery.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Phone, X, CheckCircle } from "lucide-react";
import doctorImg from "../../assets/doctorImage.jpg";
import patientImg from "../../assets/patient.jpeg";
// reuse an existing banner (or replace with your laser banner)
import laserBanner from "../../assets/BannerGyno.jpg";

/* --------------------------------
   Theme / Motion helpers
   -------------------------------- */
const COLORS = {
  deep: "#0f3b5a",
  accent: "#1f9c9c",
  warm: "#ff914d",
  muted: "#6b7280",
};

const container = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
};
const fadeInUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.48, ease: "easeOut" } },
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

/* --------------------------------
   Laser services data
   -------------------------------- */
const SERVICES = [
  {
    id: 1,
    title: "Holmium Laser Lithotripsy",
    short: "Precise stone fragmentation with minimal trauma.",
    desc: "Holmium:YAG laser for safe, efficient fragmentation of kidney and ureteric stones (used with ureteroscope/PCNL). Offers high stone clearance and short recovery.",
  },
  {
    id: 2,
    title: "Laser Prostate Enucleation (HoLEP / PVP)",
    short: "Minimally invasive treatment for BPH.",
    desc: "Laser techniques (HoLEP / Photoselective Vaporization) to relieve urinary obstruction with less bleeding and quicker catheter removal compared to open surgery.",
  },
  {
    id: 3,
    title: "CO₂ & Diode Laser ENT Procedures",
    short: "Microsurgery for airway, larynx, nasal & snoring surgeries.",
    desc: "Precision soft-tissue cutting/coagulation for vocal cord lesions, turbinate reduction, snoring surgery and other ENT indications with minimal collateral damage.",
  },
  {
    id: 4,
    title: "Laser-Assisted Endoscopic Surgery",
    short: "Enhanced vision + energy for safer resections.",
    desc: "Combining endoscopy with laser for targeted resections in GI, ENT and minimally invasive urology — reduces bleeding and improves recovery.",
  },
  {
    id: 5,
    title: "Ophthalmic Laser Services (Refractive & Retinal)",
    short: "LASIK / PRK and retinal laser treatments.",
    desc: "State-of-the-art refractive correction (LASIK/PRK) and therapeutic retinal lasers for diabetic retinopathy, retinal tears and other retinal pathologies.",
  },
  {
    id: 6,
    title: "Dermato-Laser (Cosmetic & Therapeutic)",
    short: "Scar revision, vascular lesions, hair reduction.",
    desc: "Medical and aesthetic dermatologic laser procedures performed by trained specialists for safe outcome and fast recovery.",
  },
];

/* Small UI building blocks */
const Pill = ({ children }) => (
  <span
    className="inline-block px-3 py-1 rounded-full text-xs font-medium"
    style={{ background: "#eefafa", color: COLORS.accent }}
  >
    {children}
  </span>
);

function ServiceTile({ s, onOpen }) {
  // simple icon abstraction: use initials in a round tile (keeps layout neat without custom svg)
  const initials = (s.title || "")
    .split(" ")
    .slice(0, 2)
    .map((w) => (w ? w[0] : ""))
    .join("");

  return (
    <motion.button
      variants={fadeInUp}
      onClick={(e) => onOpen(s, e)}
      className="group bg-white/80 p-6 rounded-2xl text-left flex flex-col items-center gap-4 hover:-translate-y-2 transition-transform shadow-sm border border-gray-100"
      aria-haspopup="dialog"
    >
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center shadow-sm ring-1 ring-gray-100"
        style={{ background: "#f7fdfe" }}
      >
        <div className="text-lg font-semibold" style={{ color: COLORS.deep }}>
          {initials}
        </div>
      </div>

      <div className="text-center text-sm text-[#274c56] leading-tight font-medium">
        {s.title}
      </div>
      <div className="text-xs text-gray-500 text-center">{s.short}</div>
    </motion.button>
  );
}

function DetailCard({ title, desc, icon }) {
  // icon optional - use check circle for clarity
  return (
    <motion.article
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(15,59,90,0.06)" }}
      className="bg-white rounded-2xl p-6 ring-1 ring-gray-50 shadow-sm"
    >
      <div className="flex items-start gap-4">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: "#f7fdfe" }}
        >
          <CheckCircle
            strokeWidth={1.6}
            className="w-6 h-6"
            style={{ color: COLORS.accent }}
          />
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

/* ------------------------------
   Main component
   ------------------------------ */
export default function LaserSurgery() {
  const proceduresPerYear = useCountUp(4200, 900);
  const satisfiedPatients = useCountUp(24000, 900);
  const laserSpecialists = useCountUp(12, 900);

  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && controls.start("show")
        ),
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [controls]);

  const [openService, setOpenService] = useState(null);
  const prevActive = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (openService) document.body.classList.add("modal-open");
    else document.body.classList.remove("modal-open");
  }, [openService]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpenService(null);
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

  const specialists = [
    {
      name: "Dr. Vikram Joshi",
      role: "Lead Laser Surgeon (Urology)",
      img: doctorImg,
    },
    {
      name: "Dr. Simran Kaur",
      role: "Laser ENT & Laryngology",
      img: doctorImg,
    },
    {
      name: "Dr. Arjun Mehta",
      role: "Ophthalmic Laser Specialist",
      img: doctorImg,
    },
    {
      name: "Dr. Neha Batra",
      role: "Dermato-Laser Consultant",
      img: doctorImg,
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-900 pt-23 md:pt-40">
      <style>{`body.modal-open { overflow: hidden; } .service-modal-close { width:44px;height:44px;border-radius:9999px;background:${COLORS.warm};color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 20px rgba(0,0,0,0.12); }`}</style>

      {/* HERO */}
      <header className="relative">
        <div className="relative h-100 sm:h-64 md:h-72 lg:h-96 xl:h-[420px] overflow-hidden">
          <img
            src={laserBanner}
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
                <Pill>Advanced Laser Unit</Pill>
                <h1
                  className="mt-2 sm:mt-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight"
                  style={{ color: COLORS.deep }}
                >
                  Precision Laser Surgery — Minimal Trauma, Faster Recovery
                </h1>
                <p className="mt-2 sm:mt-3 text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                  Our Laser Unit brings multi-disciplinary laser expertise for
                  urology, ENT, ophthalmology, dermatology and minimally
                  invasive endoscopic surgeries — focused on safety, precision
                  and excellent outcomes.
                </p>
                <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 rounded-lg text-white font-medium text-sm sm:text-base hover:opacity-90 transition-opacity"
                    style={{ background: COLORS.accent }}
                  >
                    Book Appointment
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

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-6 md:px-10 lg:px-0 pb-24" ref={ref}>
        <motion.section
          variants={container}
          initial="hidden"
          animate={controls}
          className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
        >
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: COLORS.deep }}
            >
              Why choose Laser Surgery?
            </h2>
            <motion.p
              variants={fadeInUp}
              className="mt-5 text-gray-700 leading-relaxed"
            >
              Laser energy allows for microscopic precision, targeted tissue
              ablation, simultaneous coagulation and smaller wounds — resulting
              in reduced bleeding, less pain and faster functional recovery. Our
              team uses evidence-based protocols and cross-specialty experience
              to select the best laser option for each patient.
            </motion.p>

            <motion.div
              variants={container}
              className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-2xl p-5 shadow-sm ring-1 ring-gray-50"
              >
                <div className="text-sm text-gray-500">Procedures per year</div>
                <div
                  className="mt-2 text-2xl font-bold"
                  style={{ color: COLORS.deep }}
                >
                  {proceduresPerYear}+
                </div>
                <div className="mt-1 text-xs text-gray-400">
                  Laser-assisted procedures across departments
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-2xl p-5 shadow-sm ring-1 ring-gray-50"
              >
                <div className="text-sm text-gray-500">Satisfied Patients</div>
                <div
                  className="mt-2 text-2xl font-bold"
                  style={{ color: COLORS.deep }}
                >
                  {satisfiedPatients}+
                </div>
                <div className="mt-1 text-xs text-gray-400">
                  Measured positive outcomes & feedback
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-2xl p-5 shadow-sm ring-1 ring-gray-50"
              >
                <div className="text-sm text-gray-500">Laser Specialists</div>
                <div
                  className="mt-2 text-2xl font-bold"
                  style={{ color: COLORS.deep }}
                >
                  {laserSpecialists}
                </div>
                <div className="mt-1 text-xs text-gray-400">
                  Cross-disciplinary trained consultants
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8">
              <h3
                className="text-lg font-semibold mb-3"
                style={{ color: COLORS.deep }}
              >
                Core Advantages
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-700">
                <li>• Minimal bleeding and better operative visibility</li>
                <li>• Reduced postoperative pain and faster recovery</li>
                <li>
                  • Precise removal of diseased tissue with minimal collateral
                  damage
                </li>
                <li>
                  • Shorter hospital stays and quicker return to daily life
                </li>
                <li>• Well-suited for delicate microsurgeries (larynx, eye)</li>
                <li>
                  • Strong safety protocols and laser safety-trained staff
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.aside variants={fadeInUp} className="w-full lg:w-[360px]">
            <div className="bg-white rounded-2xl p-5 shadow-lg ring-1 ring-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-400">Contact Line</div>
                  <div
                    className="text-lg font-semibold"
                    style={{ color: COLORS.deep }}
                  >
                    011-49785874
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-gray-400">Timing</span>
                  <span className="text-sm text-green-500 font-medium">
                    24 hours available
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <a
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-3 px-4 py-2 rounded-lg text-white font-medium"
                  style={{ background: COLORS.accent }}
                >
                  Book Consultation
                </a>
              </div>

              <div className="mt-4 text-xs text-gray-500">
                Insurance support | Pre-op counselling | Day-care procedures
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

        {/* Services grid */}
        <section className="mt-10 w-full">
          <div className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
              <div className="flex items-center justify-between mb-6">
                <h3
                  className="text-2xl font-bold"
                  style={{ color: COLORS.deep }}
                >
                  Laser Services
                </h3>
                <div className="hidden md:block w-24 h-1 bg-[#ff914d] rounded-2xl" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {SERVICES.map((s) => (
                  <ServiceTile key={s.id} s={s} onOpen={open} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Detail cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <DetailCard
            title="Laser Safety & Training"
            desc="Our laser suites and staff follow hospital laser safety protocols: protective eyewear, dedicated laser safety officer, calibrated equipment and team training for safe procedures."
          />
          <DetailCard
            title="Pre-op Assessment"
            desc="All laser procedures begin with focused evaluation, imaging where needed, informed consent and counselling about expected outcomes and recovery."
          />
          <DetailCard
            title="Day-care Laser Procedures"
            desc="Many laser interventions are performed as day-care procedures with same-day discharge and structured follow-up instructions for quick recovery."
          />
          <DetailCard
            title="Multidisciplinary Planning"
            desc="Complex cases are reviewed in multidisciplinary meetings — urology, ENT, ophthalmology, dermatology and anaesthesia collaborate to select optimum laser strategy."
          />
        </motion.div>

        {/* Specialists */}
        <section className="mt-12">
          <motion.h3
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="text-2xl font-bold"
            style={{ color: COLORS.deep }}
          >
            Our Laser Team
          </motion.h3>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {specialists.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-gray-50"
              >
                <img
                  src={s.img}
                  alt={s.name}
                  className="w-full h-44 object-cover"
                />
                <div className="p-4 text-center">
                  <div
                    className="text-md font-semibold"
                    style={{ color: COLORS.deep }}
                  >
                    {s.name}
                  </div>
                  <div className="text-sm text-gray-500">{s.role}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>

      {/* Modal */}
      {openService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpenService(null);
          }}
        >
          <div ref={modalRef} className="relative max-w-3xl w-full">
            <div className="bg-white rounded-md shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8">
                  <h4
                    id="service-modal-title"
                    className="text-xl font-semibold text-[#153E6B]"
                  >
                    {openService.title}
                  </h4>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {openService.desc}
                  </p>
                </div>
                <div className="hidden md:block">
                  <img
                    src={patientImg}
                    alt={openService.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <button
              className="service-modal-close absolute -top-6 right-0 -translate-y-1/2 focus:outline-none"
              onClick={() => setOpenService(null)}
              aria-label="Close"
            >
              <X />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
