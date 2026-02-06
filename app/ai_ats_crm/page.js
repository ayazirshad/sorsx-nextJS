import React from "react";
import "./ai_ats_crm.css";
import Slider from "@/components/Slider/Slider";
import FAQs from "@/components/FAQs/FAQs";
import Link from "next/link";

const AiAtsCrm = () => {
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
    <>
      {/* <!-- hero  --> */}
      <section class="text-center hero-section">
        <div class="container">
          <div class="page-name-wrapper flex-center">
            <p class="page-name-text">AI ATS & CRM</p>
          </div>
          <h1 class="main-heading">
            <span class="first-word">AI ATS</span> that <br />
            <span>Automates Work</span>
          </h1>
          <p class="sub-text">
            An AI-first applicant tracking system that automates pipelines,
            tasks, and follow-ups while fitting your HR stack.
          </p>
          <div class="btn-wrapper">
            <Link href="demo_page_2.html">
              <button class="blue-border-button">
                <p>Request a demo</p>
              </button>
            </Link>
          </div>

          <div class="mobile-image">
            <img src="assets/ai_ats_crm/hero_mobile_img.png" alt="hero-image" />
          </div>
          <div class="hero-image-wrapper desktop-image">
            <div class="left">
              <img
                src="assets/ai_ats_crm/hero_img.png"
                alt="hero-image"
                class="hero-main-img"
              />
            </div>
            {/* <!-- <div class="right">
            <img
              src="assets/ai_ats_crm/hero_img_2.png"
              alt="corner-image"
              class="hero-corner-img"
            />
          </div> --> */}
          </div>
        </div>
        {/* <!-- slider  --> */}
        <Slider />
      </section>

      {/* <!-- for recruiters section --> */}
      <section class="info-section feature-info-section">
        <div class="container flex">
          <div class="info-content">
            <div class="page-name-text">For Recruiters</div>
            <h3>Pipelines that run themselves</h3>
            <p class="section-description">
              The AI ATS automates the manual steps recruiters do all day,
              status updates, follow-ups, task handoffs, and candidate movement.
              It keeps the pipeline clean and moving without constant reminders.
              Recruiters spend less time managing tools and more time making
              hires.
            </p>
          </div>
          <div class="info-image">
            <img
              src="assets/ai_ats_crm/AiATS(section2).png"
              alt="for recruiters"
            />
          </div>
        </div>
      </section>

      {/* <!-- outreach section --> */}
      <section class="info-section outreach-section padding-y">
        <div class="container flex">
          <div class="info-image">
            <img
              src="assets/ai_ats_crm/for_hiring_img_2.png"
              alt="For Hiring managers"
              class="mobile-image"
            />
            <img
              src="assets/ai_ats_crm/AiATS(Section3).png"
              alt="For Hiring managers"
              class="desktop-image"
            />
          </div>
          <div class="info-content">
            <div class="page-name-text">For Hiring Managers</div>
            <h3>Less coordination, faster decisions</h3>
            <p class="section-description">
              Managers shouldn’t need training to move hiring forward. The AI
              ATS simplifies reviews, keeps feedback structured, and reduces
              back-and-forth across stakeholders. Everyone sees what matters and
              what’s next, so offers move faster.
            </p>
            <div class="mt-3">
              <Link href="demo_page_1.html">
                <button class="white-button">See AI ATS in action</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- talent section --> */}
      <section class="info-section feature-info-section CRM-sec padding-y">
        <div class="container flex-between gap-10">
          <div class="info-content">
            <div class="page-name-text">For TA & Ops</div>
            <h3>A recruiting CRM on steroids</h3>
            <p class="section-description">
              Build searchable talent pools, track engagement, and keep
              relationships warm without spreadsheets. The AI ATS helps teams
              stay proactive rather than reactive, especially when hiring across
              many roles. It’s built for speed, consistency, and long-term
              pipeline value.
            </p>
          </div>
          <div class="info-image">
            <img src="assets/ai_ats_crm/AIATS(Section4).png" alt="Talent" />
          </div>
        </div>
      </section>

      {/* <!-- cards section --> */}
      <section class="cards-section padding-y">
        <div class="bg-blur-circles">
          <div class="blur-circle circle-1"></div>
          <div class="blur-circle circle-2"></div>
          <div class="blur-circle circle-3"></div>
        </div>
        <div class="container grid-cards">
          {/* <!-- left large card --> */}
          <div class="card card-large">
            <div class="card-info">
              <div class="card-icon">
                <img src="assets/ai_ats_crm/ai_video_icon.png" alt="AI Icon" />
              </div>
              <h5>Less admin, more hiring</h5>
              <p class="card-desc">
                Automate repetitive ATS tasks that slow recruiters down across
                multiple roles.
              </p>
            </div>

            <div class="card-main-img">
              <img src="assets/ai_ats_crm/AIATS(card1).png" alt="interview" />
            </div>
          </div>

          {/* <!-- right column with two cards --> */}
          <div class="card-stack">
            {/* <!-- top card --> */}
            <div class="card card-horizontal">
              <div class="card-info">
                <div class="card-icon">
                  <img
                    src="assets/ai_ats_crm/message_icon.png"
                    alt="Checklist Icon"
                  />
                </div>
                <h5>Cleaner collaboration</h5>
                <p class="card-desc">
                  Keep recruiters and managers aligned with structured steps,
                  clear ownership, and fewer dropped handoffs.
                </p>
              </div>
              <div class="card-side-img">
                <img src="assets/ai_ats_crm/AiATS(Card2).png" alt="Decisions" />
              </div>
            </div>

            {/* <!-- bottom card --> */}
            <div class="card card-horizontal">
              <div class="card-info">
                <div class="card-icon">
                  <img src="assets/ai_ats_crm/mail_icon.png" alt="User Icon" />
                </div>
                <h5>Better pipeline control</h5>
                <p class="card-desc">
                  Track candidates end-to-end with automation that supports
                  quality and candidate experience.
                </p>
              </div>
              <div class="card-side-img">
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
      <section class="feedback-section padding-y">
        <div class="container feedback-container">
          <div class="ceo-photo-wrapper">
            <img
              src="assets/ai_ats_crm/manager_img.png"
              alt="manager"
              class="ceo-photo"
            />
          </div>
          <div class="feedback-card">
            <span class="quote-mark">“</span>
            <p class="feedback-text">
              SorsX Next turned interview and resume data into instant
              comparisons, helping us decide faster across multiple roles.
            </p>
            <div class="feedback-footer">
              <div class="ceo-info">
                <h4 class="ceo-name">Canan Berkem</h4>
                <p class="ceo-title">Head of Marketing TADO, Duracell Inc.</p>
              </div>
              <div class="company-logo">
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
      <section class="stop-paying-section padding-y">
        <div class="circles-background">
          <img
            src="assets/ai_ats_crm/stop_circle_3.png"
            alt=""
            class="stop-circle circle-large"
          />
          <img
            src="assets/ai_ats_crm/stop_circle_2.png"
            alt=""
            class="stop-circle circle-medium"
          />
          <img
            src="assets/ai_ats_crm/stop_circle_1.png"
            alt=""
            class="stop-circle circle-small"
          />
        </div>
        {/* <!-- content div  --> */}
        <div class="container stop-paying-container z-10">
          <div class="stop-paying-content">
            <div class="tag-pill white-pill">Take the next step</div>
            <h3 class="white-text-1">Stop drowning in applicants</h3>
            <p class="white-text">
              Replace manual screening and scheduling with recruiting automation
              that preserves quality and candidate experience.
            </p>
            <br />
            <p class="white-text">
              Powering AI recruiting for fast-moving hiring teams
            </p>
            <div class="stop-paying-logos">
              <img src="assets/ai_ats_crm/logo_4.png" alt="logo" />
              <img src="assets/ai_ats_crm/logo_5.png" alt="logo" />
              <img src="assets/ai_ats_crm/logo_6.png" alt="logo" />
              <img src="assets/ai_ats_crm/logo_7.png" alt="logo" />
              <img src="assets/ai_ats_crm/logo_3.png" alt="logo" />
              <img src="assets/ai_ats_crm/logo_2.png" alt="logo" />
            </div>
          </div>

          <div class="stop-paying-card-wrapper">
            <div class="stop-paying-card">
              <h6>Request a Demo</h6>
              <p>
                Get a personalized walkthrough and see how ScaleHire fits your
                workflow. You'll know in one call if it's right.
              </p>

              <div class="card-input-group">
                <input
                  type="email"
                  placeholder="Email"
                  class="email-input-card"
                  id="emailInputATS"
                  required
                />
                <button class="blue-button card-button" id="demoBtnATS">
                  Book a Demo
                </button>
              </div>

              <div class="trust-badges-row">
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
    </>
  );
};

export default AiAtsCrm;
