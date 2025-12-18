// src/Components/facilities/XRayServices.jsx
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Phone, Image as ImageIcon, ShieldCheck } from "lucide-react";
import { FaXRay, FaBone, FaBaby, FaUserMd } from "react-icons/fa";

import xrayBanner from "../../assets/XrayBanner.jpg";
import xrayMachine from "../../assets/Xray1.jpg";
import xrayImage from "../../assets/Xray2.jpg";
import radiologistImg from "../../assets/img2.png";

const COLORS = {
  deep: "#16324a",
  accent: "#2fb6d6",
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

const MAIN_SERVICES = [
  {
    id: 1,
    icon: <FaBone />,
    title: "Chest X-Ray (PA/AP)",
    desc: "Quick evaluation of lungs, heart size and chest pathology.",
  },
  {
    id: 2,
    icon: <FaXRay />,
    title: "Skeletal X-Ray",
    desc: "Fracture, joint and bone disease imaging for orthopaedic care.",
  },
  {
    id: 3,
    icon: <FaBaby />,
    title: "Pediatric X-Ray",
    desc: "Child-friendly imaging protocols with minimal exposure.",
  },
  {
    id: 4,
    icon: <FaUserMd />,
    title: "Portable/Bedside X-Ray",
    desc: "Imaging at bedside for immobile or ICU patients.",
  },
];

const CONTACT = {
  landline: "011-49785874",
  mobile: "9210399470",
};

const Pill = ({ children }) => (
  <span
    className="inline-block px-3 py-1 rounded-full text-xs font-medium"
    style={{ background: "#eefafa", color: COLORS.accent }}
  >
    {children}
  </span>
);

export default function XRayServices() {
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

  return (
    <div className="bg-gray-50 text-gray-900 pt-23 md:pt-40">
      <style>{`body.modal-open { overflow: hidden; } .service-modal-close { width:44px;height:44px;border-radius:9999px;background:${COLORS.warm};color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 20px rgba(0,0,0,0.12); }`}</style>

      {/* HERO */}
      <header className="relative">
        <div className="relative h-100 sm:h-64 md:h-72 lg:h-96 xl:h-[420px] overflow-hidden">
          <img
            src={xrayBanner}
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
                  X-Ray Imaging Services
                </h1>

                <p className="mt-3 text-gray-700 text-sm md:text-base">
                  Rapid, accurate radiography for chest, bone, and emergency
                  imaging — performed with safety protocols and expert
                  interpretation.
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
      <main className="max-w-7xl mx-auto px-6 md:px-10 pb-24" ref={ref}>
        {/* Intro + metrics + Sidebar */}
        <motion.section
          variants={container}
          initial="hidden"
          animate={controls}
          className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
        >
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: COLORS.deep }}
            >
              Overview & Clinical Focus
            </h2>

            <motion.p
              variants={fadeInUp}
              className="mt-5 text-gray-700 leading-relaxed font-sans prose max-w-none"
            >
              X-Ray (radiography) provides fast imaging for the chest, bones and
              joints, dental imaging and emergency trauma evaluation. Our
              department uses digital radiography systems that reduce exposure
              while producing high-resolution images for prompt reporting by
              radiologists.
            </motion.p>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <StatCard
                title="Digital Systems"
                value="DR & CR"
                subtitle="High-resolution, low dose imaging"
              />
              <StatCard
                title="Portable X-Ray"
                value="Available"
                subtitle="Bedside imaging for ICU/wards"
              />
              <StatCard
                title="Reporting By"
                value="Radiologist"
                subtitle="Expert image interpretation"
              />
            </motion.div>
          </motion.div>

          <motion.aside variants={fadeInUp} className="w-full lg:col-span-1">
            <div className="bg-white rounded-2xl p-5 shadow-lg ring-1 ring-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-400">Appointment Line</div>
                  <div
                    className="text-lg font-semibold"
                    style={{ color: COLORS.deep }}
                  >
                    {CONTACT.landline}
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs text-gray-400">Timing</span>
                  <span className="text-sm text-green-500 font-medium">
                    Mon–Sat • 8am–6pm
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <a
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-3 px-4 py-3 rounded-lg text-white font-medium transition-colors hover:bg-[#158080]"
                  style={{ background: COLORS.accent }}
                >
                  Book X-Ray / Request Portable
                </a>
              </div>

              <div className="mt-4 text-xs text-gray-500 text-center">
                Radiation safety protocols | Shielding available
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
                Safety Highlights
              </h4>
              <p className="text-xs text-gray-600 mt-2">
                We follow ALARA (As Low As Reasonably Achievable) principles to
                minimize exposure and only image when clinically necessary.
              </p>
              <a
                href="https://maps.app.goo.gl/7qxmg1MJakjr1eJ57"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm text-[#2448a5] hover:underline"
              >
                View on map
              </a>
            </motion.div>
          </motion.aside>
        </motion.section>

        {/* Enlarged Machine Diagram & Detailed Content */}
        <section className="mt-16 w-full">
          <div className="max-w-7xl mx-auto py-8 bg-white rounded-2xl shadow-xl ring-1 ring-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start p-6 md:p-10">
              <motion.div
                variants={fadeInUp}
                className="rounded-xl overflow-hidden shadow-2xl border-4 border-white"
              >
                <img
                  src={xrayMachine}
                  alt="X-ray machine"
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3
                  className="text-2xl font-bold"
                  style={{ color: COLORS.deep }}
                >
                  How X-Ray Imaging Works
                </h3>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  X-rays are a form of ionizing radiation that pass through the
                  body. Dense structures (like bone) absorb more X-rays and
                  appear white; air and soft tissue allow more X-rays through
                  and appear darker. Our digital detectors convert X-rays into
                  high-contrast images that help clinicians diagnose fractures,
                  chest infections, and many other conditions.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-4">
                  <DetailRow label="When is an X-ray recommended?">
                    For suspected fractures, chest infection, pre-op clearance,
                    dental issues, and monitoring certain chronic conditions.
                  </DetailRow>

                  <DetailRow label="How to prepare">
                    Usually no preparation is needed. Remove metal jewellery
                    near the imaging area. For pregnant patients, always inform
                    the staff.
                  </DetailRow>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services grid */}
        <section className="mt-16 w-full" id="services">
          <div className="w-full bg-white rounded-2xl shadow-xl ring-1 ring-gray-100">
            <div className="max-w-7xl mx-auto p-6 md:p-10">
              <div className="flex items-center justify-between mb-8">
                <h3
                  className="text-2xl font-bold"
                  style={{ color: COLORS.deep }}
                >
                  Our X-Ray Services
                </h3>
                <div
                  className="hidden md:block w-24 h-1 rounded-2xl"
                  style={{ background: COLORS.warm }}
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {MAIN_SERVICES.map((s) => (
                  <motion.button
                    key={s.id}
                    variants={fadeInUp}
                    className="group bg-[#eef9fb] p-6 rounded-2xl text-left flex flex-col items-center gap-4 hover:-translate-y-2 transition-transform shadow-md focus:outline-none focus:ring-4 focus:ring-[rgba(47,182,214,0.08)] h-full"
                    type="button"
                  >
                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-md ring-1 ring-gray-100 p-3 shrink-0">
                      <div className="text-3xl" style={{ color: COLORS.deep }}>
                        {s.icon}
                      </div>
                    </div>

                    <div className="flex flex-col items-center flex-grow">
                      <div className="text-center text-sm text-[#123746] leading-tight font-extrabold">
                        {s.title}
                      </div>
                      <div className="text-xs text-gray-500 mt-2 text-center flex-grow">
                        {s.desc}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Knowledge block with X-ray image */}
        <section className="max-w-7xl mx-auto mt-16 py-10 bg-white shadow-2xl rounded-2xl ring-1 ring-gray-100 p-6 md:p-10">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            className="text-center text-3xl font-extrabold mb-10"
            style={{ color: COLORS.deep }}
          >
            Reading an X-Ray: What to Look For
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="lg:sticky lg:top-8">
              <img
                src={xrayImage}
                alt="Sample X-ray image"
                className="w-full rounded-xl shadow-2xl border-4 border-gray-100"
              />
              <p className="text-xs text-gray-600 mt-3 text-center">
                Example radiograph showing typical landmarks used by
                radiologists.
              </p>
            </div>

            <div className="space-y-6">
              <SmallCard title="Bone Integrity">
                Inspect cortical margins for discontinuity — helps spot
                fractures.
              </SmallCard>
              <SmallCard title="Joint Spaces">
                Narrowing or asymmetry can indicate arthritis or dislocation.
              </SmallCard>
              <SmallCard title="Soft Tissue">
                Swelling or gas in soft tissues are important signs of injury or
                infection.
              </SmallCard>
              <SmallCard title="Chest X-Ray Focus">
                Look for lung opacities, air-space disease, heart size and
                pleural effusions.
              </SmallCard>
              <SmallCard title="Radiation Safety">
                We use lead shielding and strict exposure limits. Pregnant
                patients are imaged only when necessary and with precautions.
              </SmallCard>
            </div>
          </div>
        </section>

        {/* Detail cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <ServiceDetailCard
            title="Trauma & Fracture Evaluation"
            desc="Fast imaging for ER patients and follow-up of fracture healing."
          />
          <ServiceDetailCard
            title="Chest Radiography"
            desc="Diagnose pneumonia, CHF, pleural effusion and other thoracic conditions."
          />
          <ServiceDetailCard
            title="Dental & Maxillofacial X-Ray"
            desc="Used for dental implant planning, trauma and pathologies."
          />
          <ServiceDetailCard
            title="Orthopaedic Follow-up"
            desc="Assess surgical fixation, alignment and bone healing."
          />
        </motion.div>

        {/* Specialists */}
        <section className="mt-16">
          <motion.h3
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="text-2xl font-bold mb-6"
            style={{ color: COLORS.deep }}
          >
            Our Radiology Team
          </motion.h3>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          >
            {[
              { name: "Dr. R.S. Verma", role: "Chief Radiologist" },
              { name: "Dr. Nidhi Gupta", role: "Consultant Radiologist" },
              { name: "Mr. Aman Kumar", role: "X-Ray Technologist" },
              { name: "Ms. Sunita Rao", role: "Radiology Nurse" },
            ].map((t, i) => (
              <motion.div variants={fadeInUp} key={i}>
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-100 hover:shadow-xl transition-shadow">
                  <img
                    src={radiologistImg}
                    alt={t.name}
                    className="w-full h-44 object-cover object-top"
                    loading="lazy"
                  />
                  <div className="p-4 text-center">
                    <div
                      className="text-md font-semibold"
                      style={{ color: COLORS.deep }}
                    >
                      {t.name}
                    </div>
                    <div className="text-sm text-gray-500">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
    </div>
  );
}

/* --- small reusable components --- */

function StatCard({ title, value, subtitle }) {
  const localFade = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.48, ease: "easeOut" } },
  };
  return (
    <motion.div
      variants={localFade}
      className="bg-white rounded-2xl p-5 shadow-sm ring-1 ring-gray-50 transition-shadow hover:shadow-md"
    >
      <div className="text-sm text-gray-500">{title}</div>
      <div className="mt-2 text-2xl font-bold" style={{ color: COLORS.deep }}>
        {value}
      </div>
      <div className="mt-1 text-xs text-gray-400">{subtitle}</div>
    </motion.div>
  );
}

function DetailRow({ label, children }) {
  return (
    <div
      className="p-4 border-l-4 rounded shadow-sm"
      style={{ borderColor: COLORS.accent, background: "#f8fffb" }}
    >
      <div className="text-sm font-bold" style={{ color: COLORS.deep }}>
        {label}
      </div>
      <div className="text-sm text-gray-700 mt-1">{children}</div>
    </div>
  );
}

function SmallCard({ title, children }) {
  return (
    <div
      className="p-4 border-l-4 rounded shadow-md"
      style={{ borderColor: COLORS.warm, backgroundColor: "#fffbeb" }}
    >
      <h4 className="font-extrabold" style={{ color: COLORS.deep }}>
        {title}
      </h4>
      <p className="text-sm text-gray-700 mt-1">{children}</p>
    </div>
  );
}

function ServiceDetailCard({ title, desc }) {
  const localFade = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.52, ease: "easeOut" } },
  };
  return (
    <motion.article
      variants={localFade}
      whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(22,50,74,0.06)" }}
      className="bg-white rounded-2xl p-6 focus:outline-none focus:ring-4 focus:ring-[rgba(47,182,214,0.06)] ring-1 ring-gray-100 shadow-md transition-all cursor-pointer"
    >
      <div className="flex items-start gap-4">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: "#f1fbff" }}
        >
          <ShieldCheck
            size={20}
            strokeWidth={1.6}
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
