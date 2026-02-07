import Slider from "@/components/Slider/Slider";
import React from "react";
import "./demo_page_2.css";

const DemoPage2 = () => {
  return (
    <div id="demo-page-2">
      {/* <!-- hero  --> */}
      <section className="hero-section">
        <div className="bg-rod-container">
          <div className="bg-rod-1"></div>
          <div className="bg-rod-2"></div>
          <div className="bg-rod-1-mobile"></div>
          <div className="bg-rod-2-mobile"></div>
          <div className="bg-rod-3-mobile"></div>
        </div>
        <div className="content-wrapper container">
          <div className="left-content">
            <h1 className="main-heading">
              {/* <!-- <span>AI Recruiting Agents for Passive Talent</span> --> */}
              <span className="first-word">Book </span>
              <span>an AI Recruiting Demo</span>
            </h1>
            <h4>And let us show you how to:</h4>
            <ul className="hero-bullets">
              <li className="bullet-item">
                <img
                  src="assets/demo_page_2/check_icon.svg"
                  alt="check"
                  className="bullet-icon"
                />
                <span className="text-T1">
                  Automate screening + AI interviews to cut time-to-hire
                </span>
              </li>
              <li className="bullet-item">
                <img
                  src="assets/demo_page_2/check_icon.svg"
                  alt="check"
                  className="bullet-icon"
                />
                <span className="text-T1">
                  Move candidates from apply &rarr; interview instantly (no
                  scheduling bottlenecks)
                </span>
              </li>
              <li className="bullet-item">
                <img
                  src="assets/demo_page_2/check_icon.svg"
                  alt="check"
                  className="bullet-icon"
                />
                <span className="text-T1">
                  Run 5&ndash;100+ roles/month without adding recruiter
                  headcount
                </span>
              </li>
              <li className="bullet-item">
                <img
                  src="assets/demo_page_2/check_icon.svg"
                  alt="check"
                  className="bullet-icon"
                />
                <span className="text-T1">
                  Get decision-ready shortlists in minutes, not days
                </span>
              </li>
              <li className="bullet-item">
                <img
                  src="assets/demo_page_2/check_icon.svg"
                  alt="check"
                  className="bullet-icon"
                />
                <span className="text-T1">
                  Eliminate busywork with ATS/HRIS integration and automated
                  follow-ups
                </span>
              </li>
            </ul>
            <div className="hero-trust-logos">
              <img src="assets/demo_page_2/capterra.png" alt="Capterra" />
              <img
                src="assets/demo_page_2/software-advice.png"
                alt="Software Advice"
              />
            </div>
          </div>

          {/* <!-- Demo Form Section --> */}
          <div className="hero-demo-form-container">
            <div className="form-fields-wrapper">
              <h4>Request a demo</h4>
              <p className="text-B1">
                Schedule a demo with our product expert to see how SorsX fits
                into your hiring process and existing tools.
              </p>
              <form className="demo-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>First name</label>
                    <input type="text" placeholder="First name" required />
                  </div>
                  <div className="form-group">
                    <label>Last name</label>
                    <input type="text" placeholder="Last name" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Work Email</label>
                    <input type="email" placeholder="Work email" required />
                  </div>
                  <div className="form-group">
                    <label>Company name</label>
                    <input type="text" placeholder="Company name" required />
                  </div>
                </div>
                <div className="form-group full-width">
                  <label>Job Title</label>
                  <input type="text" placeholder="Job title" required />
                </div>
                <div className="form-footer">
                  <div className="btn-wrapper">
                    <button
                      type="submit"
                      className="blue-border-button zero-margin"
                    >
                      Request a demo
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* slider */}
      <Slider />

      {/* <!-- cards section --> */}
      <section className="cards-section">
        <div className="bg-blur-circles">
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <div className="circle-3"></div>
          <div className="blur-circle circle-mobile-1"></div>
          <div className="blur-circle circle-mobile-2"></div>
          <div className="blur-circle circle-mobile-3"></div>
        </div>
        <div className="container grid-cards">
          {/* <!-- Card 1 --> */}
          <div className="card">
            <h5 className="card-heading">Why a demo?</h5>
            <p className="card-desc text-T1">
              AI recruiting works best when it's mapped to your workflow. We'll
              tailor the walkthrough to your roles, volume, and goals so you
              leave with clarity, not generic slides.
            </p>
            <div className="card-main-img">
              <img
                src="assets/demo_page_2/2x_hiring_img.png"
                alt="Why a demo"
              />
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div className="card">
            <h5 className="card-heading">See the full automation</h5>
            <p className="card-desc text-T1">
              Watch how SorsX handles the manual steps end-to-end: job setup,
              outreach, screening, AI video interviews, and shortlists so
              recruiters focus on decisions.
            </p>
            <div className="card-main-img">
              <img
                src="assets/demo_page_2/shortlist_img.png"
                alt="See the full automation"
              />
            </div>
          </div>

          {/* <!-- Card 3 --> */}
          <div className="card">
            <h5 className="card-heading">Prove quality, not hype</h5>
            <p className="card-desc text-T1">
              We'll show how structured AI interview software creates consistent
              evaluations, flags low-signal responses, and supports confident
              comparisons across candidates and locations.
            </p>
            <div className="card-main-img">
              <img
                src="assets/demo_page_2/quality_img.png"
                alt="Prove quality"
              />
            </div>
          </div>

          {/* <!-- Card 4 --> */}
          <div className="card">
            <h5 className="card-heading">Fit your existing stack</h5>
            <p className="card-desc text-T1">
              SorsX integrates with your ATS/HRIS and supports outreach across
              email, SMS, WhatsApp, and LinkedIn, so you don't start over from
              scratch.
            </p>
            <div className="card-main-img">
              <img
                src="assets/demo_page_2/stack_img.png"
                alt="Fit your existing stack"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- feedback section --> */}
      <section className="feedback-section padding-y">
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
            <img
              src="assets/demo_page_2/capterra.png"
              className="capterra"
              alt="Capterra"
            />
            <img
              src="assets/demo_page_2/software-advice.png"
              className="software"
              alt="Software Advice"
            />
          </div>
        </div>

        <div className="container testimonials-grid">
          {/* <!-- Testimonial 1 --> */}
          <div className="testimonial-item">
            <div className="testimonial-photo">
              <img
                src="assets/demo_page_2/Violet-Herin.png"
                alt="Violet Herin"
                className="photo-desktop"
              />
              <img
                src="assets/demo_page_2/Violet-Herin.png"
                alt="Violet Herin"
                className="photo-mobile"
              />
            </div>
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="author-info">
                  <h4 className="text-L1">Violet Herin</h4>
                  <p className="text-L2">CEO, Projé Inc.</p>
                </div>
                <img src="assets/demo_page_2/quote-icon.svg" alt="qoute" />
              </div>
              <p className="text-T1">
                It has truly been a game-changer in expediting screening and
                first interviews. It captures exactly what we need to make
                informed decisions.
              </p>
              <div className="testimonial-company">
                <img src="assets/demo_page_2/proje.png" alt="Proje Logo" />
              </div>
            </div>
          </div>

          {/* <!-- Testimonial 2 --> */}
          <div className="testimonial-item">
            <div className="testimonial-photo">
              <img
                src="assets/demo_page_2/Sevda-Canbaz.png"
                alt="Sevda Canbaz"
                className="photo-desktop"
              />
              <img
                src="assets/demo_page_2/Sevda-Canbaz.png"
                alt="Sevda Canbaz"
                className="photo-mobile"
              />
            </div>
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="author-info">
                  <h4 className="text-L1">Sevda Canbaz</h4>
                  <p className="text-L2">
                    People and Culture Manager, Dalgakıran Kompresör
                  </p>
                </div>
                <img src="assets/demo_page_2/quote-icon.svg" alt="qoute" />
              </div>
              <p className="text-T1">
                SorsX AI recruitment software automated screening and AI video
                interviews, delivering standardized evaluations and
                decision-ready shortlists fast.
              </p>
              <div className="testimonial-company">
                <img
                  src="assets/demo_page_2/Dalgakiran.png"
                  alt="Dalgakıran Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoPage2;
