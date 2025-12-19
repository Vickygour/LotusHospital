// src/Components/facilities/Echocardiography.jsx
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Phone } from "lucide-react";
import { FaHeart, FaStethoscope, FaUserMd, FaWaveSquare } from "react-icons/fa";

// Images - replace these placeholders with your real assets in src/assets
import echoBanner from "../../assets/Echo1.jpg"; // hero banner for echo
import heartDiagram from "../../assets/Echo2.jpg"; // anatomy diagram
import echoSample from "../../assets/Echo3.jpg"; // sample echocardiogram image
import cardiologistImg from "../../assets/img2.png"; // doctor photo
const COLORS = {
  deep: "#0b5560",
  accent: "#19a6a6",
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

const Pill = ({ children }) => (
  <span
    className="inline-block px-3 py-1 rounded-full text-xs font-medium"
    style={{ background: "#eefafa", color: COLORS.accent }}
  >
    {children}
  </span>
);

const SERVICES = [
  {
    id: 1,
    icon: <FaHeart />,
    title: "2D Echocardiography",
    desc: "Real-time structural imaging of heart chambers, valves and wall motion.",
  },
  {
    id: 2,
    icon: <FaWaveSquare />,
    title: "Doppler & Color Flow",
    desc: "Assess blood flow across valves and measure gradients/velocities.",
  },
  {
    id: 3,
    icon: <FaStethoscope />,
    title: "Stress Echocardiography",
    desc: "Functional assessment under exercise or pharmacological stress to detect ischemia.",
  },
  {
    id: 4,
    icon: <FaUserMd />,
    title: "Transesophageal Echo (TEE)",
    desc: "High-resolution imaging via esophageal probe for detailed valve and atrial assessment.",
  },
];

const CONTACT = {
  landline: "011-49785874",
  mobile: "9210399470",
};

export default function Echocardiography() {
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
            src={echoBanner}
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
                  Echocardiography Services
                </h1>

                <p className="mt-3 text-gray-700 text-sm md:text-base">
                  Comprehensive echocardiography — transthoracic,
                  transesophageal, Doppler and stress echo — performed by
                  experienced sonographers and reported by cardiologists.
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
              Echocardiography is a safe ultrasound-based examination that
              visualizes the heart’s structure and function. It helps diagnose
              heart failure, valve disease, congenital heart defects,
              cardiomyopathies and guides therapeutic decisions.
            </motion.p>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <StatCard
                title="Modalities"
                value="2D, Doppler, TEE"
                subtitle="Comprehensive cardiac views"
              />
              <StatCard
                title="Reporting"
                value="Cardiologist"
                subtitle="Expert interpretation & recommendations"
              />
              <StatCard
                title="Turnaround"
                value="Same day"
                subtitle="Immediate review for most studies"
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
                    24 hours available
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <a
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-3 px-4 py-3 rounded-lg text-white font-medium transition-colors hover:bg-[#138b87]"
                  style={{ background: COLORS.accent }}
                >
                  Book Echo / Consult
                </a>
              </div>

              <div className="mt-4 text-xs text-gray-500 text-center">
                Bring prior cardiac reports / ECG if available.
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
                Why choose our Cardiac Lab
              </h4>
              <p className="text-xs text-gray-600 mt-2">
                Experienced cardiologists, latest echo machines (Doppler, 3D &
                TEE capability) and rapid report turnaround.
              </p>
              <a
                href="https://maps.app.goo.gl/h7a2B8ipfTtkJbhV6"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm text-[#2448a5] hover:underline"
              >
                View on map
              </a>
            </motion.div>
          </motion.aside>
        </motion.section>

        {/* Machine & content (kept same layout as ultrasound) */}
        <section className="mt-16 w-full">
          <div className="max-w-7xl mx-auto py-8 bg-white rounded-2xl shadow-xl ring-1 ring-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start p-6 md:p-10">
              <motion.div
                variants={fadeInUp}
                className="rounded-xl overflow-hidden shadow-2xl border-4 border-white"
              >
                <img
                  src={heartDiagram}
                  alt="Heart anatomy / echo machine"
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3
                  className="text-2xl font-bold"
                  style={{ color: COLORS.deep }}
                >
                  Echocardiography: Principles & Uses
                </h3>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  Echocardiography uses ultrasound to visualise heart chambers,
                  valves and blood flow. Doppler techniques allow quantitative
                  measurement of flow velocity and pressure gradients. TEE
                  provides higher-resolution images for selected cases.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-4">
                  <DetailRow label="When is Echo recommended?">
                    Shortness of breath, chest pain, murmurs, suspected heart
                    failure, valve disease, syncope, or pre-op assessment.
                  </DetailRow>

                  <DetailRow label="How to prepare">
                    Usually no special preparation for transthoracic echo. For
                    stress echo or TEE there are specific instructions — you
                    will be informed at booking.
                  </DetailRow>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services grid (same design) */}
        <section className="mt-16 w-full" id="services">
          <div className="w-full bg-white rounded-2xl shadow-xl ring-1 ring-gray-100">
            <div className="max-w-7xl mx-auto p-6 md:p-10">
              <div className="flex items-center justify-between mb-8">
                <h3
                  className="text-2xl font-bold"
                  style={{ color: COLORS.deep }}
                >
                  Our Echocardiography Services
                </h3>
                <div
                  className="hidden md:block w-24 h-1 rounded-2xl"
                  style={{ background: COLORS.warm }}
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {SERVICES.map((s) => (
                  <motion.button
                    key={s.id}
                    variants={fadeInUp}
                    className="group bg-[#eef8f8] p-6 rounded-2xl text-left flex flex-col items-center gap-4 hover:-translate-y-2 transition-transform shadow-md focus:outline-none focus:ring-4 focus:ring-[rgba(25,166,166,0.08)] h-full"
                    type="button"
                  >
                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-md ring-1 ring-gray-100 p-3 shrink-0">
                      <div className="text-3xl" style={{ color: COLORS.deep }}>
                        {s.icon}
                      </div>
                    </div>

                    <div className="flex flex-col items-center flex-grow">
                      <div className="text-center text-sm text-[#274c56] leading-tight font-extrabold">
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

        {/* Knowledge block - sample echo */}
        <section className="max-w-7xl mx-auto mt-16 py-10 bg-white shadow-2xl rounded-2xl ring-1 ring-gray-100 p-6 md:p-10">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            className="text-center text-3xl font-extrabold mb-10"
            style={{ color: COLORS.deep }}
          >
            Reading Echocardiogram Findings
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="lg:sticky lg:top-8">
              <img
                src={echoSample}
                alt="Echocardiogram sample"
                className="w-full rounded-xl shadow-2xl border-4 border-gray-100"
              />
              <p className="text-xs text-gray-600 mt-3 text-center">
                Sample echo image with color Doppler flow mapping.
              </p>
            </div>

            <div className="space-y-6">
              <SmallCard title="Ejection Fraction (EF)">
                Percentage of blood pumped out of the left ventricle — key
                marker of systolic function.
              </SmallCard>
              <SmallCard title="Wall Motion">
                Regional wall motion abnormalities suggest prior or ongoing
                ischemia.
              </SmallCard>
              <SmallCard title="Valve Assessment">
                Regurgitation or stenosis is graded and reported with flow
                velocities.
              </SmallCard>
              <SmallCard title="Pressures & Gradients">
                Doppler-derived gradients help decide severity and management
                planning.
              </SmallCard>
            </div>
          </div>
        </section>

        {/* Sample details & specialists */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <ServiceDetailCard
            title="Stress Echocardiography"
            desc="Exercise or pharmacologic stress test with echo to detect inducible ischemia."
          />
          <ServiceDetailCard
            title="TEE & Interventional Support"
            desc="Transesophageal echo for higher-resolution imaging and intra-procedural guidance."
          />
          <ServiceDetailCard
            title="Pediatric & Congenital Echo"
            desc="Specialised assessment for congenital heart disease and pediatric cardiology."
          />
          <ServiceDetailCard
            title="Follow-up & Monitoring"
            desc="Serial studies for heart failure, valve disease, postoperative follow-up and device checks."
          />
        </motion.div>

        <section className="mt-16">
          <motion.h3
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="text-2xl font-bold mb-6"
            style={{ color: COLORS.deep }}
          >
            Our Cardiac Team
          </motion.h3>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          >
            {[
              { name: "Dr. Sameer Gupta", role: "Interventional Cardiologist" },
              { name: "Dr. Nidhi Rao", role: "Non-Invasive Cardiologist" },
              { name: "Mr. Amit Verma", role: "Senior Sonographer" },
              { name: "Ms. Anu Verma", role: "Echo Technician" },
            ].map((t, i) => (
              <motion.div variants={fadeInUp} key={i}>
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-100 hover:shadow-xl transition-shadow">
                  <img
                    src={cardiologistImg}
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
      whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(11,85,96,0.06)" }}
      className="bg-white rounded-2xl p-6 focus:outline-none focus:ring-4 focus:ring-[rgba(25,166,166,0.06)] ring-1 ring-gray-100 shadow-md transition-all cursor-pointer"
    >
      <div className="flex items-start gap-4">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: "#f7fdfe" }}
        >
          <FaHeart size={18} style={{ color: COLORS.accent }} />
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
