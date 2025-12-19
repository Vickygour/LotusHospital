import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import DoctorVector from "../../assets/Vector.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const OurDoctor = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Ankesh Aggarwal",
      specialty: "Consultant Cardiologist",
      image: DoctorVector,
      description:
        "Dr. Ankesh Aggarwal is a Consultant Cardiologist who treats heart-related problems such as high blood pressure, chest pain, and heart rhythm issues.",
    },
    {
      id: 2,
      name: "Dr. Kunal",
      specialty: "Consultant Pediatrician",
      image: DoctorVector,
      description:
        "Dr. Kunal is a Consultant Pediatrician who takes care of children’s health, growth, and common childhood illnesses with a gentle approach.",
    },
    {
      id: 3,
      name: "Dr. Sunil Jain",
      specialty: "General & Laparoscopic Surgeon",
      image: DoctorVector,
      description:
        "Dr. Sunil Jain is a General & Laparoscopic Surgeon who performs surgeries safely with proper planning and patient care.",
    },
    {
      id: 4,
      name: "Dr. Sandeep Gupta",
      specialty: "General & Laparoscopic Surgeon",
      image: DoctorVector,
      description:
        "Dr. Sandeep Gupta is a General & Laparoscopic Surgeon known for safe surgical treatment and patient-focused care.",
    },
    {
      id: 5,
      name: "Dr. Sunil Aggarwal",
      specialty: "General & Laparoscopic Surgeon",
      image: DoctorVector,
      description:
        "Dr. Sunil Aggarwal is a General & Laparoscopic Surgeon who provides safe and reliable surgical treatment.",
    },
    {
      id: 6,
      name: "Dr. Rohit Jain",
      specialty: "Medicine Specialist",
      image: DoctorVector,
      description:
        "Dr. Rohit Jain is a Medicine Specialist who treats common and long-term medical problems with proper diagnosis.",
    },
    {
      id: 7,
      name: "Dr. Bhawana Chaudhary",
      specialty: "Skin Specialist",
      image: DoctorVector,
      description:
        "Dr. Bhawana Chaudhary is a Skin Specialist who treats skin, hair, and common skin-related problems.",
    },
    {
      id: 8,
      name: "Dr. Bharat",
      specialty: "Plastic Surgeon",
      image: DoctorVector,
      description:
        "Dr. Bharat is a Plastic Surgeon who performs cosmetic and reconstructive procedures with patient safety.",
    },
    {
      id: 9,
      name: "Dr. Sameer kad",
      specialty: "Orthopedic Surgeon",
      image: DoctorVector,
      description:
        "Dr. Sameer Kad is an Orthopedic Surgeon who treats bone, joint, and muscle-related problems.",
    },
    {
      id: 10,
      name: "Dr. Ajay Mittal",
      specialty: "Orthopedic Surgeon",
      image: DoctorVector,
      description:
        "Dr. Ajay Mittal is an Orthopedic Surgeon providing treatment for bone and joint pain.",
    },
    {
      id: 11,
      name: "Dr. Deepak Tyagi",
      specialty: "Orthopedic surgeon",
      image: DoctorVector,
      description:
        "Dr. Deepak Tyagi is an Orthopedic Surgeon who helps patients with bone and joint issues.",
    },
    {
      id: 12,
      name: "Dr. Vikas Chaudhary",
      specialty: "Consultant Pediatrician",
      image: DoctorVector,
      description:
        "Dr. Vikas Chaudhary is a Consultant Pediatrician caring for children’s health and development.",
    },
    {
      id: 13,
      name: "Dr. Kiran",
      specialty: "Gynecologist",
      image: DoctorVector,
      description:
        "Dr. Kiran is a Gynecologist who provides care for women’s health and pregnancy.",
    },
    {
      id: 14,
      name: "Dr. J. Chaudhary",
      specialty: "Gynecologist",
      image: DoctorVector,
      description:
        "Dr. J. Chaudhary is a Gynecologist offering treatment for women’s health concerns.",
    },
    {
      id: 15,
      name: "Dr. J. Kumar",
      specialty: "Psychiatrist",
      image: DoctorVector,
      description:
        "Dr. J. Kumar is a Psychiatrist who helps patients with mental health and emotional well-being.",
    },
    {
      id: 16,
      name: "Dr. Manoj Miglani",
      specialty: "Spine Surgeon",
      image: DoctorVector,
      description:
        "Dr. Manoj Miglani is a Spine Surgeon treating back and spine-related problems.",
    },
    {
      id: 17,
      name: "Dr. Anil Kansal",
      specialty: "Neurosurgeon",
      image: DoctorVector,
      description:
        "Dr. Anil Kansal is a Neurosurgeon who treats brain and nerve-related conditions.",
    },
    {
      id: 18,
      name: "Dr. Pankaj Sharma",
      specialty: "Anasthetic Surgeon",
      image: DoctorVector,
      description:
        "Dr. Pankaj Sharma is an Anesthetic Surgeon ensuring safe anesthesia during surgeries.",
    },
    {
      id: 19,
      name: "Dr. Gagan Dabaas",
      specialty: "Anasthetic Surgeon",
      image: DoctorVector,
      description:
        "Dr. Gagan Dabaas is an Anesthetic Surgeon focused on patient safety during operations.",
    },
    {
      id: 20,
      name: "Dr. Amit Sahu",
      specialty: "Anasthetic Surgeon",
      image: DoctorVector,
      description:
        "Dr. Amit Sahu is an Anesthetic Surgeon providing safe anesthesia care.",
    },
    {
      id: 21,
      name: "Dr. Gurwinder",
      specialty: "Anasthetic Surgeon",
      image: DoctorVector,
      description:
        "Dr. Gurwinder is an Anesthetic Surgeon managing pain and anesthesia during surgery.",
    },
    {
      id: 22,
      name: "Dr. Ankit Sharma",
      specialty: "physiotherapist",
      image: DoctorVector,
      description:
        "Dr. Ankit Sharma is a Physiotherapist helping patients recover from pain and injuries.",
    },
    {
      id: 23,
      name: "Dr. Anil Sharma",
      specialty: "MD Gastro",
      image: DoctorVector,
      description:
        "Dr. Anil Sharma is a Gastro Specialist treating stomach and digestive problems.",
    },
    {
      id: 24,
      name: "Dr. Anil Aggarwal",
      specialty: "DNB Urology",
      image: DoctorVector,
      description:
        "Dr. Anil Aggarwal is a Urology Specialist treating kidney and urinary problems.",
    },
  ];

  return (
    <section className="relative w-full py-20 bg-[#E5F7FA]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#283B6A] mb-4">
            Meet Our Doctors
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl">
            Our administration and support staff have exceptional skills and
            trained to assist you with all enquiries.
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
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="doctors-swiper pb-14"
          >
            {doctors.map((doctor) => (
              <SwiperSlide key={doctor.id}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  {/* Doctor Image */}
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Doctor Info */}
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

          {/* Custom Navigation Buttons */}
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

          {/* Custom Pagination */}
          <div className="doctor-pagination flex justify-center gap-2 "></div>
        </div>

        {/* Bottom Info Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-[#13C5DD]/10 rounded-lg flex items-center justify-center">
              <Calendar className="text-[#13C5DD]" size={24} />
            </div>
            <p className="text-gray-700 text-sm md:text-base">
              <span className="font-semibold text-[#283B6A]">OPD Timings:</span>{" "}
              General OPD & Emergency 24×7. Please Call for Appointment
            </p>
          </div>
          <a href="tel:9210399470">
            <button className="bg-[#13C5DD] hover:bg-[#0FA8C0] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-xl">
              Book Appointment →
            </button>
          </a>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        :global(.doctor-bullet) {
          width: 10px;
          height: 10px;
          background: #283b6a;
          opacity: 0.3;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        :global(.doctor-bullet-active) {
          background: #13c5dd;
          opacity: 1;
          width: 10px;
          height: 10px;
        }

        :global(.doctor-bullet:hover) {
          opacity: 0.6;
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
