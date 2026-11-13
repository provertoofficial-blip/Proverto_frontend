import { useState, useEffect } from "react";
import { getDynamicTestimonials } from "@/lib/api";

/*
const defaultTestimonials = [
  {
    quote: "Proverto engineered a high-standard digital platform tailored to our exact industry needs with exceptional clarity and engineering prowess.",
    client: "Bharat Khatri",
    role: "Regional Manager, Alfa Laval | Dubai, United Arab Emirates",
  },
  {
    quote: "The web development and automation solutions delivered by Proverto elevated our operational efficiency dramatically.",
    client: "Viral Khara",
    role: "Director, VIIONLIFE OPC | Gujarat, India",
  },
  {
    quote: "Excellent job done by the team. They helped me to create a professional portfolio, which significantly improved my online presence.",
    client: "Aditya Chatterjee",
    role: "Senior Marketing Consultant & Fractional Head of Growth, Independent | India & International",
  },
  {
    quote: "Proverto completely transformed our customer communication using WhatsApp AI. Our leads doubled and response time dropped to seconds.",
    client: "Naveen Sharma",
    role: "Director, Netxis | New Delhi, India",
  },
  {
    quote: "My LinkedIn profile and resume finally started getting attention. Landed my dream job within 3 weeks of working with Proverto.",
    client: "Ayushi Singhal",
    role: "Senior Software Engineer, Mantra Labs | Bangalore, India",
  },
];
*/
const defaultTestimonials: any[] = [];

const TestimonialsSection = () => {
  const [items, setItems] = useState(defaultTestimonials);

  useEffect(() => {
    getDynamicTestimonials<any[]>([]).then((data) => {
      if (Array.isArray(data) && data.length > 0) {
        setItems(data.filter((t: any) => !t.status || t.status === "Published"));
      }
    });
  }, []);

  if (items.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="bg-[#f8fafd] dark:bg-slate-950/60 py-12 md:py-16 text-foreground transition-colors">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-8">
          <p className="text-xs sm:text-sm font-bold tracking-[0.14em] text-sky-600 dark:text-sky-400 uppercase mb-2">
            TESTIMONIALS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.18] max-w-2xl">
            What clients say about working with us.
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {items.map((item, index) => {
            const cardKey = (item as any)._id || (item as any).id || index;
            const authorName = item.client || (item as any).name || "Verified Client";
            const authorRole = item.role || (item as any).company || "";

            return (
              <div
                key={cardKey}
                className="border border-dashed border-slate-300 dark:border-slate-700 rounded-2xl bg-white dark:bg-slate-900 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:border-slate-400 dark:hover:border-slate-600 transition-colors"
              >
                <div>
                  {/* Quotation Mark */}
                  <span className="text-[#0284c7] text-2xl font-serif font-black leading-none mb-3 inline-block select-none">
                    “
                  </span>

                  {/* Body Quote */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {item.quote}
                  </p>
                </div>

                {/* Author & Role */}
                <div className="pt-2">
                  <p className="font-bold text-sm text-slate-900 dark:text-white">
                    {authorName}
                  </p>
                  {authorRole && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {authorRole}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
