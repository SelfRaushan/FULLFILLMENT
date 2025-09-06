// src/components/Footer.jsx

import React from "react";

import facebookIcon from "../assets/icons8-facebook-48.png";
import instagramIcon from "../assets/icons8-instagram-48.png";
import twitterIcon from "../assets/icons8-twitter-bird-48.png";

const Footer = () => (
  <footer style={{
    textAlign: "center",
    marginTop: 20,
    padding: "32px 0 16px 0",
    background: "#FFFFFF",
    fontFamily: "inherit"
  }}>
    <div style={{ fontSize: 22, marginBottom: 16 }}>
      Jacksonville, FL
    </div>
    <div style={{ fontSize: 20, marginBottom: 8 }}>
      (954)759-1783
      <br />
      (954) 955-1151
    </div>
    <div className="social-icons" style={{ margin: "20px 0", display: "flex", justifyContent: "center" }}>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 8px" }}>
        <img src={facebookIcon} alt="Facebook" width={32} height={32} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 8px" }}>
        <img src={instagramIcon} alt="Instagram" width={32} height={32} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ margin: "0 8px" }}>
        <img src={twitterIcon} alt="Twitter" width={32} height={32} />
      </a>
    </div>
    <div style={{ fontSize: 18, marginTop: 12 }}>
      Designed BY HHS FULFILLMENTS
    </div>
  </footer>
);

export default Footer;
