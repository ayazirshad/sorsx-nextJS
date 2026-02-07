import React from "react";
import "./tech.css";
import Slider from "@/components/Slider/Slider";
import Link from "next/link";

const Tech = () => {
  return (
    <div id="tech-page">
      {/* <!-- hero  --> */}
      <section className="hero-section hospitality-hero padding-y">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="page-name-wrapper">
              <p className="page-name-text">AI recruiting for tech</p>
            </div>
            <h1 className="main-heading">
              <span className="highlight">Ship Faster</span> With the Right
              <br />
              People in Every Seat
            </h1>
            <p className="sub-text">
              SorsX is an AI recruiting platform and AI interview software that
              helps tech teams hire engineers, product managers, and talent
              without drowning in unqualified applications.
            </p>
            <div className="btn-wrapper">
              <Link href="demo_page_2.html">
                <button className="blue-border-button">
                  <p>Request a demo</p>
                </button>
              </Link>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img src="assets/tech/hero_img.png" alt="hospitality hero" />
          </div>
        </div>
      </section>

      {/* <!-- slider  --> */}
      <Slider bgColor="black" />

      {/* <!-- outreach section --> */}
      <section className="outreach-section">
        <div className="container outreach-container">
          <div className="outreach-image">
            <img src="assets/tech/ai_hiring.png" alt="AI Hiring" />
          </div>
          <div className="outreach-content">
            <div className="page-name-text">
              Standardize interviews for complex roles
            </div>
            <h3 className="outreach-heading">
              AI Hiring Software That Understands Skills, Stacks, and Seniority
            </h3>
            <p className="outreach-description">
              Use AI video interviews and structured scoring to compare
              candidates fairly across teams, time zones, and seniority
              levels—without relying on gut feel alone.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- hospitality hiring section --> */}
      <section className="hiring-section padding-y">
        <div className="container">
          <div className="section-header text-center">
            <h3 className="hiring-title">
              Tech hiring that keeps up with product roadmaps
            </h3>
            <p className="text-T1">
              SorsX AI recruiting helps you build engineering, product, and
              go-to-market teams without slowing releases.
            </p>
          </div>

          <div className="hiring-grid">
            {/* <!-- Hotels Card --> */}
            <div className="hiring-card">
              <div className="hiring-card-image">
                <img src="assets/tech/saas.png" alt="SaaS" />
              </div>
              <div className="hiring-card-content">
                <h6>SaaS</h6>
                <p className="text-T1">
                  Hire SaaS engineers, PMs, and CS leaders who can scale
                  recurring revenue.
                </p>
              </div>
            </div>

            {/* <!-- Restaurants Card --> */}
            <div className="hiring-card">
              <div className="hiring-card-image">
                <img src="assets/tech/fintech.png" alt="Fintech" />
              </div>
              <div className="hiring-card-content">
                <h6>Fintech</h6>
                <p className="text-T1">
                  Screen fintech talent for security, compliance, and complex
                  financial-domain expertise.
                </p>
              </div>
            </div>

            {/* <!-- Resorts Card --> */}
            <div className="hiring-card">
              <div className="hiring-card-image">
                <img src="assets/tech/startups.png" alt="Startups" />
              </div>
              <div className="hiring-card-content">
                <h6>Startups</h6>
                <p className="text-T1">
                  Move from seed to growth with a lean, AI-augmented recruiting
                  engine.
                </p>
              </div>
            </div>

            {/* <!-- Events Card --> */}
            <div className="hiring-card">
              <div className="hiring-card-image">
                <img src="assets/tech/enterprise.png" alt="Enterprise" />
              </div>
              <div className="hiring-card-content">
                <h6>Enterprise</h6>
                <p className="text-T1">
                  Staff enterprise transformation teams across product, data,
                  security, and platform.
                </p>
              </div>
            </div>
          </div>

          <div className="hiring-cta flex-center mt-3">
            <Link href="demo_page_1.html">
              <button className="blue-button">See SorsX for Tech</button>
            </Link>
          </div>
        </div>
      </section>

      {/* <!-- tech teams section --> */}
      <section className="feature-section padding-y">
        <div className="container feature-container flex-between gap-4">
          <div className="feature-content">
            <div className="page-name-text">
              Hire faster, without lowering the bar
            </div>
            <h3 className="feature-heading">
              Give Your Tech Recruiting Team an AI Co-Pilot
            </h3>
            <p className="feature-description">
              SorsX automates resume review and AI interviews so your recruiting
              and engineering leaders spend time calibrating on top
              candidates—not manually screening long lists of profiles.
            </p>
          </div>
          <div className="feature-image">
            <img src="assets/tech/teams.png" alt="Tech Team" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tech;
