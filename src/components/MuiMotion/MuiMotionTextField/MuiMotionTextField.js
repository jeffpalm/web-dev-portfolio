import React from 'react'
import {
    MotionFormControl,
    MotionHelperText,
    MotionInputLabel,
    MotionOutlinedInput,
    MotionOutlinedTextArea,
} from '../MuiMotion'
import { AnimatePresence } from 'framer-motion'
import { useTheme } from '@material-ui/core/styles'
import useStyles from './MuiMotionTextFieldStyle'
import variants from 'components/MuiMotion/MuiMotionTextField/MuiMotionTextFieldAnimation'

const MuiMotionTextField = ({
    label,
    inputProps,
    labelProps,
    helperText,
    isEmpty,
    multiline,
    ...props
}) => {
    const classes = useStyles()
    const theme = useTheme()
    return (
        <MotionFormControl
            key={`form-control-${label}`}
            className={`${classes.root} ${
                isEmpty || props.error ? '' : classes.notEmpty
            }`}
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
                {props.error && (
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
                            textAlign: 'center',
                        }}
                    >
                        {helperText}
                    </MotionHelperText>
                )}
            </AnimatePresence>
        </MotionFormControl>
    )
}

export default MuiMotionTextField
