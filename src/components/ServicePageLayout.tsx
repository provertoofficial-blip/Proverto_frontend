import { Link } from "react-router-dom";
import { Check, LucideIcon } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";

interface ServiceFeature {
  title: string;
  items: string[];
}

interface FAQItem {
  question: string;
  answer: string;
}

export interface ServicePageProps {
  icon?: LucideIcon;
  iconColor?: string;
  title?: string;
  headline?: string;
  intro?: string;
  benefits?: string[];
  whatYouReceive?: string[];
  faqs?: FAQItem[];
  relatedOfferings?: string;
  quoteLink?: string;
  appointmentLink?: string;
  priceLabel?: string;
  category?: string;
  // Legacy props compatibility
  problems?: string[];
  solutionIntro?: string;
  solutionPoints?: string[];
  features?: ServiceFeature[];
  targetAudience?: string[];
  results?: string[];
  ctaText?: string;
  ctaLink?: string;
}

const defaultFAQs: FAQItem[] = [];

const ServicePageLayout = ({
  title,
  headline,
  intro,
  benefits,
  whatYouReceive,
  faqs,
  relatedOfferings,
  quoteLink = "/free-consultation",
  appointmentLink = "/free-consultation",
  priceLabel,
  category,
  solutionPoints,
  features,
  results,
}: ServicePageProps) => {
  const displayTitle = title || headline || "Service Details";
  const displayIntro = intro || "";

  // Derive benefits from benefits prop, or results/solutionPoints
  const displayBenefits =
    benefits && benefits.length > 0
      ? benefits
      : results && results.length > 0
      ? results
      : solutionPoints && solutionPoints.length > 0
      ? solutionPoints
      : [];

  // Derive deliverables
  const displayDeliverables =
    whatYouReceive && whatYouReceive.length > 0
      ? whatYouReceive
      : features && features.length > 0
      ? features.flatMap((f) => f.items)
      : [];

  const displayFAQs = faqs && faqs.length > 0 ? faqs : defaultFAQs;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col justify-between">
      <Header />

      <main className="pt-32 pb-16 md:pt-36 md:pb-24">
        <div className="container-custom">
          {/* Main 2-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Service Details (8 Cols) */}
            <div className="lg:col-span-8">
              {/* Badge */}
              <p className="text-xs sm:text-sm font-bold tracking-[0.14em] text-sky-600 dark:text-sky-400 uppercase mb-4">
                {category || "SERVICE DETAILS"}
              </p>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-[50px] font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15] mb-5">
                {displayTitle}
              </h1>

              {/* Intro Description */}
              {displayIntro && (
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10 max-w-2xl">
                  {displayIntro}
                </p>
              )}

              {/* Benefits Section */}
              {displayBenefits.length > 0 && (
                <div className="mb-10">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    Key Outcomes & Benefits
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {displayBenefits.map((benefit, i) => (
                      <div
                        key={i}
                        className="bg-[#f0f7fb] dark:bg-slate-800/60 text-slate-800 dark:text-slate-200 text-sm font-semibold p-4 rounded-xl text-center border border-sky-100 dark:border-slate-700 flex items-center justify-center min-h-[64px]"
                      >
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* What You Receive Section */}
              {displayDeliverables.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    What is included
                  </h2>
                  <div className="space-y-3">
                    {displayDeliverables.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-sm sm:text-base text-slate-700 dark:text-slate-300"
                      >
                        <Check className="w-4 h-4 text-[#0284c7] stroke-[2.5] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Frequently Asked Questions Section */}
              {displayFAQs.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    Frequently asked questions
                  </h2>
                  <div className="border border-slate-200/90 dark:border-slate-800 rounded-2xl divide-y divide-slate-200 dark:divide-slate-800 overflow-hidden bg-white dark:bg-slate-900 shadow-sm">
                    {displayFAQs.map((faq, i) => (
                      <div key={i} className="p-5 sm:p-6">
                        <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Sticky Sidebar Card (4 Cols) */}
            <div className="lg:col-span-4 lg:sticky lg:top-28">
              <div className="bg-[#0c1f38] text-white rounded-2xl p-7 sm:p-8 shadow-xl">
                {/* Tag */}
                <p className="text-xs font-bold tracking-[0.14em] text-sky-400 uppercase mb-2">
                  {priceLabel || "GET STARTED"}
                </p>

                {/* Headline */}
                <h2 className="text-2xl font-bold text-white mb-3">
                  Ready to begin?
                </h2>

                {/* Subtitle */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {priceLabel && priceLabel !== "Quote on request"
                    ? `Transparent pricing starting ${priceLabel}. Tell us what you need and we'll handle the rest.`
                    : "Pricing depends on scope. Tell us what you need and we'll respond with a customized proposal."}
                </p>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Link
                    to={quoteLink}
                    className="w-full py-3.5 px-4 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-sm transition-colors text-center block shadow-md"
                  >
                    Request a quote
                  </Link>

                  <Link
                    to={appointmentLink}
                    className="w-full py-3.5 px-4 rounded-xl border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-white font-semibold text-sm transition-colors text-center block"
                  >
                    Book an appointment
                  </Link>
                </div>

                {/* Related Offerings Footer Note */}
                <div className="border-t border-slate-800 mt-6 pt-6 text-xs text-slate-400 leading-relaxed">
                  {relatedOfferings ? (
                    <>Related offerings: {relatedOfferings}</>
                  ) : (
                    <Link to="/services" className="text-sky-400 hover:underline">
                      Explore all ProVerto services &rarr;
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicePageLayout;
