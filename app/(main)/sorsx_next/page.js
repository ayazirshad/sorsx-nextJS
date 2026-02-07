import React from "react";
import "./sorsx_next.css";
import Slider from "@/components/Slider/Slider";
import Link from "next/link";
import FAQs from "@/components/FAQs/FAQs";

const SorsxNext = () => {
  const faqs = [
    {
      question: "What is SorsX Next?",
      answer:
        "SorsX Next is a chat-based talent intelligence module inside the SorsX AI recruiting platform. It helps teams uncover and compare candidates in seconds.",
    },
    {
      question: "How does SorsX Next build 360° candidate profiles?",
      answer:
        "It combines resume data with insights from AI interview software (including AI video interview results) to create deeper, decision-ready candidate profiles.",
    },
    {
      question:
        "How is SorsX Next different from ATS filters and keyword search?",
      answer:
        "Traditional filters miss great candidates. SorsX Next uses context across skills, experience, and interview performance to surface qualified talent hiding in your data.",
    },
    {
      question: "What questions can our team ask SorsX Next?",
      answer:
        "You can ask things like: “Who’s best for this role?”, “Compare these candidates,” or “Who matches X and Y?” and get clear answers to speed hiring decisions.",
    },
    {
      question: "Can SorsX Next compare candidates side-by-side?",
      answer:
        "Yes. It compares candidates by role fit, skills, and interview outcomes, helping recruiting and hiring teams align faster with fewer review meetings.",
    },
    {
      question:
        "Does SorsX Next integrate with our ATS or HRIS, and is it secure?",
      answer:
        "Yes. SorsX can integrate with your ATS/HRIS, so your workflow doesn’t restart. We follow strong security practices and are actively pursuing additional compliance standards.",
    },
  ];

  return (
    <div id="sorsx-next-page">
      {/* <!-- hero  --> */}
      <section className="text-center hero-section">
        <div className="container">
          <div className="page-name-wrapper flex-center">
            <p className="page-name-text">SorsX Next</p>
          </div>
          <h1 className="main-heading">
            <span className="first-word">Talent Intelligence</span> for
            <br />
            <span>Recruiting Teams</span>
          </h1>
          <p className="sub-text">
            Ask your pipeline anything, compare candidates by skills, interview
            performance, and fit, and decide faster.
          </p>
          <div className="btn-wrapper">
            <Link href="/demo_page_2">
              <button className="blue-border-button">
                <p>Request a demo</p>
              </button>
            </Link>
          </div>
          <div className="hero-image-wrapper">
            <img
              src="assets/sorsx_next/SorsxNextHero.png"
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
            <div className="page-name-text">For TA Leaders</div>
            <h3>360° candidate visibility in seconds</h3>
            <p className="section-description">
              SorsX Next brings interview outcomes, resume signals, and pipeline
              context into one view. Instead of hunting across tools, teams get
              a consistent source of truth. That means fewer alignment meetings
              and faster decisions across stakeholders.
            </p>
          </div>
          <div className="info-image">
            <img
              src="assets/sorsx_next/SorsXNext(TAleaders).png"
              alt="for recruiters"
            />
          </div>
        </div>
      </section>

      {/* <!-- outreach section --> */}
      <section className="info-section outreach-section padding-y">
        <div className="container">
          <div className="info-image">
            <img
              src="assets/sorsx_next/for_hiring_img.png"
              alt="For Hiring managers"
            />
          </div>
          <div className="info-content">
            <div className="page-name-text">For Recruiters</div>
            <h3>Instant comparisons, clearer next steps</h3>
            <p className="section-description">
              Ask questions in natural language and compare candidates quickly
              without manual side-by-sides. SorsX Next helps teams move from
              “review” to “action” faster by turning scattered data into
              decision-ready insights.
            </p>
            <div className="mt-3">
              <Link href="/demo_page_1">
                <button className="white-button">
                  See SorsX Next in action
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
            <div className="page-name-text">For Exectives</div>
            <h3>Pipeline clarity that drives action</h3>
            <p className="section-description">
              See where candidates drop off, which roles stall, and what’s
              improving quality. SorsX Next helps leaders spot bottlenecks early
              and guide recruiting priorities confidently. It’s recruiting
              analytics that’s actually usable.
            </p>
          </div>
          <div className="info-image">
            <img
              src="assets/sorsx_next/SorsXNext(Exectives).png"
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
                <img src="assets/sorsx_next/ai_icon.png" alt="ai_icon" />
              </div>
              <h5 className="card-heading">Faster alignment</h5>
              <p className="card-desc">
                Give hiring teams a shared view of candidate quality and
                pipeline progress.
              </p>
            </div>

            <div className="card-main-img">
              <img src="assets/sorsx_next/SorsXNext(faster).png" alt="ai_img" />
            </div>
          </div>

          {/* <!-- right column with two cards --> */}
          <div className="card-stack">
            {/* <!-- top card --> */}
            <div className="card card-horizontal">
              <div className="card-info">
                <div className="card-icon">
                  <img
                    src="assets/sorsx_next/message_icon.png"
                    alt="message_icon"
                  />
                </div>
                <h5 className="card-heading">Better comparisons</h5>
                <p className="card-desc">
                  Compare candidates by structured interview performance and
                  role fit without extra meetings.
                </p>
              </div>
              <div className="card-side-img">
                <img
                  src="assets/sorsx_next/SorsXNext(bestcomparison).png"
                  alt="message_img"
                />
              </div>
            </div>

            {/* <!-- bottom card --> */}
            <div className="card card-horizontal">
              <div className="card-info">
                <div className="card-icon">
                  <img src="assets/sorsx_next/mail_icon.png" alt="mail_icon" />
                </div>
                <h5 className="card-heading">
                  Actionable recruiting analytics
                </h5>
                <p className="card-desc">
                  Identify bottlenecks and prioritize what to fix across
                  multiple roles.
                </p>
              </div>
              <div className="card-side-img">
                <img
                  src="assets/sorsx_next/SorsXNext(Analytics).png"
                  alt="mail_img"
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
              src="assets/sorsx_next/ceo_img.png"
              alt="Violet Herin"
              className="ceo-photo"
            />
          </div>
          <div className="feedback-card">
            <span className="quote-mark">“</span>
            <p className="feedback-text">
              SorsX Next turned interview and resume data into instant
              comparisons, helping us decide faster across multiple roles.
            </p>
            <div className="feedback-footer">
              <div className="ceo-info">
                <h4 className="ceo-name">Violet Herin</h4>
                <p className="ceo-title">CEO, Projé Inc.</p>
              </div>
              <div className="company-logo">
                <img
                  src="assets/sorsx_next/company_logo_img.png"
                  alt="Projé Logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* faqs */}
      <FAQs faqsData={faqs} />
    </div>
  );
};

export default SorsxNext;
