import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import NavLink from "./NavLink";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    // { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Packages", href: "/service/packages" },
    { name: "Internship", href: "/internship" },
    { name: "Process", href: "/process" },
    { name: "Why Us", href: "/why-us" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-200 ${
        isScrolled
          ? "border-b border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
          : "border-b border-slate-100"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo - Compact & crisp */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-2 shrink-0 py-1"
            aria-label="ProVerto Global Home"
          >
            <img
              src="/Proverto Logo.jpg"
              alt="ProVerto Global"
              className="h-12 md:h-10 w-auto object-contain transition-opacity duration-150 hover:opacity-90"
            />
          </a>

          {/* Desktop Navigation - Minimal & sleek */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-slate-900 text-xs md:text-[13px] font-medium tracking-tight transition-colors py-1"
                activeClassName="text-sky-600 font-semibold"
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action: Slim CTA Button & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/free-consultation"
              className="hidden sm:inline-flex items-center gap-1.5 h-8 md:h-9 px-3.5 md:px-4 rounded-lg bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white text-xs md:text-[13px] font-medium transition-colors shadow-none"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Menu Button - Minimal icon */}
            <button
              className="lg:hidden p-1.5 -mr-1 text-slate-700 hover:text-slate-950 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer - Clean & minimal */}
        {isMenuOpen && (
          <div className="lg:hidden py-3 border-t border-slate-100 bg-white animate-in fade-in slide-in-from-top-1 duration-150">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 hover:text-slate-950 py-2 px-1 text-sm font-medium transition-colors"
                  activeClassName="text-sky-600 font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="pt-2.5 mt-2 border-t border-slate-100 sm:hidden">
                <Link
                  to="/free-consultation"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-1.5 h-9 px-4 rounded-lg bg-sky-500 hover:bg-sky-600 text-white font-medium text-sm transition-colors"
                >
                  <span>Book Appointment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
