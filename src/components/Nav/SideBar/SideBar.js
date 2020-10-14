import React from 'react';
import PropTypes from 'prop-types';
// STYLE/ANIMATION
import useStyles from './SideBarStyle';
import variants from './SideBarAnimation';
// THIRD PARTY
import { motion } from 'framer-motion';
import IconButton from '@material-ui/core/IconButton';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import { AnimationControls } from 'framer-motion';

const SideBar = ({ controls, backgroundColor }) => {
  const classes = useStyles();
  return (
    <motion.div
      className={classes.root}
      variants={variants}
      animate={controls}
      initial='initial'
      style={{ backgroundColor }}
    >
      <IconButton
        href='https://www.linkedin.com/in/jeffpalmdev/'
        target='_blank'
        aria-label={`Link to Jeff Palmer's LinkedIn Profile`}
      >
        <LinkedInIcon fontSize='large' />
      </IconButton>
      <IconButton
        href='https://github.com/jeffpalm'
        target='_blank'
        aria-label={`Link to Jeff Palmer's GitHub`}
      >
        <GitHubIcon fontSize='large' />
      </IconButton>
      <IconButton
        href='https://jeffpalm.dev/resume'
        target='_blank'
        aria-label={`Link to Jeff Palmer's Resume`}
      >
        <DescriptionOutlinedIcon fontSize='large' />
      </IconButton>
      <IconButton
        href='mailto:jeff@jeffpalm.dev'
        target='_blank'
        aria-label={`Send Jeff Palmer an Email`}
      >
        <EmailIcon fontSize='large' />
      </IconButton>
    </motion.div>
  );
};

SideBar.propTypes = {
  controls: PropTypes.instanceOf(AnimationControls),
  backgroundColor: PropTypes.string
};

export default SideBar;
