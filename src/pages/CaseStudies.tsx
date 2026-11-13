import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  TrendingUp,
  Globe,
  MessageSquare,
  Sparkles,
  User,
  ArrowRight,
  ExternalLink,
  Award,
  Layers,
  Image as ImageIcon,
} from "lucide-react";
import { getDynamicCaseStudies } from "@/lib/api";

interface CaseStudy {
  id: string;
  category: string;
  badgeCategory: string;
  title: string;
  client: string;
  metric: string;
  metricLabel: string;
  challenge: string;
  solution: string;
  outcome: string;
  technologies: string[];
  image?: string;
  imageUrl?: string;
}

/*
const defaultCaseStudiesData: CaseStudy[] = [
  {
    id: "1",
    category: "Web Development",
    badgeCategory: "WEBSITE DEVELOPMENT",
    title: "High-Converting Web Platform for B2B Logistics Enterprise",
    client: "Global Logistics Provider",
    metric: "+240%",
    metricLabel: "Inbound Quote Requests",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    challenge:
      "Legacy website was slow, failed on mobile devices, and caused a high drop-off rate on quote request forms.",
    solution:
      "Engineered a Next.js web application with dynamic rate calculator, instant lead routing, and semantic SEO architecture.",
    outcome:
      "Page speed improved to 0.9s; organic search leads increased by 240% within 90 days of deployment.",
    technologies: ["React", "Next.js", "Tailwind CSS", "AEO Schema", "HubSpot CRM"],
  },
  {
    id: "2",
    category: "AI & Automation",
    badgeCategory: "WHATSAPP AI AUTOMATION",
    title: "24/7 Automated WhatsApp Sales & Support Bot",
    client: "High-Growth Healthcare Clinic",
    metric: "3x Faster",
    metricLabel: "Lead Response Time",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    challenge:
      "Losing potential patients during weekends and after-hours due to delayed manual WhatsApp responses.",
    solution:
      "Integrated official Meta WhatsApp Cloud API with custom AI agent that answers patient FAQs and books consultations directly onto doctors' calendars.",
    outcome:
      "Automated 82% of patient inquiries with zero staff overhead and captured 40% more booking conversions.",
    technologies: ["Meta Cloud API", "FastAPI", "OpenAI LLM", "Google Calendar API"],
  },
  {
    id: "3",
    category: "AI & Automation",
    badgeCategory: "PROCESS AUTOMATION",
    title: "End-to-End Invoice & Client Onboarding Automation",
    client: "Financial Consulting Firm",
    metric: "-85%",
    metricLabel: "Manual Admin Hours",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    challenge:
      "Manual invoice generation and client onboarding were slow and prone to errors.",
    solution:
      "Implemented intelligent document processing and workflow automations linking CRM, billing, and notification streams.",
    outcome:
      "Cut onboarding turnaround time from 4 days to 45 minutes with zero error rates.",
    technologies: ["Python", "FastAPI", "Stripe API", "Make.com", "PostgreSQL"],
  },
  {
    id: "4",
    category: "Branding & Career",
    badgeCategory: "PERSONAL BRANDING",
    title: "Executive LinkedIn Revamp & Thought Leadership Engine",
    client: "Fintech CTO & Advisor",
    metric: "5x Inbound",
    metricLabel: "Investor & Speaking Invites",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
    challenge:
      "Executive profile had generic bullet points, low search discovery, and failed to reflect senior leadership achievements.",
    solution:
      "Complete profile repositioning, authoritative headline architecture, custom visual branding, and structured thought-leadership publishing roadmap.",
    outcome:
      "Profile impressions jumped from 800 to over 14,000 monthly, leading to multiple podcast appearances and board advisory seats.",
    technologies: ["LinkedIn SEO", "Brand Strategy", "Content Copywriting", "Visual Design"],
  },
  {
    id: "5",
    category: "Web Development",
    badgeCategory: "SOFTWARE DEVELOPMENT",
    title: "Custom SaaS Portal with Role-Based Permissions",
    client: "EdTech Startup",
    metric: "99.98%",
    metricLabel: "Platform Uptime",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    challenge:
      "Rapidly scaling student numbers overwhelmed existing off-the-shelf course tools, creating database slowdowns.",
    solution:
      "Engineered custom portal with role-based dashboard for instructors, students, and admins with automated payment handling.",
    outcome:
      "Supported 10,000+ simultaneous active users with zero downtime, cutting hosting costs by 45%.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe API", "AWS"],
  },
  {
    id: "6",
    category: "Branding & Career",
    badgeCategory: "CAREER SERVICES",
    title: "ATS-Optimized Resume Overhaul for Senior Cloud Architect",
    client: "Senior Systems Architect",
    metric: "87% Rate",
    metricLabel: "Interview Callback Rate",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80",
    challenge:
      "Client had 12+ years of senior cloud experience but was getting auto-rejected by enterprise ATS filters due to bad formatting.",
    solution:
      "Restructured resume with quantifiable metrics, integrated targeted cloud architectural keywords, and cleaned up typography.",
    outcome:
      "Secured 7 senior architect interviews within 3 weeks, culminating in two Tier-1 tech enterprise offers.",
    technologies: ["ATS Optimization", "Executive Storytelling", "Keyword Alignment"],
  },
];
*/
const defaultCaseStudiesData: CaseStudy[] = [];

