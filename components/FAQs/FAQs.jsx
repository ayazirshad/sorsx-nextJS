"use client";

import React, { useState } from "react";
import "./faqs.css";

const FAQs = ({ faqsData }) => {
  const [activeIndex, setActiveIndex] = useState(0); // First item open by default

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section padding-y">
      <div className="container faq-container">
        <div className="faq-left">
          <h3>Frequently Asked Questions</h3>
          <p className="section-description">
            Find quick answers to the most commonly asked questions.
          </p>
        </div>

        <div className="faq-right">
          <div className="faq-accordion">
            {faqsData.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${activeIndex === index ? "active" : ""}`}
              >
                <div
                  className="faq-header"
                  onClick={() => toggleFAQ(index)}
                  style={{ cursor: "pointer" }}
                >
                  <h6 className="faq-question">{faq.question}</h6>
                  <img
                    src={
                      activeIndex === index
                        ? "/assets/index/minus_icon.png"
                        : "/assets/index/plus_icon.png"
                    }
                    alt="toggle"
                    className="faq-icon"
                  />
                </div>
                <div className="faq-body">
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
