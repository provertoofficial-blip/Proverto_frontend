import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Globe,
  User,
  Briefcase,
  Check,
  CheckCircle2,
  ShieldCheck,
  CreditCard,
  Clock,
  ArrowRight,
  ArrowLeft,
  MessageSquare,
  HelpCircle,
  Lock,
  Wallet,
  Receipt,
  Loader2,
  Tag,
  Sparkles,
  X,
} from "lucide-react";
import { toast } from "sonner";
import {
  getDynamicPackages,
  resolveIcon,
  submitContactInquiry,
  loadRazorpayScript,
  createRazorpayOrder,
  verifyRazorpayPayment,
  getRazorpayConfig,
  validateCoupon,
} from "@/lib/api";

const WHATSAPP_NUMBER = "918770836725";

interface PackageItem {
  id?: string;
  _id?: string;
  badge: string;
  badgeColor: string;
  icon: any;
  title: string;
  subtitle: string;
  subheading?: string;
  description?: string;
  priceUSD: string;
  priceINR: string;
  priceAED: string;
  deliveryTime: string;
  deliverables: string[];
  popular?: boolean;
  status?: string;
}

const defaultPackages: PackageItem[] = [
  {
    id: "starter-web",
    badge: "Best for Freshers & Students",
    badgeColor: "bg-sky-500 text-white",
    icon: User,
    title: "Portfolio Starter",
    subtitle:
      "Professional portfolio website for individuals, freelancers, and small businesses to showcase work and achievements.",
    priceUSD: "$249",
    priceINR: "₹9,999",
    priceAED: "⃃499",
    deliveryTime: "5-7 business days",
    deliverables: [
      "Up to 5 custom-designed, fast-loading responsive pages",
      "Layout adapted for mobile, tablet, and desktop devices",
      "Foundational on-page SEO & OpenGraph social tags",
      "Mobile-first architecture with 90+ Google PageSpeed",
      "Hosting & SSL certificate installation for 1 year",
      "15 days priority post-launch bug fixes & support",
    ],
  },
  {
    id: "starter-web-plus",
    badge: "Best for Professionals",
    badgeColor: "bg-emerald-600 text-white",
    icon: User,
    title: "Portfolio Starter Plus",
    subtitle:
      "Professional portfolio website with advanced animations and interactive elements to enhance user engagement and showcase work in a dynamic way.",
    priceUSD: "$299",
    priceINR: "₹14,999",
    priceAED: "⃃699",
    deliveryTime: "7-10 business days",
    deliverables: [
      "Up to 5 custom-designed, fast-loading responsive pages with advanced animations",
      "Mobile-first architecture with 90+ Google PageSpeed scores",
      "Foundational on-page SEO & OpenGraph social tags",
      "Layout adapted for mobile, tablet, and desktop devices",
      "Hosting & SSL certificate installation for 1 year",
      "15 days priority post-launch bug fixes & support",
    ],
  },
  {
    id: "portfolio-pro",
    badge: "Executive Favorite",
    badgeColor: "bg-emerald-600 text-white",
    icon: User,
    title: "Portfolio Pro",
    subtitle:
      "A dynamic portfolio that lets you manage key content through an admin panel, enabling you to update your work, achievements, and personal branding elements without needing technical expertise.",
    priceUSD: "$399",
    priceINR: "₹19,999",
    priceAED: "⃃999",
    deliveryTime: "10-15 business days",
    popular: true,
    deliverables: [
      "Up to 7 agreed public pages: Home, About, Projects, Experience, Contact, Case Studies, Blogs",
      "Admin panel for easy content management and updates",
      "Resume download button and contact form with email notifications",
      "LinkedIn Profile Optimization and 30 days of LinkedIn content strategy & support",
      "Hosting & SSL certificate installation for 1 year",
      "30 days priority post-launch bug fixes & support",
    ],
  },
  {
    id: "portfolio-pro-plus",
    badge: "Executive Favorite",
    badgeColor: "bg-emerald-600 text-white",
    icon: User,
    title: "Portfolio Pro Plus",
    subtitle:
      "The complete dynamic portfolio experience with a more distinctive, motion-enhanced visual identity, advanced animations, and interactive elements to create a truly engaging and memorable online presence.",
    priceUSD: "$499",
    priceINR: "₹29,999",
    priceAED: "⃃1,399",
    deliveryTime: "10-15 business days",
    popular: true,
    deliverables: [
      "7 agreed public pages: Home, About, Projects, Experience, Contact, Case Studies, Blogs",
      "Admin panel for easy content management and updates",
      "Resume download button and contact form with email notifications",
      "Expert Resume & LinkedIn Profile Optimization and 60 days of LinkedIn content strategy & support",
      "Source-code handover and documentation for future updates and maintenance",
      "Hosting & SSL certificate installation for 1 year",
      "60 days priority post-launch bug fixes & support",
    ],
  },
  {
    id: "career-accelerator",
    badge: "Job Seeker's Choice",
    badgeColor: "bg-indigo-600 text-white",
    icon: Briefcase,
    title: "Career Accelerator",
    subtitle:
      "Engineered resumes & linkedin profile optimization and positioning for professionals targeting top-tier global companies.",
    priceUSD: "$99",
    priceINR: "₹8,999",
    priceAED: "⃃349",
    deliveryTime: "7-10 business days",
    deliverables: [
      "ATS-compliant modern executive resume (Master Resume, Role-specific Resume, and Industry-specific Resume)",
      "Customized, high-converting tailored cover letters",
      "SEO-optimized LinkedIn profile with Humanized content writing and keyword strategy",
      "Custom Banner & Headshot optimization for LinkedIn profile",
      "60 Days Ready to post LinkedIn content strategy & support",
      "Executive interview preparation & salary negotiation guide",
    ],
  },
  {
    id: "social-media",
    badge: "Only for Existing Clients",
    badgeColor: "bg-indigo-600 text-white",
    icon: Globe,
    title: "Social Media Marketing",
    subtitle:
      "Comprehensive social media management and growth strategies for businesses.",
    priceUSD: "$1499",
    priceINR: "₹23,999",
    priceAED: "⃃3,499",
    deliveryTime: "Monthly Retainer",
    deliverables: [
      "Social media account setup and optimization (Facebook, Instagram, LinkedIn)",
      "Content creation and scheduling (up to 15 posts per month)",
      "Community management and engagement (responding to comments and messages)",
      "Monthly performance reporting and analytics",
      "Competitor analysis and strategy recommendations",
    ],
  },
];

