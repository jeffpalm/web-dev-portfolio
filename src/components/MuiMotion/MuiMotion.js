/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import {
  Box,
  Grid,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Paper,
  FormControl,
  OutlinedInput,
  InputLabel,
  FormHelperText,
  GridList,
  GridListTile
} from '@material-ui/core';
import { Icon } from '@iconify/react';

export const MotionPaper = forwardRef((props, ref) => (
  <Paper ref={ref} component={motion.div} {...props} />
));

export const MotionBox = forwardRef((props, ref) => (
  <Box ref={ref} component={motion.div} {...props} />
));

export const MotionGrid = forwardRef((props, ref) => (
  <Grid ref={ref} component={motion.div} {...props} />
));

export const MotionTypo = forwardRef((props, ref) => (
  <Typography ref={ref} component={motion.div} {...props} />
));

export const MotionAppBar = forwardRef((props, ref) => (
  <AppBar ref={ref} component={motion.div} {...props} />
));

export const MotionToolbar = forwardRef((props, ref) => (
  <Toolbar ref={ref} component={motion.div} {...props} />
));

export const MotionButton = forwardRef((props, ref) => (
  <Button ref={ref} component={motion.a} {...props} />
));

export const MotionFormControl = forwardRef((props, ref) => (
  <FormControl ref={ref} component={motion.div} {...props} />
));

export const MotionOutlinedInput = forwardRef((props, ref) => (
  <OutlinedInput ref={ref} inputComponent={motion.input} {...props} />
));

export const MotionOutlinedTextArea = forwardRef((props, ref) => (
  <OutlinedInput
    ref={ref}
    multiline
    aria-multiline='true'
    inputComponent={motion.textarea}
    {...props}
  />
));

export const MotionInputLabel = forwardRef((props, ref) => (
  <InputLabel ref={ref} component={motion.label} {...props} />
));

export const MotionHelperText = forwardRef((props, ref) => (
  <FormHelperText ref={ref} component={motion.p} {...props} />
));

export const MotionIcon = ({ icon, iconWidth, ...props }) => (
  <MotionGrid {...props}>
    <Icon icon={icon} width={iconWidth} />
  </MotionGrid>
);

MotionIcon.propTypes = {
  icon: PropTypes.element,
  iconWidth: PropTypes.number
};

export const MotionGridList = forwardRef((props, ref) => (
  <GridList ref={ref} component={motion.ul} {...props} />
));

export const MotionGridListTile = forwardRef((props, ref) => (
  <GridListTile ref={ref} component={motion.li} {...props} />
));
