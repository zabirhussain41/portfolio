import { useEffect, useState, useRef } from 'react';
import './CustomCursor.css';

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef({ x: 0, y: 0 });
  const requestRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('.btn')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const animateCursor = () => {
      setPosition(prev => ({
        x: prev.x + (cursorRef.current.x - prev.x) * 0.08,
        y: prev.y + (cursorRef.current.y - prev.y) * 0.08
      }));
      requestRef.current = requestAnimationFrame(animateCursor);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    requestRef.current = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      <div 
        className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`
        }}
      />
      <div 
        className="custom-cursor-dot"
        style={{
          left: `${cursorRef.current.x}px`,
          top: `${cursorRef.current.y}px`
        }}
      />
    </>
  );
}

export default CustomCursor;