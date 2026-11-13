import { Shield, Zap, MessageCircle } from "lucide-react";

const TrustSection = () => {
  const badges = [
    { icon: Shield, text: "Secure & Reliable" },
    { icon: Zap, text: "AI Powered" },
    { icon: MessageCircle, text: "WhatsApp Official API" },
  ];

  const partnerLogos = [
    { src: "/Companies logo/tcs.png", alt: "TCS" },
    { src: "/Companies logo/HCL.png", alt: "HCL" },
    { src: "/Companies logo/Honeywell.png", alt: "Honeywell" },
    { src: "/Companies logo/mantra.png", alt: "mantra" },
    { src: "/Companies logo/accenture.png", alt: "Accenture" },
    { src: "/Companies logo/EY.png", alt: "EY" },
  ];

  return (
    <section className="py-10 md:py-12 bg-[#f8fafd] dark:bg-slate-950/60 border-b border-slate-200/60 dark:border-slate-800 transition-colors">
      <div className="container-custom">
        <div className="text-center mb-6">
          <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">
            Trusted by Professionals who've worked at
          </p>

          {/* 3 Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-6">
            {badges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
                >
                  <Icon className="w-3.5 h-3.5 text-[#0284c7] shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                    {badge.text}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Partner Logos Row */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-6">
            {partnerLogos.map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                className="h-6 sm:h-7 w-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        {/* Trust Statement */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
            At Proverto, we blend{" "}
            <span className="text-[#0284c7] font-semibold">AI intelligence</span>, automation,
            and modern web development to deliver{" "}
            <span className="text-[#0284c7] font-semibold">real results</span> — not just
            features.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