const faqs = [
  {
    q: "How does the registration and payment process work?",
    a: "Click 'Register & pay' on any package to open the registration and checkout dialog. You will see the complete all-inclusive price before paying securely online via Razorpay (Cards, UPI, NetBanking) or requesting a company tax invoice. Once confirmed, you will receive an immediate receipt, and our team begins work within 24 hours.",
  },
  {
    q: "Are there any hidden charges or recurring fees?",
    a: "None. All packages have fixed, transparent pricing disclosed upfront at payment time. What you see is what you pay. Third-party hosting or Meta Cloud API usage fees (if applicable) are paid directly to those providers without markup.",
  },
  {
    q: "What if I need custom features outside the package scope?",
    a: "We are happy to accommodate additions! You can either chat with us via WhatsApp before checkout or request a custom quote. We will tailor the package deliverables to your exact specifications.",
  },
  {
    q: "Can I communicate with the team directly during the project?",
    a: "Yes. Every client is assigned a dedicated project manager and added to a private WhatsApp or Slack channel for real-time updates, milestone approvals, and daily communication.",
  },
];

const ServicePackages = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [packageList, setPackageList] = useState<PackageItem[]>(defaultPackages);
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Dynamic Fetch
  useEffect(() => {
    getDynamicPackages<any[]>(defaultPackages).then((data) => {
      if (Array.isArray(data) && data.length > 0) {
        const published = data.filter((p) => !p.status || p.status === "Published");
        const listToMap = published.length > 0 ? published : data;
        const mapped: PackageItem[] = listToMap.map((item, idx) => ({
          ...item,
          id: item._id || item.id || item.title,
          icon: resolveIcon(item.icon, User, item.title, idx),
          subheading: item.subheading || item.subtitle || item.description || "",
          subtitle: item.subtitle || item.subheading || item.description || "",
          description: item.description || item.subtitle || item.subheading || "",
          deliverables: Array.isArray(item.deliverables) ? item.deliverables : [],
        }));
        setPackageList(mapped);
      }
    });
  }, []);

  // Sync selected package with URL query parameter (?package=...)
  useEffect(() => {
    const packageParam = searchParams.get("package");
    if (packageParam && packageList.length > 0) {
      const found = packageList.find(
        (p) =>
          (p.id || (p as any)._id) === packageParam ||
          p.title.toLowerCase().replace(/\s+/g, "-") === packageParam
      );
      if (found) {
        setSelectedPackage(found);
      }
    } else if (!packageParam) {
      setSelectedPackage(null);
    }
  }, [searchParams, packageList]);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    paymentMethod: "razorpay", // 'razorpay' | 'invoice'
    notes: "",
  });

  // Coupon State
  const [couponInput, setCouponInput] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<{
    code: string;
    discountType: "percentage" | "fixed";
    discountValue: number;
    description?: string;
    discountAmount: number;
    finalAmount: number;
  } | null>(null);
  const [isCheckingCoupon, setIsCheckingCoupon] = useState(false);
  const [couponError, setCouponError] = useState("");

  // Reset applied coupon when user changes package
  useEffect(() => {
    setAppliedCoupon(null);
    setCouponError("");
  }, [selectedPackage?.id, (selectedPackage as any)?._id]);

  const handleApplyCoupon = async () => {
    if (!couponInput.trim()) {
      toast.error("Please enter a coupon code");
      return;
    }
    if (!selectedPackage) return;

    const baseAmount = parsePackageAmount(selectedPackage);
    setIsCheckingCoupon(true);
    setCouponError("");

    try {
      const res = await validateCoupon({
        code: couponInput.trim().toUpperCase(),
        amount: baseAmount,
        packageTitle: selectedPackage.title,
      });

      if (res.success && res.valid && res.data) {
        setAppliedCoupon({
          code: res.data.code,
          discountType: res.data.discountType,
          discountValue: res.data.discountValue,
          description: res.data.description,
          discountAmount: res.data.discountAmount,
          finalAmount: res.data.finalAmount,
        });
        toast.success(
          res.message ||
            `Coupon ${res.data.code} applied! Saved ₹${res.data.discountAmount.toLocaleString("en-IN")}`
        );
        setCouponError("");
      } else {
        setAppliedCoupon(null);
        const errMsg = res.message || "Invalid or inapplicable coupon code";
        setCouponError(errMsg);
        toast.error(errMsg);
      }
    } catch (err: any) {
      setCouponError("Could not validate coupon");
      toast.error("Failed to check coupon code");
    } finally {
      setIsCheckingCoupon(false);
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponInput("");
    setCouponError("");
    toast.info("Coupon removed");
  };

  const handleOpenRegister = (pkg: PackageItem) => {
    setSelectedPackage(pkg);
    const pkgId = pkg.id || (pkg as any)._id || pkg.title.toLowerCase().replace(/\s+/g, "-");
    setSearchParams({ package: pkgId });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToPackages = () => {
    setSelectedPackage(null);
    setSearchParams({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleWhatsAppInquiry = (pkgTitle: string) => {
    const text = encodeURIComponent(
      `Hi Proverto Global, I am interested in the ${pkgTitle} package. Could you share more details?`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  const parsePackageAmount = (pkg: PackageItem): number => {
    const rawInr = pkg.priceINR?.replace(/[^0-9]/g, "");
    if (rawInr) return Number(rawInr);
    const rawUsd = pkg.priceUSD?.replace(/[^0-9]/g, "");
    if (rawUsd) return Number(rawUsd) * 85;
    return 9999;
  };

  const getPackageDisplayPrice = (pkg: PackageItem | null): string => {
    if (!pkg) return "₹9,999";
    return pkg.priceINR || "₹9,999";
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in your name, email, and phone number.");
      return;
    }

    if (!selectedPackage) return;
    setIsSubmitting(true);

    const baseAmount = parsePackageAmount(selectedPackage);
    const discountAmount = appliedCoupon ? appliedCoupon.discountAmount : 0;
    const numericAmount = Math.max(0, baseAmount - discountAmount);
    const displayPrice = `₹${numericAmount.toLocaleString("en-IN")}`;
    const couponNote = appliedCoupon
      ? ` | Coupon: ${appliedCoupon.code} (-₹${discountAmount.toLocaleString("en-IN")})`
      : "";

    // 1. COMPANY INVOICE OPTION (OFFLINE / WIRE TRANSFER)
    if (formData.paymentMethod === "invoice") {
      try {
        await submitContactInquiry({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: selectedPackage.title,
          notes: `Company Invoice Requested | Package: ${selectedPackage.title} | Price: ${displayPrice}${couponNote} | Notes: ${formData.notes}`,
          inquiryType: "Invoice Request",
          paymentMethod: "Company Invoice",
        });

        setIsSubmitting(false);
        toast.success(
          `Invoice request received for ${selectedPackage.title}! We will send the invoice shortly.`
        );
        navigate("/thank-you", {
          state: {
            packageTitle: selectedPackage.title,
            customer: formData.name,
            amount: numericAmount,
            isInvoice: true,
            couponCode: appliedCoupon?.code || "",
            discountAmount,
          },
        });
      } catch (err: any) {
        console.error("Invoice request failed:", err);
        setIsSubmitting(false);
        toast.error("Failed to submit request. Please try again or message WhatsApp.");
      }
      return;
    }

    // 2. RAZORPAY ONLINE CHECKOUT (CARDS, UPI, NETBANKING, WALLETS)
    try {
      // Step A: Load Razorpay Checkout SDK Script
      const isLoaded = await loadRazorpayScript();
      if (!isLoaded) {
        setIsSubmitting(false);
        toast.error(
          "Unable to load Razorpay payment window. Please check your internet connection."
        );
        return;
      }

      // Step B: Create Razorpay Order on Server
      toast.loading("Opening secure Razorpay payment window...", { id: "rzp-init" });

      const orderRes = await createRazorpayOrder({
        amount: numericAmount,
        currency: "INR",
        customer: formData.name,
        email: formData.email,
        phone: formData.phone,
        packageTitle: selectedPackage.title,
        notes: `${formData.notes || ""}${couponNote}`.trim(),
      });

      toast.dismiss("rzp-init");

      // Extract keyId & orderId with resilient fallback
      let keyId = orderRes?.keyId || "";
      let orderId = orderRes?.order?.id || "";
      let amountInSubunits = orderRes?.order?.amount || Math.round(numericAmount * 100);

      if (!keyId) {
        const configRes = await getRazorpayConfig();
        if (configRes && configRes.keyId) {
          keyId = configRes.keyId;
        }
      }

      if (!keyId) {
        keyId = (import.meta.env.VITE_RAZORPAY_KEY_ID as string) || "";
      }

      if (!keyId) {
        setIsSubmitting(false);
        toast.error(
          orderRes?.message ||
            "Razorpay API Key not found. Please verify your Key ID in Admin Settings -> Razorpay Gateway."
        );
        return;
      }

      // Step C: Configure Razorpay Checkout Modal
      const options: any = {
        key: keyId,
        amount: amountInSubunits,
        currency: "INR",
        name: "ProVerto Global",
        description: `Payment for ${selectedPackage.title}`,
        image: "/Proverto Logo.jpg",
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        notes: {
          packageTitle: selectedPackage.title,
          customer: formData.name,
        },
        theme: {
          color: "#0284c7", // Sky blue brand accent
        },
        modal: {
          ondismiss: () => {
            setIsSubmitting(false);
            toast.info("Payment window closed");
          },
        },
        handler: async (response: {
          razorpay_payment_id: string;
          razorpay_order_id?: string;
          razorpay_signature?: string;
        }) => {
          try {
            toast.loading("Verifying payment & securing transaction...", {
              id: "rzp-verify",
            });

            // Step D: Verify and Store Transaction in MongoDB
            const verifyRes = await verifyRazorpayPayment({
              razorpay_order_id: response.razorpay_order_id || orderId || "",
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature || "",
              customer: formData.name,
              email: formData.email,
              phone: formData.phone,
              amount: numericAmount,
              currency: "INR",
              packageTitle: selectedPackage.title,
              notes: `${formData.notes || ""}${couponNote}`.trim(),
              couponCode: appliedCoupon?.code || "",
              discountAmount,
            } as any);

            toast.dismiss("rzp-verify");

            // Also record inquiry so it shows up in leads / inquiries list
            await submitContactInquiry({
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              service: selectedPackage.title,
              notes: `Verified Razorpay Payment: ${response.razorpay_payment_id} | Amount: ${displayPrice} | Package: ${selectedPackage.title}`,
              inquiryType: "Package Purchase",
              paymentMethod: "Razorpay",
            });

            setIsSubmitting(false);

            if (verifyRes.success) {
              toast.success("Payment verified! Your order has been recorded.");
              navigate("/thank-you", {
                state: {
                  transactionId: response.razorpay_payment_id,
                  orderId: response.razorpay_order_id || orderId,
                  amount: numericAmount,
                  packageTitle: selectedPackage.title,
                  customer: formData.name,
                },
              });
            } else {
              toast.error(verifyRes.message || "Payment verification failed");
            }
          } catch (verifyErr: any) {
            toast.dismiss("rzp-verify");
            console.error("Verification error:", verifyErr);
            toast.error("Error verifying payment transaction");
            setIsSubmitting(false);
          }
        },
      };

      // Only attach server order_id if it's an authentic Razorpay order ID
      if (orderId && orderId.startsWith("order_") && !orderId.startsWith("order_client_")) {
        options.order_id = orderId;
      }

      const razorpayInstance = new (window as any).Razorpay(options);

      razorpayInstance.on("payment.failed", (failResponse: any) => {
        console.error("Payment failed:", failResponse);
        toast.error(
          `Payment declined: ${
            failResponse.error?.description || "Transaction was not completed"
          }`
        );
        setIsSubmitting(false);
      });

      // Open Razorpay Popup Window
      razorpayInstance.open();
    } catch (checkoutErr: any) {
      console.error("Checkout launch error:", checkoutErr);
      setIsSubmitting(false);
      toast.error(checkoutErr.message || "Failed to open payment gateway");
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafd] dark:bg-slate-950 flex flex-col justify-between">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-14 md:pt-36 md:pb-20 bg-[#081a2e] text-white overflow-hidden border-b border-slate-800">
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
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-sky-400 mb-4">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-slate-500">/</span>
              <Link to="/services" className="hover:text-white transition-colors">
                Services
              </Link>
              <span className="text-slate-500">/</span>
              {selectedPackage ? (
                <>
                  <button
                    onClick={handleBackToPackages}
                    className="hover:text-white transition-colors cursor-pointer text-sky-400"
                  >
                    Service Packages
                  </button>
                  <span className="text-slate-500">/</span>
                  <span className="text-slate-300">{selectedPackage.title} Overview</span>
                </>
              ) : (
                <span className="text-slate-300">Service Packages</span>
              )}
            </nav>

            {selectedPackage ? (
              <>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span
                    className={`text-[11px] font-bold px-3 py-1 rounded-full ${
                      selectedPackage.badgeColor || "bg-sky-500 text-white"
                    }`}
                  >
                    {selectedPackage.badge}
                  </span>
                  <span className="text-xs text-sky-300 font-medium flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    Turnaround: {selectedPackage.deliveryTime}
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-3">
                  {selectedPackage.title}{" "}
                  <span className="text-sky-400">Overview</span>
                </h1>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                  {selectedPackage.subtitle}
                </p>
              </>
            ) : (
              <>
                <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-white tracking-tight leading-[1.14] mb-5">
                  Personal Branding{" "}
                  <span className="text-sky-400">Service Packages</span>
                </h1>
                <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
                  Turnkey digital solutions built for speed, transparency, and outcomes. Select a package, review your deliverables, and register online—our engineering team starts within 24 hours.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* MAIN VIEW: PACKAGE OVERVIEW & CHECKOUT (WHEN PACKAGE IS SELECTED) */}
      {selectedPackage ? (
        <section className="py-12 md:py-16">
          <div className="container-custom">
            {/* Top Navigation Bar */}
            <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">
              <button
                type="button"
                onClick={handleBackToPackages}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 hover:border-sky-500 text-sm font-bold transition-all shadow-sm cursor-pointer group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <span>← Back to all packages</span>
              </button>

              <div className="flex items-center gap-3">
                <span className="hidden sm:inline text-xs text-slate-500 dark:text-slate-400">
                  Have questions before booking?
                </span>
                <button
                  type="button"
                  onClick={() => handleWhatsAppInquiry(selectedPackage.title)}
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-bold hover:bg-emerald-100 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Chat on WhatsApp
                </button>
              </div>
            </div>

            {/* 2-Column Responsive Layout: Overview & Registration */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* LEFT COLUMN (7 cols): Comprehensive Package Overview & Scope */}
              <div className="lg:col-span-7 flex flex-col gap-8">
                {/* 1. All-Inclusive Investment & Scope Box (Price displayed before registration form on mobile) */}
                <div className="order-3 lg:order-1 rounded-2xl bg-gradient-to-br from-[#081a2e] to-slate-900 text-white p-6 sm:p-8 shadow-xl border border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-1">
                        All-Inclusive Investment
                      </span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                          {getPackageDisplayPrice(selectedPackage)}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          Fixed one-time payment
                        </span>
                      </div>
                    </div>
                    <div className="sm:text-right">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                        Estimated Turnaround
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/20 text-sky-300 text-sm font-bold border border-sky-500/30">
                        <Clock className="w-4 h-4" />
                        {selectedPackage.deliveryTime}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-xs">
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>No recurring fees</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Official Tax Invoice</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Milestone-based delivery</span>
                    </div>
                  </div>
                </div>

                {/* 2. Detailed Deliverables Breakdown */}
                <div className="order-1 lg:order-2 rounded-2xl bg-white dark:bg-slate-900 p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                    <div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                        Deliverables & Scope Overview
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                        Everything included with your {selectedPackage.title} package:
                      </p>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 shrink-0">
                      {selectedPackage.deliverables?.length || 0} Deliverables
                    </span>
                  </div>

                  <div className="space-y-3.5">
                    {selectedPackage.deliverables?.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/80 transition-all hover:border-sky-200 dark:hover:border-sky-900/50"
                      >
                        <div className="w-6 h-6 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                          <Check className="w-4 h-4 stroke-[2.5]" />
                        </div>
                        <div className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                          {item}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Delivery Milestones & Process */}
                <div className="order-2 lg:order-3 rounded-2xl bg-white dark:bg-slate-900 p-6 sm:p-8 border border-slate-200/90 dark:border-slate-800 shadow-sm">
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                    How Your Project Proceeds
                  </h3>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        1
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                          Instant Kickoff (Within 24 Hours)
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                          Upon registration, your order is assigned to a dedicated project manager. We set up a private WhatsApp or Slack channel for real-time communication.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        2
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                          Staged Milestone Delivery & Feedback
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                          Work is delivered in stages with live interactive previews. You review each milestone and provide feedback before final sign-off.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        3
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                          Handover, Deployment & Priority Support
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                          We deploy your assets or live site, provide full source code and credentials, and include continuous bug fix support.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN (5 cols): Registration & Checkout Form */}
              <div className="lg:col-span-5 lg:sticky lg:top-24 md:min-h-[90vh]">
                <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xl overflow-hidden">
                  <div className="bg-[#081a2e] p-6 text-white border-b border-slate-800">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400 flex items-center gap-1.5 mb-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-sky-400" /> SECURE REGISTRATION & CHECKOUT
                    </span>
                    <h3 className="text-xl font-black text-white">
                      Register for {selectedPackage.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Fill in your details below to register and complete payment.
                    </p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="p-6 space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>

                    {/* Payment Mode Selector */}
                    {/* <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        Payment Option
                      </label>
                      <div className="space-y-2">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, paymentMethod: "razorpay" })}
                          className={`w-full p-3 rounded-xl border text-left flex items-start gap-3 transition-all cursor-pointer ${
                            formData.paymentMethod === "razorpay"
                              ? "border-sky-500 bg-sky-50/70 dark:bg-sky-950/40 ring-1 ring-sky-500 text-sky-900 dark:text-sky-200"
                              : "border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300"
                          }`}
                        >
                          <div className="w-8 h-8 rounded-lg bg-sky-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                            <Wallet className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold">Online Payment (Instant)</div>
                            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                              Pay via Razorpay • UPI (GPay/PhonePe), Cards, NetBanking
                            </div>
                          </div>
                        </button>

                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, paymentMethod: "invoice" })}
                          className={`w-full p-3 rounded-xl border text-left flex items-start gap-3 transition-all cursor-pointer ${
                            formData.paymentMethod === "invoice"
                              ? "border-sky-500 bg-sky-50/70 dark:bg-sky-950/40 ring-1 ring-sky-500 text-sky-900 dark:text-sky-200"
                              : "border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300"
                          }`}
                        >

                          
                        </button>
                      </div>
                    </div> */}

                    {/* Specific Notes */}
                    {/* <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        Specific Notes / Current Links (Optional)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Share any background details, current links or timeline expectations..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div> */}

                    {/* Coupon Input Box */}
                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 space-y-2">
                      <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                        <span className="flex items-center gap-1.5">
                          <Tag className="w-3.5 h-3.5 text-sky-500" />
                          Apply Coupon / Promo Code
                        </span>
                      </div>

                      {appliedCoupon ? (
                        <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                            <div>
                              <p className="text-xs font-bold text-emerald-800 dark:text-emerald-300">
                                {appliedCoupon.code} applied!
                              </p>
                              <p className="text-[11px] text-emerald-600 dark:text-emerald-400">
                                {appliedCoupon.discountType === "percentage"
                                  ? `${appliedCoupon.discountValue}% discount (-₹${appliedCoupon.discountAmount.toLocaleString("en-IN")})`
                                  : `Flat ₹${appliedCoupon.discountAmount.toLocaleString("en-IN")} discount`}
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={handleRemoveCoupon}
                            className="text-xs font-medium text-slate-500 hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-400 px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer flex items-center gap-1"
                          >
                            <X className="w-3.5 h-3.5" />
                            Remove
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              placeholder="e.g. PROVERTO10"
                              value={couponInput}
                              onChange={(e) => {
                                setCouponInput(e.target.value.toUpperCase());
                                if (couponError) setCouponError("");
                              }}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  e.preventDefault();
                                  handleApplyCoupon();
                                }
                              }}
                              className="flex-1 px-3 py-2 text-xs font-mono font-bold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 uppercase placeholder:normal-case placeholder:font-sans placeholder:font-normal text-slate-900 dark:text-white"
                            />
                            <button
                              type="button"
                              onClick={handleApplyCoupon}
                              disabled={isCheckingCoupon || !couponInput.trim()}
                              className="px-4 py-2 text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 disabled:opacity-50 rounded-lg shadow-xs transition cursor-pointer shrink-0 flex items-center gap-1"
                            >
                              {isCheckingCoupon ? (
                                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                              ) : (
                                "Apply"
                              )}
                            </button>
                          </div>
                          {couponError && (
                            <p className="text-[11px] font-medium text-rose-500 dark:text-rose-400">
                              {couponError}
                            </p>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Order Summary Box */}
                    {(() => {
                      const baseAmt = parsePackageAmount(selectedPackage);
                      const discAmt = appliedCoupon ? appliedCoupon.discountAmount : 0;
                      const payableAmt = Math.max(0, baseAmt - discAmt);
                      const payableDisplay = `₹${payableAmt.toLocaleString("en-IN")}`;

                      return (
                        <>
                          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 space-y-2">
                            <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                              <span>Selected Package:</span>
                              <span className="font-bold text-slate-800 dark:text-slate-200">
                                {selectedPackage.title}
                              </span>
                            </div>
                            <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                              <span>Estimated Turnaround:</span>
                              <span className="font-bold text-slate-800 dark:text-slate-200">
                                {selectedPackage.deliveryTime}
                              </span>
                            </div>

                            {appliedCoupon && (
                              <>
                                <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400 pt-1 border-t border-dashed border-slate-200 dark:border-slate-700">
                                  <span>Original Price:</span>
                                  <span className="line-through text-slate-400">
                                    {getPackageDisplayPrice(selectedPackage)}
                                  </span>
                                </div>
                                <div className="flex items-center justify-between text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                                  <span className="flex items-center gap-1">
                                    <Tag className="w-3 h-3" />
                                    Coupon ({appliedCoupon.code}):
                                  </span>
                                  <span>-₹{discAmt.toLocaleString("en-IN")}</span>
                                </div>
                              </>
                            )}

                            <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                              <div>
                                <p className="text-xs font-extrabold text-slate-900 dark:text-white uppercase">
                                  Total Payable:
                                </p>
                                {appliedCoupon && (
                                  <span className="inline-block text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-100/70 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded mt-0.5">
                                    You save ₹{discAmt.toLocaleString("en-IN")}!
                                  </span>
                                )}
                              </div>

                              <div className="flex flex-col items-end">
                                <span className="text-xl font-black text-sky-600 dark:text-sky-400">
                                  {payableDisplay}
                                </span>
                                <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400">
                                  GST & all taxes inclusive
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Submit Button */}
                          <div className="pt-2">
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="w-full py-3.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 active:bg-sky-600 disabled:opacity-60 text-white font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                            >
                              {isSubmitting ? (
                                <span className="flex items-center gap-2">
                                  <Loader2 className="w-4 h-4 animate-spin" />
                                  Connecting to Payment Gateway...
                                </span>
                              ) : formData.paymentMethod === "invoice" ? (
                                <span className="flex items-center gap-2">
                                  <Receipt className="w-4 h-4" />
                                  Request Invoice ({payableDisplay})
                                </span>
                              ) : (
                                <>
                                  <Lock className="w-4 h-4" />
                                  <span>
                                    Pay Online via Razorpay ({payableDisplay})
                                  </span>
                                </>
                              )}
                            </button>
                          </div>
                        </>
                      );
                    })()}

                    <p className="text-[11px] text-center text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1.5 pt-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>Razorpay 256-bit SSL encrypted • Instant payment receipt provided</span>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        /* PACKAGES GRID SECTION (PRICES HIDDEN ON CARDS) */
        <section className="py-14 md:py-20">
          <div className="container-custom">
            {/* Section Subheader & Link back to Custom Services */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200 dark:border-slate-800">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Choose Your Solution
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Select a package to view full deliverables, register, and pay securely online.
                </p>
              </div>
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-600 dark:text-sky-400 hover:underline"
              >
                <span>Need custom requirements? Explore all custom services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Cards Grid (Prices Hidden on Cards) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {packageList.map((pkg, index) => {
                const Icon = resolveIcon(pkg.icon, User, pkg.title, index);
                const cardKey = pkg._id || pkg.id || pkg.title;

                return (
                  <div
                    key={cardKey}
                    className={`relative rounded-2xl bg-white dark:bg-slate-900 p-8 border transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 ${
                      pkg.popular
                        ? "border-sky-500 ring-2 ring-sky-500/20 shadow-lg"
                        : "border-slate-200/90 dark:border-slate-800 shadow-sm"
                    }`}
                  >
                    {/* Popular Floating Badge */}
                    {pkg.popular && (
                      <div className="absolute -top-3.5 right-8">
                        <span className="bg-sky-500 text-white text-[11px] font-extrabold px-3.5 py-1 rounded-full shadow-sm tracking-wide uppercase">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div>
                      {/* Top Row: Icon + Badge */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-xl bg-[#081a2e] text-sky-400 dark:bg-slate-800 dark:text-sky-300 flex items-center justify-center shadow-sm">
                          <Icon className="w-6 h-6 stroke-[2]" />
                        </div>
                        <span
                          className={`text-[11px] font-bold px-3 py-1 rounded-full ${
                            pkg.badgeColor || "bg-sky-500 text-white"
                          }`}
                        >
                          {pkg.badge}
                        </span>
                      </div>

                      {/* Title & Subheading / Description */}
                      <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2 leading-snug">
                        {pkg.title}
                      </h3>
                      {pkg.subheading && pkg.description && pkg.subheading !== pkg.description ? (
                        <>
                          <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 leading-relaxed">
                            {pkg.subheading}
                          </p>
                          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                            {pkg.description}
                          </p>
                        </>
                      ) : (
                        (pkg.subheading || pkg.subtitle || pkg.description) && (
                          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                            {pkg.subheading || pkg.subtitle || pkg.description}
                          </p>
                        )
                      )}

                      {/* Scope & Turnaround Box (Price Hidden on Card) */}
                      <div className="bg-slate-50 dark:bg-slate-800/60 rounded-xl p-4 mb-6 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block uppercase tracking-wider">
                            Project Scope
                          </span>
                          <span className="text-sm font-extrabold text-slate-900 dark:text-white mt-0.5 block">
                            Fixed Milestone Delivery
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block uppercase tracking-wider flex items-center gap-1 justify-end">
                            <Clock className="w-3.5 h-3.5" /> Turnaround
                          </span>
                          <span className="text-xs font-bold text-slate-900 dark:text-white mt-1 block">
                            {pkg.deliveryTime}
                          </span>
                        </div>
                      </div>

                      {/* Deliverables Checkpoints */}
                      <div className="space-y-3 mb-8">
                        <p className="text-xs font-bold tracking-wider uppercase text-slate-500 dark:text-slate-400 mb-2">
                          What's Included:
                        </p>
                        {pkg.deliverables?.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                          >
                            <Check className="w-4 h-4 text-sky-500 stroke-[2.5] shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions Row: Register & Pay + Ask Question */}
                    <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                      <button
                        type="button"
                        onClick={() => handleOpenRegister(pkg)}
                        className="flex-1 py-3 px-5 rounded-xl bg-sky-500 hover:bg-sky-400 active:bg-sky-600 text-white text-sm font-bold transition-all shadow-md hover:shadow-sky-500/25 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <CreditCard className="w-4 h-4" />
                        <span>Register & pay</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleWhatsAppInquiry(pkg.title)}
                        className="py-3 px-5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-slate-400 text-slate-800 dark:text-slate-200 text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Ask a question</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Trust Guarantees Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <ShieldCheck className="w-6 h-6 text-sky-500 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">
                    100% Deliverable Guarantee
                  </p>
                  <p className="text-[11px] text-slate-500">Milestone-based delivery</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <Lock className="w-6 h-6 text-emerald-500 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">
                    Razorpay Secure Checkout
                  </p>
                  <p className="text-[11px] text-slate-500">256-bit encrypted transactions</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <Clock className="w-6 h-6 text-purple-500 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Rapid Kickoff</p>
                  <p className="text-[11px] text-slate-500">Starts within 24 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Official Tax Invoice</p>
                  <p className="text-[11px] text-slate-500">GST / Company receipts</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Frequently Asked Questions Section */}
      <section className="py-14 bg-slate-50/60 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
              HAVE QUESTIONS?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm"
              >
                <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2.5 mb-2">
                  <HelpCircle className="w-4 h-4 text-sky-500 shrink-0" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pl-6.5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Enterprise Needs Banner */}
      <section className="py-12 bg-[#081a2e] text-white">
        <div className="container-custom text-center max-w-2xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Looking for a custom project quote?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            If your requirements go beyond our standard fixed-price bundles, our engineering and consulting team can create a tailored scope for you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/free-consultation"
              className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm transition-all shadow-md"
            >
              Book a Free Consultation
            </Link>
            <Link
              to="/services"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm transition-all border border-slate-700"
            >
              Browse All Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePackages;
