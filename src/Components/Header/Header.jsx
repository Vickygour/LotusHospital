// src/Components/Header/Header.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Search,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import logo from "../../assets/Lotusss.png";
import { Link, useLocation } from "react-router-dom";
import gynecology from "../../assets/GynoVector/gynoicon.svg";
import dental from "../../assets/GynoVector/dentalIcon.svg";
import lapro from "../../assets/GynoVector/laproicon.svg";
import urology from "../../assets/GynoVector/urologyicon.svg";
import ent from "../../assets/GynoVector/enticon.svg";
import physi from "../../assets/GynoVector/physiicon.svg";
import pedi from "../../assets/GynoVector/child_careicon.svg";
import xray from "../../assets/GynoVector/xrayicon.svg";
import lab from "../../assets/GynoVector/laboicon.svg";
import ortho from "../../assets/GynoVector/orthoicon.svg";
import ultra from "../../assets/GynoVector/ultraicon.svg";
import pulmo from "../../assets/GynoVector/pulmonaryicon.svg";
import ecg from "../../assets/GynoVector/Copilot_20251129_152104.png";
import color from "../../assets/GynoVector/a2vcolor.svg";
import echo from "../../assets/GynoVector/Echocardiographyicon.svg";
import laser from "../../assets/GynoVector/a2vlaser.svg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileMegaMenuOpen, setMobileMegaMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const megaMenuRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const megaMenuTimeout = useRef(null);
  const servicesTimeout = useRef(null);
  const headerRef = useRef(null);
  const resizeObserverRef = useRef(null);

  // Facilities
  const facilities = [
    {
      name: "Obstetric and Gynaecology",
      path: "/facilities/Gynecology",
      src: gynecology,
    },
    {
      name: "Laparoscopic Surgery",
      path: "/facilities/Laparoscopic",
      src: lapro,
    },
    {
      name: "Dental and Cosmetics",
      path: "/facilities/Dental",
      src: dental,
    },
    { name: "Laser Surgery", path: "/facilities/Laser", src: laser },
    {
      name: "Urological Surgery",
      path: "/facilities/urological",
      src: urology,
    },
    { name: "Physiotherapy", path: "/facilities/physiotherapy", src: physi },
    { name: "Pediatrics", path: "/facilities/pediatrics", src: pedi },
    { name: "ENT", path: "/facilities/Ent", src: ent },
  ];

  // Radiology
  const radiology = [
    { name: "ECG", path: "/Radiology/ecg", src: ecg },
    { name: "Color Doppler", path: "/Radiology/color-doppler", src: color },
    { name: "Path Lab", path: "/Radiology/path-lab", src: lab },
    { name: "X-Ray", path: "/Radiology/XRay", src: xray },
    { name: "Ultra-Sound", path: "/Radiology/ultrasound", src: ultra },
    { name: "Echocardiography", path: "/Radiology/echo", src: echo },
    { name: "Pulmonary", path: "/Radiology/pulmonary", src: pulmo },
    { name: "ORTHO", path: "/Radiology/ortho", src: ortho },
  ];

  // Services
  const servicesItems = [
    { name: "Admission Process", path: "/Admission" },
    { name: "Room Facilities", path: "/services/room-facilities" },
    { name: "Pharmacy Service", path: "/services/pharmacy" },
    { name: "Ambulance Service", path: "/services/ambulance" },
  ];

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/About-us" },
    { name: "Our Specialties", path: "/departments", hasMegaMenu: true },
    { name: "Doctors", path: "/DoctorsPage" },
    { name: "Services", path: "/Service", hasDropdown: true },
    { name: "Contact", path: "/Contact" },
  ];

  const location = useLocation();

  useEffect(() => {
    const found = navigationItems.find((n) => n.path === location.pathname);
    if (found) setActiveLink(found.name);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
        setMegaMenuOpen(false);
      }
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target)
      ) {
        setServicesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (name) => {
    setActiveLink(name);
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileMegaMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const handleMegaMenuEnter = () => {
    if (megaMenuTimeout.current) {
      clearTimeout(megaMenuTimeout.current);
    }
    setMegaMenuOpen(true);
  };

  const handleMegaMenuLeave = () => {
    megaMenuTimeout.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 200);
  };

  const handleServicesEnter = () => {
    if (servicesTimeout.current) {
      clearTimeout(servicesTimeout.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeout.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 200);
  };

  const setHeaderHeightVar = () => {
    const el = headerRef.current;
    if (!el) return;
    const h = Math.ceil(el.getBoundingClientRect().height);
    document.documentElement.style.setProperty("--header-height", `${h}px`);
    document.documentElement.style.setProperty("scroll-padding-top", `${h}px`);
  };

  useEffect(() => {
    setHeaderHeightVar();
    const onResize = () => setHeaderHeightVar();
    window.addEventListener("resize", onResize);

    if (typeof ResizeObserver !== "undefined" && headerRef.current) {
      resizeObserverRef.current = new ResizeObserver(() =>
        setHeaderHeightVar()
      );
      resizeObserverRef.current.observe(headerRef.current);
    }

    const t = setTimeout(setHeaderHeightVar, 50);

    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(t);
      if (resizeObserverRef.current) resizeObserverRef.current.disconnect();
    };
  }, []);

  useEffect(() => {
    const t = setTimeout(setHeaderHeightVar, 80);
    return () => clearTimeout(t);
  }, [mobileMenuOpen, megaMenuOpen, servicesDropdownOpen]);

  return (
    <>
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <header
        ref={headerRef}
        className="w-full fixed top-0 left-0 z-50 shadow-md bg-white"
      >
        {/* Top Info Bar */}
        <div className="hidden xl:block bg-[#1B5FA3] text-white text-sm py-2.5 px-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="text-xs xl:text-sm text-white">
                Lotus Hospital cares for over 10,000 patients every year.
              </span>
              <span className="text-white font-medium text-xs xl:text-sm hover:text-red-500 transition-colors cursor-pointer">
                24×7 Emergency Care Available →
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs xl:text-sm">
              <div className="flex items-center gap-2 hover:text-[#1F9C9C] transition-colors cursor-pointer">
                <Phone size={14} />
                <span className="hidden xl:inline">Emergency: </span>

                <a href="tel:+9210399470">
                  <span>011-49785874 || 9210399470</span>
                </a>
              </div>
              <div className="hidden 2xl:flex items-center gap-2 hover:text-[#1F9C9C] transition-colors cursor-pointer">
                <MapPin size={14} />
                <a href="https://maps.app.goo.gl/fVmHRAVNeR76k4jf6">
                  <span>Burari, New Delhi-110084</span>
                </a>
              </div>

              <div className="flex items-center mr-5 gap-1 cursor-pointer hover:text-[#1F9C9C] transition-colors">
                <img
                  src="https://flagcdn.com/40x30/in.png"
                  alt="English"
                  className="w-4 h-3 object-cover"
                />
                <span className="hidden xl:inline">English</span>
                <ChevronDown size={12} />
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="bg-white py-3 px-4 sm:px-6 lg:px-8 shadow-sm">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link to="/" onClick={() => handleLinkClick("Home")}>
                <img
                  src={logo}
                  alt="Hospital Logo"
                  className="w-16 h-auto sm:w-20 md:w-24 object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
              {navigationItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  ref={
                    item.hasMegaMenu
                      ? megaMenuRef
                      : item.hasDropdown
                      ? servicesDropdownRef
                      : null
                  }
                  onMouseEnter={
                    item.hasMegaMenu
                      ? handleMegaMenuEnter
                      : item.hasDropdown
                      ? handleServicesEnter
                      : null
                  }
                  onMouseLeave={
                    item.hasMegaMenu
                      ? handleMegaMenuLeave
                      : item.hasDropdown
                      ? handleServicesLeave
                      : null
                  }
                >
                  {item.hasMegaMenu ? (
                    <>
                      <button className="relative text-[#1B5FA3] font-medium hover:text-[#1F9C9C] transition-colors duration-300 py-2 flex items-center gap-1 text-sm xl:text-base whitespace-nowrap">
                        <span className={megaMenuOpen ? "text-[#1F9C9C]" : ""}>
                          {item.name}
                        </span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            megaMenuOpen ? "rotate-180" : ""
                          }`}
                        />
                        <span
                          className={`absolute -bottom-1 left-0 h-0.5 bg-[#1F9C9C] transition-all duration-300 ease-out ${
                            megaMenuOpen ? "w-full" : "w-0"
                          }`}
                        />
                      </button>

                      {/* Desktop Mega Menu - CENTERED WITHOUT SCROLL */}
                      <div
                        className={`fixed left-1/2 -translate-x-1/2 mt-2 w-[90vw] max-w-7xl bg-white shadow-2xl rounded-lg border border-gray-100 z-50 transition-all duration-300 origin-top ${
                          megaMenuOpen
                            ? "opacity-100 visible scale-100"
                            : "opacity-0 invisible scale-95"
                        }`}
                        style={{ top: "var(--header-height, 120px)" }}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-gray-200">
                          {/* Facilities - NO SCROLL */}
                          <div className="p-4 xl:p-6">
                            <h3 className="text-base xl:text-lg font-bold text-[#1B5FA3] mb-3 pb-2 border-b-2 border-[#1F9C9C]">
                              FACILITIES
                            </h3>
                            <div className="space-y-1">
                              {facilities.map((facility, index) => (
                                <Link
                                  key={index}
                                  to={facility.path}
                                  onClick={() => handleLinkClick(item.name)}
                                  className="flex items-center gap-2 text-xs xl:text-sm text-gray-700 hover:text-[#1F9C9C] hover:translate-x-1 transition-all duration-200 py-2 px-2 rounded hover:bg-cyan-50"
                                >
                                  {facility.src && (
                                    <img
                                      src={facility.src}
                                      alt=""
                                      className="w-6 h-6 xl:w-8 xl:h-8 object-contain flex-shrink-0"
                                    />
                                  )}
                                  <span className="line-clamp-1">
                                    {facility.name}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Radiology - NO SCROLL */}
                          <div className="p-4 xl:p-6">
                            <h3 className="text-base xl:text-lg font-bold text-[#1B5FA3] mb-3 pb-2 border-b-2 border-[#1F9C9C]">
                              RADIOLOGY
                            </h3>
                            <div className="space-y-1">
                              {radiology.map((item, index) => (
                                <Link
                                  key={index}
                                  to={item.path}
                                  onClick={() => handleLinkClick(item.name)}
                                  className="flex items-center gap-2 text-xs xl:text-sm text-gray-700 hover:text-[#1F9C9C] hover:translate-x-1 transition-all duration-200 py-2 px-2 rounded hover:bg-cyan-50"
                                >
                                  {item.src && (
                                    <img
                                      src={item.src}
                                      alt=""
                                      className="w-6 h-6 xl:w-8 xl:h-8 object-contain flex-shrink-0"
                                    />
                                  )}
                                  <span className="line-clamp-1">
                                    {item.name}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* CTA Section */}
                          <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-4 xl:p-6 rounded-r-lg">
                            <h3 className="text-base xl:text-lg font-bold text-white mb-4">
                              ■ FACILITIES
                            </h3>
                            <div className="bg-white rounded-lg p-3 xl:p-4 mb-4 shadow-lg">
                              <p className="text-xs xl:text-sm text-gray-700 mb-3">
                                Cashless facility for Delhi University, TPDDL
                                and All leading Medical Insurance Co 24/7
                                emergency service
                              </p>
                              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg p-3 flex items-center justify-center h-24 xl:h-32 mb-3">
                                <div className="text-center">
                                  <div className="w-12 h-12 xl:w-16 xl:h-16 bg-white rounded-full mx-auto mb-2 flex items-center justify-center shadow-md">
                                    <svg
                                      className="w-6 h-6 xl:w-10 xl:h-10 text-[#1B5FA3]"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </div>
                                  <p className="text-xs text-gray-600 font-medium">
                                    Doctor Image Here
                                  </p>
                                </div>
                              </div>
                              <input
                                type="text"
                                placeholder="Department & Doctor Name"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md text-xs xl:text-sm focus:outline-none focus:ring-2 focus:ring-[#1F9C9C]"
                              />
                            </div>
                            <button className="w-full bg-white text-[#1B5FA3] py-2 xl:py-2.5 rounded-md font-semibold text-xs xl:text-sm hover:bg-gray-50 transition-colors shadow-md hover:shadow-lg">
                              BOOK CONSULTATION
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : item.hasDropdown ? (
                    <>
                      <button className="relative text-[#1B5FA3] font-medium hover:text-[#1F9C9C] transition-colors duration-300 py-2 flex items-center gap-1 text-sm xl:text-base whitespace-nowrap">
                        <span
                          className={
                            servicesDropdownOpen ? "text-[#1F9C9C]" : ""
                          }
                        >
                          {item.name}
                        </span>
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${
                            servicesDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                        <span
                          className={`absolute -bottom-1 left-0 h-0.5 bg-[#1F9C9C] transition-all duration-300 ease-out ${
                            servicesDropdownOpen ? "w-full" : "w-0"
                          }`}
                        />
                      </button>

                      {/* Services Dropdown */}
                      <div
                        className={`absolute left-0 mt-2 w-56 bg-white shadow-xl rounded-lg border border-gray-100 z-50 transition-all duration-300 origin-top ${
                          servicesDropdownOpen
                            ? "opacity-100 visible scale-100"
                            : "opacity-0 invisible scale-95"
                        }`}
                        style={{ top: "calc(100% + 8px)" }}
                      >
                        <div className="py-2">
                          {servicesItems.map((service, index) => (
                            <Link
                              key={index}
                              to={service.path}
                              onClick={() => handleLinkClick(item.name)}
                              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-cyan-50 hover:text-[#1F9C9C] transition-all duration-200"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => handleLinkClick(item.name)}
                      className="relative text-[#1B5FA3] font-medium hover:text-[#1F9C9C] transition-colors duration-300 py-2 text-sm xl:text-base whitespace-nowrap"
                    >
                      <span
                        className={
                          activeLink === item.name ? "text-[#1F9C9C]" : ""
                        }
                      >
                        {item.name}
                      </span>
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-[#1F9C9C] transition-all duration-300 ease-out ${
                          activeLink === item.name ? "w-full" : "w-0"
                        }`}
                      />
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop Right Actions */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-4">
              <button className="text-[#1B5FA3] hover:text-[#1F9C9C] transition-colors duration-300 p-2">
                <Search size={18} className="xl:w-5 xl:h-5" />
              </button>
              <Link
                to="/Doctors-Timetable"
                className="text-xs xl:text-sm font-medium text-[#1B5FA3] hover:text-[#1F9C9C] transition-colors duration-300 whitespace-nowrap hidden xl:block"
              >
                Doctors' Timetable
              </Link>
              <a href="tel:+9210399470">
                <button className="bg-[#1F9C9C] text-white px-3 xl:px-6 py-2 xl:py-3 rounded-lg font-medium text-xs xl:text-sm hover:bg-[#0FA8C0] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 whitespace-nowrap">
                  Make Appointment →
                </button>
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden text-[#1B5FA3] hover:text-[#1F9C9C] transition-colors p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
            mobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMobileMenuOpen(false)}
          style={{ top: "var(--header-height, 120px)" }}
        >
          <div
            className={`bg-white w-full max-w-sm ml-auto h-full overflow-y-auto no-scrollbar shadow-2xl transform transition-transform duration-300 ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="py-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.hasMegaMenu ? (
                    <div className="border-b border-gray-100">
                      <button
                        onClick={() =>
                          setMobileMegaMenuOpen(!mobileMegaMenuOpen)
                        }
                        className="w-full flex items-center justify-between px-6 py-4 font-medium text-[#1B5FA3] hover:bg-gray-50 transition-colors"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${
                            mobileMegaMenuOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {mobileMegaMenuOpen && (
                        <div className="bg-gray-50 px-6 py-4 max-h-96 overflow-y-auto no-scrollbar">
                          <div className="mb-6">
                            <h4 className="font-bold text-[#1B5FA3] mb-3 text-sm">
                              FACILITIES
                            </h4>
                            {facilities.map((facility, index) => (
                              <Link
                                key={index}
                                to={facility.path}
                                onClick={() => handleLinkClick(item.name)}
                                className="flex items-center gap-3 py-2.5 text-sm text-gray-700 hover:text-[#1F9C9C] transition-colors"
                              >
                                {facility.src && (
                                  <img
                                    src={facility.src}
                                    alt=""
                                    className="w-6 h-6 object-contain flex-shrink-0"
                                  />
                                )}
                                <span>{facility.name}</span>
                              </Link>
                            ))}
                          </div>
                          <div>
                            <h4 className="font-bold text-[#1B5FA3] mb-3 text-sm">
                              RADIOLOGY
                            </h4>
                            {radiology.map((rad, index) => (
                              <Link
                                key={index}
                                to={rad.path}
                                onClick={() => handleLinkClick(item.name)}
                                className="flex items-center gap-3 py-2.5 text-sm text-gray-700 hover:text-[#1F9C9C] transition-colors"
                              >
                                {rad.src && (
                                  <img
                                    src={rad.src}
                                    alt=""
                                    className="w-6 h-6 object-contain flex-shrink-0"
                                  />
                                )}
                                <span>{rad.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : item.hasDropdown ? (
                    <div className="border-b border-gray-100">
                      <button
                        onClick={() =>
                          setMobileServicesOpen(!mobileServicesOpen)
                        }
                        className="w-full flex items-center justify-between px-6 py-4 font-medium text-[#1B5FA3] hover:bg-gray-50 transition-colors"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${
                            mobileServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {mobileServicesOpen && (
                        <div className="bg-gray-50 px-6 py-2">
                          {servicesItems.map((service, index) => (
                            <Link
                              key={index}
                              to={service.path}
                              onClick={() => handleLinkClick(item.name)}
                              className="block py-3 text-sm text-gray-700 hover:text-[#1F9C9C] transition-colors"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block px-6 py-4 font-medium hover:bg-gray-50 transition-colors border-b border-gray-100 ${
                        activeLink === item.name
                          ? "text-[#1F9C9C] bg-cyan-50"
                          : "text-[#1B5FA3]"
                      }`}
                      onClick={() => handleLinkClick(item.name)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile CTAs */}
              <div className="px-6 py-6 space-y-3 border-t border-gray-200 mt-4">
                <Link
                  to="/Doctors-Timetable"
                  className="block text-center text-[#1B5FA3] font-medium py-3 border-2 border-[#1B5FA3] rounded-lg hover:bg-[#1B5FA3] hover:text-white transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Doctors' Timetable
                </Link>
                <Link to="/Doctors-Timetable">
                  <button
                    className="w-full bg-[#1F9C9C] text-white py-3 rounded-lg font-medium hover:bg-[#0FA8C0] transition-all shadow-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Make Appointment →
                  </button>
                </Link>
              </div>

              {/* Mobile Contact Info */}
              <div className="px-6 py-4 bg-gray-50 mt-4 space-y-3 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Phone size={16} className="text-[#1B5FA3]" />
                  <span>Emergency:011-49785874</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin size={16} className="text-[#1B5FA3]" />
                  <span>Burari, New Delhi-110084</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock size={16} className="text-[#1B5FA3]" />
                  <span>Mon-Fri: 10am – 7pm</span>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
