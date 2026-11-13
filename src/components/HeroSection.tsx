import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Lock,
  Globe,
  Bot,
  Smartphone,
  Sparkles,
} from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative bg-[#081a2e] text-white pt-28 pb-14 md:pt-36 md:pb-16 lg:pt-38 lg:pb-20 overflow-hidden border-b border-slate-800"
    >
      {/* Blueprint Grid Lines Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient Gradient Glow Spheres */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Subtitle, CTAs & Checks (7 cols) */}
          <div className="lg:col-span-7">
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/25 text-xs font-bold text-sky-400 tracking-wider uppercase mb-5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400 shadow-[0_0_8px_#38bdf8]" />
              </span>
              <span>AI-POWERED DIGITAL SOLUTIONS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] xl:text-[58px] font-extrabold text-white tracking-tight leading-[1.12] mb-5">
              Intelligent Digital Solutions{" "}
              <span className="text-sky-400">Designed</span>{" "}for Real Outcomes
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-xl mb-7">
              Proverto designs and builds high-converting Websites, Custom Software, Mobile Apps, and AI-powered automation for startups, growing businesses & enterprises, and personal branding for professionals and international clients.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <Link
                to="/free-consultation"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-sm sm:text-base shadow-lg shadow-sky-500/20 transition-all duration-200 group"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm sm:text-base backdrop-blur-sm transition-all duration-200"
              >
                <span>Explore Services</span>
              </Link>
            </div>

            {/* Trust Checklist Row */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-7 text-xs sm:text-sm font-medium text-slate-300 pt-2 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-sky-400 stroke-[2.5]" />
                <span>Websites & Software</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-sky-400 stroke-[2.5]" />
                <span>Mobile Apps</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-sky-400 stroke-[2.5]" />
                <span>AI Automation</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-sky-400 stroke-[2.5]" />
                <span>Personal Branding</span>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Interactive Browser Mockup (5 cols) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Main Browser Mockup Window */}
            <div className="w-full max-w-md lg:max-w-none mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-white/20 dark:border-slate-800 overflow-hidden relative">
              {/* Browser Window Chrome (Top Bar) */}
              <div className="bg-slate-100 dark:bg-slate-800/90 px-4 py-3 border-b border-slate-200 dark:border-slate-700/80 flex items-center justify-between">
                {/* 3 Window Dots */}
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600 inline-block" />
                </div>

                {/* URL Capsule */}
                <div className="flex items-center justify-center gap-1.5 bg-white dark:bg-slate-900/90 text-slate-600 dark:text-slate-300 text-xs font-mono py-1 px-4 rounded-md border border-slate-200/80 dark:border-slate-700/80">
                  <Lock className="w-3 h-3 text-slate-400" />
                  <span className="tracking-tight">provertoglobal.com</span>
                </div>

                <div className="w-8" />
              </div>

              {/* Browser Viewport Content */}
              <div className="p-4 sm:p-5 bg-slate-50/70 dark:bg-slate-950/70">
                {/* Mini Hero Mockup Banner */}
                <div className="bg-[#0c1f38] rounded-xl p-5 sm:p-6 mb-4 shadow-sm border border-slate-800 text-white relative overflow-hidden">
                  <div className="h-3 w-44 sm:w-52 bg-white/90 rounded-full mb-2.5" />
                  <div className="h-2 w-32 sm:w-36 bg-slate-400/60 rounded-full mb-4" />
                  <div className="h-7 w-24 bg-[#0284c7] rounded-lg shadow-sm flex items-center justify-center text-[10px] font-bold text-white">
                    Get Started
                  </div>
                </div>

                {/* Mini 3-Card Feature Row */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                  <div className="bg-white dark:bg-slate-900 rounded-xl p-3 border border-slate-200/80 dark:border-slate-800 shadow-sm">
                    <div className="w-7 h-7 rounded-lg bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-2">
                      <Globe className="w-3.5 h-3.5" />
                    </div>
                    <div className="h-2 w-12 bg-slate-200 dark:bg-slate-700 rounded mb-1" />
                    <div className="h-1.5 w-8 bg-slate-100 dark:bg-slate-800 rounded" />
                  </div>

                  <div className="bg-white dark:bg-slate-900 rounded-xl p-3 border border-slate-200/80 dark:border-slate-800 shadow-sm">
                    <div className="w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-2">
                      <Smartphone className="w-3.5 h-3.5" />
                    </div>
                    <div className="h-2 w-12 bg-slate-200 dark:bg-slate-700 rounded mb-1" />
                    <div className="h-1.5 w-8 bg-slate-100 dark:bg-slate-800 rounded" />
                  </div>

                  <div className="bg-white dark:bg-slate-900 rounded-xl p-3 border border-slate-200/80 dark:border-slate-800 shadow-sm">
                    <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                    <div className="h-2 w-12 bg-slate-200 dark:bg-slate-700 rounded mb-1" />
                    <div className="h-1.5 w-8 bg-slate-100 dark:bg-slate-800 rounded" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Overlay Badge 1: Top-Right "NEXT STEP" */}
            <div className="absolute -top-3 -right-2 sm:-top-4 sm:-right-4 md:-right-6 z-20 bg-[#0284c7] text-white rounded-xl p-3.5 sm:p-4 shadow-xl border border-sky-400/40 backdrop-blur-md max-w-[200px] sm:max-w-[220px]">
              <span className="text-[10px] font-bold tracking-wider uppercase text-sky-100 block mb-1">
                NEXT STEP
              </span>
              <p className="text-xs sm:text-sm font-bold text-white leading-snug">
                Consultation request confirmed by our team
              </p>
            </div>

            {/* Floating Overlay Badge 2: Bottom-Left "Inquiry received" */}
            <div className="absolute -bottom-4 -left-2 sm:-bottom-5 sm:-left-4 md:-left-6 z-20 bg-white dark:bg-slate-900 rounded-xl p-3 sm:p-3.5 shadow-xl border border-slate-200/90 dark:border-slate-800 flex items-center gap-3 max-w-[220px] sm:max-w-[240px]">
              <div className="w-9 h-9 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-200 dark:border-emerald-800">
                <CheckCircle2 className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div className="min-w-0">
                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight block">
                  Inquiry received
                </span>
                <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 block mt-0.5">
                  Status: Confirmed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
