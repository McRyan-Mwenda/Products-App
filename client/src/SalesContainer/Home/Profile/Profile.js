import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../Utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              {/* Copy-Paste the link to the socials in the anchor(#) */}
              <a href="#">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              This is <span className="highlighted-text">Alliance Global</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Healthy Products☕",
                    2000,
                    "Fully Nutritious🥗",
                    2000,
                    "Affordable💵",
                    2000,
                    "Globally Recognized🗺️",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit...
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              
            >
              {" "}
              Buy Products
            </button>
            <button className="btn highlighted-btn"> Contact Us</button>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
