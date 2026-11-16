import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Code2,
  Terminal,
  Database,
  Layers,
  GitBranch,
  Rocket,
  CheckCircle2,
  Calendar,
  Clock,
  Laptop,
  Award,
  Users,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
  MessageCircle,
  HelpCircle,
  Sparkles,
  Check,
  CreditCard,
  Building2,
  FileCode,
  Globe,
  Loader2,
  Play,
  Github,
  Tag,
} from "lucide-react";
import { toast } from "sonner";
import {
  loadRazorpayScript,
  createRazorpayOrder,
  verifyRazorpayPayment,
  getRazorpayConfig,
  submitContactInquiry,
  validateCoupon,
} from "@/lib/api";

const WHATSAPP_NUMBER = "918770836725";

interface CurriculumModule {
  number: string;
  title: string;
  subtitle: string;
  icon: any;
  duration: string;
  skills: string[];
  description: string;
}

const curriculumModules: CurriculumModule[] = [
  {
    number: "01",
    title: "Frontend Foundations & Git/GitHub",
    subtitle: "HTML5, CSS3, Responsive Design, Modern JavaScript & Version Control",
    icon: FileCode,
    duration: "Month 1",
    description: "Build semantic, accessible, and pixel-perfect web pages from scratch while mastering Git.",
    skills: [
      "Semantic HTML5 & Modern CSS3 architecture",
      "Flexbox, CSS Grid & Responsive Layouts",
      "Modern JavaScript ES6+ (Arrow functions, Destructuring, Promises, Async/Await)",
      "DOM manipulation & Event Handling",
      "Git version control fundamentals & GitHub workflow",
      "Creating repositories, branch management & pull requests",
    ],
  },
  {
    number: "02",
    title: "React Development",
    subtitle: "Component Architecture, Hooks, State & Routing",
    icon: Code2,
    duration: "Month 2",
    description: "Master modern single-page application development with React.",
    skills: [
      "JSX, Functional Components & Props validation",
      "React Hooks (useState, useEffect, useMemo, useCallback, useRef)",
      "State Management & Custom Hooks",
      "Client-side routing with React Router v6",
      "Tailwind CSS styling & Modern UI libraries",
      "API consumption with Axios & Fetch with loading/error handling",
    ],
  },
  {
    number: "03",
    title: "Backend Development",
    subtitle: "Node.js, Express.js & RESTful API Architecture",
    icon: Terminal,
    duration: "Month 3",
    description: "Engineer scalable, secure backend microservices and RESTful APIs.",
    skills: [
      "Node.js runtime environment & Event Loop",
      "Express.js framework & Routing architecture",
      "Middleware design, Error handling & Request validation",
      "RESTful API design best practices & HTTP status codes",
      "JWT (JSON Web Token) authentication & bcrypt password hashing",
      "Role-based Access Control (RBAC) & Route protection",
    ],
  },
  {
    number: "04",
    title: "Database Management & Full Stack Integration",
    subtitle: "MongoDB, Mongoose & End-to-End System Integration",
    icon: Database,
    duration: "Month 4",
    description: "Model complex schemas, run queries, and integrate frontend with backend.",
    skills: [
      "NoSQL database concepts & MongoDB Atlas setup",
      "Mongoose Schema design, Models, Validation & Middleware",
      "Complex Queries, Aggregation Pipelines & Indexing",
      "Frontend + Backend CORS integration & Environment configuration",
      "File uploads with Cloudinary & Multer",
      "Testing, debugging and cloud deployment on Vercel & Render",
    ],
  },
  {
    number: "05",
    title: "Supervised Industry Internship (Phase 1)",
    subtitle: "Team Collaboration, Agile Sprints & Production Codebase",
    icon: Users,
    duration: "Month 5",
    description: "Step into a simulated professional tech team with real sprint deliverables.",
    skills: [
      "Agile/Scrum ceremonies: Daily standups, Sprint planning & retrospectives",
      "Git collaborative workflows: Feature branches, Pull Requests & Code Reviews",
      "Working on live client-grade modules and internal ProVerto tools",
      "Writing clean, maintainable, production-ready code with documentation",
      "Bug fixing, performance optimization & security hardening",
    ],
  },
  {
    number: "06",
    title: "Supervised Industry Internship (Phase 2)",
    subtitle: "Capstone Project Launch, Evaluation & Dual Certification",
    icon: Rocket,
    duration: "Month 6",
    description: "Deploy and defend your full-stack capstone and graduate with credentials.",
    skills: [
      "Production deployment with custom domain, SSL & CI/CD pipeline",
      "End-to-end integration testing & QA verification",
      "Technical code defense & project walkthrough presentation",
      "Technical resume review & LinkedIn profile makeover",
      "Dual Certification issuance & Letter of Recommendation evaluation",
    ],
  },
];

