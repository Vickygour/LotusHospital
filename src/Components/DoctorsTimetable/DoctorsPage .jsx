import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import DoctorVector from "../../assets/Vector.jpg";
import { ChevronRight, CheckCircle2, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import TimeTableData from "../DoctorsTimetable/TimeTableData";

import "swiper/css";
import "swiper/css/pagination";

const DoctorsPage = () => {
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
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-[500px] bg-cover bg-center mt-37"
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
                <a
                  href="https://wa.me/919210399470?text=Hi, I would like to book an appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 rounded-lg text-white font-medium text-sm sm:text-base hover:opacity-90 transition-opacity"
                  style={{ backgroundColor:"#4A5F8F" , }}
                >
                  {/* WhatsApp Icon (Optional but recommended) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.06 3.972L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.17-.479 1.338-.942.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                  Book via WhatsApp
                </a>
                <Link to="/about-us">
                  <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#283B6A] transition-all duration-300">
                    More About Us
                  </button>
                </Link>
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
              <Link to="/Doctors-Timetable">
                <button className="w-full border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#4A5F8F] transition-all duration-300">
                  View Timetable
                </button>
              </Link>
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

      {/* Doctors Grid */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={doc.image}
                alt={doc.name}
                className="h-80 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#283B6A]">{doc.name}</h3>
                <p className="text-[#13C5DD] font-semibold">{doc.specialty}</p>
                <p className="text-gray-600 mt-2">{doc.description}</p>
              </div>
            </div>
          ))}
        </div>
        <TimeTableData />
      </section>
    </>
  );
};

export default DoctorsPage;
