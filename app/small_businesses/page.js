import React from "react";
import "./small_businesses.css";
import FAQs from "@/components/FAQs/FAQs";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const SmallBusinesses = () => {
  const faqs = [
    {
      question: "Do I need a dedicated HR person to use SorsX?",
      answer:
        "No. SorsX is designed so founders, managers, and small teams can run professional-level hiring without a full HR department. The AI guides you through job setup, interviews, and shortlisting.",
    },
    {
      question: "Is this too advanced for a small business?",
      answer:
        "Not at all. Think of SorsX as an easy-to-use AI interview assistant. You don’t have to understand AI to benefit from it; just describe the role, and the platform handles the complex parts in the background.",
    },
    {
      question: "Can I use SorsX if I only hire a few people a year?",
      answer:
        "Yes. SorsX is ideal for occasional hiring because it saves you from spinning up a whole process from scratch. When you need to hire, everything: JD, AI interviews, shortlists, is ready to go.",
    },
    {
      question: "How does pricing work for small businesses?",
      answer:
        "Pricing is built to be accessible. You can start with a small plan tailored to your hiring volume, then scale as your team grows without surprise fees or long-term lock-in.",
    },
    {
      question: "Will SorsX replace my judgment in hiring?",
      answer:
        "No. SorsX surfaces your top candidates using AI recruiting and AI interview scoring, but you always make the final decision. Think of it as a smart filter, not a replacement for your intuition.",
    },
  ];

  return (
    <>
      {/* header  */}
      <Header />
      {/* hero section  */}
      <section className="hero-section hospitality-hero padding-y">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="page-name-wrapper">
              <p className="page-name-text">Small Businesses</p>
            </div>
            <h1 className="main-heading">
              <span className="highlight">Hire Like</span> a Big Team, With Just
              You
            </h1>
            <p className="sub-text">
              SorsX is an AI recruiting platform and AI interview software that
              helps small businesses attract, screen, and interview candidates
              automatically so you can hire in minutes, not months.
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
              src="assets/small_businesses/hero_img.png"
              alt="hospitality hero"
            />
          </div>
        </div>
      </section>

      {/* <!-- outreach section --> */}
      <section className="info-section outreach-section padding-y">
        <div className="container">
          <div className="info-content">
            <div className="page-name-text">Product Overview</div>
            <h3>AI Hiring Software That Feels Like an Extra Recruiter</h3>
            <p className="section-description">
              Write a job description, post it, and let SorsX do the heavy
              lifting. Our AI evaluates resumes, runs AI video interviews, and
              shortlists the best candidates so you don’t have to spend nights
              and weekends in your inbox.
            </p>
            <ul className="hero-bullets">
              <li className="bullet-item">
                <img
                  src="assets/small_businesses/check_icon.svg"
                  alt="check"
                  className="bullet-icon"
                />
                <span className="text-T1">
                  All-in-one mini ATS for small teams
                </span>
              </li>
              <li className="bullet-item">
                <img
                  src="assets/small_businesses/check_icon.svg"
                  alt="check"
                  className="bullet-icon"
                />
                <span className="text-T1">
                  AI interview tools that run 24/7 while you work on the
                  business
                </span>
              </li>
              <li className="bullet-item">
                <img
                  src="assets/small_businesses/check_icon.svg"
                  alt="check"
                  className="bullet-icon"
                />
                <span className="text-T1">
                  No need to hire a recruiter to get recruiter-level results
                </span>
              </li>
            </ul>
          </div>
          <div className="info-image">
            <img src="assets/small_businesses/hiring_img.png" alt="AI Hiring" />
          </div>
        </div>
      </section>

      {/* <!-- from job to shortlist section --> */}
      <section className="info-section shortlist-section padding-y">
        <div className="container">
          <div className="info-content">
            <div className="page-name-text">
              How It Works for Small Businesses
            </div>
            <h3>From Job Post to Shortlist in a Few Clicks</h3>
            <p className="section-description">
              SorsX automatically generates your job description, syncs with job
              boards, invites every applicant to an AI video interview, and
              scores candidates for you. In about 3 minutes, you can see who’s
              worth meeting and move straight to making an offer.
            </p>
            <ul className="hero-bullets">
              <li className="bullet-item">
                <img
                  src="assets/small_businesses/check_icon.svg"
                  alt="check"
                  className="bullet-icon"
                />
                <span className="text-T1">
                  Auto-generated JDs and interview questions for your role and
                  industry
                </span>
              </li>
              <li className="bullet-item">
                <img
                  src="assets/small_businesses/check_icon.svg"
                  alt="check"
                  className="bullet-icon"
                />
                <span className="text-T1">
                  AI interviewer that screens every applicant fairly and
                  consistently
                </span>
              </li>
              <li className="bullet-item">
                <img
                  src="assets/small_businesses/check_icon.svg"
                  alt="check"
                  className="bullet-icon"
                />
                <span className="text-T1">
                  Simple dashboard that shows top candidates without complex
                  filters
                </span>
              </li>
            </ul>
          </div>
          <div className="info-image">
            <img
              src="assets/small_businesses/shortlist_img.png"
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
            <h3 className="hiring-title">Real Impact for Small Teams</h3>
          </div>

          <div className="hiring-grid">
            {/* <!-- time saved Card --> */}
            <div className="hiring-card">
              <div className="hiring-card-image">
                <img
                  src="assets/small_businesses/time_saved_img.png"
                  alt="time saved"
                />
              </div>
              <div className="hiring-card-content">
                <h3 className="hiring-title">2h 10m</h3>
                <h6>Time saved per candidate</h6>
                <p className="text-T1">
                  Small businesses don’t have recruiting coordinators. SorsX
                  saves about 2 hours and 10 minutes per applicant by automating
                  resume review, screening, and AI video interviews, freeing you
                  to focus on customers and operations.
                </p>
              </div>
            </div>

            {/* <!-- less time Card --> */}
            <div className="hiring-card">
              <div className="hiring-card-image">
                <img
                  src="assets/small_businesses/less_time_img.png"
                  alt="Less time spent"
                />
              </div>
              <div className="hiring-card-content">
                <h3 className="hiring-title">80%</h3>
                <h6>Less time spent reviewing CVs</h6>
                <p className="text-T1">
                  Instead of reading every resume, you review a short list of
                  pre-interviewed candidates. Our AI interviewing tools surface
                  the best fits so you can spend time on conversations, not
                  paperwork.
                </p>
              </div>
            </div>

            {/* <!-- paltform Card --> */}
            <div className="hiring-card">
              <div className="hiring-card-image">
                <img
                  src="assets/small_businesses/platform_img.png"
                  alt="platform"
                />
              </div>
              <div className="hiring-card-content">
                <h3 className="hiring-title">1</h3>
                <h6>Platform to manage all candidates</h6>
                <p className="text-T1">
                  Use SorsX as a simple applicant tracking system. Store
                  resumes, AI interview results, and hiring decisions in one
                  place, without paying enterprise ATS prices or juggling
                  spreadsheets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- faq section --> */}
      <FAQs faqsData={faqs} />

      {/* footer */}
      <Footer />
    </>
  );
};

export default SmallBusinesses;
