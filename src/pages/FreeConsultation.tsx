import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  CalendarIcon,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
  Clock,
  Sparkles,
  ShieldCheck,
  Send,
  ChevronDown,
  X,
  Check,
  Search,
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { services as defaultServices } from "@/components/ServicesSection";
import { submitConsultation, getDynamicServices } from "@/lib/api";

const WHATSAPP_NUMBER = "918770836725";
// const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvzgealj";

const timeSlots = [
  "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"
];

const FreeConsultation = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [date, setDate] = useState<Date>();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [serviceSearch, setServiceSearch] = useState("");
  const [servicesList, setServicesList] = useState(defaultServices);

  useEffect(() => {
    getDynamicServices(defaultServices).then((data) => {
      if (Array.isArray(data) && data.length > 0) {
        setServicesList(data);
      }
    });
  }, []);

  const filteredServicesList = servicesList.filter((s) =>
    s.title.toLowerCase().includes(serviceSearch.toLowerCase())
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
      setSelectedServices(servicesList.map((s) => s.title));
    }
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    time: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (serviceTitle: string, checked: boolean) => {
    setSelectedServices((prev) =>
      checked ? [...prev, serviceTitle] : prev.filter((s) => s !== serviceTitle)
    );
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.phone.trim();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Submit to Proverto Backend API (MongoDB)
      await submitConsultation({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        selectedServices,
        preferredDate: date ? format(date, "PPP") : "Not specified",
        time: formData.time,
        message: formData.message,
      });

      // 2. Also forward to Formspree if reachable
      try {
        // await fetch(FORMSPREE_ENDPOINT, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     ...formData,
        //     selectedServices: selectedServices.join(", "),
        //     preferredDate: date ? format(date, "PPP") : "Not specified",
        //   }),
        // });
      } catch (fErr) {
        console.warn("Formspree fallback notice:", fErr);
      }

      toast({
        title: "Consultation Request Submitted!",
        description: "Our strategists will review your request and confirm within few hours.",
      });
      setFormData({ name: "", email: "", phone: "", time: "", message: "" });
      setDate(undefined);
      setSelectedServices([]);
      navigate("/thank-you");
    } catch {
      toast({
        title: "Submission Failed",
        description: "Please try again or connect directly via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi Proverto, I'd like to book a free 15-minute consultation.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#f8fafd] dark:bg-slate-950 flex flex-col justify-between">
      <Header />

      {/* Hero Section with Blueprint Theme */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-[#081a2e] text-white overflow-hidden border-b border-slate-800">
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
            <nav className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-sky-400 mb-4">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-slate-500">/</span>
              <span className="text-slate-300">Free Consultation</span>
            </nav>

            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-white tracking-tight leading-[1.14] mb-5">
              Let's discuss how we can{" "}
              <span className="text-sky-400">transform your business</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
              Book a 15-minute 1-on-1 strategy call with our consultants. No commitments, no pushy sales pitches — just actionable technical and growth insights.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="py-14 md:py-20 flex-grow">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Left: Consultation Form (7 cols) */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-sm">
              <div className="mb-5">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1">
                  Schedule Your Free Strategy Call
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Pick your focus area and preferred time slot. We'll send a meeting link immediately.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Alex Morgan"
                      required
                      maxLength={100}
                      className="bg-[#f8fafd] dark:bg-slate-950 border-slate-200 dark:border-slate-700 h-11 rounded-xl text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="alex@company.com"
                      required
                      maxLength={255}
                      className="bg-[#f8fafd] dark:bg-slate-950 border-slate-200 dark:border-slate-700 h-11 rounded-xl text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 8770836725"
                    required
                    maxLength={20}
                    className="bg-[#f8fafd] dark:bg-slate-950 border-slate-200 dark:border-slate-700 h-11 rounded-xl text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Preferred Date
                    </label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal bg-[#f8fafd] dark:bg-slate-950 border-slate-200 dark:border-slate-700 h-11 rounded-xl text-sm",
                            !date && "text-slate-400"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4 text-sky-500" />
                          {date ? format(date, "PPP") : "Select a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(date) => date < new Date()}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                      Preferred Time Slot
                    </label>
                    <Select
                      value={formData.time}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, time: value }))}
                    >
                      <SelectTrigger className="w-full bg-[#f8fafd] dark:bg-slate-950 border-slate-200 dark:border-slate-700 h-11 rounded-xl text-sm">
                        <SelectValue placeholder="Choose a time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
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
                          filteredServicesList.map((service) => {
                            const isSelected = selectedServices.includes(service.title);
                            return (
                              <div
                                key={service.title}
                                onClick={() => toggleService(service.title)}
                                className={cn(
                                  "flex items-center justify-between px-2.5 py-2 rounded-lg cursor-pointer transition-colors text-xs sm:text-sm select-none",
                                  isSelected
                                    ? "bg-sky-50 dark:bg-sky-950/60 text-sky-900 dark:text-sky-200 font-medium"
                                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60"
                                )}
                              >
                                <div className="flex items-center gap-2.5 flex-1 min-w-0 pr-2">
                                  <Checkbox
                                    id={`dd-service-${service.title}`}
                                    checked={isSelected}
                                    onCheckedChange={() => toggleService(service.title)}
                                    onClick={(e) => e.stopPropagation()}
                                    className="data-[state=checked]:bg-sky-500 data-[state=checked]:border-sky-500"
                                  />
                                  <span className="truncate">{service.title}</span>
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
                      <div className="pt-2 mt-1 border-t border-slate-100 dark:border-slate-800 px-2 flex items-center justify-between text-[11px] text-slate-400">
                        <span>Click options to select multiple</span>
                        <button
                          type="button"
                          onClick={() => setIsDropdownOpen(false)}
                          className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline"
                        >
                          Done
                        </button>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Tell Us About Your Goals / Challenges
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Briefly describe what bottlenecks you are facing, current website, or target outcomes..."
                    rows={3}
                    maxLength={1000}
                    className="bg-[#f8fafd] dark:bg-slate-950 border-slate-200 dark:border-slate-700 rounded-xl text-sm"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !isFormValid}
                  className="w-full h-11 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white font-bold text-sm transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    "Confirming Booking..."
                  ) : (
                    <>
                      <span>Confirm Free Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </Button>

                <div className="pt-2">
                  <div className="relative flex py-2 items-center">
                    <div className="flex-grow border-t border-slate-200 dark:border-slate-800" />
                    <span className="flex-shrink mx-3 text-xs text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wider">
                      Or Prefer Instant Chat?
                    </span>
                    <div className="flex-grow border-t border-slate-200 dark:border-slate-800" />
                  </div>

                  <button
                    type="button"
                    onClick={openWhatsApp}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-slate-950 font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp Directly</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Right: Sidebar Benefits & Trust (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              {/* What to Expect Card */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200/90 dark:border-slate-800 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0c1f38] text-sky-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                      What to Expect
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">15-minute focused session</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {[
                    "Personalized review of your current systems & profile",
                    "Expert analysis of bottlenecks and missed opportunities",
                    "Actionable recommendations tailored to your timeline",
                    "Concrete implementation roadmap with clear deliverables",
                    "Zero sales pressure — only practical, honest guidance",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why Choose Proverto? Card */}
              <div className="bg-[#0c1f38] text-white rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-tight">
                      Why Choose Proverto?
                    </h3>
                    <p className="text-xs text-slate-300">Engineered for real-world impact</p>
                  </div>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span><strong>500+</strong> projects successfully delivered</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>Battle-tested AI & process automations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>100% full code & IP ownership from day one</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span>Rapid communication & dedicated turnaround</span>
                  </li>
                </ul>
              </div>

              {/* Direct Info & Socials Card */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200/90 dark:border-slate-800 shadow-sm space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                      Direct Email
                    </span>
                    <a
                      href="mailto:info@provertoglobal.com"
                      className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-sky-600 transition-colors truncate block"
                    >
                      info@provertoglobal.com
                    </a>
                  </div>
                </div>

                {/* <div className="flex items-start gap-3"> */}
                  {/* <div className="w-8 h-8 rounded-lg bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div> */}
                  {/* <div className="min-w-0">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                      Direct Phone
                    </span>
                    <a
                      href="tel:+918770836725"
                      className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-sky-600 transition-colors truncate block"
                    >
                      +91 8770836725
                    </a>
                  </div> */}
                {/* </div> */}

                {/* Social Channels */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Follow Our Updates:
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://www.linkedin.com/company/proverto-global/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-lg bg-[#0c1f38] text-sky-400 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://www.facebook.com/share/1C1bDHCeyA/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-lg bg-[#0c1f38] text-sky-400 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://www.instagram.com/provertoglobal?igsh=MThhYWZpZDEyaTY2Nw%3D%3D&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-7 h-7 rounded-lg bg-[#0c1f38] text-sky-400 flex items-center justify-center hover:bg-sky-600 hover:text-white transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                    </a>
                  </div>
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

export default FreeConsultation;
