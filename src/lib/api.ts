import {
  Globe,
  User,
  Briefcase,
  Sparkles,
  FileText,
  Linkedin,
  MessageSquare,
  MessageCircle,
  Cpu,
  PenTool,
  CheckCircle,
  CheckCircle2,
  Layers,
  Award,
  TrendingUp,
  Code2,
  Code,
  Smartphone,
  Bot,
  Zap,
  Terminal,
  Laptop,
  Layout,
  Monitor,
  ShieldCheck,
  Palette,
  type LucideIcon,
} from "lucide-react";

const isProduction =
  import.meta.env.VITE_ENVIRONMENT === "production" ||
  import.meta.env.MODE === "production";

export const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  (isProduction ? "/api/v1" : "http://localhost:3001/api/v1");

const ICON_MAP: Record<string, LucideIcon> = {
  globe: Globe,
  website: Globe,
  web: Globe,
  layout: Layout,
  monitor: Monitor,
  user: User,
  briefcase: Briefcase,
  sparkles: Sparkles,
  filetext: FileText,
  linkedin: Linkedin,
  messagesquare: MessageSquare,
  messagecircle: MessageCircle,
  message: MessageSquare,
  chat: MessageSquare,
  whatsapp: MessageSquare,
  cpu: Cpu,
  pentool: PenTool,
  palette: Palette,
  checkcircle: CheckCircle,
  checkcircle2: CheckCircle2,
  layers: Layers,
  award: Award,
  trendingup: TrendingUp,
  code: Code2,
  code2: Code2,
  terminal: Terminal,
  laptop: Laptop,
  smartphone: Smartphone,
  phone: Smartphone,
  mobile: Smartphone,
  app: Smartphone,
  bot: Bot,
  zap: Zap,
  shieldcheck: ShieldCheck,
};

const DYNAMIC_FALLBACKS: LucideIcon[] = [
  Globe,
  Code2,
  MessageSquare,
  Cpu,
  Smartphone,
  User,
  Sparkles,
  PenTool,
  Briefcase,
  Layers,
  CheckCircle,
  TrendingUp,
];

export function resolveIcon(
  icon: any,
  fallback: LucideIcon = Globe,
  contextText?: string,
  index?: number
): LucideIcon {
  // If icon is already a Lucide component function/object
  if (icon && (typeof icon === "function" || typeof icon === "object")) {
    if (icon !== Globe || !contextText) {
      return icon as LucideIcon;
    }
  }

  // 1. If explicit icon name is given and it's NOT the generic "globe" default
  if (typeof icon === "string" && icon.trim()) {
    const cleanKey = icon.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (cleanKey && cleanKey !== "globe" && ICON_MAP[cleanKey]) {
      return ICON_MAP[cleanKey];
    }
  }

  // 2. Dynamic contextual resolution based on service title, slug, or category
  if (contextText) {
    const text = contextText.toLowerCase();

    // WhatsApp / Chat / Support / Messaging
    if (
      text.includes("whatsapp") ||
      text.includes("chat") ||
      text.includes("messaging") ||
      text.includes("support")
    ) {
      return MessageSquare;
    }

    // Mobile App / iOS / Android
    if (
      text.includes("mobile") ||
      text.includes("ios") ||
      text.includes("android") ||
      text.includes("flutter") ||
      text.includes("react native")
    ) {
      return Smartphone;
    }

    // Software Development / Custom Software / Coding / Backend
    if (
      text.includes("software") ||
      text.includes("custom software") ||
      text.includes("coding") ||
      text.includes("backend") ||
      text.includes("full stack") ||
      text.includes("developer")
    ) {
      return Code2;
    }

    // Business Automation / AI Tools / Process Automation / Workflows
    if (
      text.includes("automation") ||
      text.includes("ai tool") ||
      text.includes("process automation") ||
      text.includes("workflow") ||
      text.includes("bot") ||
      text.includes("intelligence")
    ) {
      return Cpu;
    }

    // Personal Branding / Career / Executive / Profile
    if (
      text.includes("personal branding") ||
      text.includes("branding") ||
      text.includes("career") ||
      text.includes("profile") ||
      text.includes("executive")
    ) {
      return User;
    }

    // Website Development / Web Design / Landing Page
    if (
      text.includes("website") ||
      text.includes("web design") ||
      text.includes("web development") ||
      text.includes("landing page")
    ) {
      return Globe;
    }

    // UI/UX Design / Prototyping / Wireframing
    if (
      text.includes("design") ||
      text.includes("ui") ||
      text.includes("ux") ||
      text.includes("figma") ||
      text.includes("prototype")
    ) {
      return PenTool;
    }

    // Resume / CV / Documents
    if (
      text.includes("resume") ||
      text.includes("cv") ||
      text.includes("document")
    ) {
      return FileText;
    }

    // LinkedIn
    if (text.includes("linkedin")) {
      return Linkedin;
    }

    // Testing / QA / Quality / Security
    if (
      text.includes("testing") ||
      text.includes("qa") ||
      text.includes("quality") ||
      text.includes("security")
    ) {
      return CheckCircle;
    }
  }

  // 3. If explicit string key was "globe" and context was web, or no context
  if (typeof icon === "string") {
    const cleanKey = icon.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (cleanKey === "globe" && (!contextText || contextText.toLowerCase().includes("web"))) {
      return Globe;
    }
  }

  // 4. Dynamic pool fallback by index so cards never share the same icon
  if (typeof index === "number" && index >= 0) {
    return DYNAMIC_FALLBACKS[index % DYNAMIC_FALLBACKS.length];
  }

  return fallback || Globe;
}

