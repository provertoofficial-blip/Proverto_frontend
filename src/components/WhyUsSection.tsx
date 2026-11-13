import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const valueCards = [
  {
    title: "Built to convert",
    description:
      "Clear journeys and calls to action guide visitors from interest to enquiry.",
  },
  {
    title: "You stay in control",
    description:
      "An admin panel lets your team update content without developer help.",
  },
  {
    title: "Found by search and AI",
    description:
      "SEO, AEO and GEO foundations and well-structured content from day one.",
  },
  {
    title: "Secure by design",
    description:
      "Protected admin access, validated forms and server-verified payments.",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="bg-white dark:bg-slate-900 py-12 md:py-16 text-foreground transition-colors">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm font-bold tracking-[0.14em] text-sky-600 dark:text-sky-400 uppercase mb-2">
              WHY CHOOSE US
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.18] mb-3">
              A technology partner you can understand and rely on.
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-6 max-w-md">
              We explain things in plain language, build for the long term and keep you in control of your own platform.
            </p>
            <Link
              to="/free-consultation"
              className="inline-flex items-center justify-center bg-[#0f1f38] hover:bg-[#162a4d] dark:bg-sky-600 dark:hover:bg-sky-500 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-sm transition-all duration-200"
            >
              Talk to our team
            </Link>
          </div>

          {/* Right Column: 2x2 Feature Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {valueCards.map((card) => (
              <div
                key={card.title}
                className="bg-[#f8fafd] dark:bg-slate-800/60 rounded-2xl p-5 sm:p-6 border border-slate-100 dark:border-slate-800 flex flex-col justify-start hover:shadow-md transition-shadow"
              >
                <div className="w-8 h-8 rounded-full bg-[#0284c7] text-white flex items-center justify-center mb-3 shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1.5 leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
