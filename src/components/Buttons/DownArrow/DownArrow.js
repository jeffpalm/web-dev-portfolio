import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// STYLE/ ANIMATION
import useStyles from './DownArrowStyle';
import variants from './DownArrowAnimation';
// THIRD PARTY
import { AnimationControls, motion, useAnimation } from 'framer-motion';
import { ScrollLink } from 'react-scroll';
import { SCROLL_SPEED } from 'assets/data/constants';

const MotionLink = ScrollLink(motion.svg);

const DownArrow = ({ to, backgroundColor, controls }) => {
  const classes = useStyles();
  const arrowControls = useAnimation();

  useEffect(() => {
    if (to === 'home') {
      arrowControls.start({
        rotate: 180
      });
    } else {
      arrowControls.start({
        rotate: 0
      });
    }
  }, [to, arrowControls]);

  const handleHoverStart = () => {
    arrowControls.start({
      y: [0, to === 'home' ? -5 : 5, 0],
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 100,
        repeat: Infinity
      }
    });
  };

  const handleHoverEnd = () => {
    arrowControls.start({
      y: 0
    });
  };

  return (
    <MotionLink
      className={classes.root}
      xmlns='http://www.w3.org/2000/svg'
      width='60'
      height='60'
      variants={variants}
      initial='initial'
      animate={controls}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      to={to === 'home' ? 'about' : to}
      smooth
      spy
      duration={SCROLL_SPEED}
    >
      <rect id='arrowBox' width='60' height='60' fill={backgroundColor} />
      <motion.path
        d='M20 27 L30 37 L40 27'
        stroke='white'
        strokeWidth='5px'
        strokeLinecap='round'
        strokeOpacity={1}
        fillOpacity={0}
        animate={arrowControls}
      />
    </MotionLink>
  );
};

DownArrow.propTypes = {
  to: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  controls: PropTypes.instanceOf(AnimationControls)
};

export default DownArrow;
