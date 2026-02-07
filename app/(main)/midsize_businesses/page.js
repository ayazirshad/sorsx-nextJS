import FAQs from "@/components/FAQs/FAQs";
import React from "react";
import "./midsize_businesses.css";
import Slider from "@/components/Slider/Slider";

const MidsizeBusinesses = () => {
  const faqs = [
    {
      question: "Can SorsX work alongside our current ATS?",
      answer:
        "Yes. Many midsize companies use SorsX as an AI layer on top of their ATS, handling AI video interviews, scoring, and shortlisting, then feeding the results into existing workflows.",
    },
    {
      question: "How much change management is required?",
      answer:
        "SorsX is designed to fit into current processes. Recruiters and hiring managers still review candidates and make the final decisions. SorsX just handles repetitive tasks and standardizes evaluation.",
    },
    {
      question: "Will our hiring managers have to learn a complex new tool?",
      answer:
        "No. Hiring managers see simple dashboards, shortlists, and AI interview summaries. They don’t need to manage workflows; just review candidates and provide feedback.",
    },
    {
      question: "Is SorsX suitable for both volume and specialized hiring?",
      answer:
        "Yes. The AI interviewer can handle high-volume frontline roles and specialized technical or leadership roles by adapting questions and scoring to each job description.",
    },
    {
      question: "How does SorsX support compliance and fairness?",
      answer:
        "SorsX uses structured, repeatable AI interview processes and transparent criteria for evaluation, which helps reduce bias and creates a more defendable, consistent hiring process.",
    },
  ];

  return (
    <>
      {/* <!-- hero  --> */}
      <section className="hero-section hospitality-hero padding-y">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="page-name-wrapper">
              <p className="page-name-text">Midsize Businesses</p>
            </div>
            <h1 className="main-heading">
              <span className="highlight">Scale Hiring</span> Without Scaling
              Chaos
            </h1>
            <p className="sub-text">
              SorsX is an AI recruiting platform and AI interview software that
              helps midsize companies standardize hiring, reduce recruiter
              workload, and fill key roles faster across departments and
              locations.
            </p>
            <div className="btn-wrapper">
              <a href="demo_page_2.html">
                <button className="blue-border-button">
                  <p>Request a demo</p>
                </button>
              </a>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img
              src="assets/midsize_businesses/hero_img.png"
              alt="hospitality hero"
            />
          </div>
        </div>
      </section>

      {/* slider */}
      <Slider bgColor="black" />

      {/* <!-- outreach section --> */}
      <section className="info-section outreach-section padding-y">
        <div className="container">
          <div className="info-content">
            <div className="page-name-text">Product Overview</div>
            <h3>
              AI Hiring Software That Brings Order to High-Volume Recruiting
            </h3>
            <p className="section-description">
              As your company grows, so does hiring complexity. SorsX
              centralizes AI sourcing, AI video interviews, and shortlisting
              into one recruiting platform so HR, TA, and hiring managers all
              work from the same source of truth.
            </p>
            <ul className="hero-bullets">
              <li className="bullet-item">
                <img
                  src="assets/midsize_businesses/check_icon.svg"
                  alt="check"
                  className="bullet-icon"
                />
                <span className="text-T1">
                  Standardize interviews without scripting your managers
                </span>
              </li>
              <li className="bullet-item">
                <img
                  src="assets/midsize_businesses/check_icon.svg"
                  alt="check"
                  className="bullet-icon"
                />
                <span className="text-T1">
                  One AI recruiting platform instead of multiple disconnected
                  tools
                </span>
              </li>
              <li className="bullet-item">
                <img
                  src="assets/midsize_businesses/check_icon.svg"
                  alt="check"
                  className="bullet-icon"
                />
                <span className="text-T1">
                  Consistent candidate experience across every team
                </span>
              </li>
            </ul>
          </div>
          <div className="info-image">
            <img
              src="assets/midsize_businesses/hiring_img.png"
              alt="AI Hiring"
            />
          </div>
        </div>
      </section>

      {/* <!-- from job to shortlist section --> */}
      <section className="info-section shortlist-section padding-y">
        <div className="container">
          <div className="info-content">
            <div className="page-name-text">
              How It Works for Midsize Businesses
            </div>
            <h3>Make Every Requisition Feel Manageable</h3>
            <p className="section-description">
              For each new role, SorsX generates a tailored job description,
              suggests AI interview questions, screens all applicants with AI
              video interviews, and ranks candidates by fit. Recruiters and
              hiring managers see the same data, which means faster alignment
              and fewer back-and-forth meetings.
            </p>
            <ul className="hero-bullets">
              <li className="bullet-item">
                <img
                  src="assets/midsize_businesses/check_icon.svg"
                  alt="check"
                  className="bullet-icon"
                />
                <span className="text-T1">
                  AI-generated JDs and interview kits for each department
                </span>
              </li>
              <li className="bullet-item">
                <img
                  src="assets/midsize_businesses/check_icon.svg"
                  alt="check"
                  className="bullet-icon"
                />
                <span className="text-T1">
                  AI interviewer that evaluates every candidate using the same
                  criteria
                </span>
              </li>
              <li className="bullet-item">
                <img
                  src="assets/midsize_businesses/check_icon.svg"
                  alt="check"
                  className="bullet-icon"
                />
                <span className="text-T1">
                  Talent intelligence to compare candidates across roles and
                  locations
                </span>
              </li>
            </ul>
          </div>
          <div className="info-image">
            <img
              src="assets/midsize_businesses/manageable_img.png"
              alt="AI Hiring"
            />
            <div className="svg_circle"></div>
          </div>
        </div>
      </section>

      {/* <!-- hospitality hiring section --> */}
      <section className="hiring-section padding-y">
        <div className="container">
          <div className="section-header text-center">
            <h3 className="hiring-title">
              Real Results for Midsize Hiring Teams
            </h3>
          </div>

          <div className="hiring-grid">
            {/* <!-- time saved Card --> */}
            <div className="hiring-card">
              <div className="hiring-card-image">
                <img
                  src="assets/midsize_businesses/midsizebusinesscard1.png"
                  alt="time saved"
                />
              </div>
              <div className="hiring-card-content">
                <h3 className="hiring-title">50%</h3>
                <h6>Reduction in time-to-fill</h6>
                <p className="text-T1">
                  Midsize companies using AI recruiting tools like SorsX cut
                  time-to-fill by up to half by eliminating manual screening and
                  scheduling bottlenecks. Shortlists are generated
                  automatically, so teams move straight to interviews and
                  offers.
                </p>
              </div>
            </div>

            {/* <!-- less time Card --> */}
            <div className="hiring-card">
              <div className="hiring-card-image">
                <img
                  src="assets/midsize_businesses/midsizebusinesscard2.png"
                  alt="Less time spent"
                />
              </div>
              <div className="hiring-card-content">
                <h3 className="hiring-title">2h 10m</h3>
                <h6>Time saved per candidate</h6>
                <p className="text-T1">
                  By automating resume screening and first-round AI interviews,
                  SorsX saves about 2 hours and 10 minutes per candidate. That’s
                  dozens of recruiter hours back every month for strategic
                  projects and stakeholder partnerships.
                </p>
              </div>
            </div>

            {/* <!-- paltform Card --> */}
            <div className="hiring-card">
              <div className="hiring-card-image">
                <img
                  src="assets/midsize_businesses/midsizebusinesscard3.png"
                  alt="platform"
                />
              </div>
              <div className="hiring-card-content">
                <h3 className="hiring-title">1</h3>
                <h6>Consistent hiring process across teams</h6>
                <p className="text-T1">
                  With a single AI interview software handling question sets,
                  scoring, and reporting, you get consistent evaluation across
                  business units, reducing bias and making hiring decisions
                  easier to defend.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* faqs */}
      <FAQs faqsData={faqs} />
    </>
  );
};

export default MidsizeBusinesses;
