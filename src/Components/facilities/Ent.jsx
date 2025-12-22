// src/Components/facilities/ENT.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import doctorImg from "../../assets/Vector.jpg";
import patientImg from "../../assets/patient.jpeg";
import { Phone, X } from "lucide-react";
import banner from "../../assets/BannerGyno.jpg";

// vector icons (kept exactly as uploaded)
import iconEmergency from "../../assets/ENT/emergency.svg";
import iconImpatient from "../../assets/ENT/Impatient.svg";
import iconOPD from "../../assets/ENT/OPD.svg";
import iconSurgical from "../../assets/ENT/Surgeical.svg";

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
  hidden: { opacity: 0, y: 14 },
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

const SERVICES = [
  {
    id: 1,
    img: iconOPD,
    title: "Outpatient ENT Care",
    desc: "Rapid assessment and management of ear, nose and throat complaints — infections, allergies, vertigo and more.",
  },
  {
    id: 2,
    img: iconEmergency,
    title: "ENT Emergency",
    desc: "24/7 management of airway compromise, severe epistaxis, facial trauma and acute infections.",
  },
  {
    id: 3,
    img: iconSurgical,
    title: "Ear, Nose & Throat Surgery",
    desc: "Microsurgery, endoscopic sinus surgery, tonsillectomy and pediatric ENT surgical procedures.",
  },
  {
    id: 4,
    img: iconImpatient,
    title: "Inpatient & Observation",
    desc: "Short-stay and inpatient care with monitoring, post-op rehabilitation and multi-disciplinary coordination.",
  },
  // non-vector extras (rendered as neat cards)
  {
    id: 101,
    title: "Hearing & Balance Clinic",
    desc: "Hearing tests, audiology, tinnitus management and vestibular rehabilitation.",
  },
  {
    id: 102,
    title: "Allegy & Rhinology",
    desc: "Comprehensive allergy testing and functional endoscopic sinus care for chronic rhinosinusitis.",
  },
  {
    id: 103,
    title: "Pediatric ENT",
    desc: "Child-focused ENT care — airway issues, recurrent infections and congenital problems.",
  },
  {
    id: 104,
    title: "Head & Neck Oncology",
    desc: "Multidisciplinary care for head and neck tumours with reconstructive and rehabilitative pathways.",
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

const VectorTile = ({ s, onOpen }) => (
  <motion.button
    variants={fadeInUp}
    onClick={(e) => onOpen(s, e)}
    className="group bg-[#eef8fb] p-5 rounded-2xl flex flex-col items-center gap-3 hover:-translate-y-1.5 transition-transform shadow-sm focus:outline-none focus:ring-4 focus:ring-[rgba(31,156,156,0.08)]"
    aria-haspopup="dialog"
  >
    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-sm ring-1 ring-gray-100 p-3">
      <img
        src={s.img}
        alt={`${s.title} icon`}
        className="w-full h-full object-contain"
      />
    </div>
    <div className="text-center text-sm text-[#274c56] font-medium">
      {s.title}
    </div>
  </motion.button>
);

const CardService = ({ s, onOpen }) => {
  const initials =
    (s.title || "")
      .split(" ")
      .slice(0, 2)
      .map((w) => (w ? w[0] : ""))
      .join("") || "EN";

  return (
    <motion.button
      variants={fadeInUp}
      onClick={(e) => onOpen(s, e)}
      className="w-full bg-white border border-gray-100 rounded-2xl p-4 flex gap-4 items-start hover:shadow-md transition-shadow focus:outline-none focus:ring-4 focus:ring-[rgba(31,156,156,0.06)]"
    >
      <div className="flex-shrink-0">
        <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-[#f7fdfe] ring-1 ring-gray-50">
          <span
            className="text-sm font-semibold"
            style={{ color: COLORS.deep }}
          >
            {initials}
          </span>
        </div>
      </div>
      <div className="text-left">
        <div className="text-sm font-semibold" style={{ color: COLORS.deep }}>
          {s.title}
        </div>
        <div className="mt-1 text-xs text-gray-600">{s.desc}</div>
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

function DetailCard({ title, desc }) {
  return (
    <motion.article
      whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(15,59,90,0.06)" }}
      className="bg-white rounded-xl p-4 ring-1 ring-gray-50 shadow-sm"
    >
      <div className="flex items-start gap-3">
        <div
          className="w-10 h-10 rounded-md flex items-center justify-center shrink-0"
          style={{ background: "#f7fdfe" }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke={COLORS.accent}
          >
            <path d="M12 2v20" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M5 7h14" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </div>

        <div className="flex-1">
          <h4
            className="text-base font-semibold"
            style={{ color: COLORS.deep }}
          >
            {title}
          </h4>
          <p className="mt-1 text-sm text-gray-600">{desc}</p>
        </div>
      </div>
    </motion.article>
  );
}

export default function ENT() {
  const procedures = useCountUp(5600, 900);
  const surgeries = useCountUp(1200, 900);
  const consultants = useCountUp(12, 900);

  const controls = useAnimation();
  const ref = useRef(null);
  const modalRef = useRef(null);
  const prevActive = useRef(null);

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

  useEffect(() => {
    document.body.classList.toggle("modal-open", !!openService);
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
      name: "Dr. Ravi Malhotra",
      role: "Consultant ENT & Head-Neck Surgeon",
      img: doctorImg,
    },
    {
      name: "Dr. Sangeeta Rao",
      role: "Pediatric ENT Specialist",
      img: doctorImg,
    },
    {
      name: "Dr. Nikhil Bansal",
      role: "Otologist / Cochlear Implant Surgeon",
      img: doctorImg,
    },
    {
      name: "Dr. Priya Menon",
      role: "Rhinologist & Allergy Specialist",
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
            src={banner}
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
                  className="mt-2 sm:mt-3 text-xl sm:text-2xl md:text-3xl lg:text-3xl font-extrabold leading-tight"
                  style={{ color: COLORS.deep }}
                >
                  Complete ENT Care — Diagnostics, Surgery & Rehabilitation
                </h1>
                <p className="mt-3 text-gray-700 text-sm md:text-base">
                  We provide comprehensive care for ear, nose and throat
                  conditions with specialist clinics, advanced diagnostics and
                  minimally invasive surgery — all delivered with compassion and
                  clinical precision.
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
              Our Approach
            </h2>
            <motion.p
              variants={fadeInUp}
              className="mt-5 text-gray-700 leading-relaxed prose max-w-none"
            >
              Evidence-based ENT care with rapid diagnostics, minimally invasive
              procedures and comprehensive rehabilitation. We combine specialist
              clinics (audiology, rhinology, head-neck oncology) with 24/7
              emergency response for airway and trauma cases.
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
                <div className="text-sm text-gray-500">Procedures / year</div>
                <div
                  className="mt-2 text-2xl font-bold"
                  style={{ color: COLORS.deep }}
                >
                  {procedures}+
                </div>
                <div className="mt-1 text-xs text-gray-400">
                  Diagnostics, procedures & minor interventions
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-2xl p-5 shadow-sm ring-1 ring-gray-50"
              >
                <div className="text-sm text-gray-500">Major Surgeries</div>
                <div
                  className="mt-2 text-2xl font-bold"
                  style={{ color: COLORS.deep }}
                >
                  {surgeries}+
                </div>
                <div className="mt-1 text-xs text-gray-400">
                  Endoscopic and open head-neck surgeries
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-2xl p-5 shadow-sm ring-1 ring-gray-50"
              >
                <div className="text-sm text-gray-500">Consultants</div>
                <div
                  className="mt-2 text-2xl font-bold"
                  style={{ color: COLORS.deep }}
                >
                  {consultants}+
                </div>
                <div className="mt-1 text-xs text-gray-400">
                  Subspecialty expertise across ENT
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
                What to expect
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>
                  <strong>Fast triage & diagnostics:</strong> Audiometry, nasal
                  endoscopy and CT/MRI coordination.
                </li>
                <li>
                  <strong>Minimally invasive first:</strong> Endoscopic and
                  microsurgical techniques for faster recovery.
                </li>
                <li>
                  <strong>Rehabilitation:</strong> Hearing rehabilitation,
                  vestibular physiotherapy and speech pathology coordination.
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
                Insurance & cashless support | Audiology & rehab on-site
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

        <section className="mt-10 w-full">
          <div className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
              <div className="flex items-center justify-between mb-6">
                <h3
                  className="text-2xl font-bold"
                  style={{ color: COLORS.deep }}
                >
                  Services
                </h3>
                <div className="hidden md:block w-24 h-1 bg-[#ff914d] rounded-2xl" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-8">
                {SERVICES.filter((s) => s.img).map((s) => (
                  <VectorTile key={s.id} s={s} onOpen={open} />
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SERVICES.filter((s) => !s.img).map((s) => (
                  <CardService key={s.id} s={s} onOpen={open} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="mt-10">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="mb-6">
              <h3 className="text-xl font-bold" style={{ color: COLORS.deep }}>
                Clinical Highlights
              </h3>
              <p className="mt-1 text-md text-gray-600 max-w-2xl">
                Short, focused services and programmes that patients and
                referrers frequently ask for.
              </p>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4"
            >
              <DetailCard
                title="Hearing & Balance Services"
                desc="Audiology, tympanometry, hearing aids and vestibular rehabilitation to restore hearing and balance."
              />
              <DetailCard
                title="Advanced Rhinology"
                desc="Endoscopic sinus surgery, balloon sinuplasty and allergy management for chronic sinus disease."
              />
              <DetailCard
                title="Pediatric ENT & Airway"
                desc="Child-friendly diagnostics and management of airway, tonsil/adenoid disorders and recurrent infections."
              />
              <DetailCard
                title="Head & Neck Oncology Care"
                desc="Integrated surgical and rehabilitative pathways with multidisciplinary tumor board support."
              />
            </motion.div>
          </div>
        </div>

        <section className="mt-12">
          <motion.h3
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="text-2xl font-bold"
            style={{ color: COLORS.deep }}
          >
            Our Team
          </motion.h3>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {team.map((t, i) => (
              <TeamCard key={i} {...t} />
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
              <X />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
