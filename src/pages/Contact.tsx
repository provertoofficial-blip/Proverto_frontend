import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState, useEffect } from "react";
import {
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  Shield,
  Linkedin,
  Facebook,
  Instagram,
  Send,
  ChevronDown,
  X,
  Check,
  Search,
} from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { services as defaultServices } from "@/components/ServicesSection";
import { submitContactInquiry, getDynamicServices, getCachedData } from "@/lib/api";

const WHATSAPP_NUMBER = "918770836725";

const Contact = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Instant render from cache or built-in default services (0ms delay)
  const cachedServices = getCachedData<any[]>("/content/services");
  const initialServices =
    Array.isArray(cachedServices) && cachedServices.length > 0
      ? cachedServices.filter((s) => !s.status || s.status === "Published")
      : defaultServices;

  const [servicesList, setServicesList] = useState(initialServices);
  const [selectedServices, setSelectedServices] = useState<string[]>(() => {
    const serviceParam = searchParams.get("service");
    return serviceParam ? [serviceParam] : [];
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [serviceSearch, setServiceSearch] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    getDynamicServices(defaultServices).then((data) => {
      if (Array.isArray(data) && data.length > 0) {
        const published = data.filter((s) => !s.status || s.status === "Published");
        setServicesList(published.length > 0 ? published : data);
      }
    });
  }, []);

  const filteredServicesList = servicesList.filter((s: any) =>
    (s.title || s.name || "").toLowerCase().includes(serviceSearch.toLowerCase())
  );

  const toggleService = (title: string) => {
    setSelectedServices((prev) =>
      prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]
    );
  };

  const handleSelectAllServices = () => {
    if (selectedServices.length === servicesList.length) {
      setSelectedServices([]);
    } else {
      setSelectedServices(servicesList.map((s: any) => s.title || s.name));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      toast.error("Please fill in all required fields (Name, Phone, and Details)");
      return;
    }

    setIsSubmitting(true);

    try {
      const chosenService =
        selectedServices.length > 0
          ? selectedServices.join(", ")
          : "General Strategy Consultation";

      // 1. Post to backend API
      await submitContactInquiry({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: chosenService,
        message: formData.message,
        inquiryType: "Contact Form",
      });

      toast.success("Thank you! Your message has been received.", {
        description: "Our team will review your request and confirm your consultation shortly.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setSelectedServices([]);

      navigate("/thank-you");
    } catch (error) {
      console.error("Submit error:", error);
      toast.error("Failed to send message. Please try WhatsApp directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const openDirectWhatsApp = () => {
    const message = encodeURIComponent("Hi Proverto, I'd like to talk about a project.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#f8fafd] dark:bg-slate-950 flex flex-col justify-between">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-14 md:pt-36 md:pb-18 bg-[#081a2e] text-white overflow-hidden border-b border-slate-800">
        {/* Blueprint Grid Lines */}
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
        <div className="absolute top-1/4 -left-32 w-80 h-80 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <p className="text-xs sm:text-sm font-semibold text-sky-400 mb-4">
              <Link to="/" className="hover:underline text-sky-400">
                Home
              </Link>{" "}
              / <span className="text-slate-300">Contact</span>
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-[50px] font-extrabold text-white tracking-tight leading-[1.15] mb-4">
              Let's talk about your project.
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Have an idea, need technical guidance, or want to automate repetitive workflows? We review every request and respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <main className="py-12 md:py-16 flex-grow">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Left: Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1.5">
                Send us a message
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-5">
                Fill in the details below and we will get back to you with actionable recommendations.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-[#f8fafd] dark:bg-slate-950 border-slate-200 dark:border-slate-700 h-11 rounded-xl text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-[#f8fafd] dark:bg-slate-950 border-slate-200 dark:border-slate-700 h-11 rounded-xl text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <Input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-[#f8fafd] dark:bg-slate-950 border-slate-200 dark:border-slate-700 h-11 rounded-xl text-sm"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Services You Are Interested In
                    </label>
                    {selectedServices.length > 0 && (
                      <span className="text-[11px] font-semibold text-sky-600 dark:text-sky-400">
                        {selectedServices.length} selected
                      </span>
                    )}
                  </div>

                  <Popover open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
                    <PopoverTrigger asChild>
                      <button
                        type="button"
                        className={cn(
                          "w-full min-h-[46px] px-3.5 py-2 rounded-xl border bg-[#f8fafd] dark:bg-slate-950 text-left flex items-center justify-between text-sm transition-all focus:outline-none focus:ring-2 focus:ring-sky-500",
                          isDropdownOpen
                            ? "border-sky-500 ring-2 ring-sky-500/20"
                            : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                        )}
                      >
                        <div className="flex flex-wrap items-center gap-1.5 flex-1 pr-2">
                          {selectedServices.length === 0 ? (
                            <span className="text-slate-400 dark:text-slate-500 text-sm">
                              Select one or multiple services...
                            </span>
                          ) : (
                            selectedServices.map((service) => (
                              <span
                                key={service}
                                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-sky-100 dark:bg-sky-950 border border-sky-200 dark:border-sky-800 text-sky-800 dark:text-sky-300 text-xs font-medium"
                              >
                                <span>{service}</span>
                                <span
                                  role="button"
                                  tabIndex={0}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleService(service);
                                  }}
                                  className="hover:text-red-500 transition-colors cursor-pointer"
                                  aria-label={`Remove ${service}`}
                                >
                                  <X className="w-3 h-3" />
                                </span>
                              </span>
                            ))
                          )}
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0 text-slate-400">
                          {selectedServices.length > 0 && (
                            <span
                              role="button"
                              tabIndex={0}
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedServices([]);
                              }}
                              className="p-1 hover:text-slate-700 dark:hover:text-slate-200 text-xs font-medium cursor-pointer"
                              title="Clear all"
                            >
                              <X className="w-3.5 h-3.5" />
                            </span>
                          )}
                          <ChevronDown
                            className={cn(
                              "w-4 h-4 transition-transform duration-200",
                              isDropdownOpen && "rotate-180 text-sky-500"
                            )}
                          />
                        </div>
                      </button>
                    </PopoverTrigger>

                    <PopoverContent
                      align="start"
                      className="w-[var(--radix-popover-trigger-width)] max-w-full p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl z-50 pointer-events-auto"
                    >
                      {/* Search & Select All Actions */}
                      <div className="p-1.5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                        <div className="relative flex-1">
                          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="text"
                            placeholder="Search services..."
                            value={serviceSearch}
                            onChange={(e) => setServiceSearch(e.target.value)}
                            className="w-full pl-8 pr-2 py-1.5 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={handleSelectAllServices}
                          className="text-[11px] font-semibold text-sky-600 dark:text-sky-400 hover:underline shrink-0 px-1"
                        >
                          {selectedServices.length === servicesList.length ? "Deselect All" : "Select All"}
                        </button>
                      </div>

                      {/* Services List with Checkboxes */}
                      <div className="max-h-60 overflow-y-auto py-1 space-y-0.5">
                        {filteredServicesList.length === 0 ? (
                          <p className="text-center text-xs text-slate-400 py-4">No services found.</p>
                        ) : (
                          filteredServicesList.map((service: any) => {
                            const title = service.title || service.name;
                            const isSelected = selectedServices.includes(title);
                            return (
                              <div
                                key={title}
                                onClick={() => toggleService(title)}
                                className={cn(
                                  "flex items-center justify-between px-2.5 py-2 rounded-lg cursor-pointer transition-colors text-xs sm:text-sm select-none",
                                  isSelected
                                    ? "bg-sky-50 dark:bg-sky-950/60 text-sky-900 dark:text-sky-200 font-medium"
                                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60"
                                )}
                              >
                                <div className="flex items-center gap-2.5 flex-1 min-w-0 pr-2">
                                  <Checkbox
                                    id={`contact-service-${title}`}
                                    checked={isSelected}
                                    onCheckedChange={() => toggleService(title)}
                                    onClick={(e) => e.stopPropagation()}
                                    className="data-[state=checked]:bg-sky-500 data-[state=checked]:border-sky-500"
                                  />
                                  <span className="truncate">{title}</span>
                                </div>
                                {isSelected && (
                                  <Check className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                                )}
                              </div>
                            );
                          })
                        )}
                      </div>

                      {/* Footer count indicator */}
                      <div className="pt-2 px-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                        <span>
                          {selectedServices.length} of {servicesList.length} selected
                        </span>
                        <button
                          type="button"
                          onClick={() => setIsDropdownOpen(false)}
                          className="font-semibold text-sky-600 dark:text-sky-400 hover:underline"
                        >
                          Done
                        </button>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Project Details / Goals *
                  </label>
                  <Textarea
                    required
                    rows={4}
                    placeholder="Tell us about your project, current bottlenecks, target timeline, or what you'd like to achieve..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-[#f8fafd] dark:bg-slate-950 border-slate-200 dark:border-slate-700 rounded-xl text-sm"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-11 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-sm transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-slate-500 dark:text-slate-400 text-center flex items-center justify-center gap-1.5 pt-1">
                  <Shield className="w-3.5 h-3.5 text-sky-600" />
                  Your information is strictly confidential. No spam, ever.
                </p>
              </form>
            </div>

            {/* Right: Direct Contact Channels (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              {/* WhatsApp Highlight Box */}
              <div className="bg-[#0c1f38] text-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-800">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#25d366]/20 text-[#25d366] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base leading-tight">Chat on WhatsApp</h3>
                    <p className="text-xs text-slate-300">Fastest response rate</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                  Prefer a quick conversation? Speak directly with our strategy team on WhatsApp for immediate guidance.
                </p>
                <button
                  type="button"
                  onClick={openDirectWhatsApp}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-slate-950 font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Start WhatsApp Chat
                </button>
              </div>

              {/* Direct Info List */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-0.5">
                      Email Inquiries
                    </h4>
                    <a
                      href="mailto:support@provertoglobal.com"
                      className="text-sm font-bold text-slate-900 dark:text-white hover:text-sky-600 transition-colors"
                    >
                      info@provertoglobal.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-0.5">
                      Office Location
                    </h4>
                    <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                      Metro Tower, City Center, Gwalior, India 474001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-0.5">
                      Operating Hours
                    </h4>
                    <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                      Monday – Saturday, 10:00 AM – 7:00 PM IST
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 shadow-sm flex items-center justify-between">
                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  Connect on Socials:
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
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
