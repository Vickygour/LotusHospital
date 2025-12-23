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
import girl from "../../assets/girltestimonial.jpg";

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
    { name: "TPA Insurance", path: "#", isComingSoon: true }, // ⭐ UPDATED
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
                <a href="tel:9210399470">
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

                      {/* Desktop Mega Menu */}
                      <div
                        className={`fixed left-1/2 -translate-x-1/2 mt-2 w-[90vw] max-w-7xl bg-white shadow-2xl rounded-lg border border-gray-100 z-50 transition-all duration-300 origin-top ${
                          megaMenuOpen
                            ? "opacity-100 visible scale-100"
                            : "opacity-0 invisible scale-95"
                        }`}
                        style={{ top: "var(--header-height, 120px)" }}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-gray-200">
                          {/* Facilities */}
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

                          {/* Radiology */}
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
                          <div className="bg-gradient-to-br from-[#0891b2] to-[#1e40af] p-3 xl:p-5 rounded-r-3xl shadow-2xl h-full flex flex-col relative overflow-hidden group">
                            {/* Decorative Background Elements */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-cyan-400/10 transition-all duration-700"></div>
                            <div className="absolute bottom-20 -left-10 w-24 h-24 bg-blue-400/10 rounded-full blur-2xl"></div>

                            <div className="flex-grow space-y-5">
                              {/* Header Section */}
                              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                <div className="flex flex-col">
                                  <h3 className="text-xl xl:text-2xl font-black text-white leading-none tracking-tighter">
                                    LOTUS{" "}
                                    <span className="text-cyan-300 underline decoration-cyan-500/30">
                                      HOSPITAL
                                    </span>
                                  </h3>
                                  <span className="text-[9px] font-bold text-cyan-200/70 uppercase tracking-[0.2em] mt-1">
                                    Multi-Speciality Centre
                                  </span>
                                </div>
                                <div className="bg-green-500/10 border border-green-500/30 px-2 py-1 rounded-md flex items-center gap-1.5 backdrop-blur-sm">
                                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_#4ade80]"></span>
                                  <span className="text-[10px] font-black text-green-400 uppercase tracking-tight">
                                    Active
                                  </span>
                                </div>
                              </div>

                              {/* Main Highlights Section */}
                              <div className="space-y-4">
                                <div className="space-y-1">
                                  <h4 className="text-[11px] font-black text-cyan-300 uppercase tracking-widest">
                                    Advanced Healthcare
                                  </h4>
                                  <p className="text-[18px] xl:text-[22px] text-white leading-tight font-black">
                                    Specialized Care. <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-200">
                                      Personalized Touch.
                                    </span>
                                  </p>
                                </div>

                                <p className="text-[13px] xl:text-[14px] text-cyan-50/80 leading-relaxed font-medium">
                                  Experience{" "}
                                  <span className="text-white font-bold italic underline decoration-cyan-400">
                                    Next-Gen Surgery
                                  </span>{" "}
                                  with 4K Laparoscopic tech and 24/7 ICU support
                                  at Delhi's leading surgical hub.
                                </p>

                                {/* Feature Icons Grid - Space Filler */}
                                <div className="grid grid-cols-3 gap-3 pt-2">
                                  <div className="flex flex-col items-center gap-1.5 bg-white/5 p-2 rounded-xl border border-white/10 hover:bg-white/10 transition-colors cursor-default">
                                    <svg
                                      className="w-5 h-5 text-cyan-300"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                      />
                                    </svg>
                                    <span className="text-[9px] text-white/70 font-bold uppercase tracking-tighter">
                                      Emergency
                                    </span>
                                  </div>
                                  <div className="flex flex-col items-center gap-1.5 bg-white/5 p-2 rounded-xl border border-white/10 hover:bg-white/10 transition-colors cursor-default">
                                    <svg
                                      className="w-5 h-5 text-cyan-300"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                      />
                                    </svg>
                                    <span className="text-[9px] text-white/70 font-bold uppercase tracking-tighter">
                                      Safe Care
                                    </span>
                                  </div>
                                  <div className="flex flex-col items-center gap-1.5 bg-white/5 p-2 rounded-xl border border-white/10 hover:bg-white/10 transition-colors cursor-default">
                                    <svg
                                      className="w-5 h-5 text-cyan-300"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.727 2.903a2 2 0 01-1.18 1.18L3 14.28a2 2 0 00-.776-1.554l-1.414-1.414a2 2 0 01.554-1.554l2.121-2.121a2 2 0 011.554-.554l1.414 1.414a2 2 0 001.554.776l5.053-.553a2 2 0 011.18 1.18l.727 2.903a2 2 0 001.96 1.414l2.387-.477a2 2 0 001.022-.547l1.414-1.414a2 2 0 011.554-.554l2.121 2.121a2 2 0 01.554 1.554l-1.414 1.414a2 2 0 00-.547 1.022z"
                                      />
                                    </svg>
                                    <span className="text-[9px] text-white/70 font-bold uppercase tracking-tighter">
                                      Expertise
                                    </span>
                                  </div>
                                </div>
                              </div>

                              {/* Contact Card Section */}
                              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl flex items-center gap-2 border border-white shadow-cyan-900/20">
                                <div className="relative flex-shrink-0">
                                  <img
                                    src={girl}
                                    className="w-14 h-14 rounded-2xl object-cover ring-2 ring-cyan-50 shadow-lg"
                                  />
                                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full shadow-lg"></div>
                                </div>
                                <div className="min-w-0">
                                  <h5 className="text-[14px] font-black text-slate-900 truncate">
                                    Priya Sharma
                                  </h5>
                                  <p className="text-[11px] text-cyan-600 font-bold uppercase tracking-tight">
                                    Patient Care Manager
                                  </p>
                                  <p className="text-[10px] text-slate-400 font-medium italic mt-0.5">
                                    Assisting with Bookings Now
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Footer CTA */}
                            <div className="mt-8 space-y-3">
                              <a
                                href="tel:+919210399470"
                                className="block transform transition-transform hover:scale-[1.02] active:scale-95"
                              >
                                <button className="w-full bg-cyan-400 hover:bg-white text-blue-900 py-4 rounded-2xl font-black text-sm transition-all shadow-[0_15px_30px_-5px_rgba(34,211,238,0.4)] flex items-center justify-center gap-2">
                                  <div className="bg-blue-900/10 p-1.5 rounded-lg">
                                    <svg
                                      className="w-4 h-4 text-blue-900"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="3"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                      />
                                    </svg>
                                  </div>
                                  BOOK APPOINTMENT NOW
                                </button>
                              </a>
                              <div className="flex items-center justify-center gap-2 text-[10px] text-white/50 font-bold tracking-widest uppercase">
                                <span>No Wait Time</span>
                                <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                                <span>Express Care</span>
                              </div>
                            </div>
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
                  ) : item.isComingSoon ? (
                    // ⭐ COMING SOON BUTTON
                    <button
                      className="relative text-[#1B5FA3] font-medium hover:text-[#1F9C9C] transition-colors duration-300 py-2 text-sm xl:text-base whitespace-nowrap group cursor-not-allowed"
                      disabled
                    >
                      <span className="text-gray-400">{item.name}</span>
                      <span className="absolute -top-3 -right-[-20px] bg-gradient-to-r from-orange-500 to-red-500 text-white text-[9px] xl:text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md animate-pulse">
                        SOON
                      </span>
                      <span className="absolute -bottom-1 left-0 h-0.5 bg-gray-300 w-0 group-hover:w-full transition-all duration-300 ease-out" />
                    </button>
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
              <a
                href="https://wa.me/919210399470?text=Hello%20Lotus%20Hospital%20👋%20I%20want%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#1F9C9C] text-white px-3 xl:px-6 py-2 xl:py-3 rounded-lg font-medium text-xs xl:text-sm hover:bg-[#0FA8C0] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 whitespace-nowrap">
                  Book Appointment →
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
                  ) : item.isComingSoon ? (
                    // ⭐ MOBILE COMING SOON
                    <div className="relative px-6 py-4 border-b border-gray-100 cursor-not-allowed opacity-60">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-400">
                          {item.name}
                        </span>
                        <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md">
                          COMING SOON
                        </span>
                      </div>
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
                <a
                  href="https://wa.me/919210399470?text=Hello%20Lotus%20Hospital%20👋%20I%20want%20to%20book%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="w-full bg-[#1F9C9C] text-white py-3 rounded-lg font-medium hover:bg-[#0FA8C0] transition-all shadow-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book Appointment →
                  </button>
                </a>
              </div>

              {/* Mobile Contact Info */}
              <div className="px-6 py-4 bg-gray-50 mt-4 space-y-3 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <Phone size={16} className="text-[#1B5FA3]" />
                  <span>Emergency: 011-49785874</span>
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
