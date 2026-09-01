import { forwardRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  const codeExample = `/**
 * About Me - Zabir Hussain
 * Java Backend Developer
 */

public class AboutMe {
    
    private String name = "Zabir Hussain";
    private String role = "Java Backend Developer";
    private String location = "Mumbai";
    
    // Core Competencies
    private String[] skills = {
        "Java", "Spring Boot", "REST APIs",
        "MySQL", "Hibernate/JPA", "Spring Security",
        "Microservices", "Docker", "Git/GitHub"
    };
    
    // Professional Focus
    public void buildBackendSystems() {
        developReliableAPIs();
        designScalableArchitecture();
        implementSecurityMeasures();
        optimizeDatabasePerformance();
    }
    
    // Technical Interests
    private void exploreBackendTechnologies() {
        studySpringBootFramework();
        learnMicroservicesPatterns();
        practiceCloudDeployment();
        masterContainerization();
    }
    
    // Career Goals
    public void careerObjectives() {
        contributeToOpenSource();
        solveComplexBackendChallenges();
        buildSecureScalableSystems();
        continuousLearning();
    }
}`;

  return (
    <section ref={ref} className="about">
      <div className="container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>ABOUT ME</h2>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="about-description">
              I'm a Java Backend Developer focused on building reliable, efficient and scalable backend applications. I enjoy working with Java, Spring Boot, REST APIs, databases and secure application architecture.
            </p>
            
            <p className="about-secondary">
              I'm interested in understanding how software works behind the scenes — from HTTP requests and APIs to business logic, databases, authentication, caching, containers and deployment.
            </p>

            <div className="about-keypoints">
              <h4>Key Points:</h4>
              <ul>
                <li>Strong foundation in Java ecosystem and Spring framework</li>
                <li>Experience building RESTful APIs and microservices</li>
                <li>Knowledge of database design and optimization</li>
                <li>Focus on writing clean, maintainable, and secure code</li>
                <li>Continuous learner keeping up with modern backend technologies</li>
              </ul>
            </div>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-number">01</span>
                <span className="highlight-text">BACKEND DEVELOPMENT</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">02</span>
                <span className="highlight-text">API DESIGN</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">03</span>
                <span className="highlight-text">DATABASE DESIGN</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">04</span>
                <span className="highlight-text">SECURE APPLICATIONS</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-code"
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="code-window">
              <div className="code-header">
                <div className="code-dots">
                  <span className="code-dot red"></span>
                  <span className="code-dot yellow"></span>
                  <span className="code-dot green"></span>
                </div>
                <span className="code-title">AboutMe.java</span>
              </div>
              <div className="code-content">
                <pre className="code-block">
                  <code>{codeExample}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;