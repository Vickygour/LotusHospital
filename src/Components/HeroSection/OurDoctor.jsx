import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import DoctorVector from "../../assets/Vector.jpg";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const OurDoctor = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Ankesh Aggarwal",
      specialty: "Consultant Cardiologist",
      image: DoctorVector,
      description:
        "Dr. Ankesh Aggarwal specializes in the diagnosis and treatment of heart-related conditions. He is known for his clinical expertise and patient-centric cardiac care at Lotus Multispeciality Hospital.",
    },
    {
      id: 4,
      name: "Dr. Kunal",
      specialty: "Consultant Pediatrician",
      image: DoctorVector,
      description:
        "Dr. Kunal provides specialized medical care for infants, children, and adolescents, focusing on growth, development, and preventive healthcare.",
    },
    {
      id: 5,
      name: "Dr. Sunil Jain",
      specialty: "General & Laparoscopic Surgeon",
      image: DoctorVector,
      description:
        "Dr. Sunil Jain offers surgical care with precision and safety, handling both general and laparoscopic procedures. Available strictly on prior appointment.",
    },
    {
      id: 6,
      name: "Dr. Rohit Jain",
      specialty: "Medicine Specialist",
      image: DoctorVector,
      description:
        "Dr. Rohit Jain specializes in the diagnosis and management of acute and chronic medical conditions, providing holistic and evidence-based treatment.",
    },
    {
      id: 7,
      name: "Dr. Bhawana Chaudhary",
      specialty: "General Physician",
      image: DoctorVector,
      description:
        "Dr. Bhawana Chaudhary focuses on preventive healthcare, routine medical consultations, and management of common illnesses with a patient-friendly approach.",
    },
    {
      id: 8,
      name: "Dr. Bharat",
      specialty: "Plastic Surgeon",
      image: DoctorVector,
      description:
        "Dr. Bharat specializes in aesthetic and reconstructive plastic surgery procedures, offering advanced treatments with a focus on safety and patient satisfaction.",
    },
  ];

  return (
    <section className="relative w-full py-20 bg-[#E5F7FA]">
      <div className="max-w-7xl mx-auto px-4 md:px-4">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#283B6A] mb-4">
            Our Medical Experts
          </h2>
          <p className="text-gray-600 text-base md:text-xl max-w-3xl">
            Meet our team of experienced and dedicated doctors at Lotus
            Multispeciality Hospital,
          </p>
        </div>

        {/* Doctors Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: ".doctor-slider-prev",
              nextEl: ".doctor-slider-next",
            }}
            pagination={{
              clickable: true,
              el: ".doctor-pagination",
              bulletClass: "doctor-bullet",
              bulletActiveClass: "doctor-bullet-active",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-14"
          >
            {doctors.map((doctor) => (
              <SwiperSlide key={doctor.id}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  {/* Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="text-[#283B6A] font-bold text-xl mb-2">
                      {doctor.name}
                    </h3>
                    <p className="text-[#13C5DD] font-semibold text-sm mb-3">
                      {doctor.specialty}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {doctor.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button className="doctor-slider-prev absolute -left-4 md:-left-6 top-1/3 -translate-y-1/2 z-10 bg-white hover:bg-[#13C5DD] shadow-xl w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 group">
            <ChevronLeft
              size={28}
              className="text-[#283B6A] group-hover:text-white"
            />
          </button>

          <button className="doctor-slider-next absolute -right-4 md:-right-6 top-1/3 -translate-y-1/2 z-10 bg-white hover:bg-[#13C5DD] shadow-xl w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 group">
            <ChevronRight
              size={28}
              className="text-[#283B6A] group-hover:text-white"
            />
          </button>

          {/* Pagination */}
          <div className="doctor-pagination flex justify-center gap-2"></div>
        </div>

        {/* Bottom Info */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#13C5DD]/10 rounded-lg flex items-center justify-center">
              <Calendar className="text-[#13C5DD]" size={24} />
            </div>
            <p className="text-gray-700 text-sm md:text-base">
              <span className="font-semibold text-[#283B6A]">OPD Timings:</span>{" "}
              Monday to Saturday, 10:00 AM – 7:00 PM. Please call the hospital
              to confirm doctor availability.
            </p>
          </div>
          <a href="tel:+9210399470">
            <button className="bg-[#13C5DD] hover:bg-[#0FA8C0] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-xl">
              Book Appointment →
            </button>
          </a>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        :global(.doctor-bullet) {
          width: 10px;
          height: 10px;
          background: #283b6a;
          opacity: 0.3;
          border-radius: 50%;
          cursor: pointer;
        }
        :global(.doctor-bullet-active) {
          background: #13c5dd;
          opacity: 1;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default OurDoctor;
