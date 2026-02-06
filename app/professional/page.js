import React from "react";
import "./professional.css";
import Slider from "@/components/Slider/Slider";
import Link from "next/link";

const Professional = () => {
  return (
    <div id="professional-page">
      {/* <!-- hero  --> */}
      <section className="hero-section hospitality-hero padding-y">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="page-name-wrapper">
              <p className="page-name-text">
                AI recruiting for professional services
              </p>
            </div>
            <h1 className="main-heading">
              <span className="highlight">Win More Work</span> With the
              <br />
              Right People on Every Engagement
            </h1>
            <p className="sub-text">
              SorsX is an AI recruiting platform and AI interviewer that helps
              services firms staff consultants, analysts, and client teams
              screened for expertise and client-ready communication.
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
              src="assets/professional/hero_img.png"
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
            <img src="assets/professional/ai_hiring.png" alt="AI Hiring" />
          </div>
          <div className="outreach-content">
            <div className="page-name-text">
              Standardize how you evaluate client-facing talent
            </div>
            <h3 className="outreach-heading">
              AI Hiring Software That Balances Hard Skills and Soft Skills
            </h3>
            <p className="outreach-description">
              Use AI video interviews and structured questions to assess
              problem-solving, communication, and cultural fit—so partners and
              managers see only client-ready candidates.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- hospitality hiring section --> */}
      <section className="hiring-section padding-y">
        <div className="container">
          <div className="section-header text-center">
            <h3 className="hiring-title">
              Hiring for every practice and service line
            </h3>
            <p className="text-T1">
              SorsX AI recruiting supports consulting, legal, accounting, and
              agency teams with consistent shortlists and interview insights.
            </p>
          </div>

          <div className="hiring-grid">
            {/* <!-- Restaurants Card --> */}
            <div className="hiring-card">
              <div className="hiring-card-image">
                <img
                  src="assets/professional/consulting.png"
                  alt="consulting"
                />
              </div>
              <div className="hiring-card-content">
                <h6>Consulting</h6>
                <p className="text-T1">
                  Staff consulting projects with consultants and analysts who
                  match your engagement profiles.
                </p>
              </div>
            </div>

            {/* <!-- Resorts Card --> */}
            <div className="hiring-card">
              <div className="hiring-card-image">
                <img src="assets/healthcare/admin.png" alt="admin" />
              </div>
              <div className="hiring-card-content">
                <h6>Legal</h6>
                <p className="text-T1">
                  Screen legal talent for rigor, judgment, and client-service
                  orientation.
                </p>
              </div>
            </div>

            {/* <!-- Events Card --> */}
            <div className="hiring-card">
              <div className="hiring-card-image">
                <img
                  src="assets/professional/accounting.png"
                  alt="accounting"
                />
              </div>
              <div className="hiring-card-content">
                <h6>Accounting</h6>
                <p className="text-T1">
                  Hire accountants and auditors ready for deadlines, detail, and
                  client demands.
                </p>
              </div>
            </div>

            {/* <!-- logistic card  --> */}
            <div className="hiring-card">
              <div className="hiring-card-image">
                <img src="assets/professional/agencies.png" alt="agencies" />
              </div>
              <div className="hiring-card-content">
                <h6>Agencies</h6>
                <p className="text-T1">
                  Staff creative and marketing teams without sacrificing speed
                  or portfolio quality.
                </p>
              </div>
            </div>
          </div>

          <div className="hiring-cta flex-center mt-3">
            <Link href="demo_page_1.html">
              <button className="blue-button">
                See SorsX for Professional Services
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
              From ad hoc hiring to repeatable excellence
            </div>
            <h3 className="feature-heading">
              Give Your Professional Services Firm a Smarter Way to Recruit
            </h3>
            <p className="feature-description">
              SorsX automates candidate screening and AI interviews so partners
              and practice leaders spend time choosing between great options,
              not searching for them under tight client deadlines.
            </p>
          </div>
          <div className="feature-image">
            <img src="assets/professional/teams.png" alt="professional Team" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Professional;
