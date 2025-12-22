// src/Components/facilities/PathLabServices.jsx
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Phone, Microscope } from "lucide-react";
import { FaSyringe, FaFlask, FaVial, FaDna } from "react-icons/fa";

// Images (replace placeholders with real Path Lab images inside src/assets)
import labBanner from "../../assets/PathBanner.jpg";
import labMachine from "../../assets/Pathlab1.jpg";
import reportReadout from "../../assets/Pathlab2.jpg";
import patientImg from "../../assets/Vector.jpg";

const COLORS = {
  deep: "#0a566a",
  accent: "#1aa3a3",
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
    icon: <FaSyringe />,
    title: "Routine Blood Tests (CBC)",
    desc: "Complete Blood Count, Blood Sugar, and Liver/Kidney Function tests.",
  },
  {
    id: 2,
    icon: <FaFlask />,
    title: "Thyroid & Hormone Panels",
    desc: "Comprehensive testing for TSH, T3, T4, and other essential hormone levels.",
  },
  {
    id: 3,
    icon: <FaVial />,
    title: "Urine & Stool Analysis",
    desc: "Microscopic and chemical examination for infections and organ function.",
  },
  {
    id: 4,
    icon: <FaDna />,
    title: "Infectious Disease Markers",
    desc: "Screening for Dengue, Typhoid, Hepatitis, and other viral/bacterial infections.",
  },
];

const CONTACT = {
  landline: "011-49785874",
  mobile: "9210399470",
};

