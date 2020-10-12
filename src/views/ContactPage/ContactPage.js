import React, { useState } from 'react';
// STYLE/ANIMATION
import useStyles from 'views/ContactPage/ContactPageStyle';
import _sendAnimation from './ContactPageAnimation';
// COMPONENTS
import FullPage from 'components/FullPage/FullPage';
import { MotionTypo } from 'components/MuiMotion/MuiMotion';
import ContactForm from 'components/ContactForm/ContactForm';
import HotlineHook from '../../components/HotlineHook/HotlineHook';
import SendSuccess from '../../components/SendSuccess/SendSuccess';
// HOOKS
import useWindowSize from 'hooks/useWindowSize';
// THIRD PARTY
import { motion, useAnimation } from 'framer-motion';
import axios from 'axios';

const ContactPage = () => {
  const classes = useStyles();

  const wS = useWindowSize();

  const animationCtrls = {
    header: useAnimation(),
    top: useAnimation(),
    btn: useAnimation(),
    msg: useAnimation(),
    envelopeContainer: useAnimation(),
    envelope: useAnimation(),
    palmtree: useAnimation(),
    hotline: useAnimation(),
    hotlineHook: useAnimation(),
    masterEnvelope: useAnimation()
  };

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const submitForm = async (formData) => {
    setSending(true);
    await _sendAnimation(animationCtrls, wS.height);
    setSent(true);
    try {
      await axios.post('/api/contact', formData);
    } catch (err) {
      // TODO: uncomment error catch
      // throw new Error(err);
    }
  };

  return (
    <FullPage name='contact' justify='flex-start'>
      <motion.div className={classes.header} animate={animationCtrls.header}>
        <MotionTypo variant='h2' color='textPrimary' align='center'>
          The Palmy Hotline
        </MotionTypo>
        <MotionTypo variant='subtitle1' color='textPrimary' align='center'>
          Whether you are interested in reaching out for a job opportunity,
          project collaboration, or you just want to connect, shoot me a message
          below
        </MotionTypo>
        <MotionTypo variant='subtitle2' color='textSecondary' align='center'>
          All messages responded to directly within 1 business day
        </MotionTypo>
      </motion.div>
      {sending && (
        <HotlineHook
          wS={wS}
          hotlineCtrls={animationCtrls.hotline}
          hookCtrls={animationCtrls.hook}
        />
      )}
      <ContactForm
        topControls={animationCtrls.top}
        msgControls={animationCtrls.msg}
        envelopeContainerControls={animationCtrls.envelopeContainer}
        btnControls={animationCtrls.btn}
        envelopeControls={animationCtrls.envelope}
        palmtreeControls={animationCtrls.palmtree}
        masterEnvelopeControls={animationCtrls.masterEnvelope}
        submitForm={submitForm}
        sending={sending}
      />
      {sent && <SendSuccess />}
    </FullPage>
  );
};

export default ContactPage;