const projectsToBuild = [
  {
    title: "Responsive Corporate Web Portals",
    category: "Frontend & UI/UX",
    tech: ["HTML5", "Tailwind CSS", "JavaScript ES6+"],
    description: "Modern, high-converting responsive business interfaces with dark mode, animations, and high Google PageSpeed scores.",
  },
  {
    title: "Interactive React SPA Applications",
    category: "React Ecosystem",
    tech: ["React", "React Router", "Tailwind CSS", "Axios"],
    description: "Dynamic frontend web apps featuring multi-step state management, reactive filters, and seamless page transitions.",
  },
  {
    title: "Enterprise REST API & Auth Engine",
    category: "Backend Engineering",
    tech: ["Node.js", "Express.js", "JWT", "bcrypt"],
    description: "Secure backend server with user authentication, refresh tokens, role-based authorization, rate limiting, and input sanitization.",
  },
  {
    title: "Database-Driven Analytics & CRM System",
    category: "Database & Backend",
    tech: ["MongoDB", "Mongoose", "Express", "Node.js"],
    description: "Full database schema architecture with complex relations, filtering, pagination, and aggregation pipelines.",
  },
  {
    title: "Full-Stack SaaS / E-Commerce Platform",
    category: "Full Stack Capstone",
    tech: ["React", "Node.js", "Express", "MongoDB", "Razorpay API"],
    description: "End-to-end multi-tenant application with product catalog, cart state, order management, secure payment gateway, and admin panel.",
  },
];

const programRoadmap = [
  {
    month: "Month 1",
    phase: "Training Phase",
    title: "Web Development Foundations & Git/GitHub",
    summary:
      "HTML5, CSS3, modern responsive design, Flexbox, Grid, foundational JavaScript ES6+, and version control with Git & GitHub.",
    highlights: [
      "Semantic layout design",
      "Responsive mobile-first pages",
      "Async JavaScript & DOM",
      "Git & GitHub Workflows",
    ],
  },
  {
    month: "Month 2",
    phase: "Training Phase",
    title: "Frontend Development with React",
    summary:
      "Modern React architecture, component state, reusable hooks, client-side routing, and hosting React applications with GitHub.",
    highlights: [
      "React Hooks & Context API",
      "Tailwind CSS styling",
      "Live API integration",
      "GitHub Project Repositories",
    ],
  },
  {
    month: "Month 3",
    phase: "Training Phase",
    title: "Backend Development with Node & Express",
    summary:
      "Server-side architecture, RESTful API endpoints, middleware pipelines, JWT authentication, and Git branch collaboration.",
    highlights: [
      "Express.js routing",
      "JWT & password encryption",
      "API security best practices",
      "Git Feature Branching",
    ],
  },
  {
    month: "Month 4",
    phase: "Training Phase",
    title: "Database & Full Stack Integration",
    summary:
      "MongoDB database design, Mongoose models, full-stack wiring, testing, and continuous cloud deployment via GitHub CI/CD.",
    highlights: [
      "MongoDB CRUD & aggregation",
      "Connecting React with Express",
      "GitHub CI/CD & Cloud Deploy",
    ],
  },
  {
    month: "Months 5–6",
    phase: "Internship Phase",
    title: "Supervised Project Internship",
    summary:
      "Live team collaboration, GitHub pull requests, agile sprint assignments, peer code reviews, and final project demonstration.",
    highlights: [
      "GitHub PRs & Peer Code Reviews",
      "Real company tasks",
      "Agile sprint cycles",
      "Dual industry certification",
    ],
  },
];

