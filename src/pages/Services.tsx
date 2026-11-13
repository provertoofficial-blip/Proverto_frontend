import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Globe,
  ArrowRight,
  FileText,
  Linkedin,
  Sparkles,
  PenTool,
  MessageSquare,
  Cpu,
  CheckCircle,
} from "lucide-react";
import { getDynamicServices, getCachedData, resolveIcon } from "@/lib/api";

interface ServiceItem {
  id: string;
  category: "Web & software" | "Mobile" | "AI & automation" | "Branding & careers" | string;
  icon: any;
  badge: string;
  title: string;
  subheading?: string;
  description: string;
  checkpoints: string[];
  link: string;
}

const rawDefaultServices = [
  {
    id: "expert-resume",
    title: "Expert Resume",
    name: "Expert Resume",
    subheading: "Done-for-you premium resume service with human expertise",
    description: "Done-for-you premium resume service with human expertise",
    icon: FileText,
    category: "Branding & careers",
    priceLabel: "From $99 / ₹8,999",
    checkpoints: [
      "Deep resume analysis",
      "Complete resume rewrite",
      "ATS & recruiter optimization",
      "Impact-driven bullet points",
      "Feedback & revision support",
    ],
    link: "/services/expert-resume",
  },
  {
    id: "linkedin-profile-optimization",
    title: "LinkedIn Profile Optimization",
    name: "LinkedIn Profile Optimization",
    subheading: "Transform your profile into a recruiter-attracting asset",
    description: "Transform your profile into a recruiter-attracting asset",
    icon: Linkedin,
    category: "Branding & careers",
    priceLabel: "From $99 / ₹8,999",
    checkpoints: [
      "Headline optimization",
      "About section rewrite",
      "Experience optimization",
      "Professional headshot & banner",
      "Content support for engagement",
    ],
    link: "/services/linkedin-profile-optimization",
  },
  {
    id: "linkedin-page-optimization",
    title: "LinkedIn Page Optimization",
    name: "LinkedIn Page Optimization",
    subheading: "Transform your page into a working asset",
    description: "Transform your page into a working asset",
    icon: Linkedin,
    category: "Branding & careers",
    priceLabel: "Quote on request",
    checkpoints: [
      "Page Setup or Revamp",
      "Brand Positioning",
      "Keyword & Visibility Optimization",
      "Visual Structure Guidance",
      "Content support for engagement",
    ],
    link: "/services/linkedin-page-optimization",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    name: "UI/UX Design",
    subheading: "Intuitive and engaging designs for web & mobile apps",
    description: "Intuitive and engaging designs for web & mobile apps",
    icon: Sparkles,
    category: "Web & software",
    priceLabel: "Quote on request",
    checkpoints: [
      "User research & personas",
      "Wireframing & prototyping",
      "Visual design & branding",
      "Usability testing",
      "Responsive design",
    ],
    link: "/services/ui/ux-design",
  },
  {
    id: "portfolio-development",
    title: "Portfolio Development",
    name: "Portfolio Development",
    subheading: "Showcase your skills with a professional portfolio",
    description: "Showcase your skills with a professional portfolio",
    icon: PenTool,
    category: "Branding & careers",
    priceLabel: "From $249 / ₹9,999",
    checkpoints: [
      "Custom portfolio design",
      "Project showcase",
      "Responsive layout",
      "SEO optimization",
      "Easy updates",
    ],
    link: "/services/portfolio-development",
  },
  {
    id: "web-development",
    title: "Websites Design & Development",
    name: "Websites Design & Development",
    subheading: "Modern websites designed to convert visitors into customers",
    description: "Modern websites designed to convert visitors into customers",
    icon: Globe,
    category: "Web & software",
    priceLabel: "Quote on request",
    checkpoints: [
      "Business & startup websites",
      "Landing pages for lead generation",
      "E-commerce websites",
      "Portfolio & personal branding sites",
      "SEO-optimized & mobile-first design",
    ],
    link: "/services/web-development",
  },
  {
    id: "whatsapp-automation",
    title: "WhatsApp AI Automation",
    name: "WhatsApp AI Automation",
    subheading: "Automate conversations. Close more deals. Save time.",
    description: "Automate conversations. Close more deals. Save time.",
    icon: MessageSquare,
    category: "AI & automation",
    priceLabel: "Quote on request",
    checkpoints: [
      "AI chatbots for WhatsApp",
      "24/7 automated customer support",
      "Lead qualification & follow-ups",
      "Appointment booking automation",
      "CRM & payment integrations",
    ],
    link: "/services/whatsapp-automation",
  },
  {
    id: "ai-tools",
    title: "AI Tools & Business Automation",
    name: "AI Tools & Business Automation",
    subheading: "Streamline your operations with intelligent automation",
    description: "Streamline your operations with intelligent automation",
    icon: Cpu,
    category: "AI & automation",
    priceLabel: "Quote on request",
    checkpoints: [
      "Workflow automation",
      "AI-powered customer engagement",
      "Email & WhatsApp automation",
      "CRM & marketing integrations",
      "Custom AI solutions for businesses",
    ],
    link: "/services/ai-tools",
  },
  {
    id: "software-testing",
    title: "Software Testing",
    name: "Software Testing",
    subheading: "Ensure your software is reliable and bug-free",
    description: "Ensure your software is reliable and bug-free",
    icon: CheckCircle,
    category: "Web & software",
    priceLabel: "Quote on request",
    checkpoints: [
      "Automated testing",
      "Manual testing",
      "Performance testing",
      "Security testing",
      "Compatibility testing",
    ],
    link: "/services/software-testing",
  },
];

