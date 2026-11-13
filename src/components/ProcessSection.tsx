const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We learn your goals, audience and constraints, and confirm what to build.",
  },
  {
    number: "02",
    title: "Plan & design",
    description:
      "Sitemap, user journeys and responsive designs, approved before development.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Reusable components and clean code, with content your team can manage.",
  },
  {
    number: "04",
    title: "Test & launch",
    description:
      "Functionality, security, accessibility and SEO checks before go-live.",
  },
  {
    number: "05",
    title: "Support & grow",
    description:
      "Handover, admin training and room to add services as you grow.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="bg-[#0c1f38] py-12 md:py-16 text-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-8">
          <p className="text-xs sm:text-sm font-bold tracking-[0.14em] text-sky-400 uppercase mb-2">
            OUR PROCESS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-[1.18] max-w-2xl">
            A simple, transparent path from idea to launch.
          </h2>
        </div>

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col">
              {/* Cyan Accent Bar */}
              <div className="h-[2px] w-full bg-[#0284c7] mb-4" />

              {/* Step Number */}
              <span className="text-sm font-bold text-sky-400 mb-2 tracking-wide">
                {step.number}
              </span>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
