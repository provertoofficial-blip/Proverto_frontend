import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  EyeOff,
  RotateCcw,
  Unlink,
  Compass,
  Globe,
  Code2,
  Smartphone,
  MessageSquare,
  Cpu,
  User,
  ArrowRight,
} from "lucide-react";
import { getDynamicServices, resolveIcon } from "@/lib/api";

const problemCards = [
  {
    icon: EyeOff,
    title: "No credible online presence",
    description:
      "Prospects can't find you, or the site they land on doesn't earn their trust.",
  },
  {
    icon: RotateCcw,
    title: "Manual, repetitive work",
    description:
      "Hours lost to tasks that software and automation could handle for you.",
  },
  {
    icon: Unlink,
    title: "Disconnected tools",
    description:
      "Spreadsheets, forms and apps that don't talk to each other.",
  },
  {
    icon: Compass,
    title: "No clear technology partner",
    description:
      "Vague scope, shifting timelines and nobody accountable for the outcome.",
  },
];

const defaultServiceCards = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Custom, responsive and SEO-ready websites built around your business goals.",
    link: "/services/web-development",
  },
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Custom software and intelligent digital solutions built around your business needs.",
    link: "/services/software-testing",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Automation",
    description:
      "Turn WhatsApp into an AI-powered channel for customer engagement, lead generation and support.",
    link: "/services/whatsapp-automation",
  },
  {
    icon: Cpu,
    title: "Business Automation",
    description:
      "Custom AI-powered automation that removes repetitive work and helps your business run faster.",
    link: "/services/ai-tools",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Custom iOS and Android apps built to turn your idea into a fast, user-friendly product.",
    link: "/free-consultation",
  },
  {
    icon: User,
    title: "Personal Branding",
    description:
      "Resumes, LinkedIn and portfolio websites that help professionals stand out and get noticed by top recruiters.",
    link: "/services/packages",
  },
];

const HomeOverviewSection = () => {
  const [items, setItems] = useState<any[]>(defaultServiceCards);

  useEffect(() => {
    getDynamicServices<any[]>([]).then((data) => {
      if (Array.isArray(data) && data.length > 0) {
        const published = data.filter((s) => !s.status || s.status === "Published");
        const list = published.length > 0 ? published : data;
        setItems(
          list.slice(0, 6).map((s, idx) => {
            const rawSlug =
              s.slug ||
              (s.link ? s.link.replace(/^\/+/, "").replace(/^services\//, "") : "") ||
              (s.title ? s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") : "") ||
              s._id ||
              s.id;
            const link =
              s.link === "/service/packages" || s.link === "/services/packages"
                ? "/service/packages"
                : `/services/${rawSlug}`;

            return {
              id: s._id || s.id || s.title,
              icon: resolveIcon(s.icon, Globe, s.title || s.name || rawSlug, idx),
              title: s.title || s.name,
              description: s.subheading || s.description || "",
              link,
            };
          })
        );
      }
    });
  }, []);

  return (
    <section className="bg-[#f8fafd] dark:bg-slate-950/60 py-12 md:py-16 text-foreground transition-colors">
      <div className="container-custom">
        {/* ============================================================== */}
        {/* SOUND FAMILIAR? (Problems Section)                             */}
        {/* ============================================================== */}
        <div id="problems" className="mb-12 sm:mb-14">
          <div className="mb-8">
            <p className="text-xs sm:text-sm font-bold tracking-[0.14em] text-sky-600 dark:text-sky-400 uppercase mb-2">
              SOUND FAMILIAR?
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.18] max-w-2xl">
              Growing a business shouldn't mean fighting your technology.
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg mt-3 max-w-3xl leading-relaxed">
              These are the problems we hear most, and the ones we are built to solve.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {problemCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={card.title}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 flex flex-col justify-start shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#e0f2fe] dark:bg-sky-950/60 text-[#0284c7] dark:text-sky-400 flex items-center justify-center mb-4">
                    <IconComponent className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <h3 className="text-base sm:text-[18px] font-bold text-slate-900 dark:text-slate-100 mb-2 leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ============================================================== */}
        {/* WHAT WE DO (Services Section)                                  */}
        {/* ============================================================== */}
        <div id="services">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs sm:text-sm font-bold tracking-[0.14em] text-sky-600 dark:text-sky-400 uppercase mb-2">
                WHAT WE DO
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.18]">
                Services for every stage of your digital journey.
              </h2>
            </div>
            <Link
              to="/services"
              className="text-[#0284c7] dark:text-sky-400 hover:text-[#0369a1] dark:hover:text-sky-300 font-semibold text-sm inline-flex items-center gap-1.5 transition-colors shrink-0 group self-start sm:self-auto"
            >
              <span>View all services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((service, index) => {
              const IconComponent = resolveIcon(
                service.icon,
                Globe,
                service.title || (service as any).name,
                index
              );
              const cardKey = (service as any).id || (service as any)._id || service.title || index;
              return (
                <div
                  key={cardKey}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-7 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 min-h-[220px] h-full group"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#0c1f38] text-sky-400 dark:bg-slate-800 dark:text-sky-300 flex items-center justify-center mb-4 shadow-sm group-hover:bg-sky-500 group-hover:text-white dark:group-hover:bg-sky-500 dark:group-hover:text-white transition-colors duration-200">
                      <IconComponent className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-2 leading-snug line-clamp-1">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                  <div className="pt-3.5 border-t border-slate-100 dark:border-slate-800/80 mt-auto flex items-center justify-between">
                    <Link
                      to={service.link || "/services"}
                      className="text-[#0284c7] dark:text-sky-400 hover:text-[#0369a1] dark:hover:text-sky-300 font-semibold text-sm transition-colors inline-flex items-center gap-1 group"
                    >
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeOverviewSection;
