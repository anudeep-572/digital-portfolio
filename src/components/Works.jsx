import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Github } from 'lucide-react';
import './Works.css';

gsap.registerPlugin(ScrollTrigger);

export const Works = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const itemsRef = useRef([]);

  const works = [
    { 
      title: 'Trade Track', 
      type: 'Trading Journal & Analysis', 
      year: '2025', 
      link: 'https://tradetrack-journal.netlify.app/',
      github: 'https://github.com/anudeep-572/TradeTrack'
    },
    { 
      title: 'LawEzy', 
      type: 'Online Legal Help Platform', 
      year: '2025', 
      link: 'https://www.lawezy.in' 
    },
    { 
      title: 'CPU Scheduler', 
      type: 'Scheduling Algorithms Simulator', 
      year: '2025', 
      link: 'https://cpu-scheduler-simulator.netlify.app/',
      github: 'https://github.com/anudeep-572/Intelligent_CPU_Scheduler'
    },
    { 
      title: 'Veterinary Clinic', 
      type: 'Java Spring Backend Project', 
      year: '2025', 
      link: 'https://github.com/anudeep-572/Veternary_Clinic/tree/master',
      github: 'https://github.com/anudeep-572/Veternary_Clinic/tree/master'
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
    <section className="section works-section" id="works" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title" ref={titleRef}>
          PROJECTS <span className="accent-slash">/</span>
        </h2>
        
        <div className="works-list">
          {works.map((work, i) => (
            <div 
              key={i} 
              className="work-item hover-target"
              ref={el => itemsRef.current[i] = el}
              onClick={() => window.open(work.link, '_blank', 'noopener,noreferrer')}
              style={{ cursor: 'pointer' }}
            >
              <div className="work-item-content">
                <div className="work-info">
                  <span className="work-type">{work.type}</span>
                  <h3 className="work-title">{work.title}</h3>
                </div>
                <div className="work-meta">
                  <span className="work-year">{work.year}</span>
                  <div className="work-icons">
                    {work.github && (
                      <a 
                        href={work.github} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="work-icon github-icon"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        title="View GitHub Repository"
                      >
                        <Github size={24} />
                      </a>
                    )}
                    <div className="work-icon arrow-icon">
                      <ArrowUpRight size={32} />
                    </div>
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
