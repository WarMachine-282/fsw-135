import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer role="contentinfo">
      <ul className="footer-links">
        <li className="link_wrapper" >
          <a href="#" className="link-1">Privacy & Cookies Policy</a>
        </li>
        <li className="link_wrapper">
          <a href="#" className="link-2">Web Terms of Use</a>
        </li>
        <li className="link_wrapper">
          <a href="#" className="link-3">Do Not Sell My Information</a>
        </li>
        <li className="link_wrapper">
          <a href="#" className="link-4">Accessibility</a>
        </li>
      </ul>
      <p className="footer_copyright">
        ©2021 DigiVote, Inc. All Rights Reserved. DigiVote® is a registered
        trademark of DigiVote, Inc. and is registered with the U.S. Patent and
        Trademark Office.
      </p>
    </footer>
  );
};

export default Footer;
