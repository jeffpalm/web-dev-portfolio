import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MuiMotionTextField from 'components/MuiMotion/MuiMotionTextField/MuiMotionTextField';
import { motion, AnimatePresence, AnimationControls } from 'framer-motion';
import { MotionButton } from 'components/MuiMotion/MuiMotion';
import * as Yup from 'yup';
import Envelope from 'components/Envelope/Envelope';
import useStyles from 'components/ContactForm/ContactFormStyle';
import variants from './ContactFormAnimation';

const ContactForm = ({
  topControls,
  msgControls,
  envelopeContainerControls,
  btnControls,
  envelopeControls,
  palmtreeControls,
  masterEnvelopeControls,
  submitForm,
  sending
}) => {
  const classes = useStyles();

  const [state, setState] = useState({
    reason: '',
    name: undefined,
    isPhone: false,
    phone: undefined,
    isEmail: false,
    email: undefined,
    subject: undefined,
    message: undefined
  });

  const [validation, setValidation] = useState({});

  const [errors, setErrors] = useState({});

  const schema = Yup.object({
    name: Yup.string()
      .min(2, 'Please enter a valid name')
      .required('')
      .default(undefined),
    isPhone: Yup.boolean(),
    phone: Yup.string()
      .matches(
        /^(?:(\+1)[ -])?\(?(\d{3})\)?[ -]?\.?(\d{3})[ -]?\.?(\d{4})$/,
        'Must be valid Phone Number'
      )
      .default(undefined),
    isEmail: Yup.boolean(),
    email: Yup.string().email().default(undefined),
    subject: Yup.string().default(undefined),
    message: Yup.string()
      .min(1, 'I need a little more detail than that... ')
      .default(undefined)
  });

  const handleChange = (e) => {
    if (e.nativeEvent.type === 'input') {
      setState({ ...state, [e.target.name]: e.target.value });
      schema
        .validate({ ...state, [e.target.name]: e.target.value })
        .then((valid) => {
          setValidation(valid);
          setErrors({});
        })
        .catch((err) => {
          setErrors({ ...errors, [err.path]: err.message });
        });
    } else if (e.nativeEvent.type === 'click') {
      setState({ ...state, [e.target.name]: e.target.checked });
      schema
        .validate({ ...state, [e.target.name]: e.target.checked })
        .then((valid) => {
          setErrors({ ...errors, [e.target.name]: false });
          setValidation(valid);
        })
        .catch((err) => {
          setErrors({ ...errors, [err.path]: err.message });
        });
    }
  };

  useEffect(() => {
    const messageEnterAnimation = async () =>
      await Promise.all([
        msgControls.start('enter'),
        masterEnvelopeControls.start('enter')
      ]);

    const messageExitAnimation = async () =>
      await Promise.all([
        msgControls.start('initial'),
        masterEnvelopeControls.start('initial')
      ]);
    if (state.subject && state.subject.length) {
      messageEnterAnimation().then(() => null);
    } else {
      messageExitAnimation().then(() => null);
    }
  }, [masterEnvelopeControls, msgControls, state.subject]);

  return (
    <motion.form
      key='contact-form-container'
      className={classes.root}
      variants={variants.contactForm}
      initial='initial'
      animate='enter'
      exit='initial'
    >
      <AnimatePresence>
        <motion.div
          key='form-container-1'
          className={classes.switchContainer}
          variants={variants.field}
          initial='initial'
          animate={topControls}
          exit='initial'
          custom={3}
        >
          <MuiMotionTextField
            key='contact-form-field-1'
            inputProps={{
              name: 'name',
              autoComplete: 'name',
              required: true,
              placeholder: 'Your name here...'
            }}
            label='Who are you?'
            variants={variants.textField}
            initial='initial'
            animate='enter'
            exit='initial'
            onChange={handleChange}
            error={!!errors.name}
            isEmpty={!state.name}
          />
        </motion.div>
        {state.name && !errors.name && (
          <motion.div
            key='form-container-2'
            className={classes.switchContainer}
            variants={variants.field}
            initial='initial'
            animate={topControls}
            exit='initial'
            custom={2}
          >
            <MuiMotionTextField
              key='contact-form-field-3'
              inputProps={{
                name: 'email',
                autoComplete: 'email'
              }}
              label='Email'
              variants={variants.textField}
              initial='initial'
              animate='enter'
              exit='initial'
              onChange={handleChange}
              error={!!errors.email}
              isEmpty={!state.email}
            />
          </motion.div>
        )}
        {state.email && !errors.email && (
          <motion.div
            key='form-container-3'
            className={classes.switchContainer}
            variants={variants.field}
            initial='initial'
            animate={topControls}
            exit='initial'
            custom={1}
          >
            <MuiMotionTextField
              key='contact-form-field-4'
              inputProps={{ name: 'subject' }}
              label='Subject'
              variants={variants.textField}
              initial='initial'
              animate='enter'
              exit='initial'
              onChange={handleChange}
              isEmpty={!state.subject}
            />
          </motion.div>
        )}
        {state.subject && !errors.subject && (
          <motion.div
            key='form-container-4'
            className={classes.msgContainer}
            variants={variants.field}
            initial='initial'
            animate={masterEnvelopeControls}
            exit='initial'
          >
            {sending && (
              <Envelope
                envelopeContainerControls={envelopeContainerControls}
                envelopeControls={envelopeControls}
                palmtreeControls={palmtreeControls}
              />
            )}
            <MuiMotionTextField
              key='contact-form-field-5'
              inputProps={{
                name: 'message',
                rows: 10,
                rowsMax: 10,
                placeholder: 'Talk to me... '
              }}
              label='Message'
              variants={variants.textField}
              initial='initial'
              animate={msgControls}
              exit='initial'
              onChange={handleChange}
              isEmpty={!state.message}
              helperText={errors.message || ''}
              error={!!errors.message}
              multiline
            />
          </motion.div>
        )}
        {state.message && state.subject.length && !errors.message && (
          <motion.div
            key='form-container-5'
            className={classes.switchContainer}
            variants={variants.field}
            initial='initial'
            animate={btnControls}
            exit='initial'
          >
            <MotionButton
              variant='outlined'
              className={classes.submitBtn}
              variants={variants.submitBtn}
              initial='initial'
              animate='enter'
              exit='initial'
              onClick={() => submitForm(validation)}
            >
              Send it
            </MotionButton>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
};

ContactForm.propTypes = {
  topControls: PropTypes.instanceOf(AnimationControls),
  msgControls: PropTypes.instanceOf(AnimationControls),
  envelopeContainerControls: PropTypes.instanceOf(AnimationControls),
  btnControls: PropTypes.instanceOf(AnimationControls),
  envelopeControls: PropTypes.instanceOf(AnimationControls),
  palmtreeControls: PropTypes.instanceOf(AnimationControls),
  masterEnvelopeControls: PropTypes.instanceOf(AnimationControls),
  submitForm: PropTypes.func,
  sending: PropTypes.bool
};

export default ContactForm;
