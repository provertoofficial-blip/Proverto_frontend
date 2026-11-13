import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  DollarSign,
  Clock,
  CheckCircle,
  AlertCircle,
  Mail,
  Phone,
  Linkedin,
  Facebook,
  Instagram,
  ArrowRight,
  ShieldCheck,
  FileCheck2,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";

const RefundAndCancellationPolicy = () => {
  const refundConditions = [
    {
      icon: Clock,
      title: "7-Day Refund Request Window",
      badge: "Strict Window",
      content:
        "You must raise a refund request within 7 calendar days from your original payment date. Requests submitted after this 7-day period will not be eligible for review or refund.",
    },
    {
      icon: CheckCircle,
      title: "Non-Delivery / Product Failure",
      badge: "Eligibility Basis",
      content:
        "A refund will only be issued if our platform fails to deliver the purchased product or service altogether. Valid proof of non-delivery or issue must be provided. For other technical difficulties or adjustments, our dedicated support team will work closely with you to resolve the problem promptly.",
    },
    {
      icon: AlertCircle,
      title: "Rigorous Verification Process",
      badge: "Case Review",
      content:
        "Every refund claim undergoes a formal investigation and validation audit by our operations team. If the claim is found to be invalid, fraudulent, or outside our defined criteria, Proverto reserves the right to decline the request.",
    },
    {
      icon: DollarSign,
      title: "7–10 Working Days Refund Timeline",
      badge: "Payment Reversal",
      content:
        "Once approved, refunds are credited directly to the original payment method. Please allow 7–10 business days for the amount to reflect in your banking statement. Depending on your financial institution or card issuer, the full settlement cycle may take up to 14 days.",
    },
  ];

  const refundSteps = [
    {
      number: "01",
      title: "Submit Email Request",
      description:
        "Send an email to support@provertoglobal.com detailing your order ID, transaction details, and a clear description with screenshots of the issue.",
    },
    {
      number: "02",
      title: "Technical Review & Audit",
      description:
        "Our specialized operations and engineering teams inspect the case against our refund validation criteria within 48–72 hours.",
    },
    {
      number: "03",
      title: "Approval & Disbursement",
      description:
        "Once approved, our accounts team immediately triggers the refund transaction to your original payment mode.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafd] dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-[#081a2e] text-white pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden border-b border-slate-800">
        {/* Blueprint Grid Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "36px 36px",
          }}
        />
        {/* Glow Spheres */}
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
              <span className="text-slate-300">Legal</span>
              <span className="text-slate-500">/</span>
              <span className="text-sky-300 font-bold">Refund & Cancellation</span>
            </nav>

            {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs font-semibold text-sky-300 border border-white/15 mb-5">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>BILLING & ASSURANCE POLICY</span>
            </div> */}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5 leading-[1.12]">
              Refund & <span className="text-sky-400">Cancellation Policy</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed mb-6 max-w-2xl">
              Proverto Global Technologies is dedicated to customer transparency. Review our clear rules, eligibility timelines, and refund process below.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0c1f38] border border-slate-700/80 text-xs text-slate-300">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              <span>Standard 7-Day Window • Effective January 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="py-14 md:py-20 flex-grow">
        <div className="container-custom max-w-5xl">
          {/* Introductory Card */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-8 sm:p-10 shadow-sm mb-12">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-11 h-11 rounded-xl bg-[#0c1f38] text-sky-400 flex items-center justify-center shrink-0 shadow-sm">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Our Commitment to Satisfaction
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Transparent guidelines for all Proverto products & digital services
                </p>
              </div>
            </div>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed pt-4 border-t border-slate-100 dark:border-slate-800">
              <p>
                Thank you for choosing Proverto Global Technologies for your resume enhancement, personal branding, and custom web development needs. We are dedicated to delivering a seamless, dependable, and high-impact experience for every client.
              </p>
              <div className="p-4 rounded-xl bg-sky-50 dark:bg-sky-950/40 border border-sky-100 dark:border-sky-900/60">
                <p className="text-xs sm:text-sm text-sky-900 dark:text-sky-200 leading-relaxed font-medium">
                  This policy outlines the explicit situations in which cancellations and refunds apply, ensuring mutual fairness, rapid dispute resolution, and operational clarity.
                </p>
              </div>
            </div>
          </div>

          {/* Refund Conditions - 4 Cards */}
          <div className="mb-14">
            <div className="mb-8">
              <p className="text-xs sm:text-sm font-bold tracking-[0.14em] text-sky-600 dark:text-sky-400 uppercase mb-2">
                CRITERIA & TIMELINES
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Refund Conditions & Qualification
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-3xl">
                Refunds are granted strictly under the following documented criteria:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {refundConditions.map((condition, idx) => {
                const Icon = condition.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-7 shadow-sm hover:border-sky-400/50 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <div className="w-11 h-11 rounded-xl bg-[#0c1f38] text-sky-400 flex items-center justify-center shrink-0 shadow-sm">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                          {condition.badge}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                        {condition.title}
                      </h3>

                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {condition.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step-by-Step Claim Process */}
          <div className="mb-14">
            <div className="mb-8">
              <p className="text-xs sm:text-sm font-bold tracking-[0.14em] text-sky-600 dark:text-sky-400 uppercase mb-2">
                STEP-BY-STEP PROCESS
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                How to Request a Refund
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                Follow these simple steps to ensure prompt verification and turnaround:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {refundSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-7 shadow-sm relative overflow-hidden group hover:border-sky-400/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0c1f38] text-sky-400 flex items-center justify-center font-extrabold text-lg mb-6 shadow-sm group-hover:scale-105 transition-transform">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Action banner */}
            <div className="mt-6 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0c1f38] text-sky-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium block">
                    Submit requests directly to:
                  </span>
                  <a
                    href="mailto:support@provertoglobal.com"
                    className="text-base font-bold text-sky-600 dark:text-sky-400 hover:underline"
                  >
                    support@provertoglobal.com
                  </a>
                </div>
              </div>

              <a
                href="mailto:support@provertoglobal.com?subject=Refund%20Request%20-%20Order%20ID"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0f1f38] hover:bg-[#162a4d] text-white font-semibold text-xs transition-colors shrink-0"
              >
                <span>Draft Email</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Cancellation Policy Box */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-8 sm:p-10 shadow-sm mb-12">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-11 h-11 rounded-xl bg-[#0c1f38] text-sky-400 flex items-center justify-center shrink-0 shadow-sm">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Order Cancellation Guidelines
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  How order cancellations and work-in-progress are handled
                </p>
              </div>
            </div>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed pt-3 border-t border-slate-100 dark:border-slate-800">
              <p>
                If you wish to cancel an order before digital fulfillment has begun, please message our team at{" "}
                <a
                  href="mailto:support@provertoglobal.com"
                  className="font-semibold text-sky-600 dark:text-sky-400 hover:underline"
                >
                  support@provertoglobal.com
                </a>{" "}
                as quickly as possible.
              </p>

              <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-amber-900 dark:text-amber-200 mb-1">
                    Important Note on Cancellations
                  </h4>
                  <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
                    Order cancellation does not automatically entitle the user to a refund. Refunds remain strictly governed by the eligibility conditions above. If customization, drafting, or optimization work has already commenced, cancellation may be subject to partial billing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Support Card */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-8 sm:p-10 shadow-sm relative overflow-hidden">
            <div className="max-w-6xl">
              <p className="text-xs sm:text-sm font-bold tracking-[0.14em] text-sky-600 dark:text-sky-400 uppercase mb-2">
                NEED CLARIFICATION?
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
                Contact Customer Billing
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
                Our support team is on standby to assist with questions, receipts, or technical delivery status:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <a
                  href="mailto:support@provertoglobal.com"
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#f8fafd] dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 hover:border-sky-400 transition-colors group"
                >
                  <div className="w-9  h-9 rounded-lg bg-[#0c1f38] text-sky-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 ">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium truncate">
                      Support Email
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors truncate block w-fit">
                      support@provertoglobal.com
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:info@provertoglobal.com"
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#f8fafd] dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 hover:border-sky-400 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#0c1f38] text-sky-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium truncate">
                      General Inquiries
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors truncate block">
                      info@provertoglobal.com
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+918770836725"
                  className="flex items-center gap-3 p-4 rounded-xl bg-[#f8fafd] dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 hover:border-sky-400 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#0c1f38] text-sky-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-medium truncate">
                      Phone
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors truncate block">
                      +91 8770836725
                    </span>
                  </div>
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Follow Our Channels:
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://www.linkedin.com/company/proverto-global/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-[#0c1f38] text-sky-400 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.facebook.com/share/1C1bDHCeyA/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-[#0c1f38] text-sky-400 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.instagram.com/provertoglobal?igsh=MThhYWZpZDEyaTY2Nw%3D%3D&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-[#0c1f38] text-sky-400 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Support Operating Hours: 9:00 AM – 6:00 PM IST
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

export default RefundAndCancellationPolicy;
