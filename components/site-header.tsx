"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { SiteImage } from "@/components/site-image";
import { SERVICES } from "@/lib/services";
import { motion, AnimatePresence } from "framer-motion";

type NavLink = {
  href: string;
  label: string;
  hasDropdown?: boolean;
};

const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Domov" },
  { href: "/stropy", label: "Stropy", hasDropdown: true },
  { href: "/galeria", label: "Galéria" },
  { href: "/cenova-ponuka", label: "Cenová ponuka" },
  { href: "/kontakt", label: "Kontakt" },
];

function isActive(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const trigger = window.innerHeight * 0.1;
      setScrolled(scrollY > trigger);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        setScrollProgress(0);
        return;
      }
      setScrollProgress((scrollY / docHeight) * 100);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navStyle = useMemo(() => {
    if (scrolled || mobileOpen) {
      return {
        backgroundColor: "rgba(54, 54, 80, 0.89)",
        backdropFilter: "blur(10px)",
      };
    }

    return {
      backgroundColor: "transparent",
      backdropFilter: "none",
    };
  }, [mobileOpen, scrolled]);

  return (
    <>
      <div className="scroll-progress">
        <div
          className="scroll-progress-bar"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      <nav className="navbar navbar-transparent" style={navStyle}>
        <div className="nav-container">
          <div className="nav-logo">
            <Link href="/" className="logo-link" aria-label="Stropy na mieru">
              <SiteImage
                src="/assets/images/logo.png"
                alt="Stropy na mieru"
                className="logo-image"
                width={884}
                height={541}
                priority
              />
            </Link>
          </div>

          <ul className="nav-menu">
            {NAV_LINKS.map((item) => (
              <li
                key={item.href}
                className={item.hasDropdown ? "has-dropdown" : ""}
                onMouseEnter={() => item.hasDropdown && setDesktopDropdownOpen(true)}
                onMouseLeave={() => item.hasDropdown && setDesktopDropdownOpen(false)}
              >
                <Link
                  href={item.href}
                  className={`nav-link ${isActive(pathname, item.href) ? "active" : ""}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <span className="dropdown-icon">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.5 4.5L6 8L9.5 4.5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  )}
                </Link>

                {item.hasDropdown && (
                  <AnimatePresence>
                    {desktopDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="nav-dropdown"
                      >
                        <ul className="dropdown-menu">
                          {SERVICES.map((service) => (
                            <li key={service.id}>
                              <Link
                                href={`/stropy/${service.slug}`}
                                className="dropdown-link"
                                onClick={() => setDesktopDropdownOpen(false)}
                              >
                                {service.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>

          <button
            type="button"
            className={`hamburger ${mobileOpen ? "active" : ""}`}
            aria-label="Otvoriť menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mobile-nav-blur-overlay"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="mobile-bottom-sheet"
            >
              <div className="sheet-handle" onClick={() => setMobileOpen(false)} />
              <div className="container">
                <div className="mobile-sheet-header">
                  <div className="nav-logo">
                    <Link href="/" className="logo-link" onClick={() => setMobileOpen(false)}>
                      <SiteImage
                        src="/assets/images/logo.png"
                        alt="Stropy na mieru"
                        className="logo-image"
                        width={884}
                        height={541}
                      />
                    </Link>
                  </div>
                  <button
                    className="mobile-close-btn"
                    onClick={() => setMobileOpen(false)}
                  >
                    &times;
                  </button>
                </div>

                <ul className="mobile-nav-menu">
                  {NAV_LINKS.map((item) => (
                    <li key={`mobile-${item.href}`}>
                      <Link
                        href={item.href}
                        className={`mobile-nav-link ${isActive(pathname, item.href) ? "active" : ""}`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                      {item.hasDropdown && (
                        <ul className="mobile-submenu">
                          {SERVICES.map((service) => (
                            <li key={`mob-serv-${service.id}`}>
                              <Link
                                href={`/stropy/${service.slug}`}
                                className="mobile-submenu-link"
                                onClick={() => setMobileOpen(false)}
                              >
                                {service.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