const mapRawServiceItem = (item: any, idx: number): ServiceItem => {
  const rawSlug =
    item.slug ||
    (item.link ? item.link.replace(/^\/+/, "").replace(/^services\//, "") : "") ||
    (item.title ? item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") : "") ||
    item._id ||
    item.id;
  const link =
    item.link === "/service/packages" || item.link === "/services/packages"
      ? "/service/packages"
      : `/services/${rawSlug}`;

  return {
    id: item._id || item.id || item.title,
    category: item.category || "Web & software",
    icon: resolveIcon(item.icon, Globe, item.title || item.name, idx),
    badge: item.priceLabel || item.badge || "Quote on request",
    title: item.title || item.name,
    subheading: item.subheading || "",
    description: item.description || item.subheading || "",
    checkpoints:
      Array.isArray(item.checkpoints) && item.checkpoints.length > 0
        ? item.checkpoints
        : Array.isArray(item.features) && item.features.length > 0
        ? item.features
        : [],
    link,
  };
};

const defaultServiceItems: ServiceItem[] = rawDefaultServices.map((item, idx) =>
  mapRawServiceItem(item, idx)
);

const categoryTabs = [
  "All Services",
  "Web & software",
  "Mobile",
  "AI & automation",
  "Branding & careers",
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("All Services");

  // Instant render from cache or built-in defaults (0ms wait!)
  const cachedServices = getCachedData<any[]>("/content/services");
  const initialItems: ServiceItem[] =
    Array.isArray(cachedServices) && cachedServices.length > 0
      ? cachedServices
          .filter((s) => !s.status || s.status === "Published")
          .map((item, idx) => mapRawServiceItem(item, idx))
      : defaultServiceItems;

  const [servicesData, setServicesData] = useState<ServiceItem[]>(initialItems);
  const [isLoading, setIsLoading] = useState(initialItems.length === 0);

  useEffect(() => {
    // Revalidate in background without blocking initial rendering
    getDynamicServices<any[]>([]).then((data) => {
      if (Array.isArray(data) && data.length > 0) {
        const published = data.filter((s) => !s.status || s.status === "Published");
        const listToMap = published.length > 0 ? published : data;
        setServicesData(listToMap.map((item, idx) => mapRawServiceItem(item, idx)));
      }
      setIsLoading(false);
    }).catch(() => {
      setIsLoading(false);
    });
  }, []);

  const filteredServices =
    activeTab === "All Services" || activeTab === "All services"
      ? servicesData
      : servicesData.filter((item) => {
          const cat = (item.category || "").toLowerCase();
          if (activeTab === "Web & software") {
            return (
              cat.includes("web") ||
              cat.includes("software") ||
              cat.includes("design")
            );
          }
          if (activeTab === "Mobile") {
            return cat.includes("mobile") || cat.includes("app");
          }
          if (activeTab === "AI & automation") {
            return cat.includes("ai") || cat.includes("automation");
          }
          if (activeTab === "Branding & careers") {
            return cat.includes("brand") || cat.includes("career");
          }
          return cat === activeTab.toLowerCase();
        });

  return (
    <div className="min-h-screen bg-[#f8fafd] dark:bg-slate-950 flex flex-col justify-between">
      <Header />

      {/* Hero Section */}
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

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <p className="text-xs sm:text-sm font-semibold text-sky-400 mb-5">
              <Link to="/" className="hover:underline text-sky-400">
                Home
              </Link>{" "}
              / <span className="text-slate-300">Services</span>
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.14] mb-5">
              Services built around your goals.
            </h1>

            <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
              Choose a service to see what's included, how we deliver it and the quickest way to get started.
            </p>

            {/* Path to Service Packages */}
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <Link
                to="/service/packages"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-semibold text-xs sm:text-sm transition-all shadow-md hover:shadow-sky-500/25"
              >
                <span>Explore Personal Branding Packages</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Services Grid */}
      <section className="py-14 md:py-20">
        <div className="container-custom">
          {/* Service Packages Banner Path */}
          <div className="mb-10 bg-gradient-to-r from-[#081a2e] to-[#0d2847] rounded-2xl p-6 sm:p-8 text-white border border-sky-500/20 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-sky-500/20 text-sky-400 border border-sky-500/30 mb-2">
                Quick Registration & Checkout
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5">
                Looking for Portfolio Development Services?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl leading-relaxed">
                Check out our ready-to-launch packages with upfront transparent pricing, defined milestones, and direct online registration & checkout.
              </p>
            </div>
            <Link
              to="/service/packages"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-sky-500/25 transition-all whitespace-nowrap"
            >
              <span>Explore Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-10">
            {categoryTabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 select-none cursor-pointer ${
                    isActive
                      ? "bg-[#0f1f38] text-white shadow-sm"
                      : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  {tab}
                </button>
              );
            })}

            {/* Direct Link to Packages */}
            <Link
              to="/service/packages"
              className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-300 border border-sky-200 dark:border-sky-800 hover:bg-sky-100 dark:hover:bg-sky-900/60 transition-all sm:ml-auto flex items-center gap-1.5"
            >
              <span>View Packages</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 3-in-a-Row Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading ? (
              Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-7 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.04)] min-h-[220px] h-full animate-pulse"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-slate-200 dark:bg-slate-800 mb-4" />
                    <div className="h-5 bg-slate-200 dark:bg-slate-800 rounded w-3/4 mb-3" />
                    <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-full mb-2" />
                    <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-5/6" />
                  </div>
                  <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/3 pt-3.5 border-t border-slate-100 dark:border-slate-800" />
                </div>
              ))
            ) : filteredServices.length === 0 ? (
              <div className="col-span-full py-16 text-center">
                <p className="text-slate-500 dark:text-slate-400 text-base">
                  No services found for the selected category.
                </p>
              </div>
            ) : (
              filteredServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-7 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 min-h-[220px] h-full"
                  >
                    <div>
                      {/* Top Row: Icon + Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-11 h-11 rounded-xl bg-[#0c1f38] text-sky-400 dark:bg-slate-800 dark:text-sky-300 flex items-center justify-center shadow-sm">
                          <Icon className="w-5 h-5 stroke-[1.8]" />
                        </div>

                        {service.badge && (
                          <span className="text-[11px] font-medium text-slate-700 dark:text-slate-300 bg-sky-50 dark:bg-sky-950/60 px-3 py-1 rounded-full border border-sky-100 dark:border-sky-900">
                            {service.badge}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 leading-snug line-clamp-1">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 line-clamp-2">
                        {service.description || service.subheading}
                      </p>
                    </div>

                    {/* Bottom Actions Row */}
                    <div className="pt-3.5 border-t border-slate-100 dark:border-slate-800/80 mt-auto flex items-center justify-between">
                      <Link
                        to={service.link}
                        className="text-[#0284c7] dark:text-sky-400 hover:text-[#0369a1] dark:hover:text-sky-300 font-semibold text-sm transition-colors inline-flex items-center gap-1 group"
                      >
                        <span>Learn more</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>

                      <Link
                        to="/free-consultation"
                        className="text-xs font-semibold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
                      >
                        Request a quote
                      </Link>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
