import { useState, useEffect } from 'react';

function TypingAnimation({ texts, className = '', typingSpeed = 100 }) {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const currentText = texts[0];
    
    const timeout = setTimeout(() => {
      if (!isComplete) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setIsComplete(true);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isComplete, texts, typingSpeed]);

  return (
    <span className={`typing-animation ${className}`}>
      {displayText}
      <span className="typing-cursor">|</span>
    </span>
  );
}

export default TypingAnimation;