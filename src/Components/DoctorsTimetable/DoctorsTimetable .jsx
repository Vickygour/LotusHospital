import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TimeTable from "../DoctorsTimetable/TimeTableData";

const COLORS = {
  deep: "#283B6A",
  muted: "#6B7280",
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const DoctorsTimetable = () => {
  return (
    <>
      {/* ===== Banner + Breadcrumb ===== */}
      <section
        className="relative w-full h-[300px] bg-cover bg-center md:mt-38"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1920)",
        }}
      >
        <div className="absolute inset-0 bg-[#283B6A]/70" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 h-full flex flex-col items-center justify-center"
        >
          <h1 className="text-4xl font-extrabold text-white">
            DOCTORS TIMETABLE
          </h1>

          <div className="mt-4 text-white/90 text-sm">
            <Link to="/">Home</Link> › Doctors Timetable
          </div>
        </motion.div>
      </section>

      {/* ===== Welcome Section ===== */}
      <section className="w-full bg-white py-10 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight"
              style={{ color: COLORS.deep }}
            >
              Welcome to Lotus Multispeciality Hospital
            </h2>
            <p
              className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg leading-relaxed"
              style={{ color: COLORS.muted }}
            >
              Explore our doctors' availability and specialist schedules. We aim
              to make your appointment booking process simple, clear, and
              convenient for you and your family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== Timetable Component ===== */}
      <TimeTable />
    </>
  );
};

export default DoctorsTimetable;
