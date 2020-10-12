const variants = {
  linkBtn: {
    initial: () => ({
      y: '-50%',
      opacity: 0,
      scale: 0.9
    }),
    enter: (custom) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.5 + custom * 0.1
      }
    })
  }
};

export default variants;
