import React from "react";
import "./enterprise.css";
import FAQs from "@/components/FAQs/FAQs";

const Enterprise = () => {
  const faqs = [
    {
      question:
        "How does SorsX handle data privacy and security for enterprise?",
      answer:
        "SorsX follows industry-leading security practices and is designed with data privacy in mind. We support region-specific data requirements and can align with your internal policies and controls.",
    },
    {
      question: "Can SorsX integrate with our existing HRIS and ATS?",
      answer:
        "Yes. SorsX is often deployed as an AI interview and talent intelligence layer that integrates with enterprise HRIS and ATS systems, enhancing rather than replacing existing investments.",
    },
    {
      question: "How do we ensure the AI interviews are fair and unbiased?",
      answer:
        "We use structured question sets, consistent scoring frameworks, and ongoing monitoring to reduce bias. Enterprise clients can review and calibrate AI interview criteria to align with their internal guidelines.",
    },
    {
      question: "Is SorsX suitable for both corporate and frontline hiring?",
      answer:
        "Yes. The platform supports corporate, tech, and leadership roles as well as high-volume frontline positions, adapting interview questions and flows based on job family, level, and geography.",
    },
    {
      question: "What does rollout look like for a large organization?",
      answer:
        "Enterprise rollout typically starts with a pilot region or function, then scales. We partner with HR and TA leadership to design governance, training, and change management, ensuring adoption across recruiters and hiring managers.",
    },
  ];

  return (
    <>
      {/* <!-- hero  --> */}
      <section className="hero-section hospitality-hero padding-y">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="page-name-wrapper">
              <p className="page-name-text">Enterprise</p>
            </div>
            <h1 className="main-heading">
              <span className="highlight">Enterprise-Grade</span> AI Recruiting
              You Can Trust
            </h1>
            <p className="sub-text">
              SorsX is an AI recruiting platform and AI interview software
              designed for enterprise HR and talent teams, standardizing hiring
              across regions, reducing time-to-fill, and delivering audit-ready
              decisions at scale.
            </p>
            <div className="btn-wrapper">
              <a href="demo_page_2.html">
                <button className="blue-border-button">
                  <p>Request a demo</p>
                </button>
              </a>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img src="assets/enterprise/hero_img.png" alt="hospitality hero" />
          </div>
        </div>
      </section>

      {/* <!-- outreach section --> */}
      <section className="info-section outreach-section padding-y">
        <div className="container">
          <div className="info-content">
            <div className="page-name-text">Product Overview</div>
            <h3>Unify Global Hiring With One AI Recruiting Platform</h3>
            <p className="section-description">
              Stop managing different hiring processes in every region. SorsX
              centralizes AI sourcing, AI video interview workflows, scoring,
              and talent intelligence into a single, enterprise-ready platform,
              supporting multiple languages and markets.
            </p>
            <ul className="hero-bullets">
              <li className="bullet-item">
                <img
                  src="assets/enterprise/check_icon.svg"
                  alt="check"
                  className="bullet-icon"
                />
                <span className="text-T1">
                  Enterprise-ready AI interview software with global reach
                </span>
              </li>
              <li className="bullet-item">
                <img
                  src="assets/enterprise/check_icon.svg"
                  alt="check"
                  className="bullet-icon"
                />
                <span className="text-T1">
                  Standardized hiring without losing local nuance
                </span>
              </li>
              <li className="bullet-item">
                <img
                  src="assets/enterprise/check_icon.svg"
                  alt="check"
                  className="bullet-icon"
                />
                <span className="text-T1">
                  Configurable workflows and governance for complex
                  organizations
                </span>
              </li>
            </ul>
          </div>
          <div className="info-image">
            <img
              src="assets/enterprise/enterpriseProductoverview.png"
              alt="AI Hiring"
            />
          </div>
        </div>
      </section>

      {/* <!-- from job to shortlist section --> */}
      <section className="info-section shortlist-section padding-y">
        <div className="container">
          <div className="info-content">
            <div className="page-name-text">How It Works for Enterprise</div>
            <h3>Standardized, Compliant, and Scalable AI Interviews</h3>
            <p className="section-description">
              SorsX generates compliant job descriptions, structured AI
              interview questions, and consistent scoring rubrics for every
              role. AI interviews and evaluations are logged and auditable,
              giving HR, Legal, and business leaders confidence that enterprise
              hiring is fair, defensible, and repeatable.
            </p>
            <ul className="hero-bullets">
              <li className="bullet-item">
                <img
                  src="assets/enterprise/check_icon.svg"
                  alt="check"
                  className="bullet-icon"
                />
                <span className="text-T1">
                  AI interview tools that standardize evaluation across
                  countries and brands
                </span>
              </li>
              <li className="bullet-item">
                <img
                  src="assets/enterprise/check_icon.svg"
                  alt="check"
                  className="bullet-icon"
                />
                <span className="text-T1">
                  Detailed AI interview reports and scorecards for audit and
                  calibration
                </span>
              </li>
              <li className="bullet-item">
                <img
                  src="assets/enterprise/check_icon.svg"
                  alt="check"
                  className="bullet-icon"
                />
                <span className="text-T1">
                  Talent intelligence to compare internal and external
                  candidates globally
                </span>
              </li>
            </ul>
          </div>
          <div className="info-image">
            {/* <!-- TODO: have to change the image  --> */}
            <img src="assets/enterprise/unify_img.png" alt="AI Hiring" />
            <div className="svg_circle"></div>
          </div>
        </div>
      </section>

      {/* <!-- hospitality hiring section --> */}
      <section className="hiring-section padding-y">
        <div className="container">
          <div className="section-header text-center">
            <h3 className="hiring-title">Real Enterprise Impact At Scale.</h3>
          </div>

          <div className="hiring-grid">
            {/* <!-- time saved Card --> */}
            <div className="hiring-card">
              <div className="hiring-card-image">
                <img
                  src="assets/enterprise/enterpriseresult1.png"
                  alt="time saved"
                />
              </div>
              <div className="hiring-card-content">
                <h3 className="hiring-title">384%</h3>
                <h6>Potential ROI over three years</h6>
                <p className="text-T1">
                  Unified work platforms have delivered up to 384% ROI over
                  three years by consolidating tools and streamlining processes.
                  SorsX brings that level of impact to enterprise hiring by
                  replacing manual screening, fragmented interview tools, and
                  inconsistent evaluation with one AI recruiting platform.
                </p>
              </div>
            </div>

            {/* <!-- less time Card --> */}
            <div className="hiring-card">
              <div className="hiring-card-image">
                <img
                  src="assets/enterprise/enterpriseresult2.png"
                  alt="Less time spent"
                />
              </div>
              <div className="hiring-card-content">
                <h3 className="hiring-title">Millions</h3>
                <h6>In potential savings and revenue gains</h6>
                <p className="text-T1">
                  By reducing vacancy days, cutting reliance on agencies, and
                  speeding time-to-fill, SorsX helps enterprises unlock millions
                  in value, keeping critical roles filled and frontline
                  operations fully staffed.
                </p>
              </div>
            </div>

            {/* <!-- paltform Card --> */}
            <div className="hiring-card">
              <div className="hiring-card-image">
                <img
                  src="assets/enterprise/enterpriseresult3.png"
                  alt="platform"
                />
              </div>
              <div className="hiring-card-content">
                <h3 className="hiring-title">100%</h3>
                <h6>AI interviews logged and auditable</h6>
                <p className="text-T1">
                  Every AI interview, score, and decision factor is recorded,
                  giving you a transparent, consistent view of how candidates
                  are assessed, supporting internal policies, regulatory
                  expectations, and DEI commitments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* faqs */}
      <FAQs faqsData={faqs} />
    </>
  );
};

export default Enterprise;
