import { useState, useEffect } from 'react';
import './Navigation.css';

function Navigation({ onNavigate, refs }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (ref) => {
    onNavigate(ref);
  };

  return (
    <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-left">
          <span className="nav-name">ZABIR HUSSAIN</span>
          <span className="nav-label">JAVA BACKEND DEVELOPER</span>
        </div>
        
        <div className="nav-right">
          <span className="nav-label nav-label-right">AVAILABLE FOR OPPORTUNITIES</span>
          <div className="nav-links">
            <button onClick={() => handleNavClick(refs.aboutRef)} className="nav-link hover-text">
              ABOUT
            </button>
            <button onClick={() => handleNavClick(refs.skillsRef)} className="nav-link hover-text">
              SKILLS
            </button>
            <button onClick={() => handleNavClick(refs.projectsRef)} className="nav-link hover-text">
              PROJECTS
            </button>
            <button onClick={() => handleNavClick(refs.hireMeRef)} className="nav-link hover-text">
              HIRE ME
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;