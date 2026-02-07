"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "./homePage.css";
import { useState } from "react";
import Slider from "@/components/Slider/Slider";
import Link from "next/link";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardClick = (index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };
  return (
    <div id="home-page">
      {/* <!-- hero  --> */}
      <section className="hero-section hospitality-hero padding-y">
        <div className="container hero-grid">
          <div className="hero-content">
            <h1 className="main-heading">
              <span className="highlight">AI Recruiting</span> Platform That
              Keeps You in Control
            </h1>
            <p className="sub-text">
              SorsX is an AI-powered recruitment automation software that
              screens, interviews, and shortlists candidates automatically,
              helping companies reduce hiring costs and time to hire by up to
              85%.
            </p>
            <div className="btn-wrapper">
              <Link href="/demo_page_2">
                <button className="blue-border-button">
                  <p>Request a demo</p>
                </button>
              </Link>
            </div>
            <div className="hero-trust-logos">
              <img src="assets/index/capterra.png" alt="Capterra" />
              <img
                src="assets/index/software-advice.png"
                alt="Software Advice"
              />
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img src="assets/index/Dashboard.png" alt="hospitality hero" />
          </div>
        </div>
      </section>

      {/* <!-- slider  --> */}
      <Slider bgColor="black" />

      {/* <!-- ai recruiting section --> */}
      <section className="info-section shortlist-section padding-y">
        <div className="container">
          <div className="info-content">
            <h3>What is AI recruiting Software?</h3>
            <p className="section-description">
              AI recruitment software uses automation and machine learning to
              help hiring teams source candidates, screen applicants, and run
              structured interviews faster and more consistently. SorsX combines
              <strong>
                recruitment automation software, AI interview software,
              </strong>
              and talent intelligence to help teams scale hiring without
              sacrificing quality.
            </p>
          </div>
          <div className="info-image">
            <img src="assets/index/sorsx-graph.png" alt="sorsx-grapgh" />
            <div className="svg_circle"></div>
          </div>
        </div>
      </section>

      {/* <!-- industry hiring section --> */}
      <section className="industry-hiring-section padding-y">
        <div className="container">
          <div className="industry-header">
            <div className="header-left">
              <h3 className="industry-main-title">
                AI Recruiting Software for the Way Your Industry Hires
              </h3>
              <p className="industry-sub-title">
                SorsX adapts its AI recruitment software and AI interview
                workflows to the realities of each industry, from seasonal
                frontline hiring to highly skilled technical and clinical roles.
              </p>
            </div>
            <div className="header-right">
              <Link href="/demo_page_1">
                <button className="white-button">Learn More</button>
              </Link>
            </div>
          </div>

          <div className="industry-cards-container">
            {/* TECHNOLOGY */}
            <div
              className={`industry-card ${activeIndex === 0 ? "active" : ""}`}
              data-industry="technology"
              onClick={() => handleCardClick(0)}
            >
              <div
                className="card-bg"
                style={{
                  backgroundImage: "url('assets/index/technology_pr_img.png')",
                }}
              ></div>

              <div className="card-overlay">
                <h5 className="card-title">Technology</h5>
                <div className="overlay-info">
                  <div className="info">
                    <p className="hire-smarter">Hire smarter for:</p>
                    <ul className="industry-bullets">
                      <Link href="/tech">
                        <li className="bullet-item">
                          <span>SaaS</span>
                          <img
                            src="assets/index/arrow-right-02.png"
                            alt=""
                            className="arrow-icon"
                          />
                        </li>
                      </Link>
                      <Link href="/tech">
                        <li className="bullet-item">
                          <span>Fintech</span>
                          <img
                            src="assets/index/arrow-right-02.png"
                            alt=""
                            className="arrow-icon"
                          />
                        </li>
                      </Link>
                      <Link href="/tech">
                        <li className="bullet-item">
                          <span>Startups</span>
                          <img
                            src="assets/index/arrow-right-02.png"
                            alt=""
                            className="arrow-icon"
                          />
                        </li>
                      </Link>
                      <Link href="/tech">
                        <li className="bullet-item">
                          <span>Enterprise</span>
                          <img
                            src="assets/index/arrow-right-02.png"
                            alt=""
                            className="arrow-icon"
                          />
                        </li>
                      </Link>
                    </ul>
                  </div>

                  <div className="detail-card">
                    <div className="detail-logos">
                      <img
                        src="assets/index/CloudAITechnologies.png"
                        alt="Cloud AI Technologies"
                        className="card-logo-1"
                      />
                      <img
                        src="assets/index/waditek.png"
                        alt="waditek"
                        className="card-logo-2"
                      />
                    </div>
                    <p className="text-T1">
                      AI recruitment software for technology teams that need to
                      fill engineering, product, and IT roles fast. SorsX
                      screens every applicant using AI interview software and
                      surfaces talent that matches your stack, seniority, and
                      culture.
                    </p>
                  </div>
                </div>
              </div>
              <div className="plus-btn">
                <span>+</span>
              </div>
            </div>

            {/* MANUFACTURING */}
            <div
              className={`industry-card ${activeIndex === 1 ? "active" : ""}`}
              data-industry="manufacturing"
              onClick={() => handleCardClick(1)}
            >
              <div
                className="card-bg"
                style={{
                  backgroundImage:
                    "url('assets/index/manufacturing_pr_img.png')",
                }}
              ></div>

              <div className="card-overlay">
                <h5 className="card-title">Manufacturing</h5>
                <div className="overlay-info">
                  <div className="info">
                    <ul className="industry-bullets">
                      <Link href="/manufacturing">
                        <li className="bullet-item">
                          <span>Automotive</span>
                          <img
                            src="assets/index/arrow-right-02.png"
                            alt=""
                            className="arrow-icon"
                          />
                        </li>
                      </Link>
                      <Link href="/manufacturing">
                        <li className="bullet-item">
                          <span>Food</span>
                          <img
                            src="assets/index/arrow-right-02.png"
                            alt=""
                            className="arrow-icon"
                          />
                        </li>
                      </Link>
                      <Link href="/manufacturing">
                        <li className="bullet-item">
                          <span>Electronics</span>
                          <img
                            src="assets/index/arrow-right-02.png"
                            alt=""
                            className="arrow-icon"
                          />
                        </li>
                      </Link>
                      <Link href="/manufacturing">
                        <li className="bullet-item">
                          <span>Logistics</span>
                          <img
                            src="assets/index/arrow-right-02.png"
                            alt=""
                            className="arrow-icon"
                          />
                        </li>
                      </Link>
                    </ul>
                  </div>

                  <div className="detail-card">
                    <div className="detail-logos">
                      <img src="assets/index/detail-logo-2.png" alt="logo" />
                    </div>
                    <p className="text-T1">
                      AI recruiting software for manufacturing companies that
                      can’t afford empty shifts. Automatically screen operators,
                      technicians, and supervisors using recruitment automation
                      software, then deliver hire-ready candidates to managers
                      in minutes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="plus-btn">
                <span>+</span>
              </div>
            </div>

            {/* HOSPITALITY */}
            <div
              className={`industry-card ${activeIndex === 2 ? "active" : ""}`}
              data-industry="hospitality"
              onClick={() => handleCardClick(2)}
            >
              <div
                className="card-bg"
                style={{
                  backgroundImage: "url('assets/index/hospitality_pr_img.png')",
                }}
              ></div>

              <div className="card-overlay">
                <h5 className="card-title">Hospitality</h5>
                <div className="overlay-info">
                  <div className="info">
                    <ul className="industry-bullets">
                      <Link href="/hospitality">
                        <li className="bullet-item">
                          <span>Hotels</span>
                          <img
                            src="assets/index/arrow-right-02.png"
                            alt="arrow"
                            className="arrow-icon"
                          />
                        </li>
                      </Link>
                      <Link href="/hospitality">
                        <li className="bullet-item">
                          <span>Restaurants</span>
                          <img
                            src="assets/index/arrow-right-02.png"
                            alt="arrow"
                            className="arrow-icon"
                          />
                        </li>
                      </Link>
                      <Link href="/hospitality">
                        <li className="bullet-item">
                          <span>Resorts</span>
                          <img
                            src="assets/index/arrow-right-02.png"
                            alt="arrow"
                            className="arrow-icon"
                          />
                        </li>
                      </Link>
                      <Link href="/hospitality">
                        <li className="bullet-item">
                          <span>Events</span>
                          <img
                            src="assets/index/arrow-right-02.png"
                            alt="arrow"
                            className="arrow-icon"
                          />
                        </li>
                      </Link>
                    </ul>
                  </div>

                  <div className="detail-card">
                    <div className="detail-logos">
                      <img src="assets/index/detail-logo-3.png" alt="logo" />
                    </div>
                    <p className="text-T1">
                      AI hiring software for hospitality organizations facing
                      seasonal spikes and high turnover. Run AI video interviews
                      around the clock and build a ready-to-hire bench before
                      peak season begins.
                    </p>
                  </div>
                </div>
              </div>
              <div className="plus-btn">
                <span>+</span>
              </div>
            </div>

            {/* TELECOM */}
            <div
              className={`industry-card ${activeIndex === 3 ? "active" : ""}`}
              data-industry="telecom"
              onClick={() => handleCardClick(3)}
            >
              <div
                className="card-bg"
                style={{
                  backgroundImage: "url('assets/index/telecom_pr_img.png')",
                }}
              ></div>

              <div className="card-overlay">
                <h5 className="card-title">Telecom</h5>
                <div className="overlay-info">
                  <div className="info">
                    <ul className="industry-bullets">
                      <Link href="/construction">
                        <li className="bullet-item">
                          <span>Commercial</span>
                          <img
                            src="assets/index/arrow-right-02.png"
                            alt="arrow"
                            className="arrow-icon"
                          />
                        </li>
                      </Link>
                      <Link href="/construction">
                        <li className="bullet-item">
                          <span>Residential</span>
                          <img
                            src="assets/index/arrow-right-02.png"
                            alt="arrow"
                            className="arrow-icon"
                          />
                        </li>
                      </Link>
                      <Link href="/construction">
                        <li className="bullet-item">
                          <span>Infrastructure</span>
                          <img
                            src="assets/index/arrow-right-02.png"
                            alt="arrow"
                            className="arrow-icon"
                          />
                        </li>
                      </Link>
                      <Link href="/construction">
                        <li className="bullet-item">
                          <span>Industrial</span>
                          <img
                            src="assets/index/arrow-right-02.png"
                            alt="arrow"
                            className="arrow-icon"
                          />
                        </li>
                      </Link>
                    </ul>
                  </div>

                  <div className="detail-card">
                    <div className="detail-logos">
                      <img
                        src="assets/index/detail-logo-4.png"
                        alt="logo"
                        className="mimeda"
                      />
                    </div>
                    <p className="text-T1">
                      AI hiring for telecom providers needing field technicians,
                      network experts, and support staff. SorsX balances
                      technical know-how, compliance, and customer experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="plus-btn">
                <span>+</span>
              </div>
            </div>

            {/* HEALTHCARE */}
            <div
              className={`industry-card ${activeIndex === 4 ? "active" : ""}`}
              data-industry="healthcare"
              onClick={() => handleCardClick(4)}
            >
              <div
                className="card-bg"
                style={{
                  backgroundImage: "url('assets/index/healthcare_pr_img.png')",
                }}
              ></div>

              <div className="card-overlay">
                <h5 className="card-title">Healthcare</h5>
                <div className="overlay-info">
                  <div className="info">
                    <ul className="industry-bullets">
                      <Link href="/healthcare">
                        <li className="bullet-item">
                          <span>Hospitals</span>
                          <img
                            src="assets/index/arrow-right-02.png"
                            alt="arrow"
                            className="arrow-icon"
                          />
                        </li>
                      </Link>
                      <Link href="/healthcare">
                        <li className="bullet-item">
                          <span>Clinics</span>
                          <img
                            src="assets/index/arrow-right-02.png"
                            alt="arrow"
                            className="arrow-icon"
                          />
                        </li>
                      </Link>
                      <Link href="/healthcare">
                        <li className="bullet-item">
                          <span>Long-Term</span>
                          <img
                            src="assets/index/arrow-right-02.png"
                            alt="arrow"
                            className="arrow-icon"
                          />
                        </li>
                      </Link>
                      <Link href="/healthcare">
                        <li className="bullet-item">
                          <span>Admin</span>
                          <img
                            src="assets/index/arrow-right-02.png"
                            alt="arrow"
                            className="arrow-icon"
                          />
                        </li>
                      </Link>
                    </ul>
                  </div>

                  <div className="detail-card">
                    <div className="detail-logos">
                      <img
                        src="assets/index/detail-logo-5.png"
                        alt="logo"
                        className="proje"
                      />
                    </div>
                    <p className="text-T1">
                      AI recruitment software designed for healthcare compliance
                      and patient care. SorsX standardizes AI video interviews
                      for clinical and non-clinical roles at scale.
                    </p>
                  </div>
                </div>
              </div>
              <div className="plus-btn">
                <span>+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- platform overview section --> */}
      <section className="platform-overview-section padding-y">
        <div className="container platform-container">
          <div className="platform-intro">
            <h3 className="platform-main-title">
              One AI Recruitment Platform. Multiple Ways to Hire Smarter.
            </h3>
            <p className="text-T1">
              SorsX unifies autonomous sourcing, AI interview software, AI video
              interviews, and talent intelligence into a single AI hiring
              platform for modern HR and recruiting teams.
            </p>
            <div className="btn-wrapper">
              <Link href="/demo_page_1">
                <button className="blue-border-button">
                  <p>Request a demo</p>
                </button>
              </Link>
            </div>
          </div>

          <div className="platform-grid">
            <div className="platform-card">
              <div className="card-header">
                <div className="icon-wrapper">
                  <img
                    src="assets/index/artificial-intelligence-04.svg"
                    alt="icon"
                  />
                </div>
                <div>
                  <h5>SorsX AI</h5>
                  <p className="card-desc text-B1">
                    Autonomous AI recruiting agents for passive talent
                  </p>
                </div>
              </div>
              <ul className="card-features">
                <li>
                  <div className="check-circle">
                    <img src="assets/index/check_icon.svg" alt="check" />
                  </div>
                  <span className="text-B2">
                    AI recruiting platform that goes beyond keyword search and
                    filters
                  </span>
                </li>
                <li>
                  <div className="check-circle">
                    <img src="assets/index/check_icon.svg" alt="check" />
                  </div>
                  <span className="text-B2">
                    Autonomous sourcing, engagement & interviewing of passive
                    candidates
                  </span>
                </li>
                <li>
                  <div className="check-circle">
                    <img src="assets/index/check_icon.svg" alt="check" />
                  </div>
                  <span className="text-B2">
                    Delivers a small slate of hire-ready candidates for every
                    critical role
                  </span>
                </li>
              </ul>
              <Link href="/sorsx_ai" className="learn-more text-T1">
                Learn more
                <img src="assets/index/arrow-right-dark.svg" alt="arrow" />
              </Link>
            </div>

            <div className="platform-card">
              <div className="card-header">
                <div className="icon-wrapper">
                  <img src="assets/index/user-search-01.svg" alt="icon" />
                </div>
                <div>
                  <h5>Scale Hire</h5>
                  <p className="card-desc text-B2">
                    AI hiring software for every applicant who applies
                  </p>
                </div>
              </div>
              <ul className="card-features">
                <li>
                  <div className="check-circle">
                    <img src="assets/index/check_icon.svg" alt="check" />
                  </div>
                  <span className="text-B2">
                    Auto-generates role-specific, inclusive job descriptions and
                    AI interview questions
                  </span>
                </li>
                <li>
                  <div className="check-circle">
                    <img src="assets/index/check_icon.svg" alt="check" />
                  </div>
                  <span className="text-B2">
                    Uses AI interview software to screen 100% of applicants with
                    standardized video interviews
                  </span>
                </li>
                <li>
                  <div className="check-circle">
                    <img src="assets/index/check_icon.svg" alt="check" />
                  </div>
                  <span className="text-B2">
                    Automates candidate outreach and scheduling so applicants
                    can interview fast
                  </span>
                </li>
              </ul>
              <Link href="/sorsx_hire" className="learn-more text-T1">
                Learn more
                <img src="assets/index/arrow-right-dark.svg" alt="arrow" />
              </Link>
            </div>

            <div className="platform-card">
              <div className="card-header">
                <div className="icon-wrapper">
                  <img src="assets/index/ai-video.svg" alt="icon" />
                </div>
                <div>
                  <h5>AI Video Interviewer</h5>
                  <p className="card-desc text-B1">
                    AI video interview software for any role, anywhere
                  </p>
                </div>
              </div>
              <ul className="card-features">
                <li>
                  <div className="check-circle">
                    <img src="assets/index/check_icon.svg" alt="check" />
                  </div>
                  <span className="text-B2">
                    AI video interviews on desktop and mobile, available 24/7
                    for candidates
                  </span>
                </li>
                <li>
                  <div className="check-circle">
                    <img src="assets/index/check_icon.svg" alt="check" />
                  </div>
                  <span className="text-B2">
                    AI interview questions generator aligned to each job
                    description and skill profile
                  </span>
                </li>
                <li>
                  <div className="check-circle">
                    <img src="assets/index/check_icon.svg" alt="check" />
                  </div>
                  <span className="text-B2">
                    Objective, consistent scoring that reduces bias and makes
                    shortlists easy to compare
                  </span>
                </li>
              </ul>
              <Link href="/ai_interviewer" className="learn-more text-T1">
                Learn more
                <img src="assets/index/arrow-right-dark.svg" alt="arrow" />
              </Link>
            </div>

            <div className="platform-card">
              <div className="card-header">
                <div className="icon-wrapper">
                  <img src="assets/index/chat-spark-01.svg" alt="icon" />
                </div>
                <div>
                  <h5>SorsX Next</h5>
                  <p className="card-desc text-B1">
                    Chat-based talent intelligence for your hiring ecosystem
                  </p>
                </div>
              </div>
              <ul className="card-features">
                <li>
                  <div className="check-circle">
                    <img src="assets/index/check_icon.svg" alt="check" />
                  </div>
                  <span className="text-B2">
                    Ask natural-language questions about your candidates, roles,
                    and pipelines
                  </span>
                </li>
                <li>
                  <div className="check-circle">
                    <img src="assets/index/check_icon.svg" alt="check" />
                  </div>
                  <span className="text-B2">
                    Instantly compare candidates by skills, experience, and AI
                    interview performance
                  </span>
                </li>
                <li>
                  <div className="check-circle">
                    <img src="assets/index/check_icon.svg" alt="check" />
                  </div>
                  <span className="text-B2">
                    Acts as an AI interview assistant and recruiting copilot for
                    HR and hiring leaders
                  </span>
                </li>
              </ul>
              <Link href="/sorsx_next" className="learn-more text-T1">
                Learn more
                <img src="assets/index/arrow-right-dark.svg" alt="arrow" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- recruitment platform --> */}
      <section className="recruitment-plaftform padding-y">
        <div className="container feedback-header">
          <div className="feedback-text-content">
            <h3 className="section-heading">
              The Recruitment Platform teams trust, worldwide.
            </h3>
            <p className="text-T1">
              How CHROs and talent acquisition teams use our AI recruiting
              platform and AI interviewer to transform hiring.
            </p>
          </div>
          <div className="trust-logos">
            <img src="assets/index/capterra.png" alt="Capterra" />
            <img src="assets/index/software-advice.png" alt="Software Advice" />
          </div>
        </div>

        <div className="container">
          <div className="t-grid">
            {/* <!-- Card 1 --> */}
            <article className="t-card">
              <img
                src="assets/index/ceo.png"
                alt="CEO Background"
                className="t-card-img"
              />
              <div className="t-glass">
                <p className="t-quote">
                  It has truly been a game-changer in expediting screening and
                  first interviews. It captures exactly what we need to make
                  informed decisions.
                </p>

                <div className="t-meta">
                  <div>
                    <div className="t-name">Violet Herin</div>
                    <div className="t-role">CEO, Projé Inc.</div>
                  </div>
                  <div className="t-logo">
                    <img src="assets/index/proje.png" alt="proje" />
                  </div>
                </div>
              </div>
            </article>

            {/* <!-- Card 2 --> */}
            <article className="t-card">
              <img
                src="assets/index/hod.png"
                alt="HOD Background"
                className="t-card-img"
              />
              <div className="t-glass t-glass--red">
                <p className="t-quote">
                  SorsX AI recruiting automated pre-screening and AI interviews,
                  accelerating hiring while improving structured, defensible
                  hiring decisions.
                </p>

                <div className="t-meta">
                  <div>
                    <div className="t-name">Canan Berkem Uzun</div>
                    <div className="t-role">
                      Head of Marketing TADO, Duracell Inc.
                    </div>
                  </div>
                  <div className="t-logo">
                    <img src="assets/index/Duracell.png" alt="Duracell" />
                  </div>
                </div>
              </div>
            </article>

            {/* <!-- Card 3 --> */}
            <article className="t-card">
              <img
                src="assets/index/ceo-2.png"
                alt="CEO 2 Background"
                className="t-card-img"
              />
              <div className="t-glass">
                <p className="t-quote">
                  Across our restaurants, SorsX AI recruiting streamlined
                  high-volume hiring with AI interviews, giving managers more
                  time for customers.
                </p>

                <div className="t-meta">
                  <div>
                    <div className="t-name">Sabbir Husain</div>
                    <div className="t-role">CEO, Husain Hungry Howies</div>
                  </div>
                  <img src="assets/index/hungry.png" alt="hungry" />
                </div>
              </div>
            </article>

            {/* <!-- Card 4 --> */}
            <article className="t-card">
              <img
                src="assets/index/cm.png"
                alt="CM Background"
                className="t-card-img"
              />
              <div className="t-glass t-glass--light">
                <p className="t-quote">
                  SorsX AI recruitment software automated screening and AI video
                  interviews, delivering standardized evaluations and
                  decision-ready shortlists fast.
                </p>

                <div className="t-meta">
                  <div>
                    <div className="t-name">Sevda Canbaz</div>
                    <div className="t-role">
                      People and Culture Manager, Dalgakıran Kompresör
                    </div>
                  </div>
                  <div className="t-logo">
                    <img src="assets/index/Dalgakiran.png" alt="Dalgakiran" />
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* <!-- proven ai recruiting --> */}
      <section className="proven-ai-recruiting padding-y">
        <div className="container">
          <div className="roi__top">
            <div className="roi__heading">
              <h2>Proven AI Recruiting ROI You Can Measure</h2>
              <p>
                SorsX turns AI recruiting and AI interviews into measurable
                business impact, reclaiming recruiter hours, consolidating
                tools, and filling roles faster across every department.
              </p>
            </div>

            <div className="btn-wrapper">
              <Link href="/demo_page_1">
                <button className="blue-border-button">
                  <p>Learn more</p>
                </button>
              </Link>
            </div>
          </div>

          <div className="roi__divider"></div>

          <div className="roi__grid">
            {/* <!-- Card 1 --> */}
            <article className="roi__card">
              <div className="roi__mini">ROI (%)</div>
              <h5>Up to 100%</h5>
              <p className="text-T1">
                Measure the true return on your AI hiring platform. Teams that
                streamline work, consolidate tools, and scale faster with
                unified platforms have seen ROI gains as high as 384% over three
                years. SorsX brings that same compounding impact to your
                recruiting engine by automating the most time-consuming steps in
                the hiring funnel.
              </p>
            </article>

            {/* <!-- Card 2 --> */}
            <article className="roi__card">
              <div className="roi__mini">Hours Saved</div>
              <h5>2h 10m Per Candidate</h5>
              <p className="text-T1">
                SorsX saves an average of 2 hours and 10 minutes per candidate
                by automating resume review, first-round screening, and AI video
                interviews. Across hundreds or thousands of applicants, that’s
                hundreds of recruiter hours reclaimed each quarter for strategy,
                stakeholder partnerships, and workforce planning.
              </p>
            </article>

            {/* <!-- Card 3 --> */}
            <article className="roi__card">
              <div className="roi__mini">$ Saved</div>
              <h5>Multi-Million Dollar Gains</h5>
              <p className="text-T1">
                By reducing time-to-fill, lowering agency dependence, and
                avoiding costly mis-hires, SorsX turns efficiency into real
                financial gains. Similar to how unified work platforms have
                driven millions in additional revenue by streamlining
                operations, your AI recruiting platform cuts vacancy costs,
                overtime, and wasted interview cycles.
              </p>
            </article>

            {/* <!-- Card 4 --> */}
            <article className="roi__card">
              <div className="roi__mini">Time to Fill</div>
              <h5>50%+ Reduction</h5>
              <p className="text-T1">
                Move from weeks of back-and-forth to hire-ready shortlists you
                can review in minutes. SorsX compresses the lag between
                application, screening, and interviews so you can fill critical
                roles faster and capture the revenue, service quality, and
                productivity they enable.
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
