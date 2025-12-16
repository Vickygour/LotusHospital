import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  MapPin,
  ArrowRight,
  Instagram,
  Facebook,
  Linkedin,
  ArrowUp,
} from "lucide-react";
import logo from "../../assets/Lotusss.png"; // Import your logo

const Footer = () => {
  const [email, setEmail] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(true);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && acceptTerms) {
      console.log("Subscribed:", email);
      setEmail("");
      setAcceptTerms(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Facilities/Departments with exact route paths
  const departments = [
    { name: "Obstetrics & Gynecology", path: "/facilities/Gynecology" },
    { name: "Laparoscopic Surgery", path: "/facilities/Laparoscopic" },
    { name: "Dental & Cosmetics", path: "/facilities/Dental" },
    { name: "Laser Surgery", path: "/facilities/Laser" },
    { name: "Urology Surgery", path: "/facilities/urological" },
    { name: "Physiotherapy", path: "/facilities/physiotherapy" },
    { name: "Pediatrics", path: "/facilities/pediatrics" },
    { name: "ENT", path: "/facilities/Ent" },
  ];

  // Radiology services with exact route paths
  const Radiologies = [
    { name: "ECG", path: "/Radiology/ecg" },
    { name: "Color Doppler", path: "/Radiology/color-doppler" },
    { name: "Path Lab", path: "/Radiology/path-lab" },
    { name: "X-Ray", path: "/Radiology/XRay" },
    { name: "Ultra-Sound", path: "/Radiology/ultrasound" },
    { name: "Echo Cardiography", path: "/Radiology/echo" },
    { name: "Pulmonary", path: "/Radiology/pulmonary" },
    { name: "Ortho", path: "/Radiology/ortho" },
  ];

  // Navigation links
  const links = [
    { name: "About Us", path: "/About-us" },
    { name: "Our Doctors", path: "/Doctors" },
    { name: "Services", path: "/Service" },
    { name: "Contact Us", path: "/Contact" },
  ];

  // Additional services
  const services = [
    { name: "Room Facilities", path: "/services/room-facilities" },
    { name: "Pharmacy", path: "/services/pharmacy" },
    { name: "Ambulance Service", path: "/services/ambulance" },
    { name: "Admission", path: "/admission" },
  ];

  return (
    <footer className="bg-[#283B6A] text-white relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 ">
          {/* Logo and About Section - 3 columns */}
          <div className="lg:col-span-3 ">
            {/* Logo */}
            <div className="text-center m-auto">
              <Link to="/" className="inline-block mb-4 md:mr-25">
                <img
                  src={logo}
                  alt="Lotus Hospital Logo"
                  className="h-30 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Hospital Description */}
            <h3 className="text-lg font-bold mb-3 text-[#00B8DB]">
              Lotus Multispecialist Hospital
            </h3>
            <p className="text-gray-300 text-sm  mb-6">
              At Lotus Multispecialist Hospital, we are dedicated to providing
              advanced medical treatment coupled with compassionate care to
              every patient. Backed by experienced doctors and modern healthcare
              facilities, we are perpetually committed to your health and
              safety.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="bg-[#1e2d52] hover:bg-[#00B8DB] p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="bg-[#1e2d52] hover:bg-[#00B8DB] p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="bg-[#1e2d52] hover:bg-[#00B8DB] p-2.5 rounded-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Facilities Section - 2 columns */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6">Facilities</h3>
            <ul className="space-y-3">
              {departments.map((dept, index) => (
                <li key={index}>
                  <Link
                    to={dept.path}
                    className="text-gray-300 hover:text-[#00B8DB] transition-colors duration-300 text-sm inline-block hover:translate-x-1 transform transition-transform"
                  >
                    {dept.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Radiology Section - 2 columns */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6">Radiology</h3>
            <ul className="space-y-3">
              {Radiologies.map((radio, index) => (
                <li key={index}>
                  <Link
                    to={radio.path}
                    className="text-gray-300 hover:text-[#00B8DB] transition-colors duration-300 text-sm inline-block hover:translate-x-1 transform transition-transform"
                  >
                    {radio.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Section - 2 columns */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#00B8DB] transition-colors duration-300 text-sm inline-block hover:translate-x-1 transform transition-transform"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Additional Services */}
            <h3 className="text-xl font-bold mb-4 mt-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-[#00B8DB] transition-colors duration-300 text-sm inline-block hover:translate-x-1 transform transition-transform"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter Section - 3 columns */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-bold mb-6">Quick Contact</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              If you have any questions or need help, feel free to contact our
              team.
            </p>

            <div className="flex items-center gap-3 mb-3">
              <Phone size={18} className="text-[#00B8DB] flex-shrink-0" />
              <a
                href="tel:9210399470"
                className="text-[#00B8DB] text-lg font-bold hover:text-[#0FA8C0] transition-colors duration-300"
              >
                9210399470
              </a>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <Phone size={18} className="text-[#00B8DB] flex-shrink-0" />
              <a
                href="tel:01149785874"
                className="text-[#00B8DB] text-lg font-bold hover:text-[#0FA8C0] transition-colors duration-300"
              >
                011-49785874
              </a>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <MapPin size={18} className="text-[#00B8DB] flex-shrink-0 mt-1" />
              <p className="text-gray-400 text-sm leading-relaxed">
                Bus stop, Opp. Main Market, Virendar Nagar, Block B, Sant Nagar,
                Burari, Delhi – 110084.
              </p>
            </div>

            {/* Newsletter */}
            <h3 className="text-lg font-bold mb-3 mt-6">Newsletter</h3>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email Address"
                  className="w-full bg-[#1e2d52] text-white placeholder-gray-400 px-4 py-3 pr-12 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B8DB] transition-all duration-300 text-sm"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#00B8DB] hover:bg-[#0FA8C0] p-2 rounded-lg transition-all duration-300 transform hover:scale-110"
                >
                  <ArrowRight size={18} className="text-white" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-gray-600 my-8"></div>

        {/* Bottom Section - Copyright */}
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Lotus Hospital - By{" "}
            <a
              href="https://a2vgroups.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00B8DB] hover:text-[#0FA8C0] transition-colors duration-300"
            >
              A2V Groups
            </a>
            . All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#00B8DB] hover:bg-[#283B6A] p-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} className="text-white" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
