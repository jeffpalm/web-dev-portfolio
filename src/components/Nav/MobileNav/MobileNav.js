import React from 'react';
import PropTypes from 'prop-types';
// STYLE/ANIMATION
import useStyles from './MobileNavStyle';
import variants from './MobileNavAnimation';
// ASSETS
import { SCROLL_SPEED } from '../../../assets/data/constants';
// HOOKS
import useVisibilityAndAnimate from '../../../hooks/useVisibilityAndAnimate';
// THIRD PARTY
import { MotionGrid } from '../../MuiMotion/MuiMotion';
import { ScrollLink } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';

const MobileLink = ScrollLink(motion.a);

const MobileNav = ({ isVisible, links }) => {
  const animationControls = useAnimation();
  const classes = useStyles();

  useVisibilityAndAnimate(isVisible, animationControls);

  return (
    <MotionGrid
      className={classes.mobileLinkContainer}
      container
      direction='column'
    >
      {links.map((link, i) => (
        <MobileLink
          key={`${link.text}-${i}`}
          className={classes.MobileLink}
          activeClass={classes.activeMobileLink}
          smooth
          spy
          duration={SCROLL_SPEED}
          to={link.to}
          variants={variants.mobileLink}
          initial='initial'
          animate={animationControls}
          exit='initial'
          custom={i + 1}
          style={{
            borderBottom: i === links.length - 1 ? 'none' : '1px solid grey'
          }}
          isDynamic
        >
          {link.text}
        </MobileLink>
      ))}
    </MotionGrid>
  );
};

MobileNav.propTypes = {
  isVisible: PropTypes.bool,
  links: PropTypes.arrayOf(
    PropTypes.exact({
      text: PropTypes.string,
      to: PropTypes.string
    })
  ).isRequired
};

export default MobileNav;
