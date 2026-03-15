import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, MapPin, Calendar } from 'lucide-react';
import './Training.css';

export const Training = () => {
  const trainings = [
    {
      title: "Design Thinking & Figma",
      provider: "University / Workshop",
      date: "2025",
      location: "Hybrid",
      description: "Comprehensive training in UX/UI design principles, prototyping in Figma, and human-centered design methodology."
    }
    // More training items can be added here
  ];

  return (
    <section className="section training-section" id="training">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            TRAINING <span className="accent-slash">/</span>
          </h2>
          
          <div className="training-list">
            {trainings.map((item, index) => (
              <motion.div 
                key={index}
                className="training-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="training-icon">
                  <BookOpen size={24} />
                </div>
                <div className="training-info">
                  <div className="training-header">
                    <h3 className="training-title">{item.title}</h3>
                    <span className="training-date">
                      <Calendar size={14} /> {item.date}
                    </span>
                  </div>
                  <p className="training-provider">{item.provider}</p>
                  <p className="training-description">{item.description}</p>
                  <div className="training-meta">
                    <span className="training-location">
                      <MapPin size={14} /> {item.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
