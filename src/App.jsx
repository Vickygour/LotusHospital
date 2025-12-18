import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import CustomCursor from "./Components/CustomCursor.jsx";
import HeroSection from "./Components/HeroSection/HeroSection.jsx";
import AboutMain from "./Components/About/AboutMain.jsx";
import ContactSection from "./Components/Contact/ContactSection.jsx";
import DoctorsTimetable from "./Components/DoctorsTimetable/DoctorsTimetable .jsx";
import DoctorsPage from "./Components/DoctorsTimetable/DoctorsPage .jsx";
import TpaInsaurence from "./Components/Insaurance/TpaInsaurence.jsx";
import BlogSection from "./Components/Blog/BlogSection.jsx";
import Service from "./Components/Service/Service.jsx";
import Gynecologist from "./Components/facilities/Gynecologist.jsx";
import Laparoscopic from "./Components/facilities/Laparoscopic.jsx";
import Dental from "./Components/facilities/Dental.jsx";
import Laser from "./Components/facilities/Laser.jsx";
import Urological from "./Components/facilities/Urological.jsx";
import Physiotherapy from "./Components/facilities/Physiotherapy.jsx";
import Pediatrics from "./Components/facilities/Pediatrics.jsx";
import ECG from "./Components/Radiology/Ecg.jsx";
import ColorDoppler from "./Components/Radiology/ColorDoppler.jsx";
import PathLab from "./Components/Radiology/PathLab.jsx";
import UltraSound from "./Components/Radiology/UltraSound.jsx";
import EchoCardiography from "./Components/Radiology/EchoCardiography.jsx";
import Pulmonary from "./Components/Radiology/Pulmonary.jsx";
import Ortho from "./Components/Radiology/Ortho.jsx";
import Ent from "./Components/facilities/Ent.jsx";
import Xray from "./Components/Radiology/Xray.jsx";
import Admission from "./Components/Admission.jsx";
import RoomFacilities from "./Components/RoomFacilities.jsx";
import Pharmacy from "./Components/Pharmacy.jsx";
import AmbulanceService from "./Components/AmbulanceService.jsx";
import WhatsAppFloat from "./Components/WhatsAppFloat";
import PrivacyPolicy from "./Components/PrivacyPolicy";
// ScrollToTop logic directly in App component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <CustomCursor />
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes className="main-below-header">
          <Route path="/" element={<HeroSection />} />
          <Route path="/About-us" element={<AboutMain />} />
          <Route path="/Contact" element={<ContactSection />} />
          <Route path="/Doctors-Timetable" element={<DoctorsTimetable />} />
          <Route path="/DoctorsPage" element={<DoctorsPage />} />
          <Route path="/TPA-Insurance" element={<TpaInsaurence />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/facilities/Gynecology" element={<Gynecologist />} />
          <Route path="/facilities/Laparoscopic" element={<Laparoscopic />} />
          <Route path="/facilities/Dental" element={<Dental />} />
          <Route path="/facilities/Laser" element={<Laser />} />
          <Route path="/facilities/urological" element={<Urological />} />
          <Route path="/facilities/physiotherapy" element={<Physiotherapy />} />
          <Route path="/facilities/pediatrics" element={<Pediatrics />} />
          <Route path="/Radiology/ecg" element={<ECG />} />
          <Route path="/Radiology/color-doppler" element={<ColorDoppler />} />
          <Route path="/Radiology/path-lab" element={<PathLab />} />
          <Route path="/Radiology/ultrasound" element={<UltraSound />} />
          <Route path="/Radiology/echo" element={<EchoCardiography />} />
          <Route path="/Radiology/pulmonary" element={<Pulmonary />} />
          <Route path="/Radiology/ortho" element={<Ortho />} />
          <Route path="/facilities/Ent" element={<Ent />} />
          <Route path="/Radiology/XRay" element={<Xray />} />
          <Route path="/Admission" element={<Admission />} />
          <Route path="/Privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/services/room-facilities"
            element={<RoomFacilities />}
          />
          <Route path="/services/pharmacy" element={<Pharmacy />} />
          <Route path="/services/ambulance" element={<AmbulanceService />} />
        </Routes>
        <WhatsAppFloat />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