const faqsList = [
  {
    question: "Who can join this program?",
    answer: "This program is open to college students, fresh graduates, aspiring developers, and working professionals looking to transition into full-stack software development. No strict degree cutoff is required.",
  },
  {
    question: "Do I need prior programming experience?",
    answer: "No prior programming background is required. We start from the absolute ground up—covering HTML, CSS, and basic programming concepts before moving on to advanced React, Node.js, and database engineering.",
  },
  {
    question: "Is this program suitable for college students?",
    answer: "Yes, absolutely! The program is structured with flexible evening/weekend live sessions and recorded backups, making it fully manageable alongside college lectures and university exams.",
  },
  {
    question: "How long is the program?",
    answer: "The program spans a total duration of 6 months: 4 months of structured hands-on technical training followed by 2 months of supervised industry internship on real project tasks.",
  },
  {
    question: "Are classes conducted online?",
    answer: "Yes, the program is conducted 100% online through live interactive video sessions, real-time code sharing, dedicated doubt-clearing channels, and Git-based collaborative assignments.",
  },
  {
    question: "Will there be practical assignments?",
    answer: "Yes, every module includes practical coding exercises, weekly assignments, and building real-world projects. You will spend 80% of your time writing actual code rather than watching passive lectures.",
  },
  {
    question: "What happens during the two-month internship?",
    answer: "During months 5 and 6, you will be assigned to a supervised project track. You will collaborate in teams using Git workflows, participate in standup meetings, submit pull requests, receive code reviews from senior developers, and contribute to live features.",
  },
  {
    question: "Is the internship paid or unpaid?",
    answer: "We believe in 100% transparency: the 2-month internship is an unpaid, supervised educational industry internship. Its sole purpose is to provide you with verified hands-on industry experience, team collaboration credentials, and a strong project portfolio to accelerate your career.",
  },
  {
    question: "Will I receive certificates?",
    answer: "Yes! Upon successful completion of all coursework and the internship phase, you will receive two official credentials from ProVerto Global Technologies: 1) Full Stack Developer Program Certificate, and 2) Supervised Internship Experience Certificate with verified credentials.",
  },
  {
    question: "Is placement guaranteed?",
    answer: "We take pride in honesty and do not make misleading '100% placement guarantee' claims. What we do guarantee is industry-standard skills, a verified GitHub portfolio of live projects, resume & LinkedIn makeover, and direct referral opportunities with partner hiring managers where available.",
  },
  {
    question: "Can I pay the fees in installments?",
    answer: "Yes! We offer a flexible installment plan: you can pay ₹10,000 as the first installment upon registration, and the second installment of ₹10,000 before commencing the second half of the program.",
  },
  {
    question: "Can I get a refund if I decide not to continue after registering?",
    answer: "Yes. If you are not going to continue after registration, please email us at support@provertoglobal.com with a transparent reason within 3 days after registration. We will verify your request and process your refund back within 48–72 hours.",
  },
  {
    question: "What happens if I miss a live session?",
    answer: "Every live session is recorded and made available in the student portal within 24 hours. You also receive complete session notes, code snippets, and access to dedicated mentor doubt-clearing slots.",
  },
];