// In-memory cache + storage cache for lightning-fast loads
interface CacheEntry<T> {
  data: T;
  timestamp: number;
}
const memoryCache = new Map<string, CacheEntry<any>>();
const pendingRequests = new Map<string, Promise<any>>();
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes fresh

export function getCachedData<T>(endpoint: string): T | null {
  // 1. Check in-memory
  const mem = memoryCache.get(endpoint);
  if (mem && mem.data) {
    return mem.data as T;
  }
  // 2. Check localStorage
  if (typeof window !== "undefined" && window.localStorage) {
    try {
      const raw = localStorage.getItem(`proverto_cache_${endpoint}`);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && parsed.data) {
          memoryCache.set(endpoint, parsed);
          return parsed.data as T;
        }
      }
    } catch {
      // ignore storage access errors
    }
  }
  return null;
}

export function setCachedData<T>(endpoint: string, data: T): void {
  const entry: CacheEntry<T> = { data, timestamp: Date.now() };
  memoryCache.set(endpoint, entry);
  if (typeof window !== "undefined" && window.localStorage) {
    try {
      localStorage.setItem(`proverto_cache_${endpoint}`, JSON.stringify(entry));
    } catch {
      // ignore quota errors
    }
  }
}

// Generic safe fetcher with stale-while-revalidate & request deduplication
async function safeFetch<T>(endpoint: string, fallback: T): Promise<T> {
  const cached = getCachedData<T>(endpoint);
  const mem = memoryCache.get(endpoint);
  const isFresh = mem && Date.now() - mem.timestamp < CACHE_TTL_MS;

  // Deduplicate concurrent requests
  if (pendingRequests.has(endpoint)) {
    if (cached) return cached;
    return pendingRequests.get(endpoint)!;
  }

  // If fresh data is already cached, return immediately
  if (isFresh && cached) {
    return cached;
  }

  const fetchPromise = (async () => {
    try {
      const res = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        console.warn(`Request to ${endpoint} returned status ${res.status}`);
        return cached ?? fallback;
      }
      const json = await res.json();
      const result = json.data ?? json ?? fallback;
      setCachedData(endpoint, result);
      return result;
    } catch (err) {
      console.warn(`SafeFetch error for ${endpoint}:`, err);
      return cached ?? fallback;
    } finally {
      pendingRequests.delete(endpoint);
    }
  })();

  pendingRequests.set(endpoint, fetchPromise);

  // Return stale cache immediately (0ms wait) while network revalidates
  if (cached) {
    return cached;
  }

  return fetchPromise;
}

// 1. Services
export async function getDynamicServices<T>(fallback: T): Promise<T> {
  return safeFetch<T>("/content/services", fallback);
}

