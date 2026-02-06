"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import Link from "next/link";

const Header = ({ isTrPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const headerRef = useRef(null);

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
          <a href="/">
            <img
              src="assets/index/SorsX-Logo-Black.png"
              alt="logo"
              className="logo"
            />
          </a>
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
                src="assets/index/drop_down_icon.png"
                alt="Toggle"
                className="dropdown-icon"
              />
            </button>

            <div className="dropdown-menu mega-menu">
              <div className="mega-menu-grid">
                <div className="mega-menu-column">
                  <a href="sorsx_ai.html" className="mega-menu-item">
                    <img
                      src="assets/index/nav_icons/sorsx ai.png"
                      alt="icon"
                      className="mega-menu-icon"
                    />
                    <div className="mega-menu-content">
                      <p className="text-B2 mega-menu-title">SorsX AI</p>
                      <p className="text-C1 mega-menu-desc">
                        Turn sourcing into autopilot
                      </p>
                    </div>
                  </a>

                  <a href="sorsx_next.html" className="mega-menu-item">
                    <img
                      src="assets/index/nav_icons/sorsx next.png"
                      alt="icon"
                      className="mega-menu-icon"
                    />
                    <div className="mega-menu-content">
                      <p className="text-B2 mega-menu-title">SorsX Next</p>
                      <p className="text-C1 mega-menu-desc">
                        Find hidden talent instantly
                      </p>
                    </div>
                  </a>

                  <a href="ai_ats_crm.html" className="mega-menu-item">
                    <img
                      src="assets/index/nav_icons/ai ats crm.png"
                      alt="icon"
                      className="mega-menu-icon"
                    />
                    <div className="mega-menu-content">
                      <p className="text-B2 mega-menu-title">AI ATS & CRM</p>
                      <p className="text-C1 mega-menu-desc">
                        Keep pipelines moving automatically
                      </p>
                    </div>
                  </a>
                </div>

                <div className="mega-menu-column">
                  <a href="sorsx_hire.html" className="mega-menu-item">
                    <img
                      src="assets/index/nav_icons/scale hire.png"
                      alt="icon"
                      className="mega-menu-icon"
                    />
                    <div className="mega-menu-content">
                      <p className="text-B2 mega-menu-title">Scale Hire</p>
                      <p className="text-C1 mega-menu-desc">
                        Screen every applicant instantly
                      </p>
                    </div>
                  </a>

                  <a href="ai_interviewer.html" className="mega-menu-item">
                    <img
                      src="assets/index/nav_icons/ai interviewer.png"
                      alt="icon"
                      className="mega-menu-icon"
                    />
                    <div className="mega-menu-content">
                      <p className="text-B2 mega-menu-title">AI Interviewer</p>
                      <p className="text-C1 mega-menu-desc">
                        Make interviews consistent everywhere
                      </p>
                    </div>
                  </a>

                  <a href="demo_page_1.html" className="mega-menu-item">
                    <img
                      src="assets/index/nav_icons/demo.png"
                      alt="icon"
                      className="mega-menu-icon"
                    />
                    <div className="mega-menu-content">
                      <p className="text-B2 mega-menu-title">Demo</p>
                      <p className="text-C1 mega-menu-desc">
                        See SorsX in action
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ================= INDUSTRIES ================= */}
          <div
            className={`dropdown ${openDropdown === "industries" ? "open" : ""}`}
          >
            <button
              className="dropdown-toggle"
              onClick={(e) => toggleDropdown("industries", e)}
            >
              <p className="text-B2">Industries</p>
              <img
                src="assets/index/drop_down_icon.png"
                alt="Toggle"
                className="dropdown-icon"
              />
            </button>

            <div className="dropdown-menu mega-menu">
              <div className="mega-menu-grid">
                {/* <!-- Left Column --> */}
                <div className="mega-menu-column">
                  <a href="hospitality.html" className="mega-menu-item">
                    <img
                      src="assets/index/nav_icons/hospitality.png"
                      alt="icon"
                      className="mega-menu-icon"
                    />
                    <div className="mega-menu-content">
                      <p className="text-B2 mega-menu-title">Hospitality</p>
                      <p className="text-C1 mega-menu-desc">
                        Fill shifts without delays
                      </p>
                    </div>
                  </a>
                  <a href="construction.html" className="mega-menu-item">
                    <img
                      src="assets/index/nav_icons/construction.png"
                      alt="icon"
                      className="mega-menu-icon"
                    />
                    <div className="mega-menu-content">
                      <p className="text-B2 mega-menu-title">Construction</p>
                      <p className="text-C1 mega-menu-desc">
                        Staff projects with confidence
                      </p>
                    </div>
                  </a>
                  <a href="tech.html" className="mega-menu-item">
                    <img
                      src="assets/index/nav_icons/tech.png"
                      alt="icon"
                      className="mega-menu-icon"
                    />
                    <div className="mega-menu-content">
                      <p className="text-B2 mega-menu-title">Tech</p>
                      <p className="text-C1 mega-menu-desc">
                        Validate skills, hire faster
                      </p>
                    </div>
                  </a>
                </div>

                {/* <!-- Right Column --> */}
                <div className="mega-menu-column">
                  <a href="manufacturing.html" className="mega-menu-item">
                    <img
                      src="assets/index/nav_icons/manufacturing.png"
                      alt="icon"
                      className="mega-menu-icon"
                    />
                    <div className="mega-menu-content">
                      <p className="text-B2 mega-menu-title">Manufacturing</p>
                      <p className="text-C1 mega-menu-desc">
                        Keep lines fully staffed
                      </p>
                    </div>
                  </a>
                  <a href="professional.html" className="mega-menu-item">
                    <img
                      src="assets/index/nav_icons/professional.png"
                      alt="icon"
                      className="mega-menu-icon"
                    />
                    <div className="mega-menu-content">
                      <p className="text-B2 mega-menu-title">
                        Professional Services
                      </p>
                      <p className="text-C1 mega-menu-desc">
                        Shortlist experts, not resumes
                      </p>
                    </div>
                  </a>
                  <a href="healthcare.html" className="mega-menu-item">
                    <img
                      src="assets/index/nav_icons/healthcare.png"
                      alt="icon"
                      className="mega-menu-icon"
                    />
                    <div className="mega-menu-content">
                      <p className="text-B2 mega-menu-title">Healthcare</p>
                      <p className="text-C1 mega-menu-desc">
                        Standardize hiring, reduce risk
                      </p>
                    </div>
                  </a>
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
                src="assets/index/drop_down_icon.png"
                alt="Toggle"
                className="dropdown-icon"
              />
            </button>

            <div className="dropdown-menu mega-menu">
              <div className="mega-menu-grid">
                {/* <!-- Left Column --> */}
                <div className="mega-menu-column">
                  <a href="small_businesses.html" className="mega-menu-item">
                    <img
                      src="assets/index/nav_icons/small.png"
                      alt="icon"
                      className="mega-menu-icon"
                    />
                    <div className="mega-menu-content">
                      <p className="text-B2 mega-menu-title">
                        Small businesses
                      </p>
                      <p className="text-C1 mega-menu-desc">
                        Hire fast, stay lean
                      </p>
                    </div>
                  </a>
                  <a href="midsize_businesses.html" className="mega-menu-item">
                    <img
                      src="assets/index/nav_icons/midsize.png"
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
                  </a>
                  <a href="enterprise.html" className="mega-menu-item">
                    <img
                      src="assets/index/nav_icons/enterprise.png"
                      alt="icon"
                      className="mega-menu-icon"
                    />
                    <div className="mega-menu-content">
                      <p className="text-B2 mega-menu-title">Enterprise</p>
                      <p className="text-C1 mega-menu-desc">
                        Standardize hiring across teams
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ================= COMPANY ================= */}
          <div
            className={`dropdown ${openDropdown === "company" ? "open" : ""}`}
          >
            <button
              className="dropdown-toggle"
              onClick={(e) => toggleDropdown("company", e)}
            >
              <p className="text-B2">Company</p>
              <img
                src="assets/index/drop_down_icon.png"
                alt="Toggle"
                className="dropdown-icon"
              />
            </button>

            <div className="dropdown-menu mega-menu">
              <div className="mega-menu-grid">
                {/* <!-- Left Column --> */}
                <div className="mega-menu-column">
                  {/* <!-- <a href="about_us.html" className="mega-menu-item">
                    <img
                      src="assets/index/nav_icons/about us.png"
                      alt="icon"
                      className="mega-menu-icon"
                    />
                    <div className="mega-menu-content">
                      <p className="text-B2 mega-menu-title">About Us</p>
                      <p className="text-C1 mega-menu-desc">Who we are.</p>
                    </div>
                  </a> --> */}
                  <a href="sorsx_blog.html" className="mega-menu-item">
                    <img
                      src="assets/index/nav_icons/newsroom.png"
                      alt="icon"
                      className="mega-menu-icon"
                    />
                    <div className="mega-menu-content">
                      <p className="text-B2 mega-menu-title">Newsroom</p>
                      <p className="text-C1 mega-menu-desc">See what’s new</p>
                    </div>
                  </a>
                  <a href="careers.html" className="mega-menu-item">
                    <img
                      src="assets/index/nav_icons/about us.png"
                      alt="icon"
                      className="mega-menu-icon"
                    />
                    <div className="mega-menu-content">
                      <p className="text-B2 mega-menu-title">Careers</p>
                      <p className="text-C1 mega-menu-desc">Build the future</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE CTA — FULLY KEPT */}
          <div className="cta-btn-mobile">
            <div className="dropdown choose-language">
              <button className="dropdown-toggle">
                <img
                  src="assets/index/globe_01.png"
                  alt="globe"
                  className="dropdown-icon"
                />
                <p className="text-B2">Choose Language</p>
              </button>
              <div className="dropdown-menu mega-menu">
                <div className="mega-menu-grid">
                  <div className="mega-menu-column">
                    <button className="choose-lang-button" id="lang-eng-m">
                      <img
                        src="assets/index/eng_flag.png"
                        alt="eng lang"
                        className="language-flag"
                      />
                      <p className="text-B2">ENG</p>
                    </button>
                    <button className="choose-lang-button" id="lang-tr-m">
                      <img
                        src="assets/index/tr_flag.png"
                        alt="tr lang"
                        className="language-flag"
                      />
                      <p className="text-B2">TR</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="https://employer.sorsx.com/login"
              target="_blank"
              rel="noopener noreferrer"
              title="Login"
              className="login-link"
            >
              Log In
            </a>
            <a href="demo_page_2.html" rel="noopener noreferrer">
              <button className="nav-button">Request a demo</button>
            </a>
          </div>
        </nav>

        <div className="cta-btn-desktop">
          {/* <!-- <button className="dropdown-toggle">
            <img
              src="assets/index/globe_01.png"
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
                src="assets/index/globe_01.png"
                alt="globe"
                className="dropdown-icon"
              />
            </button>
            <div className="dropdown-menu mega-menu">
              <div className="mega-menu-grid">
                <div className="mega-menu-column">
                  <button className="choose-lang-button" id="lang-eng">
                    <img
                      src="assets/index/eng_flag.png"
                      alt="eng lang"
                      className="language-flag"
                    />
                    <p className="text-B2">ENG</p>
                  </button>
                  <button className="choose-lang-button" id="lang-tr">
                    <img
                      src="assets/index/tr_flag.png"
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
          <a
            href="https://employer.sorsx.com/login"
            target="_blank"
            rel="noopener noreferrer"
            title="Login"
            className="login-link"
          >
            Log In
          </a>
          <a href="demo_page_2.html" rel="noopener noreferrer">
            <button className="blue-button">Request a demo</button>
          </a>
        </div>

        <button
          className="toggle-btn"
          id="menuToggleBtn"
          onClick={() => setMenuOpen((p) => !p)}
        >
          <img
            src={menuOpen ? "assets/index/close.svg" : "assets/index/menu.svg"}
            alt="Menu"
            id="menuIcon"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