const categories = ["All Projects", "Web Development", "AI & Automation", "Branding & Career"];

const CaseStudies = () => {
  const [selectedFilter, setSelectedFilter] = useState("All Projects");
  const [studiesData, setStudiesData] = useState<CaseStudy[]>(defaultCaseStudiesData);

  useEffect(() => {
    getDynamicCaseStudies<any[]>([]).then((data) => {
      if (Array.isArray(data) && data.length > 0) {
        const mapped: CaseStudy[] = data.map((item, idx) => ({
          id: item._id || item.id || String(idx + 1),
          category: item.category || "Web Development",
          badgeCategory: item.badgeCategory || "CASE STUDY",
          title: item.title,
          client: item.client || "Client Project",
          metric: item.metric || "+240%",
          metricLabel: item.metricLabel || "Growth Impact",
          challenge: item.challenge || "",
          solution: item.solution || "",
          outcome: item.outcome || "",
          technologies: Array.isArray(item.technologies) ? item.technologies : [],
          image: item.image || item.imageUrl || "",
          imageUrl: item.imageUrl || item.image || "",
        }));
        setStudiesData(mapped);
      }
    });
  }, []);

  const filteredStudies =
    selectedFilter === "All Projects"
      ? studiesData
      : studiesData.filter((c) => {
          if (selectedFilter === "Web Development") {
            return c.category.toLowerCase().includes("web") || c.category.toLowerCase().includes("software");
          }
          if (selectedFilter === "AI & Automation") {
            return c.category.toLowerCase().includes("ai") || c.category.toLowerCase().includes("automation");
          }
          if (selectedFilter === "Branding & Career") {
            return c.category.toLowerCase().includes("brand") || c.category.toLowerCase().includes("career");
          }
          return c.category.toLowerCase() === selectedFilter.toLowerCase();
        });

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
              <span className="text-slate-300">Case Studies</span>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-white tracking-tight leading-[1.14] mb-5">
              See how we approach{" "}
              <span className="text-sky-400">real projects</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
              From solving operational bottlenecks to building high-converting platforms, here is how our technology and strategy deliver verifiable outcomes.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                    selectedFilter === cat
                      ? "bg-[#0284c7] text-white shadow-sm"
                      : "bg-[#0c1f38] text-slate-300 border border-slate-700/80 hover:border-slate-500 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <main className="py-14 md:py-20 flex-grow">
        <div className="container-custom">
          {filteredStudies.length === 0 ? (
            <div className="py-20 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-8">
              <p className="text-slate-500 dark:text-slate-400 text-base font-medium">
                No case studies published yet. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredStudies.map((study) => (
                <div
                  key={study.id}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* Project Image & Metric Overlay Header */}
                  <div className="relative h-48 sm:h-52 w-full bg-[#0c1f38] overflow-hidden border-b border-slate-800 select-none">
                    {study.image || study.imageUrl ? (
                      <img
                        src={study.image || study.imageUrl}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#0c1f38] flex items-center justify-center text-slate-500">
                        <ImageIcon className="w-8 h-8 text-sky-400/50" />
                      </div>
                    )}

                    {/* Gradient Overlay for high contrast readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081a2e] via-[#081a2e]/60 to-transparent" />

                    {/* Highlight Metric Overlay */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                      <div>
                        <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
                          {study.metric}
                        </span>
                        <p className="text-[11px] font-bold text-sky-300 uppercase tracking-wider">
                          {study.metricLabel}
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-sky-500/20 backdrop-blur-md border border-sky-400/30 flex items-center justify-center text-sky-300">
                        <Award className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="text-[11px] font-bold tracking-wider text-sky-600 dark:text-sky-400 uppercase">
                          {study.badgeCategory}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400 truncate">
                          {study.client}
                        </span>
                      </div>

                      <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3.5 leading-snug group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                        {study.title}
                      </h2>

                      <div className="space-y-2.5 text-xs sm:text-sm pt-1">
                        <p className="leading-relaxed">
                          <span className="font-bold text-slate-900 dark:text-slate-200">Challenge: </span>
                          <span className="text-slate-600 dark:text-slate-400">{study.challenge}</span>
                        </p>
                        <p className="leading-relaxed">
                          <span className="font-bold text-slate-900 dark:text-slate-200">Solution: </span>
                          <span className="text-slate-600 dark:text-slate-400">{study.solution}</span>
                        </p>
                        <p className="leading-relaxed">
                          <span className="font-bold text-slate-900 dark:text-slate-200">Outcome: </span>
                          <span className="text-slate-600 dark:text-slate-400">{study.outcome}</span>
                        </p>
                      </div>
                    </div>

                    {/* Tech Tags & CTA */}
                    <div className="pt-5 border-t border-slate-100 dark:border-slate-800 mt-5">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {study.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[10px] font-semibold bg-[#f8fafd] dark:bg-slate-950 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded-md border border-slate-200/80 dark:border-slate-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <Link
                        to="/free-consultation"
                        className="inline-flex items-center justify-between w-full py-2.5 px-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950/40 text-slate-700 dark:text-slate-200 hover:text-sky-600 font-semibold text-xs transition-colors group/link"
                      >
                        <span>Discuss a Similar Project</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <CTASection />
      <Footer />
    </div>
  );
};

export default CaseStudies;
