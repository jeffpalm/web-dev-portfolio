import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// STYLE/ANIMATION
import useStyles from './FullPageStyle';
import variants from './FullPageAnimation';
// HOOKS
import { MotionBox } from '../MuiMotion/MuiMotion';
import useCls from 'hooks/useCls';
import { Element } from 'react-scroll';
import { AnimatePresence, useAnimation } from 'framer-motion';
import useVisibility from '../../hooks/useVisibility';

const FullPage = ({
  direction = 'column',
  justify = 'center',
  alignItems = 'center',
  children,
  className,
  name,
  ...props
}) => {
  const classes = useCls([useStyles().root, className]);
  const ref = useRef();
  const animationControls = useAnimation();
  const viewportVisibility = useVisibility(ref);

  useEffect(() => {
    const startEnterAnimation = async () =>
      await animationControls.start('enter');
    const startExitAnimation = async () =>
      await animationControls.start('initial');

    if (viewportVisibility) {
      startEnterAnimation();
    } else {
      startExitAnimation();
    }
  }, [viewportVisibility, animationControls]);

  return (
    <Element style={{ position: 'relative' }} name={name}>
      <AnimatePresence>
        <MotionBox
          key={name}
          ref={ref}
          className={classes}
          display='flex'
          flexDirection={direction}
          justifyContent={justify}
          alignItems={alignItems}
          variants={variants}
          initial='initial'
          animate={animationControls}
          exit='exit'
          {...props}
        >
          {children}
        </MotionBox>
      </AnimatePresence>
    </Element>
  );
};

FullPage.propTypes = {
  /**
   * CSS Property: flex-direction.
   */
  direction: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse'
  ]),
  /**
   * CSS Property: justify-content
   */
  justify: PropTypes.oneOf([
    'flex-start',
    'center',
    'flex-end',
    'space-between',
    'space-around',
    'space-evenly'
  ]),
  /**
   * CSS-Property: align-items
   */
  alignItems: PropTypes.oneOf([
    'flex-start',
    'center',
    'flex-end',
    'stretch',
    'baseline'
  ]),
  children: PropTypes.node,
  /**
   * Appends additional classNames to fullPage component.
   */
  className: PropTypes.string,
  /**
   * A unique name for the FullPage component.
   * Used as key for AnimatePresence and as the link name for react-scroll Link elements.
   */
  name: PropTypes.string.isRequired
};

export default FullPage;
