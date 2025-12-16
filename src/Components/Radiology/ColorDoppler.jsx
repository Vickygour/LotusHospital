// src/Components/facilities/ColorDopplerServices.jsx
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Phone, Droplet } from "lucide-react";
import { FaHeartbeat, FaSyringe, FaWalking, FaBaby } from "react-icons/fa";

// IMPORT IMAGES (use real files inside src/assets)
import dopplerBanner from '../../assets/ColorBanner.jpg';
import dopplerMachine from "../../assets/color1.jpg";
import dopplerReadout from "../../assets/color2.jpg";
import patientImg from "../../assets/doppler3.jpg";

const COLORS = {
  deep: "#0a566a",
  accent: "#1aa3a3",
  warm: "#ff914d",
  muted: "#6b7280",
};

const Pill = ({ children }) => (
  <span
    className="inline-block px-3 py-1 rounded-full text-xs font-medium"
    style={{ background: '#eefafa', color: COLORS.accent }}
  >
    {children}
  </span>
);

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
    icon: <FaHeartbeat />,
    title: "Cardiac Doppler (Echo)",
    desc: "Heart valve function and blood flow assessment for identifying structural and functional issues.",
  },
  {
    id: 2,
    icon: <FaSyringe />,
    title: "Carotid Doppler",
    desc: "Screening for blockages (stenosis) and blood flow issues in the neck arteries (stroke risk).",
  },
  {
    id: 3,
    icon: <FaWalking />,
    title: "Peripheral Arterial/Venous",
    desc: "Diagnosis of DVT (clots), varicose veins, and arterial blockages in the arms and legs.",
  },
  {
    id: 4,
    icon: <FaBaby />,
    title: "Obstetric Doppler (Fetal)",
    desc: "Monitoring blood flow to the placenta and fetus to assess fetal well-being and growth restriction.",
  },
];

const CONTACT = {
  landline: "011-49785874",
  mobile: "9210399470",
};

