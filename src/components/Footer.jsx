import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { SiVisa, SiMastercard, SiPaypal, SiAmericanexpress } from 'react-icons/si';
import '../styles/style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-widgets">
            <div className="widget about-widget">
              <h4>About Us</h4>
              <p>We are a multi-vendor marketplace providing the best products from various vendors.</p>
            </div>
            <div className="widget links-widget">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="widget contact-widget">
              <h4>Contact Us</h4>
              <p>123 Market Street, NY</p>
              <p>Email: info@marketplace.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            <div className="widget newsletter-widget">
              <h4>Newsletter</h4>
              <p>Subscribe to our newsletter to get the latest updates.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Your email address" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
            <div className="payment-icons">
              <SiVisa />
              <SiMastercard />
              <SiPaypal />
              <SiAmericanexpress />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
