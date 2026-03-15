import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Projects', href: '#works' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Creative', href: '#creative' }
  ];

  return (
    <>
      <motion.nav 
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="nav-container">
          <a href="#" className="nav-logo">AR.</a>
          
          <div className="nav-desktop">
            {navLinks.map((link, i) => (
              <a key={i} href={link.href} className="nav-link hover-target">
                {link.name}
              </a>
            ))}
            <a href="#contact" className="nav-cta hover-target">CONTACT ↗</a>
          </div>

          <button className="mobile-menu-btn hover-target" onClick={() => setIsOpen(true)}>
            <Menu size={24} color="#f5f5f5" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ clipPath: 'circle(0% at right top)' }}
            animate={{ clipPath: 'circle(150% at right top)' }}
            exit={{ clipPath: 'circle(0% at right top)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <button className="close-btn hover-target" onClick={() => setIsOpen(false)}>
              <X size={32} color="#f5f5f5" />
            </button>
            <div className="mobile-links">
              {navLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                  className="mobile-link"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            <div className="mobile-socials">
              <a href="https://linkedin.com/in/Anudeep" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/Anudeep" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