export default function ColorDopplerServices() {
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
            src={dopplerBanner}
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
                  Color Doppler Ultrasound Services
                </h1>

                <p className="mt-3 text-gray-700 text-sm md:text-base">
                  Non-invasive vascular imaging to assess blood flow velocity
                  and direction in arteries and veins, diagnosing clots,
                  blockages, and circulation disorders in real-time.
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
                    <Phone className="text-[#2FA1A5] w-4 h-4 sm:w-5 sm:h-5" />{' '}
                    9210399470
                  </a>
                </div>
                <p className="mt-2 sm:mt-3 text-gray-700 text-xs sm:text-sm leading-relaxed">
                  <span
                    className="font-semibold"
                    style={{ color: COLORS.deep }}
                  >
                    Location:
                  </span>{' '}
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
              Color Doppler Ultrasound combines traditional ultrasound's
              anatomical imaging with the Doppler Effect to visualize{' '}
              <strong>blood flow</strong> in real-time. This non-invasive test
              is essential for diagnosing <strong>vascular disorders</strong>,
              assessing fetal circulation, and evaluating blood supply to major
              organs like the kidney and liver.
            </motion.p>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <StatCard
                title="Specialist Areas"
                value="Vascular, Cardiac, Obstetric"
                subtitle="Accurate diagnosis across critical areas"
              />
              <StatCard
                title="Technology"
                value="High-Res Systems"
                subtitle="Utilizing the latest Doppler equipment"
              />
              <StatCard
                title="Reporting By"
                value="Radiologist"
                subtitle="Reports interpreted by expert Radiologists"
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
                  Book Your Scan
                </a>
              </div>

              <div className="mt-4 text-xs text-gray-500 text-center">
                Pre-appointment necessary | Call for urgent services
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
                Benefits of Doppler
              </h4>
              <p className="text-xs text-gray-600 mt-2">
                Painless, safe, and radiation-free technique providing precise
                information about blood circulation dynamics.
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
                  src={dopplerMachine}
                  alt="Color Doppler Machine"
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3
                  className="text-2xl font-bold"
                  style={{ color: COLORS.deep }}
                >
                  How Doppler Technology Works
                </h3>

                <p className="mt-4 text-gray-700 leading-relaxed">
                  Color Doppler is an advanced non-invasive imaging method. It
                  works by sending high-frequency sound waves (ultrasound) into
                  the body. When these waves hit moving red blood cells, they
                  change pitch (the <strong>Doppler Effect</strong>). The
                  machine interprets this pitch change, coding the direction and
                  speed of the flow with <strong>colors</strong> (typically red
                  for flow towards the probe, blue for flow away).
                </p>

                <div className="mt-6 grid grid-cols-1 gap-4">
                  <DetailRow label="When is Doppler recommended?">
                    For unexplained swelling, limb pain, evaluation of varicose
                    veins, checking for Deep Vein Thrombosis (DVT), assessing
                    carotid artery stenosis, or monitoring fetal circulation
                    during pregnancy.
                  </DetailRow>

                  <DetailRow label="How to prepare">
                    Fasting (NPO) for 6-8 hours may be required for abdominal
                    Dopplers (e.g., Liver, Kidney). Wear loose clothing. Follow
                    specific instructions provided at the time of booking.
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
                  Our Specialized Doppler Services
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
                    className="group bg-[#eef8fb] p-6 rounded-2xl text-left flex flex-col items-center gap-4 hover:-translate-y-2 transition-transform shadow-md focus:outline-none focus:ring-4 focus:ring-[rgba(31,156,156,0.08)] h-full"
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

        {/* Knowledge block with readout */}
        <section className="max-w-7xl mx-auto mt-16 py-10 bg-white shadow-2xl rounded-2xl ring-1 ring-gray-100 p-6 md:p-10">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
            className="text-center text-3xl font-extrabold mb-10"
            style={{ color: COLORS.deep }}
          >
            Interpreting the Doppler Image
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="lg:sticky lg:top-8">
              <img
                src={dopplerReadout}
                alt="Color Doppler readout"
                className="w-full rounded-xl shadow-2xl border-4 border-gray-100"
              />
              <p className="text-xs text-gray-600 mt-3 text-center">
                Color Doppler images map blood flow direction and velocity using
                a color scale overlay.
              </p>
            </div>

            <div className="space-y-6">
              <SmallCard title="Red Color (Flow Towards)">
                Indicates blood flow moving <strong>towards</strong> the
                ultrasound transducer (probe).
              </SmallCard>
              <SmallCard title="Blue Color (Flow Away)">
                Indicates blood flow moving <strong>away</strong> from the
                ultrasound transducer (probe).
              </SmallCard>
              <SmallCard title="Brighter Shades">
                The intensity (brightness) indicates blood velocity. Brighter =
                faster.
              </SmallCard>
              <SmallCard title="Green/Mixed Color">
                Often indicates <strong>turbulent</strong> flow — possible
                stenosis / obstruction.
              </SmallCard>
              <SmallCard title="Grayscale/Black">
                Shows static anatomical structures where no significant flow
                exists.
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
            title="Deep Vein Thrombosis (DVT) Identification"
            desc="Precise detection of blood clots in the deep veins of the limbs, crucial for preventing complications."
          />
          <ServiceDetailCard
            title="Renal (Kidney) Artery Evaluation"
            desc="Assessment of blood supply to the kidneys to diagnose causes of secondary hypertension or renal failure."
          />
          <ServiceDetailCard
            title="Tumour Vascularity Mapping"
            desc="Mapping blood vessels around tumours, crucial for biopsy planning and determining malignancy risk."
          />
          <ServiceDetailCard
            title="Post-Surgical Monitoring"
            desc="Monitoring blood flow integrity following vascular surgery, stenting, or graft placements."
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
            Our Specialist Radiologists
          </motion.h3>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          >
            {[
              { name: 'Dr. Arun Tyagi', role: 'Senior Radiologist' },
              { name: 'Dr. Priya Sharma', role: 'Consultant Radiologist' },
              { name: 'Dr. Vikas Jain', role: 'Vascular Sonographer' },
              { name: 'Ms. Neha Singh', role: 'Technician (Sonography)' },
            ].map((t, i) => (
              <motion.div variants={fadeInUp} key={i}>
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-100 hover:shadow-xl transition-shadow">
                  <img
                    src={patientImg}
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
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white rounded-2xl p-5 shadow-sm ring-1 ring-gray-50 transition-shadow hover:shadow-md"
    >
      <div className="text-sm text-gray-500">{title}</div>
      <div className="mt-2 text-lg font-bold" style={{ color: COLORS.deep }}>
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
      style={{ borderColor: COLORS.accent, background: "#FAFFFE" }}
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
  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(10,86,106,0.08)" }}
      className="bg-white rounded-2xl p-6 focus:outline-none focus:ring-4 focus:ring-[rgba(31,156,156,0.06)] ring-1 ring-gray-100 shadow-md transition-all cursor-pointer"
    >
      <div className="flex items-start gap-4">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: "#f7fdfe" }}
        >
          <Droplet size={24} strokeWidth={1.8} className="text-[#1f9c9c]" />
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
