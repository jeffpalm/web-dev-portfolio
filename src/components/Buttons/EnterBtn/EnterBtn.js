import React from 'react';
import PropTypes from 'prop-types';
// STYLE/ANIMATION
import useStyles from './EnterBtnStyle';
import variants from './EnterBtnAnimation';
// HOOKS
import useHslCycle from '../../../hooks/useHslCycle';
// ASSETS
import { SCROLL_SPEED } from '../../../assets/data/constants';
// THIRD PARTY
import { motion } from 'framer-motion';
import { ScrollLink } from 'react-scroll';

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
      aria-label="Click to enter Jeff Palmer's portfolio"
    >
      Enter
    </MotionButton>
  );
};

EnterBtn.propTypes = {
  to: PropTypes.string.isRequired
};

export default EnterBtn;
