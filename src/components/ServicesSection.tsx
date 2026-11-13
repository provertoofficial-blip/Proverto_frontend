import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Sparkles,
  Linkedin,
  PenTool,
  Globe,
  MessageSquare,
  Cpu,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { getDynamicServices, resolveIcon } from "@/lib/api";

export const services = [
  {
    icon: FileText,
    title: "Expert Resume",
    description: "Done-for-you premium resume service with human expertise",
    features: [
      "Deep resume analysis",
      "Complete resume rewrite",
      "ATS & recruiter optimization",
      "Impact-driven bullet points",
      "Feedback & revision support",
    ],
    outcomes: ["Higher ATS pass rate", "More recruiter responses", "Strong first impression"],
    color: "from-blue-500 to-indigo-600",
    link: "/services/expert-resume",
  },
  {
    icon: Linkedin,
    title: "LinkedIn Profile Optimization",
    description: "Transform your profile into a recruiter-attracting asset",
    features: [
      "Headline optimization",
      "About section rewrite",
      "Experience optimization",
      "Professional headshot & banner",
      "Content support for engagement",
    ],
    outcomes: ["More profile views", "More inbound recruiters", "Strong personal branding"],
    color: "from-sky-500 to-blue-600",
    link: "/services/linkedin-profile-optimization",
  },
  {
    icon: Linkedin,
    title: "LinkedIn Page Optimization",
    description: "Transform your page into a working asset",
    features: [
      "Page Setup or Revamp",
      "Brand Positioning",
      "Keyword & Visibility Optimization",
      "Visual Structure Guidance",
      "Content support for engagement",
    ],
    outcomes: ["Improves brand visibility", "Long-term brand presence", "Supports inbound leads"],
    color: "from-blue-300 to-cyan-700",
    link: "/services/linkedin-page-optimization",
  },
  {
    icon: Sparkles,
    title: "UI/UX Design",
    description: "Intuitive and engaging designs for web & mobile apps",
    features: [
      "User research & personas",
      "Wireframing & prototyping",
      "Visual design & branding",
      "Usability testing",
      "Responsive design",
    ],
    outcomes: ["Better user engagement", "Improved conversion rates", "Enhanced user satisfaction"],
    color: "from-violet-500 to-purple-600",
    link: "/services/ui/ux-design",
  },
  {
    icon: PenTool,
    title: "Portfolio Development",
    description: "Showcase your skills with a professional portfolio",
    features: [
      "Custom portfolio design",
      "Project showcase",
      "Responsive layout",
      "SEO optimization",
      "Easy updates",
    ],
    outcomes: ["Professional presentation", "Stronger client trust", "Increased project inquiries"],
    color: "from-orange-500 to-amber-600",
    link: "/services/portfolio-development",
  },
  {
    icon: Globe,
    title: "Websites Design & Development",
    description: "Modern websites designed to convert visitors into customers",
    features: [
      "Business & startup websites",
      "Landing pages for lead generation",
      "E-commerce websites",
      "Portfolio & personal branding sites",
      "SEO-optimized & mobile-first design",
    ],
    outcomes: ["Strong online presence", "Higher conversion rates", "Professional brand image"],
    color: "from-emerald-500 to-teal-600",
    link: "/services/web-development",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp AI Automation",
    description: "Automate conversations. Close more deals. Save time.",
    features: [
      "AI chatbots for WhatsApp",
      "24/7 automated customer support",
      "Lead qualification & follow-ups",
      "Appointment booking automation",
      "CRM & payment integrations",
    ],
    outcomes: ["Faster responses", "Higher lead conversion", "Lower operational cost"],
    color: "from-green-500 to-emerald-600",
    link: "/services/whatsapp-automation",
  },
  {
    icon: Cpu,
    title: "AI Tools & Business Automation",
    description: "Streamline your operations with intelligent automation",
    features: [
      "Workflow automation",
      "AI-powered customer engagement",
      "Email & WhatsApp automation",
      "CRM & marketing integrations",
      "Custom AI solutions for businesses",
    ],
    outcomes: ["Increased efficiency", "Reduced costs", "Scalable operations"],
    color: "from-violet-500 to-purple-600",
    link: "/services/ai-tools",
  },
  {
    icon: CheckCircle,
    title: "Software Testing",
    description: "Ensure your software is reliable and bug-free",
    features: [
      "Automated testing",
      "Manual testing",
      "Performance testing",
      "Security testing",
      "Compatibility testing",
    ],
    outcomes: ["Reduced bugs", "Improved reliability", "Enhanced user experience"],
    color: "from-rose-500 to-pink-600",
    link: "/services/software-testing",
  },
];

const ServicesSection = () => {
  const [items, setItems] = useState(services);

  useEffect(() => {
    getDynamicServices(services).then((data) => {
      if (Array.isArray(data) && data.length > 0) {
        setItems(data);
      }
    });
  }, []);

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What We <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From AI-powered solutions to professional branding services, we help you achieve real outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((service, index) => {
            const Icon = resolveIcon(
              service.icon,
              Globe,
              service.title || (service as any).name,
              index
            );
            const colorClass = service.color || "from-blue-500 to-indigo-600";
            const serviceFeatures = service.features || [];
            const serviceOutcomes = service.outcomes || [];
            const serviceLink = service.link || "/services/web-development";
            const cardKey = (service as any)._id || (service as any).id || service.title;

            return (
              <div
                key={cardKey}
                className="card-hover bg-card border border-border rounded-2xl p-8 group flex flex-col justify-between"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div>
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colorClass} flex items-center justify-center mb-6 shadow-sm`}>
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  {(service as any).subheading && (service as any).subheading !== service.description && (
                    <p className="text-sm font-medium text-foreground/80 mb-2">
                      {(service as any).subheading}
                    </p>
                  )}
                  <p className="text-muted-foreground mb-6">{service.description || (service as any).subheading}</p>

                  {/* Features */}
                  {serviceFeatures.length > 0 && (
                    <ul className="space-y-2 mb-6">
                      {serviceFeatures.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Outcomes */}
                  {serviceOutcomes.length > 0 && (
                    <div className="pt-6 border-t border-border">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                        Outcomes
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {serviceOutcomes.map((outcome) => (
                          <span
                            key={outcome}
                            className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                          >
                            <CheckCircle className="w-3 h-3" />
                            {outcome}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Hover Arrow */}
                <div className="mt-6 pt-4 border-t border-border/40">
                  <Button variant="ghost" className="group/btn px-4 py-2 h-auto font-semibold text-primary hover:bg-primary/10" asChild>
                    <Link to={serviceLink}>
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
