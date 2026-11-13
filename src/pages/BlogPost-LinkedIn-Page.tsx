import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, Clock, User, Briefcase, Search, Eye, BarChart3, TrendingUp, CheckCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BlogPostLinkedInPage = () => {
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
              LinkedIn & Branding
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Why Your LinkedIn Company Page Matters: A Complete Optimization Guide for 2026
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
              <span>12 min read</span>
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
              Your LinkedIn company page isn't just a profile—it's your business's digital storefront on the world's largest professional network. Yet most businesses neglect LinkedIn page optimization, treating it as an afterthought while investing heavily in other marketing channels. In 2026, this is a critical missed opportunity.
            </p>
            
            <p className="text-foreground leading-relaxed mb-6">
              A well-optimized LinkedIn company page attracts talent, generates B2B leads, builds brand authority, and improves your visibility to professionals across the US, UK, Canada, Australia, and India. For businesses competing for attention and talent in crowded markets, LinkedIn page optimization has become essential.
            </p>

            <p className="text-foreground leading-relaxed mb-12">
              <strong>This guide reveals exactly how to optimize your LinkedIn company page to attract recruits, generate leads, and establish credibility in your industry.</strong>
            </p>

            {/* Why LinkedIn Pages Matter */}
            <div className="bg-accent/30 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Eye className="w-6 h-6 text-primary" />
                Why LinkedIn Company Pages Drive Real Business Results
              </h2>
              
              <p className="text-foreground leading-relaxed mb-6">
                LinkedIn company pages generate business impact across multiple dimensions:
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Talent attraction</strong> — Job candidates research companies on LinkedIn; a strong page attracts quality applicants</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>B2B lead generation</strong> — Professionals and buyers discover your company through LinkedIn searches and follow your content</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Brand credibility</strong> — An optimized page builds trust and positions your company as an industry leader</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Organic visibility</strong> — LinkedIn page optimization improves visibility in searches from professionals in your target markets</span>
                </li>
                <li className="flex items-start gap-3 text-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span><strong>Content distribution platform</strong> — Your optimized page becomes a hub for company content, updates, and industry insights</span>
                </li>
              </ul>
              
              <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-4">
                <p className="text-foreground font-medium">
                  Most companies don't realize that LinkedIn company page optimization is one of the highest-ROI investments for both recruiting and business development.
                </p>
              </div>
            </div>

            {/* The Numbers */}
            <h2 className="text-3xl font-bold text-foreground mb-8">
              LinkedIn Company Page Impact by the Numbers
            </h2>

            <div className="bg-primary/5 rounded-2xl p-8 mb-12">
              <ul className="space-y-4">
                <li className="text-foreground leading-relaxed">
                  <strong>92% of recruiters use LinkedIn</strong> to find and evaluate candidates, starting with company page research
                </li>
                <li className="text-foreground leading-relaxed">
                  <strong>Companies with optimized LinkedIn pages see 2.5x more job applications</strong> for open positions
                </li>
                <li className="text-foreground leading-relaxed">
                  <strong>78% of B2B buyers research companies on LinkedIn</strong> before making purchase decisions
                </li>
                <li className="text-foreground leading-relaxed">
                  <strong>Optimized company pages generate 40% more inbound inquiries</strong> on average within 6 months
                </li>
                <li className="text-foreground leading-relaxed">
                  <strong>Companies posting 2-3x per week on their page see 4x higher engagement</strong> and follower growth
                </li>
                <li className="text-foreground leading-relaxed">
                  <strong>84% of talent consider employer brand reputation on LinkedIn</strong> when evaluating job opportunities
                </li>
                <li className="text-foreground leading-relaxed">
                  <strong>Optimized pages increase company visibility in recruiter searches by 3.2x</strong> on average
                </li>
                <li className="text-foreground leading-relaxed">
                  <strong>Companies with 50K+ LinkedIn followers report 55% better brand recognition</strong> in their industry
                </li>
              </ul>
            </div>

            {/* Key Optimization Elements */}
            <h2 className="text-3xl font-bold text-foreground mb-8">
              7 Critical LinkedIn Page Optimization Elements
            </h2>

            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  1. Company Headline & Description Optimization
                </h3>
                <p className="text-foreground leading-relaxed mb-4">
                  Your company headline appears in LinkedIn searches and must contain high-intent keywords relevant to your industry. Instead of generic descriptions, use specific keywords that your target audience searches for. Include your core value proposition, industry focus, and geographic presence (especially if you serve US, UK, Canada, Australia, or India markets).
                </p>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="text-sm text-foreground"><strong>Example:</strong> Instead of "Digital Marketing Agency," use "B2B Digital Marketing & SEO Services for Tech Companies | US & UK Based"</p>
                </div>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                  <Search className="w-5 h-5 text-primary" />
                  2. SEO-Friendly About Section
                </h3>
                <p className="text-foreground leading-relaxed">
                  Your About section is where professionals decide if your company is relevant to them. Write a compelling, keyword-rich description (150-200 characters) that clearly explains what you do, who you serve, and why people should care. Include high-intent keywords naturally—don't keyword stuff. Explain your unique value proposition clearly.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-primary" />
                  3. Professional Visual Branding
                </h3>
                <p className="text-foreground leading-relaxed">
                  Your company logo, banner image, and profile picture are the first things people see. Use professional, high-quality images that reflect your brand identity. Your banner should communicate your core value proposition visually. Consistency in branding across LinkedIn signals professionalism and trustworthiness.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  4. Specialized Pages & Product Showcases
                </h3>
                <p className="text-foreground leading-relaxed">
                  LinkedIn allows you to create specialized pages for different services or products. If you serve multiple industries or markets (e.g., US, UK, Canada divisions), create separate specialized pages. These pages appear in industry-specific searches, improving visibility to relevant audiences.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  5. Consistent Content Strategy
                </h3>
                <p className="text-foreground leading-relaxed">
                  Posting 2-3x per week on your company page signals active engagement to the LinkedIn algorithm. This improves your visibility in recruiter and buyer searches. Share company updates, industry insights, thought leadership, job postings, and achievements. Consistency compounds—the more you post, the more visibility you gain.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  6. Active Recruitment & Job Posting Strategy
                </h3>
                <p className="text-foreground leading-relaxed">
                  Your LinkedIn page is a talent acquisition tool. Regularly post open positions with compelling job descriptions that include relevant keywords. Optimized job postings attract more qualified applicants directly through LinkedIn. This is especially powerful in competitive markets like US tech hubs, London's financial sector, and India's IT industry.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  7. Employee Advocacy & Authentic Engagement
                </h3>
                <p className="text-foreground leading-relaxed">
                  Encourage your employees to follow and engage with your company page. When employees share company content, it reaches their networks (multiplying your reach). Authentic engagement from real employees signals trustworthiness to potential customers and candidates. Foster a culture of LinkedIn participation among your team.
                </p>
              </div>
            </div>

            {/* Geographic Considerations */}
            <h2 className="text-3xl font-bold text-foreground mb-8 mt-12">
              LinkedIn Page Optimization by Market
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">US Market</h3>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1 flex-shrink-0"></span>
                    <span>Focus on innovation & growth messaging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1 flex-shrink-0"></span>
                    <span>Tech companies benefit most from active posting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1 flex-shrink-0"></span>
                    <span>Remote work culture messaging performs well</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">UK Market</h3>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1 flex-shrink-0"></span>
                    <span>Emphasize professional credentials & experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1 flex-shrink-0"></span>
                    <span>Finance & consulting sectors highly active</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1 flex-shrink-0"></span>
                    <span>Industry recognition & awards boost credibility</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">India Market</h3>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1 flex-shrink-0"></span>
                    <span>IT & software companies dominate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1 flex-shrink-0"></span>
                    <span>High engagement with educational content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1 flex-shrink-0"></span>
                    <span>Career development messaging resonates strongly</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Canada & Australia</h3>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1 flex-shrink-0"></span>
                    <span>Work-life balance content performs well</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1 flex-shrink-0"></span>
                    <span>Resource sector strong in Australia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1 flex-shrink-0"></span>
                    <span>Community engagement messaging valued</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Key Takeaway */}
            <div className="bg-accent/30 border-2 border-accent rounded-2xl p-8 my-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                The Competitive Advantage of LinkedIn Page Optimization
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                In 2026, businesses that invest in LinkedIn page optimization gain significant competitive advantages in talent acquisition and B2B sales. Your LinkedIn page is often the first impression professionals have of your company. A well-optimized page signals professionalism, active engagement, and credibility.
              </p>
              <p className="text-foreground leading-relaxed">
                <strong>The companies attracting the most talent and generating the most B2B leads aren't necessarily the biggest—they're the ones with optimized LinkedIn pages and consistent content strategies.</strong> If your competitors are investing in LinkedIn optimization and you're not, you're falling behind.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center pt-8 mb-12">
              <p className="text-lg text-muted-foreground mb-6">
                Ready to optimize your LinkedIn company page and unlock new opportunities?
              </p>
              <Link to="/free-consultation">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Your LinkedIn Page Optimized
                </Button>
              </Link>
            </div>

            {/* FAQ Section - AEO Optimization */}
            <div className="mt-16 pt-8 border-t border-border">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                LinkedIn Company Page Optimization FAQs
              </h2>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-bold hover:text-primary transition-colors">
                    How long does it take to see results from LinkedIn page optimization?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground leading-relaxed">
                    You'll notice initial improvements within 2-4 weeks of optimization and consistent posting. Your page will rank better in searches within 4-6 weeks. Significant growth in followers, job applications, and lead inquiries typically occurs within 3-6 months. The key is consistency—continuous optimization and regular content posting compound results over time. Companies that maintain their optimization see ongoing improvements in visibility and opportunity flow.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-bold hover:text-primary transition-colors">
                    What keywords should I target on my LinkedIn company page?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground leading-relaxed">
                    Target keywords that your ideal candidates and clients search for. These are typically your service/product names, industry terms, and geographic qualifiers (e.g., "B2B SaaS consulting US," "IT staffing India," "Digital marketing agency UK"). Use tools like LinkedIn search, Google Keyword Planner, and SEMrush to identify high-intent keywords. Include these naturally in your headline, about section, and job postings. Avoid keyword stuffing—focus on genuine relevance and readability.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-bold hover:text-primary transition-colors">
                    How often should my company post on LinkedIn?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground leading-relaxed">
                    Optimal posting frequency is 2-3 times per week for most businesses. This maintains visibility without appearing desperate or spammy. Some high-velocity industries (tech, media) can post daily. Less active industries (legal, manufacturing) may do well with 1x weekly. The key is consistency—regular posting trains the LinkedIn algorithm to show your company to more professionals. Quality matters more than quantity—one great post weekly beats seven mediocre posts weekly.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-bold hover:text-primary transition-colors">
                    Should I hire a LinkedIn page manager or do it in-house?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground leading-relaxed">
                    This depends on your company size and resources. Small teams often benefit from outsourcing to experts who understand LinkedIn algorithms and optimization. Larger companies may have dedicated social media teams. The hybrid approach works well: hire external experts to set up optimization and train your team, then maintain in-house with external guidance quarterly. What's critical: someone owns the strategy. Neglected pages underperform regardless of who manages them.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-lg font-bold hover:text-primary transition-colors">
                    How does LinkedIn page optimization impact job recruitment?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground leading-relaxed">
                    Optimized pages rank higher in recruiter searches, attracting quality candidates proactively. Strong pages build employer brand perception, making candidates more likely to apply. Optimized job postings get better visibility and attract more qualified applicants. Companies with well-optimized pages and consistent content see 2.5x more job applications on average. Your page essentially becomes a recruitment tool that works 24/7, continuously attracting talent.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-lg font-bold hover:text-primary transition-colors">
                    What content performs best on LinkedIn company pages?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground leading-relaxed">
                    Industry insights (highest engagement), company milestones and wins, behind-the-scenes culture content, thought leadership, employee spotlights, and helpful resources generate the most engagement. Job postings and career development content also perform well, especially in competitive hiring markets. Video content significantly outperforms text-only posts. Avoid overly promotional content—people want value and authenticity. The best strategy: 70% valuable content, 20% company culture, 10% direct promotion.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="text-lg font-bold hover:text-primary transition-colors">
                    How does geographic targeting work on LinkedIn company pages?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground leading-relaxed">
                    LinkedIn's algorithm considers user location and page geographic focus. If you target US, UK, Canada, Australia, and India, mention these regions in your headline and description. Create specialized pages for major geographic markets if you have distinct regional operations. Post content relevant to each geographic market's challenges and opportunities. Use location-specific keywords in job postings. This improves visibility to professionals searching in those specific regions.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger className="text-lg font-bold hover:text-primary transition-colors">
                    What metrics should I track to measure LinkedIn page success?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground leading-relaxed">
                    Track followers (growth rate), page views, visitor breakdown by geography and title, engagement rate (likes, comments, shares), click-through rates on job postings, applications received, and follower-to-lead conversion rates. Use LinkedIn Analytics for these insights. Set benchmarks for your industry and track month-to-month improvements. The ultimate metrics: recruiting success (quality applicants) and B2B lead volume. These business outcomes matter more than vanity metrics like total followers.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9">
                  <AccordionTrigger className="text-lg font-bold hover:text-primary transition-colors">
                    Can LinkedIn page optimization directly impact sales and lead generation?
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground leading-relaxed">
                    Yes, significantly. B2B buyers research companies on LinkedIn—your optimized page directly influences purchase decisions. Optimized pages rank higher in industry searches, attracting qualified prospects. Consistent, valuable content positions your company as a thought leader and builds buyer trust. Companies with optimized pages generate 40% more inbound inquiries within 6 months. The ROI compounds: more visibility leads to more inquiries, some of which become clients, who may refer others. This passive lead generation channel deserves strategic investment.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPostLinkedInPage;
