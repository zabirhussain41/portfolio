import { forwardRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Projects.css';

const Projects = forwardRef((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const projects = [
    {
      number: '01',
      title: 'E-Commerce Backend',
      description: 'A REST API backend for an online shopping system built with Java and Spring Boot. The application includes user registration and JWT authentication, product listing and categories, shopping cart management, and order placement and tracking.',
      technologies: ['Java 17', 'Spring Boot 3', 'Spring Security', 'Hibernate', 'JPA', 'MySQL', 'Maven', 'JWT'],
      features: ['User registration', 'JWT authentication', 'Product listing', 'Product categories', 'Shopping cart management', 'Order placement', 'Order tracking'],
      github: 'https://github.com/zabirhussain41/ecommerce-backend',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=60'
    },
    {
      number: '02',
      title: 'Smart Contact Management',
      description: 'A Java-based contact management application demonstrating backend development with a Spring-based architecture together with a modern frontend setup.',
      technologies: ['Java', 'Spring Boot', 'Maven', 'JavaScript', 'Tailwind CSS'],
      features: ['Contact management', 'Backend application', 'Frontend integration', 'Responsive interface'],
      github: 'https://github.com/zabirhussain41/smart_contact_management-',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60'
    },
    {
      number: '03',
      title: 'Blog Page',
      description: 'A Java-based blog application demonstrating web application development with a Spring Boot backend and containerization setup.',
      technologies: ['Java', 'Spring Boot', 'Maven', 'Docker', 'Docker Compose'],
      features: ['Blog application', 'Spring Boot backend', 'Containerized development', 'Docker Compose setup'],
      github: 'https://github.com/zabirhussain41/blog_page',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=60'
    }
  ];

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

  useEffect(() => {
    const handleScroll = () => {
      const projectElements = document.querySelectorAll('.project-item');
      projectElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.7) {
          setCurrentProject(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={ref} className="projects">
      <div className="container">
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2>SELECTED PROJECTS</h2>
        </motion.div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              className="project-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="project-number">{project.number}</div>
              <div className="project-content">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-technologies">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="project-details">
                  <h3 className="project-title hover-text">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-actions">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-secondary magnetic-btn"
                    >
                      GITHUB ↗
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;