export function getCachedServiceBySlug(slug: string): any | null {
  if (!slug) return null;
  const cleanSlug = slug.replace(/^\/+/, "").replace(/^services\//, "");
  const all = getCachedData<any[]>("/content/services");
  if (Array.isArray(all)) {
    const norm = (str: string) => (str || "").toLowerCase().replace(/[^a-z0-9]/g, "");
    const targetNorm = norm(cleanSlug);
    return all.find((s) => {
      const sLink = (s.link || "").replace(/^\/+/, "").replace(/^services\//, "");
      const sTitle = s.title || s.name || "";
      const sId = s._id || s.id || "";
      return (
        norm(sLink) === targetNorm ||
        norm(sTitle) === targetNorm ||
        sId === cleanSlug ||
        norm(sId) === targetNorm
      );
    }) || null;
  }
  return null;
}

export async function getDynamicServiceBySlug(slug: string): Promise<any | null> {
  if (!slug) return null;
  const cleanSlug = slug.replace(/^\/+/, "").replace(/^services\//, "");

  // Instant cache lookup first (0ms)
  const cachedMatch = getCachedServiceBySlug(cleanSlug);
  if (cachedMatch) return cachedMatch;

  try {
    const res = await fetch(`${API_BASE_URL}/content/services/${encodeURIComponent(cleanSlug)}`);
    if (res.ok) {
      const json = await res.json();
      const data = json.data ?? json;
      if (data && (data.title || data._id || data.name)) return data;
    }

    const all = await getDynamicServices<any[]>([]);
    if (Array.isArray(all)) {
      const norm = (str: string) => (str || "").toLowerCase().replace(/[^a-z0-9]/g, "");
      const targetNorm = norm(cleanSlug);
      const match = all.find((s) => {
        const sLink = (s.link || "").replace(/^\/+/, "").replace(/^services\//, "");
        const sTitle = s.title || s.name || "";
        const sId = s._id || s.id || "";
        return (
          norm(sLink) === targetNorm ||
          norm(sTitle) === targetNorm ||
          sId === cleanSlug ||
          norm(sId) === targetNorm
        );
      });
      if (match) return match;
    }
    return null;
  } catch (err) {
    console.warn("Failed to fetch service by slug:", err);
    return null;
  }
}

// 2. Packages
export async function getDynamicPackages<T>(fallback: T): Promise<T> {
  return safeFetch<T>("/content/packages", fallback);
}

// 3. Case Studies
export async function getDynamicCaseStudies<T>(fallback: T): Promise<T> {
  return safeFetch<T>("/content/case-studies", fallback);
}

// 4. Testimonials
export async function getDynamicTestimonials<T>(fallback: T): Promise<T> {
  return safeFetch<T>("/content/testimonials", fallback);
}

// 5. Blogs
export async function getDynamicBlogs<T>(fallback: T): Promise<T> {
  try {
    const res = await fetch(`${API_BASE_URL}/blogs`);
    if (!res.ok) return fallback;
    const json = await res.json();
    const blogList = json.data?.blogs || json.data || json.blogs || json;
    return Array.isArray(blogList) ? (blogList as unknown as T) : fallback;
  } catch {
    return fallback;
  }
}

export async function getDynamicBlogBySlug(slug: string): Promise<any | null> {
  if (!slug) return null;
  try {
    const res = await fetch(`${API_BASE_URL}/blogs/${encodeURIComponent(slug)}`);
    if (res.ok) {
      const json = await res.json();
      const data = json.data ?? json;
      if (data && (data.title || data._id)) return data;
    }

    const res2 = await fetch(`${API_BASE_URL}/blogs?slug=${encodeURIComponent(slug)}`);
    if (res2.ok) {
      const json2 = await res2.json();
      const list = json2.data?.blogs || json2.data || [];
      if (Array.isArray(list) && list.length > 0) return list[0];
      if (list && list.title) return list;
    }

    const all = await getDynamicBlogs<any[]>([]);
    if (Array.isArray(all)) {
      return all.find((b) => b.slug === slug || b._id === slug || b.id === slug) || null;
    }

    return null;
  } catch (err) {
    console.warn("Failed to fetch blog by slug:", err);
    return null;
  }
}

// 6. Submit Contact Inquiry
export async function submitContactInquiry(data: {
  name: string;
  email?: string;
  phone: string;
  service?: string;
  message?: string;
  notes?: string;
  inquiryType?: string;
  paymentMethod?: string;
}) {
  const payload = {
    name: data.name,
    email: data.email || "",
    phone: data.phone,
    service: data.service || "Website Development",
    message: data.message || data.notes || "",
    notes: data.notes || data.message || "",
    inquiryType: data.inquiryType || "General Inquiry",
    status: "New",
  };

  try {
    const res = await fetch(`${API_BASE_URL}/contact/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = await res.json().catch(() => ({}));
    return { ok: res.ok, data: result };
  } catch (error: any) {
    console.warn("Contact API submit failed, continuing:", error);
    return { ok: false, error: error.message };
  }
}

// 7. Submit Consultation / Appointment
export async function submitConsultation(data: {
  name: string;
  email: string;
  phone: string;
  selectedServices?: string[];
  preferredDate?: string;
  time?: string;
  message?: string;
}) {
  const payload = {
    clientName: data.name,
    name: data.name,
    clientEmail: data.email,
    email: data.email,
    clientPhone: data.phone,
    phone: data.phone,
    topic:
      data.selectedServices && data.selectedServices.length > 0
        ? data.selectedServices.join(", ")
        : "Free Consultation",
    selectedServices: data.selectedServices || [],
    date: data.preferredDate || "As soon as possible",
    preferredDate: data.preferredDate || "As soon as possible",
    time: data.time || "Flexible",
    message: data.message || "",
    type: "free-consultation",
    status: "Pending",
  };

  try {
    const res = await fetch(`${API_BASE_URL}/appointments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = await res.json().catch(() => ({}));
    return { ok: res.ok, data: result };
  } catch (error: any) {
    console.warn("Consultation API submit failed, continuing:", error);
    return { ok: false, error: error.message };
  }
}

// 8. Razorpay: Load Checkout Script
export function loadRazorpayScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window !== "undefined" && (window as any).Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => {
      console.error("Failed to load Razorpay checkout SDK script");
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

// 9. Razorpay: Get Public Key ID from Backend Settings
export async function getRazorpayConfig(): Promise<{
  success: boolean;
  keyId?: string;
  liveMode?: boolean;
  message?: string;
}> {
  try {
    const res = await fetch(`${API_BASE_URL}/payments/config`);
    const data = await res.json();
    return data;
  } catch (error: any) {
    console.warn("Failed to fetch Razorpay config:", error);
    return { success: false, message: error.message };
  }
}

// 10. Razorpay: Create Order
export async function createRazorpayOrder(payload: {
  amount: number;
  currency?: string;
  customer: string;
  email: string;
  phone?: string;
  packageTitle?: string;
  notes?: string;
}): Promise<{
  success: boolean;
  order?: any;
  keyId?: string;
  message?: string;
  error?: any;
}> {
  try {
    const res = await fetch(`${API_BASE_URL}/payments/create-order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    console.error("Failed to create Razorpay order:", error);
    return { success: false, message: error.message };
  }
}

// 11. Razorpay: Verify Payment & Save Transaction
export async function verifyRazorpayPayment(payload: {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
  customer: string;
  email: string;
  phone?: string;
  amount: number;
  currency?: string;
  packageTitle?: string;
  notes?: string;
}): Promise<{
  success: boolean;
  message?: string;
  data?: any;
  error?: any;
}> {
  try {
    const res = await fetch(`${API_BASE_URL}/payments/verify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    console.error("Failed to verify Razorpay payment:", error);
    return { success: false, message: error.message };
  }
}

// 12. Validate Coupon Code
export async function validateCoupon(payload: {
  code: string;
  amount: number;
  packageTitle?: string;
}): Promise<{
  success: boolean;
  valid: boolean;
  message?: string;
  data?: {
    code: string;
    discountType: "percentage" | "fixed";
    discountValue: number;
    description?: string;
    discountAmount: number;
    originalAmount: number;
    finalAmount: number;
  };
}> {
  try {
    const res = await fetch(`${API_BASE_URL}/coupons/validate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    console.error("Failed to validate coupon:", error);
    return {
      success: false,
      valid: false,
      message: error.message || "Failed to validate coupon",
    };
  }
}
