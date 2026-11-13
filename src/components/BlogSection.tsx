import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Linkedin, Globe, Clock } from "lucide-react";
import { getDynamicBlogs, resolveIcon } from "@/lib/api";

interface FeaturedPost {
  title: string;
  category: string;
  readTime: string;
  description: string;
  icon: any;
  link: string;
}

/*
const defaultFeaturedPosts: FeaturedPost[] = [
  {
    title: "Why Most Resumes Fail ATS — And How AI Fixes It",
    category: "Resume & Career",
    readTime: "8 min read",
    description:
      "Learn why most resumes never reach recruiters due to ATS filtering algorithms and how AI-powered keyword alignment ensures your application gets seen.",
    icon: FileText,
    link: "/blog",
  },
  {
    title: "Why Your LinkedIn Profile Is More Important Than Your Resume",
    category: "LinkedIn & Branding",
    readTime: "11 min read",
    description:
      "Recruiters source proactively before postings ever go live. Discover how positioning your profile as an authority attracts high-tier career opportunities.",
    icon: Linkedin,
    link: "/blog",
  },
  {
    title: "Why Every Business Needs a Website (Not Just Social Media)",
    category: "Web Development",
    readTime: "12 min read",
    description:
      "Social algorithms fluctuate and accounts can be restricted. A dedicated, high-converting website gives your brand permanent authority and inbound leads.",
    icon: Globe,
    link: "/blog",
  },
];
*/
const defaultFeaturedPosts: FeaturedPost[] = [];

const BlogSection = () => {
  const [posts, setPosts] = useState<FeaturedPost[]>(defaultFeaturedPosts);

  useEffect(() => {
    getDynamicBlogs<any[]>([]).then((data) => {
      if (Array.isArray(data) && data.length > 0) {
        const mapped: FeaturedPost[] = data.map((b) => ({
          title: b.title,
          category: b.category || "Insights",
          readTime: "6 min read",
          description: b.description || b.summary || "Explore strategic insights and tech developments.",
          icon: FileText,
          link: `/blog/${b.slug || b._id || ""}`,
        }));
        // Show only dynamic blogs once uploaded
        setPosts(mapped.slice(0, 3));
      }
    });
  }, []);

  if (posts.length === 0) {
    return null;
  }

  return (
    <section id="blog" className="bg-[#f8fafd] dark:bg-slate-950 py-12 md:py-16 text-foreground transition-colors border-t border-slate-200/70 dark:border-slate-800">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs sm:text-sm font-bold tracking-[0.14em] text-sky-600 dark:text-sky-400 uppercase mb-2">
              BLOG & INSIGHTS
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.18]">
              Latest thinking from our team.
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl">
              Practical strategies on ATS resume optimization, executive LinkedIn branding, and high-performance digital presence.
            </p>
          </div>
          <Link
            to="/blog"
            className="text-[#0284c7] dark:text-sky-400 hover:text-[#0369a1] dark:hover:text-sky-300 font-semibold text-sm inline-flex items-center gap-1.5 transition-colors shrink-0 group self-start sm:self-auto"
          >
            <span>All articles</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {posts.map((post, idx) => {
            const Icon = resolveIcon(post.icon, FileText);
            return (
              <Link
                key={idx}
                to={post.link}
                className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-6 flex flex-col justify-between hover:border-sky-400/50 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  {/* Top row: Icon + Category + Read Time */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0c1f38] text-sky-400 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border border-sky-100 dark:border-sky-900">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Read time */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-2">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{post.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors leading-snug mb-2 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 mb-4">
                    {post.description}
                  </p>
                </div>

                {/* Bottom link */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0c1f38] dark:text-sky-400 group-hover:text-sky-600 dark:group-hover:text-sky-300 inline-flex items-center gap-1.5 transition-colors">
                    Read full article
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 sm:hidden text-center">
          <Link
            to="/blog"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0f1f38] hover:bg-[#162a4d] text-white font-semibold text-sm transition-colors shadow-sm"
          >
            <span>View all articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
