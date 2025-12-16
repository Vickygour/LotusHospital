import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import img1 from '../../assets/Vector.jpg';
import {
  ChevronRight,
  CheckCircle2,
  Calendar,
  ChevronDown,
} from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const DoctorsPage = () => {
  const [selectedClinic, setSelectedClinic] = useState("all");
  // Sample schedule data for the week
  const scheduleData = {
    sunday: [
      {
        time: "08:00",
        specialty: "Neurology",
        type: "Consultation",
        duration: "08:00-09:00",
        doctor: "Dr. Muldoone. R",
      },
      {
        time: "09:00",
        specialty: "Maternity",
        type: "Consultation",
        duration: "09:00-10:00",
        doctor: "Dr. Muldoone. R",
      },
      {
        time: "10:00",
        specialty: "Neurology",
        type: "Consultation",
        duration: "10:00-11:00",
        doctor: "Dr. Muldoone. R",
      },
      {
        time: "11:00",
        specialty: "Physiotherapy",
        type: "Consultation",
        duration: "11:00-12:00",
        doctor: "Dr. Muldoone. R",
      },
      {
        time: "12:00",
        specialty: "Neurology",
        type: "Consultation",
        duration: "12:00-13:00",
        doctor: "Dr. Muldoone. R",
      },
      {
        time: "13:00",
        specialty: "Oncology",
        type: "Consultation",
        duration: "13:00-14:00",
        doctor: "Dr. Muldoone. R",
      },
    ],
    monday: [
      {
        time: "08:00",
        specialty: "Cardiology",
        type: "Consultation",
        duration: "08:00-09:00",
        doctor: "Dr. Brain.M",
      },
      {
        time: "09:00",
        specialty: "Oncology",
        type: "Consultation",
        duration: "09:00-10:00",
        doctor: "Dr. Brain.M",
      },
      {
        time: "10:00",
        specialty: "Cardiology",
        type: "Consultation",
        duration: "10:00-11:00",
        doctor: "Dr. Brain.M",
      },
      {
        time: "11:00",
        specialty: "Cardiology",
        type: "Consultation",
        duration: "11:00-12:00",
        doctor: "Dr. Brain.M",
      },
      {
        time: "12:00",
        specialty: "Gynaecology",
        type: "Consultation",
        duration: "12:00-13:00",
        doctor: "Dr. Brain.M",
      },
      {
        time: "13:00",
        specialty: "Audiology",
        type: "Consultation",
        duration: "13:00-14:00",
        doctor: "Dr. Brain.M",
      },
    ],
    tuesday: [
      {
        time: "08:00",
        specialty: "Pathology",
        type: "Consultation",
        duration: "08:00-09:00",
        doctor: "Dr. Andaloro",
      },
      {
        time: "09:00",
        specialty: "Pathology",
        type: "Consultation",
        duration: "09:00-10:00",
        doctor: "Dr. Andaloro",
      },
      {
        time: "10:00",
        specialty: "Pathology",
        type: "Consultation",
        duration: "10:00-11:00",
        doctor: "Dr. Andaloro",
      },
      {
        time: "11:00",
        specialty: "Maternity",
        type: "Consultation",
        duration: "11:00-12:00",
        doctor: "Dr. Andaloro",
      },
      {
        time: "12:00",
        specialty: "Oncology",
        type: "Consultation",
        duration: "12:00-13:00",
        doctor: "Dr. Andaloro",
      },
      {
        time: "13:00",
        specialty: "Pathology",
        type: "Consultation",
        duration: "13:00-14:00",
        doctor: "Dr. Andaloro",
      },
    ],
    wednesday: [
      {
        time: "08:00",
        specialty: "Laboratory",
        type: "Consultation",
        duration: "08:00-10:00",
        doctor: "Dr. Markus.S",
      },
      {
        time: "10:00",
        specialty: "Gynaecology",
        type: "Consultation",
        duration: "10:00-12:00",
        doctor: "Dr. Markus.S",
      },
      {
        time: "12:00",
        specialty: "Pediatric",
        type: "Consultation",
        duration: "12:00-13:00",
        doctor: "Dr. Markus.S",
      },
      {
        time: "13:00",
        specialty: "Physiotherapy",
        type: "Consultation",
        duration: "13:00-14:00",
        doctor: "Dr. Markus.S",
      },
    ],
    thursday: [
      {
        time: "08:00",
        specialty: "Pediatric",
        type: "Consultation",
        duration: "08:00-09:00",
        doctor: "Dr. Alex.K",
      },
      {
        time: "09:00",
        specialty: "Audiology",
        type: "Consultation",
        duration: "09:00-10:00",
        doctor: "Dr. Alex.K",
      },
      {
        time: "10:00",
        specialty: "Maternity",
        type: "Consultation",
        duration: "10:00-11:00",
        doctor: "Dr. Alex.K",
      },
      {
        time: "11:00",
        specialty: "Cardiac",
        type: "Consultation",
        duration: "11:00-12:00",
        doctor: "Dr. Alex.K",
      },
      {
        time: "12:00",
        specialty: "Physiotherapy",
        type: "Consultation",
        duration: "12:00-13:00",
        doctor: "Dr. Alex.K",
      },
      {
        time: "13:00",
        specialty: "Maternity",
        type: "Consultation",
        duration: "13:00-14:00",
        doctor: "Dr. Alex.K",
      },
    ],
    friday: [
      {
        time: "08:00",
        specialty: "Physiotherapy",
        type: "Consultation",
        duration: "08:00-09:00",
        doctor: "Dr. Markus.S",
      },
      {
        time: "09:00",
        specialty: "Cardiac",
        type: "Consultation",
        duration: "09:00-10:00",
        doctor: "Dr. Markus.S",
      },
      {
        time: "10:00",
        specialty: "Oncology",
        type: "Consultation",
        duration: "10:00-12:00",
        doctor: "Dr. Markus.S",
      },
      {
        time: "12:00",
        specialty: "Laboratory",
        type: "Consultation",
        duration: "12:00-14:00",
        doctor: "Dr. Markus.S",
      },
    ],
    saturday: [
      {
        time: "08:00",
        specialty: "Urology",
        type: "Consultation",
        duration: "08:00-09:00",
        doctor: "Dr. Darien.G",
      },
      {
        time: "09:00",
        specialty: "Urology",
        type: "Consultation",
        duration: "09:00-10:00",
        doctor: "Dr. Darien.G",
      },
      {
        time: "10:00",
        specialty: "Urology",
        type: "Consultation",
        duration: "10:00-11:00",
        doctor: "Dr. Darien.G",
      },
      {
        time: "11:00",
        specialty: "Urology",
        type: "Consultation",
        duration: "11:00-12:00",
        doctor: "Dr. Darien.G",
      },
      {
        time: "12:00",
        specialty: "Urology",
        type: "Consultation",
        duration: "12:00-13:00",
        doctor: "Dr. Darien.G",
      },
      {
        time: "13:00",
        specialty: "Gynaecology",
        type: "Consultation",
        duration: "13:00-14:00",
        doctor: "Dr. Darien.G",
      },
    ],
  };

  const timeSlots = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00"];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const certificates = [
    {
      id: 1,
      image: "https://demo.zytheme.com/medisch/assets/images/careers/1.png",
    },
    {
      id: 2,
      image: "https://demo.zytheme.com/medisch/assets/images/careers/2.png",
    },
    {
      id: 3,
      image: "https://demo.zytheme.com/medisch/assets/images/careers/4.png",
    },
    {
      id: 4,
      image: "https://demo.zytheme.com/medisch/assets/images/careers/6.png",
    },
    {
      id: 5,
      image: "https://demo.zytheme.com/medisch/assets/images/careers/3.png",
    },
    {
      id: 6,
      image: "https://demo.zytheme.com/medisch/assets/images/careers/5.png",
    },
  ];

  const doctors = [
    {
      id: 1,
      name: "Richard Muldoone",
      specialty: "Cardiology Specialist",
      image:
        img1,
      description:
        "Muldoone obtained his undergraduate degree in Biomedical Engineering at Tulane University prior to attending St George University School of Medicine.",
    },
    {
      id: 2,
      name: "Michael Brian",
      specialty: "Dermatologists",
      image:
        img1,
      description:
        "Brian specializes in treating skin, hair, nail, and mucous membrane. He also address cosmetic issues, helping to revitalize the skin, hair, and...",
    },
    {
      id: 3,
      name: "Maria Andaloro",
      specialty: "Pediatrician",
      image:
        img1,
      description:
        "Andaloro graduated from medical school and completed 3 years residency program in pediatrics. She passed by the American Board of Pediatrics.",
    },
    {
      id: 1,
      name: "Richard Muldoone",
      specialty: "Cardiology Specialist",
      image:
        img1,
      description:
        "Muldoone obtained his undergraduate degree in Biomedical Engineering at Tulane University prior to attending St George University School of Medicine.",
    },
    {
      id: 2,
      name: "Michael Brian",
      specialty: "Dermatologists",
      image:
       img1,
      description:
        "Brian specializes in treating skin, hair, nail, and mucous membrane. He also address cosmetic issues, helping to revitalize the skin, hair, and...",
    },
    {
      id: 3,
      name: "Maria Andaloro",
      specialty: "Pediatrician",
      image:
       img1,
      description:
        "Andaloro graduated from medical school and completed 3 years residency program in pediatrics. She passed by the American Board of Pediatrics.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-[500px] bg-cover bg-center md:mt-40 mt-20"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&h=600&fit=crop)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>

        <div className="relative h-full max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center h-full">
            {/* Left Content */}
            <div className="w-full lg:w-2/3 text-white">
              <p className="text-sm md:text-base mb-4 text-gray-200">
                The Best Medical And General Practice Care!
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Delivering Tomorrow's Care For Your Family.
              </h1>
              <p className="text-base md:text-lg text-gray-200 mb-8 max-w-2xl">
                Our doctors include highly qualified practitioners who come from
                a range of backgrounds and bring a diversity of skills. Our
                support staff all have exceptional people skills.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-[#13C5DD] hover:bg-[#0FA8C0] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg">
                  Make Appointment
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#283B6A] transition-all duration-300">
                  More About Us
                </button>
              </div>
            </div>

            {/* Right Card */}
            <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 bg-[#4A5F8F] text-white rounded-2xl p-8 w-80 shadow-2xl">
              <div className="mb-6">
                <Calendar size={48} className="text-white mb-4" />
                <h3 className="text-2xl font-bold mb-2">Doctors Timetable</h3>
                <p className="text-white/90 text-sm leading-relaxed">
                  Qualified doctors available six days a week, view our
                  timetable to make an appointment.
                </p>
              </div>
              <button className="w-full border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#4A5F8F] transition-all duration-300">
                View Timetable
              </button>
            </div>
          </div>

          {/* Breadcrumb */}
          <div className="absolute bottom-8 right-8 flex items-center gap-2 text-white text-sm">
            <a href="/" className="hover:text-[#13C5DD] transition-colors">
              Home
            </a>
            <ChevronRight size={16} />
            <span>Doctors</span>
          </div>
        </div>
      </section>

      {/* About Section with Certificates */}
      <section className="relative w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left - Text Content */}
            <div>
              <p className="text-[#13C5DD] font-semibold text-sm mb-3 uppercase">
                Caring For The Health Of You And Your Family.
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#283B6A] leading-tight mb-8">
                We Provide All Aspects Of Medical Practice For Your Whole
                Family!
              </h2>
            </div>

            {/* Right - Description */}
            <div className="flex flex-col justify-center">
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                We pride ourselves on providing the best transport and shipping
                services available allover the world. Our skilled personnel and
                processing software, combined with decades of experience!
                Through integrated supply chain solutions, Equita drives
                sustainable competitive advantages to some of Australia's
                largest companies.
              </p>

              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-[#13C5DD]">
                  <CheckCircle2 size={20} />
                  <span className="text-gray-700 font-medium">
                    Quality Control System
                  </span>
                </li>
                <li className="flex items-center gap-3 text-[#13C5DD]">
                  <CheckCircle2 size={20} />
                  <span className="text-gray-700 font-medium">
                    Unrivalled Workmanship
                  </span>
                </li>
                <li className="flex items-center gap-3 text-[#13C5DD]">
                  <CheckCircle2 size={20} />
                  <span className="text-gray-700 font-medium">
                    100% Satisfaction Guarantee
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Certificates Swiper */}
          <div className="relative">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={2}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                el: ".cert-pagination",
              }}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 6 },
              }}
              className="certificates-swiper pb-12"
            >
              {certificates.map((cert) => (
                <SwiperSlide key={cert.id}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={cert.image}
                      alt={`Certificate ${cert.id}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="cert-pagination flex justify-center gap-2 mt-4"></div>
          </div>
        </div>
      </section>

      {/* Doctors Grid Section */}
      <section className="relative w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Doctor Image */}
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Doctor Info */}
                <div className="p-8">
                  <h3 className="text-[#283B6A] font-bold text-2xl mb-2">
                    {doctor.name}
                  </h3>
                  <p className="text-[#13C5DD] font-semibold text-base mb-4">
                    {doctor.specialty}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {doctor.description}
                  </p>

                  {/* Bottom Border */}
                  <div className="mt-6 h-1 bg-[#13C5DD] w-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timetable Section */}
      <section className="relative w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Filter Dropdown */}
          <div className="mb-8">
            <div className="relative w-64">
              <select
                value={selectedClinic}
                onChange={(e) => setSelectedClinic(e.target.value)}
                className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-lg text-gray-700 font-semibold focus:outline-none focus:ring-2 focus:ring-[#13C5DD] appearance-none cursor-pointer"
              >
                <option value="all">All Clinics</option>
                <option value="neurology">Neurology</option>
                <option value="cardiology">Cardiology</option>
                <option value="maternity">Maternity</option>
                <option value="pediatric">Pediatric</option>
                <option value="oncology">Oncology</option>
              </select>
              <ChevronDown
                size={20}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
              />
            </div>
          </div>

          {/* Schedule Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-gray-100 p-4 text-left font-semibold text-gray-600 border border-gray-200"></th>
                  {days.map((day) => (
                    <th
                      key={day}
                      className="bg-[#E8F5F7] p-4 text-center font-semibold text-gray-700 border border-gray-200 min-w-[160px]"
                    >
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timeSlots.map((time) => (
                  <tr key={time}>
                    <td className="bg-gray-50 p-4 text-center font-semibold text-gray-600 border border-gray-200">
                      {time}
                    </td>
                    {days.map((day) => {
                      const dayKey = day.toLowerCase();
                      const appointment = scheduleData[dayKey]?.find(
                        (appt) => appt.time === time
                      );

                      return (
                        <td key={day} className="border border-gray-200 p-0">
                          {appointment ? (
                            <div className="bg-[#4A5F8F] text-white p-4 h-full hover:bg-[#3d4f7a] transition-colors cursor-pointer">
                              <div className="font-bold text-base mb-1">
                                {appointment.specialty}
                              </div>
                              <div className="text-xs opacity-90 mb-2">
                                {appointment.type}
                              </div>
                              <div className="text-xs font-semibold mb-1">
                                {appointment.duration}
                              </div>
                              <div className="text-xs opacity-80">
                                {appointment.doctor}
                              </div>
                            </div>
                          ) : (
                            <div className="p-4 h-full bg-white"></div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        :global(.cert-pagination .swiper-pagination-bullet) {
          width: 10px;
          height: 10px;
          background: #283b6a;
          opacity: 0.3;
          transition: all 0.3s ease;
        }
        :global(.cert-pagination .swiper-pagination-bullet-active) {
          background: #13c5dd;
          opacity: 1;
        }
      `}</style>
    </>
  );
};

export default DoctorsPage;
