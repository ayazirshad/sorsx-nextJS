import React from "react";
import "../terms_of_service/terms_of_service.css";

const CookieNotice = () => {
  return (
    <div>
      {/* <!-- cookie content --> */}
      <main className="terms-container padding-y">
        <div className="container">
          <div className="terms-header">
            <h1>Cookie Notice</h1>
            <p className="text-T1">Last updated: January 27, 2026</p>
          </div>

          <div className="terms-content">
            <div className="terms-section">
              <p>
                <strong>
                  This Cookie Notice explains how SorsX LLC ("SorsX", "we",
                  "us", or "our") uses cookies and similar technologies
                  (collectively, "Cookies") on our websites and in connection
                  with certain online features of the Services.
                </strong>
              </p>
              <p>
                <strong>
                  This Notice should be read together with our Privacy Policy.
                </strong>
              </p>
            </div>

            <div className="terms-section">
              <h3>1. What Cookies Are</h3>
              <p>
                Cookies are small text files placed on your device when you
                visit a website. We may also use similar technologies such as
                pixels, SDKs, and local storage.
              </p>
            </div>

            <div className="terms-section">
              <h3>2. Types of Cookies We Use</h3>
              <p>We may use the following categories of Cookies:</p>
              <ul>
                <li>
                  <strong>Strictly Necessary Cookies:</strong> Required for core
                  site functionality (e.g., security, session management).
                </li>
                <li>
                  <strong>Performance/Analytics Cookies:</strong> Help us
                  understand how the site is used and improve performance.
                </li>
                <li>
                  <strong>Functional Cookies:</strong> Remember settings and
                  preferences.
                </li>
                <li>
                  <strong>Advertising/Targeting Cookies:</strong> Used to
                  deliver or measure interest-based advertising, where
                  applicable.
                </li>
              </ul>
            </div>

            <div className="terms-section">
              <h3>3. Third-Party Cookies</h3>
              <p>
                Some Cookies may be placed by third parties that provide
                services to us (for example, analytics or advertising partners).
                Those third parties may collect information about your online
                activities over time and across different websites.
              </p>
            </div>

            <div className="terms-section">
              <h3>4. Your Choices</h3>
              <p>You can manage Cookies through:</p>
              <ul>
                <li>
                  <strong>Browser settings:</strong> You can block or delete
                  Cookies through your browser.
                </li>
                <li>
                  <strong>Cookie preference tools:</strong> Where available, you
                  can set your preferences via our cookie banner or preference
                  center.
                </li>
                <li>
                  <strong>Targeted advertising opt-outs:</strong> Depending on
                  your jurisdiction, you may have the right to opt out of
                  targeted advertising disclosures.
                </li>
              </ul>
              <p>
                If you disable Cookies, some site features may not function
                properly.
              </p>
            </div>

            <div className="terms-section">
              <h3>5. Changes to this Cookie Notice</h3>
              <p>
                We may update this Cookie Notice from time to time. We will post
                the updated version and revise the "Last updated" date.
              </p>
            </div>

            <div className="terms-section">
              <h3>6. Contact Us</h3>
              <p>
                For questions about Cookies or this Notice, contact
                <a
                  href="mailto:privacy@sorsx.com"
                  style={{ color: "#4e6bea", textDecoration: "underline" }}
                >
                  privacy@sorsx.com{" "}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CookieNotice;
