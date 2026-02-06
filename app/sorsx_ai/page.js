import React from "react";
import "./sorsx_ai.css";
import Slider from "@/components/Slider/Slider";
import FAQs from "@/components/FAQs/FAQs";

const SorsxAi = () => {
  const faqs = [
    {
      question: "What is AI sourcing?",
      answer:
        "Using AI recruiting agents to identify and engage passive candidates faster than manual sourcing.",
    },
    {
      question: "Which channels does SorsX support?",
      answer:
        "Email, SMS, WhatsApp, and LinkedIn outreach workflows are supported.",
    },
    {
      question: "Does this replace agencies and headhunters?",
      answer:
        "For many teams, yes—SorsX helps reduce agency reliance by delivering qualified shortlists directly.",
    },
    {
      question: "How do you ensure candidate quality?",
      answer:
        "Candidates are qualified through structured screening and AI interviews before they reach hiring managers.",
    },
    {
      question: "Can we target specific locations and skills?",
      answer:
        "Yes—SorsX aligns sourcing to your role criteria and hiring constraints.",
    },
    {
      question: "Does it integrate with our ATS?",
      answer:
        "Yes—SorsX can integrate with ATS/HRIS systems to fit your workflow.",
    },
  ];

  // Example content array for the last two cards
  const rightCards = [
    {
      icon: "assets/sorsx_ai/check_list_icon.png",
      altIcon: "Checklist Icon",
      heading: "Faster pipeline creation",
      desc: "Build qualified slates quickly for niche and high-priority roles.",
      img: "assets/sorsx_ai/SorsXAiPipeline.png",
      altImg: "Faster Pipeline",
    },
    {
      icon: "assets/sorsx_ai/user_list_icon.png",
      altIcon: "User Icon",
      heading: "Higher-quality shortlists",
      desc: "Fewer candidates to review and more confidence in who makes it through.",
      img: "assets/sorsx_ai/SorsXAishortlists.png",
      altImg: "Higher Quality",
    },
  ];

  return (
    <>
      {/* <!-- hero  --> */}
      <section class="text-center hero-section">
        <div class="container">
          <div class="page-name-wrapper flex-center">
            <p class="page-name-text">SorsX AI</p>
          </div>
          <h1 class="main-heading">
            <span class="first-word">AI Recruiting Agents</span>
            <span class="second-word">for</span>
            <br />
            <span>Passive Talent</span>
          </h1>
          <p class="sub-text">
            SorsX sources, engages, and interviews across channels, delivering
            hire-ready shortlists without agencies or extra tools.
          </p>
          <div class="btn-wrapper">
            <a href="demo_page_2.html">
              <button class="blue-border-button">
                <p>Request a demo</p>
              </button>
            </a>
          </div>
          <div class="mobile-image">
            <img src="assets/sorsx_ai/SorsXAiheromobile.png" alt="hero-image" />
          </div>
          <div class="hero-image-wrapper desktop-image">
            <img src="assets/sorsx_ai/SorsXAiherosectio.png" alt="hero-image" />
          </div>
        </div>
      </section>

      {/* slider */}
      <Slider />

      {/* <!-- google maps section --> */}
      <section class="info-section feature-info-section">
        <div class="container flex-between">
          <div class="info-content">
            <div class="page-name-text">For TA Leaders</div>
            <h3>The “Google Maps” of recruiting</h3>
            <p class="section-description">
              Tell SorsX what “great” looks like, then our AI recruiting agents
              take it from there. Built on proprietary patterns and recruiting
              intelligence, SorsX searches broadly and targets precisely. You
              get a smaller, stronger slate without endless sourcing hours.
            </p>
          </div>
          <div class="info-image">
            <img src="assets/sorsx_ai/SorsXAigooglemap.png" alt="Google Maps" />
          </div>
        </div>
      </section>

      {/* <!-- outreach section --> */}
      <section class="info-section outreach-section padding-y">
        <div class="container">
          <div class="info-image">
            <img src="assets/sorsx_ai/SorsXAIinbox.png" alt="For Recruiters" />
          </div>
          <div class="info-content">
            <div class="page-name-text">For Recruiters</div>
            <h3>Multi-channel outreach that converts</h3>
            <p class="section-description">
              SorsX engages candidates where they respond: email, SMS, WhatsApp,
              and LinkedIn, without recruiters living in inboxes. Outreach and
              follow-ups stay consistent, fast, and trackable. You increase
              response rates while protecting candidate experience.
            </p>
            <div class="mt-3">
              <a href="demo_page_1.html">
                <button class="white-button">See SorsX AI in action</button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- hiring team section --> */}
      <section class="info-section feature-info-section padding-y">
        <div class="container flex-between gap-10">
          <div class="info-content">
            <div class="page-name-text">For Hiring Teams</div>
            <h3>Managers only see top candidates</h3>
            <p class="section-description">
              SorsX doesn’t just find names; it helps qualify candidates through
              structured screening and AI interviews. Hiring managers spend time
              only on real contenders, not “maybes.” The result is faster
              pipelines and fewer wasted interviews.
            </p>
          </div>
          <div class="info-image">
            <img
              src="assets/sorsx_ai/SorsXAiHiringTeam.png"
              alt="Hiring Team"
            />
          </div>
        </div>
      </section>

      {/* cards section */}
      <section className="cards-section padding-y">
        <div className="bg-blur-circles">
          <div className="blur-circle circle-1"></div>
          <div className="blur-circle circle-2"></div>
          <div className="blur-circle circle-3"></div>
        </div>

        <div className="container grid-cards">
          {/* left large card */}
          <div className="card card-large">
            <div className="card-info">
              <div className="card-icon">
                <img src="assets/sorsx_ai/ai_icon.png" alt="AI Icon" />
              </div>
              <h5 className="card-heading">Reduce agency dependence</h5>
              <p className="card-desc">
                Replace expensive headhunter workflows with AI sourcing +
                qualification that scales.
              </p>
            </div>

            <div className="card-main-img">
              <img
                src="assets/sorsx_ai/SorsXAIReduceagency.png"
                alt="Reduce Agency"
              />
            </div>
          </div>

          {/* right column with two cards */}
          <div className="card-stack">
            {rightCards.map((card, index) => (
              <div key={index} className="card card-horizontal">
                <div className="card-info">
                  <div className="card-icon">
                    <img src={card.icon} alt={card.altIcon} />
                  </div>
                  <h5 className="card-heading">{card.heading}</h5>
                  <p className="card-desc">{card.desc}</p>
                </div>
                <div className="card-side-img">
                  <img src={card.img} alt={card.altImg} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <!-- feedback section --> */}
      <section class="feedback-section padding-y">
        <div class="container feedback-container">
          <div class="ceo-photo-wrapper">
            <img
              src="assets/sorsx_ai/ceo_img.png"
              alt="Violet Herin"
              class="ceo-photo"
            />
          </div>
          <div class="feedback-card">
            <span class="quote-mark">“</span>
            <p class="feedback-text">
              Projé has utilized the SorsX AI Interviewing process for the past
              six months. It has truly been a game-changer in expediting
              screening and first interviews. It captures exactly what we need
              to make informed decisions about who we will progress to our short
              list of candidates.
            </p>
            <div class="feedback-footer">
              <div class="ceo-info">
                <h4 class="ceo-name">Violet Herin</h4>
                <p class="ceo-title">CEO, Projé Inc.</p>
              </div>
              <div class="company-logo">
                <img
                  src="assets/sorsx_ai/company_logo_img.png"
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
      <section class="stop-paying-section padding-y">
        <div class="circles-background">
          <img
            src="assets/sorsx_ai/stop_circle_3.png"
            alt=""
            class="stop-circle circle-large"
          />
          <img
            src="assets/sorsx_ai/stop_circle_2.png"
            alt=""
            class="stop-circle circle-medium"
          />
          <img
            src="assets/sorsx_ai/stop_circle_1.png"
            alt=""
            class="stop-circle circle-small"
          />
        </div>
        <div class="container text-center z-10">
          <div class="page-name-text white-pill">Take the next step</div>
          <h3 class="section-heading white-text-1">
            Stop paying for pipelines
          </h3>
          <p class="white-text">
            Get qualified candidates without adding sourcing tools or agency
            spend,
            <br />
            while keeping recruiters in control.
          </p>

          <div class="cta-input-group mt-3">
            <input
              type="email"
              placeholder="Email"
              class="email-input"
              id="emailInput"
              required
            />
            <div class="mt-2">
              <button class="white-button mx-auto" id="demoBtn">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SorsxAi;
