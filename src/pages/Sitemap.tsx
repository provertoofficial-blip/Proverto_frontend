import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Compass,
  Layers,
  Sparkles,
  GraduationCap,
  FileText,
  Shield,
  ArrowRight,
  ExternalLink,
  Globe,
} from "lucide-react";

interface SitemapCategory {
  title: string;
  icon: any;
  description: string;
  links: {
    name: string;
    path: string;
    description: string;
    badge?: string;
  }[];
}

const sitemapData: SitemapCategory[] = [
  {
    title: "Main Pages",
    icon: Compass,
    description: "Explore the core pages and company background of ProVerto.",
    links: [
      { name: "Home", path: "/", description: "ProVerto digital solutions homepage" },
      { name: "About Us", path: "/about", description: "Our company mission, vision and expert team" },
      { name: "Why Us", path: "/why-us", description: "Why leading businesses and professionals trust ProVerto" },
      { name: "Our Process", path: "/process", description: "Step-by-step execution roadmap from consultation to launch" },
      { name: "Case Studies", path: "/case-studies", description: "Client outcomes and proven digital transformations" },
      { name: "Blog & Insights", path: "/blog", description: "Articles on web engineering, AI automation and branding" },
      { name: "Contact Us", path: "/contact", description: "Get in touch with our team for inquiries and questions" },
      { name: "Book Free Consultation", path: "/free-consultation", description: "Schedule a 1-on-1 discovery call with our specialists" },
    ],
  },
  {
    title: "Services & Solutions",
    icon: Layers,
    description: "Explore our comprehensive service offerings tailored to scale your digital presence.",
    links: [
      { name: "All Services Overview", path: "/services", description: "Complete directory of our technology and design services" },
      { name: "Service Packages", path: "/service/packages", description: "Pre-configured portfolio & personal branding packages with transparent pricing", badge: "Popular" },
      { name: "Websites Design & Development", path: "/services/web-development", description: "Custom, responsive and high-converting modern websites" },
      { name: "Software Testing & QA", path: "/services/software-testing", description: "Manual and automated quality assurance for zero-bug software" },
      { name: "WhatsApp AI Automation", path: "/services/whatsapp-automation", description: "Smart 24/7 chatbots and lead capture on WhatsApp" },
      { name: "AI Tools & Business Automation", path: "/services/ai-tools", description: "Automated business workflows and custom intelligent pipelines" },
      { name: "UI/UX Design", path: "/services/ui/ux-design", description: "Intuitive digital product interfaces and clickable prototypes" },
      { name: "Expert Resume Makeover", path: "/services/expert-resume", description: "ATS-optimized executive resumes engineered by specialists" },
      { name: "LinkedIn Profile Optimization", path: "/services/linkedin-profile-optimization", description: "Position your profile to attract top recruiters and clients" },
      { name: "LinkedIn Company Page Optimization", path: "/services/linkedin-page-optimization", description: "Drive inbound B2B business inquiries on LinkedIn" },
      { name: "Portfolio Development", path: "/services/portfolio-development", description: "Custom portfolio sites for executives and students" },
    ],
  },
  {
    title: "Programs & Training",
    icon: GraduationCap,
    description: "Industry-driven technical education and hands-on project internships.",
    links: [
      {
        name: "Full Stack Internship Program",
        path: "/internship",
        description: "6-month program with 4 months structured MERN training & 2 months supervised internship",
        badge: "New",
      },
    ],
  },
  {
    title: "Legal & Policies",
    icon: Shield,
    description: "Our legal terms, security standards and privacy practices.",
    links: [
      { name: "Privacy Policy", path: "/privacy-policy", description: "How we collect, protect and handle client data" },
      { name: "Terms & Conditions", path: "/terms-and-conditions", description: "Terms governing use of our website and services" },
      { name: "Refund & Cancellation Policy", path: "/refund-and-cancellation-policy", description: "Clear guidelines on cancellations, milestone payments and refunds" },
      { name: "XML Sitemap", path: "/sitemap.xml", description: "Machine-readable search engine index file", badge: "XML" },
    ],
  },
];

const Sitemap = () => {
  return (
    <div className="min-h-screen bg-[#f8fafd] dark:bg-slate-950 flex flex-col justify-between">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-[#081a2e] text-white border-b border-slate-800 overflow-hidden">
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
            <p className="text-xs sm:text-sm font-semibold text-sky-400 mb-4">
              <Link to="/" className="hover:underline">Home</Link> / <span className="text-slate-300">Sitemap</span>
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
              ProVerto Sitemap
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Quickly find any page, service, package, or legal documentation across our platform.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Sections Grid */}
      <main className="py-14 md:py-20 flex-1">
        <div className="container-custom">
          <div className="space-y-12">
            {sitemapData.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-sm"
                >
                  <div className="flex items-center gap-3.5 mb-2 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-slate-800 text-sky-600 dark:text-sky-400 flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                        {category.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                    {category.links.map((item) => {
                      const isXml = item.path.endsWith(".xml");
                      return isXml ? (
                        <a
                          key={item.path}
                          href={item.path}
                          target="_blank"
                          rel="noreferrer"
                          className="group p-4 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-sky-300 dark:hover:border-sky-700 bg-slate-50/50 dark:bg-slate-800/40 hover:bg-white dark:hover:bg-slate-800 transition-all flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors inline-flex items-center gap-1.5">
                                {item.name}
                                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                              </span>
                              {item.badge && (
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 uppercase tracking-wider">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                          <span className="text-xs text-sky-500 font-medium mt-3 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                            Open XML &rarr;
                          </span>
                        </a>
                      ) : (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="group p-4 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-sky-300 dark:hover:border-sky-700 bg-slate-50/50 dark:bg-slate-800/40 hover:bg-white dark:hover:bg-slate-800 transition-all flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-semibold text-sm text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                                {item.name}
                              </span>
                              {item.badge && (
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                                  item.badge === "Popular"
                                    ? "bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300"
                                    : "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300"
                                }`}>
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                          <span className="text-xs text-sky-500 font-medium mt-3 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                            Visit page <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sitemap;
