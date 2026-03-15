import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { SkillsGlobe } from './SkillsGlobe';
import { ErrorBoundary } from './ErrorBoundary';
import './Skills.css';

const StaticSkills = () => {
  const skills = [
    'C++', 'Java', 'JavaScript', 'Python', 'HTML', 'CSS', 
    'Bootstrap', 'Spring MVC', 'React JS', 'Node.js', 
    'MySQL', 'MongoDB', 'GitHub', 'Figma'
  ];
  
  return (
    <div className="static-skills-grid">
      {skills.map(skill => (
        <div key={skill} className="static-skill-pill">{skill}</div>
      ))}
    </div>
  );
};

export const Skills = () => {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="skills-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            DEVELOPER <br />
            DESIGNER <br />
            CREATOR <span className="accent-slash">/</span>
          </motion.h2>
          <motion.div 
            className="skills-intro"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Expertise</h3>
            <p>A specialized toolkit that enables me to build high-performance, intuitive, and visually stunning digital products.</p>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="skills-content"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <ErrorBoundary fallback={<StaticSkills />}>
          <Suspense fallback={<div className="loading-globe">Loading Skills World...</div>}>
            <SkillsGlobe />
          </Suspense>
        </ErrorBoundary>
      </motion.div>
    </section>
  );
};
