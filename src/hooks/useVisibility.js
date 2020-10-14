import { useState, useEffect } from 'react';

const useVisibility = (ref) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const determineVisibility = () => {
      const { bottom, top } = ref.current.getBoundingClientRect();

      if (top < window.innerHeight && bottom >= 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    determineVisibility();
    window.addEventListener('scroll', determineVisibility);

    return () => {
      window.removeEventListener('scroll', determineVisibility);
    };
  }, [ref]);

  return visible;
};

export default useVisibility;
