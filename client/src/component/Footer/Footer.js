import React from "react";

import "./Footer.css";

const Footer = () => (
  <>
    <div className="footer-block"></div>
    <div className="footer">
      <div className="footer-container">
        <p>
          View this project on{" "}
          <a
            className="profile"
            href="https://github.com/kumuthu-vinsura/u-vote_project"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
        <p>
          Made with by{" "}
          <a
            className="profile"
            href="https://kumuthu-vinsura.github.io/uxvote"
            target="_blank"
            rel="noopener noreferrer"
          >
            Group 06
          </a>
          .
        </p>
      </div>
    </div>
  </>
);

export default Footer;
