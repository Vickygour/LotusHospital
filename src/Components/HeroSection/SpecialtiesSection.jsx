import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import your actual icons from assets
import gynecology from '../../assets/GynoVector/gynoicon.svg';
import dental from '../../assets/GynoVector/dentalIcon.svg';
import lapro from '../../assets/GynoVector/laproicon.svg';
import urology from '../../assets/GynoVector/urologyicon.svg';
import ent from '../../assets/GynoVector/enticon.svg';
import physi from '../../assets/GynoVector/physiicon.svg';
import pedi from '../../assets/GynoVector/child_careicon.svg';
import xray from '../../assets/GynoVector/xrayicon.svg';
import lab from '../../assets/GynoVector/laboicon.svg';
import ortho from '../../assets/GynoVector/orthoicon.svg';
import ultra from '../../assets/GynoVector/ultraicon.svg';
import pulmo from '../../assets/GynoVector/pulmonaryicon.svg';
import ecg from '../../assets/GynoVector/Copilot_20251129_152104.png';
import color from '../../assets/GynoVector/a2vcolor.svg';
import echo from '../../assets/GynoVector/Echocardiographyicon.svg';
import laser from '../../assets/GynoVector/a2vlaser.svg';

const SpecialtiesSection = () => {
  const [activeTab, setActiveTab] = useState('specialities');

  // Specialities Data
  const specialities = [
    {
      icon: gynecology,
      name: 'Obstetric and Gynaecology',
      path: '/facilities/Gynecology',
    },
    {
      icon: lapro,
      name: 'Laparoscopic Surgery',
      path: '/facilities/Laparoscopic',
    },
    {
      icon: dental,
      name: 'Dental and Cosmetics',
      path: '/facilities/Dental',
    },
    {
      icon: laser,
      name: 'Laser Surgery',
      path: '/facilities/Laser',
    },
    {
      icon: urology,
      name: 'Urological Surgery',
      path: '/facilities/urological',
    },
    {
      icon: physi,
      name: 'Physiotherapy',
      path: '/facilities/physiotherapy',
    },
    {
      icon: pedi,
      name: 'Pediatrics',
      path: '/facilities/pediatrics',
    },
    {
      icon: ent,
      name: 'ENT',
      path: '/facilities/Ent',
    },
  ];

  // Procedures/Radiology Data
  const procedures = [
    {
      icon: ecg,
      name: 'ECG',
      path: '/Radiology/ecg',
    },
    {
      icon: color,
      name: 'Color Doppler',
      path: '/Radiology/color-doppler',
    },
    {
      icon: lab,
      name: 'Path Lab',
      path: '/Radiology/path-lab',
    },
    {
      icon: xray,
      name: 'X-Ray',
      path: '/Radiology/XRay',
    },
    {
      icon: ultra,
      name: 'Ultra-Sound',
      path: '/Radiology/ultrasound',
    },
    {
      icon: echo,
      name: 'Echocardiography',
      path: '/Radiology/echo',
    },
    {
      icon: pulmo,
      name: 'Pulmonary',
      path: '/Radiology/pulmonary',
    },
    {
      icon: ortho,
      name: 'ORTHO',
      path: '/Radiology/ortho',
    },
  ];

  const currentData = activeTab === 'specialities' ? specialities : procedures;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h3 className="text-[#283B6A] text-sm font-semibold uppercase tracking-wide mb-2">
            Specialities and Procedures
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-[#283B6A] mb-8">
            An Ecosystem for Clinical Excellence
          </h2>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('specialities')}
              className={`px-8 py-3 rounded-md font-medium transition-colors ${
                activeTab === 'specialities'
                  ? 'bg-[#13C5DD] text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
              }`}
            >
              Our Specialities
            </button>
            <button
              onClick={() => setActiveTab('procedures')}
              className={`px-8 py-3 rounded-md font-medium transition-colors ${
                activeTab === 'procedures'
                  ? 'bg-[#13C5DD] text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
              }`}
            >
              Our Procedures
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="relative px-12">
          <Swiper
            key={activeTab} // Force re-render on tab change
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: '.custom-prev',
              nextEl: '.custom-next',
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
            className="specialties-swiper"
          >
            {currentData.map((item, index) => (
              <SwiperSlide key={index}>
                <a
                  href={item.path}
                  className="block bg-white rounded-xl p-6 flex flex-col items-center justify-center text-center hover:shadow-xl transition-all duration-300 cursor-pointer group h-44 border border-gray-100"
                >
                  <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-700 group-hover:text-[#13C5DD] transition-colors leading-tight">
                    {item.name}
                  </h4>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-[#13C5DD] hover:text-white transition-all duration-300 group">
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-white" />
          </button>
          <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-[#13C5DD] hover:text-white transition-all duration-300 group">
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
