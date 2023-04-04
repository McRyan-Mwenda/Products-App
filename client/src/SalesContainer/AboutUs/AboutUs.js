import React, { useEffect } from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animations";
import "./AboutUs.css";

export default function AboutUs(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "Alliance in Motion Global Inc. distributes and markets top-of-the line food supplements manufactured by Nature’s Way USA, and premium blended beverages. AIM Global is the only direct sales company accredited by Nature’s Way USA as its exclusive distributor for Direct Sales in the Philippines.",

    highlights: {
      bullets: [
        "Lorem ipsum dolor sit amet",
        "consectetur adipiscing elit",
        "sed do eiusmod tempor incididunt ut labore",
        "Duis aute irure dolor in reprehenderit in",
        "Excepteur sint occaecat cupidatat non proident",
      ],
      heading: "Here are a few highlights:",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-us-container screen-container" id={props.id || ""}>
      <div className="about-us-parent">
        <ScreenHeading title={"About Us"} subHeading={"Why Choose Us"} />
        <div className="about-us-card">
          <div className="about-us-profile"></div>
          <div className="about-us-details">
            <span className="about-us-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-us-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-us-options">
              <button className="btn primary-btn"> Buy Products</button>
              <button className="btn highlighted-btn"> Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
