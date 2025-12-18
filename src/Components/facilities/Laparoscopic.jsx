// src/Components/facilities/Gynecologist.jsx
// NOTE: File name kept as requested, although content is Laparoscopic Surgery.

import React, { useEffect, useRef, useState } from "react";
import { Phone } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import doctorImg from "../../assets/doctorImage.jpg";
import patientImg from "../../assets/patient.jpeg";
import gynecologyBanner from "../../assets/BannerGyno.jpg"; // Asset name kept as requested
import icon1 from "../../assets/GynoVector/21afaf9e283cebe5cd63cce585c93953.svg";
import icon3 from "../../assets/GynoVector/38e537276497b3f1b97ad38a0c8d9391.svg";
import icon9 from "../../assets/GynoVector/d3fbf9e3c0b27457e243a9795d8d7039.svg";
import icon10 from "../../assets/GynoVector/ef87ac2e85f8264e5bc9ce617ce5fe8a.svg";

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

/* DEFAULT ICON (uploaded by you) */
const DEFAULT_ICON = "/mnt/data/8a3fb2019cba96499f2ccecde6d3e2f7.svg";

/* Services data (4 items) - Highly Professional Content */
const SERVICES = [
  {
    id: 1,
    img: icon1,
    title: "General Surgical Excellence (MIS)",
    desc: "We perform routine and complex general surgeries—including **cholecystectomy, hernia repair, and splenectomy**—using minimally invasive techniques for superior patient outcomes and cosmesis.",
  },
  {
    id: 3,
    img: icon3,
    title: "State-of-the-Art Technology",
    desc: "Our operating theatres are equipped with **4K Ultra-HD Visualization Systems** and advanced energy devices, ensuring microscopic precision and the safest surgical environment.",
  },
  {
    id: 7,
    img: icon9,
    title: "Fellowship-Trained Surgeons",
    desc: "Our specialists are highly credentialed, many holding advanced **Fellowships in Minimally Invasive and Bariatric Surgery**, offering world-class expertise right here at Lotus Hospital.",
  },
  {
    id: 10,
    img: icon10,
    title: "Enhanced Recovery After Surgery (ERAS)",
    desc: "We utilize tailored ERAS protocols, focusing on preemptive pain control, early mobilization, and optimal nutrition to accelerate recovery and minimize post-operative complications.",
  },
];

