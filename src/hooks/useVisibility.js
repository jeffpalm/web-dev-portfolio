import { useState, useEffect } from 'react';

const useVisibility = (ref) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const determineVisibility = () => {
      const { bottom, top } = ref.current.getBoundingClientRect();

      // console.log(ref.current)
      // if (ref.current.id === 'skills-page') {
      //     console.log(
      //         'top:',
      //         top,
      //         'btm:',
      //         bottom,
      //         'height:',
      //         height,
      //         'wH:',
      //         window.innerHeight
      //     )
      // }
      // console.log('window: ', window)
      // console.log('innerHeight: ', window.innerHeight)
      // console.log(ref)
      // console.log('Scroll up to: ', window.scrollY - (window.scrollY % window.innerHeight))
      // console.log('Scroll down to: ', window.innerHeight - (window.scrollY % window.innerHeight))
      // console.log('elementY: ', elementY)

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
