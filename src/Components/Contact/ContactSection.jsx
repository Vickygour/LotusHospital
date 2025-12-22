import React, { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronDown,
  Heart,
  Plus,
  Minus,
} from "lucide-react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [expandedFaq, setExpandedFaq] = useState(3);
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
    emailjs.init("SrovcxuzWh0xOEnOl"); // Replace with your actual public key
  }, []);

  const faqs = [
    {
      id: 1,
      question: "How can I book an appointment at Lotus Hospital?",
      answer:
        "You can book an appointment by filling out the enquiry form on our website, calling our reception desk, or visiting Lotus Hospital in person. Our staff will assist you in scheduling an appointment with the appropriate doctor or department.",
    },
    {
      id: 2,
      question: "Do I need an appointment before visiting the hospital?",
      answer:
        "While walk-in patients are accepted in certain cases, we recommend booking an appointment in advance to reduce waiting time and ensure the availability of the concerned doctor, especially for specialist consultations.",
    },
    {
      id: 3,
      question: "What should I bring for my first visit?",
      answer:
        "For your first visit, please bring a valid ID, any previous medical reports, prescriptions, test results, and your health insurance details (if applicable). This helps our doctors understand your medical history better.",
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);

    // EmailJS send method
    emailjs
      .send(
        "service_rnn3l8m", // Replace with your EmailJS Service ID
        "template_x7e1fjv", // Replace with your EmailJS Template ID
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
    <>
      {/* Google Map Section */}
      <section className="relative w-full h-[500px] mt-23 md:mt-40">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.1597593611796!2d77.1988375!3d28.744646700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cff37cea6e23d%3A0xc33aedf6ca1013a5!2sLotus%20Multispeciality%20Hospital!5e0!3m2!1sen!2sin!4v1766037115945!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="w-full h-full"
          title="Hospital Location"
        ></iframe>
      </section>

      {/* Contact Form + Info Card Section */}
      <section className="relative w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Contact Form */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#283B6A] mb-4">
                How Can Lotus Hospital Help You?
              </h2>
              <p className="text-gray-600 text-base mb-8">
                You are welcome to contact Lotus Hospital for appointments,
                medical enquiries, or general assistance. Our reception team
                will ensure your query is addressed promptly by the concerned
                department or doctor.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <input
                  type="text"
                  name="name"
                  placeholder="Patient Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-[#E8F5F7] rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#13C5DD]"
                  required
                />

                {/* Email Field */}
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-[#E8F5F7] rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#13C5DD]"
                  required
                />

                {/* Contact Number Field */}
                <input
                  type="tel"
                  name="contact"
                  placeholder="Contact Number"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-[#E8F5F7] rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#13C5DD]"
                  required
                />

                {/* Message Field */}
                <textarea
                  name="message"
                  placeholder="Please describe your concern or requirement"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-6 py-4 bg-[#E8F5F7] rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#13C5DD] resize-none"
                  required
                ></textarea>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#283B6A] hover:bg-[#1f2e52] text-white py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Submit Enquiry"}
                </button>

                {/* Success/Error Messages */}
                {submitStatus === "success" && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                    Your message has been sent successfully! We will contact you
                    soon.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                    Failed to send message. Please try again or contact us
                    directly.
                  </div>
                )}
              </form>
            </div>

            {/* Right - Info Card */}
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=1000&fit=crop)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#283B6A]/95 to-[#13C5DD]/90"></div>
              <div className="relative h-full flex flex-col justify-between p-10 md:p-12 min-h-[600px]">
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                    Trusted Care for You & Your Family
                  </h3>
                  <p className="text-white text-lg leading-relaxed mb-8">
                    At Lotus Hospital, we are committed to providing safe,
                    reliable, and compassionate healthcare using modern medical
                    practices and experienced specialists — because your
                    family's health matters.
                  </p>
                </div>
                <a
                  href="https://wa.me/919210399470?text=Hi, I would like to book an appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 rounded-lg text-white font-medium text-sm sm:text-base hover:opacity-90 transition-opacity"
                  style={{ background: "#283B6A" }}
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
                  Book An Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Help Section */}
      <section className="relative w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Map & Text */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#283B6A] leading-tight mb-8">
                Helping Patients Fromhh Around The Globe!!
              </h2>
              <div className="relative w-full max-w-2xl">
                <div className="relative">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/2000px-World_map_-_low_resolution.svg.png"
                    alt="World Map"
                    className="w-full h-auto opacity-20"
                  />
                  <div className="absolute top-[25%] left-[20%] w-12 h-12 bg-[#283B6A] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    <Plus size={24} />
                  </div>
                  <div className="absolute top-[35%] right-[35%] w-12 h-12 bg-[#283B6A] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    <Plus size={24} />
                  </div>
                  <div className="absolute top-[55%] left-[35%] w-12 h-12 bg-[#283B6A] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    <Plus size={24} />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content & FAQ */}
            <div>
              <div className="mb-8">
                <p className="text-[#283B6A] font-semibold text-base leading-relaxed mb-4">
                  At Lotus Hospital, our dedicated medical and support staff
                  ensure that every patient receives clear communication,
                  compassionate care, and timely medical attention in a
                  comfortable and safe environment.
                </p>
                <p className="text-gray-600 text-base leading-relaxed">
                  We work closely with patients and their families to create
                  personalised treatment plans, including preventive care and
                  management of chronic conditions. When specialised care is
                  required, we provide expert referrals and complete guidance.
                  All consultations and enquiries are handled with utmost
                  sensitivity and strict confidentiality.
                </p>
              </div>

              {/* FAQ Accordion */}
              <div className="space-y-4 mb-8">
                {faqs.map((faq) => (
                  <div
                    key={faq.id}
                    className="border-t-2 border-[#13C5DD] bg-white rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-[#283B6A] font-bold text-lg pr-4">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {expandedFaq === faq.id ? (
                          <Minus size={24} className="text-[#283B6A]" />
                        ) : (
                          <Plus size={24} className="text-[#283B6A]" />
                        )}
                      </div>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        expandedFaq === faq.id
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
