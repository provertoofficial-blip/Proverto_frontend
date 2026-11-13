export interface ServicePreset {
  slug: string;
  title: string;
  headline?: string;
  intro: string;
  benefits: string[];
  whatYouReceive: string[];
  faqs: { question: string; answer: string }[];
  relatedOfferings: string;
  iconName: string;
  iconColor: string;
}

export const SERVICE_PRESETS: Record<string, ServicePreset> = {
  "web-development": {
    slug: "web-development",
    title: "Website Development",
    headline: "Website Development",
    intro:
      "Fast, responsive, search-ready websites that make a strong first impression and turn visitors into enquiries.",
    benefits: [
      "High Conversion Design",
      "Fast 1.2s Load Times",
      "Built-in SEO & AI Schema",
    ],
    whatYouReceive: [
      "Custom responsive design tailored for every screen",
      "Intuitive admin panel for effortless text and media updates",
      "Technical SEO & AEO schema foundations built in",
      "Lead capture forms with automated email & WhatsApp alerts",
      "Full codebase, domain, and server transfer with zero lock-in",
    ],
    faqs: [
      {
        question: "How long does a standard website project take to launch?",
        answer:
          "Most standard business websites are designed, developed, and deployed within 2 to 4 weeks, with weekly milestone updates and staging reviews.",
      },
      {
        question: "Can our team edit content without needing a developer?",
        answer:
          "Yes, we build user-friendly admin portals and provide tailored video walkthroughs so anyone on your team can edit text, blogs, and images easily.",
      },
      {
        question: "Is mobile responsiveness and technical SEO included?",
        answer:
          "Absolutely. Every website is built mobile-first and includes meta tags, structured JSON-LD schemas, and speed optimization standard.",
      },
    ],
    relatedOfferings: "Software Development, AI & Process Automation",
    iconName: "Globe",
    iconColor: "from-blue-500 to-indigo-600",
  },
  "expert-resume": {
    slug: "expert-resume",
    title: "Expert Resume",
    headline: "Expert Resume",
    intro:
      "Your resume gets one chance to make an impression. Proverto's Expert Resume combines human expertise + AI intelligence to craft resumes that recruiters actually read — and respond to.",
    benefits: [
      "Human Expertise",
      "Achievement-Focused",
      "ATS-Optimized",
    ],
    whatYouReceive: [
      "Deep Resume Analysis: Industry & role analysis and ATS compatibility check",
      "Complete Resume Rewrite: Impact-driven bullet points & achievement language",
      "ATS & Recruiter Optimization: Keyword alignment and clean formatting",
      "Final Review & Delivery: Editable format and ready-to-apply version",
      "Feedback & revision support with 1-on-1 career positioning",
    ],
    faqs: [
      {
        question: "How is this different from an AI resume builder?",
        answer:
          "We don't just run your resume through ChatGPT. Every resume is analyzed, rewritten, and structured by real professionals with industry-specific hiring experience.",
      },
      {
        question: "What is your ATS pass guarantee?",
        answer:
          "We test every resume against leading enterprise ATS parsers to ensure high score compatibility before final handover.",
      },
      {
        question: "How many revisions are included?",
        answer:
          "We include 2 rounds of full revisions within 14 days of initial draft delivery to ensure you are 100% satisfied.",
      },
    ],
    relatedOfferings: "LinkedIn Profile Optimization, Portfolio Development",
    iconName: "FileText",
    iconColor: "from-blue-500 to-indigo-600",
  },
  "whatsapp-automation": {
    slug: "whatsapp-automation",
    title: "WhatsApp AI Automation",
    headline: "Turn WhatsApp Into Your Smartest Sales & Support Channel",
    intro:
      "WhatsApp is where your customers already are. Proverto helps businesses automate conversations using AI, so you never miss a lead, message, or opportunity.",
    benefits: [
      "24/7 Availability",
      "Human-like Conversations",
      "Fully Integrated CRM",
    ],
    whatYouReceive: [
      "Official Meta WhatsApp Business Cloud API integration",
      "AI chatbots with instant replies and natural language FAQ handling",
      "Automated lead qualification flows and hot lead routing",
      "Appointment booking and Google Calendar synchronization",
      "CRM, email, and payment gateway connectivity",
    ],
    faqs: [
      {
        question: "Do I need an official WhatsApp Business API account?",
        answer:
          "Yes, and we guide you through the official Meta verification and Cloud API setup with zero hassle.",
      },
      {
        question: "Can human agents take over the chat at any time?",
        answer:
          "Yes, live agents can seamlessly jump into any active chat via a unified dashboard whenever human intervention is needed.",
      },
      {
        question: "What tools can this integrate with?",
        answer:
          "We integrate with HubSpot, Zoho, Google Sheets, Notion, Stripe, Razorpay, and custom webhooks.",
      },
    ],
    relatedOfferings: "AI & Process Automation, Website Development",
    iconName: "MessageSquare",
    iconColor: "from-green-500 to-emerald-600",
  },
  "ai-tools": {
    slug: "ai-tools",
    title: "AI Tools & Business Automation",
    headline: "Automate Repetitive Work. Focus on Growth.",
    intro:
      "Manual processes slow businesses down. Proverto helps you automate workflows using AI-powered systems that save time, reduce errors, and scale effortlessly.",
    benefits: [
      "Workflow Analysis",
      "Seamless Integration",
      "Scalable Systems",
    ],
    whatYouReceive: [
      "Workflow review and repetitive bottleneck mapping",
      "Lead management automation across all web & social channels",
      "Automated customer onboarding and document collection sequences",
      "Cross-platform real-time data synchronization and dashboards",
      "Tailored AI assistants trained on your internal documentation",
    ],
    faqs: [
      {
        question: "What kinds of workflows can be automated?",
        answer:
          "Everything from customer lead routing and invoice processing to multi-platform data syncing and automated client status updates.",
      },
      {
        question: "Do we need internal technical staff to maintain this?",
        answer:
          "No, we design intuitive automations on robust cloud tools and provide full training and post-launch support.",
      },
      {
        question: "How quickly will we see ROI?",
        answer:
          "Most clients recover between 15 to 40 hours of manual labor per week starting within the first month.",
      },
    ],
    relatedOfferings: "WhatsApp AI Automation, Software Development",
    iconName: "Cpu",
    iconColor: "from-violet-500 to-purple-600",
  },
  "software-testing": {
    slug: "software-testing",
    title: "Software Testing & QA",
    headline: "Software Testing & QA",
    intro:
      "Ensure your software is reliable, user-friendly, and bug-free with Proverto's comprehensive Software Testing & QA services.",
    benefits: [
      "Automated Testing",
      "Performance Scalability",
      "Enterprise Security",
    ],
    whatYouReceive: [
      "Automated test script development (Cypress, Playwright, Jest)",
      "Comprehensive manual testing and detailed bug triage reports",
      "Performance, load, and stress testing with bottleneck analysis",
      "Vulnerability assessment and security compliance checks",
      "Cross-browser and cross-device compatibility verification",
    ],
    faqs: [
      {
        question: "Can you integrate testing into our existing CI/CD pipelines?",
        answer:
          "Yes, we configure automated test suites in GitHub Actions, GitLab CI, Jenkins, and AWS pipelines.",
      },
      {
        question: "Do you test mobile and web applications?",
        answer:
          "Yes, we test responsive web apps, iOS, Android, and backend REST/GraphQL APIs.",
      },
    ],
    relatedOfferings: "Website Development, AI & Process Automation",
    iconName: "CheckCircle",
    iconColor: "from-rose-500 to-pink-600",
  },
  "linkedin-profile-optimization": {
    slug: "linkedin-profile-optimization",
    title: "LinkedIn Profile Optimization",
    headline: "Turn Your LinkedIn Profile into an Opportunity Magnet",
    intro:
      "LinkedIn is more than a resume — it's your digital personal brand. Proverto helps you transform your LinkedIn profile into a search-optimized, recruiter-attracting asset.",
    benefits: [
      "Search Optimization",
      "Personal Branding",
      "Executive Positioning",
    ],
    whatYouReceive: [
      "Keyword-rich headline focused on high-value recruiter search queries",
      "Compelling About section crafted with personal brand storytelling",
      "Impact-driven experience rewrite highlighting measurable outcomes",
      "3 custom professional headshot concepts & branded cover banner",
      "Content strategy guide with weekly post templates for engagement",
    ],
    faqs: [
      {
        question: "How does LinkedIn optimization increase recruiter inbound?",
        answer:
          "Recruiters use LinkedIn Recruiter search algorithms. We match their exact filter queries, skill tags, and title metrics.",
      },
      {
        question: "Will you need access to my LinkedIn account?",
        answer:
          "No, we deliver your entire revamp in an easy copy-paste document with video instructions, or guide you live.",
      },
      {
        question: "Does this work for career transitions?",
        answer:
          "Yes, we reposition your transferable skills and narrative specifically toward your target industry.",
      },
    ],
    relatedOfferings: "Expert Resume, Portfolio Development",
    iconName: "Linkedin",
    iconColor: "from-sky-500 to-blue-600",
  },
  "linkedin-page-optimization": {
    slug: "linkedin-page-optimization",
    title: "LinkedIn Page Optimization",
    headline: "Transform Your LinkedIn Page into a Working Asset",
    intro:
      "Transform your company page into a working asset that establishes brand authority, captures inbound interest, and attracts top talent.",
    benefits: [
      "Brand Visibility",
      "Long-term Authority",
      "Inbound Lead Generation",
    ],
    whatYouReceive: [
      "Complete page setup or brand overhaul with optimized positioning",
      "Keyword & industry discovery optimization for LinkedIn page search",
      "High-impact custom banner and graphic asset templates",
      "Showcase pages setup for products and specialized offerings",
      "Content publishing roadmap designed to drive company followers",
    ],
    faqs: [
      {
        question: "Can you optimize both company pages and founder profiles?",
        answer:
          "Yes, pairing founder personal branding with company page authority produces the highest inbound conversion.",
      },
      {
        question: "How long before we see follower growth?",
        answer:
          "With our optimized setup and content framework, clients typically see noticeable engagement within 3-4 weeks.",
      },
    ],
    relatedOfferings: "LinkedIn Profile Optimization, Website Development",
    iconName: "Linkedin",
    iconColor: "from-blue-300 to-cyan-700",
  },
  "portfolio-development": {
    slug: "portfolio-development",
    title: "Portfolio Development",
    headline: "Portfolio Development",
    intro:
      "Showcase your skills with a professional portfolio that highlights your projects and expertise, making it easier for potential clients and employers to see your value.",
    benefits: [
      "Custom Visual Design",
      "High Speed Performance",
      "Admin CMS Updates",
    ],
    whatYouReceive: [
      "Custom responsive design tailored to your personal brand",
      "Detailed project showcase with media embeds and live demo links",
      "SEO foundation, social OpenGraph preview cards, and fast load speeds",
      "Interactive resume preview and downloadable CV trigger",
      "Contact form with instant WhatsApp & email lead alerts",
    ],
    faqs: [
      {
        question: "Can I update my portfolio projects on my own?",
        answer:
          "Yes, we provide an intuitive admin dashboard where you can add, edit, or remove projects in seconds.",
      },
      {
        question: "Is custom domain setup and hosting included?",
        answer:
          "Yes, we assist with domain connecting, SSL certification, and hosting setup.",
      },
    ],
    relatedOfferings: "Expert Resume, LinkedIn Profile Optimization",
    iconName: "PenTool",
    iconColor: "from-orange-500 to-amber-600",
  },
  "ui/ux-design": {
    slug: "ui/ux-design",
    title: "UI/UX Design",
    headline: "UI/UX Design",
    intro:
      "Intuitive and engaging designs for web & mobile apps that captivate users and drive conversions, crafted with a user-centric approach.",
    benefits: [
      "User-Centric Research",
      "Interactive Prototyping",
      "Design Systems",
    ],
    whatYouReceive: [
      "User research, persona creation, and behavioral journey maps",
      "Low-fidelity wireframes and click-through interactive Figma prototypes",
      "Modern visual UI design with consistent branding and design tokens",
      "Usability testing sessions and data-driven iterative refinements",
      "Complete design handoff package with developer specifications",
    ],
    faqs: [
      {
        question: "What design tools do you work in?",
        answer:
          "Our primary tool is Figma, providing full design files, component libraries, and interactive prototypes.",
      },
      {
        question: "Do you support developers during implementation?",
        answer:
          "Yes, we provide detailed design specs and conduct UI reviews to ensure pixel-perfect fidelity.",
      },
    ],
    relatedOfferings: "Website Development, Portfolio Development",
    iconName: "Sparkles",
    iconColor: "from-violet-500 to-purple-600",
  },
  "github-revamp": {
    slug: "github-revamp",
    title: "GitHub Profile Revamp",
    headline: "Transform Your GitHub Profile into a Developer Magnet",
    intro:
      "GitHub is more than just code hosting — it's your digital developer portfolio. Proverto helps you transform your GitHub profile into a search-optimized, recruiter-attracting asset.",
    benefits: [
      "Recruiter Search SEO",
      "README Architecture",
      "Open Source Impact",
    ],
    whatYouReceive: [
      "Dynamic GitHub profile README with custom SVG stats, tech stacks, and metrics",
      "Repository restructuring with production-grade documentation and guides",
      "Issue and Pull Request templates for open source collaboration",
      "Code clean-up guidance and best-practice directory structuring",
      "Pinned project curation to showcase your highest-impact engineering work",
    ],
    faqs: [
      {
        question: "Why is a GitHub profile important for developers?",
        answer:
          "Hiring managers and tech leads inspect GitHub profiles before interviews to assess code clarity and consistency.",
      },
      {
        question: "Do you need my GitHub credentials?",
        answer:
          "No, we deliver all markdown assets, configurations, and scripts with clear instructions for you to paste.",
      },
    ],
    relatedOfferings: "Portfolio Development, Software Testing & QA",
    iconName: "FileText",
    iconColor: "from-gray-500 to-slate-600",
  },
};

export function getPresetForSlug(slug?: string): ServicePreset | undefined {
  if (!slug) return undefined;
  const clean = slug.replace(/^\/+/, "").replace(/^services\//, "").toLowerCase();
  
  if (SERVICE_PRESETS[clean]) return SERVICE_PRESETS[clean];

  // Try direct match
  const match = Object.values(SERVICE_PRESETS).find(
    (p) =>
      p.slug.toLowerCase() === clean ||
      p.title.toLowerCase().replace(/[^a-z0-9]/g, "-").includes(clean) ||
      clean.includes(p.slug.toLowerCase())
  );
  return match;
}
