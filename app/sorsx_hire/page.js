import React from "react";
import "./sorsx_hire.css";
import Slider from "@/components/Slider/Slider";
import FAQs from "@/components/FAQs/FAQs";
import Link from "next/link";

const SorsxHire = () => {
  const faqs = [
    {
      question: "What is ScaleHire?",
      answer:
        "AI recruitment software that automates screening and AI video interviews to produce fast, structured shortlists.",
    },
    {
      question: "Can candidates apply without a resume?",
      answer:
        "Yes—candidates can be evaluated through interviews and structured responses, especially useful for frontline roles.",
    },
    {
      question: "Does it integrate with job boards?",
      answer:
        "Yes—ScaleHire can connect to major job boards to accelerate application-to-interview workflows.",
    },
    {
      question: "Does it integrate with ATS/HRIS systems?",
      answer:
        "Yes—SorsX can integrate with your ATS or HRIS to fit your existing workflow.",
    },
    {
      question: "Can we use our own interview questions?",
      answer:
        "Yes—use AI-generated questions, bring your own, or combine both.",
    },
    {
      question: "How does it support candidate experience?",
      answer:
        "Candidates interview on mobile or desktop, reducing delays and back-and-forth scheduling.",
    },
  ];

  return (
    <>
      {/* <!-- hero  --> */}
      <section className="text-center hero-section">
        <div className="container">
          <div className="page-name-wrapper flex-center">
            <p className="page-name-text">ScaleHire</p>
          </div>
          <h1 className="main-heading">
            <span className="first-word">AI Recruitment</span> Software <br />
            <span>for Applicants</span>
          </h1>
          <p className="sub-text">
            Automate job setup, screening, and AI video interviews so teams can
            shortlist top talent in minutes.
          </p>
          <div className="btn-wrapper">
            <Link href="demo_page_2.html">
              <button className="blue-border-button">
                <p>Request a demo</p>
              </button>
            </Link>
          </div>

          <div className="mobile-image">
            <img
              src="assets/sorsx_hire/SorsXHireheroMobile.png"
              alt="hero-image"
            />
          </div>
          <div className="hero-image-wrapper desktop-image">
            {/* <!-- <img
            src="assets/sorsx_hire/sorsx_corner_img.png"
            alt="corner-image"
            className="hero-corner-img"
          /> --> */}
            <img
              src="assets/sorsx_hire/SorsXHirehero.png"
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
            <div className="page-name-text">For Recruiters & TA Leaders</div>
            <h3>From job post to shortlist, automatically</h3>
            <p className="section-description">
              ScaleHire automates the early funnel end-to-end: job descriptions,
              interview questions, resume screening, and candidate routing. You
              can use AI-generated questions or bring your own without having to
              rebuild your process. The result is a faster, more consistent
              evaluation flow that scales across locations and roles.
            </p>
          </div>
          <div className="info-image">
            <img
              src="assets/sorsx_hire/for_recruiters_img.png"
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
              src="assets/sorsx_hire/for_hiring_img_2.png"
              alt="For Hiring managers"
              className="mobile-image"
            />
            <img
              src="assets/sorsx_hire/for_hiring_img_2_desktop.png"
              alt="For Hiring managers"
              className="desktop-image"
            />
          </div>
          <div className="info-content">
            <div className="page-name-text">For Hiring Managers</div>
            <h3>Instant interviews from job boards</h3>
            <p className="section-description">
              ScaleHire integrates with the job boards you already use so
              candidates can move from application to interview fast. For roles
              where resumes don’t tell the full story, applicants can interview
              immediately, removing friction while improving signal. Your
              managers spend less time coordinating and more time reviewing
              ready-to-meet candidates.
            </p>
            <div className="mt-3">
              <Link href="demo_page_1.html">
                <button className="white-button">
                  See ScaleHire in action
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
            <div className="page-name-text">For Talent Operations</div>
            <h3>Interview integrity + structured scoring</h3>
            <p className="section-description">
              ScaleHire runs AI video interviews with a consistent structure,
              then analyzes responses to deliver a clear evaluation summary. It
              can flag suspicious behavior and reduce low-signal interviews that
              waste manager's time. You get decision-ready shortlists built for
              speed, fairness, and comparison.
            </p>
          </div>
          <div className="info-image">
            <img
              src="assets/sorsx_hire/SorsXhire(candidates).png"
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
                <img src="assets/sorsx_hire/ai_video_icon.png" alt="AI Icon" />
              </div>
              <h5 className="card-heading">Interview 100% of applicants</h5>
              <p className="card-desc">
                Screen at scale with AI video interviews without slowing
                recruiters or managers.
              </p>
            </div>

            <div className="card-main-img">
              <img
                src="assets/sorsx_hire/SorsXhire(interview).png"
                alt="interview"
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
                    src="assets/sorsx_hire/message_icon.png"
                    alt="Checklist Icon"
                  />
                </div>
                <h5 className="card-heading">Decisions in ~3 minutes</h5>
                <p className="card-desc">
                  Turn completed interviews into ranked shortlists fast, built
                  for high-volume hiring.
                </p>
              </div>
              <div className="card-side-img">
                <img
                  src="assets/sorsx_hire/SorsXhire(descision).png"
                  alt="Decisions"
                />
              </div>
            </div>

            {/* <!-- bottom card --> */}
            <div className="card card-horizontal">
              <div className="card-info">
                <div className="card-icon">
                  <img src="assets/sorsx_hire/mail_icon.png" alt="User Icon" />
                </div>
                <h5 className="card-heading">Multi-channel engagement</h5>
                <p className="card-desc">
                  Keep candidates moving with outreach across email, SMS,
                  WhatsApp, and LinkedIn.
                </p>
              </div>
              <div className="card-side-img">
                <img
                  src="assets/sorsx_hire/SorsXXhire(socialmedia).png"
                  alt="engagement"
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
              src="assets/sorsx_hire/manager_img.png"
              alt="manager"
              className="ceo-photo"
            />
          </div>
          <div className="feedback-card">
            <span className="quote-mark">“</span>
            <p className="feedback-text">
              SorsX AI recruitment software automated screening and AI video
              interviews, delivering standardized evaluations and decision-ready
              shortlists fast.
            </p>
            <div className="feedback-footer">
              <div className="ceo-info">
                <h4 className="ceo-name">Sevda Canbaz</h4>
                <p className="ceo-title">
                  People and Culture Manager, Dalgakıran Kompresör
                </p>
              </div>
              <div className="company-logo">
                <img
                  src="assets/sorsx_hire/dalgakiran_icon.png"
                  alt="dalgakiran_icon"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* faqs */}
      <FAQs faqsData={faqs} />

      {/* <!-- stop paying section --> */}
      <section className="stop-paying-section padding-y">
        <div className="circles-background">
          <img
            src="assets/sorsx_hire/stop_circle_3.png"
            alt=""
            className="stop-circle circle-large"
          />
          <img
            src="assets/sorsx_hire/stop_circle_2.png"
            alt=""
            className="stop-circle circle-medium"
          />
          <img
            src="assets/sorsx_hire/stop_circle_1.png"
            alt=""
            className="stop-circle circle-small"
          />
        </div>
        {/* <!-- content div  --> */}
        <div className="container stop-paying-container z-10">
          <div className="stop-paying-content">
            <div className="tag-pill white-pill">Take the next step</div>
            <h3 className="white-text-1">Stop drowning in applicants</h3>
            <p className="white-text">
              Replace manual screening and scheduling with recruiting automation
              that preserves quality and candidate experience.
            </p>
            <div className="stop-paying-logos">
              <img src="assets/sorsx_hire/logo_4.png" alt="logo" />
              <img src="assets/sorsx_hire/logo_5.png" alt="logo" />
              <img src="assets/sorsx_hire/logo_6.png" alt="logo" />
              <img src="assets/sorsx_hire/logo_7.png" alt="logo" />
              <img src="assets/sorsx_hire/logo_3.png" alt="logo" />
              <img src="assets/sorsx_hire/logo_2.png" alt="logo" />
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
                <img src="assets/sorsx_hire/demo_logo_1.png" alt="Capterra" />
                <img
                  src="assets/sorsx_hire/demo_logo_2.png"
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

export default SorsxHire;
