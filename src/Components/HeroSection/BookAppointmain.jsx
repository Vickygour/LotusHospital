import React, { useState, useEffect } from "react";
import { Heart, HelpCircle, Calendar, Clock } from "lucide-react";
import india from "../../assets/india2.png";
import emailjs from "@emailjs/browser";

const BookAppointmain = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Initialize EmailJS with your Public Key
  useEffect(() => {
    emailjs.init("SrovcxuzWh0xOEnOl");
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
        "service_rnn3l8m", // Your EmailJS Service ID
        "template_x7e1fjv", // Your EmailJS Template ID
        {
          name: formData.name,
          email: formData.email,
          contact: formData.contact,
          message: formData.message,
        }
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setSubmitStatus("success");
          setLoading(false);
          // Reset form
          setFormData({
            name: "",
            email: "",
            contact: "",
            message: "",
          });
          // Clear success message after 5 seconds
          setTimeout(() => setSubmitStatus(null), 5000);
        },
        (error) => {
          console.log("Email send failed:", error.text);
          setSubmitStatus("error");
          setLoading(false);
          // Clear error message after 5 seconds
          setTimeout(() => setSubmitStatus(null), 5000);
        }
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

          <div className="flex flex-wrap items-center gap-4">
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919210399470?text=Hi, I need assistance regarding an appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-[#20ba5a] transition-all transform hover:-translate-y-1 active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.06 3.972L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.17-.479 1.338-.942.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
              Chat on WhatsApp
            </a>

            {/* Call Button */}
            <a
              href="tel:+919210399470"
              className="flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-cyan-600 transition-all shadow-md active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Emergency Call
            </a>
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
              {loading ? "Sending..." : "Submit Enquiry"}
            </button>

            {/* Success/Error Messages */}
            {submitStatus === "success" && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                ✅ Your message has been sent successfully! We will contact you
                soon.
              </div>
            )}
            {submitStatus === "error" && (
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
