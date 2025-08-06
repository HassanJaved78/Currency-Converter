import React from "react";
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div id="about" className="footer-container">

        <div className="footer-section about">
          <h3>About Currency Converter</h3>
          <p>
            This tool helps you convert currencies easily and view live exchange rates. Built with React and designed for simplicity and accuracy.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#converter">Converter</a></li>
            <li><a href="#exchange">Rates</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: hassanjaved0554@gmail.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: abd Street # 1, Pakistan</p>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© Currency Converter. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
