import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, HeartPulse, ShieldCheck, Phone, Mail } from "lucide-react";

// ---------------------------
// IMPORTS (Retained - 35 Logos)
// ---------------------------
import logo1 from "../../assets/CompanyLogo/companylogo1.jpg";
import logo2 from "../../assets/CompanyLogo/companylogo2.jpg";
import logo3 from "../../assets/CompanyLogo/companylogo3.jpg";
import logo4 from "../../assets/CompanyLogo/companylogo4.jpg";
import logo5 from "../../assets/CompanyLogo/companylogo5.jpg";
import logo6 from "../../assets/CompanyLogo/companylogo6.jpg";
import logo7 from "../../assets/CompanyLogo/companylogo7.jpg";
import logo8 from "../../assets/CompanyLogo/companylogo8.jpg";
import logo9 from "../../assets/CompanyLogo/companylogo9.jpg";
import logo10 from "../../assets/CompanyLogo/companylogo10.jpg";
import logo11 from "../../assets/CompanyLogo/companylogo11.jpg";
import logo12 from "../../assets/CompanyLogo/companylogo12.jpg";
import logo13 from "../../assets/CompanyLogo/companylogo13.jpg";
import logo14 from "../../assets/CompanyLogo/companylogo14.jpg";
import logo15 from "../../assets/CompanyLogo/companylogo15.jpg";
import logo16 from "../../assets/CompanyLogo/companylogo16.jpg";
import logo17 from "../../assets/CompanyLogo/companylogo17.jpg";
import logo18 from "../../assets/CompanyLogo/companylogo18.jpg";
import logo19 from "../../assets/CompanyLogo/companylogo19.jpg";
import logo20 from "../../assets/CompanyLogo/companylogo20.jpg";
import logo21 from "../../assets/CompanyLogo/companylogo21.jpg";
import logo22 from "../../assets/CompanyLogo/companylogo22.jpg";
import logo23 from "../../assets/CompanyLogo/companylogo23.jpg";
import logo24 from "../../assets/CompanyLogo/companylogo24.jpg";
import logo25 from "../../assets/CompanyLogo/companylogo25.jpg";
import logo26 from "../../assets/CompanyLogo/companylogo26.jpg";
import logo27 from "../../assets/CompanyLogo/companylogo27.jpg";
import logo28 from "../../assets/CompanyLogo/companylogo28.jpg";
import logo29 from "../../assets/CompanyLogo/companylogo29.jpg";
import logo30 from "../../assets/CompanyLogo/companylogo30.jpg";
import logo31 from "../../assets/CompanyLogo/companylogo31.jpg";
import logo32 from "../../assets/CompanyLogo/companylogo32.jpg";
import logo33 from "../../assets/CompanyLogo/companylogo33.jpg";
import logo34 from "../../assets/CompanyLogo/companylogo34.jpg";
import logo35 from "../../assets/CompanyLogo/companylogo35.jpg";

// ---------------------------
// Config: color tokens
// ---------------------------
const TOKENS = {
  deep: "#0f3b5a",
  accent: "#1f9c9c",
  warm: "#ff914d",
  muted: "#6b7280",
};

// ---------------------------
// Utility: create logos array (UPDATED with actual names)
// ---------------------------
const createLogoArray = () =>
  [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14,
    logo15,
    logo16,
    logo17,
    logo18,
    logo19,
    logo20,
    logo21,
    logo22,
    logo23,
    logo24,
    logo25,
    logo26,
    logo27,
    logo28,
    logo29,
    logo30,
    logo31,
    logo32,
    logo33,
    logo34,
    logo35,
  ].map((src, i) => {
    let partnerName = `TPA Partner ${i + 1}`;

    if (i === 0) partnerName = "Apollo Munich Health Insurance";
    else if (i === 1) partnerName = "ADITYA BIRLA GROUP";
    else if (i === 2) partnerName = "STAR Health Insurance";
    else if (i === 3) partnerName = "HDFC ERGO General Insurance";
    else if (i === 4) partnerName = "ICICI Lombard General Insurance";
    else if (i === 5) partnerName = "ICICI Prudential Life Insurance";
    else if (i === 6) partnerName = "Bajaj Allianz Life Insurance";
    else if (i === 7) partnerName = "HERITAGE HEALTH Insurance";
    else if (i === 8) partnerName = "IFFCO-TOKIO General Insurance";
    else if (i === 9) partnerName = "Vipul MedCorp TPA Pvt. Ltd.";
    else if (i === 10) partnerName = "VIDAL HEALTH TPA";
    else if (i === 11) partnerName = "SBI General Insurance";
    else if (i === 12) partnerName = "RELIANCE Health Insurance";

    return {
      id: i + 1,
      src,
      name: `Partner ${i + 1}`,
      fullName: partnerName,
    };
  });

