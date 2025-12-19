// src/Components/facilities/Gynecologist.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import doctorImg from "../../assets/doctorImage.jpg";
import patientImg from "../../assets/patient.jpeg";
import { Phone } from "lucide-react";
// Banner (reusing BannerGyno as urology banner asset)
import urologyBanner from "../../assets/BannerGyno.jpg";
import icon1 from "../../assets/Urdology/Andrology.svg";
import icon2 from "../../assets/Urdology/bladder.svg";
import icon3 from "../../assets/Urdology/femaleurological.svg";
import icon4 from "../../assets/Urdology/paedtric.svg";
import icon5 from "../../assets/Urdology/Reconstructive.svg";
import icon6 from "../../assets/Urdology/small.svg";
import icon7 from "../../assets/Urdology/surgical.svg";
import icon8 from "../../assets/Urdology/test.svg";

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

// Fallback icon (use one of the imported icons)
const DEFAULT_ICON = icon1;

const SERVICES = [
  {
    id: 1,
    img: icon3,
    title: "Female Urological Procedures",
    desc: "Comprehensive diagnosis and treatment for conditions unique to female urology, including urinary incontinence, pelvic organ prolapse, and recurrent UTIs.",
  },
  {
    id: 2,
    img: icon5,
    title: "Reconstructive Urology",
    desc: "Advanced surgical techniques to restore function and correct defects in the urinary tract, including urethral stricture, fistula repair, and bladder neck reconstruction.",
  },
  {
    id: 3,
    img: icon1,
    title: "Andrology Procedures",
    desc: "Specialized treatments for male reproductive health and sexual dysfunction, including male infertility, erectile dysfunction, and Peyronie's disease.",
  },
  {
    id: 4,
    img: icon4,
    title: "Paediatric Urology",
    desc: "Expert care for urological conditions affecting infants, children, and adolescents, such as congenital anomalies, undescended testes, and vesicoureteral reflux (VUR).",
  },
  {
    id: 5,
    img: icon8,
    title: "Male Sexual Health Services",
    desc: "Confidential and specialized care for issues related to male sexual health, focusing on function, performance, and overall well-being.",
  },
  {
    id: 6,
    img: icon6,
    title: "Transurethral Procedures",
    desc: "Minimally invasive endourological procedures performed through the urethra for treating prostate enlargement (TURP), bladder tumors, and other lower urinary tract conditions.",
  },
  {
    id: 7,
    img: icon7,
    title: "Surgical Interventions",
    desc: "A range of general and specialized urological surgeries, with a focus on minimally invasive and laparoscopic techniques for faster recovery.",
  },
  {
    id: 8,
    img: icon2,
    title: "Bladder and Kidney Stone Treatments",
    desc: "Advanced and comprehensive management for urinary stones, including ESWL (shockwave lithotripsy), Ureteroscopy, and PCNL (Percutaneous Nephrolithotomy).",
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

export default function Urological() {
  const lithotripsyCases = useCountUp(850, 900);
  const laparoscopicUro = useCountUp(490, 900);
  const uroSpecialists = useCountUp(8, 900);

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
      name: "Dr. Alok Verma",
      role: "Head - Urology & Andrology",
      img: doctorImg,
    },
    {
      name: "Dr. Sanjay Taneja",
      role: "Kidney Stone Specialist",
      img: doctorImg,
    },
    { name: "Dr. Meera Singh", role: "Female Urologist", img: doctorImg },
    { name: "Dr. Rohan Gupta", role: "Reconstructive Surgeon", img: doctorImg },
  ];

  return (
    <div className="bg-gray-50 text-gray-900 pt-23 md:pt-40">
      <style>{`body.modal-open { overflow: hidden; } .service-modal-close { width:44px;height:44px;border-radius:9999px;background:${COLORS.warm};color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 20px rgba(0,0,0,0.12); }`}</style>

      {/* HERO */}
      <header className="relative">
        <div className="relative h-100 sm:h-64 md:h-72 lg:h-96 xl:h-[420px] overflow-hidden">
          <img
            src={urologyBanner}
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
                  Urology, Andrology & Stone Centre
                </h1>
                <p className="mt-2 sm:mt-3 text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                  Advanced, comprehensive care for urinary, reproductive, and
                  stone diseases. We specialize in minimally invasive surgeries,
                  male sexual health, and pediatric urology, ensuring optimal
                  patient outcomes and quick recovery.
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
              Overview
            </h2>
            <motion.p
              variants={fadeInUp}
              className="mt-5 text-gray-700 leading-relaxed font-sans prose max-w-none"
            >
              The Urology Department is a Centre of Excellence dedicated to the
              diagnosis and treatment of conditions affecting the urinary tract
              in men and women, and the male reproductive system. We offer
              specialized care in <strong>Uro-oncology</strong>,{" "}
              <strong>Kidney Stone Management</strong> (using laser and
              lithotripsy), <strong>Andrology</strong>, and{" "}
              <strong>Reconstructive Urology</strong>. Our focus on{" "}
              <strong>Minimal Access Surgery (MAS)</strong> ensures faster
              recovery, less pain, and better cosmetic results for our patients.
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
                <div className="text-sm text-gray-500">
                  Stone Procedures / year
                </div>
                <div
                  className="mt-2 text-2xl font-bold"
                  style={{ color: COLORS.deep }}
                >
                  {lithotripsyCases}+
                </div>
                <div className="mt-1 text-xs text-gray-400">
                  Advanced, non-invasive treatment for kidney stones.
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-2xl p-5 shadow-sm ring-1 ring-gray-50"
              >
                <div className="text-sm text-gray-500">
                  Minimally Invasive Cases
                </div>
                <div
                  className="mt-2 text-2xl font-bold"
                  style={{ color: COLORS.deep }}
                >
                  {laparoscopicUro}+
                </div>
                <div className="mt-1 text-xs text-gray-400">
                  Laparoscopic and Endourological surgeries.
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-2xl p-5 shadow-sm ring-1 ring-gray-50"
              >
                <div className="text-sm text-gray-500">
                  Dedicated Urology Specialists
                </div>
                <div
                  className="mt-2 text-2xl font-bold"
                  style={{ color: COLORS.deep }}
                >
                  {uroSpecialists}
                </div>
                <div className="mt-1 text-xs text-gray-400">
                  Expert team covering all subspecialties.
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
                Quick Questions
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>
                  <strong>Urology Emergency service:</strong> Yes, 24/7 coverage
                  for renal colic, urinary retention, and trauma.
                </li>
                <li>
                  <strong>Cashless insurance:</strong> Accepted for eligible
                  providers.
                </li>
                <li>
                  <strong>Advanced Stone Treatment:</strong> Holmium Laser and
                  Ureteroscopy available.
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
                    011-49785874 (Landline)
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
                  Our Services
                </h3>
                <div className="hidden md:block w-24 h-1 bg-[#ff914d] rounded-2xl" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
            title="Uro-Oncology"
            desc="Specialized diagnosis and treatment for cancers of the prostate, kidney, bladder, and testes, focusing on minimal access surgical approaches."
          />
          <ServiceCard
            title="Minimally Invasive Surgery"
            desc="Utilizing laparoscopy and endoscopy for procedures like pyeloplasty, nephrectomy, and prostatectomy to ensure quicker recovery and minimal scarring."
          />
          <ServiceCard
            title="Prostate Health"
            desc="Comprehensive care for BPH (enlarged prostate) using modern treatments like TURP and laser surgery, as well as prostate cancer screening."
          />
          <ServiceCard
            title="Incontinence and Voiding Dysfunction"
            desc="Expert evaluation and tailored treatment plans for both male and female urinary incontinence and difficulty passing urine."
          />
          <ServiceCard
            title="Andrology and Male Fertility"
            desc="Dedicated services for male reproductive and sexual health issues, including treatment for infertility, ED, and low testosterone."
          />
          <ServiceCard
            title="Paediatric Urology"
            desc="Sensitive and expert care for children with complex urinary tract and reproductive organ issues."
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
