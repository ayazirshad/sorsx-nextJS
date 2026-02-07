import React from "react";
import "./ai_interviewer.css";
import Slider from "@/components/Slider/Slider";
import FAQs from "@/components/FAQs/FAQs";
import Link from "next/link";

const AiInterviewer = () => {
  const faqs = [
    {
      question: "What is AI interview software?",
      answer:
        "Software that runs structured interviews and produces consistent evaluation outputs to speed hiring decisions.",
    },
    {
      question: "Does it work for technical roles?",
      answer:
        "Yes—built to reduce reliance on recruiter-led technical screening and improve validation in early rounds.",
    },
    {
      question: "Can recruiters attend the interview?",
      answer: "Yes—recruiters can attend live or review results afterward.",
    },
    {
      question: "Is it available on mobile and desktop?",
      answer: "Yes—candidates can complete interviews on both.",
    },
    {
      question: "Can we customize questions?",
      answer: "Yes—use AI-generated questions, add your own, or blend both.",
    },
    {
      question: "Does it integrate with ATS/HRIS?",
      answer:
        "Yes—SorsX can integrate with your existing systems and workflow.",
    },
  ];

  return (
    <>
      {/* <!-- hero  --> */}
      <section className="text-center hero-section">
        <div className="container">
          <div className="page-name-wrapper flex-center">
            <p className="page-name-text">AI Interviewer</p>
          </div>
          <h1 className="main-heading">
            <span className="first-word">AI Interview</span> Software for
            <br />
            <span>Any Role</span>
          </h1>
          <p className="sub-text">
            Dynamic AI video interviews probe deeper and score consistently, so
            managers trust every shortlist.
          </p>
          <div className="btn-wrapper">
            <Link href="/demo_page_2">
              <button className="blue-border-button">
                <p>Request a demo</p>
              </button>
            </Link>
          </div>
          <div className="mobile-image">
            <img
              src="assets/ai_interviewer/Aiinterview(heromobile).png"
              alt="hero-image"
            />
          </div>
          <div className="hero-image-wrapper desktop-image">
            <img
              src="assets/ai_interviewer/Aiinterview(hero).png"
              alt="hero-image"
              className="hero-main-img"
            />
          </div>
        </div>
        {/* <!-- slider  --> */}
        <Slider />
      </section>

      {/* <!-- for recruiters section --> */}
      <section className="info-section feature-info-section">
        <div className="container flex">
          <div className="info-content">
            <div className="page-name-text">For Recruiters</div>
            <h3>No more guessing technical questions</h3>
            <p className="section-description">
              AI Interviewer generates role-aligned interview questions from
              minimal input, reducing research time and inconsistency. It
              standardizes the first round so recruiters don’t have to “carry”
              technical evaluations alone. Hiring teams get a cleaner signal
              without adding more meetings.
            </p>
          </div>
          <div className="info-image">
            <img
              src="assets/ai_interviewer/Aiinterview(2section).png"
              alt="for recruiters"
            />
          </div>
        </div>
      </section>

      {/* <!-- outreach section --> */}
      <section className="info-section outreach-section padding-y">
        <div className="container flex">
          <div className="info-image">
            <img
              src="assets/ai_interviewer/Aiinterview(3section).png"
              alt="For Hiring managers"
            />
          </div>
          <div className="info-content">
            <div className="page-name-text">For Hiring Managers</div>
            <h3>Probing interviews that validate answers</h3>
            <p className="section-description">
              AI Interviewer dynamically adapts and probes when responses are
              unclear or low-signal, helping reduce “smooth talk” outcomes. It
              produces structured evaluations that make it easier to compare
              candidates across roles and locations. Managers can join live or
              review results after.
            </p>
            <div className="mt-3">
              <Link href="/demo_page_1">
                <button className="white-button">
                  See AI Interviewer in action
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- talent section --> */}
      <section className="info-section feature-info-section padding-y">
        <div className="container flex-between gap-10">
          <div className="info-content">
            <div className="page-name-text">For Candidates</div>
            <h3>24/7 interviews on mobile + desktop</h3>
            <p className="section-description">
              Candidates can interview anytime, from anywhere without scheduling
              delays. This improves completion rates, speeds time-to-fill, and
              creates a consistent experience at scale. You keep momentum while
              protecting candidate quality.
            </p>
          </div>
          <div className="info-image">
            <img
              src="assets/ai_interviewer/Aiinterview(candidates).png"
              alt="Talent"
            />
          </div>
        </div>
      </section>

      {/* <!-- cards section --> */}
      <section className="cards-section padding-y">
        <div className="bg-blur-circles">
          <div className="blur-circle circle-1"></div>
          <div className="blur-circle circle-2"></div>
          <div className="blur-circle circle-3"></div>
        </div>
        <div className="container grid-cards">
          {/* <!-- left large card --> */}
          <div className="card card-large">
            <div className="card-info">
              <div className="card-icon">
                <img
                  src="assets/ai_interviewer/profile_icon.png"
                  alt="profile_icon"
                />
              </div>
              <h5 className="card-heading">Consistent scoring</h5>
              <p className="card-desc">
                Standardize early interviews to make candidate comparisons
                faster and less subjective.
              </p>
            </div>

            <div className="card-main-img">
              <img
                src="assets/ai_interviewer/Aiinterview(Scoring).png"
                alt="profile_img"
              />
            </div>
          </div>

          {/* <!-- right column with two cards --> */}
          <div className="card-stack">
            {/* <!-- top card --> */}
            <div className="card card-horizontal">
              <div className="card-info">
                <div className="card-icon">
                  <img
                    src="assets/ai_interviewer/clock_icon.png"
                    alt="clock Icon"
                  />
                </div>
                <h5 className="card-heading">Less manager time wasted</h5>
                <p className="card-desc">
                  Reduce low-signal screens and avoid unnecessary handoffs
                  before managers get involved.
                </p>
              </div>
              <div className="card-side-img">
                <img
                  src="assets/ai_interviewer/Aiinterview(lessmanager).png"
                  alt="clock_img"
                />
              </div>
            </div>

            {/* <!-- bottom card --> */}
            <div className="card card-horizontal">
              <div className="card-info">
                <div className="card-icon">
                  <img
                    src="assets/ai_interviewer/ai_user_icon.png"
                    alt="ai_user_icon"
                  />
                </div>
                <h5 className="card-heading">Better hiring confidence</h5>
                <p className="card-desc">
                  Structured AI interview data supports clearer decisions across
                  teams and stakeholders.
                </p>
              </div>
              <div className="card-side-img">
                <img
                  src="assets/ai_interviewer/Aiinterview(betterhiring).png"
                  alt="ai_user_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- feedback section --> */}
      <section className="feedback-section padding-y">
        <div className="container feedback-container">
          <div className="ceo-photo-wrapper">
            <img
              src="assets/ai_interviewer/ceo_img.png"
              alt="Violet Herin"
              className="ceo-photo"
            />
          </div>
          <div className="feedback-card">
            <span className="quote-mark">“</span>
            <p className="feedback-text">
              Projé has utilized the SorsX AI Interviewing process for the past
              six months. It has truly been a game-changer in expediting
              screening and first interviews. It captures exactly what we need
              to make informed decisions about who we will progress to our short
              list of candidates.
            </p>
            <div className="feedback-footer">
              <div className="ceo-info">
                <h4 className="ceo-name">Violet Herin</h4>
                <p className="ceo-title">CEO, Projé Inc.</p>
              </div>
              <div className="company-logo">
                <img
                  src="assets/ai_interviewer/company_logo_img.png"
                  alt="Projé Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* faq */}
      <FAQs faqsData={faqs} />

      {/* <!-- stop paying section --> */}
      <section className="stop-paying-section padding-y">
        <div className="stop-paying-bg-overlay"></div>
        {/* <!-- content div  --> */}
        <div className="container stop-paying-container z-10">
          <div className="stop-paying-content">
            <div className="page-name-text white-pill">Take the next step</div>
            <h3 className="white-text-1">Stop relying on “vibes”</h3>
            <p className="white-text">
              Run structured AI video interviews that scale—so managers trust
              the signal and recruiters move faster.
            </p>
            <div className="stop-paying-logos">
              <img src="assets/ai_interviewer/logo_4.png" alt="logo" />
              <img src="assets/ai_interviewer/logo_5.png" alt="logo" />
              <img src="assets/ai_interviewer/logo_6.png" alt="logo" />
              <img src="assets/ai_interviewer/logo_7.png" alt="logo" />
              <img src="assets/ai_interviewer/logo_3.png" alt="logo" />
              <img src="assets/ai_interviewer/logo_2.png" alt="logo" />
            </div>
          </div>

          <div className="stop-paying-card-wrapper">
            <div className="stop-paying-card">
              <h6>Request a Demo</h6>
              <p>
                Get a personalized walkthrough and see how ScaleHire fits your
                workflow. You'll know in one call if it's right.
              </p>

              <div className="card-input-group">
                <input
                  type="email"
                  placeholder="Email"
                  className="email-input-card"
                  id="emailInputCard"
                  required
                />

                <span className="card-error" id="emailCardError"></span>

                <button className="blue-button card-button" id="demoBtnCard">
                  Book a Demo
                </button>
              </div>

              <div className="trust-badges-row">
                <img
                  src="assets/ai_interviewer/demo_logo_1.png"
                  alt="Capterra"
                />
                <img
                  src="assets/ai_interviewer/demo_logo_2.png"
                  alt="Software Advice"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AiInterviewer;
