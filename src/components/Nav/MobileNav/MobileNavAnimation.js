const variants = {
  mobileLink: {
    initial: {
      x: '-100%',
      opacity: 0,
      scale: 0
    },
    enter: (custom) => ({
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: custom * 0.1
      }
    })
  }
};

export default variants;
