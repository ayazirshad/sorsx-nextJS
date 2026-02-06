import React from "react";
import "./demo_page_1.css";
import Slider from "@/components/Slider/Slider";

const DemoPage1 = () => {
  const demoCards = [
    {
      title: "Why a demo?",
      desc: `AI recruiting works best when it's mapped to your workflow. We'll
    tailor the walkthrough to your roles, volume, and goals so you leave
    with clarity, not generic slides.`,
      img: "assets/demo_page_1/2x_hiring_img.png",
      alt: "Why a demo",
    },
    {
      title: "See the full automation",
      desc: `Watch how SorsX handles the manual steps end-to-end: job setup,
    outreach, screening, AI video interviews, and shortlists so
    recruiters focus on decisions.`,
      img: "assets/demo_page_1/shortlist_img.png",
      alt: "See the full automation",
    },
    {
      title: "Prove quality, not hype",
      desc: `We'll show how structured AI interview software creates consistent
    evaluations, flags low-signal responses, and supports confident
    comparisons across candidates and locations.`,
      img: "assets/demo_page_1/quality_img.png",
      alt: "Prove quality",
    },
    {
      title: "Fit your existing stack",
      desc: `SorsX integrates with your ATS/HRIS and supports outreach across
    email, SMS, WhatsApp, and LinkedIn, so you don't start over from
    scratch.`,
      img: "assets/demo_page_1/stack_img.png",
      alt: "Fit your existing stack",
    },
  ];

  return (
    <>
      {/* <!-- hero --> */}
      <section class="text-center hero-section">
        <div class="bg-rod-container">
          <div class="bg-rod-1"></div>
          <div class="bg-rod-2"></div>
          <div class="bg-rod-3"></div>
        </div>
        <div class="container">
          <h1 class="main-heading">
            {/* <!-- Book an Ai Recruiting Demo --> */}
            <span class="first-word">Book</span>
            <span class="second-word">an AI</span>
            <br />
            <span>Recruiting Demo</span>
          </h1>
          <p class="sub-text">
            See SorsX automate sourcing, screening, and AI interviews for hiring
            teams
          </p>

          {/* <!-- Demo Form Section --> */}
          <div class="hero-demo-form-container">
            <div class="form-info-card">
              <h2 class="form-title">Request a demo</h2>
              <p class="text-T1">
                Schedule a demo with our product expert to see how SorsX fits
                into your hiring process and existing tools.
              </p>
            </div>
            <div class="form-fields-wrapper">
              <form class="demo-form">
                <div class="form-row">
                  <div class="form-group">
                    <label>First name</label>
                    <input type="text" placeholder="First name" required />
                  </div>
                  <div class="form-group">
                    <label>Last name</label>
                    <input type="text" placeholder="Last name" required />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group">
                    <label>Work Email</label>
                    <input type="email" placeholder="Work email" required />
                  </div>
                  <div class="form-group">
                    <label>Company name</label>
                    <input type="text" placeholder="Company name" required />
                  </div>
                </div>
                <div class="form-group full-width">
                  <label>Job Title</label>
                  <input type="text" placeholder="Job title" required />
                </div>
                <div class="form-footer">
                  <div class="btn-wrapper">
                    <button
                      type="submit"
                      class="blue-border-button zero-margin"
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

      <div class="bottom-divider"></div>

      {/* slider */}
      <Slider />

      {/* <!-- cards section --> */}
      <section class="cards-section padding-y">
        <div class="bg-blur-circles">
          <div class="blur-circle circle-1"></div>
          <div class="blur-circle circle-2"></div>
          <div class="blur-circle circle-3"></div>
        </div>
        <div className="container grid-cards">
          {demoCards?.map((card, index) => (
            <div className="card" key={index}>
              <h5 className="card-heading">{card.title}</h5>
              <p className="card-desc text-T1">{card.desc}</p>
              <div className="card-main-img">
                <img src={card.img} alt={card.alt} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* <!-- feedback section --> */}
      <section class="feedback-section padding-y">
        <div class="container feedback-header">
          <div class="feedback-text-content">
            <h3 class="section-heading">
              The Recruitment Platform teams trust, worldwide.
            </h3>
            <p class="text-T1">
              How CHROs and talent acquisition teams use our AI recruiting
              platform and AI interviewer to transform hiring.
            </p>
          </div>
          <div class="trust-logos">
            <img src="assets/demo_page_1/capterra.png" alt="Capterra" />
            <img
              src="assets/demo_page_1/software-advice.png"
              alt="Software Advice"
            />
          </div>
        </div>

        <div class="container testimonials-grid">
          {/* <!-- Testimonial 1 --> */}
          <div class="testimonial-item">
            <div class="testimonial-photo">
              <img
                src="assets/demo_page_1/Violet-Herin.png"
                alt="Violet Herin"
                class="photo-desktop"
              />
              <img
                src="assets/demo_page_1/Violet-Herin.png"
                alt="Violet Herin"
                class="photo-mobile"
              />
            </div>
            <div class="testimonial-card">
              <div class="testimonial-header">
                <div class="author-info">
                  <h4 class="text-L1">Violet Herin</h4>
                  <p class="text-L2">CEO, Projé Inc.</p>
                </div>
                <img src="assets/demo_page_1/quote-icon.svg" alt="qoute" />
              </div>
              <p class="text-T1">
                It has truly been a game-changer in expediting screening and
                first interviews. It captures exactly what we need to make
                informed decisions.
              </p>
              <div class="testimonial-company">
                <img src="assets/demo_page_1/proje.png" alt="Proje Logo" />
              </div>
            </div>
          </div>

          {/* <!-- Testimonial 2 --> */}
          <div class="testimonial-item">
            <div class="testimonial-photo">
              <img
                src="assets/demo_page_1/Sevda-Canbaz.png"
                alt="Sevda Canbaz"
                class="photo-desktop"
              />
              <img
                src="assets/demo_page_1/Sevda-Canbaz.png"
                alt="Sevda Canbaz"
                class="photo-mobile"
              />
            </div>
            <div class="testimonial-card">
              <div class="testimonial-header">
                <div class="author-info">
                  <h4 class="text-L1">Sevda Canbaz</h4>
                  <p class="text-L2">
                    People and Culture Manager, Dalgakıran Kompresör
                  </p>
                </div>
                <img src="assets/demo_page_1/quote-icon.svg" alt="qoute" />
              </div>
              <p class="text-T1">
                SorsX AI recruitment software automated screening and AI video
                interviews, delivering standardized evaluations and
                decision-ready shortlists fast.
              </p>
              <div class="testimonial-company">
                <img
                  src="assets/demo_page_1/Dalgakiran.png"
                  alt="Dalgakıran Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DemoPage1;
