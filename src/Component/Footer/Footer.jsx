import React from "react";
import "./Footer.css";
import youtube from "../../assets/youtube_icon.png";
import twitter from "../../assets/twitter_icon.png";
import instagram from "../../assets/instagram_icon.png";
import facebook from "../../assets/facebook_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_icons">
        <img src={youtube} alt="" />
        <img src={instagram} alt="" />

        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preference</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright_text">
        © 2024 Netflix, Inc. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
