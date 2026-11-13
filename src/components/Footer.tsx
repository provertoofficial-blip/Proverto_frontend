import { Link } from "react-router-dom";

const Footer = () => {
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-white dark:bg-slate-950 pt-16 pb-12 border-t border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 transition-colors">
      <div className="container-custom">
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Col 1: Brand (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <a href="/" onClick={handleLogoClick} className="inline-flex items-center gap-2">
              <img
                src="/Proverto Logo.jpg"
                alt="ProVerto"
                className="h-11 w-auto object-contain transition-transform duration-200 hover:scale-105"
              />
            </a>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-4 max-w-xs leading-relaxed">
              AI-powered digital solutions for startups, businesses and professionals.
            </p>
            <a
              href="https://provertoglobal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-slate-900 dark:text-white mt-4 block hover:text-sky-600 transition-colors"
            >
              provertoglobal.com
            </a>
          </div>

          {/* Col 2: COMPANY (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-4">
              COMPANY
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-slate-600 dark:text-slate-400 hover:text-sky-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-slate-600 dark:text-slate-400 hover:text-sky-600 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-600 dark:text-slate-400 hover:text-sky-600 transition-colors">
                  Blogs & Insights
                </Link>
              </li>
              <li>
                <Link to="/free-consultation" className="text-slate-600 dark:text-slate-400 hover:text-sky-600 transition-colors">
                  Book an Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: SERVICES (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-4">
              SERVICES
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/services/web-development" className="text-slate-600 dark:text-slate-400 hover:text-sky-600 transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link to="/services/software-testing" className="text-slate-600 dark:text-slate-400 hover:text-sky-600 transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/free-consultation" className="text-slate-600 dark:text-slate-400 hover:text-sky-600 transition-colors">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link to="/services/whatsapp-automation" className="text-slate-600 dark:text-slate-400 hover:text-sky-600 transition-colors">
                  AI Automation
                </Link>
              </li>
              <li>
                <Link to="/service/packages" className="text-slate-600 dark:text-slate-400 hover:text-sky-600 transition-colors font-medium">
                  Personal Branding Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: CONTACT (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold tracking-widest text-slate-900 dark:text-white uppercase mb-4">
              CONTACT
            </h3>
            <div className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
              {/* <p>
                <a href="tel:+918770836725" className="hover:text-sky-600 transition-colors">
                  +91-8770836725
                </a>
              </p> */}
              <p>
                <a href="mailto:infp@provertoglobal.com" className="hover:text-sky-600 transition-colors">
                  info@provertoglobal.com
                </a>
              </p>
              <p>Metro Tower, City Center, Gwalior, India 474001</p>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://www.linkedin.com/company/proverto-global/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-sky-600 hover:text-sky-700 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.facebook.com/share/1C1bDHCeyA/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-sky-600 hover:text-sky-700 transition-colors"
                >
                  Facebook
                </a>
                 <a
                  href="https://www.instagram.com/provertoglobal?igsh=MThhYWZpZDEyaTY2Nw%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-sky-600 hover:text-sky-700 transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© 2026 Proverto Global Technologies Private Limited. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/refund-and-cancellation-policy" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Refund & Cancellation Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
