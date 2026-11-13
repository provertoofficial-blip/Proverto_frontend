import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, Clock, User, HelpCircle, ArrowRight, Loader2, FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getDynamicBlogBySlug } from "@/lib/api";

const DynamicBlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) {
      setError(true);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(false);
    getDynamicBlogBySlug(slug)
      .then((data) => {
        if (data && (data.title || data._id)) {
          setBlog(data);
        } else {
          setError(true);
        }
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex flex-col justify-between">
        <Header />
        <main className="container mx-auto px-4 max-w-4xl py-32 flex flex-col items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary mb-4" />
          <p className="text-muted-foreground text-sm font-medium">Loading blog...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-background flex flex-col justify-between">
        <Header />
        <main className="container mx-auto px-4 max-w-3xl py-32 text-center">
          <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 mx-auto flex items-center justify-center mb-6">
            <FileQuestion className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-4">Blog Not Found</h1>
          <p className="text-muted-foreground mb-8 text-base">
            The blog post you are looking for does not exist, has been removed, or is no longer available.
          </p>
          <Link to="/blog">
            <Button className="px-6 py-2.5 inline-flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to All Blogs
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const formattedDate = blog.createdAt
    ? new Date(blog.createdAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "Recent";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-14 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-5">
            <span className="px-3.5 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase tracking-wider">
              {blog.category || "Insight"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-primary" />
              <span>{typeof blog.author === "object" ? blog.author?.name : blog.author || "Proverto Editorial"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>5 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-14 sm:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Cover Image */}
          {(blog.imageUrl || blog.featuredImage) && (
            <div className="mb-10 rounded-2xl overflow-hidden border border-border shadow-sm max-h-[460px] bg-muted">
              <img
                src={blog.imageUrl || blog.featuredImage}
                alt={blog.title}
                className="w-full h-full object-cover max-h-[460px]"
              />
            </div>
          )}

          {/* Summary / Lead paragraph */}
          {(blog.summary || blog.description) && (
            <div className="bg-accent/30 rounded-2xl p-6 sm:p-8 mb-10 border border-border/60">
              <p className="text-lg sm:text-xl text-foreground/90 font-medium leading-relaxed">
                {blog.summary || blog.description}
              </p>
            </div>
          )}

          {/* Main Body Content */}
          {blog.content ? (
            <div
              className="prose prose-lg dark:prose-invert max-w-none text-foreground leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          ) : (
            <p className="text-foreground leading-relaxed text-base">
              {blog.description || "Content in preparation."}
            </p>
          )}

          {/* Tags & Keywords */}
          {((Array.isArray(blog.tags) && blog.tags.length > 0) ||
            (Array.isArray(blog.keywords) && blog.keywords.length > 0)) && (
            <div className="pt-8 border-t border-border mt-12">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                Tags & Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {[...(blog.tags || []), ...(blog.keywords || [])].map((item: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-secondary text-secondary-foreground text-xs font-medium"
                  >
                    #{item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* FAQs section */}
          {Array.isArray(blog.mainEntity) && blog.mainEntity.length > 0 && (
            <div className="mt-14 pt-8 border-t border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-primary" /> Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {blog.mainEntity.map((faq: any, idx: number) => (
                  <div key={idx} className="bg-secondary/40 border border-border rounded-xl p-5">
                    <h3 className="font-bold text-foreground text-base mb-2">{faq.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {faq.acceptedAnswer?.text || faq.acceptedAnswer || ""}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Consultation CTA */}
          <div className="mt-16 bg-gradient-to-br from-[#0c1f38] to-[#081526] text-white rounded-3xl p-8 sm:p-12 text-center shadow-xl border border-sky-900/40">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
              Ready to turn strategy into measurable growth?
            </h3>
            <p className="text-slate-300 max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
              Book a free consultation with our team to discuss your project, automation bottlenecks, or career branding.
            </p>
            <Link to="/free-consultation">
              <Button size="lg" className="bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-xl px-8 shadow-md">
                Schedule a Consultation <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default DynamicBlogPost;
