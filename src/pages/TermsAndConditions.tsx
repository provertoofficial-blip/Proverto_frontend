import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  FileText,
  AlertCircle,
  Scale,
  Shield,
  Zap,
  Mail,
  Phone,
  Linkedin,
  Facebook,
  Instagram,
  Clock,
  Globe2,
  CheckCircle2,
  ScrollText,
} from "lucide-react";

const TermsAndConditions = () => {
  const definitions = [
    {
      term: "Affiliate",
      definition:
        "An entity that controls, is controlled by, or is under common control with a party, where 'control' means ownership of 50% or more of the shares.",
    },
    {
      term: "Country",
      definition: "Madhya Pradesh, India",
    },
    {
      term: "Company",
      definition: "Proverto Global Technologies, India.",
    },
    {
      term: "Device",
      definition:
        "Any device that can access the Service such as a computer, cell phone or digital tablet.",
    },
    {
      term: "Service",
      definition: "Refers to the Website and digital career enhancement solutions.",
    },
    {
      term: "Terms and Conditions",
      definition:
        "These Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.",
    },
    {
      term: "Third-party Social Media Service",
      definition:
        "Any services or content provided by a third-party that may be displayed, included or made available by the Service.",
    },
    {
      term: "Website",
      definition: "Proverto Global Technologies, accessible from https://provertoglobal.com/",
    },
    {
      term: "You",
      definition:
        "The individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service.",
    },
  ];

  const coreSections = [
    {
      icon: AlertCircle,
      title: "Links to Other Websites",
      content:
        "Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company. The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.",
    },
    {
      icon: Zap,
      title: "Termination of Access",
      content:
        "We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions. Upon termination, Your right to use the Service will cease immediately.",
    },
    {
      icon: Scale,
      title: "Limitation of Liability",
      content:
        "Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of these Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.",
    },
    {
      icon: Shield,
      title: '"AS IS" and "AS AVAILABLE" Disclaimer',
      content:
        'The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. The Company expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement.',
    },
  ];

  const additionalSections = [
    {
      title: "Governing Law & Jurisdiction",
      content:
        "The laws of the Country (Madhya Pradesh, India), excluding its conflicts of law rules, shall govern these Terms and Your use of the Service. Your use of the Service may also be subject to other local, state, national, or international laws.",
    },
    {
      title: "Disputes Resolution",
      content:
        "If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company directly at support@provertoglobal.com.",
    },
    {
      title: "For European Union (EU) Users",
      content:
        "If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.",
    },
    {
      title: "United States Legal Compliance",
      content:
        "You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or designated by the US government as a 'terrorist supporting' country, and (ii) You are not listed on any US government prohibited parties list.",
    },
    {
      title: "Severability and Waiver",
      content:
        "If any provision of these Terms is held to be unenforceable or invalid, such provision will be interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law. Failure to exercise a right shall not affect the ability to exercise such right thereafter.",
    },
    {
      title: "Translation Interpretation",
      content:
        "These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of any conflict or dispute.",
    },
    {
      title: "Changes to These Terms and Conditions",
      content:
        "We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms.",
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
              <span className="text-sky-300 font-bold">Terms & Conditions</span>
            </nav>

            {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-xs font-semibold text-sky-300 border border-white/15 mb-5">
              <ScrollText className="w-3.5 h-3.5 text-sky-400" />
              <span>TERMS OF SERVICE</span>
            </div> */}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5 leading-[1.12]">
              Terms and <span className="text-sky-400">Conditions</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed mb-6 max-w-2xl">
              Please read these terms and conditions carefully before utilizing our services, digital assets, and platforms.
            </p>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0c1f38] border border-slate-700/80 text-xs text-slate-300">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              <span>Last updated: January 2026 • Effective immediately</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="py-14 md:py-20 flex-grow">
        <div className="container-custom max-w-5xl">
          {/* Acknowledgment Card */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-8 sm:p-10 shadow-sm mb-12">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-11 h-11 rounded-xl bg-[#0c1f38] text-sky-400 flex items-center justify-center shrink-0 shadow-sm">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Acknowledgment & User Agreement
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Binding contract between You and Proverto Global Technologies
                </p>
              </div>
            </div>

            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed pt-4 border-t border-slate-100 dark:border-slate-800">
              <p>
                These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms set out the legal rights and obligations of all users regarding the use of the Service.
              </p>
              <p>
                Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms. These Terms and Conditions apply to all visitors, users, and others who access or use the Service.
              </p>
              <p>
                By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
              </p>
              <div className="mt-4 p-4 rounded-xl bg-[#f8fafd] dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <strong className="text-slate-900 dark:text-white">Age Requirement:</strong> You represent that you are over the age of 18. The Company does not permit individuals under 18 to use the Service. Your access is also subject to our Privacy Policy.
                </p>
              </div>
            </div>
          </div>

          {/* Interpretation & Definitions */}
          <div className="mb-14">
            <div className="mb-6">
              <p className="text-xs sm:text-sm font-bold tracking-[0.14em] text-sky-600 dark:text-sky-400 uppercase mb-2">
                DEFINITIONS
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Interpretation & Definitions
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-3xl">
                The words whose initial letters are capitalized have meanings defined below. The following definitions have the same meaning regardless of whether they appear in singular or plural form.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {definitions.map((def, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200/90 dark:border-slate-800 p-5 shadow-sm hover:border-sky-400/50 transition-colors"
                >
                  <h4 className="font-bold text-[#0c1f38] dark:text-sky-400 text-base mb-1.5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                    {def.term}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {def.definition}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Sections Grid */}
          <div className="space-y-8 mb-14">
            {coreSections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-7 sm:p-9 shadow-sm"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#0c1f38] text-sky-400 flex items-center justify-center shrink-0 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
                    {section.content}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Additional Legal Provisions */}
          <div className="mb-14">
            <div className="mb-6">
              <p className="text-xs sm:text-sm font-bold tracking-[0.14em] text-sky-600 dark:text-sky-400 uppercase mb-2">
                LEGAL PROVISIONS
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Statutory Terms & Governing Policies
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {additionalSections.map((sec, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-6 sm:p-7 shadow-sm"
                >
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2.5 flex items-center gap-2">
                    <Globe2 className="w-4 h-4 text-sky-500 shrink-0" />
                    <span>{sec.title}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {sec.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Us Card */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-8 sm:p-10 shadow-sm relative overflow-hidden">
            <div className="max-w-3xl">
              <p className="text-xs sm:text-sm font-bold tracking-[0.14em] text-sky-600 dark:text-sky-400 uppercase mb-2">
                NEED ASSISTANCE?
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
                Contact Legal Support
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
                If you have questions about these Terms and Conditions or wish to resolve any dispute, please reach out directly:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <a
                  href="mailto:support@provertoglobal.com"
                  className="flex items-center gap-3.5 p-4 rounded-xl bg-[#f8fafd] dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 hover:border-sky-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0c1f38] text-sky-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Email Support</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      support@provertoglobal.com
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+918770836725"
                  className="flex items-center gap-3.5 p-4 rounded-xl bg-[#f8fafd] dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 hover:border-sky-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0c1f38] text-sky-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Telephone</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      +91 8770836725
                    </span>
                  </div>
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    Official Channels:
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
                  Jurisdiction: Madhya Pradesh, India
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

export default TermsAndConditions;
