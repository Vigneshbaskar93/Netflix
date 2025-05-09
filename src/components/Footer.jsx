import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top-text">
        Read about Netflix TV shows and movies and watch bonus videos on Tudum.com.
      </div>

      <div className="footer-contact">Questions? <a href="/">Contact us.</a></div>

      <div className="footer-links">
        <ul>
          <li><a href="/">FAQ</a></li>
          <li><a href="/">Investor Relations</a></li>
          <li><a href="/">Privacy</a></li>
          <li><a href="/">Speed Test</a></li>
        </ul>
        <ul>
          <li><a href="/">Help Centre</a></li>
          <li><a href="/">Jobs</a></li>
          <li><a href="/">Cookie Preferences</a></li>
          <li><a href="/">Legal Notices</a></li>
        </ul>
        <ul>
          <li><a href="/">Account</a></li>
          <li><a href="/">Ways to Watch</a></li>
          <li><a href="/">Corporate Information</a></li>
          <li><a href="/">Only on Netflix</a></li>
        </ul>
        <ul>
          <li><a href="/">Media Centre</a></li>
          <li><a href="/">Terms of Use</a></li>
          <li><a href="/">Contact Us</a></li>
        </ul>
      </div>

      <div className="footer-language">
        <button>
          🌐 English ▼
        </button>
      </div>
    </footer>
  );
};

export default Footer;
