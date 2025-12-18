// src/Components/facilities/Paediatrics.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import doctorImg from "../../assets/doctorImage.jpg";
import patientImg from "../../assets/patient.jpeg";
import { Phone } from "lucide-react";
// Banner (reuse existing banner asset)
import paedsBanner from "../../assets/BannerGyno.jpg";
import icon1 from "../../assets/Child/Childhood.svg";
import icon2 from "../../assets/Child/Endocronolgy.svg";
import icon3 from "../../assets/Child/General.svg";
import icon4 from "../../assets/Child/Neonetal.svg";
import icon5 from "../../assets/Child/nephrology.svg";
import icon6 from "../../assets/Child/Nicu.svg";
import icon7 from "../../assets/Child/PediaticSurgery.svg";
import icon8 from "../../assets/Child/Pediatric.svg";
import icon9 from "../../assets/Child/pulmonology.svg";
import icon10 from "../../assets/Child/Surgery.svg";
import icon11 from "../../assets/Child/Tpn.svg";
import icon12 from "../../assets/Child/Peditrics.svg";

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

const DEFAULT_ICON = icon3;

const SERVICES = [
  {
    id: 1,
    img: icon10,
    title: "Surgery",
    desc: "Comprehensive pediatric surgical services including minimally invasive and open procedures.",
  },
  {
    id: 2,
    img: icon6,
    title: "NICU",
    desc: "Level II/III Neonatal Intensive Care Unit with round-the-clock neonatology specialists and advanced support.",
  },
  {
    id: 3,
    img: icon11,
    title: "TPN & Nutritional Support",
    desc: "Specialised neonatal and pediatric parenteral nutrition for growth and recovery.",
  },
  {
    id: 4,
    img: icon4,
    title: "Neonatal Care",
    desc: "Integrated neonatal care from stabilization to discharge planning, with family-centred support.",
  },
  {
    id: 5,
    img: icon3,
    title: "General Pediatrics",
    desc: "Outpatient and inpatient care for common childhood illnesses and preventive paediatrics.",
  },
  {
    id: 6,
    img: icon1,
    title: "Childhood Illnesses",
    desc: "Diagnosis and treatment of acute and chronic childhood conditions with evidence-based protocols.",
  },
  {
    id: 7,
    img: icon8,
    title: "Pediatric Neurology",
    desc: "Evaluation and management of seizures, developmental disorders, cerebral palsy and neuromuscular conditions.",
  },
  {
    id: 8,
    img: icon9,
    title: "Pediatric Pulmonology",
    desc: "Asthma, cystic fibrosis, bronchiolitis and chronic lung disease care with pulmonary function testing.",
  },
  {
    id: 9,
    img: icon2,
    title: "Pediatric Endocrinology",
    desc: "Diabetes care, growth disorders and hormonal conditions managed by pediatric endocrinologists.",
  },
  {
    id: 10,
    img: icon5,
    title: "Pediatric Nephrology",
    desc: "Comprehensive care for urinary tract infections, nephrotic syndrome and congenital renal disorders.",
  },
  {
    id: 11,
    img: icon12,
    title: "Pediatric Gastroenterology",
    desc: "Nutritional, liver and GI services including motility studies and therapeutic endoscopy.",
  },
  {
    id: 12,
    img: icon7,
    title: "Pediatric Surgery",
    desc: "Specialised pediatric surgical team for congenital and acquired surgical needs.",
  },
];

const Pill = ({ children }) => (
  <span
    className="inline-block px-3 py-1 rounded-full text-xs font-medium"
    style={{ background: "#eefafa", color: COLORS.accent }}
  >
    {children}
  </span>
);

