import React from "react";
import "./hospitality.css";
import Link from "next/link";
import Slider from "@/components/Slider/Slider";

const Hospitality = () => {
  return (
    <div id="hospitality-page">
      {/* <!-- hero  --> */}
      <section className="hero-section hospitality-hero padding-y">
        Name
        <div class="container hero-grid">
          <div class="hero-content">
            <div class="page-name-wrapper">
              <p class="page-name-text">AI recruiting for hospitality</p>
            </div>
            <h1 class="main-heading">
              <span class="highlight">Keep Every</span> Shift Staffed
              <br />
              With Confidence
            </h1>
            <p class="sub-text">
              SorsX automates high-volume hospitality hiring with AI recruiting
              and AI video interviews, so you staff every shift on time without
              drowning in applications.
            </p>
            <div class="btn-wrapper">
              <Link href="demo_page_2.html">
                <button class="blue-border-button">
                  <p>Request a demo</p>
                </button>
              </Link>
            </div>
          </div>
          <div class="hero-image-wrapper">
            <img src="assets/hospitality/hero_img.png" alt="hospitality hero" />
          </div>
        </div>
      </section>

      {/* slider */}
      <Slider />

      {/* <!-- outreach section --> */}
      <section className="outreach-section">
        <div className="container outreach-container">
          <div className="outreach-image">
            <img src="assets/hospitality/ai_hiring.png" alt="AI Hiring" />
          </div>
          <div className="outreach-content">
            <div className="page-name-text">
              Automate frontline screening, not the human touch
            </div>
            <h3 className="outreach-heading">
              AI Hiring Software Built for Busy Hotel and Restaurant Teams
            </h3>
            <p className="outreach-description">
              We evaluate every applicant with AI interviews, surface the best
              talent for guest-facing roles, and help managers hire in minutes,
              not weeks.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- hospitality hiring section --> */}
      <section className="hiring-section padding-y">
        <div className="container">
          <div className="section-header text-center">
            <h3 className="hiring-title">
              Hospitality hiring that never sleeps
            </h3>
            <p className="section-description text-T1">
              Use SorsX AI recruiting to keep hotels, restaurants, resorts, and
              events fully staffed year-round.
            </p>
          </div>

          <div className="hiring-grid">
            {/* <!-- Hotels Card --> */}
            <div className="hiring-card">
              <div className="hiring-card-image">
                <img src="assets/hospitality/hotels.png" alt="Hotels" />
              </div>
              <div className="hiring-card-content">
                <h6>Hotels</h6>
                <p className="text-T1">
                  Hire service-ready staff for front desk, housekeeping, and
                  concierge roles faster.
                </p>
              </div>
            </div>

            {/* <!-- Restaurants Card --> */}
            <div className="hiring-card">
              <div className="hiring-card-image">
                <img
                  src="assets/hospitality/restuarants.png"
                  alt="Restaurants"
                />
              </div>
              <div className="hiring-card-content">
                <h6>Restaurants</h6>
                <p className="text-T1">
                  Screen servers, hosts, and kitchen staff with consistent AI
                  video interviews.
                </p>
              </div>
            </div>

            {/* <!-- Resorts Card --> */}
            <div className="hiring-card">
              <div className="hiring-card-image">
                <img src="assets/hospitality/resorts.png" alt="Resorts" />
              </div>
              <div className="hiring-card-content">
                <h6>Resorts</h6>
                <p className="text-T1">
                  Build pools of seasonal resort talent before peak travel
                  periods hit.
                </p>
              </div>
            </div>

            {/* <!-- Events Card --> */}
            <div className="hiring-card">
              <div className="hiring-card-image">
                <img src="assets/hospitality/events.png" alt="Events" />
              </div>
              <div className="hiring-card-content">
                <h6>Events</h6>
                <p className="text-T1">
                  Staff event coordinators, bartenders, and support crews
                  quickly for every function.
                </p>
              </div>
            </div>
          </div>

          <div className="hiring-cta flex-center mt-3">
            <Link href="demo_page_1.html">
              <button className="blue-button">See SorsX for Hospitality</button>
            </Link>
          </div>
        </div>
      </section>

      {/* <!-- teams section --> */}
      <section className="feature-section padding-y">
        <div className="container feature-container flex-between gap-4">
          <div className="feature-content">
            <div className="page-name-text">
              Less chaos. More staffed shifts
            </div>
            <h3 className="feature-heading">
              Give Your Hospitality Teams an AI Recruiting Co-Pilot
            </h3>
            <p className="feature-description">
              SorsX cuts time-to-fill for hospitality roles by automating
              screening, AI interviews, and shortlists, so you maintain guest
              satisfaction, protect revenue, and reduce burnout for overworked
              managers.
            </p>
          </div>
          <div className="feature-image">
            <img src="assets/hospitality/teams.png" alt="Hospitality Team" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hospitality;
