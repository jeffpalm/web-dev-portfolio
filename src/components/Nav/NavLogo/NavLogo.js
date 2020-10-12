import React from 'react';
import PropTypes from 'prop-types';
// STYLE/ANIMATION
import useStyles from './NavLogoStyle';
import variants from './NavLogoAnimation';
// COMPONENTS
import Palmytree from '../../Palmytree/Palmytree';
import { MotionGrid } from '../../MuiMotion/MuiMotion';
import { useAnimation } from 'framer-motion';
import useVisibilityAndAnimate from '../../../hooks/useVisibilityAndAnimate';

const NavLogo = ({ isVisible, newHue }) => {
  const classes = useStyles();
  const animationControls = useAnimation();

  useVisibilityAndAnimate(isVisible, animationControls);

  const changeColorAndSpin = async () => {
    newHue();
    await animationControls.start({
      rotate: [0, 360],
      transition: {
        duration: 0.3
      }
    });
  };

  return (
    <MotionGrid
      className={classes.logoContainer}
      item
      variants={variants.logo}
      initial='initial'
      animate={animationControls}
      exit='initial'
      custom={1}
      onClick={changeColorAndSpin}
    >
      <Palmytree variant='logo' />
    </MotionGrid>
  );
};

NavLogo.propTypes = {
  isVisible: PropTypes.bool,
  newHue: PropTypes.func
};

export default NavLogo;
