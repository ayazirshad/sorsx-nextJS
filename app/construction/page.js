import React from "react";
import "./construction.css";
import Slider from "@/components/Slider/Slider";
import Link from "next/link";

const Construction = () => {
  return (
    <div id="construction-page">
      {/* <!-- hero  --> */}
      <section className="hero-section hospitality-hero padding-y">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="page-name-wrapper">
              <p className="page-name-text">AI recruiting for construction</p>
            </div>
            <h1 className="main-heading">
              <span className="highlight">Keep Every</span> Project Fully
              <br />
              Staffed and On Schedule
            </h1>
            <p className="sub-text">
              SorsX is an AI recruiting platform for construction teams, using
              AI interviews to quickly vet tradespeople, foremen, and project
              staff before they step on site.
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
              src="assets/construction/hero_img.png"
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
            <img src="assets/construction/ai_hiring.png" alt="AI Hiring" />
          </div>
          <div className="outreach-content">
            <div className="page-name-text">
              Screen trades in hours, not weeks
            </div>
            <h3 className="outreach-heading">
              AI Hiring Software Built for Field and Office Roles
            </h3>
            <p className="outreach-description">
              Evaluate every applicant with AI video interviews, standardize
              safety and experience questions, and deliver shortlists your
              superintendents and project managers actually trust.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- hospitality hiring section --> */}
      <section className="hiring-section padding-y">
        <div className="container">
          <div className="section-header text-center">
            <h3 className="hiring-title">
              Construction hiring for every job site
            </h3>
            <p className="text-T1">
              Use SorsX AI recruiting to staff field crews, office teams, and
              specialty contractors with less downtime.
            </p>
          </div>

          <div className="hiring-grid">
            {/* <!-- Hotels Card --> */}
            <div className="hiring-card">
              <div className="hiring-card-image">
                <img
                  src="assets/construction/commercial.png"
                  alt="Commercial"
                />
              </div>
              <div className="hiring-card-content">
                <h6>Commercial</h6>
                <p className="text-T1">
                  Staff commercial projects with vetted trades, estimators, and
                  site supervisors faster.
                </p>
              </div>
            </div>

            {/* <!-- Restaurants Card --> */}
            <div className="hiring-card">
              <div className="hiring-card-image">
                <img
                  src="assets/construction/residentials.png"
                  alt="Residentials"
                />
              </div>
              <div className="hiring-card-content">
                <h6>Residential</h6>
                <p className="text-T1">
                  Fill residential crews quickly with reliable carpenters,
                  electricians, and plumbers.
                </p>
              </div>
            </div>

            {/* <!-- Resorts Card --> */}
            <div className="hiring-card">
              <div className="hiring-card-image">
                <img
                  src="assets/construction/infrastructure.png"
                  alt="infrastructure"
                />
              </div>
              <div className="hiring-card-content">
                <h6>Infrastructure</h6>
                <p className="text-T1">
                  Keep infrastructure and civil jobs fully staffed across long
                  project timelines.
                </p>
              </div>
            </div>

            {/* <!-- Events Card --> */}
            <div className="hiring-card">
              <div className="hiring-card-image">
                <img
                  src="assets/construction/industrial.png"
                  alt="industries"
                />
              </div>
              <div className="hiring-card-content">
                <h6>Industrial</h6>
                <p className="text-T1">
                  Source industrial maintenance and plant technicians before
                  equipment downtime spikes.
                </p>
              </div>
            </div>
          </div>

          <div className="hiring-cta flex-center mt-3">
            <Link href="demo_page_1.html">
              <button className="blue-button">
                See SorsX for Construction
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
              From labor gaps to staffed crews
            </div>
            <h3 className="feature-heading">
              Give Your Construction Hiring Teams an AI Edge
            </h3>
            <p className="feature-description">
              SorsX automates screening and AI interviews so you fill critical
              construction roles faster, reduce costly delays, and keep both
              field and office teams focused on delivering projects.
            </p>
          </div>
          <div className="feature-image">
            <img src="assets/construction/teams.png" alt="Construction Team" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Construction;
