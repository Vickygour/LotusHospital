import React, { useMemo } from "react";
import { motion } from "framer-motion";

import logo1 from "../assets/CompanyLogo/companylogo1.jpg";
import logo2 from "../assets/CompanyLogo/companylogo2.jpg";
import logo3 from "../assets/CompanyLogo/companylogo3.jpg";
import logo4 from "../assets/CompanyLogo/companylogo4.jpg";
import logo5 from "../assets/CompanyLogo/companylogo5.jpg";
import logo6 from "../assets/CompanyLogo/companylogo6.jpg";
import logo7 from "../assets/CompanyLogo/companylogo7.jpg";
import logo8 from "../assets/CompanyLogo/companylogo8.jpg";
import logo9 from "../assets/CompanyLogo/companylogo9.jpg";
import logo10 from "../assets/CompanyLogo/companylogo10.jpg";
import logo11 from "../assets/CompanyLogo/companylogo11.jpg";
import logo12 from "../assets/CompanyLogo/companylogo12.jpg";
import logo13 from "../assets/CompanyLogo/companylogo13.jpg";
import logo14 from "../assets/CompanyLogo/companylogo14.jpg";
import logo15 from "../assets/CompanyLogo/companylogo15.jpg";
import logo16 from "../assets/CompanyLogo/companylogo16.jpg";
import logo17 from "../assets/CompanyLogo/companylogo17.jpg";
import logo18 from "../assets/CompanyLogo/companylogo18.jpg";
import logo19 from "../assets/CompanyLogo/companylogo19.jpg";
import logo20 from "../assets/CompanyLogo/companylogo20.jpg";
import logo21 from "../assets/CompanyLogo/companylogo21.jpg";
import logo22 from "../assets/CompanyLogo/companylogo22.jpg";
import logo23 from "../assets/CompanyLogo/companylogo23.jpg";
import logo24 from "../assets/CompanyLogo/companylogo24.jpg";
import logo25 from "../assets/CompanyLogo/companylogo25.jpg";
import logo26 from "../assets/CompanyLogo/companylogo26.jpg";
import logo27 from "../assets/CompanyLogo/companylogo27.jpg";
import logo28 from "../assets/CompanyLogo/companylogo28.jpg";
import logo29 from "../assets/CompanyLogo/companylogo29.jpg";
import logo30 from "../assets/CompanyLogo/companylogo30.jpg";
import logo31 from "../assets/CompanyLogo/companylogo31.jpg";
import logo32 from "../assets/CompanyLogo/companylogo32.jpg";
import logo33 from "../assets/CompanyLogo/companylogo33.jpg";
import logo34 from "../assets/CompanyLogo/companylogo34.jpg";
import logo35 from "../assets/CompanyLogo/companylogo35.jpg";

const TOKENS = {
  muted: "#6b7280",
};

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
    else if (i === 1) partnerName = "Aditya Birla Health Insurance";
    else if (i === 2) partnerName = "Star Health Insurance";
    else if (i === 3) partnerName = "HDFC ERGO General Insurance";
    else if (i === 4) partnerName = "ICICI Lombard General Insurance";
    else if (i === 5) partnerName = "ICICI Prudential Life Insurance";
    else if (i === 6) partnerName = "Bajaj Allianz Life Insurance";
    else if (i === 7) partnerName = "Heritage Health Insurance";
    else if (i === 8) partnerName = "IFFCO Tokio General Insurance";
    else if (i === 9) partnerName = "Vipul MedCorp TPA Pvt. Ltd.";
    else if (i === 10) partnerName = "Vidal Health TPA";
    else if (i === 11) partnerName = "SBI General Insurance";
    else if (i === 12) partnerName = "Reliance Health Insurance";

    return {
      id: i + 1,
      src,
      fullName: partnerName,
    };
  });

const LogoCarousel = ({ logos }) => {
  const finalLogos = useMemo(
    () => (logos?.length ? logos : createLogoArray()),
    [logos]
  );

  const duplicatedLogos = [...finalLogos, ...finalLogos];

  return (
    <>
      {/* ✅ Updated Heading Styling */}
      <h3 className="text-2xl md:text-4xl mt:5 md:mt-10 font-bold text-[#283B6A] mb-8 text-center">
        Empanelled with India’s Leading Insurance & TPA Partners
      </h3>

      <div
        className="relative overflow-hidden py-8 my-8"
        style={{
          borderTop: `1px solid ${TOKENS.muted}40`,
          borderBottom: `1px solid ${TOKENS.muted}40`,
        }}
      >
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center h-28 w-48"
            >
              <img
                src={logo.src}
                alt={logo.fullName}
                className="object-contain max-h-full max-w-full brightness-110 hover:brightness-125 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default LogoCarousel;
