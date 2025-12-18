import React, { useState, useEffect } from 'react';
import { Heart, HelpCircle, Calendar, Clock } from 'lucide-react';
import india from '../../assets/india2.png';
import emailjs from '@emailjs/browser';

const BookAppointmain = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Initialize EmailJS with your Public Key
  useEffect(() => {
    emailjs.init('SrovcxuzWh0xOEnOl');
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);

    // EmailJS send method
    emailjs
      .send(
        'service_rnn3l8m', // Your EmailJS Service ID
        'template_x7e1fjv', // Your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          contact: formData.contact,
          message: formData.message,
        },
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setSubmitStatus('success');
          setLoading(false);
          // Reset form
          setFormData({
            name: '',
            email: '',
            contact: '',
            message: '',
          });
          // Clear success message after 5 seconds
          setTimeout(() => setSubmitStatus(null), 5000);
        },
        (error) => {
          console.log('Email send failed:', error.text);
          setSubmitStatus('error');
          setLoading(false);
          // Clear error message after 5 seconds
          setTimeout(() => setSubmitStatus(null), 5000);
        },
      );
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
            concise, and inviting. Support the important work of Lotus Hospital
            by making a much-needed donation today.
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
        <div className="bg-white p-8 w-full max-w-xxl py-15">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Contact Lotus Hospital
          </h3>
          <p className="text-gray-500 text-sm mb-10">
            You are welcome to contact Lotus Hospital for appointments, medical
            enquiries, or general assistance. Our reception team will ensure
            your query is addressed promptly by the concerned department or
            doctor.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <input
              type="text"
              name="name"
              placeholder="Patient Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-[#E8F5F7] rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-gray-300"
              required
            />

            {/* Email Field */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-[#E8F5F7] rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-gray-300"
              required
            />

            {/* Contact Number Field */}
            <input
              type="tel"
              name="contact"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={handleChange}
              className="w-full px-6 py-4 bg-[#E8F5F7] rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 border border-gray-300"
              required
            />

            {/* Message Field */}
            <textarea
              name="message"
              placeholder="Please describe your concern or requirement"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-6 py-4 bg-[#E8F5F7] rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none border border-gray-300"
              required
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-700 text-white py-4 rounded-lg font-semibold hover:bg-cyan-800 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {loading ? 'Sending...' : 'Submit Enquiry'}
            </button>

            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                ✅ Your message has been sent successfully! We will contact you
                soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                ❌ Failed to send message. Please try again or contact us
                directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookAppointmain;
