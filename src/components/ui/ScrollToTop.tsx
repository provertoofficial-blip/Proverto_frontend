import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    // Disable browser automatic scroll restoration so mobile browsers
    // don't restore past scroll positions on route changes
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (!hash) {
      const resetScroll = () => {
        window.scrollTo(0, 0);
        if (document.documentElement) document.documentElement.scrollTop = 0;
        if (document.body) document.body.scrollTop = 0;
      };

      // 1. Reset immediately
      resetScroll();

      // 2. Reset on next animation frame (after React commits DOM)
      const rAF = requestAnimationFrame(resetScroll);

      // 3. Fallback timers to handle asynchronous mobile layout shifts
      const timer1 = setTimeout(resetScroll, 50);
      const timer2 = setTimeout(resetScroll, 150);

      return () => {
        cancelAnimationFrame(rAF);
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [pathname, search, hash]);

  return null;
}
