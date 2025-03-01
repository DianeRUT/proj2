import React, { useState } from 'react';
import paymentMethods from '../assets/payment1.webp';
import '../styles/Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add newsletter subscription logic
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">
          {/* Left Side */}
          <div className="footer-main-column">
          <div className="newsletter-section">
  <h3>Stay up to date</h3>
  <p className="newsletter-description">
    Subscribe to our newsletter and get 30% discount offer in your first order.
  </p>
  <form className="newsletter-form" onSubmit={handleSubmit}>
    <div className="email-input-wrapper">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="line-input"
        required
      />
      <button type="submitline" className="submit-line">
       Submit
      </button>
    </div>
  </form>
</div>

            <div className="footer-columns">
              <div className="footer-col">
                <h4>SHOP</h4>
                <ul>
                  <li>Body Lotion</li>
                  <li>Computer Gadget</li>
                  <li>Camera</li>
                  <li>Electronics</li>
                  <li>Sports</li>
                  <li>Watch</li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>COMPANY</h4>
                <ul>
                  <li>About</li>
                  <li>Who We Are</li>
                  <li>Serieva</li>
                  <li>Help</li>
                  <li>Contact</li>
                  <li>Position</li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>ABOUT</h4>
                <ul>
                  <li>General</li>
                  <li>Shots</li>
                  <li>Contact</li>
                  <li>Woman Carless</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="footer-side-column">
            <div className="help-section">
              <h3>Happy to help</h3>
              <div className="contact-info">
                <p>1279 Thom Street, NY</p>
                <p>Phone: 327-549-3480</p>
                <p>Mail: dsmc@gmail.com</p>
              </div>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </div>

            <div className="accept-for-section">
  <h4>ACCEPT FOR</h4>
  <div className="payment-methods-image">
    <img 
      src={paymentMethods} 
      className="payment-image" 
    />
  </div>
</div>
 
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container">
          <p>© 2023 SURFIT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;