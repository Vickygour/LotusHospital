import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const COLORS = {
  deep: "#283B6A",
  muted: "#6B7280",
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const scheduleData = {
  monday: [
    {
      time: 'Tuesday 10:00-11:00 AM',
      specialty: 'DM  Cardiology ',
      doctor: 'Dr. Ankesh Aggarwal',
    },
    {
      time: 'Monday to Saturday 07:00-08:00 PM',
      specialty: 'MS Gynecology',
      doctor: 'Dr. Kiran',
    },

    {
      time: 'Monday to Saturday 10:00 AM-12:00 PM',
      specialty: 'MD Pediatrician',
      doctor: 'Dr. Kunal',
    },
    {
      time: 'Monday to Saturday On Appointment',
      specialty: 'MS Surgery',
      doctor: 'Dr. Sunil Jain',
    },
    {
      time: 'On Appointment',
      specialty: 'DNB Urology',
      doctor: 'Dr. Anil Aggarwal',
    },

    // ⭐ NEW ADDED DOCTORS
    {
      time: 'Monday to Saturday 2PM - 3PM',
      specialty: 'MD Medicine Specialist',
      doctor: 'Dr. Rohit Jain',
    },
    {
      time: 'Monday to Saturday 11:00 AM-01:00 PM',
      specialty: 'MD Skin Specialist',
      doctor: 'Dr. Bhawana Chaudhary',
    },
    {
      time: 'On Appointment',
      specialty: 'Plastic Surgeon',
      doctor: 'Dr. Bharat',
    },
    {
      time: 'On Appointment',
      specialty: 'MS Surgery',
      doctor: 'Dr. Sandeep Gupta',
    },
    {
      time: 'MOnday , Thursday 1PM - 2PM',
      specialty: 'DNB Ortho',
      doctor: 'Dr. Ajay Mittal',
    },
    {
      time: 'Wednesday,Saturday 10:30 AM-11:30 AM',
      specialty: 'MS Ortho',
      doctor: 'Dr. Sameer Kad',
    },
    {
      time: 'Wednesday,Saturday 07:00 PM-08:00 PM',
      specialty: 'MD Psychiatry',
      doctor: 'Dr. J Kumar',
    },
    {
      time: 'On Appointment',
      specialty: 'MD Gastro',
      doctor: 'Dr. Anil Sharma',
    },
    {
      time: 'On Appointment',
      specialty: 'MD Anesthisia',
      doctor: 'Dr. Pankaj Sharma',
    },
    {
      time: 'On Appointment',
      specialty: 'MD Anesthisia',
      doctor: 'Dr. Gagan Dabas',
    },
    {
      time: 'On Appointment',
      specialty: 'MD Anesthisia',
      doctor: 'Dr. Amit Sahu',
    },
  ],



 


};

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const DoctorsTimetable = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");

  const allSpecialties = Array.from(
    new Set(
      Object.values(scheduleData)
        .flat()
        .map((item) => item.specialty)
        .filter(Boolean)
    )
  );

  return (
    <>
      {/* ⭐ HERO SECTION ⭐ */}
      <section
        className="relative w-full h-[340px] md:h-[420px] bg-cover bg-center md:mt-30"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1920&h=900&fit=crop)',
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: `${COLORS.deep}B3` }}
        ></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 h-full flex flex-col items-center justify-center px-4"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            DOCTORS TIMETABLE
          </h1>

          <div className="mt-6 flex items-center gap-2 text-white/90 text-sm md:text-base">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>›</span>
            <span className="text-white font-medium">Doctors Timetable</span>
          </div>
        </motion.div>
      </section>

      {/* ⭐ WELCOME SECTION ⭐ */}
      <section className="w-full bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <h2
              className="text-3xl md:text-4xl font-bold tracking-tight"
              style={{ color: COLORS.deep }}
            >
              Welcome to Lotus Multispeciality Hospital
            </h2>
            <p
              className="mt-4 text-base md:text-lg leading-relaxed"
              style={{ color: COLORS.muted }}
            >
              Explore our doctors’ availability and specialist schedules. We aim
              to make your appointment booking process simple, clear, and
              convenient for you and your family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ⭐ TIMETABLE SYSTEM ⭐ */}
      <div className="bg-gray-50 min-h-screen w-full p-4 md:p-10">
        {/* Filter */}
        <div className="max-w-md mx-auto mb-10">
          <select
            value={selectedSpecialty}
            onChange={(e) => setSelectedSpecialty(e.target.value)}
            className="w-full p-3 rounded-lg border-2 border-gray-300 focus:border-[#13C5DD] focus:ring-2 focus:ring-[#13C5DD] font-semibold"
          >
            <option value="all">All Specialties</option>
            {allSpecialties.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Schedule By Day */}
        <div className="max-w-5xl mx-auto space-y-10">
          {days.map((day) => {
            const dayData = scheduleData[day.toLowerCase()]?.filter(
              (item) =>
                selectedSpecialty === 'all' ||
                item.specialty === selectedSpecialty,
            );

            if (!dayData || dayData.length === 0) return null;

            return (
              <section key={day} className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-semibold mb-4 text-[#283B6A]">
                  {day}
                </h2>

                <div className="flex flex-col gap-4">
                  {dayData.map(({ time, specialty, doctor }, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col md:flex-row md:items-center md:justify-between bg-[#1E293B] text-white rounded-lg p-4 hover:bg-[#334155] transition"
                    >
                      <div className="md:flex-1 font-semibold">{doctor}</div>
                      <div className="md:flex-1">{specialty}</div>
                      <div className="md:flex-1 font-mono">{time}</div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DoctorsTimetable;
