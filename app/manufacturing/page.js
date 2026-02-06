import Slider from "@/components/Slider/Slider";
import React from "react";
import "./manufacturing.css";
import Link from "next/link";

const Manufacturing = () => {
  return (
    <div id="manufacturing-page">
      {/* <!-- hero  --> */}
      <section className="hero-section hospitality-hero padding-y">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="page-name-wrapper">
              <p className="page-name-text">AI recruiting for manufacturing</p>
            </div>
            <h1 className="main-heading">
              <span className="highlight">Keep Lines Running</span> With the
              <br />
              Right People on Every Shift
            </h1>
            <p className="sub-text">
              SorsX is an AI hiring platform and AI interview software that
              helps manufacturing plants staff operators, technicians, and
              supervisors while maintaining safety and quality standards.
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
            <img
              src="assets/manufacturing/hero_img.png"
              alt="hospitality hero"
            />
          </div>
        </div>
      </section>

      {/* <!-- slider  --> */}
      <Slider />

      {/* <!-- outreach section --> */}
      <section className="outreach-section">
        <div className="container outreach-container">
          <div className="outreach-image">
            <img src="assets/manufacturing/ai_hiring.png" alt="AI Hiring" />
          </div>
          <div className="outreach-content">
            <div className="page-name-text">
              Screen skills before candidates reach the plant
            </div>
            <h3 className="outreach-heading">
              AI Interview Software Built for Skilled and Semi-Skilled Roles
            </h3>
            <p className="outreach-description">
              Use AI video interviews to assess reliability, basic technical
              skills, and shift fit before candidates step onto the
              floor—reducing turnover and training waste.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- hospitality hiring section --> */}
      <section className="hiring-section padding-y">
        <div className="container">
          <div className="section-header text-center">
            <h3 className="hiring-title">
              Manufacturing hiring for every part of your operation
            </h3>
            <p className="text-T1">
              SorsX AI recruiting helps you staff production, maintenance,
              logistics, and quality roles without constant fire drills.
            </p>
          </div>

          <div className="hiring-grid">
            {/* <!-- Restaurants Card --> */}
            <div className="hiring-card">
              <div className="hiring-card-image">
                <img
                  src="assets/manufacturing/automotive.png"
                  alt="automotive"
                />
              </div>
              <div className="hiring-card-content">
                <h6>Automotive</h6>
                <p className="text-T1">
                  Keep automotive production lines staffed with vetted
                  operators, assemblers, and supervisors.
                </p>
              </div>
            </div>

            {/* <!-- Resorts Card --> */}
            <div className="hiring-card">
              <div className="hiring-card-image">
                <img src="assets/manufacturing/food.png" alt="food" />
              </div>
              <div className="hiring-card-content">
                <h6>Food</h6>
                <p className="text-T1">
                  Hire food manufacturing staff who understand hygiene,
                  compliance, and time-critical operations.
                </p>
              </div>
            </div>

            {/* <!-- Events Card --> */}
            <div className="hiring-card">
              <div className="hiring-card-image">
                <img
                  src="assets/manufacturing/electronics.png"
                  alt="electronics"
                />
              </div>
              <div className="hiring-card-content">
                <h6>Electronics</h6>
                <p className="text-T1">
                  Source electronics assemblers and technicians with consistent
                  AI skill screening.
                </p>
              </div>
            </div>

            {/* <!-- logistic card  --> */}
            <div className="hiring-card">
              <div className="hiring-card-image">
                <img src="assets/manufacturing/logistics.png" alt="logistics" />
              </div>
              <div className="hiring-card-content">
                <h6>Logistics</h6>
                <p className="text-T1">
                  Staff warehouses and logistics hubs without sacrificing speed
                  or candidate quality.
                </p>
              </div>
            </div>
          </div>

          <div className="hiring-cta flex-center mt-3">
            <Link href="demo_page_1.html">
              <button className="blue-button">
                See SorsX for Manufacturing
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* <!-- construction teams section --> */}
      <section className="feature-section padding-y">
        <div className="container feature-container flex-between gap-4">
          <div className="feature-content">
            <div className="page-name-text">
              From constant shortages to stable staffing
            </div>
            <h3 className="feature-heading">
              Support Your Manufacturing Teams With an Always-On AI Recruiter
            </h3>
            <p className="feature-description">
              SorsX automates screening and AI interviews so you can keep shifts
              fully staffed, reduce overtime, and protect throughput, even when
              demand or labor markets are unpredictable.
            </p>
          </div>
          <div className="feature-image">
            <img
              src="assets/manufacturing/teams.png"
              alt="manufacturing Team"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;
