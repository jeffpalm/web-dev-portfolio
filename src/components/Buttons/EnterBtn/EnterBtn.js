import React from 'react';
import { motion } from 'framer-motion';
import { ScrollLink } from 'react-scroll';
import { SCROLL_SPEED } from '../../../assets/data/constants';
import useHslCycle from '../../../hooks/useHslCycle';
import useStyles from './EnterBtnStyle';
import variants from './EnterBtnAnimation';

const MotionButton = ScrollLink(motion.button);

const EnterBtn = ({ to }) => {
  const colorOne = useHslCycle(1, 0, 'forward');
  const colorTwo = useHslCycle(1, 0, 'backward');

  const classes = useStyles();

  return (
    <MotionButton
      className={classes.enterBtn}
      to={to}
      smooth
      spy
      duration={SCROLL_SPEED}
      variants={variants}
      initial='initial'
      enter='enter'
      exit='initial'
      style={{
        color: colorTwo,
        border: `1px solid ${colorOne}`
        // background: `linear-gradient(90deg, ${colorOne},${colorTwo})`,
        // TODO: Figure out how to apply dynamic linear-gradient onHover
      }}
      whileHover={{
        scale: 1.1
      }}
    >
      Enter
    </MotionButton>
  );
};

export default EnterBtn;
