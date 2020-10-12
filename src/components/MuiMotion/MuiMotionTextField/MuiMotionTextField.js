import React from 'react';
import PropTypes from 'prop-types';
import {
  MotionFormControl,
  MotionHelperText,
  MotionInputLabel,
  MotionOutlinedInput,
  MotionOutlinedTextArea
} from '../MuiMotion';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './MuiMotionTextFieldStyle';
import variants from 'components/MuiMotion/MuiMotionTextField/MuiMotionTextFieldAnimation';

const MuiMotionTextField = ({
  label,
  inputProps,
  labelProps,
  helperText,
  isEmpty,
  multiline,
  error,
  ...props
}) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <MotionFormControl
      key={`form-control-${label}`}
      className={`${classes.root} ${isEmpty || error ? '' : classes.notEmpty}`}
      variant='outlined'
      {...props}
    >
      <MotionInputLabel
        className={classes.inputLabel}
        key={`input-label-${label}`}
        htmlFor='component-outlined'
        variants={variants.label}
        initial='initial'
        animate='enter'
        {...labelProps}
      >
        {label}
      </MotionInputLabel>
      {multiline ? (
        <MotionOutlinedTextArea
          key={`input-field-${label}`}
          className={classes.inputField}
          id='component-outlined'
          label={label}
          {...inputProps}
        />
      ) : (
        <MotionOutlinedInput
          key={`input-field-${label}`}
          className={classes.inputField}
          id='component-outlined'
          label={label}
          {...inputProps}
        />
      )}
      <AnimatePresence exitBeforeEnter>
        {error && (
          <MotionHelperText
            key={`helper-text-${label}`}
            variants={variants.errorMsg}
            initial='initial'
            animate='enter'
            exit='initial'
            style={{
              padding: 0,
              margin: 0,
              zIndex: theme.zIndex.modal - 1,
              textAlign: 'center'
            }}
          >
            {helperText}
          </MotionHelperText>
        )}
      </AnimatePresence>
    </MotionFormControl>
  );
};

MuiMotionTextField.propTypes = {
  label: PropTypes.string,
  inputProps: PropTypes.objectOf(PropTypes.any),
  labelProps: PropTypes.objectOf(PropTypes.any),
  helperText: PropTypes.string,
  isEmpty: PropTypes.bool,
  multiline: PropTypes.bool,
  error: PropTypes.bool
};

export default MuiMotionTextField;
