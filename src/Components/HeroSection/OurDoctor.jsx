import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const OurDoctor = () => {
  const doctors = [
    {
      id: 1,
      name: "Dupree Black",
      specialty: "Urologist",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop",
      description:
        "Black diagnose and treat diseases of the urinary tract in both men and women. He also diagnose and treat anything involving...",
    },
    {
      id: 2,
      name: "Markus Skar",
      specialty: "Laboratory",
      image:
        "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop",
      description:
        "Skar play a very important role in your health care. People working in the clinical laboratory are responsible for conducting tests.",
    },
    {
      id: 3,
      name: "Kiano Barker",
      specialty: "Pathologist",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop",
      description:
        "Barker help care for patients every day by providing their doctors with the information needed to ensure appropriate care.",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      specialty: "Cardiologist",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop",
      description:
        "Johnson specializes in diagnosing and treating heart conditions. She provides comprehensive cardiac care with latest technology.",
    },
    {
      id: 5,
      name: "Michael Chen",
      specialty: "Neurologist",
      image:
        "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=500&fit=crop",
      description:
        "Chen is an expert in treating disorders of the nervous system, including the brain, spinal cord, and nerves.",
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
        <div className=" flex flex-col md:flex-row items-center justify-between gap-6  rounded-2xl  p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-[#13C5DD]/10 rounded-lg flex items-center justify-center">
              <Calendar className="text-[#13C5DD]" size={24} />
            </div>
            <div>
              <p className="text-gray-700 text-sm md:text-base">
                <span className="font-semibold text-[#283B6A]">On Monday,</span>{" "}
                Doctors will be available from 8 am : 12 am, kindly call to
                confirm your Appointment
              </p>
            </div>
          </div>
          <Link to="/Doctors-Timetable">
            <button className="flex-shrink-0 bg-[#13C5DD] hover:bg-[#0FA8C0] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-xl flex items-center gap-2">
              Make Appointment
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </button>
          </Link>
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
