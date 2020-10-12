import { SCROLL_SPEED } from 'assets/data/constants';

const variants = {
  core: {
    initial: {
      opacity: 0,
      scale: 0.5
    },
    enter: (delay) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: delay + SCROLL_SPEED / 1000
      }
    })
  }
};

export default variants;
