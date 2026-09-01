import { forwardRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import TypingAnimation from './TypingAnimation';
import './Hero.css';

const Hero = forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section ref={ref} className="hero">
      <div className="hero-container">
        <div className="hero-background">
          <motion.h1 
            className="hero-portfolio-text"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            PORTFOLIO
          </motion.h1>
        </div>

        <div className="hero-content">
          <div className="hero-left">
            <motion.div 
              className="hero-intro"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="label">HELLO, I'M</span>
              <h2 className="hero-name glow-text">
                ZABIR HUSSAIN
              </h2>
              <h3 className="hero-title hover-text">JAVA BACKEND DEVELOPER</h3>
            </motion.div>

            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              I build reliable, scalable and secure backend systems using Java, Spring Boot, REST APIs and modern backend technologies.
            </motion.p>

            <motion.div 
              className="hero-availability"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <span className="availability-dot"></span>
              <span className="availability-text">OPEN TO WORK</span>
            </motion.div>

            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <a 
                href="https://github.com/zabirhussain41" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary magnetic-btn"
              >
                VIEW PROJECTS
              </a>
              <a 
                href="https://drive.google.com/file/d/1kjrlKjbkd4PaE9dkVTuig0uVoriHsm8y/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn magnetic-btn"
              >
                DOWNLOAD RESUME
              </a>
              <div className="certificates-dropdown">
                <button className="btn btn-accent magnetic-btn">
                  CERTIFICATES
                </button>
                <div className="certificates-menu">
                  <a 
                    href="https://drive.google.com/file/d/1xY6eJ_NG_1QeRAmashS9tsfBlKdi1GUM/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    Python Certificate
                  </a>
                  <a 
                    href="https://drive.google.com/file/d/13lbMqEQtNfJbC7738nQVlI8CRDq1QbcC/view?usp=drive_link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    JSpiders Certificate
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="hero-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="portrait-container floating">
              <div className="portrait-background pulse-ring"></div>
              <div className="portrait-image">
                <img 
                  src="/zabir-portrait.jpg" 
                  alt="Zabir Hussain"
                  className="portrait-img"
                  onLoad={() => console.log('Image loaded successfully')}
                  onError={(e) => {
                    console.error('Image failed to load:', e);
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="hero-side-labels">
          <div className="side-label right">
            <span>SPRING BOOT</span>
            <span>REST APIs</span>
            <span>MICROSERVICES</span>
            <span>DATABASES</span>
            <span>CLOUD & DEVOPS</span>
            <span>SECURE SYSTEMS</span>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;