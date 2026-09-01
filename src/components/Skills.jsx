import { forwardRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState({});

  const skills = [
    { name: 'Java', level: 95 },
    { name: 'Spring Boot', level: 90 },
    { name: 'REST APIs', level: 92 },
    { name: 'MySQL', level: 88 },
    { name: 'Hibernate / JPA', level: 88 },
    { name: 'Spring Security', level: 88 },
    { name: 'Microservices', level: 82 },
    { name: 'Docker', level: 80 },
    { name: 'Git / GitHub', level: 88 },
    { name: 'Azure / DevOps', level: 75 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars one by one
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => ({
                ...prev,
                [skill.name]: skill.level
              }));
            }, index * 100);
          });
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
  }, [ref, skills]);

  return (
    <section ref={ref} className="skills">
      <div className="container">
        <motion.div 
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="glow-text">MY SKILLS & EXPERTISE</h2>
        </motion.div>

        <div className="skills-content">
          <motion.div 
            className="skills-grid"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                className="skill-item"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.05) }}
              >
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div 
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${animatedSkills[skill.name] || 0}%` }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 + (index * 0.05) }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';

export default Skills;