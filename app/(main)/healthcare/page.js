import React from "react";
import "./healthcare.css";
import Slider from "@/components/Slider/Slider";
import Link from "next/link";

const Healthcare = () => {
  return (
    <div id="healthcare-page">
      {/* <!-- hero  --> */}
      <section className="hero-section hospitality-hero padding-y">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="page-name-wrapper">
              <p className="page-name-text">AI recruiting for healthcare</p>
            </div>
            <h1 className="main-heading">
              <span className="highlight">Support Patient Care</span> With
              <br />
              Fully Staffed Clinical and <br />
              Non-Clinical Teams
            </h1>
            <p className="sub-text">
              SorsX is an AI hiring platform and AI interview software that
              helps healthcare organizations staff nurses, clinicians, and
              support roles reliably with compliance built in.
            </p>
            <div className="btn-wrapper">
              <Link href="/demo_page_2">
                <button className="blue-border-button">
                  <p>Request a demo</p>
                </button>
              </Link>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img src="assets/healthcare/hero_img.png" alt="hospitality hero" />
          </div>
        </div>
      </section>

      {/* <!-- slider  --> */}
      <Slider bgColor="black" />

      {/* <!-- outreach section --> */}
      <section className="outreach-section">
        <div className="container outreach-container">
          <div className="outreach-image">
            <img src="assets/healthcare/ai_hiring.png" alt="AI Hiring" />
          </div>
          <div className="outreach-content">
            <div className="page-name-text">
              Structure interviews without losing the human touch
            </div>
            <h3 className="outreach-heading">
              AI Interview Software Designed for Healthcare Hiring Needs
            </h3>
            <p className="outreach-description">
              Use AI video interviews and role-specific questions to evaluate
              clinical skills, bedside manner, and reliability while maintaining
              consistent, fair processes across facilities.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- hospitality hiring section --> */}
      <section className="hiring-section padding-y">
        <div className="container">
          <div className="section-header text-center">
            <h3 className="hiring-title">
              Healthcare hiring for every department
            </h3>
            <p className="text-T1">
              SorsX AI recruiting supports hospitals, clinics, and care networks
              with standardized AI interviews and shortlists across roles.
            </p>
          </div>

          <div className="hiring-grid">
            {/* <!-- Restaurants Card --> */}
            <div className="hiring-card">
              <div className="hiring-card-image">
                <img src="assets/healthcare/hospitals.png" alt="hospitals" />
              </div>
              <div className="hiring-card-content">
                <h6>Hospitals</h6>
                <p className="text-T1">
                  Staff inpatient units with nurses, techs, and support staff
                  screened for reliability.
                </p>
              </div>
            </div>

            {/* <!-- Resorts Card --> */}
            <div className="hiring-card">
              <div className="hiring-card-image">
                <img src="assets/healthcare/clinics.png" alt="clinics" />
              </div>
              <div className="hiring-card-content">
                <h6>Clinics</h6>
                <p className="text-T1">
                  Hire clinic staff who balance clinical quality with warm,
                  efficient patient experiences.
                </p>
              </div>
            </div>

            {/* <!-- Events Card --> */}
            <div className="hiring-card">
              <div className="hiring-card-image">
                <img src="assets/healthcare/longterm.png" alt="long_term" />
              </div>
              <div className="hiring-card-content">
                <h6>Long-Term</h6>
                <p className="text-T1">
                  Recruit long-term care teams focused on continuity, empathy,
                  and safety.
                </p>
              </div>
            </div>

            {/* <!-- logistic card  --> */}
            <div className="hiring-card">
              <div className="hiring-card-image">
                <img src="assets/healthcare/admin.png" alt="admin" />
              </div>
              <div className="hiring-card-content">
                <h6>Admin</h6>
                <p className="text-T1">
                  Fill scheduling, billing, and admin roles without overloading
                  HR with manual screening.
                </p>
              </div>
            </div>
          </div>

          <div className="hiring-cta flex-center mt-3">
            <Link href="/demo_page_1">
              <button className="blue-button">See SorsX for Healthcare</button>
            </Link>
          </div>
        </div>
      </section>

      {/* <!-- construction teams section --> */}
      <section className="feature-section padding-y">
        <div className="container feature-container flex-between gap-4">
          <div className="feature-content">
            <div className="page-name-text">
              Protect patients by protecting your workforce
            </div>
            <h3 className="feature-heading">
              Give Your Healthcare Hiring Teams an AI Partner They Can Trust
            </h3>
            <p className="section-description">
              SorsX automates screening and AI interviews so you can keep
              critical roles filled, support clinician well-being, and maintain
              high-quality patient care, even when demand and staffing pressures
              spike.
            </p>
          </div>
          <div className="feature-image">
            <img src="assets/healthcare/teams.png" alt="manufacturing Team" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Healthcare;
