import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const packages = [
  {
    name: "Expert Resume",
    description: "Perfect for job seekers aiming to stand out",
    price: "₹2999 / $39",
    features: [
      "Deep resume analysis",
      "Complete resume rewrite",
      "ATS & recruiter optimization",
      "Impact-driven bullet points",
      "Feedback & revision support",
    ],
    popular: false,
  },
  {
    name: "Career Growth",
    description: "Ideal for professionals seeking career advancement",
    price: "₹7999 / $99",
    features: [
      "Professional Resume Writing",
      "LinkedIn Profile Optimization",
      "10 Weeks of Content Support (what to post & when)",
      "Interview Revision & Salary Guidance",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "LinkedIn Optimization",
    description: "Best for professionals wanting to scale up",
    price: "₹5999 / $79",
    features: [
      "Headline optimization",
      "About section rewrite",
      "Experience optimization",
      "Professional headshot & banner",
      "5 Weeks of Content Support",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Pricing
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Career <span className="text-gradient">Packages</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Affordable packages designed to help you advance your career with Expert Resume writing and LinkedIn Optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative card-hover bg-card rounded-2xl p-8 ${
                pkg.popular
                  ? "border-2 border-primary shadow-lg"
                  : "border border-border"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Package Info */}
              <div className="text-center mb-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                <div className="font-display text-3xl font-bold text-foreground">
                  {pkg.price}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link to="/service/packages" className="block w-full">
                <Button
                  variant={pkg.popular ? "hero" : "heroOutline"}
                  className="w-full"
                >
                  Get Started & Pay
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
