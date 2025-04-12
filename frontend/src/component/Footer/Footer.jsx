import React from "react";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Call to Action Section */}
      <div className="footer-cta">
        <h2>Ready for a next project?</h2>
        <p>Let's get started!</p>
        <button className="cta-button">Contact us</button>
      </div>

      {/* Footer Content */}
      <div className="footer-content">
        <div className="footer-section">
          <h3>Failure Academy</h3>
          <p>© 2025 Shawon</p>
        </div>

        <div className="footer-section">
          <h3>Customers</h3>
          <ul>
            <li>Buyer</li>
            <li>Supplier</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Further Information</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-section social-media">
          <h3>Follow us</h3>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaTelegram />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
