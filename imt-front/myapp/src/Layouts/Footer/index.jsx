import React from "react";
import "./index.scss"

function Footer() {
  return (
    <div className="footer_container">
      <div className="footer">
        <div className="footer_logo">
          <img
            src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/signature.png"
            alt=""
          />
          <div className="footer_input">
          <input type="text" placeholder="Your Email" />
          <button>Send</button>
          </div>
        </div>
        <div className="footer_about">
          <p>About</p>
          <ul>
            <li>About Us</li>
            <li>Our Partners</li>
            <li>Our Services</li>
          </ul>
        </div>
        <div className="footer_contact">
          <p>Contact</p>
          <ul>
            <li>Contact Us</li>
            <li>FAQ Page</li>
            <li>About me</li>
          </ul>
        </div>
        <p>Follow Us</p>
      </div>
    </div>
  );
}

export default Footer;
