import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>DECBASE</h4>
          <p>But I must explain to you all this mistaken idea of denouncing pleasure.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>About Our Company</li>
            <li>Services We Provide</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>About Company</li>
            <li>Our Testimonials</li>
            <li>Get a Free Quote</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Sagrada Familia, Herba Street Front USA</p>
          <p>example@gmail.com</p>
          <p>+123591</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <span className="icon">FB</span>
            <span className="icon">TW</span>
            <span className="icon">IG</span>
            <span className="icon">IN</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;