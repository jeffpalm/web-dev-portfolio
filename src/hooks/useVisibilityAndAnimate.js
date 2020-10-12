import { useEffect } from 'react';

const useVisibilityAndAnimate = (isVisible, animationControls) => {
  useEffect(() => {
    const startEnterAnimation = async () => {
      await animationControls.start('enter');
    };
    const startExitAnimation = async () => {
      await animationControls.start('initial');
    };
    const checkVisibilityAndAnimate = async () => {
      if (isVisible) {
        await startEnterAnimation();
      } else {
        await startExitAnimation();
      }
    };
    checkVisibilityAndAnimate();
  }, [isVisible, animationControls]);
};

export default useVisibilityAndAnimate;
