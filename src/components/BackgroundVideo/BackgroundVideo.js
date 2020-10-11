import React from 'react';
import { motion } from 'framer-motion';
import useStyles from './BackgroundVideoStyle';
import variants from './BackgroundVideoAnimation';
import { Element } from 'react-scroll';

const BackgroundVideo = ({ name, children, wrapperProps }) => {
  const classes = useStyles();
  const videoSource = './assets/palmtree.mp4';
  return (
    <Element name={name}>
      <motion.div
        key='landing-video-container'
        variants={variants.container}
        initial='initial'
        animate='enter'
        exit='initial'
        className={classes.Container}
        {...wrapperProps}
      >
        <motion.video
          key='landing-video'
          autoPlay
          loop
          muted
          className={classes.Video}
          variants={variants.video}
          initial='initial'
          animate='animate'
          exit='initial'
        >
          <source src={videoSource} type='video/mp4' />
          Your browser does not support the video tag.
        </motion.video>

        <motion.div key='landing-content' className={classes.Content}>
          <motion.div key='landing-sub-content' className={classes.SubContent}>
            {children}
          </motion.div>
        </motion.div>
      </motion.div>
    </Element>
  );
};

export default BackgroundVideo;
