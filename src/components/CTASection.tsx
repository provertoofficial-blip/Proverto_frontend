import { Link } from "react-router-dom";

const WHATSAPP_NUMBER = "918770836725";
const PHONE_NUMBER = "+918770836725";
const EMAIL_ADDRESS = "support@provertoglobal.com";

const CTASection = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi, I'd like to discuss my project with Proverto."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section
      id="contact-cta"
      className="relative bg-[#081a2e] py-16 md:py-20 text-white overflow-hidden border-b border-slate-800/80"
    >
      {/* Blueprint / Tech Grid Pattern */}
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

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          {/* Left Text */}
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight mb-4">
              Let's talk about your project.
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Tell us what you need. Our team reviews every request and confirms
              your consultation personally.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="w-full lg:w-auto lg:min-w-[400px]">
            {/* Primary Filled Button */}
            <Link
              to="/free-consultation"
              className="w-full py-4 px-6 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-base transition-colors shadow-md flex items-center justify-center text-center tracking-wide"
            >
              Book an Appointment
            </Link>

            {/* 3 Secondary Outlined Buttons */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <button
                type="button"
                onClick={openWhatsApp}
                className="py-3 px-3 rounded-xl border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-white text-sm font-semibold text-center transition-colors shadow-sm"
              >
                WhatsApp
              </button>

              {/* <a
                href={`tel:${PHONE_NUMBER}`}
                className="py-3 px-3 rounded-xl border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-white text-sm font-semibold text-center transition-colors shadow-sm flex items-center justify-center"
              >
                PHONE
              </a> */}

              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="py-3 px-3 rounded-xl border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-white text-sm font-semibold text-center transition-colors shadow-sm flex items-center justify-center"
              >
                Email us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
