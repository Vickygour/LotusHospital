import React, { useState } from 'react';
import { Clock, Calendar, Phone, Search, Filter, User } from 'lucide-react';
import { motion } from 'framer-motion';

const OurDoctor = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterSpecialty, setFilterSpecialty] = useState('All');

  const doctorSchedule = [
    {
      id: 1,
      name: 'Dr. Ankesh Aggarwal',
      specialty: 'DM Cardiology',
      timing: '10:00 AM - 11:00 AM',
      days: 'Tuesday',
    },
    {
      id: 2,
      name: 'Dr. Kiran',
      specialty: 'MS Gynecology',
      timing: '07:00 PM - 08:00 PM',
      days: 'Monday to Saturday',
    },
    {
      id: 3,
      name: 'Dr. Kunal',
      specialty: 'MD Pediatrician',
      timing: '10:00 AM - 12:00 PM',
      days: 'Monday to Saturday',
    },
    {
      id: 4,
      name: 'Dr. Sunil Jain',
      specialty: 'MS Surgery',
      timing: 'On Appointment',
      days: 'Monday to Saturday',
    },
    {
      id: 5,
      name: 'Dr. Anil Aggarwal',
      specialty: 'DNB Urology',
      timing: 'On Appointment',
      days: 'Monday to Saturday',
    },
    {
      id: 6,
      name: 'Dr. Rohit Jain',
      specialty: 'MD Medicine Specialist',
      timing: '02:00 PM - 03:00 PM',
      days: 'Monday to Saturday',
    },
    {
      id: 7,
      name: 'Dr. Bhawana Chaudhary',
      specialty: 'MD Skin Specialist',
      timing: '11:00 AM - 01:00 PM',
      days: 'Monday to Saturday',
    },
    {
      id: 8,
      name: 'Dr. Bharat',
      specialty: 'Plastic Surgeon',
      timing: 'On Appointment',
      days: 'Monday to Saturday',
    },
    {
      id: 9,
      name: 'Dr. Sandeep Gupta',
      specialty: 'MS Surgery',
      timing: 'On Appointment',
      days: 'Monday to Saturday',
    },
    {
      id: 10,
      name: 'Dr. Ajay Mittal',
      specialty: 'DNB Ortho',
      timing: '01:00 PM - 02:00 PM',
      days: 'Monday, Thursday',
    },
    {
      id: 11,
      name: 'Dr. Sameer Kad',
      specialty: 'MS Ortho',
      timing: '10:30 AM - 11:30 AM',
      days: 'Wednesday, Saturday',
    },
    {
      id: 12,
      name: 'Dr. J Kumar',
      specialty: 'MD Psychiatry',
      timing: '07:00 PM - 08:00 PM',
      days: 'Wednesday, Saturday',
    },
    {
      id: 13,
      name: 'Dr. Anil Sharma',
      specialty: 'MD Gastro',
      timing: 'On Appointment',
      days: 'Monday to Saturday',
    },
    {
      id: 14,
      name: 'Dr. Pankaj Sharma',
      specialty: 'MD Anesthesia',
      timing: 'On Appointment',
      days: 'Monday to Saturday',
    },
    {
      id: 15,
      name: 'Dr. Gagan Dabas',
      specialty: 'MD Anesthesia',
      timing: 'On Appointment',
      days: 'Monday to Saturday',
    },
    {
      id: 16,
      name: 'Dr. Amit Sahu',
      specialty: 'MD Anesthesia',
      timing: 'On Appointment',
      days: 'Monday to Saturday',
    },
    {
      id: 17,
      name: 'Dr. J. Chaudhary',
      specialty: 'Gynecologist',
      timing: '02:00 PM - 06:00 PM',
      days: 'Tuesday, Thursday, Saturday',
    },
    {
      id: 18,
      name: 'Dr. Vikas Chaudhary',
      specialty: 'Consultant Pediatrician',
      timing: '10:00 AM - 03:00 PM',
      days: 'Monday to Friday',
    },
    {
      id: 19,
      name: 'Dr. Manoj Miglani',
      specialty: 'Spine Surgeon',
      timing: 'On Appointment',
      days: 'Monday, Wednesday, Friday',
    },
    {
      id: 20,
      name: 'Dr. Anil Kansal',
      specialty: 'Neurosurgeon',
      timing: 'On Appointment',
      days: 'Tuesday, Thursday, Saturday',
    },
    {
      id: 21,
      name: 'Dr. Gurwinder',
      specialty: 'Anaesthetic Surgeon',
      timing: '24/7 Emergency',
      days: 'Daily',
    },
    {
      id: 22,
      name: 'Dr. Ankit Sharma',
      specialty: 'Physiotherapist',
      timing: '09:00 AM - 06:00 PM',
      days: 'Monday to Saturday',
    },
    {
      id: 23,
      name: 'Dr. Deepak Tyagi',
      specialty: 'Orthopedic Surgeon',
      timing: 'On Appointment',
      days: 'Tuesday, Thursday, Saturday',
    },
    {
      id: 24,
      name: 'Dr. Sunil Aggarwal',
      specialty: 'General Surgeon',
      timing: '09:00 AM - 12:00 PM',
      days: 'Daily',
    },
  ];

  // Get unique specialties for filter
  const specialties = [
    'All',
    ...new Set(doctorSchedule.map((doc) => doc.specialty)),
  ];

  // Filter doctors based on search and specialty
  const filteredDoctors = doctorSchedule.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty =
      filterSpecialty === 'All' || doctor.specialty === filterSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <section className="relative w-full py-12 sm:py-16 bg-gradient-to-br from-[#E5F7FA] to-[#F0F9FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#283B6A] mb-3 sm:mb-4">
            Doctor Schedule & Availability
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-4">
            View our doctors' consultation timings and book your appointment
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8"
        >
          <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search by doctor name or specialty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:border-[#13C5DD] focus:outline-none transition-colors"
              />
            </div>

            {/* Filter */}
            <div className="relative md:w-56 lg:w-64">
              <Filter
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <select
                value={filterSpecialty}
                onChange={(e) => setFilterSpecialty(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-4 py-2.5 sm:py-3 text-sm sm:text-base border-2 border-gray-200 rounded-lg sm:rounded-xl focus:border-[#13C5DD] focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                {specialties.map((specialty) => (
                  <option key={specialty} value={specialty}>
                    {specialty}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600">
            Showing{' '}
            <span className="font-bold text-[#283B6A]">
              {filteredDoctors.length}
            </span>{' '}
            doctor(s)
          </div>
        </motion.div>

        {/* Desktop Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:block bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#283B6A] to-[#13C5DD] text-white">
                  <th className="px-4 lg:px-6 py-4 text-left font-semibold text-sm lg:text-base">
                    <div className="flex items-center gap-2">
                      <User size={18} />
                      Doctor Name
                    </div>
                  </th>
                  <th className="px-4 lg:px-6 py-4 text-left font-semibold text-sm lg:text-base">
                    Specialty
                  </th>
                  <th className="px-4 lg:px-6 py-4 text-left font-semibold text-sm lg:text-base">
                    <div className="flex items-center gap-2">
                      <Clock size={18} />
                      Timing
                    </div>
                  </th>
                  <th className="px-4 lg:px-6 py-4 text-left font-semibold text-sm lg:text-base">
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
                    key={doctor.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03 }}
                    className={`border-b border-gray-200 hover:bg-blue-50 transition-colors ${
                      idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    }`}
                  >
                    <td className="px-4 lg:px-6 py-4 font-semibold text-gray-800 text-sm lg:text-base">
                      {doctor.name}
                    </td>
                    <td className="px-4 lg:px-6 py-4 text-sm lg:text-base">
                      <span className="inline-block bg-blue-100 text-blue-700 px-2.5 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-medium">
                        {doctor.specialty}
                      </span>
                    </td>
                    <td className="px-4 lg:px-6 py-4 text-gray-700 font-medium text-sm lg:text-base">
                      {doctor.timing}
                    </td>
                    <td className="px-4 lg:px-6 py-4 text-gray-700 text-sm lg:text-base">
                      {doctor.days}
                    </td>
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

        {/* Mobile/Tablet Card View */}
        <div className="lg:hidden space-y-3 sm:space-y-4">
          {filteredDoctors.map((doctor, idx) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start justify-between mb-3 gap-2">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#283B6A]">
                  {doctor.name}
                </h3>
                <span className="bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium flex-shrink-0">
                  {doctor.specialty}
                </span>
              </div>

              <div className="space-y-2 text-xs sm:text-sm md:text-base">
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock size={16} className="text-[#13C5DD] flex-shrink-0" />
                  <span className="font-medium">Timing:</span>
                  <span>{doctor.timing}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar
                    size={16}
                    className="text-[#13C5DD] flex-shrink-0"
                  />
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

        {/* Emergency Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 sm:mt-10 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-lg sm:rounded-xl p-4 sm:p-6"
        >
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <Phone
              className="text-red-500 flex-shrink-0 mt-0.5 sm:mt-1"
              size={20}
            />
            <div className="flex-1">
              <h4 className="text-red-700 font-bold text-base sm:text-lg mb-2">
                24×7 Emergency Services
              </h4>
              <p className="text-gray-700 text-sm sm:text-base mb-3">
                For emergency cases, our hospital operates round the clock with
                emergency physicians and support staff available at all times.
              </p>
              <a href="tel:9210399470">
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base w-full sm:w-auto">
                  Call Emergency: 9210399470
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurDoctor;
