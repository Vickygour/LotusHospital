import React, { useState } from "react";
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

const ContactSection = () => {
  const [expandedFaq, setExpandedFaq] = useState(3); // FAQ state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

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
    console.log("Form Data:", formData);
    // Handle form submission
  };

  return (
    <>
      {/* Google Map Section */}
      <section className="relative w-full h-[500px] mt-23 md:mt-40">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13991.872736938161!2d77.18650235253644!3d28.75036685960588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfe212b4623ed%3A0x53ac4e83c884f385!2sLotus%20hospital%20and%20maternity%20centre!5e0!3m2!1sen!2sin!4v1765359013747!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="w-full h-full"
          title="Hospital Location"
        ></iframe>

        {/* View Larger Map Button */}
        {/* <button className="absolute top-4 left-4 bg-white text-[#283B6A] px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-50 transition-all duration-300">
          View larger map
        </button> */}
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
                {/* Row 1: Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Patient Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-[#E8F5F7] rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#13C5DD]"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-[#E8F5F7] rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#13C5DD]"
                    required
                  />
                </div>

                {/* Row 2: Subject and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative">
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-[#E8F5F7] rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#13C5DD] appearance-none"
                      required
                    >
                      <option value="">Select Inquiry Type</option>
                      <option value="appointment">Book Appointment</option>
                      <option value="general">General Enquiry</option>
                      <option value="report">Medical Reports</option>
                      <option value="emergency">Emergency Assistance</option>
                      <option value="feedback">Feedback / Suggestions</option>
                    </select>
                    <ChevronDown
                      size={20}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                    />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Contact Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-[#E8F5F7] rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#13C5DD]"
                    required
                  />
                </div>

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Please describe your concern or requirement"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-6 py-4 bg-[#E8F5F7] rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#13C5DD] resize-none"
                  required
                ></textarea>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-[#283B6A] hover:bg-[#1f2e52] text-white py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg"
                >
                  Submit Enquiry
                </button>
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
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#283B6A]/95 to-[#13C5DD]/90"></div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-10 md:p-12 min-h-[600px]">
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                    Trusted Care for You & Your Family
                  </h3>
                  <p className="text-white text-lg leading-relaxed mb-8">
                    At Lotus Hospital, we are committed to providing safe,
                    reliable, and compassionate healthcare using modern medical
                    practices and experienced specialists — because your
                    family’s health matters.
                  </p>
                </div>

                <Link to="/Contact">
                  <button className="bg-white text-[#283B6A] px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg self-start">
                    Book an Appointment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Help Section - NEW SECTION ADDED */}
      <section className="relative w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Map & Text */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#283B6A] leading-tight mb-8">
                Helping Patients From Around The Globe!!
              </h2>

              {/* World Map with Plus Markers */}
              <div className="relative w-full max-w-2xl">
                {/* Placeholder for your world map image */}
                <div className="relative">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/2000px-World_map_-_low_resolution.svg.png"
                    alt="World Map"
                    className="w-full h-auto opacity-20"
                  />

                  {/* Plus Markers positioned on map */}
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
            {/* Right Side - Content & FAQ */}
            <div>
              {/* Top Description */}
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
                    {/* Question Header */}
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

                    {/* Answer Content */}
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
