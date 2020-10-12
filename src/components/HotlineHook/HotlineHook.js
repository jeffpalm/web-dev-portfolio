import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './HotlineHookStyle';
import { motion, AnimationControls } from 'framer-motion';

function HotlineHook({ wS, hotlineCtrls, hookCtrls }) {
  const classes = useStyles();
  return (
    <>
      <motion.svg
        className={classes.hotline}
        xmlns='http://www.w3.org/2000/svg'
        width={wS.width}
        height={wS.height}
        animate={hotlineCtrls}
        initial={{
          y: wS.height * -1,
          opacity: 0
        }}
      >
        <motion.path
          d={`M${wS.width / 2 + 150} 0 
                            V${wS.height / 2}
                            l -30 -40
                            `}
          stroke='#FFF'
          strokeWidth={5}
          fillOpacity={0}
        />
      </motion.svg>
      <motion.svg
        className={classes.hotlineHook}
        xmlns='http://www.w3.org/2000/svg'
        width={wS.width}
        height={wS.height}
        animate={hotlineCtrls}
        initial={{
          y: wS.height * -1,
          opacity: 0
        }}
      >
        <motion.path
          animate={hookCtrls}
          initial={{
            pathLength: 0
          }}
          d={`M${wS.width / 2 + 150} ${wS.height / 2} 
                            l -30 -40
                            `}
          stroke='#FFF'
          strokeWidth={5}
        />
      </motion.svg>
    </>
  );
}

HotlineHook.propTypes = {
  wS: PropTypes.shape({ width: PropTypes.number, height: PropTypes.number }),
  hotlineCtrls: PropTypes.instanceOf(AnimationControls),
  hookCtrls: PropTypes.instanceOf(AnimationControls)
};

export default HotlineHook;
