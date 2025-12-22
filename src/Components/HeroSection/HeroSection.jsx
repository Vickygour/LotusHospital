import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import img1 from "../../assets/banner1.jpg";
import img2 from "../../assets/banner2.jpg";
import img3 from "../../assets/gallery6.jpg";
import img4 from "../../assets/banner4.jpg";
import LotusFront from "../../assets/LotusFront.jpg";
import Sunil from "../../assets/SunilSir.jpg";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import LogoCarousel from "../LogoCarousel";
import boy1 from "../../assets/boy1testimonial.jpg";
import boy from "../../assets/boytestimonial.jpg";
import girl from "../../assets/girltestimonial.jpg";

import {
  ChevronLeft,
  ChevronRight,
  Stethoscope,
  FileText,
  Activity,
  Droplet,
  Phone,
  Clock,
  MapPin,
  Calendar,
  ArrowRight,
  Check,
  Play,
  Minus,
  BookOpen,
  Heart,
  Award,
  Users,
  BriefcaseMedical,
  CheckCircle2,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import OurDoctor from "./OurDoctor";
import BookAppointmain from "./BookAppointmain";
import SpecialtiesSection from "./SpecialtiesSection";
import WhyLotusHospital from "./WhyLotusHospital";
import OurFacilities from "../About/OurFacilities ";
import MediaGallery from "../MediaGallery";

const CardItem = ({ Icon, title, description }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 p-4 sm:p-6 text-center shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-blue-700/80 hover:shadow-xl min-h-[180px] sm:min-h-[220px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-lg bg-white/10 transition-colors duration-300 group-hover:bg-white/20">
        <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-300" />
      </div>
      <h3 className="mt-3 sm:mt-4 text-sm sm:text-base font-semibold text-white">
        {title}
      </h3>
      <p
        className={`mt-2 text-xs sm:text-sm text-cyan-100/90 transition-all duration-300 ${
          hovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
        }`}
      >
        {description}
      </p>
      <span
        className={`absolute bottom-3 inline-block h-1.5 w-1.5 rounded-full bg-cyan-300 transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-40"
        }`}
        aria-hidden
      />
    </div>
  );
};

const steps = [
  {
    number: "01.",
    icon: FileText,
    title: "Check the Doctors Timetable",
    description:
      "Learn admission steps, prepare essential documents, and follow the procedure to ensure smooth hospital entry.",
    linkText: "Doctors Timetable",
    linkHref: "/Doctors-Timetable",
  },
  {
    number: "02.",
    icon: FileText,
    title: "Review Admission Process",
    description:
      "Understand admission guidelines, required documents, and the step-by-step procedure for a smooth hospital entry.",
    linkText: "Start Admission",
    linkHref: "/Admission",
  },
  {
    number: "03.",
    icon: FileText,
    title: "Explore Rooms & Facilities",
    description:
      "Choose from General, Semi-Private, Private, and Deluxe rooms equipped with modern comfort and 24/7 care.",
    linkText: "View Room Facilities",
    linkHref: "/services/room-facilities",
  },
  {
    number: "04.",
    icon: FileText,
    title: "Connect With Our Doctors",
    description:
      "Reach out for consultations, enquiries, or follow-ups. Our support team ensures quick and helpful assistance.",
    linkText: "Contact Us",
    linkHref: "/Contact",
  },
];

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      title: "Welcome to Lotus Multispeciality",
      description: "YOUR TRUSTED",
      descriptions: "MULTISPECIALITY HOSPITAL",
      shortDescription:
        "Providing advanced medical care with expert doctors, modern facilities, and 24×7 emergency support.",
      image: img1,
      services: [
        { icon: <Stethoscope size={24} />, name: "Book Appointment" },
        { icon: <FileText size={24} />, name: "OPD Timings" },
        { icon: <Activity size={24} />, name: "Meet Our Doctors" },
        { icon: <Droplet size={24} />, name: "24×7 Emergency Care" },
      ],
    },
    {
      id: 2,
      title: "Welcome to Lotus Multispeciality — OPD & Reception",
      description: "SEAMLESS OPD",
      descriptions: "EXPERIENCE & SUPPORT",
      shortDescription:
        "Fast check-ins, clear guidance and friendly reception help make every visit smooth and worry-free.",
      image: img2,
      services: [
        { icon: <Stethoscope size={24} />, name: "Book Appointment" },
        { icon: <FileText size={24} />, name: "OPD Timings" },
        { icon: <Activity size={24} />, name: "Meet Our Doctors" },
        { icon: <Droplet size={24} />, name: "24×7 Emergency Care" },
      ],
    },
    {
      id: 3,
      title: "Private Room — Deluxe Suite",
      description: "PRIVATE",
      descriptions: "DELUXE SUITE",
      shortDescription:
        "Spacious single-occupancy room with attached washroom, comfortable seating for visitors, TV, Wi-Fi and personalized nursing support for a calm recovery.",
      image: img3, // replace with specific room image if available
      services: [
        { icon: <Stethoscope size={24} />, name: "Book Appointment" },
        { icon: <FileText size={24} />, name: "View Room Facilities" },
        { icon: <Activity size={24} />, name: "In-room Medical Services" },
        { icon: <Droplet size={24} />, name: "24×7 Nursing Care" },
      ],
    },
    {
      id: 4,
      title: "24×7 Emergency & Pharmacy Services",
      description: "ALWAYS READY",
      descriptions: "LIFE-SAVING CARE",
      shortDescription:
        "Round-the-clock ambulance, pharmacy and emergency teams ready to respond quickly and effectively.",
      image: img4,
      services: [
        { icon: <Stethoscope size={24} />, name: "Book Appointment" },
        { icon: <FileText size={24} />, name: "OPD Timings" },
        { icon: <Activity size={24} />, name: "Meet Our Doctors" },
        { icon: <Droplet size={24} />, name: "24×7 Emergency Care" },
      ],
    },
  ];

  const services = [
    "Health Assessments",
    "Home Medicine Review",
    "Fractures And Dislocations",
    "Desensitisation Injections",
  ];

  const departments = [
    {
      id: 1,
      title: "Neurology Clinic",
      description:
        "Some neurologists receive subspecialty training focusing on a particular area of the fields, these training programs called fellowships, and one to two years.",
      image:
        "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop",
      specialties: [
        "Neurocritical Care",
        "Neuro Oncolgy",
        "Geriatric Neurology",
      ],
    },
    {
      id: 2,
      title: "Cardiology Clinic",
      description:
        "All cardiologists study the disorders of the heart, but the study of adult and child heart disorders are trained to take care of small children...",
      image:
        "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=600&h=400&fit=crop",
      specialties: [
        "Neurocritical Care",
        "Neuro Oncolgy",
        "Geriatric Neurology",
      ],
    },
    {
      id: 3,
      title: "Pathology Clinic",
      description:
        "Pathology is the study of disease, it is the bridge between science and medicine. Also it underpins every aspect of patient care, from diagnostic testing...",
      image:
        "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&h=400&fit=crop",
      specialties: [
        "Neurocritical Care",
        "Neuro Oncolgy",
        "Geriatric Neurology",
      ],
    },
  ];

  const testimonials = [
    {
      id: 1,
      quote:
        "Their doctors include highly qualified practitioners who come from a range of backgrounds & bring with them a diversity of skills and special interests. They also registered nurses available to triage any urgent matters, and the administration and staff all have exceptional skills!!",
      author: "Sarthak",
      role: "Promina",
      avatar: boy,
    },
    {
      id: 2,
      quote:
        "The medical care provided was exceptional. The staff was professional, caring, and always available when needed. I highly recommend their services to anyone looking for quality healthcare.",
      author: "Nikhil Sarthak",
      role: "Healthcare Professional",
      avatar: boy1,
    },
    {
      id: 3,
      quote:
        "Outstanding service from start to finish. The doctors took time to explain everything clearly and the support team was incredibly helpful throughout my treatment journey.",
      author: "Khushi Naik",
      role: "Patient",
      avatar: girl,
    },
  ];

  return (
    <>
      {/* Hero Slider Section - FULLY RESPONSIVE */}
      <section className="relative w-full mt-16 sm:mt-20 md:mt-[80px] mb-24 sm:mb-32">
        <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px]">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-custom",
            }}
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="w-full h-full"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="relative w-full h-full">
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
                  </div>

                  {/* Content - RESPONSIVE */}
                  <div
                    className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center"
                    style={{
                      minHeight: "420px",
                    }}
                  >
                    <div className="w-full md:w-2/3 lg:w-3/4 xl:w-2/3 text-white">
                      {/* small animated line (TypeAnimation) */}
                      <TypeAnimation
                        sequence={[slide.title, 1000, "", 500]}
                        wrapper="p"
                        speed={50}
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed opacity-90"
                        repeat={Infinity}
                        cursor={true}
                      />

                      {/* Headline */}
                      <h1
                        className="mt-3 font-extrabold leading-tight text-white"
                        style={{ lineHeight: 1.02 }}
                      >
                        <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[72px] tracking-tight">
                          {slide.description}
                        </span>
                        <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[40px] xl:text-[48px] mt-1">
                          {slide.descriptions}
                        </span>
                      </h1>

                      {/* Short Description */}
                      <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200 max-w-3xl">
                        {slide.shortDescription}
                      </p>

                      {/* Service Cards - Updated Grid */}
                      <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3">
                        {slide.services.map((service, idx) => (
                          <button
                            key={idx}
                            type="button"
                            className="flex flex-col items-center justify-center gap-2 bg-white rounded-lg p-3 sm:p-4 shadow-md hover:shadow-lg transition transform hover:scale-[1.03] text-[#283B6A] group"
                          >
                            <div className="text-[#283B6A]  transition-colors">
                              {service.icon}
                            </div>
                            <span className="text-xs sm:text-sm md:text-base font-semibold text-center">
                              {service.name}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Custom Navigation Buttons - RESPONSIVE */}
            <button className="swiper-button-prev-custom absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-[#13C5DD] backdrop-blur-sm w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 group">
              <ChevronLeft
                size={20}
                className="text-white sm:w-6 sm:h-6 md:w-7 md:h-7"
              />
            </button>
            <button className="swiper-button-next-custom absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-[#13C5DD] backdrop-blur-sm w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 group">
              <ChevronRight
                size={20}
                className="text-white sm:w-6 sm:h-6 md:w-7 md:h-7"
              />
            </button>

            {/* Custom Pagination */}
            <div className="swiper-pagination-custom absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2 sm:gap-3"></div>
          </Swiper>

          {/* Info Cards Section - FULLY RESPONSIVE OVERLAY */}
          <div className="absolute bottom-0 left-0 right-0 top-[80%] sm:top-[70%] md:top-[70%] transform translate-y-1/2 z-20 px-3 sm:px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 shadow-2xl rounded-lg overflow-hidden">
                {/* Emergency Cases Card - RESPONSIVE */}
                <div className="bg-[#13C5DD] text-white p-6 sm:p-8 flex flex-col justify-between hover:bg-[#0FA8C0] transition-all duration-300">
                  <div className="mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 flex items-center justify-center">
                      <Phone
                        size={40}
                        className="text-white sm:w-12 sm:h-12"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                      Emergency Cases
                    </h3>
                    <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                      Please feel welcome to contact our staff with any general
                      or medical enquiry call us
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="bg-white/20 p-2 sm:p-3 rounded-lg">
                        <Phone size={16} className="text-white sm:w-5 sm:h-5" />
                      </div>
                      <a href="tel:+011-49785874">
                        <span className="text-xl sm:text-2xl font-bold">
                          011-49785874
                        </span>
                      </a>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="bg-white/20 p-2 sm:p-3 rounded-lg">
                        <Phone size={16} className="text-white sm:w-5 sm:h-5" />
                      </div>
                      <a href="tel:9210399470">
                        <span className="text-xl sm:text-2xl font-bold">
                          9210399470
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Doctors Timetable Card - RESPONSIVE */}
                <div className="bg-[#4A5F8F] text-white p-6 sm:p-8 flex flex-col justify-between hover:bg-[#3d4f7a] transition-all duration-300">
                  <div className="mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 flex items-center justify-center">
                      <Calendar
                        size={40}
                        className="text-white sm:w-12 sm:h-12"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                      Doctors Timetable
                    </h3>
                    <p className="text-white/90 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                      Qualified doctors available six days a week, view our
                      timetable to make an appointment.
                    </p>
                  </div>
                  <Link to="/Doctors-Timetable">
                    {" "}
                    <button className="border-2 border-white/40 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-white hover:text-[#4A5F8F] transition-all duration-300 flex items-center gap-2 text-sm sm:text-base">
                      <span className="w-4 sm:w-6 h-0.5 bg-white"></span>
                      View Timetable
                    </button>
                  </Link>
                </div>

                {/* Location Card - RESPONSIVE */}
                <div className="bg-[#25334f] text-white p-6 sm:p-8 flex flex-col justify-between hover:bg-[#283755] transition-all duration-300">
                  <div className="mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 flex items-center justify-center">
                      <Clock
                        size={40}
                        className="text-white sm:w-12 sm:h-12"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                      24x7 Emergency & Ambulance
                    </h3>
                    <p className="text-white/90 text-sm sm:text-md leading-relaxed mb-3 sm:mb-4">
                      Emergency & Ambulance
                    </p>
                    <p className="text-white/90 text-sm sm:text-md leading-relaxed mb-3 sm:mb-4">
                      24x7 Emergency Care Available
                    </p>
                  </div>
                  <a
                    href="tel:+919210399470"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="border-2 border-white/40 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-white hover:text-[#2f4166] transition-all duration-300 text-sm sm:text-base">
                      Call Now
                    </button>
                  </a>
                </div>

                {/* Location Card - RESPONSIVE */}
                <div className="bg-[#2f4166] text-white p-6 sm:p-8 flex flex-col justify-between hover:bg-[#283755] transition-all duration-300">
                  <div className="mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 flex items-center justify-center">
                      <MapPin
                        size={40}
                        className="text-white sm:w-12 sm:h-12"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                      Location, Directions
                    </h3>
                    <p className="text-white/90 text-sm sm:text-md leading-relaxed mb-3 sm:mb-4">
                      KH.NO-122/14.PLOT NO-2, 84, Bhagat Colony, Burari, Delhi,
                      110084
                    </p>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/u3t64QQ2kBsR7kj67"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="border-2 border-white/40 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-white hover:text-[#2f4166] transition-all duration-300 text-sm sm:text-base">
                      Get Directions
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CSS for animations */}
          <style jsx>{`
            @keyframes fadeInUp {
              from {
                opacity: 0;
                transform: translateY(30px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            .animate-fadeInUp {
              animation: fadeInUp 0.8s ease-out forwards;
            }
            .animation-delay-200 {
              animation-delay: 0.2s;
              opacity: 0;
            }
            .animation-delay-400 {
              animation-delay: 0.4s;
              opacity: 0;
            }
            .swiper-pagination-custom :global(.swiper-pagination-bullet) {
              width: 8px;
              height: 8px;
              background: white;
              opacity: 0.5;
              transition: all 0.3s ease;
            }
            @media (min-width: 640px) {
              .swiper-pagination-custom :global(.swiper-pagination-bullet) {
                width: 12px;
                height: 12px;
              }
            }
            .swiper-pagination-custom
              :global(.swiper-pagination-bullet-active) {
              background: #13c5dd;
              opacity: 1;
              width: 24px;
              border-radius: 6px;
            }
            @media (min-width: 640px) {
              .swiper-pagination-custom
                :global(.swiper-pagination-bullet-active) {
                width: 30px;
              }
            }
          `}</style>
        </div>
      </section>

      {/* About Section - RESPONSIVE */}
      <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-28 bg-gray-50 md:mt-[550px] lg:mt-[200px] sm:mt-[650px] mt-[1000px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mt-8 sm:mt-12 md:mt-16">
            {/* LEFT: Image (mobile: top, desktop: left) */}
            <div className="w-full">
              <div className="overflow-hidden rounded-2xl shadow-xl bg-white">
                <img
                  src={LotusFront}
                  alt="Lotus Multispeciality Hospital - Front view"
                  className="w-full h-[320px] sm:h-[380px] md:h-[440px] lg:h-[520px] object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>

            {/* RIGHT: Content */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0F2B4A] leading-tight">
                Caring for the health and well-being of you and your family
              </h2>

              <p className="text-[#283B6A] text-base sm:text-lg font-medium leading-relaxed max-w-xl">
                We provide comprehensive medical services for your whole family
                — from routine checkups to specialised care. Our
                multidisciplinary team works with you to create personalised
                care plans and, when needed, provides trusted referrals.
              </p>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl">
                Our commitment is to treat every enquiry sensitively, deliver
                safe evidence-based care, and ensure quick access in
                emergencies.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <Link to="/DoctorsPage" className="w-full sm:w-auto">
                  <button
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#13C5DD] hover:bg-[#0FA8C0] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                    aria-label="Find a doctor"
                  >
                    Find a Doctor
                    <ArrowRight size={18} />
                  </button>
                </Link>

                <Link to="/About-us" className="w-full sm:w-auto">
                  <button
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-[#283B6A] text-[#283B6A] px-6 py-3 rounded-lg font-semibold hover:bg-[#283B6A] hover:text-white transition-all duration-300"
                    aria-label="More about us"
                  >
                    More About Us
                  </button>
                </Link>
              </div>

              {/* Quick links / pills */}
              <div className="mt-2 flex flex-wrap gap-3">
                <Link
                  to="/Doctors-Timetable"
                  className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-md text-sm font-medium text-[#283B6A] shadow-sm hover:bg-white transition"
                  aria-label="OPD Timings"
                >
                  <Calendar size={16} /> OPD Timings
                </Link>
                <a href="tel:+"></a>
                <a
                  href="tel:9210399470"
                  className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-md text-sm font-medium text-[#283B6A] shadow-sm hover:bg-white transition"
                  aria-label="Book appointment"
                >
                  <Activity size={16} /> Book Appointment
                </a>

                <a
                  href="tel:01149785874"
                  className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-3 py-2 rounded-md text-sm font-semibold shadow-sm"
                  aria-label="Call Emergency Number"
                >
                  <Phone size={16} /> 24×7 Emergency
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SpecialtiesSection />
      <WhyLotusHospital />

      <OurFacilities />

      {/* Medical Departments Section - RESPONSIVE */}

      {/* Since 1987 Quality Care Section - FULLY RESPONSIVE */}
      <section className="w-full py-10 sm:py-12 md:py-16 bg-[#0F2142] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 gap-10">
            {/* Top Content */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-24">
              {/* Left: Year */}
              <div className="text-center lg:text-left">
                <p className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-wide">
                  Sets The Standard For High Quality Care Since
                </p>
                <h2 className="mt-2 text-6xl sm:text-7xl md:text-8xl lg:text-[96px] xl:text-[120px] font-bold leading-none">
                  2002
                </h2>
              </div>

              {/* Right: Content */}
              <div className="max-w-xl space-y-4 sm:space-y-6 text-center lg:text-left">
                <p className="text-white/90 text-sm sm:text-base">
                  Our doctors include highly qualified male and female
                  practitioners from diverse backgrounds, bringing a wide range
                  of expertise. Our administration and support staff are trained
                  to assist you with all medical enquiries with care and
                  professionalism.
                </p>

                <p className="text-white/70 text-xs sm:text-sm">
                  We are committed to delivering ethical, compassionate, and
                  advanced healthcare services for every patient.
                </p>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <button className="rounded-lg bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-cyan-500 w-full sm:w-auto">
                    Our Core Values
                  </button>

                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Users size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">
                        Mr. Sunil Dutt
                      </div>
                      <div className="text-white/70 text-xs">
                        M.D., Founder & Managing Director
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cards Section */}
            <div className="flex flex-col items-center">
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 place-items-center text-center">
                <CardItem
                  Icon={Stethoscope}
                  title="Expert Medical Consultation"
                  description="Consult experienced specialists with confidence"
                />
                <CardItem
                  Icon={BookOpen}
                  title="Trusted Medical Treatment"
                  description="High-quality care by qualified doctors"
                />
                <CardItem
                  Icon={Heart}
                  title="24×7 Emergency Services"
                  description="Immediate medical care available anytime"
                />
                <CardItem
                  Icon={Users}
                  title="Qualified & Experienced Doctors"
                  description="Certified professionals you can trust"
                />
              </div>

              <div className="mt-4 sm:mt-6 text-center">
                <p className="text-white/80 text-xs sm:text-sm">
                  Delivering advanced and compassionate healthcare for your
                  family.{" "}
                  <Link
                    to="/Doctors-Timetable"
                    className="text-cyan-400 underline-offset-4 hover:underline"
                  >
                    View Doctors&apos; Timetable
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MediaGallery />
      <LogoCarousel />

      {/* Programs + Testimonials Section - FULLY RESPONSIVE */}
      <section className="relative w-full bg-gradient-to-b from-white to-gray-50 py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Top Cards Row - RESPONSIVE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
            {/* Healthcare Programs Card */}
            <div className="group relative bg-white rounded-2xl shadow-[0_12px_40px_rgba(18,38,63,0.08)] p-6 sm:p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(18,38,63,0.12)]">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-xl bg-cyan-50 flex items-center justify-center">
                  <BriefcaseMedical
                    className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-[#13C5DD]"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#283B6A] font-bold text-lg sm:text-xl mb-2 sm:mb-3">
                    Healthcare Programs
                  </h3>
                  <p className="text-[#283B6A]/70 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                    We have put protocols to protect our patients to provide
                    medically necessary care.
                  </p>
                  <Link
                    to="/Admission"
                    className="inline-flex items-center gap-2 text-[#13C5DD] text-xs sm:text-sm font-semibold hover:underline underline-offset-4 transition-all duration-200"
                  >
                    Explore Programs
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#13C5DD] to-cyan-400 rounded-b-2xl"></div>
            </div>

            {/* Locations & Directions Card */}
            <div className="group relative bg-white rounded-2xl shadow-[0_12px_40px_rgba(18,38,63,0.08)] p-6 sm:p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(18,38,63,0.12)]">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-xl bg-[#283B6A]/5 flex items-center justify-center">
                  <MapPin
                    className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-[#283B6A]"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-[#283B6A] font-bold text-lg sm:text-xl mb-2 sm:mb-3">
                    Locations & Directions
                  </h3>

                  <p className="text-[#283B6A]/70 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                    Feel welcome to contact our friendly reception staff, our
                    doctors will receive your urgent calls.
                  </p>
                  <a
                    href="https://maps.app.goo.gl/u3t64QQ2kBsR7kj67"
                    className="inline-flex items-center gap-2 text-[#283B6A] text-xs sm:text-sm font-semibold hover:underline underline-offset-4 transition-all duration-200"
                  >
                    Get Directions
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#283B6A]/20 rounded-b-2xl"></div>
            </div>
          </div>

          {/* Image Collage + Testimonial Section - RESPONSIVE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Left - Image Collage */}
            <div className="lg:col-span-5 relative">
              {/* Decorative shapes */}
              <div className="hidden sm:block absolute -top-8 -left-8 w-24 h-24 sm:w-32 sm:h-32 bg-cyan-200/15 rounded-3xl -z-10"></div>
              <div className="hidden sm:block absolute top-20 -right-6 w-20 h-20 sm:w-24 sm:h-24 bg-cyan-100/20 rounded-2xl -z-10"></div>
              <div className="hidden sm:block absolute -bottom-6 left-10 w-24 h-24 sm:w-28 sm:h-28 bg-cyan-300/10 rounded-[2rem] -z-10"></div>

              {/* Main Image */}
              <div className="relative z-10">
                <img
                  src={Sunil}
                  alt="Doctor at Lotus Multispeciality Hospital"
                  className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>

            {/* Right - Testimonials */}
            <div className="lg:col-span-7 mt-16 sm:mt-0">
              <p className="text-[#13C5DD] font-bold text-xs sm:text-sm uppercase tracking-wider mb-4 sm:mb-6">
                Trusted by Families Across Our Community
              </p>

              <div className="relative">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  pagination={{
                    clickable: true,
                    el: ".custom-pagination",
                    bulletClass: "custom-bullet",
                    bulletActiveClass: "custom-bullet-active",
                  }}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  loop
                  spaceBetween={30}
                  className="testimonial-swiper pb-4"
                >
                  {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                      <div className="animate-fadeInUp">
                        <blockquote className="relative">
                          {/* Quote */}
                          <span className="absolute -top-2 sm:-top-4 -right-1 sm:-right-2 text-7xl sm:text-8xl md:text-[120px] text-[#283B6A]/5 leading-none select-none font-serif">
                            "
                          </span>

                          <p className="relative text-[#283B6A] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6">
                            {testimonial.quote}
                          </p>

                          {/* Author */}
                          <div className="flex items-center gap-3 sm:gap-4">
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.author}
                              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover shadow-md"
                            />
                            <div>
                              <div className="text-[#283B6A] font-bold text-sm sm:text-base">
                                {testimonial.author}
                              </div>
                              <div className="text-[#283B6A]/60 text-xs sm:text-sm">
                                {testimonial.role}
                              </div>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Pagination */}
                <div className="custom-pagination flex justify-end gap-2 mt-4 sm:mt-6"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom styles for pagination */}
        <style jsx>{`
          :global(.custom-bullet) {
            width: 8px;
            height: 8px;
            background: #283b6a;
            opacity: 0.3;
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          @media (min-width: 640px) {
            :global(.custom-bullet) {
              width: 10px;
              height: 10px;
            }
          }
          :global(.custom-bullet-active) {
            background: #13c5dd;
            opacity: 1;
            width: 8px;
            height: 8px;
          }
          @media (min-width: 640px) {
            :global(.custom-bullet-active) {
              width: 10px;
              height: 10px;
            }
          }
          :global(.custom-bullet:hover) {
            opacity: 0.6;
          }
        `}</style>
      </section>

      <OurDoctor />

      {/* Steps Section - FULLY RESPONSIVE */}
      <section className="w-full bg-white pt-10 sm:pt-12 md:pt-16 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col gap-6 sm:gap-8 md:gap-10">
          {/* Header Row - RESPONSIVE */}
          <div className="flex flex-col md:flex-row md:items-start md:gap-8">
            <div className="md:w-2/5 mb-4 md:mb-0">
              <p className="text-[#13C5DD] font-semibold text-xs sm:text-sm mb-2 uppercase">
                Caring For The Health Of You And Your Family.
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#283B6A] mb-3 sm:mb-4 leading-tight">
                We Provide All Aspects Of Medical Practice For Your Whole
                Family!
              </h2>
            </div>
            <div className="md:w-3/5 flex flex-col gap-2 sm:gap-3">
              <p className="text-gray-500 text-xs sm:text-sm md:text-base mb-2">
                We pride ourselves on providing the best transport and shipping
                services available allover the world. Our skilled personnel and
                processing software, combined with decades of experience!
                Through integrated supply chain solutions, Equita drives
                sustainable competitive advantages...
              </p>
              <ul className="mt-2 mb-2 flex flex-col gap-1.5 sm:gap-2">
                <li className="flex items-center gap-2 text-[#13C5DD] text-xs sm:text-sm">
                  <CheckCircle2
                    size={16}
                    className="flex-shrink-0 sm:w-[18px] sm:h-[18px]"
                  />{" "}
                  Quality Control System
                </li>
                <li className="flex items-center gap-2 text-[#13C5DD] text-xs sm:text-sm">
                  <CheckCircle2
                    size={16}
                    className="flex-shrink-0 sm:w-[18px] sm:h-[18px]"
                  />{" "}
                  Unrivalled Workmanship
                </li>
                <li className="flex items-center gap-2 text-[#13C5DD] text-xs sm:text-sm">
                  <CheckCircle2
                    size={16}
                    className="flex-shrink-0 sm:w-[18px] sm:h-[18px]"
                  />{" "}
                  100% Satisfaction Guarantee
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Steps Row - RESPONSIVE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 border-t border-gray-100 py-6 sm:py-8 md:py-10 w-full mt-6 sm:mt-10 md:mt-15 px-4 sm:px-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-2 px-4 sm:px-5 md:px-6 py-4 sm:py-5 md:py-6 border-b sm:border-b-0 sm:border-r border-gray-100 last:border-none bg-white group"
            >
              <div className="mb-1 text-gray-300 font-bold text-lg sm:text-xl">
                {step.number}
              </div>
              <div className="mb-2">
                <step.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#283B6A]" />
              </div>
              <h3 className="font-semibold text-[#283B6A] text-sm sm:text-base mb-1">
                {step.title}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm mb-2 sm:mb-3">
                {step.description}
              </p>
              <a
                href={step.linkHref}
                className="inline-block text-[#283B6A] font-semibold text-xs sm:text-sm border-b border-[#13C5DD] pb-0.5 hover:text-[#13C5DD] transition-colors duration-200"
              >
                {step.linkText}
              </a>
            </div>
          ))}
        </div>
      </section>

      <BookAppointmain />
    </>
  );
};

export default HeroSection;
