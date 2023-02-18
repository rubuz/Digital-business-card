import React from "react";
import "./Info.css";
import photo from "../assets/Rectangle90.png";
import emaiIcon from "../assets/Mail.svg";
import linkedinIcon from "../assets/linkedin.svg";
import "./Info.css";

const Info = () => {
  return (
    <div className="info__container">
      <img src={photo} alt="portrait photo" />
      <div className="info__titles">
        <h1>Laura Smith</h1>
        <h2>Frontend Developer</h2>
        <a href="#" target="_blank" rel="noopener noreferrer">
          laurasmith.website
        </a>
      </div>
      <div className="info__buttons">
        <button className="info__email-btn">
          <img src={emaiIcon} alt="email icon" />
          Email
        </button>
        <button className="info__linkedin-btn">
          <img src={linkedinIcon} alt="linkedin icon" />
          LinkedIn
        </button>
      </div>
    </div>
  );
};

export default Info;
