import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './Creative.css';

const SoftwaresModal = ({ isOpen, onClose, type }) => {
  const toolkits = {
    "3D Designing": [
      {
        name: "DAZ 3D",
        use: "Specialized in professional character creation, rigging, and complex posing for realistic digital humans."
      },
      {
        name: "Blender",
        use: "All-in-one powerhouse for 3D modeling, sculpting, advanced rendering, and comprehensive scene assembly."
      },
      {
        name: "EmberGen",
        use: "Leading tool for high-fidelity, real-time volumetric fluid simulations like fire, smoke, and explosions."
      },
      {
        name: "Marvelous Designer",
        use: "Industry standard for creating incredibly realistic 3D cloth simulations and intricate fashion designs."
      },
      {
        name: "FaceGen Artist",
        use: "Powerful software for generating highly detailed and customizable 3D human faces from photographs."
      },
      {
        name: "Adobe Substance 3D Painter",
        use: "Professional-grade 3D texturing and PBR material painting for industry-leading surface detail."
      }
    ],
    "Motion Graphics": [
      {
        name: "Adobe After Effects",
        use: "The industry standard for motion graphics, visual effects, and sophisticated compositing."
      },
      {
        name: "Blender",
        use: "A versatile 3D suite used for creating complex geometry, motion simulations, and cinematic 3D animations."
      }
    ]
  };

  const currentToolkit = toolkits[type] || [];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-portal">
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <div className="modal-container" onClick={onClose}>
            <motion.div 
              className="modal-content"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={onClose}><X size={24} /></button>
              <h2 className="modal-header">{type.toUpperCase()} TOOLKIT <span className="accent-slash">/</span></h2>
              <div className="softwares-list">
                {currentToolkit.map((sw, i) => (
                  <div key={i} className="software-item">
                    <h3 className="software-name">{sw.name}</h3>
                    <p className="software-use">{sw.use}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export const Creative = () => {
  const [modalType, setModalType] = useState(null);

  const isModalOpen = !!modalType;

  React.useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const creativeItems = [
    {
      title: "3D Designing",
      description: "Crafting immersive 3D environments and assets using Industry standard tools.",
      image: "/three_d_design_visual.png",
      tags: ["Blender", "Maya", "Texturing"],
      onClick: () => setModalType("3D Designing")
    },
    {
      title: "Motion Graphics",
      description: "Bringing designs to life with dynamic animations and cinematic effects.",
      image: "/motion_graphics_visual.png",
      tags: ["After Effects", "VFX", "Transitions"],
      onClick: () => setModalType("Motion Graphics")
    }
  ];

  return (
    <section className="creative-section" id="creative">
      <div className="container">
        <motion.div 
          className="creative-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            BESIDE CODING <br /> I ALSO DO <span className="accent-slash">/</span>
          </h2>
        </motion.div>

        <div className="creative-grid">
          {creativeItems.map((item, index) => (
            <motion.div 
              key={index}
              className={`creative-card ${item.onClick ? 'clickable' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onClick={item.onClick}
            >
              <div className="creative-image-container">
                <img src={item.image} alt={item.title} className="creative-image" />
                <div className="creative-overlay">
                  <div className="creative-tags">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="creative-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="creative-info">
                <div className="title-wrapper">
                  <h3 className="creative-title">{item.title}</h3>
                  {item.onClick && <span className="click-hint">Click to expand</span>}
                </div>
                <p className="creative-description">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <SoftwaresModal 
        isOpen={isModalOpen} 
        onClose={() => setModalType(null)} 
        type={modalType}
      />
    </section>
  );
};
