import React from "react";
import "@/app/(main)/terms_of_service/terms_of_service.css";

const OptOutRequest = () => {
  return (
    <div>
      {/* <!-- terms content --> */}
      <main className="terms-container padding-y">
        <div className="container">
          <div className="terms-header">
            <h1>Opt Out Request</h1>
          </div>

          <div className="terms-content">
            <div className="terms-section">
              <p>
                SorsX LLC (“SorsX”) operates recruiting and hiring software and
                may maintain a candidate database used for sourcing, matching,
                and headhunting (the “SorsX Candidate Database”). Depending on
                your location, you may have the right to opt out of the “sale”
                or “sharing” of your personal information (including for
                targeted advertising) and/or request removal of your information
                from the SorsX Candidate Database.
              </p>
              <p>
                You may request that SorsX remove your profile and personal
                information from the SorsX Candidate Database and suppress
                future outreach from SorsX.
              </p>
              <p>
                If we remove your information, we may retain a minimal record
                necessary to honor your request (for example, a suppression list
                entry) and to comply with legal obligations.
              </p>
            </div>

            <div className="terms-section">
              <form className="optout-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">
                      Your first name (optional)
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="First name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="lastName">Your last name (optional)</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email address"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="linkedin">LinkedIn Profile Link</label>
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    placeholder="https://www.linkedin.com/in/..."
                  />
                </div>

                <div className="form-footer">
                  <button
                    type="submit"
                    className="blue-border-button zero-margin"
                  >
                    <p>Review Request</p>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OptOutRequest;
