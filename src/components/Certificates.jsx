import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Award, BookOpen, Star, ExternalLink } from 'lucide-react';
import './Certificates.css';

export const Certificates = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  
  const certificates = [
    {
      title: "Computational Theory",
      issuer: "Infosys",
      date: "2025",
      link: "https://infyspringboard.onwingspan.com/web/en/viewer/html/lex_auth_0135015511562403847605",
      icon: <Award size={24} />
    },
    {
      title: "Python course for Beginners",
      issuer: "Scaler Academy",
      date: "2024",
      link: "https://www.scaler.com/topics/course/python-for-beginners/",
      icon: <Award size={24} />
    },
    {
      title: "Advanced JAVA",
      issuer: "GFG",
      date: "2025",
      link: "https://www.geeksforgeeks.org/certificate/e54f4537c7e77df7b3184ae74aaf1786?utm_source=socials&utm_medium=cc_link",
      icon: <Award size={24} />
    },
    {
      title: "Java Database Connectivity",
      issuer: "GFG",
      date: "2025",
      link: "https://www.geeksforgeeks.org/certificate/bec98a73014b39cfb866fa9a75377c05?utm_source=socials&utm_medium=cc_link",
      icon: <Award size={24} />
    },
    {
      title: "After Effects CC Masters",
      issuer: "Udemy",
      date: "2023",
      link: "https://www.udemy.com/certificate/UC-3ea414da-92d0-4f82-825b-9b388769972a/",
      icon: <Award size={24} />
    },
    {
      title: "Complete Blender Megacourse: Beginner to Expert",
      issuer: "Udemy",
      date: "2025",
      link: "https://www.udemy.com/certificate/UC-042dc36b-73eb-4080-a3de-89da4799e227/",
      icon: <Award size={24} />
    },
    {
      title: "Blender and After Effects VFX Masterclass",
      issuer: "Udemy",
      date: "2023",
      link: "https://www.udemy.com/certificate/UC-5f239564-45be-4e44-8ff2-43f8470bb0d8/",
      icon: <Award size={24} />
    },
    {
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      date: "2023",
      link: "https://www.freecodecamp.org/certification/fcc9b0d6b6e-4b6e-4b6e-4b6e-4b6e4b6e4b6e", // Placeholder link
      icon: <Award size={24} />
    }
  ];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Clone items for seamless loop
    const trackWidth = track.scrollWidth;
    const animation = gsap.to(track, {
      x: `-=${trackWidth / 2}`,
      duration: 30,
      ease: 'none',
      repeat: -1,
      onReverseComplete: () => {
        gsap.set(track, { x: 0 });
      }
    });

    // Pause on hover
    const handleMouseEnter = () => animation.pause();
    const handleMouseLeave = () => animation.play();

    track.addEventListener('mouseenter', handleMouseEnter);
    track.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      animation.kill();
      track.removeEventListener('mouseenter', handleMouseEnter);
      track.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="certificates-section" id="certificates" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">
          CERTIFICATIONS <span className="accent-slash">/</span>
        </h2>
      </div>

      <div className="certificates-marquee">
        <div className="certificates-track" ref={trackRef}>
          {/* Double the items for a seamless loop */}
          {[...certificates, ...certificates].map((cert, i) => (
            <a 
              key={i} 
              href={cert.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="certificate-card"
            >
              <div className="certificate-icon">
                {cert.icon}
              </div>
              <h3 className="certificate-title">{cert.title}</h3>
              <div className="certificate-info">
                <span className="cert-issuer">{cert.issuer}</span>
                <span className="cert-date">{cert.date}</span>
                <ExternalLink size={14} style={{ opacity: 0.5 }} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