export default function PathLabServices() {
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

  const Pill = ({ children }) => (
    <span
      className="inline-block px-3 py-1 rounded-full text-xs font-medium"
      style={{ background: "#eefafa", color: COLORS.accent }}
    >
      {children}
    </span>
  );

  return (
    <div className="bg-gray-50 text-gray-900 pt-23 md:pt-40">
      <style>{`body.modal-open { overflow: hidden; } .service-modal-close { width:44px;height:44px;border-radius:9999px;background:${COLORS.warm};color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 20px rgba(0,0,0,0.12); }`}</style>

      {/* HERO */}
      <header className="relative">
        <div className="relative h-100 sm:h-64 md:h-72 lg:h-96 xl:h-[420px] overflow-hidden">
          <img
            src={labBanner}
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
                  Pathology Lab Testing Services
                </h1>

                <p className="mt-3 text-gray-700 text-sm md:text-base">
                  State-of-the-art laboratory for accurate analysis of blood,
                  urine, and other samples, with reports verified by experienced
                  pathologists.
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
              Our Pathology Lab utilizes{" "}
              <strong style={{ color: COLORS.accent }}>
                state-of-the-art automated analysers
              </strong>{" "}
              to provide <strong>accurate and reliable</strong> results quickly.
              We offer a full spectrum of{" "}
              <strong style={{ color: COLORS.accent }}>
                Blood, Urine, and Tissue tests
              </strong>
              , from routine health screening to complex disease diagnosis,
              crucial for guiding your treatment plan.
            </motion.p>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <StatCard
                title="Test Categories"
                value="Hematology, Biochemistry"
                subtitle="All major pathology tests available"
              />
              <StatCard
                title="Technology"
                value="Fully Automated"
                subtitle="Minimizing human error"
              />
              <StatCard
                title="Reporting By"
                value="MD Pathologist"
                subtitle="Reports verified by expert doctors"
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
                Benefits of Lab Testing
              </h4>
              <p className="text-xs text-gray-600 mt-2">
                Early diagnosis of diseases, monitoring treatment effectiveness,
                and comprehensive health assessment.
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

        {/* Enlarged Machine Diagram & Detailed Lab Content */}
        <section className="mt-16 w-full">
          <div className="max-w-7xl mx-auto py-8 bg-white rounded-2xl shadow-xl ring-1 ring-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start p-6 md:p-10">
              <motion.div
                variants={fadeInUp}
                className="rounded-xl overflow-hidden shadow-2xl border-4 border-white"
              >
                <img
                  src={labMachine}
                  alt="Automated Lab Machine"
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h3
                  className="text-2xl font-bold"
                  style={{ color: COLORS.deep }}
                >
                  Our Pathology Technology
                </h3>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  We utilize <strong>Fully Automated Analysers</strong> which
                  ensure speed and precision. Samples are processed following{" "}
                  <strong>Standardized Protocols</strong> to guarantee
                  <strong> reliable results</strong> every time. Our trained
                  technicians and doctors deeply examine the results.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-4">
                  <DetailRow label="When is testing recommended?">
                    Upon doctor's advice, to understand disease symptoms, or as
                    part of an Annual Health Checkup.
                  </DetailRow>

                  <DetailRow label="How to prepare">
                    Fasting for 8-12 hours may be required for certain tests
                    (e.g., Blood Sugar, Lipid Profile). Follow specific
                    instructions provided during booking.
                  </DetailRow>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services grid (circular icon tiles) */}
        <section className="mt-16 w-full" id="services">
          <div className="w-full bg-white rounded-2xl shadow-xl ring-1 ring-gray-100">
            <div className="max-w-7xl mx-auto p-6 md:p-10">
              <div className="flex items-center justify-between mb-8">
                <h3
                  className="text-2xl font-bold"
                  style={{ color: COLORS.deep }}
                >
                  Our Specialized Lab Services
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
                    className="group bg-[#f0fdf4] p-6 rounded-2xl text-left flex flex-col items-center gap-4 hover:-translate-y-2 transition-transform shadow-md focus:outline-none focus:ring-4 focus:ring-[rgba(76,175,123,0.1)] h-full"
                    aria-label={s.title}
                    type="button"
                  >
                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-md ring-1 ring-gray-100 p-3 shrink-0">
                      <div className="text-3xl" style={{ color: COLORS.deep }}>
                        {s.icon}
                      </div>
                    </div>

                    <div className="flex flex-col items-center flex-grow">
                      <div className="text-center text-sm text-[#2c5348] leading-tight font-extrabold">
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

        {/* Knowledge block with Report image */}
        <section className="max-w-7xl mx-auto mt-16 py-10 bg-white shadow-2xl rounded-2xl ring-1 ring-gray-100 p-6 md:p-10">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="text-center text-3xl font-extrabold mb-10"
            style={{ color: COLORS.deep }}
          >
            Understanding the Lab Report
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="lg:sticky lg:top-8">
              <img
                src={reportReadout}
                alt="Diagnostic Test Report Readout"
                className="w-full rounded-xl shadow-2xl border-4 border-gray-100"
              />
              <p className="text-xs text-gray-600 mt-3 text-center">
                Our reports clearly indicate all key markers and reference
                ranges for easy interpretation.
              </p>
            </div>

            <div className="space-y-6">
              <SmallCard title="Reference Range">
                This is the <strong>normal limit</strong> within which healthy
                individuals' results fall.
              </SmallCard>
              <SmallCard title="High Result">
                If your result is <strong>higher</strong> than the reference
                range, it may indicate a health issue (e.g., infection,
                inflammation).
              </SmallCard>
              <SmallCard title="Low Result">
                A result <strong>lower</strong> than the reference range may
                indicate a deficiency (e.g., Anemia, vitamin deficiency).
              </SmallCard>
              <SmallCard title="Home Collection Service">
                Our trained phlebotomists can visit your home to collect
                samples.
              </SmallCard>
              <SmallCard title="E-Report">
                A <strong>digital copy</strong> will be provided as soon as the
                report is ready.
              </SmallCard>
            </div>
          </div>
        </section>

        {/* Detail cards (applications) */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <ServiceDetailCard
            title="Chronic Disease Monitoring"
            desc="Regular and precise monitoring for conditions like Diabetes, kidney disease, and liver disorders."
          />
          <ServiceDetailCard
            title="Pre-Employment Health Checkup"
            desc="Comprehensive panels for required health and disease screening tests before employment."
          />
          <ServiceDetailCard
            title="Therapeutic Drug Monitoring"
            desc="Testing to ensure medications are working at the correct therapeutic levels in the body."
          />
          <ServiceDetailCard
            title="General Wellness Screening"
            desc="Annual checkup packages for assessing vitamins, minerals, and overall health parameters."
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
            Our Expert Pathologists
          </motion.h3>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          >
            {[
              { name: "Dr. Arun Tyagi", role: "Senior Pathologist" },
              { name: "Dr. Priya Sharma", role: "Consultant Pathologist" },
              { name: "Dr. Vikas Jain", role: "Clinical Biochemist" },
              {
                name: "Ms. Neha Singh",
                role: "Phlebotomist (Sample Collection)",
              },
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
      whileHover={{ y: -4, boxShadow: "0 10px 30px rgba(54,110,94,0.08)" }}
      className="bg-white rounded-2xl p-6 focus:outline-none focus:ring-4 focus:ring-[rgba(76,175,123,0.06)] ring-1 ring-gray-100 shadow-md transition-all cursor-pointer"
    >
      <div className="flex items-start gap-4">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: "#f7fdfe" }}
        >
          <Microscope
            size={20}
            strokeWidth={1.8}
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