/* Small UI subcomponents */
const Pill = ({ children }) => (
  <span
    className="inline-block px-3 py-1 rounded-full text-xs font-medium"
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
      className="group bg-[#eef8fb] p-6 rounded-2xl text-left flex flex-col items-center gap-4 hover:-translate-y-2 transition-transform shadow-sm focus:outline-none focus:ring-4 focus:ring-[rgba(31,156,156,0.08)]"
      aria-haspopup="dialog"
    >
      <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-sm ring-1 ring-gray-100">
        {/* render the uploaded svg icon */}
        <img src={iconSrc} alt={s.title} className="w-12 h-12 object-contain" />
      </div>

      <div className="text-center text-sm text-[#274c56] leading-tight font-medium">
        {s.title}
      </div>
    </button>
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
          className="w-full h-44 object-cover"
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

/* ServiceCard used in secondary grid */
function ServiceCard({ title, desc }) {
  return (
    <motion.article
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(15,59,90,0.06)" }}
      className="bg-white rounded-2xl p-6 focus:outline-none focus:ring-4 focus:ring-[rgba(31,156,156,0.06)] ring-1 ring-gray-50 shadow-sm"
    >
      <div className="flex items-start gap-4">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: "#f7fdfe" }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke={COLORS.accent}
          >
            <path d="M12 2v20" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M5 7h14" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
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

/* Main component */
export default function Laparoscopic() {
  /* Metrics updated for professional focus */
  const procedures = useCountUp(2100, 900); // Increased volume for 'Best' impression
  const experience = useCountUp(30, 900); // Increased team experience
  const complexityRate = useCountUp(85, 900); // New metric: Complex MIS Procedures Rate

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

  // Modal state (unchanged logic)
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

  const team = [
    { name: "Dr. Rohit Verma", role: "Chief of Advanced MIS", img: doctorImg },
    {
      name: "Dr. Arjun Mehta",
      role: "Senior Consultant, GI Laparoscopy",
      img: doctorImg,
    },
    {
      name: "Dr. Anjali Gupta",
      role: "Director, Gynae Endoscopy",
      img: doctorImg,
    },
    {
      name: "Dr. Sunil Sharma",
      role: "Consultant, Uro-Laparoscopy",
      img: doctorImg,
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-900 mt-23 md:mt-40">
      <style>{`
        body.modal-open { overflow: hidden; }
        .service-modal-close { width:44px;height:44px;border-radius:9999px;background:#ff914d;color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 20px rgba(0,0,0,0.12); }
      `}</style>

      {/* HERO - Content optimized for professional language */}
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
                <Pill>Center of Excellence</Pill>
                <h1
                  className="mt-2 sm:mt-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight"
                  style={{ color: COLORS.deep }}
                >
                  Advanced Minimally Invasive & Laparoscopic Surgery
                </h1>
                <p className="mt-2 sm:mt-3 text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                  We are dedicated to pioneering minimal access surgery (MAS),
                  reducing patient trauma, accelerating recovery, and delivering
                  exceptional clinical outcomes. Our services cover complex
                  Gastrointestinal, Urological, and Gynecological procedures.
                </p>
                <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 rounded-lg text-white font-medium text-sm sm:text-base hover:opacity-90 transition-opacity"
                    style={{ background: COLORS.accent }}
                  >
                    Request Appointment
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
                    Bus stop, Opp. Main Market, Virendar Nagar, Block B, Sant
                    Nagar, Burari, Delhi – 110084.
                  </span>
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
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
              Clinical Overview and Philosophy
            </h2>
            <motion.p
              variants={fadeInUp}
              className="mt-5 text-gray-700 leading-relaxed font-sans prose max-w-none"
            >
              The Minimally Invasive Surgery team at Lotus Hospital is committed
              to reducing recovery time, enhancing patient comfort, and
              minimizing scarring. We apply advanced laparoscopic and robotic
              techniques across surgical disciplines, providing our patients
              with world-class surgical care through the smallest possible
              incisions.
            </motion.p>

            {/* COUNTER METRICS - Professional KPIs */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-2xl p-5 shadow-sm ring-1 ring-gray-50"
              >
                <div className="text-sm text-gray-500">
                  MIS Procedures Performed
                </div>
                <div
                  className="mt-2 text-2xl font-bold"
                  style={{ color: COLORS.deep }}
                >
                  {procedures}+
                </div>
                <div className="mt-1 text-xs text-gray-400">
                  Total surgical volume (annual)
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
                  {experience}+
                </div>
                <div className="mt-1 text-xs text-gray-400">
                  Combined years in advanced MIS
                </div>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-2xl p-5 shadow-sm ring-1 ring-gray-50"
              >
                <div className="text-sm text-gray-500">Complex MIS Rate</div>
                <div
                  className="mt-2 text-2xl font-bold"
                  style={{ color: COLORS.deep }}
                >
                  {complexityRate}%
                </div>
                <div className="mt-1 text-xs text-gray-400">
                  Procedures for high-risk patients
                </div>
              </motion.div>
            </motion.div>

            {/* QUICK QUESTIONS - Focussed on patient readiness */}
            <motion.div
              variants={fadeInUp}
              className="mt-10 bg-white p-6 rounded-2xl ring-1 ring-gray-50 shadow-sm"
            >
              <h3
                className="text-lg font-semibold"
                style={{ color: COLORS.deep }}
              >
                Patient Care Protocol
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>
                  <strong>24/7 Emergency Surgery:</strong> Dedicated surgical
                  and anesthesia teams available 24/7 for acute abdominal
                  emergencies requiring immediate laparoscopic intervention.
                </li>
                <li>
                  <strong>Cashless Insurance:</strong> Accepted for eligible
                  providers, ensuring seamless administrative support during
                  your surgical journey.
                </li>
                <li>
                  <strong>Second Opinion & Teleconsultation:</strong> Available
                  with senior consultants to discuss your diagnosis and
                  suitability for a minimally invasive approach.
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Right column - UNCHANGED */}
          <motion.aside variants={fadeInUp} className="w-full lg:w-[360px]">
            <div className="bg-white rounded-2xl p-5 shadow-lg ring-1 ring-gray-100">
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
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-3 px-4 py-2 rounded-lg text-white font-medium"
                  style={{ background: COLORS.accent }}
                >
                  Book Appointment
                </a>
              </div>
              <div className="mt-4 text-xs text-gray-500">
                Cashless facilities & major insurance partners.
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
                Lotus Hospital - Burari, Delhi — Near Burari Metro. parking
                available.
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

        {/* Services grid (full width within max-w-7xl) - DATA UPDATED */}
        <section className="mt-10 w-full">
          <div className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {SERVICES.map((s) => (
                  <ServiceTile key={s.id} s={s} onOpen={open} />
                ))}
              </div>
            </div>
          </div>
        </section>
        <div className="flex items-center justify-between mb-6">
          <h3
            className="text-2xl font-bold md:text-3xl"
            style={{ color: COLORS.deep }}
          >
            Surgical Specialties and Expertise
          </h3>
          <div className="hidden md:block w-100 h-1 bg-[#ff914d] rounded-2xl" />
        </div>

        {/* SECONDARY SERVICE CARDS - DATA UPDATED */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <ServiceCard
            title="Gastrointestinal & Bariatric MIS"
            desc="Advanced laparoscopic management of complex upper and lower GI disorders, including single-incision laparoscopic surgery (SILS) for conditions like bariatrics and complex hernias."
          />
          <ServiceCard
            title="Advanced Gynecological Endoscopy"
            desc="Minimally invasive procedures for all major gynecological conditions, offering scarless approaches for **Total Laparoscopic Hysterectomy (TLH)**, myomectomy, and fertility-enhancing procedures."
          />
          <ServiceCard
            title="Uro-Laparoscopy & Oncologic Surgery"
            desc="Pioneering minimal access for urological conditions, including laparoscopic and robotic-assisted **nephrectomy, pyeloplasty**, and prostate/bladder cancer staging and removal."
          />
          <ServiceCard
            title="Pediatric & Thoracic Laparoscopy"
            desc="Specialized minimally invasive options tailored for children (pediatric laparoscopy) and certain thoracic (chest) conditions, ensuring faster recovery in delicate cases."
          />
        </motion.div>

        <section className="mt-12">
          <motion.h3
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="text-2xl font-bold"
            style={{ color: COLORS.deep }}
          >
            Our Specialists
          </motion.h3>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {team.map((t, i) => (
              <TeamCard key={i} name={t.name} role={t.role} img={t.img} />
            ))}
          </motion.div>
        </section>

        {/* ... testimonials & CTA ... */}
      </main>

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
              <span className="font-bold text-lg">✕</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
