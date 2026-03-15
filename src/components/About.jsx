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
              <h3 className="about-expertise">3D Developer & Motion Designer</h3>
              <p className="about-description">
                I specialize in bridging the gap between technical development and creative visual design. 
                With a strong foundation in coding and a passion for 3D arts, I create immersive 
                digital experiences that are both functional and visually stunning.
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
               {/* Decorative elements or a 3D avatar could go here */}
               <div className="creative-blob"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
