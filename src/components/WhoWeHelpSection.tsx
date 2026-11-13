const audienceCards = [
  {
    title: "Startups",
    description:
      "A website, product or technology partner to get off the ground.",
  },
  {
    title: "Small & medium businesses",
    description:
      "Websites, e-commerce, integrations and automation that save time.",
  },
  {
    title: "Established businesses",
    description:
      "Software, mobile apps and workflow improvements at scale.",
  },
  {
    title: "International clients",
    description:
      "A dependable outsourced technology team across time zones.",
  },
  {
    title: "Professionals",
    description:
      "Personal branding and career services for individuals.",
  },
];

const WhoWeHelpSection = () => {
  return (
    <section id="who-we-help" className="bg-[#f8fafd] dark:bg-slate-950/60 py-12 md:py-16 text-foreground transition-colors">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-8">
          <p className="text-xs sm:text-sm font-bold tracking-[0.14em] text-sky-600 dark:text-sky-400 uppercase mb-2">
            WHO WE HELP
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.18] max-w-2xl">
            Built for ambitious businesses and professionals.
          </h2>
        </div>

        {/* 5 Audience Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {audienceCards.map((card) => (
            <div
              key={card.title}
              className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-sky-400/70 dark:border-sky-500/40 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start"
            >
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelpSection;