// ---------------------------
// Component: Logo Carousel (New Element) - COLORFUL VERSION
// ---------------------------
const LogoCarousel = ({ logos }) => {
  const duplicatedLogos = [...logos, ...logos];

  const marqueeVariants = {
    animate: {
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 45,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div
      className="relative overflow-hidden py-8 my-8"
      style={{
        borderTop: `1px solid ${TOKENS.muted}40`,
        borderBottom: `1px solid ${TOKENS.muted}40`,
      }}
    >
      <motion.div
        className="flex flex-row gap-8"
        variants={marqueeVariants}
        animate="animate"
        style={{ width: `${duplicatedLogos.length * (100 / logos.length)}%` }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center h-28 w-48"
          >
            <img
              src={logo.src}
              alt={logo.fullName || logo.name}
              className="object-contain max-h-full max-w-full opacity-100 brightness-110 hover:brightness-125 transition-all duration-300"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// ---------------------------
// Main Component
// ---------------------------
export default function TpaPartners() {
  const logos = useMemo(() => createLogoArray(), []);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = logos.filter(
    (l) =>
      l.fullName.toLowerCase().includes(query.trim().toLowerCase()) ||
      l.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  const displayLogos = filtered;

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-8 bg-white min-h-screen mt-38">
      <header className="w-full text-center py-12 rounded-3xl shadow-2xl mb-12 bg-gradient-to-r from-[#0f3b5a] to-[#1f9c9c]">
        <h1 className="text-5xl font-extrabold text-white flex justify-center items-center gap-4 mb-3">
          <HeartPulse size={48} className="text-[#ff914d]" />
          Lotus Hospital Burari
        </h1>
        <h2 className="text-2xl font-light text-white/90 mb-8">
          Your Trusted Cashless Healthcare Partner
        </h2>
        <div className="flex justify-center flex-wrap gap-8 text-base">
          <a
            href="tel:+919210399470"
            className="flex items-center gap-3 font-semibold text-white/90 hover:text-white transition"
          >
            <Phone size={20} className="text-[#ff914d]" />
            TPA Desk: +91-9210399470
          </a>
          <a
            href="mailto:sunilduttgaur80@gmail.com?subject=Billing%20Query&body=Hello%20Lotus%20Hospital,"
            className="flex items-center gap-3 font-semibold text-white/90 hover:text-white transition"
          >
            <Mail size={20} className="text-[#ff914d]" />
            sunilduttgaur80@gmail.com
          </a>
        </div>
      </header>

      <section
        className="mb-12 p-6 rounded-xl"
        style={{ border: `1px solid ${TOKENS.accent}40` }}
      >
        <h3
          className="text-2xl font-bold text-center mb-6"
          style={{ color: TOKENS.deep }}
        >
          Why Choose Lotus Hospital for Cashless Treatment?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-4 rounded-lg bg-gray-50">
            <ShieldCheck
              size={32}
              className="mx-auto mb-2"
              style={{ color: TOKENS.accent }}
            />
            <p className="font-semibold" style={{ color: TOKENS.deep }}>
              Verified Network
            </p>
            <p className="text-sm text-gray-600">
              35+ leading TPA and insurance companies are empanelled with us.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-gray-50">
            <Phone
              size={32}
              className="mx-auto mb-2"
              style={{ color: TOKENS.accent }}
            />
            <p className="font-semibold" style={{ color: TOKENS.deep }}>
              24/7 TPA Assistance
            </p>
            <p className="text-sm text-gray-600">
              Our dedicated team assists with pre-authorization and
              documentation.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-gray-50">
            <HeartPulse
              size={32}
              className="mx-auto mb-2"
              style={{ color: TOKENS.accent }}
            />
            <p className="font-semibold" style={{ color: TOKENS.deep }}>
              Seamless Process
            </p>
            <p className="text-sm text-gray-600">
              Focus on recovery while we manage the financial complexities.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h3
          className="text-3xl font-extrabold text-center mb-8 pb-3 border-b"
          style={{ color: TOKENS.deep, borderColor: TOKENS.accent }}
        >
          All Empanelled TPA & Insurance Partners
        </h3>

        <div className="mb-6 max-w-xl mx-auto">
          <label
            className="flex items-center gap-3 bg-white rounded-full shadow-md px-6 py-3 border transition-all duration-300"
            style={{ borderColor: query ? TOKENS.accent : TOKENS.muted + "40" }}
          >
            <Search size={18} style={{ color: TOKENS.accent }} />
            <input
              className="outline-none w-full text-base placeholder-gray-500"
              placeholder="Search by Partner Name (e.g., Star Health, HDFC, ICICI...)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search partners"
            />
            {query && (
              <motion.button
                onClick={() => setQuery("")}
                aria-label="clear"
                className="p-1 rounded-full hover:bg-gray-100"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <X size={16} style={{ color: TOKENS.muted }} />
              </motion.button>
            )}
          </label>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-5">
          <AnimatePresence mode="wait">
            {displayLogos.map((p) => (
              <motion.button
                key={p.id}
                onClick={() => setSelected(p)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 8px 15px -3px ${TOKENS.accent}60`,
                }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center p-3 rounded-xl shadow-lg bg-white h-36 border border-gray-100 transition-all cursor-pointer"
                aria-label={`Open details for ${p.fullName}`}
              >
                <img
                  src={p.src}
                  alt={p.fullName}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
                />
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div
            className="text-center py-10 text-xl font-medium"
            style={{ color: TOKENS.muted }}
          >
            <p>
              No partners found for "
              <span style={{ color: TOKENS.deep }}>{query}</span>".
            </p>
          </div>
        )}
      </section>

      <section>
        <h3
          className="text-xl font-semibold text-center mb-4"
          style={{ color: TOKENS.deep }}
        >
          In Network with India's Leading Insurers
        </h3>
        <LogoCarousel logos={logos} />
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            aria-modal="true"
            role="dialog"
          >
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setSelected(null)}
            />
            <motion.div
              initial={{ y: 20, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 10, opacity: 0 }}
              className="relative max-w-xl w-full bg-white rounded-2xl shadow-2xl p-6 z-10 border-t-4"
              style={{ borderColor: TOKENS.accent }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className="w-20 h-20 rounded-xl flex items-center justify-center overflow-hidden border p-1"
                    style={{ borderColor: TOKENS.muted }}
                  >
                    <img
                      src={selected.src}
                      alt={selected.fullName}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold"
                      style={{ color: TOKENS.deep }}
                    >
                      {selected.fullName}
                    </h3>
                    <p className="text-sm mt-1" style={{ color: TOKENS.muted }}>
                      Verified TPA / Insurance Partner ID: #{selected.id}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelected(null)}
                  aria-label="close"
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <X size={18} style={{ color: TOKENS.muted }} />
                </button>
              </div>

              <div className="mt-4 text-sm text-gray-700">
                <p>
                  This partner is part of our verified network. For{" "}
                  <strong>cashless claims</strong> or billing queries, please
                  contact the hospital TPA desk immediately for
                  pre-authorization assistance.
                </p>

                <div
                  className="mt-6 pt-4 border-t flex gap-3"
                  style={{ borderColor: TOKENS.muted + "40" }}
                >
                  <a
                    href={`tel:+919210399470`}
                    className="px-4 py-2 rounded-md font-semibold text-white transition hover:brightness-110"
                    style={{ backgroundColor: TOKENS.accent }}
                  >
                    Call TPA Desk
                  </a>
                  <a
                    href="mailto:sunilduttgaur80@gmail.com?subject=Billing%20Query&body=Hello%20Lotus%20Hospital,"
                    className="px-4 py-2 rounded-md border font-semibold transition hover:bg-gray-50"
                    style={{ color: TOKENS.deep, borderColor: TOKENS.muted }}
                  >
                    Email Billing
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer
        className="mt-12 p-6 rounded-xl shadow-xl flex flex-col sm:flex-row justify-between gap-4 items-center"
        style={{ backgroundColor: TOKENS.deep }}
      >
        <div className="text-lg text-white/90 font-medium">
          Need immediate cashless admission help?
        </div>
        <div className="flex gap-3">
          <a
            href="tel:+919210399470"
            className="px-4 py-2 rounded-full font-bold shadow transition hover:brightness-110"
            style={{ backgroundColor: TOKENS.warm, color: TOKENS.deep }}
          >
            Call TPA Desk 24/7
          </a>
        </div>
      </footer>
    </div>
  );
}
