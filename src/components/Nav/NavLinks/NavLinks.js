import React from 'react';
import PropTypes from 'prop-types';
// STYLE/ANIMATION
import useStyles from './NavLinksStyle';
import variants from './NavLinksAnimation';
// ASSETS
import { SCROLL_SPEED } from '../../../assets/data/constants';
// COMPONENTS
import { MotionButton, MotionGrid } from '../../MuiMotion/MuiMotion';
// HOOKS
import useVisibilityAndAnimate from '../../../hooks/useVisibilityAndAnimate';
// THIRD PARTY
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import { ScrollLink } from 'react-scroll';
import { useAnimation } from 'framer-motion';

const Link = ScrollLink(MotionButton);

const NavLinks = ({
  links,
  isDesktop,
  isVisible,
  mobileNavVisibility,
  toggleMobileNavVisibility
}) => {
  const animationControls = useAnimation();
  const classes = useStyles();

  useVisibilityAndAnimate(isVisible, animationControls);

  return (
    <MotionGrid
      key='nav-link-container'
      className={classes.navLinksContainer}
      item
      container
      justify='flex-start'
      alignItems='center'
    >
      {isDesktop ? (
        links.map((link, i) => (
          <Link
            key={`${link.text}-${i}`}
            className={classes.navBtn}
            activeClass={classes.activeNavBtn}
            smooth
            spy
            duration={SCROLL_SPEED}
            to={link.to}
            variant='outlined'
            variants={variants.linkBtn}
            initial='initial'
            animate={animationControls}
            exit='initial'
            custom={i + 1}
            isDynamic
          >
            {link.text}
          </Link>
        ))
      ) : (
        <IconButton
          edge='start'
          color='default'
          aria-label='menu'
          onClick={toggleMobileNavVisibility}
        >
          {mobileNavVisibility ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      )}
    </MotionGrid>
  );
};

NavLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.exact({
      text: PropTypes.string,
      to: PropTypes.string
    })
  ),
  isDesktop: PropTypes.bool,
  isVisible: PropTypes.bool,
  mobileNavVisibility: PropTypes.bool,
  toggleMobileNavVisibility: PropTypes.func
};

export default NavLinks;
