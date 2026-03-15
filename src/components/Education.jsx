import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap } from 'lucide-react';
import './Works.css'; // Reusing Works CSS styles for the list format

gsap.registerPlugin(ScrollTrigger);

export const Education = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const itemsRef = useRef([]);

  const educationList = [
    { 
      title: 'Lovely Professional University', 
      type: 'Bachelor of Technology - CSE (CGPA: 7.00)', 
      year: '2023 - Present' 
    },
    { 
      title: 'Resonance Institution', 
      type: 'Intermediate (Percentage: 94%)', 
      year: '2022 - 2023' 
    },
    { 
      title: 'Montessori Indus High School', 
      type: 'Higher Studies (Percentage: 92%)', 
      year: '2020 - 2021' 
    }
  ];

  useEffect(() => {
    const el = sectionRef.current;
    
    gsap.fromTo(titleRef.current, 
      { opacity: 0, x: -50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
        }
      }
    );

    itemsRef.current.forEach((item, index) => {
      gsap.fromTo(item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
          }
        }
      );
    });
  }, []);

  return (
    <section className="section works-section" id="education" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title" ref={titleRef}>
          EDUCATION <span className="accent-slash">/</span>
        </h2>
        
        <div className="works-list">
          {educationList.map((edu, i) => (
            <div 
              key={i} 
              className="work-item hover-target"
              ref={el => itemsRef.current[i] = el}
            >
              <div className="work-item-content">
                <div className="work-info">
                  <span className="work-type">{edu.type}</span>
                  <h3 className="work-title" style={{fontSize: 'clamp(1.5rem, 3vw, 3rem)'}}>{edu.title}</h3>
                </div>
                <div className="work-meta">
                  <span className="work-year">{edu.year}</span>
                  <div className="work-icon">
                    <GraduationCap size={32} />
                  </div>
                </div>
              </div>
              <div className="work-item-bg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
