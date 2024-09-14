import { useState, useEffect } from 'react';

const FadeTransition = ({ children }: any) => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentChildren, setCurrentChildren] = useState(children);

  useEffect(() => {
    if (children !== currentChildren) {
      setIsVisible(false);
      const timer = setTimeout(() => {
        setCurrentChildren(children);
        setIsVisible(true);
      }, 500); // Wait for fade out to complete

      return () => clearTimeout(timer);
    }
  }, [children, currentChildren]);

  return (
    <div 
      className={`transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {currentChildren}
    </div>
  );
};

export default FadeTransition;
