import React from 'react';
import { FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import './FloatingCV.css';

export const FloatingCV = () => {
  return (
    <motion.a
      href="https://pdflink.to/33c6a2f4/"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-cv hover-target"
      initial={{ opacity: 0, scale: 0, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1.5 
      }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
      title="View CV"
    >
      <div className="cv-icon-wrapper">
        <FileText size={24} />
      </div>
      <div className="cv-tooltip">VIEW CV</div>
    </motion.a>
  );
};
