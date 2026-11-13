import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Link } from "react-router-dom";
import {
  Check,
  X,
  Shield,
  Zap,
  TrendingUp,
  Cpu,
  Layers,
  Award,
  ArrowRight,
} from "lucide-react";

const pillars = [
  {
    title: "Built to Convert",
    icon: TrendingUp,
    headline: "Every pixel is engineered with clear intent.",
    description:
      "A pretty website that doesn't generate enquiries is an expense, not an investment. We structure navigation, calls-to-action, and storytelling around real human psychology to convert casual visitors into qualified customers.",
    benefits: [
      "Intuitive navigation and friction-free user journeys",
      "Strategic CTA placement above and below the fold",
      "High-speed loading times under 1.5 seconds",
      "Mobile-optimized checkout and consultation funnels",
    ],
  },
  {
    title: "You Stay in Control",
    icon: Layers,
    headline: "No hostage holding or developer lock-in.",
    description:
      "We believe you should own your technology. We build on modern, open architectures with intuitive admin portals so your marketing team can update text, images, blogs, and pricing without paying an hourly developer fee.",
    benefits: [
      "User-friendly admin dashboards tailored to your team",
      "100% transfer of code repositories and server credentials",
      "Custom video documentation walkthroughs",
      "No proprietary platform lock-in",
    ],
  },
  {
    title: "Found by Search and AI",
    icon: Cpu,
    headline: "Optimized for Google, Bing, ChatGPT and Perplexity.",
    description:
      "Modern discovery happens on both traditional search engines (SEO) and generative AI engines (GEO/AEO). We build semantic HTML, structured JSON-LD schemas, and fast server responses so your brand ranks at the top across all platforms.",
    benefits: [
      "Semantic HTML5 & clean component architecture",
      "Automated schema markup (Organization, Service, FAQ)",
      "High Core Web Vitals (90+ mobile & desktop scores)",
      "AEO-ready content indexing for AI assistants",
    ],
  },
  {
    title: "Secure by Design",
    icon: Shield,
    headline: "Enterprise-grade protection standard on every build.",
    description:
      "Security is never an afterthought. From protected admin access to encrypted form transmissions and verified server-side payment processing, we safeguard your business and your customer's data from day one.",
    benefits: [
      "Automatic SSL/TLS encryption & HTTPS enforcement",
      "Protected admin panel access with rate limiting",
      "Server-verified payments via Stripe & Razorpay",
      "Regular vulnerability patching & dependency audits",
    ],
  },
];

const comparisonData = [
  {
    criterion: "Communication & Language",
    proverto: "Plain language, weekly updates, direct team access",
    agencies: "Heavy jargon, account manager delays",
    freelancers: "Unreliable, frequent ghosting",
  },
  {
    criterion: "Technology & AI",
    proverto: "Cutting-edge AI, modern frameworks & fast headless CMS",
    agencies: "Outdated WordPress themes, slow plugins",
    freelancers: "Varies wildly depending on skill",
  },
  {
    criterion: "Asset & Code Ownership",
    proverto: "100% client-owned code, domains, and cloud accounts",
    agencies: "Often locked in proprietary hosting setups",
    freelancers: "Frequently withhold access until disputes resolve",
  },
  {
    criterion: "Business Outcome Focus",
    proverto: "Focused on conversion rates, leads, and real ROI",
    agencies: "Focused on billable hours & arbitrary design awards",
    freelancers: "Focused only on closing the task ticket",
  },
  {
    criterion: "Ongoing Support & Training",
    proverto: "Video walkthroughs, admin panels, post-launch warranty",
    agencies: "Expensive mandatory monthly retainer contracts",
    freelancers: "Rarely available after final invoice",
  },
];

const WhyUs = () => {
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
              <span className="text-slate-300">Why Choose Us</span>
            </nav>

            {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs font-semibold text-sky-300 border border-white/15 mb-5">
              <Award className="w-3.5 h-3.5 text-sky-400" />
              <span>THE PROVERTO ADVANTAGE</span>
            </div> */}

            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-white tracking-tight leading-[1.14] mb-5">
              A technology partner you can{" "}
              <span className="text-sky-400">understand and rely on</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
              We replace technical confusion with straightforward execution. We build high-performing digital systems that drive growth while keeping you in total control.
            </p>

            <div>
              <Link
                to="/free-consultation"
                className="inline-flex items-center justify-center bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-sm px-7 py-3.5 rounded-xl shadow-sm transition-all duration-200 gap-2"
              >
                <span>Talk to Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Core Pillars Detail */}
      <main className="py-14 md:py-20 flex-grow">
        <div className="container-custom">
          <div className="max-w-2xl mb-10">
            <p className="text-xs sm:text-sm font-bold tracking-[0.14em] text-sky-600 dark:text-sky-400 uppercase mb-2">
              OUR STANDARDS
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Four non-negotiable promises on every project.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-7 sm:p-8 border border-slate-200/90 dark:border-slate-800 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#0c1f38] text-sky-400 flex items-center justify-center mb-5 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-sky-700 dark:text-sky-300 mb-3">
                      {pillar.headline}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-5 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
                    {pillar.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
                        <Check className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Comparison Matrix */}
        <section className="mt-14 pt-12 border-t border-slate-200/70 dark:border-slate-800">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <p className="text-xs sm:text-sm font-bold tracking-[0.14em] text-sky-600 dark:text-sky-400 uppercase mb-2">
                HOW WE COMPARE
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Why clients switch to Proverto.
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-2">
                See how our transparent partnership compares to traditional agencies and solo freelancers.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#f8fafd] dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold">
                  <tr>
                    <th className="py-3.5 px-5">Feature / Approach</th>
                    <th className="py-3.5 px-5 text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/40">
                      Proverto Global
                    </th>
                    <th className="py-3.5 px-5 text-slate-500">Traditional Agencies</th>
                    <th className="py-3.5 px-5 text-slate-500">Freelancers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40 transition-colors">
                      <td className="py-3.5 px-5 font-semibold text-slate-900 dark:text-white">
                        {row.criterion}
                      </td>
                      <td className="py-3.5 px-5 font-semibold text-slate-900 dark:text-slate-100 bg-sky-50/30 dark:bg-sky-950/20">
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-[#0284c7] shrink-0 mt-0.5" />
                          <span>{row.proverto}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-5 text-slate-500 dark:text-slate-400">
                        <div className="flex items-start gap-2">
                          <X className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                          <span>{row.agencies}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-5 text-slate-500 dark:text-slate-400">
                        <div className="flex items-start gap-2">
                          <X className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                          <span>{row.freelancers}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <CTASection />
      <Footer />
    </div>
  );
};

export default WhyUs;
