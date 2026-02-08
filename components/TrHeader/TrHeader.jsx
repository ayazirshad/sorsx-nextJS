"use client";
import React, { useEffect, useRef, useState } from "react";
import "../Header/Header.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguageSwitcher } from "../../hooks/useLanguageSwitcher";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const headerRef = useRef(null);

  useEffect(() => {
    setOpenDropdown(null);
    setMenuOpen(false);
  }, [pathname]);

  const { setLanguage, checkLanguage } = useLanguageSwitcher();

  useEffect(() => {
    checkLanguage();
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", handleOutside);
    return () => document.removeEventListener("click", handleOutside);
  }, []);

  const toggleDropdown = (name, e) => {
    e.stopPropagation();
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <header
      ref={headerRef}
      className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}
    >
      <div className="nav-container">
        <div className="logo-wrapper">
          <Link href="/tr">
            <img
              src="/assets/index/SorsX-Logo-Black.png"
              alt="logo"
              className="logo"
            />
          </Link>
        </div>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`} id="mobileMenu">
          {/* ================= PLATFORM ================= */}
          <div
            className={`dropdown ${openDropdown === "platform" ? "open" : ""}`}
          >
            <button
              className="dropdown-toggle"
              onClick={(e) => toggleDropdown("platform", e)}
            >
              <p className="text-B2">Platform</p>
              <img
                src="/assets/index/drop_down_icon.png"
                alt="Toggle"
                className="dropdown-icon"
              />
            </button>

            <div className="dropdown-menu mega-menu">
              <div className="mega-menu-grid">
                <div className="mega-menu-column">
                  <Link href="/tr/sorsx_hire" className="mega-menu-item">
                    <img
                      src="/assets/index/nav_icons/scale hire.png"
                      alt="icon"
                      className="mega-menu-icon"
                    />
                    <div className="mega-menu-content">
                      <p className="text-B2 mega-menu-title">Scale Hire</p>
                      <p className="text-C1 mega-menu-desc">
                        Screen every applicant instantly
                      </p>
                    </div>
                  </Link>

                  <Link href="/tr/ai_interviewer" className="mega-menu-item">
                    <img
                      src="/assets/index/nav_icons/ai interviewer.png"
                      alt="icon"
                      className="mega-menu-icon"
                    />
                    <div className="mega-menu-content">
                      <p className="text-B2 mega-menu-title">AI Interviewer</p>
                      <p className="text-C1 mega-menu-desc">
                        Make interviews consistent everywhere
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ================= BUSINESS SIZE ================= */}
          <div
            className={`dropdown ${openDropdown === "business" ? "open" : ""}`}
          >
            <button
              className="dropdown-toggle"
              onClick={(e) => toggleDropdown("business", e)}
            >
              <p className="text-B2">Business Size</p>
              <img
                src="/assets/index/drop_down_icon.png"
                alt="Toggle"
                className="dropdown-icon"
              />
            </button>

            <div className="dropdown-menu mega-menu">
              <div className="mega-menu-grid">
                {/* <!-- Left Column --> */}
                <div className="mega-menu-column">
                  <Link
                    href="/tr/midsize_businesses"
                    className="mega-menu-item"
                  >
                    <img
                      src="/assets/index/nav_icons/midsize.png"
                      alt="icon"
                      className="mega-menu-icon"
                    />
                    <div className="mega-menu-content">
                      <p className="text-B2 mega-menu-title">
                        Midsize Businesses
                      </p>
                      <p className="text-C1 mega-menu-desc">
                        Scale hiring without chaos
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE CTA — FULLY KEPT */}
          <div className="cta-btn-mobile">
            <div className="dropdown choose-language">
              <button className="dropdown-toggle">
                <img
                  src="/assets/index/globe_01.png"
                  alt="globe"
                  className="dropdown-icon"
                />
                <p className="text-B2">Choose Language</p>
              </button>
              <div className="dropdown-menu mega-menu">
                <div className="mega-menu-grid">
                  <div className="mega-menu-column">
                    <button
                      className="choose-lang-button"
                      id="lang-eng-m"
                      onClick={() => setLanguage("en")}
                    >
                      <img
                        src="/assets/index/eng_flag.png"
                        alt="eng lang"
                        className="language-flag"
                      />
                      <p className="text-B2">ENG</p>
                    </button>
                    <button
                      className="choose-lang-button"
                      id="lang-tr-m"
                      onClick={() => setLanguage("tr")}
                    >
                      <img
                        src="/assets/index/tr_flag.png"
                        alt="tr lang"
                        className="language-flag"
                      />
                      <p className="text-B2">TR</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="https://employer.sorsx.com/login"
              target="_blank"
              rel="noopener noreferrer"
              title="Login"
              className="login-link"
            >
              Log In
            </Link>
            <Link href="/tr/demo_page_2" rel="noopener noreferrer">
              <button className="nav-button">Request a demo</button>
            </Link>
          </div>
        </nav>

        <div className="cta-btn-desktop">
          {/* <!-- <button className="dropdown-toggle">
            <img
              src="/assets/index/globe_01.png"
              alt="globe"
              className="dropdown-icon"
            />
          </button> --> */}
          <div
            className={`dropdown choose-language ${openDropdown === "chooseLang" ? "open" : ""}`}
          >
            <button
              className="dropdown-toggle"
              onClick={(e) => toggleDropdown("chooseLang", e)}
            >
              <img
                src="/assets/index/globe_01.png"
                alt="globe"
                className="dropdown-icon"
              />
            </button>
            <div className="dropdown-menu mega-menu">
              <div className="mega-menu-grid">
                <div className="mega-menu-column">
                  <button
                    className="choose-lang-button"
                    id="lang-eng"
                    onClick={() => setLanguage("en")}
                  >
                    <img
                      src="/assets/index/eng_flag.png"
                      alt="eng lang"
                      className="language-flag"
                    />
                    <p className="text-B2">ENG</p>
                  </button>
                  <button
                    className="choose-lang-button"
                    id="lang-tr"
                    onClick={() => setLanguage("tr")}
                  >
                    <img
                      src="/assets/index/tr_flag.png"
                      alt="tr lang"
                      className="language-flag"
                    />
                    <p className="text-B2">TR</p>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- login link  --> */}
          <Link
            href="https://employer.sorsx.com/login"
            target="_blank"
            rel="noopener noreferrer"
            title="Login"
            className="login-link"
          >
            Log In
          </Link>
          <Link href="/tr/demo_page_2" rel="noopener noreferrer">
            <button className="blue-button">Request a demo</button>
          </Link>
        </div>

        <button
          className="toggle-btn"
          id="menuToggleBtn"
          onClick={() => setMenuOpen((p) => !p)}
        >
          <img
            src={
              menuOpen ? "/assets/index/close.svg" : "/assets/index/menu.svg"
            }
            alt="Menu"
            id="menuIcon"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
