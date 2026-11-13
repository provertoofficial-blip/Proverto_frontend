import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, Clock, User, FileText, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPostATSResume = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Resume & Career
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Why Most Resumes Fail ATS — And How AI Fixes It
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Proverto Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>January 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              If you've applied for dozens of jobs and heard nothing back, you're not alone.
            </p>
            
            <p className="text-foreground leading-relaxed mb-6">
              Most resumes don't fail because the candidate lacks skills.<br />
              They fail because <strong>Applicant Tracking Systems (ATS)</strong> never let them reach a human recruiter.
            </p>
            
            <p className="text-foreground leading-relaxed mb-8">
              In today's hiring process, your resume is first read by software — not people. And if your resume isn't built for that software, it gets rejected before anyone ever sees your potential.
            </p>
            
            <p className="text-foreground leading-relaxed mb-12">
              Let's break down why most resumes fail ATS and how AI-powered resume optimization is changing the game.
            </p>

            {/* What Is ATS */}
            <div className="bg-accent/30 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6 text-primary" />
                What Is ATS and Why It Matters
              </h2>
              
              <p className="text-foreground leading-relaxed mb-4">
                An <strong>Applicant Tracking System (ATS)</strong> is software companies use to:
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Scan resumes
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Filter candidates
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Rank applications
                </li>
                <li className="flex items-center gap-2 text-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Shortlist profiles for recruiters
                </li>
              </ul>
              
              <p className="text-foreground leading-relaxed mb-4">
                <strong>Over 90% of medium to large companies</strong> use some form of ATS today.
              </p>
              
              <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-4">
                <p className="text-foreground font-medium">
                  If your resume can't pass ATS, your application stops there — no matter how qualified you are.
                </p>
              </div>
            </div>

            {/* Why Most Resumes Fail */}
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Why Most Resumes Fail ATS
            </h2>

            {/* Reason 1 */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-foreground mb-4">
                1. Wrong Formatting
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                Many resumes look visually impressive but are ATS-unfriendly.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>Common formatting mistakes:</strong>
              </p>
              <ul className="grid grid-cols-2 gap-2 mb-4">
                {["Tables and columns", "Graphics and icons", "Text boxes", "Fancy fonts", "Headers and footers"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-destructive rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-foreground leading-relaxed">
                ATS systems often cannot read these elements correctly, which results in missing or scrambled information.
              </p>
              <p className="text-primary font-medium mt-2">
                A resume that looks great to humans can look broken to software.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-foreground mb-4">
                2. Missing or Incorrect Keywords
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                ATS systems are programmed to search for specific keywords related to the job role.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                If your resume:
              </p>
              <ul className="space-y-2 mb-4">
                {["Uses generic wording", "Doesn't match the job description", "Misses industry-specific terms"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-destructive rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-foreground leading-relaxed">
                …it may be automatically rejected. Many candidates apply with one resume for every job, which drastically lowers ATS match scores.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-foreground mb-4">
                3. Weak or Generic Language
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                Phrases like:
              </p>
              <ul className="space-y-2 mb-4">
                {['"Responsible for…"', '"Worked on…"', '"Handled tasks related to…"'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground italic">
                    <span className="w-1.5 h-1.5 bg-destructive rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-foreground leading-relaxed">
                don't communicate value. ATS favors <strong>action-driven, outcome-focused language</strong> that clearly signals relevance to the role.
              </p>
            </div>

            {/* Reason 4 */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-foreground mb-4">
                4. Poor Resume Structure
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                ATS systems expect information in a standard, logical order.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>Common structure issues:</strong>
              </p>
              <ul className="space-y-2 mb-4">
                {["Missing section headings", "Unclear job titles", "Dates not formatted properly", "Skills scattered throughout the resume"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-destructive rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-foreground leading-relaxed">
                When the system can't understand your structure, it can't rank you correctly.
              </p>
            </div>

            {/* Reason 5 */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-foreground mb-4">
                5. Outdated Resume Practices
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                What worked 5–10 years ago doesn't work today.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Many resumes still include:
              </p>
              <ul className="space-y-2 mb-4">
                {["Long paragraphs", "Irrelevant experience", "No measurable results", "One-size-fits-all summaries"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-destructive rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-foreground leading-relaxed">
                ATS systems and recruiters now look for <strong>clarity, relevance, and impact</strong>.
              </p>
            </div>

            {/* Cost of ATS Failure */}
            <div className="bg-destructive/5 border-l-4 border-destructive rounded-r-xl p-6 mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                The Cost of ATS Failure (That Most People Don't Realize)
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                Every rejected resume means:
              </p>
              <ul className="space-y-2 mb-6">
                {["Missed interviews", "Lost opportunities", "Wasted time applying", "Lower confidence over time"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-foreground">
                    <span className="w-1.5 h-1.5 bg-destructive rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-foreground leading-relaxed">
                Many professionals assume: <em>"The job market is bad"</em><br />
                when the real issue is: <strong>"My resume isn't optimized for modern hiring systems."</strong>
              </p>
            </div>

            {/* How AI Fixes */}
            <div className="bg-primary/5 rounded-2xl p-8 mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-primary" />
                How AI Fixes ATS Resume Problems
              </h2>
              
              <p className="text-foreground leading-relaxed mb-8">
                This is where <strong>AI-powered resume optimization</strong> makes a real difference. AI doesn't guess — it analyzes patterns, data, and job-specific requirements at scale.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background rounded-xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">1. AI Identifies the Right Keywords</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    AI tools analyze job descriptions, industry trends, and role-specific requirements. They match your resume against those requirements and highlight missing or weak keywords.
                  </p>
                </div>
                
                <div className="bg-background rounded-xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">2. AI Improves Resume Structure</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    AI systems understand ATS-friendly layouts, correct section ordering, and clean formatting rules. They help restructure resumes so information is readable and correctly parsed.
                  </p>
                </div>
                
                <div className="bg-background rounded-xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">3. AI Strengthens Language</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Instead of vague statements, AI helps convert responsibilities into achievements, improve action verbs, and clarify impact and relevance.
                  </p>
                </div>
                
                <div className="bg-background rounded-xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-3">4. AI Scores Your Resume</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Modern AI tools can score your resume against ATS criteria, simulate how an ATS reads your resume, and identify problem areas instantly.
                  </p>
                </div>
              </div>
            </div>

            {/* AI + Experts */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                AI Alone Is Powerful — But AI + Experts Is Better
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                While AI can optimize structure and keywords, human expertise adds strategy.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                That's why the best results come from:
              </p>
              <ul className="space-y-2 mb-4">
                {["AI analysis", "Human review", "Role-specific positioning"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-foreground leading-relaxed">
                At <strong>Proverto</strong>, we combine AI intelligence with expert resume strategy to ensure resumes don't just pass ATS — they <strong>stand out to recruiters</strong>.
              </p>
            </div>

            {/* When to Use */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                When Should You Use AI Resume Services?
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                You should strongly consider AI-powered resume optimization if:
              </p>
              <ul className="space-y-2">
                {[
                  "You're not getting interview calls",
                  "You're applying to competitive roles",
                  "You're switching industries or roles",
                  "You haven't updated your resume in years",
                  "You're applying online through job portals"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Which Service */}
            <div className="bg-accent/30 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Which Resume Is Right for You?
              </h2>
              <p className="text-foreground leading-relaxed mb-6">
                At Proverto, we offer ATS-focused solutions:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Link to="/services/ui/ux-design" className="block bg-background rounded-xl p-6 hover:shadow-lg transition-shadow group">
                  <h3 className="text-lg font-bold text-primary mb-2 group-hover:underline">🔹 AI Resume Enhancer</h3>
                  <p className="text-muted-foreground text-sm">
                    Best if you already have a resume and want quick, affordable improvements.
                  </p>
                </Link>
                
                <Link to="/services/expert-resume" className="block bg-background rounded-xl p-6 hover:shadow-lg transition-shadow group">
                  <h3 className="text-lg font-bold text-primary mb-2 group-hover:underline">🔹 Expert Written Resume</h3>
                  <p className="text-muted-foreground text-sm">
                    Best if you want a complete rewrite, strategic positioning, and maximum interview impact.
                  </p>
                </Link>
              </div>
              
              <p className="text-foreground leading-relaxed mt-6 text-center font-medium">
                Both are built to beat ATS and impress recruiters.
              </p>
            </div>

            {/* Final Thoughts */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Final Thoughts
              </h2>
              <p className="text-foreground leading-relaxed mb-4">
                The hiring process has changed — but most resumes haven't.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                If your resume isn't built for ATS, it's invisible.<br />
                If it's invisible, it can't open doors.
              </p>
              <p className="text-foreground leading-relaxed">
                <strong>AI has made it possible to level the playing field</strong>, but only when used correctly.
              </p>
            </div>

            {/* CTA Section */}
            <div className="text-center py-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Ready to Fix Your Resume?
              </h2>
              <p className="text-muted-foreground mb-8">
                Get your resume optimized for ATS and start landing interviews.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/free-consultation">
                  <Button size="lg" className="px-8">
                    Make My Resume
                  </Button>
                </Link>
                <a
                  href="https://wa.me/918770836725?text=Hi%20Proverto!%20I%20just%20read%20your%20blog%20about%20ATS%20resumes.%20I'd%20like%20to%20get%20my%20resume%20optimized."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg" className="px-8">
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </div>

          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPostATSResume;