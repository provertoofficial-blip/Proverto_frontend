import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, FileText, Linkedin, Globe, MessageSquare, Bot, Clock } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { getDynamicBlogs, resolveIcon } from "@/lib/api";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  cta: string;
  ctaLink: string;
  category: string;
  icon: any;
  readTime: string;
}

/*
const defaultBlogPosts: BlogPost[] = [
  // Resume & Career
  {
    id: "1",
    title: "Why Most Resumes Fail ATS — And How AI Fixes It",
    description:
      "Learn why most resumes never reach recruiters due to ATS filters and how AI-powered optimization helps your resume get noticed and shortlisted.",
    cta: "Read Full Article",
    ctaLink: "/blog/why-resumes-fail-ats",
    category: "Resume & Career",
    icon: FileText,
    readTime: "8 min read",
  },
  {
    id: "2",
    title: "Resume vs LinkedIn: Why You Need Both to Get Hired",
    description:
      "Discover how resumes and LinkedIn profiles work together in modern hiring and why relying on just one can limit your opportunities.",
    cta: "Read Full Article",
    ctaLink: "/blog/resume-vs-linkedin-profile",
    category: "Resume & Career",
    icon: FileText,
    readTime: "10 min read",
  },
  {
    id: "3",
    title: "How AI Is Changing the Hiring Process in 2026",
    description:
      "Explore how AI-driven hiring systems are reshaping recruitment and what professionals must do to stay relevant and competitive.",
    cta: "Read Full Article",
    ctaLink: "/blog/how-ai-is-changing-hiring",
    category: "Resume & Career",
    icon: FileText,
    readTime: "12 min read",
  },

  // LinkedIn & Personal Branding
  {
    id: "5",
    title: "Why Your LinkedIn Profile Is More Important Than Your Resume",
    description:
      "Understand why recruiters prioritize LinkedIn profiles and how optimizing yours can unlock more career opportunities in 2026.",
    cta: "Read Full Article",
    ctaLink: "/blog/linkedin-more-important-than-resume",
    category: "LinkedIn & Branding",
    icon: Linkedin,
    readTime: "11 min read",
  },
  {
    id: "6",
    title: "How to Optimize Your LinkedIn Headline to Attract Recruiters",
    description:
      "A step-by-step breakdown of high-performing LinkedIn headlines that drive profile views and recruiter messages.",
    cta: "Read Full Article",
    ctaLink: "/blog/how-to-optimize-linkedin-headline",
    category: "LinkedIn & Branding",
    icon: Linkedin,
    readTime: "9 min read",
  },

  // Web Development
  {
    id: "9",
    title: "Why Every Business Needs a Website (Not Just Social Media)",
    description:
      "Understand why relying only on social media is risky and how a dedicated website builds long-term authority and trust.",
    cta: "Read Full Article",
    ctaLink: "/blog/why-every-business-needs-a-website",
    category: "Web Development",
    icon: Globe,
    readTime: "12 min read",
  },
  {
    id: "10",
    title: "Landing Page vs Website: Which One Does Your Business Need?",
    description:
      "Learn the difference between high-converting landing pages and full websites, and choose the right option for your goals.",
    cta: "Read Full Article",
    ctaLink: "/blog/landing-page-vs-website",
    category: "Web Development",
    icon: Globe,
    readTime: "10 min read",
  },

  // AI & Automation
  {
    id: "15",
    title: "How AI Automation Saves Time for Growing Businesses",
    description:
      "See how AI-driven automation reduces manual work, increases efficiency, and helps businesses scale faster.",
    cta: "Read Full Article",
    ctaLink: "/blog/ai-automation-saves-time",
    category: "AI & Automation",
    icon: Bot,
    readTime: "15 min read",
  },
  {
    id: "16",
    title: "Manual Work Is Costing Your Business More Than You Think",
    description:
      "A deep dive into the hidden costs of manual processes and why automation is no longer optional for growth.",
    cta: "Read Full Article",
    ctaLink: "/blog/manual-work-is-costing",
    category: "AI & Automation",
    icon: Bot,
    readTime: "16 min read",
  },
];

const defaultCategories = [
  "All",
  "Resume & Career",
  "LinkedIn & Branding",
  "Web Development",
  "AI & Automation",
];
*/

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [blogData, setBlogData] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getDynamicBlogs<any[]>([])
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const dynamicPosts: BlogPost[] = data.map((b) => ({
            id: b._id || b.slug || b.id,
            title: b.title,
            description: b.description || b.summary || "Explore strategic insights and tech developments.",
            cta: "Read Full Article",
            ctaLink: `/blog/${b.slug || b._id}`,
            category: b.category || "General",
            icon: FileText,
            readTime: "7 min read",
          }));
          // Show only dynamic blogs once uploaded
          setBlogData(dynamicPosts);
        } else {
          setBlogData([]);
        }
      })
      .catch(() => {
        setBlogData([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const categories = useMemo(() => {
    const cats = new Set<string>();
    blogData.forEach((post) => {
      if (post.category && post.category.trim()) {
        cats.add(post.category.trim());
      }
    });
    return cats.size > 0 ? ["All", ...Array.from(cats)] : ["All"];
  }, [blogData]);

  const filteredPosts =
    selectedCategory === "All"
      ? blogData
      : blogData.filter((post) =>
          post.category.toLowerCase().includes(selectedCategory.toLowerCase())
        );

  return (
    <div className="min-h-screen bg-[#f8fafd] dark:bg-slate-950 flex flex-col justify-between">
      <Header />

      {/* Blueprint Grid Hero Section */}
      <section className="relative pt-24 pb-10 md:pt-28 md:pb-12 bg-[#081a2e] text-white overflow-hidden border-b border-slate-800">
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
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <p className="text-xs sm:text-sm font-semibold text-sky-400 mb-2.5">
              <Link to="/" className="hover:underline text-sky-400">
                Home
              </Link>{" "}
              / <span className="text-slate-300">Blog</span>
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight mb-3">
              Insights & articles for growing smarter.
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              Practical guides, actionable strategies, and engineering insights on AI automation, high-converting websites, and modern personal branding.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Pills & Blog Grid */}
      <section className="py-10 md:py-14">
        <div className="container-custom">
          {/* Filter Pills - only show if there are categories and at least one post */}
          {!isLoading && blogData.length > 0 && categories.length > 1 && (
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-10">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 select-none cursor-pointer ${
                      isActive
                        ? "bg-[#0f1f38] text-white shadow-sm"
                        : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          )}

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-7 sm:p-8 animate-pulse flex flex-col justify-between h-72"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-slate-200 dark:bg-slate-800" />
                      <div className="w-20 h-5 bg-slate-200 dark:bg-slate-800 rounded-full" />
                    </div>
                    <div className="h-6 bg-slate-200 dark:bg-slate-800 rounded w-3/4 mb-3" />
                    <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-full mb-2" />
                    <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-2/3" />
                  </div>
                  <div className="h-9 bg-slate-200 dark:bg-slate-800 rounded-lg w-full mt-6" />
                </div>
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="py-16 sm:py-20 text-center max-w-lg mx-auto bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-8 sm:p-12 shadow-sm my-6">
              <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 mx-auto flex items-center justify-center mb-5">
                <FileText className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Blog Not Found
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                {selectedCategory === "All"
                  ? "No blog posts have been published yet. Please check back later."
                  : `No articles found under "${selectedCategory}".`}
              </p>
              {selectedCategory !== "All" ? (
                <button
                  type="button"
                  onClick={() => setSelectedCategory("All")}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0f1f38] text-white text-xs font-bold hover:bg-[#162a4d] transition-colors"
                >
                  View All Articles
                </button>
              ) : (
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0f1f38] text-white text-xs font-bold hover:bg-[#162a4d] transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Return to Home
                </Link>
              )}
            </div>
          ) : (
            <>
              {/* Posts Count Note */}
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-8">
                Showing {filteredPosts.length}{" "}
                {selectedCategory === "All" ? "articles" : `${selectedCategory} articles`}
              </p>

              {/* 3-Column Blog Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredPosts.map((post) => {
                  const Icon = resolveIcon(post.icon, FileText);
                  return (
                    <article
                      key={post.id}
                      className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                    >
                      <div>
                        {/* Top Row: Icon + Category Badge + Read Time */}
                        <div className="flex items-center justify-between mb-5">
                          <div className="w-11 h-11 rounded-xl bg-[#0c1f38] text-sky-400 dark:bg-slate-800 dark:text-sky-300 flex items-center justify-center shadow-sm">
                            <Icon className="w-5 h-5 stroke-[2]" />
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-semibold text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60 px-3 py-1 rounded-full border border-sky-100 dark:border-sky-900">
                              {post.category}
                            </span>
                            <div className="flex items-center gap-1 text-slate-400 text-xs">
                              <Clock className="w-3.5 h-3.5" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>

                        {/* Title */}
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-snug line-clamp-2">
                          <Link
                            to={post.ctaLink}
                            className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                          >
                            {post.title}
                          </Link>
                        </h2>

                        {/* Description */}
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 line-clamp-3">
                          {post.description}
                        </p>
                      </div>

                      {/* Bottom Action Row */}
                      <div className="pt-5 border-t border-slate-100 dark:border-slate-800">
                        <Link
                          to={post.ctaLink}
                          className="py-2.5 px-4 rounded-lg bg-[#0f1f38] hover:bg-[#162a4d] dark:bg-sky-600 dark:hover:bg-sky-500 text-white text-xs font-bold transition-colors inline-flex items-center justify-between w-full group shadow-sm"
                        >
                          <span>{post.cta}</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Blueprint CTA Section */}
      <CTASection />

      <Footer />
    </div>
  );
};

export default Blog;
