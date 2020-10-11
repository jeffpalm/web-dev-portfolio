const variants = {
  core: {
    initial: {
      opacity: 0,
      scale: 0.5
    },
    enter: (delay) => ({
      opacity: 1,
      scale: 1,
      transition: { delay }
    })
  }
};

export default variants;
