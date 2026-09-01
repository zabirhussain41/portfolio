import { useRef, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import HireMe from './components/HireMe';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ThreeBackground from './components/ThreeBackground';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const hireMeRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      <CustomCursor />
      <ScrollProgress />
      <ThreeBackground />
      <Navigation 
        onNavigate={scrollToSection}
        refs={{ aboutRef, skillsRef, projectsRef, hireMeRef }}
      />
      <Hero ref={heroRef} />
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      <HireMe ref={hireMeRef} />
      <ContactForm ref={contactRef} />
      <Footer />
    </div>
  );
}

export default App;