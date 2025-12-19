import React, { useState } from "react";
import { Search, Calendar, Clock, User } from "lucide-react";
import { motion } from "framer-motion";

const doctorsData = [
  {
    name: "Dr. Ankesh Aggarwal",
    specialty: "DM Cardiology",
    timing: "10:00 AM - 11:00 AM",
    days: "Tuesday",
  },
  {
    name: "Dr. Kiran",
    specialty: "MS Gynecology",
    timing: "07:00 PM - 08:00 PM",
    days: "Monday to Saturday",
  },
  {
    name: "Dr. Kunal",
    specialty: "MD Pediatrician",
    timing: "10:00 AM - 12:00 PM",
    days: "Monday to Saturday",
  },
  {
    name: "Dr. Sunil Jain",
    specialty: "MS Surgery",
    timing: "On Appointment",
    days: "Monday to Saturday",
  },
  {
    name: "Dr. Anil Aggarwal",
    specialty: "DNB Urology",
    timing: "On Appointment",
    days: "Monday to Saturday",
  },
  {
    name: "Dr. Rohit Jain",
    specialty: "MD Medicine Specialist",
    timing: "02:00 PM - 03:00 PM",
    days: "Monday to Saturday",
  },
  {
    name: "Dr. Bhawana Chaudhary",
    specialty: "MD Skin Specialist",
    timing: "11:00 AM - 01:00 PM",
    days: "Monday to Saturday",
  },
  {
    name: "Dr. Bharat",
    specialty: "Plastic Surgeon",
    timing: "On Appointment",
    days: "Monday to Saturday",
  },
  {
    name: "Dr. Sandeep Gupta",
    specialty: "MS Surgery",
    timing: "On Appointment",
    days: "Monday to Saturday",
  },
  {
    name: "Dr. Ajay Mittal",
    specialty: "DNB Ortho",
    timing: "01:00 PM - 02:00 PM",
    days: "Monday, Thursday",
  },
  {
    name: "Dr. Sameer Kad",
    specialty: "MS Ortho",
    timing: "10:30 AM - 11:30 AM",
    days: "Wednesday, Saturday",
  },
  {
    name: "Dr. J Kumar",
    specialty: "MD Psychiatry",
    timing: "07:00 PM - 08:00 PM",
    days: "Wednesday, Saturday",
  },
  {
    name: "Dr. Anil Sharma",
    specialty: "MD Gastro",
    timing: "On Appointment",
    days: "Monday to Saturday",
  },
  {
    name: "Dr. Pankaj Sharma",
    specialty: "MD Anesthesia",
    timing: "On Appointment",
    days: "Monday to Saturday",
  },
  {
    name: "Dr. Gagan Dabas",
    specialty: "MD Anesthesia",
    timing: "On Appointment",
    days: "Monday to Saturday",
  },
  {
    name: "Dr. Amit Sahu",
    specialty: "MD Anesthesia",
    timing: "On Appointment",
    days: "Monday to Saturday",
  },
];
const DoctorsSchedule = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");

  const allSpecialties = [
    "all",
    ...new Set(doctorsData.map((doc) => doc.specialty)),
  ];

  const filteredDoctors = doctorsData.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSpecialty =
      selectedSpecialty === "all" || doc.specialty === selectedSpecialty;

    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen w-full py-8 sm:py-10 md:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search by doctor name or specialty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#13C5DD] focus:ring-2 focus:ring-[#13C5DD]/20 outline-none transition-all"
              />
            </div>

            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#13C5DD] focus:ring-2 focus:ring-[#13C5DD]/20 outline-none transition-all"
            >
              <option value="all">All Specialties</option>
              {allSpecialties.slice(1).map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            Showing{" "}
            <span className="font-bold text-[#283B6A]">
              {filteredDoctors.length}
            </span>{" "}
            doctor(s)
          </div>
        </motion.div>

        {/* Desktop Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block bg-white rounded-xl shadow-xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#283B6A] to-[#13C5DD] text-white">
                  <th className="px-6 py-4 text-left font-semibold text-base">
                    <div className="flex items-center gap-2">
                      <User size={18} />
                      Doctor Name
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-base">
                    Specialty
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-base">
                    <div className="flex items-center gap-2">
                      <Clock size={18} />
                      Timing
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-base">
                    <div className="flex items-center gap-2">
                      <Calendar size={18} />
                      Available Days
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredDoctors.map((doctor, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`border-b border-gray-200 hover:bg-blue-50 transition-colors ${
                      idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td className="px-6 py-4 font-semibold text-gray-800">
                      {doctor.name}
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {doctor.specialty}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-700 font-medium">
                      {doctor.timing}
                    </td>
                    <td className="px-6 py-4 text-gray-700">{doctor.days}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredDoctors.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No doctors found matching your criteria.
            </div>
          )}
        </motion.div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-4">
          {filteredDoctors.map((doctor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg sm:text-xl font-bold text-[#283B6A]">
                  {doctor.name}
                </h3>
                <span className="bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                  {doctor.specialty}
                </span>
              </div>

              <div className="space-y-2 text-sm sm:text-base">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock size={16} className="text-[#13C5DD]" />
                  <span className="font-medium">Timing:</span>
                  <span>{doctor.timing}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar size={16} className="text-[#13C5DD]" />
                  <span className="font-medium">Days:</span>
                  <span>{doctor.days}</span>
                </div>
              </div>
            </motion.div>
          ))}

          {filteredDoctors.length === 0 && (
            <div className="text-center py-12 text-gray-500 bg-white rounded-xl">
              No doctors found matching your criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorsSchedule;
