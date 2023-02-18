import React from "react";
import twiterIcon from "../assets/Twitter Icon.svg";
import fbIcon from "../assets/Facebook Icon.svg";
import igIcon from "../assets/Instagram Icon.svg";
import ghIcon from "../assets/GitHub Icon.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer__main">
      <a href="www.twitter.com">
        <img src={twiterIcon} alt="twitter icon" />
      </a>
      <a href="www.facebook.com">
        <img src={fbIcon} alt="facebook icon" />
      </a>
      <a href="www.instagram.com">
        <img src={igIcon} alt="instagram icon" />
      </a>
      <a href="www.github.com">
        <img src={ghIcon} alt="github icon" />
      </a>
    </div>
  );
};

export default Footer;