const InternshipProgram = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedPlan, setSelectedPlan] = useState<"installment" | "full">("installment");

  // Registration Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Referral Code State
  const [referralInput, setReferralInput] = useState("");
  const [appliedReferral, setAppliedReferral] = useState<{
    code: string;
    discountType: "percentage" | "fixed";
    discountValue: number;
    discountAmount: number;
    description?: string;
  } | null>(null);
  const [isCheckingReferral, setIsCheckingReferral] = useState(false);
  const [referralError, setReferralError] = useState("");

  const basePlanAmount = selectedPlan === "installment" ? 10000 : 19499;
  const discountAmount = appliedReferral
    ? Math.min(appliedReferral.discountAmount || 0, basePlanAmount - 1)
    : 0;
  const payableAmount = Math.max(1, basePlanAmount - discountAmount);

  // Re-calculate discount when user toggles plan between installment & full
  useEffect(() => {
    if (appliedReferral) {
      if (appliedReferral.discountType === "percentage") {
        const newDisc = Math.round((basePlanAmount * appliedReferral.discountValue) / 100);
        setAppliedReferral((prev: any) => ({
          ...prev,
          discountAmount: newDisc,
        }));
      }
    }
  }, [selectedPlan]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplyReferral = async () => {
    if (!referralInput.trim()) {
      toast.error("Please enter a referral code");
      return;
    }

    setIsCheckingReferral(true);
    setReferralError("");

    try {
      const res = await validateCoupon({
        code: referralInput.trim(),
        amount: basePlanAmount,
      });

      if (res.success && res.data) {
        setAppliedReferral(res.data);
        toast.success(
          `Referral code "${res.data.code}" applied! You save ₹${res.data.discountAmount.toLocaleString("en-IN")}`
        );
      } else {
        setAppliedReferral(null);
        const errMsg = res.message || "Invalid or expired referral code";
        setReferralError(errMsg);
        toast.error(errMsg);
      }
    } catch (err: any) {
      setReferralError("Could not validate referral code. Please try again.");
    } finally {
      setIsCheckingReferral(false);
    }
  };

  const handleRemoveReferral = () => {
    setAppliedReferral(null);
    setReferralInput("");
    setReferralError("");
    toast.info("Referral code removed");
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hi ProVerto Team, I am interested in enrolling in the 6-Month Full Stack Developer & Internship Program. Could you please share more details about upcoming batches and enrollment?`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  const handleEnrollmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast.error("Please fill in your name, email, and contact number.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (formData.phone.trim().length < 10) {
      toast.error("Please enter a valid 10-digit contact number.");
      return;
    }

    const planName =
      selectedPlan === "installment"
        ? "Full Stack Program - 1st Installment (₹10,000)"
        : "Full Stack Program - Full Payment (₹19,499)";

    setIsSubmitting(true);

    try {
      // Step A: Load Razorpay Checkout Script
      const isLoaded = await loadRazorpayScript();
      if (!isLoaded) {
        toast.error("Unable to load Razorpay payment gateway. Please check your internet connection.");
        setIsSubmitting(false);
        return;
      }

      toast.loading("Opening secure checkout...", { id: "enroll-pay" });

      // Step B: Create Razorpay Order on Backend
      const orderRes = await createRazorpayOrder({
        amount: payableAmount,
        currency: "INR",
        customer: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        packageTitle: planName,
        couponCode: appliedReferral?.code || "",
        discountAmount,
        notes: `Enrollment in Full Stack Program - ${planName}${
          appliedReferral ? ` | Referral: ${appliedReferral.code} (-₹${discountAmount})` : ""
        }`,
      });

      toast.dismiss("enroll-pay");

      // Resilient extraction of keyId & orderId
      let keyId = orderRes?.keyId || "";
      let orderId = orderRes?.order?.id || orderRes?.id || orderRes?.orderId || "";
      let amountInSubunits = orderRes?.order?.amount || Math.round(payableAmount * 100);

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
            "Razorpay Key ID is not configured. Please check payment settings or message WhatsApp."
        );
        return;
      }

      // Step C: Launch Razorpay Modal
      const options: any = {
        key: keyId,
        amount: amountInSubunits,
        currency: "INR",
        name: "ProVerto Global",
        description: `Enrollment: ${planName}`,
        image: "/Proverto Logo.jpg",
        prefill: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          contact: formData.phone.trim(),
        },
        notes: {
          packageTitle: planName,
          customer: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          referralCode: appliedReferral?.code || "",
        },
        theme: {
          color: "#0284c7",
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
            toast.loading("Verifying payment & confirming registration...", {
              id: "verify-enroll",
            });

            // Step D: Verify Signature on Backend
            await verifyRazorpayPayment({
              razorpay_order_id: response.razorpay_order_id || orderId || "",
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature || "",
              customer: formData.name.trim(),
              email: formData.email.trim(),
              phone: formData.phone.trim(),
              packageTitle: planName,
              amount: payableAmount,
              currency: "INR",
              couponCode: appliedReferral?.code || "",
              discountAmount,
              notes: `Internship Enrollment: ${planName}${
                appliedReferral ? ` | Referral: ${appliedReferral.code}` : ""
              }`,
            });

            // Step E: Record contact inquiry in MongoDB leads
            await submitContactInquiry({
              name: formData.name.trim(),
              email: formData.email.trim(),
              phone: formData.phone.trim(),
              service: planName,
              notes: `Verified Razorpay Payment: ${response.razorpay_payment_id} | Amount: ₹${payableAmount.toLocaleString("en-IN")} | Plan: ${planName}${
                appliedReferral ? ` | Referral: ${appliedReferral.code} (Saved ₹${discountAmount})` : ""
              }`,
              inquiryType: "Internship Enrollment",
              paymentMethod: "Razorpay",
            });

            toast.dismiss("verify-enroll");
            setIsSubmitting(false);

            toast.success("Payment verified! Your registration has been confirmed.");
            navigate("/thank-you", {
              state: {
                transactionId: response.razorpay_payment_id,
                orderId: response.razorpay_order_id || orderId,
                amount: payableAmount,
                currency: "INR",
                customer: formData.name.trim(),
                email: formData.email.trim(),
                packageTitle: planName,
              },
            });
          } catch (err: any) {
            console.error("Verification error:", err);
            toast.dismiss("verify-enroll");
            setIsSubmitting(false);
            toast.error(
              "Payment received but verification had an issue. Please contact support on WhatsApp with your payment ID."
            );
          }
        },
      };

      if (orderId && orderId.startsWith("order_") && !orderId.startsWith("order_client_")) {
        options.order_id = orderId;
      }

      const razorpayInstance = new (window as any).Razorpay(options);
      razorpayInstance.on("payment.failed", function (response: any) {
        setIsSubmitting(false);
        toast.error(`Payment failed: ${response.error?.description || "Transaction declined"}`);
      });
      razorpayInstance.open();
    } catch (err: any) {
      console.error("Enrollment error:", err);
      toast.dismiss("enroll-pay");

      // Graceful fallback: Record intent and guide to WhatsApp
      try {
        await submitContactInquiry({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          service: "Full Stack Internship Program",
          notes: `Attempted online registration for ${planName}. Initiating WhatsApp direct assistance.`,
        });
      } catch (submitErr) {
        // ignore
      }

      toast.info("Payment window could not open directly. Connecting you with our admissions counselor on WhatsApp...");
      const text = encodeURIComponent(
        `Hi ProVerto Team, I tried registering for the Full Stack Developer Program (${planName}). Name: ${formData.name}, Email: ${formData.email}, Phone: ${formData.phone}. Please help me complete my enrollment.`
      );
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafd] dark:bg-slate-950 flex flex-col justify-between selection:bg-sky-500 selection:text-white">
      <Header />

      {/* 1. HERO SECTION */}
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

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Top Tag / Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Enrolment page</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.15] mb-5">
              Become a Full Stack Developer with Real Project Experience
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
              Learn MERN Stack development, build practical projects, collaborate with a team and
              complete a supervised industry internship.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10">
              <span className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-sky-500/20 text-sky-300 border border-sky-400/30">
                6 Months
              </span>
              <span className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-sky-500/20 text-sky-300 border border-sky-400/30">
                Online Training
              </span>
              <span className="px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-sky-500/20 text-sky-300 border border-sky-400/30">
                MERN Stack
              </span>
            </div>

            {/* Hero Visual Card */}
            <div className="relative mx-auto max-w-3xl bg-slate-900/90 rounded-2xl border border-slate-700/80 p-6 sm:p-8 shadow-2xl backdrop-blur-md mb-10 text-left">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">proverto-fullstack-program.tsx</span>
                </div>
                <span className="text-[11px] font-mono text-sky-400 bg-sky-950/60 px-2.5 py-0.5 rounded border border-sky-800/60">
                  Live Terminal Active
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="space-y-2.5 font-mono text-xs sm:text-sm text-slate-300">
                  <p className="text-sky-400 font-semibold">$ npx create-proverto-developer</p>
                  <p className="text-slate-400">✓ Step 1: HTML5, Modern CSS & ES6+ Javascript</p>
                  <p className="text-slate-400">✓ Step 2: Git & GitHub Workflows & Version Control</p>
                  <p className="text-slate-400">✓ Step 3: React Component Hierarchy & State</p>
                  <p className="text-slate-400">✓ Step 4: Node.js, Express & REST API Endpoints</p>
                  <p className="text-slate-400">✓ Step 5: MongoDB Schemas & Cloud Deployments</p>
                  <p className="text-emerald-400 font-medium">✓ Step 6: 2-Month Supervised Client Project Sprint</p>
                </div>

                <div className="bg-[#061220] rounded-xl p-5 border border-sky-500/20 flex flex-col justify-center">
                  <span className="text-xs uppercase tracking-wider font-bold text-sky-400 mb-1">
                    Graduation Credentials
                  </span>
                  <p className="text-white text-sm font-semibold mb-2">
                    Dual Industry Verification
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    Issued by ProVerto Global Technologies upon completion of code defense and sprint reviews.
                  </p>
                  <div className="pt-2.5 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-300 font-mono">
                    <Github className="w-3.5 h-3.5 text-sky-400" />
                    <span>Live GitHub Portfolio & Code Repos</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Split Metrics: 4 Months Structured Training + 2 Months Supervised Internship */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto mb-10">
              <div className="p-5 rounded-2xl bg-white/5 border border-slate-700/60 text-center">
                <p className="text-3xl sm:text-4xl font-extrabold text-sky-400 mb-1">4 Months</p>
                <p className="text-slate-300 text-sm font-medium">Structured training</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-slate-700/60 text-center">
                <p className="text-3xl sm:text-4xl font-extrabold text-sky-400 mb-1">2 Months</p>
                <p className="text-slate-300 text-sm font-medium">Supervised internship</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => scrollToSection("curriculum")}
                className="px-7 py-3.5 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm transition-all shadow-md flex items-center gap-2"
              >
                <span>Explore the program</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("enrollment-form")}
                className="px-7 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm transition-all shadow-md hover:shadow-sky-500/25 flex items-center gap-2"
              >
                <span>Enroll Now</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY LEARN WITH PROVERTO */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-sky-600 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-100 dark:border-sky-900 mb-3">
              The ProVerto Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Why Learn with ProVerto?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Most courses stop at theoretical coding tutorials. We bridge the gap to actual employability
              with live instruction, code reviews, and a 2-month supervised company internship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-2xl bg-[#f8fafd] dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-5">
                  <Laptop className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5">
                  Practical Hands-On Learning
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  80% practical coding and 20% theory. Every concept is reinforced through hands-on
                  drills, architectural breakdowns, and real application features.
                </p>
              </div>
              <ul className="mt-6 pt-5 border-t border-slate-200/60 dark:border-slate-700/60 space-y-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-600" /> Real development workflows
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-600" /> Git branch & pull request habits
                </li>
              </ul>
            </div>

            <div className="p-7 rounded-2xl bg-[#f8fafd] dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-5">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5">
                  Live Instruction & Mentorship
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Direct interaction with experienced full-stack software engineers who review your code,
                  debug real bottlenecks, and guide your engineering decisions.
                </p>
              </div>
              <ul className="mt-6 pt-5 border-t border-slate-200/60 dark:border-slate-700/60 space-y-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-600" /> Weekly 1-on-1 doubt clearing
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-600" /> Line-by-line PR code reviews
                </li>
              </ul>
            </div>

            <div className="p-7 rounded-2xl bg-[#f8fafd] dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-5">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5">
                  Team Collaboration & Internship
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  Work in sprint teams just like a real tech company. Graduate with an official
                  Internship Experience Certificate and verified GitHub contributions.
                </p>
              </div>
              <ul className="mt-6 pt-5 border-t border-slate-200/60 dark:border-slate-700/60 space-y-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-600" /> 2 Months supervised internship
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-600" /> Dual verifiable certification
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT YOU WILL LEARN - COMPLETE MERN CURRICULUM */}
      <section id="curriculum" className="py-16 md:py-24 bg-[#f8fafd] dark:bg-slate-950">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-sky-600 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-100 dark:border-sky-900 mb-3">
              Comprehensive Curriculum
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Your Full Stack Learning Journey
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              A carefully sequenced 6-month roadmap designed to transform beginners into production-ready
              full-stack engineers.
            </p>
          </div>

          {/* Curriculum Cards Grid (As pictured in Image 3) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculumModules.map((module) => {
              const Icon = module.icon;
              return (
                <div
                  key={module.number}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-7 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div>
                    {/* Header: Number Badge & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-2xl font-black text-slate-300 dark:text-slate-700 font-mono group-hover:text-sky-500 transition-colors">
                        {module.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#0c1f38] text-sky-400 dark:bg-slate-800 dark:text-sky-300 flex items-center justify-center shadow-xs">
                        <Icon className="w-5 h-5 stroke-[2]" />
                      </div>
                    </div>

                    {/* Module Title */}
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                      {module.duration}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 mb-2">
                      {module.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                      {module.subtitle}
                    </p>

                    {/* Skills Checklist */}
                    <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                      {module.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WHAT YOU WILL BUILD - PROJECT & PORTFOLIO OUTCOMES */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900 border-y border-slate-200/80 dark:border-slate-800">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-900 mb-3">
              Portfolio Driven
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Don't just learn to code. Learn to build.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Employers hire developers who have built real things. Throughout the program, you will
              construct a production-grade portfolio of applications that speak for themselves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsToBuild.map((project, idx) => (
              <div
                key={idx}
                className="bg-[#f8fafd] dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 p-6 flex flex-col justify-between hover:border-sky-400 dark:hover:border-sky-600 transition-all shadow-sm"
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950 px-2.5 py-1 rounded-full border border-sky-100 dark:border-sky-900">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-3 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/70 dark:border-slate-700/70">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-200/70 dark:bg-slate-700 text-slate-700 dark:text-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-sky-50 dark:bg-sky-950/40 rounded-2xl p-6 sm:p-8 border border-sky-200 dark:border-sky-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                All Projects Deployed on Live Cloud Hosting
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                You won't just run code on localhost. You'll set up automated CI/CD pipelines, connect custom domains, and share working live links with recruiters.
              </p>
            </div>
            <button
              type="button"
              onClick={() => scrollToSection("enrollment-form")}
              className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs sm:text-sm shadow-md whitespace-nowrap"
            >
              Start Building Now
            </button>
          </div>
        </div>
      </section>

      {/* 5. HOW YOU WILL LEARN - TEACHING & EVALUATION */}
      <section className="py-16 md:py-24 bg-[#f8fafd] dark:bg-slate-950">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-sky-600 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-100 dark:border-sky-900 mb-3">
              Learning Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              How the Program Works
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              We employ an agile pedagogical framework focused on progressive milestone completion,
              active code reviews, and continuous mentor evaluations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 font-black text-lg flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Live Classes</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Interactive live online sessions covering architectural patterns, live coding, and best practices.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 font-black text-lg flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Weekly Assignments</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Practical programming challenges submitted via GitHub to test retention and problem-solving skills.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 font-black text-lg flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Mentor Code Reviews</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Receive granular pull-request reviews on code cleanliness, security, naming conventions, and performance.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 font-black text-lg flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">Supervised Sprints</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                2 months of company-level sprint execution culminating in code defense and certificate verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SIX-MONTH ROADMAP */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-sky-600 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-100 dark:border-sky-900 mb-3">
              Step-by-Step Timeline
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Six-Month Roadmap
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Four months of intensive structured training plus two months of supervised project internship.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {programRoadmap.map((item, index) => (
              <div
                key={index}
                className="bg-[#f8fafd] dark:bg-slate-800/60 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all hover:border-sky-400"
              >
                <div className="md:w-1/3">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                      {item.phase}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                    {item.month}
                  </h3>
                </div>

                <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-700 pt-4 md:pt-0 md:pl-6">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">
                    {item.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((h, hIdx) => (
                      <span
                        key={hIdx}
                        className="text-[11px] font-medium bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700 flex items-center gap-1"
                      >
                        <Check className="w-3 h-3 text-sky-500" />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INTERNSHIP & CERTIFICATES */}
      <section className="py-16 md:py-24 bg-[#081a2e] text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-500/20 text-sky-400 border border-sky-400/30 mb-3">
                Official Validation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Internship & Dual Certification
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Clear terms, transparent criteria, and official credentials to validate your technical capability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-slate-900/90 rounded-2xl border border-slate-700/80 p-7">
                <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  1. Program Completion Certificate
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Awarded after completing all 4 months of structured training, achieving 80%+ assignment completion, and passing modular assessments in MERN stack technologies.
                </p>
                <div className="text-xs text-slate-400 space-y-1">
                  <p>• Verifiable credential ID</p>
                  <p>• Highlights React, Node, Express, MongoDB proficiency</p>
                </div>
              </div>

              <div className="bg-slate-900/90 rounded-2xl border border-slate-700/80 p-7">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  2. Internship Experience Certificate
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  Official 2-month Supervised Internship Experience Letter issued on corporate letterhead from ProVerto Global Technologies, acknowledging team sprint deliverables and live code contributions.
                </p>
                <div className="text-xs text-slate-400 space-y-1">
                  <p>• Corporate experience verification</p>
                  <p>• Suitable for university credit and LinkedIn work experience</p>
                </div>
              </div>
            </div>

            {/* Clear Transparency Callout */}
            <div className="bg-slate-950/80 rounded-2xl p-6 sm:p-7 border border-slate-800 text-center">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
                <strong className="text-white">Clear Eligibility & Terms:</strong> The 2-month internship is an unpaid, supervised industry learning track. Admission to the internship phase requires timely completion of training assignments. We do not make false placement promises; we provide real hands-on experience and professional portfolio readiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PROGRAM OUTCOMES & BENEFITS */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-sky-600 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-100 dark:border-sky-900 mb-3">
              Career Readiness
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              What You Walk Away With
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Tangible assets, verified proof of work, and the confidence to crack technical developer rounds.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#f8fafd] dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-left">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-4">
                <GitBranch className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">
                Active GitHub Profile
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                A consistent commit history with multi-contributor pull requests and well-architected repos.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f8fafd] dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-left">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">
                Live Capstone Projects
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Deployed full-stack applications with databases, authentication, and payment integrations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f8fafd] dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-left">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">
                Resume & LinkedIn Audit
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Guidance on engineering an ATS-compliant resume and optimizing your LinkedIn for recruiters.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f8fafd] dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-left">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-4">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1.5">
                Technical Interview Prep
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Practice answering system design questions, async Javascript gotchas, and live debugging tests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9 & 10. FEES, PAYMENT OPTIONS & REGISTRATION FORM (Matching Image 6) */}
      <section id="enrollment-form" className="py-16 md:py-24 bg-[#f8fafd] dark:bg-slate-950">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-10">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-sky-600 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-100 dark:border-sky-900 mb-3">
                Enrollment Form
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
                Start Your Enrollment
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Enter your details to register for the Full Stack Developer Program.
              </p>
            </div>

            {/* Registration Card (Styled identically to Image 6) */}
            <div className="bg-[#0c1322] dark:bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-9 text-white shadow-2xl">
              <form onSubmit={handleEnrollmentSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-200 mb-2">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full h-12 px-4 rounded-xl bg-[#070d18] border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-200 mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
                    className="w-full h-12 px-4 rounded-xl bg-[#070d18] border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>

                {/* Contact Number */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-slate-200 mb-2">
                    Contact number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full h-12 px-4 rounded-xl bg-[#070d18] border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>

                {/* Payment Option Selection Heading */}
                <div className="pt-4 border-t border-slate-800">
                  <h3 className="text-base sm:text-lg font-bold text-white mb-4">
                    Choose your payment option
                  </h3>

                  <div className="space-y-4">
                    {/* Option 1: Installment payment (Flexible) */}
                    <div
                      onClick={() => setSelectedPlan("installment")}
                      className={`cursor-pointer rounded-2xl p-5 border transition-all ${
                        selectedPlan === "installment"
                          ? "border-sky-500 bg-[#071324] ring-1 ring-sky-500"
                          : "border-slate-800 bg-[#070d18] hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-sm sm:text-base text-white">
                          Installment payment
                        </span>
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase tracking-wider">
                          Flexible
                        </span>
                      </div>

                      <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 mb-2">
                        ₹10,000
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed mb-4">
                        First installment. Second installment terms to be confirmed.
                      </p>

                      <div className="flex items-center gap-2.5 text-xs text-slate-200 font-medium">
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            selectedPlan === "installment"
                              ? "border-sky-400 bg-sky-500"
                              : "border-slate-600 bg-transparent"
                          }`}
                        >
                          {selectedPlan === "installment" && (
                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                          )}
                        </div>
                        <span>Pay in installments</span>
                      </div>
                    </div>

                    {/* Option 2: Full payment */}
                    <div
                      onClick={() => setSelectedPlan("full")}
                      className={`cursor-pointer rounded-2xl p-5 border transition-all ${
                        selectedPlan === "full"
                          ? "border-sky-500 bg-[#071324] ring-1 ring-sky-500"
                          : "border-slate-800 bg-[#070d18] hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-sm sm:text-base text-white">
                          Full payment
                        </span>
                        <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-400 border border-sky-500/30 uppercase tracking-wider">
                          Best Value
                        </span>
                      </div>

                      <div className="flex items-baseline gap-2.5 mb-2">
                        <span className="text-2xl sm:text-3xl font-extrabold text-sky-400">
                          ₹19,499
                        </span>
                        <span className="text-base sm:text-lg text-slate-500 line-through font-semibold">
                          ₹29,999
                        </span>
                      </div>

                      <p className="text-xs text-slate-400 leading-relaxed mb-4">
                        One-time payment at registration. Early-bird eligibility can be applied if available.
                      </p>

                      <div className="flex items-center gap-2.5 text-xs text-slate-200 font-medium">
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            selectedPlan === "full"
                              ? "border-sky-400 bg-sky-500"
                              : "border-slate-600 bg-transparent"
                          }`}
                        >
                          {selectedPlan === "full" && (
                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                          )}
                        </div>
                        <span>Pay full amount</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Referral Code Box */}
                <div className="bg-[#070d18] rounded-2xl p-4 sm:p-5 border border-slate-800">
                  <div className="flex items-center justify-between mb-2.5">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5 text-sky-400" />
                      <span>Have a referral code?</span>
                    </label>
                    {appliedReferral && (
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded uppercase">
                        Applied
                      </span>
                    )}
                  </div>

                  {appliedReferral ? (
                    <div className="p-3 rounded-xl bg-[#091728] border border-emerald-500/40 flex items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                          <Check className="w-4 h-4 stroke-[2.5]" />
                        </div>
                        <div>
                          <p className="font-mono font-bold text-emerald-400 text-sm tracking-wider uppercase">
                            {appliedReferral.code}
                          </p>
                          <p className="text-[11px] text-slate-400">
                            Referral discount of ₹{discountAmount.toLocaleString("en-IN")} applied
                          </p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={handleRemoveReferral}
                        className="text-xs text-slate-400 hover:text-rose-400 font-semibold px-2.5 py-1 rounded hover:bg-rose-500/10 transition-colors cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={referralInput}
                        onChange={(e) => {
                          setReferralInput(e.target.value.toUpperCase().replace(/\s+/g, ""));
                          if (referralError) setReferralError("");
                        }}
                        placeholder="ENTER REFERRAL CODE"
                        className="flex-1 h-11 px-3.5 rounded-xl bg-[#0c1322] border border-slate-700/80 text-white placeholder-slate-500 text-xs font-mono tracking-wider uppercase focus:outline-none focus:border-sky-500 transition-colors"
                      />
                      <button
                        type="button"
                        onClick={handleApplyReferral}
                        disabled={isCheckingReferral || !referralInput.trim()}
                        className="px-5 h-11 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:opacity-50 text-white font-bold text-xs transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 shadow-sm"
                      >
                        {isCheckingReferral ? (
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        ) : (
                          "Apply"
                        )}
                      </button>
                    </div>
                  )}

                  {referralError && (
                    <p className="text-[11px] text-rose-400 mt-2 flex items-center gap-1">
                      <span>✕</span> {referralError}
                    </p>
                  )}

                  {appliedReferral && (
                    <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                      <span className="text-slate-400">Total payable after referral:</span>
                      <span className="text-base font-extrabold text-emerald-400">
                        ₹{payableAmount.toLocaleString("en-IN")}
                      </span>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:opacity-60 text-white font-bold text-sm transition-all shadow-lg hover:shadow-sky-500/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Processing registration...</span>
                    </>
                  ) : (
                    <>
                      <span>Register Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-slate-400">
                  🔒 256-Bit SSL Encrypted Razorpay Checkout • 3-Day Refund Policy (support@provertoglobal.com)
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FREQUENTLY ASKED QUESTIONS (Matching Image 7) */}
      <section className="py-16 md:py-24 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-sky-600 dark:bg-sky-950/60 dark:text-sky-300 border border-sky-100 dark:border-sky-900 mb-3">
                Transparent Guidance
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Everything you need to know about the curriculum, time commitment, internship terms, and fees.
              </p>
            </div>

            <div className="space-y-3.5">
              {faqsList.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-[#f8fafd] dark:bg-slate-800/40 transition-all"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                    >
                      <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 12. WHATSAPP CONSULTATION & FINAL CTA (Matching Image 7) */}
      <section className="py-16 md:py-20 bg-[#f8fafd] dark:bg-slate-950">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            {/* Green WhatsApp Consultation Box */}
            <div className="bg-[#f0fbf4] dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 rounded-2xl p-6 sm:p-8 text-center shadow-sm">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-4 shadow-md">
                <MessageCircle className="w-6 h-6" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Have questions before enrolling?
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-md mx-auto mb-6">
                Speak directly with our team about eligibility, curriculum, fees and the learning process.
              </p>

              <button
                type="button"
                onClick={handleWhatsAppInquiry}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InternshipProgram;
