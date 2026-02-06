import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer padding-y">
      <div className="footer-container container">
        <div className="footer-top">
          <div className="footer-logo-section">
            <img
              src="assets/index/SorsX-Logo-Black.png"
              alt="SorsX"
              className="footer-logo"
            />
            <p className="text-T1">
              SorsX is an AI recruiting software and AI hiring platform that
              plugs into your existing hiring process, automating sourcing,
              screening, and AI video interviews so teams focus only on the best
              candidates.
            </p>
          </div>
          <div className="footer-links-grid">
            <div className="footer-column">
              <h4 className="footer-heading">Industries</h4>
              <ul className="footer-links">
                <li>
                  <a href="hospitality.html">Hospitality</a>
                </li>
                <li>
                  <a href="construction.html">Construction</a>
                </li>
                <li>
                  <a href="tech.html">Tech</a>
                </li>
                <li>
                  <a href="manufacturing.html">Manufacturing</a>
                </li>
                <li>
                  <a href="professional.html">Professional Services</a>
                </li>
                <li>
                  <a href="healthcare.html">Healthcare</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Business Size</h4>
              <ul className="footer-links">
                <li>
                  <a href="small_businesses.html">Small Businesses</a>
                </li>
                <li>
                  <a href="midsize_businesses.html">Midsize Businesses</a>
                </li>
                <li>
                  <a href="enterprise.html">Enterprise</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Platform</h4>
              <ul className="footer-links">
                <li>
                  <a href="sorsx_ai.html">SorsX AI</a>
                </li>
                <li>
                  <a href="sorsx_hire.html">SorsX Hire</a>
                </li>
                <li>
                  <a href="ai_interviewer.html">AI Interviewer</a>
                </li>
                <li>
                  <a href="sorsx_next.html">SorsX Next</a>
                </li>
                <li>
                  <a href="ai_ats_crm.html">AI ATS & CRM</a>
                </li>
                {/* <li><a href="demo_page_2.html">Demo</a></li> */}
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                {/* <li><a href="about_us.html">About Us</a></li> */}
                <li>
                  <a href="careers.html">Careers</a>
                </li>
                <li>
                  <a href="sorsx_blog.html">Newsroom</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Privacy & Security</h4>
              <ul className="footer-links">
                <li>
                  <a href="terms_of_service.html">Terms of Use</a>
                </li>
                <li>
                  <a href="privacy_policy.html">Privacy Policy</a>
                </li>
                <li>
                  <a href="candidate_notice_and_consent.html">
                    Candidate Notice and Consent
                  </a>
                </li>
                <li>
                  <a href="cookie_notice.html">Cookie Settings</a>
                </li>
                <li>
                  <a href="data_processing_addendum.html">
                    Data Processing Addendum
                  </a>
                </li>
                <li>
                  <a href="opt_out_request.html">
                    Do Not Sell My Personal Information
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="footer-bottom">
          <p className="copyright">© 2026 SorsX. All rights reserved.</p>
          <div className="social-links">
            <a href="https://www.instagram.com/sorsx.hq">
              <img src="assets/index/instagram.svg" alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com/company/sorsx">
              <img src="assets/index/linkedIn.svg" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
