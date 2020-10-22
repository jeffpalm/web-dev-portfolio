import React from 'react';
import PropTypes from 'prop-types';
// STYLE/ ANIMATION
import useStyles from './EnterArrowStyle';
import variants from './EnterArrowAnimation';
// THIRD PARTY
import { motion } from 'framer-motion';
import { ScrollLink } from 'react-scroll';
import { SCROLL_SPEED } from 'assets/data/constants';

const MotionLink = ScrollLink(motion.svg);

const EnterArrow = ({ to }) => {
  const classes = useStyles();

  return (
    <MotionLink
      id='enterArrow'
      className={classes.root}
      xmlns='http://www.w3.org/2000/svg'
      width='100'
      height='50'
      variants={variants}
      initial='initial'
      animate={['enter', 'active']}
      exit='initial'
      to={to}
      smooth
      spy
      duration={SCROLL_SPEED}
      aria-label="Click to enter Jeff Palmer's portfolio"
    >
      <path
        d='M5 5 L50 40 L95 5'
        stroke={'url(#linear)'}
        strokeWidth='3px'
        strokeLinecap='round'
        fillOpacity={0}
      />
    </MotionLink>
  );
};

EnterArrow.propTypes = {
  to: PropTypes.string.isRequired
};

export default EnterArrow;
