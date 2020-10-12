import React from 'react';
import useStyles from './SendSuccessStyle';
import { variants } from './SendSuccessAnimation';
import { AnimatePresence, motion } from 'framer-motion';
import { MotionTypo } from '../MuiMotion/MuiMotion';

function SendSuccess() {
  const classes = useStyles();
  return (
    <AnimatePresence>
      <motion.div
        className={classes.successScreen}
        variants={variants}
        initial='initial'
        animate='enter'
        exit='initial'
      >
        <MotionTypo variant='h2' color='textPrimary' align='center'>
          Successful Hotline Transmission
        </MotionTypo>
      </motion.div>
    </AnimatePresence>
  );
}

export default SendSuccess;
