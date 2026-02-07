import React from "react";
import "../Footer/Footer.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer padding-y">
      <div className="footer-container container">
        <div className="footer-top">
          <div className="footer-logo-section">
            <img
              src="/assets/index/SorsX-Logo-Black.png"
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
              <h4 className="footer-heading">Business Size</h4>
              <ul className="footer-links">
                <li>
                  <Link href="/midsize_businesses">Midsize Businesses</Link>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Platform</h4>
              <ul className="footer-links">
                <li>
                  <Link href="/sorsx_hire">SorsX Hire</Link>
                </li>
                <li>
                  <Link href="/ai_interviewer">AI Interviewer</Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Privacy & Security</h4>
              <ul className="footer-links">
                <li>
                  <Link href="/terms_of_service">Terms of Use</Link>
                </li>
                <li>
                  <Link href="/privacy_policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/candidate_notice_and_consent">
                    Candidate Notice and Consent
                  </Link>
                </li>
                <li>
                  <Link href="/cookie_notice">Cookie Settings</Link>
                </li>
                <li>
                  <Link href="/data_processing_addendum">
                    Data Processing Addendum
                  </Link>
                </li>
                <li>
                  <Link href="/opt_out_request">
                    Do Not Sell My Personal Information
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="footer-bottom">
          <p className="copyright">© 2026 SorsX. All rights reserved.</p>
          <div className="social-links">
            <a href="/https://www.instagram.com/sorsx.hq">
              <img src="/assets/index/instagram.svg" alt="Instagram" />
            </a>
            <a href="/https://www.linkedin.com/company/sorsx">
              <img src="/assets/index/linkedIn.svg" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
