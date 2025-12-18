import React from "react";
import {
  ShieldCheck,
  Lock,
  Smartphone,
  MapPin,
  Database,
  Globe,
  Mail,
  Phone,
  Scale,
  UserCheck,
  Eye,
  ShieldAlert,
  CheckCircle,
} from "lucide-react";

const TermsAndPrivacy = () => {
  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans mt-30">
      {/* --- HEADER SECTION --- */}
      <div className="bg-gradient-to-r from-[#283B6A] to-[#3A539B] py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-cyan-300 text-sm font-bold mb-6">
            <ShieldCheck size={18} /> Verified Patient Data Protection
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
            Terms of <span className="text-cyan-400">Usage</span>
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            At Lotus Multispeciality Hospital, we prioritize your privacy as
            much as your health. Below is how we handle your data with
            transparency and care.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-10 pb-20">
        {/* --- CORE PRINCIPLES (Cards) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <Lock className="text-cyan-600" />,
              title: "Highest Security",
              desc: "We employ military-grade encryption to keep your medical data strictly confidential.",
            },
            {
              icon: <UserCheck className="text-cyan-600" />,
              title: "Zero Disclosure",
              desc: "We never sell your personal or medical history to third parties without permission.",
            },
            {
              icon: <Eye className="text-cyan-600" />,
              title: "Transparent Cookies",
              desc: "We use cookies only for navigation, never to store sensitive card or personal info.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 transition-transform hover:-translate-y-2"
            >
              <div className="bg-cyan-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#283B6A] mb-3">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* --- DETAILED INFORMATION SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Info Collection */}
          <div className="lg:col-span-7 space-y-12">
            <section>
              <h2 className="text-3xl font-extrabold text-[#283B6A] mb-6 flex items-center gap-3">
                <Database className="text-cyan-600" /> Information We Collect
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4 p-5 bg-white rounded-2xl border-l-4 border-cyan-500 shadow-sm">
                  <div className="shrink-0">
                    <CheckCircle className="text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#283B6A]">
                      Directly Provided Information
                    </h4>
                    <p className="text-slate-600 text-sm italic">
                      Name, Phone Number, Email ID, Medical History.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-white rounded-2xl border-l-4 border-blue-500 shadow-sm">
                  <div className="shrink-0">
                    <Smartphone className="text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#283B6A]">
                      Device & Hardware Data
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Make & Model, Network info, and Unique Advertiser ID for
                      app optimization.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 bg-white rounded-2xl border-l-4 border-indigo-500 shadow-sm">
                  <div className="shrink-0">
                    <MapPin className="text-indigo-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#283B6A]">
                      Location Intelligence
                    </h4>
                    <p className="text-slate-600 text-sm">
                      Public IP address and Geo-coordinates (Lat/Long) to assist
                      in emergency services.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-[#283B6A] text-white rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Globe className="text-cyan-400" /> How We Use Your Data
                </h2>
                <ul className="space-y-4 text-blue-100">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></div>
                    <span>
                      Personalizing your app experience based on your medical
                      preferences.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></div>
                    <span>
                      Analyzing trends via secure third-party tools to improve
                      hospital services.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></div>
                    <span>
                      Ensuring rapid response during appointment scheduling or
                      emergencies.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            </section>
          </div>

          {/* Right: Contact & Support */}
          <div className="lg:col-span-5 lg:sticky lg:top-10">
            <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8">
              <h3 className="text-2xl font-bold text-[#283B6A] mb-6 flex items-center gap-2">
                <ShieldAlert className="text-red-500" /> Have Questions?
              </h3>
              <p className="text-slate-600 text-sm mb-8 leading-relaxed">
                Our compliance team is available 24/7 to resolve any privacy
                concerns. We usually respond within 24 hours.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-2xl flex items-center gap-4 shadow-sm">
                  <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Privacy Queries
                    </p>
                    <p className="text-sm font-bold text-[#283B6A]">
                      lotushospitalsantnagar@gmail.com
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl flex items-center gap-4 shadow-sm">
                  <div className="bg-cyan-100 p-3 rounded-xl text-cyan-600">
                    <Globe size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Digital Support
                    </p>
                    <p className="text-sm font-bold text-[#283B6A]">
                      lotushospitalsantnagar@gmail.com
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl flex items-center gap-4 shadow-sm">
                  <div className="bg-indigo-100 p-3 rounded-xl text-indigo-600">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Direct Line
                    </p>
                    <p className="text-sm font-bold text-[#283B6A]">
                      011-4978-5874
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-tighter">
                  <Scale size={14} /> Lotus Multispeciality Legal Team
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- FOOTER BADGE --- */}
      </div>
    </div>
  );
};

export default TermsAndPrivacy;
