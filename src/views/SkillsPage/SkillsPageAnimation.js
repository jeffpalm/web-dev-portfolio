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
  },
  text: {
    initial: {
      y: '50%',
      opacity: 0
    },
    enter: (i) => ({
      y: '0%',
      opacity: 1,
      transition: {
        delay: i * 0.1 + SCROLL_SPEED / 1000
      }
    }),
    exit: {
      y: '50%',
      opacity: 0
    }
  }
};

export default variants;
