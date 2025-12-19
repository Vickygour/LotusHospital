// src/Components/facilities/Physiotherapy.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import doctorImg from "../../assets/doctorImage.jpg";
import patientImg from "../../assets/patient.jpeg";
import { Phone } from "lucide-react";
// Banner (reuse existing banner asset)
import physioBanner from "../../assets/BannerGyno.jpg";
import icon1 from "../../assets/physiotherapy/AnetnalCare.svg";
import icon2 from "../../assets/physiotherapy/Cardiac.svg";
import icon3 from "../../assets/physiotherapy/HomeCare.svg";
import icon4 from "../../assets/physiotherapy/neuro.svg";
import icon5 from "../../assets/physiotherapy/Paeditric.svg";
import icon6 from "../../assets/physiotherapy/PerintalCare.svg";
import icon7 from "../../assets/physiotherapy/Physiotharpy.svg";
import icon8 from "../../assets/physiotherapy/PostSurgical.svg";
import icon9 from "../../assets/physiotherapy/Rehabilition.svg";
import icon10 from "../../assets/physiotherapy/TraumaCare.svg";

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

const DEFAULT_ICON = icon7;

const SERVICES = [
  {
    id: 1,
    img: icon7,
    title: "Pain Management & Manual Therapy",
    desc: "Evidence-based manual therapy, soft tissue techniques and individualized pain relief plans for acute and chronic musculoskeletal pain.",
  },
  {
    id: 2,
    img: icon4,
    title: "Neuro Rehabilitation",
    desc: "Comprehensive rehabilitation for stroke, spinal cord injury, Parkinson’s disease and other neurological conditions to restore function and independence.",
  },
  {
    id: 3,
    img: icon10,
    title: "Orthopedic & Sports Rehabilitation",
    desc: "Post-injury and post-operative rehab for athletes and orthopedic patients — strength, mobility and return-to-sport protocols.",
  },
  {
    id: 4,
    img: icon8,
    title: "Post-Surgical Rehabilitation",
    desc: "Accelerated recovery programs after joint replacement, ligament repair and other surgeries, focused on safe, structured progression.",
  },
  {
    id: 5,
    img: icon5,
    title: "Pediatric Physiotherapy",
    desc: "Gentle, play-based therapy for developmental delays, cerebral palsy, torticollis, and growth-related movement disorders.",
  },
  {
    id: 6,
    img: icon2,
    title: "Cardiac & Pulmonary Rehab",
    desc: "Supervised exercise, education and lifestyle support for patients recovering from cardiac events or managing chronic lung disease.",
  },
  {
    id: 7,
    img: icon3,
    title: "Home Care Physiotherapy",
    desc: "Skilled therapists visit your home for assessment and treatment when clinic visits are difficult or for post-discharge continuity of care.",
  },
  {
    id: 8,
    img: icon9,
    title: "Geriatric & Balance Training",
    desc: "Fall prevention, strength & balance programs tailored to older adults to maintain independence and reduce injury risk.",
  },
  {
    id: 9,
    img: icon6,
    title: "Women’s Health & Pelvic Floor",
    desc: "Pelvic floor rehabilitation, antenatal and postnatal care for incontinence, prolapse, and post-partum recovery.",
  },
  {
    id: 10,
    img: icon1,
    title: "Trauma & Fracture Rehabilitation",
    desc: "Early guided rehab after fractures and trauma to restore range of motion, strength and safe function.",
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

export default function Physiotherapy() {
  const patientsServed = useCountUp(12000, 900);
  const therapySessions = useCountUp(54000, 900);
  const therapists = useCountUp(18, 900);

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
      name: "Mr. Akash Sharma",
      role: "Senior Physiotherapist - Musculoskeletal",
      img: doctorImg,
    },
    {
      name: "Ms. Neha Kapoor",
      role: "Neuro Rehabilitation Specialist",
      img: doctorImg,
    },
    { name: "Mr. Rohit Verma", role: "Sports Physiotherapist", img: doctorImg },
    {
      name: "Ms. Sanya Rao",
      role: "Pediatric Physiotherapist",
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
            src={physioBanner}
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
                  Physiotherapy & Rehabilitation
                </h1>
                <p className="mt-2 sm:mt-3 text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                  Personalized rehabilitation care to restore movement, reduce
                  pain and improve quality of life — from acute injury to
                  long-term conditions. Our multidisciplinary team combines
                  hands-on treatment, modern modalities and exercise
                  prescription to get you moving again.
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
              Our Physiotherapy & Rehabilitation unit provides evidence-based
              services across musculoskeletal, neurological, cardiopulmonary and
              pediatric domains. We focus on functional outcomes and patient
              education — designing home programs and supervised sessions to
              ensure sustainable recovery.
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
                <div className="text-sm text-gray-500">Patients Served</div>
                <div
                  className="mt-2 text-2xl font-bold"
                  style={{ color: COLORS.deep }}
                >
                  {patientsServed}+
                </div>
                <div className="mt-1 text-xs text-gray-400">
                  Successful rehabilitations
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-2xl p-5 shadow-sm ring-1 ring-gray-50"
              >
                <div className="text-sm text-gray-500">Therapy Sessions</div>
                <div
                  className="mt-2 text-2xl font-bold"
                  style={{ color: COLORS.deep }}
                >
                  {therapySessions}+
                </div>
                <div className="mt-1 text-xs text-gray-400">
                  Guided sessions delivered
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="bg-white rounded-2xl p-5 shadow-sm ring-1 ring-gray-50"
              >
                <div className="text-sm text-gray-500">
                  Specialist Therapists
                </div>
                <div
                  className="mt-2 text-2xl font-bold"
                  style={{ color: COLORS.deep }}
                >
                  {therapists}+
                </div>
                <div className="mt-1 text-xs text-gray-400">
                  Experienced multidisciplinary team
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
                What to expect on your first visit
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>
                  <strong>Thorough assessment:</strong> Detailed movement, pain
                  and function assessment to set clear goals.
                </li>
                <li>
                  <strong>Individualised plan:</strong> Hands-on therapy,
                  exercises and self-management strategies tailored to your
                  daily life.
                </li>
                <li>
                  <strong>Progress tracking:</strong> Regular reviews and
                  objective measures to monitor recovery.
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
                    011-49785874 (Landline)
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
                  Book Appointment
                </a>
              </div>

              <div className="mt-4 text-xs text-gray-500">
                Home visits | Insurance support | Post-op rehabilitation
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
            title="Individualised Exercise Programs"
            desc="Exercise prescription adapted to your condition and lifestyle to rebuild strength, mobility and endurance."
          />
          <ServiceCard
            title="Neuromuscular Re-education"
            desc="Targeted interventions to retrain movement patterns after neurological injury or surgery."
          />
          <ServiceCard
            title="Vestibular & Balance Therapy"
            desc="Assessment and treatment for dizziness, vertigo and balance disorders using proven protocols."
          />
          <ServiceCard
            title="Return-to-Work & Sport Clearance"
            desc="Functional testing and graded return plans to reduce re-injury risk and optimise performance."
          />
          <ServiceCard
            title="Home Visit Therapy"
            desc="Convenient, evidence-based treatment delivered at home for early supported discharge and continuity of care."
          />
          <ServiceCard
            title="Pain Education & Self-Management"
            desc="Empowering patients with knowledge and strategies to manage chronic pain and improve daily function."
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
