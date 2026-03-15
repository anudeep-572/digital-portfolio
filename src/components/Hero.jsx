import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

export const Hero = () => {
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVars = {
    hidden: { y: 100, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
    }
  };

  const firstName = "ANUDEEP REDDY";
  const lastName = "REDDYGARI";

  return (
    <section className="hero-section" id="home">
      <div className="container hero-container">
        <motion.div 
          className="hero-subtext"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span className="hero-role text-gradient">Fullstack Software Engineer</span>
          {/* <span className="hero-location">India</span> */}
        </motion.div>
        
        <div className="hero-title-wrapper" style={{ display: 'flex', flexDirection: 'column' }}>
          <motion.h1 
            className="hero-title"
            style={{ fontSize: 'clamp(3rem, 8vw, 8rem)', marginBottom: '-0.2em' }}
            variants={containerVars}
            initial="hidden"
            animate="show"
          >
            {firstName.split('').map((char, index) => (
              <motion.span 
                key={index} 
                variants={itemVars} 
                className="hero-char"
                style={char === ' ' ? { width: '0.3em' } : {}}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.h1 
            className="hero-title"
            style={{ fontSize: 'clamp(3rem, 8vw, 8rem)', paddingLeft: '2vw' }}
            variants={containerVars}
            initial="hidden"
            animate="show"
          >
            {lastName.split('').map((char, index) => (
              <motion.span 
                key={index} 
                variants={itemVars} 
                className="hero-char"
                style={char === ' ' ? { width: '0.3em' } : {}}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        <motion.div 
          className="hero-scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </motion.div>
      </div>
    </section>
  );
};
