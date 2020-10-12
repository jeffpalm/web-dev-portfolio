const variants = {
  logo: {
    initial: {
      x: '100%',
      opacity: 0
    },
    enter: (custom) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.5 + custom * 0.2
      }
    })
  }
};

export default variants;
