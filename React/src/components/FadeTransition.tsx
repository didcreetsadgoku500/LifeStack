import { useState, useEffect } from 'react';

const FadeTransition = ({ children, fade_duration }: any) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentChildren, setCurrentChildren] = useState(children);

  if (fade_duration == null) {
    fade_duration = 500;
  }

  useEffect(() => {
    if (children !== currentChildren) {
      setIsVisible(false);
      const timer = setTimeout(() => {
        setCurrentChildren(children);
        setIsVisible(true);
      }, fade_duration); // Wait for fade out to complete

      return () => clearTimeout(timer);
    }
  }, [children, currentChildren]);

  return (
    <div 
      className={`transition-opacity duration-${fade_duration} ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {currentChildren}
    </div>
  );
};

export default FadeTransition;
