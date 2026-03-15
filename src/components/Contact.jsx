import React from 'react';
import './Contact.css';

export const Contact = () => {
  return (
    <footer className="contact-section section" id="contact">
      <div className="container contact-container">
        <div className="contact-top">
          <h2 className="contact-title">
            Let's Make <br />
            It Happen <span className="accent-slash">/</span>
          </h2>
          <div className="contact-info">
            <p className="contact-subtitle">Phone: +91-8699145109</p>
            <a href="mailto:anudeep10878@gmail.com" className="email-link hover-target">
              anudeep10878@gmail.com ↗
            </a>
          </div>
        </div>
        
        <div className="contact-divider"></div>
        
        <div className="contact-bottom">
          <div className="footer-links">
            <a href="#works" className="hover-target">Projects</a>
            <a href="#education" className="hover-target">Education</a>
            <a href="#certificates" className="hover-target">Certificates</a>
          </div>
          
          <div className="footer-socials">
            <a href="https://linkedin.com/in/Anudeep" target="_blank" rel="noreferrer" className="hover-target">LinkedIn</a>
            <a href="https://github.com/Anudeep" target="_blank" rel="noreferrer" className="hover-target">GitHub</a>
          </div>
          
          <div className="footer-copyright">
            <p>© 2026 Anudeep Reddy Reddygari. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
