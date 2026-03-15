import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import './About.css';

export const About = () => {
  const containerRef = useRef(null);
  
  // 1. Motion Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 2. Springs for Smoothness
  const springConfig = { damping: 30, stiffness: 400 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3. Transformation for Mask
  const maskImage = useTransform(
    [smoothX, smoothY],
    ([x, y]) => `radial-gradient(circle 150px at ${x}px ${y}px, black 0%, transparent 100%)`
  );

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

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
            <motion.div 
              ref={containerRef}
              className="about-image-wrapper"
              onMouseMove={handleMouseMove}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover="hover"
            >
               {/* Base Portrait */}
               <img src="/anudeep.png" alt="Anudeep Reddy" className="about-image" />
               
               {/* Hover Reveal GIF Layer */}
               <motion.div 
                  className="reveal-layer"
                  style={{
                    WebkitMaskImage: maskImage,
                    maskImage: maskImage,
                  }}
               >
                 <img src="/reveal.gif" alt="Reveal" className="about-image reveal-gif" />
               </motion.div>

               <div className="creative-blob"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
