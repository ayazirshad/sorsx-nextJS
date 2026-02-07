import React from "react";
import "../terms_of_service/terms_of_service.css";

const AcceptableUsePolicy = () => {
  return (
    <div>
      {/* <!-- terms content --> */}
      <main class="terms-container padding-y">
        <div class="container">
          <div class="terms-header">
            <h1>Acceptable Use Policy</h1>
            <p class="text-T1">Last updated: January 27, 2026</p>
          </div>

          <div class="terms-content">
            <div class="terms-section">
              <p>
                <strong>
                  This Acceptable Use Policy ("AUP") applies to your access to
                  and use of the SorsX services (the "Services") and is
                  incorporated by reference into the SorsX SaaS Master Terms of
                  Service (the "Terms"). Capitalized terms not defined here have
                  the meanings given in the Terms.
                </strong>
              </p>
            </div>

            <div class="terms-section">
              <h3>1. Prohibited Activities</h3>
              <p>You may not use (or allow others to use) the Services to:</p>
              <ul>
                <li>
                  Violate any law, regulation, or legally binding requirement
                  (including employment, anti-discrimination, privacy, and
                  communications laws);
                </li>
                <li>
                  Send spam or unsolicited communications, or conduct unlawful
                  outreach, including without required consent or opt-out
                  mechanisms;
                </li>
                <li>
                  Misrepresent identity or affiliation, or engage in fraud or
                  deceptive practices;
                </li>
                <li>
                  Collect, scrape, harvest, or mine data from the Services
                  except as expressly permitted by the Terms;
                </li>
                <li>
                  Probe, scan, or test the vulnerability of any system or
                  network, or breach or circumvent security or authentication
                  measures;
                </li>
                <li>
                  Upload, transmit, or distribute malware, viruses, or other
                  harmful code;
                </li>
                <li>
                  Interfere with, disrupt, or degrade the integrity or
                  performance of the Services or third-party systems;
                </li>
                <li>
                  Use the Services to develop, train, benchmark, or support a
                  competing product or service (except as expressly permitted by
                  the Terms);
                </li>
                <li>
                  Upload or process Highly Sensitive Data unless expressly
                  required for your lawful use case and permitted by the
                  Services.
                </li>
              </ul>
            </div>

            <div class="terms-section">
              <h3>2. Highly Sensitive Data</h3>
              <p>
                Unless expressly permitted in writing by SorsX, you must not
                upload or submit highly sensitive data to the Services,
                including:
              </p>
              <ul>
                <li>
                  Government-issued identifiers (e.g., Social Security numbers,
                  passport numbers) beyond what is necessary for lawful hiring
                  workflows;
                </li>
                <li>Precise financial account numbers;</li>
                <li>Health, medical, or disability information;</li>
                <li>
                  Biometric identifiers used for unique identification (unless
                  required and lawful);
                </li>
                <li>
                  Information about a person’s sex life or sexual orientation.
                </li>
              </ul>
              <p>
                If you choose to submit such information, you are solely
                responsible for ensuring a lawful basis and implementing all
                required safeguards.
              </p>
            </div>

            <div class="terms-section">
              <h3>3. Fair and Lawful Hiring Use</h3>
              <p>
                The Services may generate outputs such as summaries, scores, and
                recommendations. You are responsible for:
              </p>
              <ul>
                <li>Conducting appropriate human review;</li>
                <li>
                  Ensuring outputs are not used in a discriminatory or unlawful
                  manner; and
                </li>
                <li>
                  Providing all required notices and obtaining consents
                  (including for recordings and AI-assisted analysis).
                </li>
              </ul>
            </div>

            <div class="terms-section">
              <h3>4. Enforcement</h3>
              <p>
                SorsX may investigate violations of this AUP and may suspend or
                terminate access to the Services for violations, as permitted by
                the Terms. SorsX may also report unlawful conduct to law
                enforcement or other authorities where required or appropriate.
              </p>
            </div>

            <div class="terms-section">
              <h3>5. Contact</h3>
              <p>
                Questions about this AUP may be sent to SorsX through your
                account manager or via the legal notice address in the Terms.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AcceptableUsePolicy;
