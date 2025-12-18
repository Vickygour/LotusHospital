import React, { useState, useEffect } from "react";
import AboutTop from "./AboutTop";
import HealthCareSection from "./HealthCareSection";
import WhylotusHospitals from "../HeroSection/WhyLotusHospital";
import img1 from "../../assets/banner1.jpg";
import {
  Stethoscope,
  FileText,
  Heart,
  Award,
  Users,
  ChevronDown,
  Plus,
  Minus,
  CheckCircle2,
  Activity,
  Baby,
  Scissors,
  AlertCircle,
  UserCheck,
  Building2,
  Shield,
  Quote,
} from "lucide-react";
import OurDoctor from "../HeroSection/OurDoctor";
import MissionVision from "../MissionVision";

const AboutMain = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(3);
  const [expandedDept, setExpandedDept] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

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
      linkHref: "/room-facilities",
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

  const services = [
    {
      id: 1,
      icon: Stethoscope,
      title: "Medical Advices & Check Ups",
      description:
        "Consult our doctors any time for professional medical advice and comprehensive health check-ups.",
    },
    {
      id: 2,
      icon: FileText,
      title: "Trusted Medical Treatment",
      description:
        "We provide evidence-based treatment plans tailored to your specific health needs.",
    },
    {
      id: 3,
      icon: Heart,
      title: "Emergency Help Available",
      description:
        "24/7 emergency services available with rapid response from our qualified medical team.",
    },
    {
      id: 4,
      icon: Award,
      title: "Medical Research",
      description:
        "Our facility conducts cutting-edge medical research to improve healthcare outcomes.",
    },
    {
      id: 5,
      icon: Users,
      title: "Only Qualified Doctors",
      description:
        "All our doctors are board-certified with years of experience in their specialties.",
    },
  ];

  const faqs = [
    {
      id: 1,
      question: "Which Plan Is Right For Me?",
      answer:
        "Our staff strives to make each interaction with patients clear, concise, and inviting. Support the important work of Medisch Hospital by making a much-needed donation today. We will work with you to develop individualised care plans, including management of chronic diseases.",
    },
    {
      id: 2,
      question: "Do I Have To Commit To A Contract?",
      answer:
        "No long-term contracts required. You can choose monthly or annual plans based on your needs. Cancel anytime with 30 days notice. We believe in providing flexible healthcare solutions that work for your lifestyle.",
    },
    {
      id: 3,
      question: "What Payment Methods Are Available?",
      answer:
        "We accept all major credit cards, debit cards, bank transfers, insurance claims, and cash payments. We also offer EMI options for major procedures and work with most major insurance providers.",
    },
  ];

  const departments = [
    {
      id: 1,
      icon: AlertCircle,
      title: "Critical Care (ICU)",
      description:
        "Advanced intensive care services for critical conditions with 24/7 monitoring and expert medical staff.",
    },
    {
      id: 2,
      icon: Activity,
      title: "Internal Medicine",
      description:
        "Expertise in managing chronic diseases like Diabetes & Hypertension with personalized treatment plans.",
    },
    {
      id: 3,
      icon: Heart,
      title: "Cardiology",
      description:
        "Comprehensive heart care and preventive cardiology programs for a healthier heart.",
    },
    {
      id: 4,
      icon: Users,
      title: "Orthopaedics",
      description:
        "Trauma, fracture management, and joint replacement surgeries performed by expert surgeons.",
    },
    {
      id: 5,
      icon: Baby,
      title: "Obstetrics & Gynaecology",
      description:
        "Complete maternity care from conception to delivery with compassionate support.",
    },
    {
      id: 6,
      icon: Baby,
      title: "Pediatrics & Neonatal Care",
      description:
        "Specialized care for newborns and children with state-of-the-art facilities.",
    },
    {
      id: 7,
      icon: Scissors,
      title: "General & Laparoscopic Surgery",
      description:
        "Minimally invasive surgical procedures for faster recovery and better outcomes.",
    },
    {
      id: 8,
      icon: Stethoscope,
      title: "Radiology & Diagnostics",
      description:
        "Equipped with advanced Ultrasonography and Digital X-Ray facilities for accurate diagnosis.",
    },
  ];

  const whyChooseUs = [
    {
      id: 1,
      icon: UserCheck,
      title: "Experienced Professionals",
      description: "Highly qualified and compassionate medical professionals",
    },
    {
      id: 2,
      icon: AlertCircle,
      title: "24×7 Emergency Services",
      description: "Round-the-clock emergency and ICU services available",
    },
    {
      id: 3,
      icon: Building2,
      title: "Modern Facilities",
      description: "Advanced diagnostic and surgical facilities",
    },
    {
      id: 4,
      icon: Heart,
      title: "Patient-Friendly Environment",
      description: "Caring staff and comfortable patient environment",
    },
  ];

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  // const toggleDept = (id) => {
  //   if (isMobile) {
  //     setExpandedDept(expandedDept === id ? null : id);
  //   }
  // };

  return (
    <>
      <AboutTop />

      {/* Key Departments Section */}
      {/* <section className="relative w-full bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <p className="text-[#13C5DD] font-semibold text-xs sm:text-sm lg:text-base mb-2 sm:mb-3 uppercase tracking-wide">
              Our Medical Services
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-[#283B6A] leading-tight sm:leading-tight lg:leading-tight px-4">
              Our Key Departments
            </h2>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-7">
            {departments.map((dept) => (
              <div
                key={dept.id}
                className="bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border-2 border-gray-100 hover:border-[#13C5DD] transition-all duration-300 cursor-pointer group"
                onClick={() => isMobile && toggleDept(dept.id)}
                onMouseEnter={() => !isMobile && setExpandedDept(dept.id)}
                onMouseLeave={() => !isMobile && setExpandedDept(null)}
              >
                <div className="mb-3 sm:mb-4 md:mb-5 flex justify-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#13C5DD] to-[#0FA8C0] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <dept.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-[#283B6A] font-bold text-base sm:text-lg md:text-xl text-center mb-2 sm:mb-3 md:mb-4 min-h-[3rem] sm:min-h-[3.5rem] md:min-h-[4rem] flex items-center justify-center px-1 sm:px-2">
                  {dept.title}
                </h3>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedDept === dept.id
                      ? 'max-h-40 md:max-h-48 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base text-center leading-relaxed sm:leading-loose">
                    {dept.description}
                  </p>
                </div>
                {isMobile && (
                  <div className="flex justify-center mt-3">
                    <ChevronDown
                      className={`w-5 h-5 text-[#13C5DD] transition-transform duration-300 ${
                        expandedDept === dept.id ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Choose Us Section */}

      <HealthCareSection />
      <MissionVision />
      <WhylotusHospitals />
      <OurDoctor />

      {/* Quality Care Section */}
      <section className="relative w-full bg-gradient-to-br from-[#13C5DD] to-[#0FA8C0] py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="hidden md:block absolute top-10 sm:top-20 right-10 sm:right-20 w-40 sm:w-64 h-40 sm:h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="hidden md:block absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-48 sm:w-96 h-48 sm:h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="hidden lg:block absolute top-20 sm:top-40 left-1/3 w-32 sm:w-48 h-32 sm:h-48 bg-white/5 rounded-full blur-2xl"></div>
        </div>

        {/* Top Right Decorative Circles */}
        <div className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-8 flex items-center gap-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white/30 rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* Top Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            {/* Left - Heading */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-white leading-tight sm:leading-tight lg:leading-tight">
                Sets The Standard For High Quality Care And Patient Safety!!
              </h2>
            </div>

            {/* Right - Description + Buttons */}
            <div className="flex flex-col justify-between">
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose">
                  Our doctors include highly qualified male and female
                  practitioners who come from a range of backgrounds and bring a
                  diversity of skills. Our administration and support staff all
                  have exceptional people skills.
                </p>
                <p className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose">
                  Our administration and support staff all have exceptional
                  people skills and trained to assist you with all medical
                  enquiries.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-4 sm:mt-6 md:mt-8">
                <button className="border-2 border-white text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg md:rounded-xl font-semibold text-sm sm:text-base md:text-lg hover:bg-white hover:text-[#13C5DD] transition-all duration-300 text-center">
                  Make Appointment
                </button>
                <button  className="bg-white text-[#283B6A] px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg md:rounded-xl font-semibold text-sm sm:text-base md:text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl text-center">
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`relative group bg-[#13C5DD]/40 backdrop-blur-sm border border-white/20 p-4 sm:p-6 md:p-8 transition-all duration-300 hover:bg-[#0FA8C0]/60 cursor-pointer ${
                  index === 0 ? "rounded-tl-lg sm:rounded-tl-2xl" : ""
                } ${index === 1 ? "sm:rounded-tr-2xl lg:rounded-none" : ""} ${
                  index === services.length - 1 ? "lg:rounded-tr-2xl" : ""
                } ${index === 2 ? "md:rounded-tr-2xl lg:rounded-none" : ""}`}
                onMouseEnter={() => !isMobile && setExpandedCard(service.id)}
                onMouseLeave={() => !isMobile && setExpandedCard(null)}
                onClick={() =>
                  isMobile &&
                  setExpandedCard(
                    expandedCard === service.id ? null : service.id
                  )
                }
              >
                {/* Icon */}
                <div className="mb-3 sm:mb-4 md:mb-6 flex justify-center">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center">
                    <service.icon
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-14 text-white"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-base sm:text-lg md:text-xl text-center mb-2 sm:mb-3 md:mb-4 min-h-[3rem] sm:min-h-[3.5rem] md:min-h-[4rem] flex items-center justify-center px-1">
                  {service.title}
                </h3>

                {/* Expandable Description */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedCard === service.id
                      ? "max-h-40 sm:max-h-48 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-white/90 text-xs sm:text-sm md:text-base text-center leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Chevron Indicator */}
                <div className="mt-2 sm:mt-3 md:mt-4 flex justify-center">
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-white/60 transition-transform duration-300 ${
                      expandedCard === service.id ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Bottom Border Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/0 group-hover:bg-white/30 transition-all duration-300"></div>
              </div>
            ))}
          </div>

          {/* Bottom Pagination Dots */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/40 rounded-full"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white/40 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Global Help Section */}

      {/* Our Promise Section */}
      <section className="relative w-full bg-gradient-to-br from-[#283B6A] to-[#1a2847] py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="hidden md:block absolute top-10 sm:top-20 right-10 sm:right-20 w-40 sm:w-64 h-40 sm:h-64 bg-[#13C5DD]/10 rounded-full blur-3xl"></div>
          <div className="hidden md:block absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-48 sm:w-96 h-48 sm:h-96 bg-[#13C5DD]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-white leading-tight sm:leading-tight lg:leading-tight mb-3 sm:mb-4 md:mb-6">
            Our Promise To You
          </h2>
          <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed sm:leading-loose max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-8">
            Lotus Hospital continues to move forward with one mission — to make
            quality healthcare accessible and affordable for everyone. Whether
            it's welcoming a newborn, saving a life in an emergency, or offering
            long-term medical support, we're here every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <button className="border-2 border-white text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg md:rounded-xl font-semibold text-sm sm:text-base md:text-lg hover:bg-white hover:text-[#283B6A] transition-all duration-300 text-center">
              Our Services
            </button>
            <button className="bg-[#13C5DD] hover:bg-[#0FA8C0] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg md:rounded-xl font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl text-center">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="w-full bg-white  pb-4">
        {/* Steps Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-gray-100 py-6 sm:py-8 md:py-10 lg:py-12 w-full mt-4 sm:mt-6 md:mt-8 lg:mt-10 px-4 sm:px-6 lg:px-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-2 sm:gap-3 px-4 sm:px-5 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6 lg:py-8 border-b sm:border-b-0 sm:border-r border-gray-100 last:border-none bg-white group hover:bg-gray-50 transition-colors duration-300"
            >
              <div className="mb-1 text-gray-300 font-bold text-lg sm:text-xl md:text-2xl">
                {step.number}
              </div>
              <div className="mb-2 sm:mb-3">
                <step.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-[#283B6A]" />
              </div>
              <h3 className="font-semibold text-[#283B6A] text-sm sm:text-base md:text-lg lg:text-xl mb-1 sm:mb-2">
                {step.title}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm md:text-base mb-2 sm:mb-3 md:mb-4">
                {step.description}
              </p>
              <a
                href={step.linkHref}
                className="inline-block text-[#283B6A] font-semibold text-xs sm:text-sm md:text-base border-b border-[#13C5DD] pb-1 hover:text-[#13C5DD] transition-colors duration-200 w-fit"
              >
                {step.linkText}
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutMain;
