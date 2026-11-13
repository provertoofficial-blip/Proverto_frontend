import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Link } from "react-router-dom";
import {
  Compass,
  Layout,
  Code2,
  CheckCircle2,
  TrendingUp,
  Clock,
  Shield,
  FileCheck,
  Users2,
  ArrowRight,
  Workflow,
} from "lucide-react";

const processPhases = [
  {
    phase: "01",
    name: "Discover & Strategy",
    headline: "Uncovering your core goals, audience, and technical boundaries.",
    icon: Compass,
    deliverables: [
      "Discovery session & scope alignment",
      "User persona & competitive landscape analysis",
      "Technical architecture recommendations",
      "Fixed milestone timeline and clear deliverables",
    ],
    duration: "Week 1",
    description:
      "We start by listening. Before writing a line of code or designing a single wireframe, we diagnose your real challenges, establish clear metrics for success, and outline the exact roadmap to achieve them.",
  },
  {
    phase: "02",
    name: "Plan & Design",
    headline: "Interactive wireframes and responsive layouts approved before build.",
    icon: Layout,
    deliverables: [
      "Information architecture & sitemap mapping",
      "High-fidelity responsive UI layouts in Figma",
      "Interactive click-through prototype",
      "Design sign-off and milestone approval",
    ],
    duration: "Weeks 2 – 3",
    description:
      "Design isn't just decoration — it's clarity. We engineer seamless user journeys that guide prospects directly to enquiry, with layouts reviewed and approved by you at every step.",
  },
  {
    phase: "03",
    name: "Build & Integrate",
    headline: "Clean, modern, and modular code built around how your business works.",
    icon: Code2,
    deliverables: [
      "Component-based modern frontend engineering",
      "Backend API, database & CMS integration",
      "CRM, email & automated workflow triggers",
      "Staging server access for real-time progress viewing",
    ],
    duration: "Weeks 3 – 5",
    description:
      "We build with speed and precision. Using modern frameworks and maintainable code patterns, we implement your application so it remains blazingly fast, secure, and easy for your team to manage.",
  },
  {
    phase: "04",
    name: "Test & Launch",
    headline: "Rigorous audits for security, mobile responsiveness, and SEO readiness.",
    icon: CheckCircle2,
    deliverables: [
      "Cross-browser and mobile device verification",
      "SEO, meta tags, AEO & structured data setup",
      "Form validation, SSL & security checks",
      "Seamless domain switch and production release",
    ],
    duration: "Week 6",
    description:
      "Nothing goes live until it is thoroughly battle-tested. We execute strict end-to-end testing, speed benchmarking, and security checks so your go-live is smooth and worry-free.",
  },
  {
    phase: "05",
    name: "Support & Grow",
    headline: "Empowering your team with admin training and ongoing scalability.",
    icon: TrendingUp,
    deliverables: [
      "Comprehensive handover & walkthrough video session",
      "Full ownership transfer of accounts and code repositories",
      "Post-launch warranty & bug-fix guarantee",
      "Optional monthly scaling & feature expansion",
    ],
    duration: "Ongoing",
    description:
      "Our partnership doesn't end at deployment. We train your internal team to make content updates independently and provide dependable ongoing technical backing as your business expands.",
  },
];

const processPillars = [
  {
    icon: Clock,
    title: "Zero Vague Timelines",
    description: "Every phase has locked dates, clear deliverables, and bi-weekly progress updates.",
  },
  {
    icon: Shield,
    title: "100% IP Ownership",
    description: "You own all code, designs, domain assets, and hosting accounts from day one.",
  },
  {
    icon: FileCheck,
    title: "No Developer Dependency",
    description: "We configure intuitive admin panels so your marketing team can edit content without paying dev hours.",
  },
  {
    icon: Users2,
    title: "Direct Specialist Access",
    description: "You collaborate directly with senior engineers and strategists, never an intermediary.",
  },
];

const Process = () => {
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
              <span className="text-slate-300">How We Work</span>
            </nav>

            {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs font-semibold text-sky-300 border border-white/15 mb-5">
              <Workflow className="w-3.5 h-3.5 text-sky-400" />
              <span>STRUCTURED 5-PHASE METHODOLOGY</span>
            </div> */}

            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-white tracking-tight leading-[1.14] mb-5">
              A simple, transparent path from{" "}
              <span className="text-sky-400">idea to live launch</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
              We eliminate guesswork with a battle-tested 5-phase delivery process that delivers high-performing technology on schedule and within budget.
            </p>

            <div>
              <Link
                to="/free-consultation"
                className="inline-flex items-center justify-center bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-sm transition-all duration-200 gap-2"
              >
                <span>Discuss Your Project Timeline</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Process Phases Walkthrough */}
      <main className="py-14 md:py-20 flex-grow">
        <div className="container-custom">
          <div className="max-w-3xl mb-10">
            <p className="text-xs sm:text-sm font-bold tracking-[0.14em] text-sky-600 dark:text-sky-400 uppercase mb-2">
              THE 5 PHASES
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              From concept to live platform in five structured milestones.
            </h2>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {processPhases.map((phase) => {
              const Icon = phase.icon;
              return (
                <div
                  key={phase.phase}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                    {/* Left: Number & Main Info */}
                    <div className="lg:col-span-5">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl sm:text-3xl font-extrabold text-sky-600 dark:text-sky-400 font-mono">
                          {phase.phase}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-[#0c1f38] text-sky-400 flex items-center justify-center shrink-0 shadow-sm">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200/80 dark:border-slate-700">
                          {phase.duration}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        {phase.name}
                      </h3>
                      <p className="text-sm font-semibold text-sky-700 dark:text-sky-300 mb-3">
                        {phase.headline}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {phase.description}
                      </p>
                    </div>

                    {/* Right: Deliverables List */}
                    <div className="lg:col-span-7 bg-[#f8fafd] dark:bg-slate-950/70 rounded-xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800">
                      <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3">
                        Phase Deliverables:
                      </h4>
                      <ul className="space-y-2.5">
                        {phase.deliverables.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Our Process Works */}
        <section className="mt-14 pt-12 border-t border-slate-200/70 dark:border-slate-800">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="text-xs sm:text-sm font-bold tracking-[0.14em] text-sky-600 dark:text-sky-400 uppercase mb-2">
                THE PROVERTO ADVANTAGE
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Why our methodology works.
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-2">
                We designed our workflow to remove common agency bottlenecks and ensure effortless collaboration.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {processPillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800 shadow-sm flex flex-col justify-start"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#0c1f38] text-sky-400 flex items-center justify-center mb-5 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Process;