const ServiceTile = ({ s, onOpen }) => {
  const iconSrc = s.img ?? DEFAULT_ICON;
  return (
    <motion.button
      variants={fadeInUp}
      onClick={(e) => onOpen(s, e)}
      className="group bg-[#eef8fb] p-6 rounded-2xl text-left flex flex-col items-center gap-4 hover:-translate-y-2 transition-transform shadow-sm focus:outline-none focus:ring-4 focus:ring-[rgba(31,156,156,0.08)]"
      aria-haspopup="dialog"
    >
      <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-sm ring-1 ring-gray-100 p-3">
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

export default function Paediatrics() {
  const births = useCountUp(3200, 900);
  const nicuBeds = useCountUp(28, 900);
  const specialists = useCountUp(14, 900);

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
    {
      name: "Dr. Anita Mehra",
      role: "Head - Pediatrics & Neonatology",
      img: doctorImg,
    },
    {
      name: "Dr. Karan Patel",
      role: "Consultant Neonatologist",
      img: doctorImg,
    },
    { name: "Dr. Meera Joshi", role: "Pediatric Neurologist", img: doctorImg },
    { name: "Dr. Ritu Sharma", role: "Pediatric Surgeon", img: doctorImg },
  ];

  return (
    <div className="bg-gray-50 text-gray-900 pt-23 md:pt-40">
      <style>{`body.modal-open { overflow: hidden; } .service-modal-close { width:44px;height:44px;border-radius:9999px;background:${COLORS.warm};color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 20px rgba(0,0,0,0.12); }`}</style>

      {/* HERO */}
      <header className="relative">
        <div className="relative h-100 sm:h-64 md:h-72 lg:h-96 xl:h-[420px] overflow-hidden">
          <img
            src={paedsBanner}
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
                  Compassionate Care for Children & Newborns
                </h1>
                <p className="mt-2 sm:mt-3 text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                  Comprehensive, family-centred pediatric and neonatal services
                  — from newborn stabilization in our NICU to specialized care
                  in pediatric subspecialties. We combine clinical excellence
                  with compassionate care to support every child’s healthiest
                  future.
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
                    Bus stop, Opp. Main Market, Virendar Nagar, Block B, Sant
                    Nagar, Burari, Delhi – 110084.
                  </span>
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

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
              Overview & Philosophy
            </h2>
            <motion.p
              variants={fadeInUp}
              className="mt-5 text-gray-700 leading-relaxed font-sans prose max-w-none"
            >
              Our Paediatrics and Neonatology unit provides holistic care across
              newborn, infant and child health. We emphasise early intervention,
              family involvement, and evidence-based practice across emergency,
              inpatient and outpatient settings.
            </motion.p>

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
                <div className="text-sm text-gray-500">Annual Deliveries</div>
                <div
                  className="mt-2 text-2xl font-bold"
                  style={{ color: COLORS.deep }}
                >
                  {births}+
                </div>
                <div className="mt-1 text-xs text-gray-400">
                  Safe births with neonatal support
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-2xl p-5 shadow-sm ring-1 ring-gray-50"
              >
                <div className="text-sm text-gray-500">NICU Beds</div>
                <div
                  className="mt-2 text-2xl font-bold"
                  style={{ color: COLORS.deep }}
                >
                  {nicuBeds}+
                </div>
                <div className="mt-1 text-xs text-gray-400">
                  Level II/III critical care capacity
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-2xl p-5 shadow-sm ring-1 ring-gray-50"
              >
                <div className="text-sm text-gray-500">
                  Pediatric Specialists
                </div>
                <div
                  className="mt-2 text-2xl font-bold"
                  style={{ color: COLORS.deep }}
                >
                  {specialists}+
                </div>
                <div className="mt-1 text-xs text-gray-400">
                  Subspecialty coverage across paediatrics
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-10 bg-white p-6 rounded-2xl ring-1 ring-gray-50 shadow-sm"
            >
              <h3
                className="text-lg font-semibold"
                style={{ color: COLORS.deep }}
              >
                Family-centred care highlights
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>
                  <strong>24/7 Neonatology:</strong> Dedicated neonatal team for
                  stabilization and advanced support.
                </li>
                <li>
                  <strong>Multidisciplinary rounds:</strong> Collaborative
                  planning involving parents, nurses and specialists.
                </li>
                <li>
                  <strong>Follow-up & growth support:</strong> Structured
                  discharge, nutrition and developmental follow-up clinics.
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.aside variants={fadeInUp} className="w-full lg:w-[360px]">
            <div className="bg-white rounded-2xl p-5 shadow-lg ring-1 ring-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-400">Emergency Line</div>
                  <div
                    className="text-lg font-semibold"
                    style={{ color: COLORS.deep }}
                  >
                    011-49785874
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
                  Refer / Book
                </a>
              </div>

              <div className="mt-4 text-xs text-gray-500">
                Insurance & cashless support | Parent accommodation
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
                Lotus Hospital - Burari, Delhi — Near Burari Metro. Parking
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

        <section className="mt-10 w-full">
          <div className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
              <div className="flex items-center justify-between mb-6">
                <h3
                  className="text-2xl font-bold"
                  style={{ color: COLORS.deep }}
                >
                  Our Services
                </h3>
                <div className="hidden md:block w-24 h-1 bg-[#ff914d] rounded-2xl" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {SERVICES.map((s) => (
                  <ServiceTile key={s.id} s={s} onOpen={open} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <ServiceCard
            title="Neonatal Resuscitation & Stabilization"
            desc="Immediate newborn resuscitation and advanced stabilization protocols with expert neonatology support."
          />
          <ServiceCard
            title="Pediatric Critical Care"
            desc="Dedicated pediatric intensive care with ventilatory and multi-organ support for critically ill children."
          />
          <ServiceCard
            title="Developmental & Behavioral Pediatrics"
            desc="Early detection and management of developmental delays with individualized intervention plans."
          />
          <ServiceCard
            title="Pediatric Surgery & Day-care Procedures"
            desc="Timely surgical interventions with child-friendly perioperative pathways to minimise distress and recovery time."
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
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
