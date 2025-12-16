import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import image1 from '../../assets/Image1.jpg';
import image2 from '../../assets/Image2.jpg';
import image3 from "../../assets/lotus-multispeciality-hospital-burari-delhi-hospitals-ov8dtwcf9e.jpg";
import image4 from "../../assets/lotus-multispeciality-hospital-burari-delhi-hospitals-p2fl3cvgg5-250.jpg";
import image5 from "../../assets/lotus-multispeciality-hospital-burari-delhi-hospitals-tk86l7gabv.jpg";

const Service = () => {
  return (
    <div>
      <section
        className="relative w-full h-[340px] md:h-[420px] bg-cover bg-center mt-35"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1920&h=900&fit=crop)",
        }}
      >
        <div className="absolute inset-0 bg-[#1B5FA3]/70"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Our Services
          </h1>
          <div className="mt-6 flex items-center gap-2 text-white/90">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span>›</span>
            <Link to="/doctors" className="hover:text-white">
              Doctors
            </Link>
            <span>›</span>
            <span className="text-white">Services</span>
          </div>
        </div>
      </section>
      <section>
        <div className="grid grid-cols-2 gap-4 px-10 py-5 justify-center items-center max-w-10/12 mx-auto">
          <img src={image1} alt="" className=" h-[450px] w-[700px]" />
          <div>
            <h1 className="text-3xl font-bold text-[#283B6A] mb-2">
              Our Services
            </h1>
            <p className="text-gray-600 text-base leading-relaxed">
              At Lotus Hospital, we offer a wide range of healthcare services to
              meet the diverse needs of our patients. Our services include all
              types of medical care, including primary care, specialty care,
              preventive care, and emergency care. We also offer a range of
              specialized services, such as diagnostic imaging, laboratory
              services, and surgical procedures. Our team of experienced
              healthcare professionals is dedicated to providing the highest
              quality care to our patients, and we are committed to ensuring
              their well-being.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 px-10 py-5 justify-center items-center max-w-10/12 mx-auto">
          <div>
            <h1 className="text-3xl font-bold text-[#283B6A] mb-2">
              Our Services
            </h1>
            <p className="text-gray-600 text-base leading-relaxed">
              At Lotus Hospital, we offer a wide range of healthcare services to
              meet the diverse needs of our patients. Our services include all
              types of medical care, including primary care, specialty care,
              preventive care, and emergency care. We also offer a range of
              specialized services, such as diagnostic imaging, laboratory
              services, and surgical procedures. Our team of experienced
              healthcare professionals is dedicated to providing the highest
              quality care to our patients, and we are committed to ensuring
              their well-being.
            </p>
          </div>
          <img src={image2} alt="" className=" h-[450px] w-[700px]" />
        </div>
        <div className="grid grid-cols-2 gap-4 px-10 py-5 justify-center items-center max-w-10/12 mx-auto">
          <img src={image4} alt="" className=" h-[450px] w-[700px]" />
          <div>
            <h1 className="text-3xl font-bold text-[#283B6A] mb-2">
              Our Services
            </h1>
            <p className="text-gray-600 text-base leading-relaxed">
              At Lotus Hospital, we offer a wide range of healthcare services to
              meet the diverse needs of our patients. Our services include all
              types of medical care, including primary care, specialty care,
              preventive care, and emergency care. We also offer a range of
              specialized services, such as diagnostic imaging, laboratory
              services, and surgical procedures. Our team of experienced
              healthcare professionals is dedicated to providing the highest
              quality care to our patients, and we are committed to ensuring
              their well-being.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 px-10 py-5 justify-center items-center max-w-10/12 mx-auto">
          <div>
            <h1 className="text-3xl font-bold text-[#283B6A] mb-2">
              Our Services
            </h1>
            <p className="text-gray-600 text-base leading-relaxed">
              At Lotus Hospital, we offer a wide range of healthcare services to
              meet the diverse needs of our patients. Our services include all
              types of medical care, including primary care, specialty care,
              preventive care, and emergency care. We also offer a range of
              specialized services, such as diagnostic imaging, laboratory
              services, and surgical procedures. Our team of experienced
              healthcare professionals is dedicated to providing the highest
              quality care to our patients, and we are committed to ensuring
              their well-being.
            </p>
          </div>
          <img src={image4} alt="" className=" h-[450px] w-[450px]" />
        </div>
        <div className="grid grid-cols-2 gap-4 px-10 py-5 justify-center items-center max-w-10/12 mx-auto">
          <img src={image5} alt="" className=" h-[450px] w-[450px]" />
          <div>
            <h1 className="text-3xl font-bold text-[#283B6A] mb-2">
              Our Services
            </h1>
            <p className="text-gray-600 text-base leading-relaxed">
              At Lotus Hospital, we offer a wide range of healthcare services to
              meet the diverse needs of our patients. Our services include all
              types of medical care, including primary care, specialty care,
              preventive care, and emergency care. We also offer a range of
              specialized services, such as diagnostic imaging, laboratory
              services, and surgical procedures. Our team of experienced
              healthcare professionals is dedicated to providing the highest
              quality care to our patients, and we are committed to ensuring
              their well-being.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
