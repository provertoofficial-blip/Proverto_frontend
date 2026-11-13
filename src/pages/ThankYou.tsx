import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link, useLocation } from "react-router-dom";
import { CheckCircle2, MessageSquare, ArrowLeft, ShieldCheck, Receipt, Copy } from "lucide-react";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "918770836725";

const ThankYou = () => {
  const location = useLocation();
  const state = (location.state as any) || {};

  const openWhatsApp = () => {
    let msg = "Hi Proverto, I just completed a registration and would like to connect.";
    if (state.transactionId) {
      msg = `Hi Proverto, I completed my payment for ${state.packageTitle || "package"}. Payment ID: ${state.transactionId}`;
    }
    const message = encodeURIComponent(msg);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const copyPaymentId = () => {
    if (state.transactionId) {
      navigator.clipboard.writeText(state.transactionId);
      toast.success("Payment ID copied to clipboard");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <Header />

      {/* Simple Centered Hero Section */}
      <section className="flex-1 flex items-center justify-center py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Animated/Glowing Check Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 mb-6 shadow-md">
            <CheckCircle2 className="w-10 h-10 stroke-[2.2]" />
          </div>

          <p className="text-xs sm:text-sm font-bold tracking-[0.16em] text-emerald-600 dark:text-emerald-400 uppercase mb-3">
            {state.transactionId ? "PAYMENT VERIFIED & CONFIRMED" : "SUCCESSFULLY RECEIVED"}
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            {state.transactionId ? "Thank You for Your Order!" : "Thank You for Reaching Out!"}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mx-auto mb-6">
            {state.transactionId
              ? "Your Razorpay transaction was verified successfully. Our engineering team has received your order details and will begin kickoff within 24 hours."
              : state.isInvoice
              ? "Your request for an official company tax invoice has been registered. Our accounts team will email you the invoice and bank transfer details shortly."
              : "We appreciate your interest in Proverto. Our team is reviewing your requirements and will get back to you within 24 hours."}
          </p>

          {/* Payment Receipt Summary Card */}
          {state.transactionId && (
            <div className="bg-slate-50 dark:bg-slate-900/80 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 text-left max-w-md mx-auto mb-8 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-slate-800">
                <span className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1.5">
                  <Receipt className="w-4 h-4 text-sky-500" />
                  Transaction Summary
                </span>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Paid & Verified
                </span>
              </div>

              <div className="pt-3 space-y-2 text-xs sm:text-sm">
                {state.packageTitle && (
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Package:</span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      {state.packageTitle}
                    </span>
                  </div>
                )}
                {state.amount && (
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Amount Paid:</span>
                    <span className="font-extrabold text-slate-900 dark:text-white">
                      ₹{Number(state.amount).toLocaleString("en-IN")}
                    </span>
                  </div>
                )}
                <div className="flex justify-between items-center pt-1 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500">Payment ID:</span>
                  <button
                    type="button"
                    onClick={copyPaymentId}
                    className="font-mono text-xs font-semibold text-sky-600 dark:text-sky-400 flex items-center gap-1 hover:underline cursor-pointer"
                    title="Click to copy"
                  >
                    <span>{state.transactionId}</span>
                    <Copy className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#0f1f38] hover:bg-[#162a4d] dark:bg-sky-600 dark:hover:bg-sky-500 text-white font-semibold text-sm shadow-sm transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Homepage</span>
            </Link>

            <button
              type="button"
              onClick={openWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#25d366] hover:bg-[#20ba59] text-slate-950 font-bold text-sm shadow-sm transition-all duration-200 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat with Team on WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThankYou;
