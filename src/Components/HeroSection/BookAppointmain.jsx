import React, { useState } from "react";
import { Heart, HelpCircle, Calendar, Clock } from "lucide-react";
import india from "../../assets/india2.png";

const BookAppointmain = () => {
  const [formData, setFormData] = useState({
    clinic: "Bathology Clinic",
    doctor: "Michael Brian",
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Data:", formData);
    // Handle form submission
  };

  return (
    <section className="relative py-20 lg:py-28 bg-cyan-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-20">
        {/* ===== Left Content ===== */}
        <div className="text-white max-w-lg">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Helping Patients From <br />
            <span className="text-white">Around The Globe!!</span>
          </h2>

          <p className="text-white/90 text-lg mb-8">
            Our staff strives to make each interaction with patients clear,
            concise, and inviting. Support the important work of Medisch
            Hospital by making a much-needed donation today.
          </p>

          <div className="flex items-center gap-4">
            <button className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-cyan-50 transition">
              Make A Gift ❤️
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition">
              Help & FAQs
            </button>
          </div>

          <div>
            <img src={india} alt="Doctors" className="mt-10 " />
          </div>
        </div>

        {/* ===== Right Side Form ===== */}
        <div className="bg-white  p-8 w-full max-w-xxl py-15">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Book An Appointment
          </h3>
          <p className="text-gray-500 text-sm mb-10">
            Please feel welcome to contact our staff with any general or medical
            enquiry. Our doctors will receive or return any urgent calls.
          </p>

          <form className="space-y-4">
            <div className="flex gap-3 mb-6">
              <select className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500">
                <option>Pathology Clinic</option>
                <option>Dental Clinic</option>
                <option>Heart Center</option>
              </select>
              <select className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500">
                <option>Michael Brian</option>
                <option>Dr. John Doe</option>
                <option>Dr. Smith</option>
              </select>
            </div>

            <div className="flex gap-3 mb-6">
              <input
                type="text"
                placeholder="Name"
                className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="flex gap-3 mb-6">
              <input
                type="tel"
                placeholder="Phone"
                className="w-1/3 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
              />
              <div className="w-1/3 relative">
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                />
                <Calendar
                  className="absolute right-3.5 top-3  text-gray-400"
                  size={18}
                />
              </div>
              <div className="w-1/3 relative">
                <input
                  type="time"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                />
                <Clock
                  className="absolute right-4 top-3 text-gray-400"
                  size={18}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-700 text-white py-3 rounded-lg font-semibold hover:bg-cyan-800 transition"
            >
              Make Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookAppointmain;
