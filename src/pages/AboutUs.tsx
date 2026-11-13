import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Link } from "react-router-dom";
import {
  MessageCircle,
  Users,
  Building2,
  Target,
  Lightbulb,
  Rocket,
  CheckCircle2,
  Heart,
  Zap,
  Shield,
  ArrowRight,
  Sparkles,
  Award,
  Globe2,
} from "lucide-react";

const AboutUs = () => {
  const whatsappNumber = "918770836725";
  const whatsappMessage = encodeURIComponent("Hi Proverto, I'd like to learn more about your services.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-[#f8fafd] dark:bg-slate-950 flex flex-col justify-between">
      <Header />

      {/* Blueprint Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-[#081a2e] text-white overflow-hidden border-b border-slate-800">
        {/* Blueprint Grid Lines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "36px 36px",
          }}
        />
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-sky-400 mb-4">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-slate-500">/</span>
              <span className="text-slate-300">About Us</span>
            </nav>

            {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs font-semibold text-sky-300 border border-white/15 mb-5">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>SIMPLIFYING DIGITAL GROWTH & CAREERS</span>
            </div> */}

            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-white tracking-tight leading-[1.14] mb-5">
              We help people & businesses grow with{" "}
              <span className="text-sky-400">AI, automation & strategy</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
              Proverto is built to simplify growth. We combine AI intelligence, automation, and modern digital solutions to help you move faster, smarter, and with total confidence.
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                to="/free-consultation"
                className="inline-flex items-center justify-center bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-sm transition-all duration-200 gap-2"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#0c1f38] hover:bg-[#132b4d] text-white border border-slate-700 font-bold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25d366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="py-14 md:py-20 flex-grow">
        <div className="container-custom">
          {/* Our Story Card */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-7 sm:p-10 shadow-sm mb-12">
            <div className="max-w-3xl mb-8">
              <p className="text-xs sm:text-sm font-bold tracking-[0.14em] text-sky-600 dark:text-sky-400 uppercase mb-2">
                OUR STORY
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
                Growth shouldn't be complicated, confusing, or inaccessible.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                We founded Proverto after seeing skilled professionals struggle to get interview callbacks and growing businesses burn out doing repetitive manual admin.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-[#f8fafd] dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800">
                <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block mb-1">
                  The Career Bottleneck
                </span>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  High-caliber professionals are routinely filtered out by ATS algorithms and generic LinkedIn profiles.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#f8fafd] dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800">
                <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block mb-1">
                  The Conversion Gap
                </span>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  Businesses invest in traffic, but outdated websites fail to convert visitors into booked customer enquiries.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#f8fafd] dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800">
                <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block mb-1">
                  Manual Overhead
                </span>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  Teams lose dozens of billable hours each week copying data between spreadsheets, emails, and CRMs.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
                We Bridge the Gap Between Potential & Performance Using:
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  "Expert Career Strategy",
                  "High-Converting Websites",
                  "WhatsApp AI Automation",
                  "Smart Business Workflows",
                ].map((item) => (
                  <div
                    key={item}
                    className="p-3.5 rounded-xl bg-[#0c1f38] text-white border border-slate-800 text-center font-bold text-xs"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* What We Do: 2 Columns */}
          <div className="mb-14">
            <div className="max-w-2xl mb-8">
              <p className="text-xs sm:text-sm font-bold tracking-[0.14em] text-sky-600 dark:text-sky-400 uppercase mb-2">
                WHAT WE DO
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Clear positioning for professionals and businesses.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {/* For Professionals */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-sm">
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-[#0c1f38] text-sky-400 flex items-center justify-center shrink-0 shadow-sm">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">For Professionals</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Career Acceleration & Authority</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Transform standard Resumes into ATS-compliant, impact-driven executive resumes",
                    "Position personal LinkedIn profiles to attract inbound recruiter messages",
                    "Elevate personal branding and thought leadership credibility",
                    "Attract premium career opportunities without cold outreach fatigue",
                    "Build a professional portfolio website to showcase work, achievements, and expertise",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* For Businesses */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-7 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-sm">
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-[#0c1f38] text-sky-400 flex items-center justify-center shrink-0 shadow-sm">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">For Businesses</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Digital Systems & Automation</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {[
                    "Build fast, responsive, conversion-focused custom web applications",
                    "Deploy 24/7 automated WhatsApp agents for lead capture and instant FAQs",
                    "Slash response times from hours to seconds with intelligent routing",
                    "Eliminate manual admin tasks with robust API and CRM automations",
                    "Implement secure, scalable, and future-ready digital systems for growth",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 4-Step Methodology */}
          <div className="mb-14">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="text-xs sm:text-sm font-bold tracking-[0.14em] text-sky-600 dark:text-sky-400 uppercase mb-2">
                HOW WE DELIVER
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Our 4-Stage Execution Framework
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-2">
                We don't believe in guesswork. Every engagement follows a proven trajectory designed for speed, clarity, and return on investment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: Target, step: "01", title: "Understand", desc: "Deeply evaluate your goals, audience expectations, and operational bottlenecks." },
                { icon: Lightbulb, step: "02", title: "Strategize", desc: "Architect clear positioning, high-converting layouts, and automated technical workflows." },
                { icon: Rocket, step: "03", title: "Build", desc: "Engineer clean, fast, and secure applications with modular code and admin tools." },
                { icon: Zap, step: "04", title: "Optimize", desc: "Analyze live metrics, test conversions, and continuously scale performance." },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-[#0c1f38] text-sky-400 flex items-center justify-center shadow-sm">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xl font-extrabold text-sky-600 dark:text-sky-400 font-mono">
                          {item.step}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Our Vision Feature Box */}
          <div className="bg-[#0c1f38] text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-md mb-14 relative overflow-hidden">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 text-xs font-bold uppercase tracking-wider mb-3">
                OUR VISION
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Making Advanced Tech Simple, Useful, and Human-Centered
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
                We believe cutting-edge AI and digital systems should empower teams, not overwhelm them with complexity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { icon: Users, title: "Professionals", desc: "Gain visibility, credibility, and authority in their industries." },
                { icon: Building2, title: "Businesses", desc: "Operate smarter with automated lead intake and reliable infrastructure." },
                { icon: Heart, title: "Human Guidance", desc: "AI that amplifies human creativity and speed, never replaces it." },
              ].map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="bg-[#081a2e] rounded-xl p-6 border border-slate-700/80 text-center">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/15 text-sky-400 flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-1.5">{v.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 5 Core Pillars */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <p className="text-xs sm:text-sm font-bold tracking-[0.14em] text-sky-600 dark:text-sky-400 uppercase mb-2">
              CORE PRINCIPLES
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Why Teams Choose Proverto
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: Zap, text: "AI-first, human-guided" },
              { icon: Target, text: "Outcome-driven, not buzzwords" },
              { icon: Shield, text: "100% IP & code ownership" },
              { icon: Rocket, text: "Rapid & dependable release" },
              { icon: Lightbulb, text: "Long-term scalability" },
            ].map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.text}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-800 shadow-sm text-center flex flex-col items-center justify-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0c1f38] text-sky-400 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white leading-snug">{p.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <CTASection />
      <Footer />
    </div>
  );
};

export default AboutUs;
