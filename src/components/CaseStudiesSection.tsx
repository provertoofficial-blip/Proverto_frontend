import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import { getDynamicCaseStudies } from "@/lib/api";

/*
const defaultCaseStudies = [
  {
    category: "Website & AI Automation",
    title: "Local Service Business",
    challenge: "Missed leads due to slow responses and no automation",
    solution: "WhatsApp AI automation + new high-converting website",
    outcome: "Increased lead conversion by 300%",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Website & Software Development",
    title: "E-commerce Startup",
    challenge: "Poor website conversion rates and manual order management",
    solution: "Complete website redesign + automated order processing",
    outcome: "Increased sales by 250% and reduced order processing time by 80%",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Personal Branding & Career Growth",
    title: "Personal Branding",
    challenge: "Low visibility & weak resume performance",
    solution: "Expert strategy, LinkedIn & Resume optimization, and portfolio development",
    outcome: "Increased visibility by 300% and Strong personal brand established",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
  },
];
*/
const defaultCaseStudies: any[] = [];

const CaseStudiesSection = () => {
  const [studies, setStudies] = useState(defaultCaseStudies);

  useEffect(() => {
    getDynamicCaseStudies<any[]>([]).then((data) => {
      if (Array.isArray(data) && data.length > 0) {
        setStudies(data.slice(0, 3));
      }
    });
  }, []);

  if (studies.length === 0) {
    return null;
  }

  return (
    <section id="case-studies" className="bg-white dark:bg-slate-900 py-20 md:py-24 text-foreground transition-colors">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs sm:text-sm font-bold tracking-[0.14em] text-sky-600 dark:text-sky-400 uppercase mb-3.5">
              CASE STUDIES
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.18]">
              See how we approach real projects.
            </h2>
          </div>
          <Link
            to="/case-studies"
            className="text-[#0284c7] dark:text-sky-400 hover:text-[#0369a1] dark:hover:text-sky-300 font-semibold text-sm inline-flex items-center gap-1.5 transition-colors shrink-0 group self-start sm:self-auto"
          >
            <span>All case studies</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {studies.map((study, idx) => {
            const cardKey = (study as any)._id || (study as any).id || idx;
            const studyImage = (study as any).image || (study as any).imageUrl;

            return (
              <div
                key={cardKey}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                {/* Media Image Area */}
                <div className="h-52 sm:h-56 bg-[#0f2438] relative overflow-hidden border-b border-slate-100 dark:border-slate-800 flex items-center justify-center select-none">
                  {studyImage ? (
                    <img
                      src={studyImage}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="text-slate-400 dark:text-slate-500 font-medium text-xs flex flex-col items-center gap-2">
                      <ImageIcon className="w-7 h-7 text-sky-400/60" />
                      <span className="uppercase tracking-wider font-semibold">ProVerto Case Study</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <p className="text-xs font-bold tracking-wider text-sky-600 dark:text-sky-400 uppercase mb-2">
                      {study.category}
                    </p>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 leading-snug group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {study.title}
                    </h3>
                  </div>

                  <div className="space-y-2.5 text-sm pt-2">
                    <p className="leading-relaxed">
                      <span className="font-bold text-slate-900 dark:text-slate-200">Challenge: </span>
                      <span className="text-slate-500 dark:text-slate-400">{study.challenge}</span>
                    </p>
                    <p className="leading-relaxed">
                      <span className="font-bold text-slate-900 dark:text-slate-200">Solution: </span>
                      <span className="text-slate-500 dark:text-slate-400">{study.solution}</span>
                    </p>
                    <p className="leading-relaxed">
                      <span className="font-bold text-slate-900 dark:text-slate-200">Outcome: </span>
                      <span className="text-slate-500 dark:text-slate-400">{study.outcome}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
