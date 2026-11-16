import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import Process from "./pages/Process";
import WhyUs from "./pages/WhyUs";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
/*
import ResumeMakeoverService from "./pages/ResumeMakeoverService";
import AIResumeEnhancerService from "./pages/AIResumeEnhancerService";
import LinkedInMakeoverService from "./pages/LinkedInMakeoverService";
import PostBuddyService from "./pages/PostBuddyService";
import WebDevelopmentService from "./pages/WebDevelopmentService";
import WhatsAppAutomationService from "./pages/WhatsAppAutomationService";
import AIToolsService from "./pages/AIToolsService";
import LinkedInPage from "./pages/LinkedinPage";
import GithubRevampService from "./pages/GithubRevamp";
import SoftwareTestingService from "./pages/SoftwareTesting";
*/
import FreeConsultation from "./pages/FreeConsultation";
import ScrollToTop from "./components/ui/ScrollToTop";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import RefundAndCancellationPolicy from "./pages/RefundAndCancellationPolicy";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
/*
import BlogPostATSResume from "./pages/BlogPost-ATSResume";
import BlogPostResumeVsLinkedin from "./pages/BlogPost-resume-vs-linkedin";
import BlogPostHiringProcess from "./pages/BlogPost-HiringProcess";
import BlogPostWhyLinkedInProfile from "./pages/BlogPost-Why-LinkedIn-Profile";
import BlogPostConsistentOnLinkedIn from "./pages/BlogPost-Consistent-on-linkedin";
import BlogPostLinkedInPage from "./pages/BlogPost-LinkedIn-Page";
import BlogPostBusinessWebsite from "./pages/BlogPost-Business-Website";
import BlogPostWebsiteVsSocialMedia from "./pages/BlogPost-Website-vs-social-media";
import BlogPostHighConvertingWebsite from "./pages/BlogPost-High-Converting-Website";
import BlogPostSlowWhatsAppResponses from "./pages/BlogPost-Slow-WhatsApp-Responses";
import BlogPostWhatsAppSalesChannel from "./pages/BlogPost-WhatsApp-Sales-Channel";
import BlogPostTimeForGrowingBusinesses from "./pages/BlogPost-Time-for-Growing-Businesses";
import BlogPostManualWorkIsCostingBusiness from "./pages/BlogPost-Manual-Work-Is-Costing";
import BlogPostAutomationForNonTechBusinesses from "./pages/BlogPost-Automation-for-Non-Tech-Businesses";
*/
import ServicePackages from "./pages/ServicePackages";
import DynamicBlogPost from "./pages/DynamicBlogPost";
import DynamicServiceDetail from "./pages/DynamicServiceDetail";
import Sitemap from "./pages/Sitemap";
import InternshipProgram from "./pages/InternshipProgram";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service/packages" element={<ServicePackages />} />
          <Route path="/services/packages" element={<ServicePackages />} />
          <Route path="/internship" element={<InternshipProgram />} />
          <Route path="/internship-program" element={<InternshipProgram />} />
          <Route path="/process" element={<Process />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          {/* Static blog routes commented out - now dynamically handled by DynamicBlogPost */}
          {/*
          <Route path="/blog/why-resumes-fail-ats" element={<BlogPostATSResume />} />
          <Route path="/blog/resume-vs-linkedin-profile" element={<BlogPostResumeVsLinkedin />} />
          <Route path="/blog/how-ai-is-changing-hiring" element={<BlogPostHiringProcess />} />
          <Route path="/blog/why-linkedin-profile-matters" element={<BlogPostWhyLinkedInProfile />} />
          <Route path="/blog/consistent-linkedin-posting" element={<BlogPostConsistentOnLinkedIn />} />
          <Route path="/blog/linkedin-page-optimization" element={<BlogPostLinkedInPage />} />
          <Route path="/blog/business-website" element={<BlogPostBusinessWebsite />} />
          <Route path="/blog/website-vs-social-media" element={<BlogPostWebsiteVsSocialMedia />} />
          <Route path="/blog/high-converting-website" element={<BlogPostHighConvertingWebsite />} />
          <Route path="/blog/slow-whatsapp-responses" element={<BlogPostSlowWhatsAppResponses />} />
          <Route path="/blog/whatsapp-sales-channel" element={<BlogPostWhatsAppSalesChannel />} />
          <Route path="/blog/ai-automation-saves-time" element={<BlogPostTimeForGrowingBusinesses />} />
          <Route path="/blog/manual-work-is-costing" element={<BlogPostManualWorkIsCostingBusiness />} />
          <Route path="/blog/automation-for-non-tech-businesses" element={<BlogPostAutomationForNonTechBusinesses />} />
          */}
          <Route path="/blog/:slug" element={<DynamicBlogPost />} />
          <Route path="/free-consultation" element={<FreeConsultation />} />
          {/* Dynamic Service Routes: Replaces legacy static service wrappers with dynamic data */}
          {/*
          <Route path="/services/expert-resume" element={<ResumeMakeoverService />} />
          <Route path="/services/ui/ux-design" element={<AIResumeEnhancerService />} />
          <Route path="/services/linkedin-profile-optimization" element={<LinkedInMakeoverService />} />
          <Route path="/services/linkedin-page-optimization" element={<LinkedInPage />} />
          <Route path="/services/portfolio-development" element={<PostBuddyService />} />
          <Route path="/services/web-development" element={<WebDevelopmentService />} />
          <Route path="/services/whatsapp-automation" element={<WhatsAppAutomationService />} />
          <Route path="/services/ai-tools" element={<AIToolsService />} />
          <Route path="/services/software-testing" element={<SoftwareTestingService />} />
          <Route path="/services/github-revamp" element={<GithubRevampService />} />
          */}
          <Route path="/services/:category/:slug" element={<DynamicServiceDetail />} />
          <Route path="/services/:slug" element={<DynamicServiceDetail />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/refund-and-cancellation-policy" element={<RefundAndCancellationPolicy />} />
          <Route path="/sitemap" element={<Sitemap />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
