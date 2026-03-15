import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layers, Smartphone, Cpu } from 'lucide-react';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

export const Services = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const itemsRef = useRef([]);

  const services = [
    {
      title: 'Full-Stack Development',
      desc: 'From frontend interactions to backend APIs, I build complete web solutions. I work with modern stacks to deliver apps that are scalable, maintainable, and ready for real-world users.',
      icon: <Layers size={32} />
    },
    {
      title: 'UI/UX & Frontend',
      desc: 'Good design feels effortless. I design and develop responsive, intuitive interfaces that work smoothly across devices, with a strong focus on clarity, accessibility, and performance.',
      icon: <Smartphone size={32} />
    },
    {
      title: 'Optimization',
      desc: 'I focus on building systems that stay reliable as things scale. From handling data efficiently to designing clean architecture, I apply core computer science principles to keep applications fast, stable, and future-ready.',
      icon: <Cpu size={32} />
    }
  ];

  useEffect(() => {
    const el = sectionRef.current;
    
    gsap.fromTo(titleRef.current, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
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
          duration: 1,
          delay: index * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 70%',
          }
        }
      );
    });
  }, []);

  return (
    <section className="section services-section" id="services" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title" ref={titleRef}>
          What I Do <span className="accent-slash">/</span>
        </h2>
        
        <div className="services-grid">
          {services.map((srv, i) => (
            <div 
              key={i} 
              className="service-card hover-target"
              ref={el => itemsRef.current[i] = el}
            >
              <div className="service-icon">{srv.icon}</div>
              <h3 className="service-title">{srv.title}</h3>
              <p className="service-desc">{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
