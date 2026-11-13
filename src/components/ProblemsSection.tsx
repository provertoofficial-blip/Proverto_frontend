import { Clock, DollarSign, Settings, TrendingDown, Users, FileX, Eye, Award } from "lucide-react";

const ProblemsSection = () => {
  const businessProblems = [
    { icon: Clock, text: "Losing leads due to slow replies" },
    { icon: DollarSign, text: "High customer support costs" },
    { icon: Settings, text: "No automation or CRM integration" },
    { icon: TrendingDown, text: "Poor website conversion rates" },
    { icon: Users, text: "Manual processes wasting time" },
  ];

  const professionalProblems = [
    { icon: FileX, text: "Weak resumes & LinkedIn profiles" },
    { icon: Eye, text: "Low visibility online" },
    { icon: Award, text: "No personal branding strategy" },
    { icon: TrendingDown, text: "Missed career opportunities" },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Pain Points
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            We Solve the Problems That <span className="text-gradient">Slow You Down</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* For Businesses */}
          <div className="card-hover bg-card border border-border rounded-2xl p-8">
            <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              For Businesses
            </h3>
            <ul className="space-y-4">
              {businessProblems.map((problem) => (
                <li key={problem.text} className="flex items-center gap-3 text-muted-foreground">
                  <problem.icon className="w-5 h-5 text-destructive flex-shrink-0" />
                  <span>{problem.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* For Professionals */}
          <div className="card-hover bg-card border border-border rounded-2xl p-8">
            <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
              For Professionals
            </h3>
            <ul className="space-y-4">
              {professionalProblems.map((problem) => (
                <li key={problem.text} className="flex items-center gap-3 text-muted-foreground">
                  <problem.icon className="w-5 h-5 text-destructive flex-shrink-0" />
                  <span>{problem.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
