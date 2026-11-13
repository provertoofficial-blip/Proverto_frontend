import { Building2, Briefcase, ShoppingBag, Users, Target, Lightbulb } from "lucide-react";

const audiences = [
  { icon: Building2, title: "Startups & Small Businesses", description: "Scale faster with AI automation" },
  { icon: Briefcase, title: "Agencies & Service Providers", description: "Enhance client deliverables" },
  { icon: ShoppingBag, title: "E-commerce Brands", description: "Boost sales & conversions" },
  { icon: Users, title: "Coaches & Consultants", description: "Build authority online" },
  { icon: Target, title: "Job Seekers & Professionals", description: "Stand out in your career" },
  { icon: Lightbulb, title: "Founders & Creators", description: "Launch & grow your brand" },
];

const UseCasesSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Who We Help
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Built for <span className="text-gradient">Growth-Minded</span> People
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="card-hover bg-card border border-border rounded-2xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <audience.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-sm font-bold text-foreground mb-1">
                {audience.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
