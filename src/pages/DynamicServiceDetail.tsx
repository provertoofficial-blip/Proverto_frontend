import { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import ServicePageLayout from "@/components/ServicePageLayout";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Loader2, ArrowLeft, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getDynamicServiceBySlug, getCachedServiceBySlug, resolveIcon } from "@/lib/api";

interface DynamicServiceDetailProps {
  slugOverride?: string;
}

const DynamicServiceDetail = ({ slugOverride }: DynamicServiceDetailProps) => {
  const params = useParams<{ slug?: string; category?: string }>();
  const location = useLocation();

  // Determine active slug from prop, params, or pathname
  const activeSlug =
    slugOverride ||
    (params.category && params.slug ? `${params.category}/${params.slug}` : params.slug) ||
    location.pathname.replace(/^\/+/, "").replace(/^services\//, "");

  // Instant render if cached from service list (0ms delay)
  const initialCached = getCachedServiceBySlug(activeSlug);
  const [service, setService] = useState<any | null>(initialCached);
  const [isLoading, setIsLoading] = useState(!initialCached);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!activeSlug) {
      setNotFound(true);
      setIsLoading(false);
      return;
    }

    if (!service) {
      setIsLoading(true);
    }
    setNotFound(false);

    getDynamicServiceBySlug(activeSlug)
      .then((data) => {
        if (data && (data.title || data.name || data._id)) {
          setService(data);
          setNotFound(false);
        } else if (!service) {
          setNotFound(true);
        }
      })
      .catch((err) => {
        console.warn("Failed to fetch dynamic service:", err);
        if (!service) {
          setNotFound(true);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [activeSlug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex flex-col justify-between">
        <Header />
        <main className="container mx-auto px-4 max-w-4xl py-36 flex flex-col items-center justify-center text-center">
          <Loader2 className="w-10 h-10 animate-spin text-primary mb-4" />
          <p className="text-muted-foreground text-base font-medium">Loading service details...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (notFound || !service) {
    return (
      <div className="min-h-screen bg-background flex flex-col justify-between">
        <Header />
        <main className="container mx-auto px-4 max-w-3xl py-36 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center mb-6">
            <ArrowLeft className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8 text-base">
            The service overview you are looking for doesn't exist or may have been updated.
          </p>
          <Link to="/services">
            <Button size="lg" className="px-6 py-2.5">Explore All Services</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Derive dynamic properties directly from fetched backend data
  const title = service.title || service.name || "Service Overview";
  const headline = service.subheading || title;
  const intro = service.description || service.subheading || "";
  
  // Benefits: use database outcomes
  const benefits = Array.isArray(service.outcomes) ? service.outcomes : [];

  // Deliverables: use database features or checkpoints
  const whatYouReceive =
    Array.isArray(service.features) && service.features.length > 0
      ? service.features
      : Array.isArray(service.checkpoints)
      ? service.checkpoints
      : [];

  const faqs = Array.isArray(service.faqs) ? service.faqs : [];
  const icon = resolveIcon(service.icon, Globe, service.title || service.name);
  const iconColor = service.color || "from-blue-500 to-indigo-600";
  const relatedOfferings = service.relatedOfferings || "";
  const priceLabel = service.priceLabel || "Quote on request";
  const category = service.category || "Service";

  return (
    <ServicePageLayout
      title={title}
      headline={headline}
      intro={intro}
      benefits={benefits}
      whatYouReceive={whatYouReceive}
      faqs={faqs}
      icon={icon}
      iconColor={iconColor}
      relatedOfferings={relatedOfferings}
      priceLabel={priceLabel}
      category={category}
      quoteLink="/free-consultation"
      appointmentLink="/free-consultation"
    />
  );
};

export default DynamicServiceDetail;
