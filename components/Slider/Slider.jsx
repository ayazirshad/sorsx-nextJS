import React from "react";

const Slider = ({ bgColor = "transparent" }) => {
  return (
    <div
      className="slider container"
      style={{ background: bgColor === "black" ? "#040404" : "transparent" }}
    >
      <div className="slide-track">
        <div className="slide">
          <img src="/assets/index/logo_1.png" alt="scrollLogo" />
        </div>
        <div className="slide">
          <img src="/assets/index/logo_2.png" alt="scrollLogo" />
        </div>
        <div className="slide">
          <img src="/assets/index/logo_3.png" alt="scrollLogo" />
        </div>
        <div className="slide">
          <img src="/assets/index/logo_4.png" alt="scrollLogo" />
        </div>
        <div className="slide">
          <img src="/assets/index/logo_5.png" alt="scrollLogo" />
        </div>
        <div className="slide">
          <img src="/assets/index/logo_6.png" alt="scrollLogo" />
        </div>
        <div className="slide">
          <img src="/assets/index/logo_7.png" alt="scrollLogo" />
        </div>
        <div className="slide">
          <img src="/assets/index/logo_8.png" alt="scrollLogo" />
        </div>
        <div className="slide">
          <img src="/assets/index/logo_1.png" alt="scrollLogo" />
        </div>
        <div className="slide">
          <img src="/assets/index/logo_2.png" alt="scrollLogo" />
        </div>
        <div className="slide">
          <img src="/assets/index/logo_3.png" alt="scrollLogo" />
        </div>
        <div className="slide">
          <img src="/assets/index/logo_4.png" alt="scrollLogo" />
        </div>
        <div className="slide">
          <img src="/assets/index/logo_5.png" alt="scrollLogo" />
        </div>
        <div className="slide">
          <img src="/assets/index/logo_6.png" alt="scrollLogo" />
        </div>
        <div className="slide">
          <img src="/assets/index/logo_7.png" alt="scrollLogo" />
        </div>
        <div className="slide">
          <img src="/assets/index/logo_8.png" alt="scrollLogo" />
        </div>
        <div className="slide">
          <img src="/assets/index/logo_1.png" alt="scrollLogo" />
        </div>
        <div className="slide">
          <img src="/assets/index/logo_2.png" alt="scrollLogo" />
        </div>
        <div className="slide">
          <img src="/assets/index/logo_3.png" alt="scrollLogo" />
        </div>
        <div className="slide">
          <img src="/assets/index/logo_4.png" alt="scrollLogo" />
        </div>
        <div className="slide">
          <img src="/assets/index/logo_5.png" alt="scrollLogo" />
        </div>
        <div className="slide">
          <img src="/assets/index/logo_6.png" alt="scrollLogo" />
        </div>
        <div className="slide">
          <img src="/assets/index/logo_7.png" alt="scrollLogo" />
        </div>
        <div className="slide">
          <img src="/assets/index/logo_8.png" alt="scrollLogo" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
