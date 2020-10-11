import React from 'react';
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

export const MotionPaper = React.forwardRef((props, ref) => (
  <Paper ref={ref} component={motion.div} {...props} />
));

export const MotionBox = React.forwardRef((props, ref) => (
  <Box ref={ref} component={motion.div} {...props} />
));

export const MotionGrid = React.forwardRef((props, ref) => (
  <Grid ref={ref} component={motion.div} {...props} />
));

export const MotionTypo = React.forwardRef((props, ref) => (
  <Typography ref={ref} component={motion.div} {...props} />
));

export const MotionAppBar = React.forwardRef((props, ref) => (
  <AppBar ref={ref} component={motion.div} {...props} />
));

export const MotionToolbar = React.forwardRef((props, ref) => (
  <Toolbar ref={ref} component={motion.div} {...props} />
));

export const MotionButton = React.forwardRef((props, ref) => (
  <Button ref={ref} component={motion.a} {...props} />
));

export const MotionFormControl = React.forwardRef((props, ref) => (
  <FormControl ref={ref} component={motion.div} {...props} />
));

export const MotionOutlinedInput = React.forwardRef((props, ref) => (
  <OutlinedInput ref={ref} inputComponent={motion.input} {...props} />
));

export const MotionOutlinedTextArea = React.forwardRef((props, ref) => (
  <OutlinedInput
    ref={ref}
    multiline
    aria-multiline='true'
    inputComponent={motion.textarea}
    {...props}
  />
));

export const MotionInputLabel = React.forwardRef((props, ref) => (
  <InputLabel ref={ref} component={motion.label} {...props} />
));

export const MotionHelperText = React.forwardRef((props, ref) => (
  <FormHelperText ref={ref} component={motion.p} {...props} />
));

export const MotionIcon = ({ icon, iconWidth, ...props }) => (
  <MotionGrid {...props}>
    <Icon icon={icon} width={iconWidth} />
  </MotionGrid>
);

export const MotionGridList = React.forwardRef((props, ref) => (
  <GridList ref={ref} component={motion.ul} {...props} />
));

export const MotionGridListTile = React.forwardRef((props, ref) => (
  <GridListTile ref={ref} component={motion.li} {...props} />
));
