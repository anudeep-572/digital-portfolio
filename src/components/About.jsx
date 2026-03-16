import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

export const About = () => {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <motion.div
          className="about-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-content">
            <h2 className="section-title">
              ABOUT ME <span className="accent-slash">/</span>
            </h2>
            <div className="about-text">
              <p className="about-name">Hi, I'm <span className="text-glow">Anudeep</span></p>
              <h3 className="about-expertise">Fullstack Software Developer</h3>
              <p className="about-description">
                I specialize in building robust and scalable web applications by combining strong backend logic with intuitive frontend design. With a solid foundation in full-stack development, I create efficient, user-focused digital solutions that are both functional and seamless to use.

              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <span className="stat-number">2025</span>
                  <span className="stat-label">Active Year</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Software Tools</span>
                </div>
              </div>
            </div>
          </div>
          <div className="about-visual">
            <div className="about-image-wrapper">
              <img src="/anudeep.png" alt="Anudeep Reddy" className="about-image" />
              <div className="creative-blob"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
