"use client";

import React, { useState } from "react";
import "./ai_ats_crm.css";
import Slider from "@/components/Slider/Slider";
import FAQs from "@/components/FAQs/FAQs";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AiAtsCrm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleDemoRedirect = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    try {
      localStorage.setItem("demo_email", email);
    } catch (e) {
      // ignore storage errors (e.g., private mode)
    }

    router.push("/demo_page_1");
  };

  const faqs = [
    {
      question: "What is the SorsX AI ATS?",
      answer:
        "SorsX is an AI ATS (AI applicant tracking system) that automates recruiting workflows, so teams manage jobs, candidates, and pipelines faster than traditional ATS tools.",
    },
    {
      question: "How is SorsX different from a traditional ATS?",
      answer:
        "Traditional systems mostly store data. SorsX adds recruiting automation, helping teams move candidates faster with AI-driven workflows, follow-ups, and structured evaluation signals.",
    },
    {
      question: "Does SorsX include a recruiting CRM?",
      answer:
        "Yes. SorsX includes an ATS + recruiting CRM to track candidates, nurture pipelines, and manage relationships, without relying on external tools or spreadsheets.",
    },
    {
      question:
        "Does the AI ATS integrate with email, calendar, LinkedIn, and job boards?",
      answer:
        "Yes. The AI ATS integrates with your email and calendar, supports LinkedIn workflows, and connects with job boards to keep candidate flow moving end-to-end.",
    },
    {
      question: "Can we use the SorsX AI ATS alone, or with other modules?",
      answer:
        "Both. Some teams use SorsX as their primary ATS. Others use the AI ATS as the foundation and add modules like AI Interview Software, ScaleHire, and AI Sourcing.",
    },
    {
      question: "Do we still need separate ATS automations and tools?",
      answer:
        "In most cases, no. SorsX combines ATS functionality, CRM workflows, and AI-driven automation in one platform, reducing tool sprawl and manual work.",
    },
  ];

  return (
    <div id="ai_ats_page">
      {/* <!-- hero  --> */}
      <section className="text-center hero-section">
        <div className="container">
          <div className="page-name-wrapper flex-center">
            <p className="page-name-text">AI ATS & CRM</p>
          </div>
          <h1 className="main-heading">
            <span className="first-word">AI ATS</span> that <br />
            <span>Automates Work</span>
          </h1>
          <p className="sub-text">
            An AI-first applicant tracking system that automates pipelines,
            tasks, and follow-ups while fitting your HR stack.
          </p>
          <div className="btn-wrapper">
            <Link href="/demo_page_2">
              <button className="blue-border-button">
                <p>Request a demo</p>
              </button>
            </Link>
          </div>

          <div className="mobile-image">
            <img src="assets/ai_ats_crm/hero_mobile_img.png" alt="hero-image" />
          </div>
          <div className="hero-image-wrapper desktop-image">
            <div className="left">
              <img
                src="assets/ai_ats_crm/hero_img.png"
                alt="hero-image"
                className="hero-main-img"
              />
            </div>
            {/* <!-- <div className="right">
            <img
              src="assets/ai_ats_crm/hero_img_2.png"
              alt="corner-image"
              className="hero-corner-img"
            />
          </div> --> */}
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
            <h3>Pipelines that run themselves</h3>
            <p className="section-description">
              The AI ATS automates the manual steps recruiters do all day,
              status updates, follow-ups, task handoffs, and candidate movement.
              It keeps the pipeline clean and moving without constant reminders.
              Recruiters spend less time managing tools and more time making
              hires.
            </p>
          </div>
          <div className="info-image">
            <img
              src="assets/ai_ats_crm/AiATS(section2).png"
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
              src="assets/ai_ats_crm/for_hiring_img_2.png"
              alt="For Hiring managers"
              className="mobile-image"
            />
            <img
              src="assets/ai_ats_crm/AiATS(Section3).png"
              alt="For Hiring managers"
              className="desktop-image"
            />
          </div>
          <div className="info-content">
            <div className="page-name-text">For Hiring Managers</div>
            <h3>Less coordination, faster decisions</h3>
            <p className="section-description">
              Managers shouldn’t need training to move hiring forward. The AI
              ATS simplifies reviews, keeps feedback structured, and reduces
              back-and-forth across stakeholders. Everyone sees what matters and
              what’s next, so offers move faster.
            </p>
            <div className="mt-3">
              <Link href="/demo_page_1">
                <button className="white-button">See AI ATS in action</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- talent section --> */}
      <section className="info-section feature-info-section CRM-sec padding-y">
        <div className="container flex-between gap-10">
          <div className="info-content">
            <div className="page-name-text">For TA & Ops</div>
            <h3>A recruiting CRM on steroids</h3>
            <p className="section-description">
              Build searchable talent pools, track engagement, and keep
              relationships warm without spreadsheets. The AI ATS helps teams
              stay proactive rather than reactive, especially when hiring across
              many roles. It’s built for speed, consistency, and long-term
              pipeline value.
            </p>
          </div>
          <div className="info-image">
            <img src="assets/ai_ats_crm/AIATS(Section4).png" alt="Talent" />
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
                <img src="assets/ai_ats_crm/ai_video_icon.png" alt="AI Icon" />
              </div>
              <h5>Less admin, more hiring</h5>
              <p className="card-desc">
                Automate repetitive ATS tasks that slow recruiters down across
                multiple roles.
              </p>
            </div>

            <div className="card-main-img">
              <img src="assets/ai_ats_crm/AIATS(card1).png" alt="interview" />
            </div>
          </div>

          {/* <!-- right column with two cards --> */}
          <div className="card-stack">
            {/* <!-- top card --> */}
            <div className="card card-horizontal">
              <div className="card-info">
                <div className="card-icon">
                  <img
                    src="assets/ai_ats_crm/message_icon.png"
                    alt="Checklist Icon"
                  />
                </div>
                <h5>Cleaner collaboration</h5>
                <p className="card-desc">
                  Keep recruiters and managers aligned with structured steps,
                  clear ownership, and fewer dropped handoffs.
                </p>
              </div>
              <div className="card-side-img">
                <img src="assets/ai_ats_crm/AiATS(Card2).png" alt="Decisions" />
              </div>
            </div>

            {/* <!-- bottom card --> */}
            <div className="card card-horizontal">
              <div className="card-info">
                <div className="card-icon">
                  <img src="assets/ai_ats_crm/mail_icon.png" alt="User Icon" />
                </div>
                <h5>Better pipeline control</h5>
                <p className="card-desc">
                  Track candidates end-to-end with automation that supports
                  quality and candidate experience.
                </p>
              </div>
              <div className="card-side-img">
                <img
                  src="assets/ai_ats_crm/AiATS(card3).png"
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
              src="assets/ai_ats_crm/manager_img.png"
              alt="manager"
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
                <h4 className="ceo-name">Canan Berkem</h4>
                <p className="ceo-title">
                  Head of Marketing TADO, Duracell Inc.
                </p>
              </div>
              <div className="company-logo">
                <img
                  src="assets/ai_ats_crm/duracell_logo.png"
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
            src="assets/ai_ats_crm/stop_circle_3.png"
            alt=""
            className="stop-circle circle-large"
          />
          <img
            src="assets/ai_ats_crm/stop_circle_2.png"
            alt=""
            className="stop-circle circle-medium"
          />
          <img
            src="assets/ai_ats_crm/stop_circle_1.png"
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
            <br />
            <p className="white-text">
              Powering AI recruiting for fast-moving hiring teams
            </p>
            <div className="stop-paying-logos">
              <img src="assets/ai_ats_crm/logo_4.png" alt="logo" />
              <img src="assets/ai_ats_crm/logo_5.png" alt="logo" />
              <img src="assets/ai_ats_crm/logo_6.png" alt="logo" />
              <img src="assets/ai_ats_crm/logo_7.png" alt="logo" />
              <img src="assets/ai_ats_crm/logo_3.png" alt="logo" />
              <img src="assets/ai_ats_crm/logo_2.png" alt="logo" />
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
                  className={`email-input ${error ? "email-input--error" : ""} email-input-card`}
                  id="emailInputCard"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleDemoRedirect();
                  }}
                  required
                />

                <div
                  className={`form-hint ${error ? "form-hint--error" : ""}`}
                  role="alert"
                  aria-live="polite"
                >
                  {<span>{error}</span>}
                </div>
                <button className="blue-button card-button" id="demoBtn"
                  onClick={handleDemoRedirect}>
                  Book a Demo
                </button>
              </div>

              <div className="trust-badges-row">
                <img src="assets/ai_ats_crm/demo_logo_1.png" alt="Capterra" />
                <img
                  src="assets/ai_ats_crm/demo_logo_2.png"
                  alt="Software Advice"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiAtsCrm;
