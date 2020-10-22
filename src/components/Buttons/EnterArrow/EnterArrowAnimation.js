const variants = {
  initial: {
    opacity: 0,
    y: 100,
    scaleX: 0
  },
  enter: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 1.2
    }
  },
  active: {
    y: [0, 5, 0],
    transition: {
      duration: 1,
      type: 'spring',
      stiffness: 100,
      damping: 20,
      repeat: Infinity
    }
  }
};

export default variants;
