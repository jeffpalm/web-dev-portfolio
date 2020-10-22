import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// STYLE/ANIMATION
import useStyles from './NavStyle';
import variants from 'components/Nav/NavAnimation';
// COMPONENTS
import NavLinks from './NavLinks/NavLinks';
import NavLogo from './NavLogo/NavLogo';
import SideBar from './SideBar/SideBar';
import { MotionAppBar, MotionToolbar } from '../MuiMotion/MuiMotion';
import MobileNav from './MobileNav/MobileNav';

import { useAnimation } from 'framer-motion';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import useVisibilityAndAnimate from 'hooks/useVisibilityAndAnimate';

const links = [
  { text: 'Home', to: 'home' },
  { text: 'About', to: 'about' },
  { text: 'Skills', to: 'skills' },
  { text: 'Projects', to: 'projects' },
  { text: 'Contact', to: 'contact' }
];

const Nav = ({ dynamicHue, newHue }) => {
  const classes = useStyles();
  const animationControls = useAnimation();

  const isDesktop = useMediaQuery('(min-width:620px)');

  const [navVisibility, setNavVisibility] = useState(false);
  const [mobileNavVisibility, setMobileNavVisibility] = useState(false);

  const toggleMobileNavVisibility = () => {
    setMobileNavVisibility((prev) => !prev);
  };

  const backgroundColor = `hsla(${dynamicHue}, 50%, 30%, 0.8)`;

  useVisibilityAndAnimate(navVisibility, animationControls);

  useEffect(() => {
    if (window.scrollY > 0 && navVisibility) return;
    setNavVisibility(window.scrollY > 0);
    // eslint-disable-next-line
  }, [window.scrollY, navVisibility]);

  return (
    <>
      <ClickAwayListener
        onClickAway={() => {
          setMobileNavVisibility(false);
        }}
      >
        <MotionAppBar
          className={classes.AppBar}
          key='nav-app-bar'
          position='sticky'
          color='inherit'
          variant='outlined'
          variants={variants.appBar}
          initial='initial'
          animate={animationControls}
          exit='initial'
          style={{ backgroundColor }}
        >
          <MotionToolbar key='nav-toolbar'>
            <NavLinks
              isVisible={navVisibility}
              isDesktop={isDesktop}
              links={links}
              mobileNavVisibility={mobileNavVisibility}
              toggleMobileNavVisibility={toggleMobileNavVisibility}
            />
            <NavLogo isVisible={navVisibility} newHue={newHue} />
          </MotionToolbar>
          {mobileNavVisibility && (
            <MobileNav links={links} isVisible={mobileNavVisibility} />
          )}
        </MotionAppBar>
      </ClickAwayListener>
      <SideBar controls={animationControls} backgroundColor={backgroundColor} />
    </>
  );
};
Nav.propTypes = {
  dynamicHue: PropTypes.number,
  newHue: PropTypes.func
};

export default Nav;
