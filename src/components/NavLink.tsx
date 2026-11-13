import { useLocation, useNavigate } from "react-router-dom";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  onClick?: () => void;
}

const NavLink = ({
  href,
  children,
  className = "",
  activeClassName,
  onClick,
}: NavLinkProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const isActive = location.pathname === href;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (onClick) {
      onClick();
    }

    if (href.startsWith("#")) {
      if (isHomePage) {
        // On home page, just scroll to section
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // On other pages, navigate to home with hash
        window.location.href = "/" + href;
      }
    } else if (href.startsWith("/")) {
      if (href === "/" && isHomePage) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate(href);
      }
    } else {
      navigate(href);
    }
  };

  const defaultActive = "text-sky-600 font-semibold";
  const activeStyle = isActive
    ? activeClassName !== undefined
      ? activeClassName
      : defaultActive
    : "";

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${className} ${activeStyle}`}
    >
      {children}
    </a>
  );
};

export default NavLink;
