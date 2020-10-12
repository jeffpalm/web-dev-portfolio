import React from 'react';
// STYLE/ANIMATION
import variants from './AboutPageAnimation';
import useStyles from './AboutPageStyle';
// COMPONENTS
import FullPage from 'components/FullPage/FullPage';
import { MotionGrid, MotionTypo } from 'components/MuiMotion/MuiMotion';
import TypingAnimation from 'components/TypingAnimation/TypingAnimation';
// THIRD PARTY
import { motion } from 'framer-motion';

const AboutPage = ({ dynamicHue }) => {
  const classes = useStyles();

  const color = `hsl(${dynamicHue}, 50%, 50%)`;

  return (
    <FullPage name='about' className={classes.root}>
      <MotionGrid className={classes.mainContainer}>
        <MotionTypo
          variants={variants.text}
          exit='initial'
          variant='h1'
          color='textPrimary'
          custom={1}
          align='center'
        >
          Hiiiiii!
        </MotionTypo>
        <motion.img
          className={classes.aboutImg}
          variants={variants.text}
          custom={0}
          src='/assets/palmy_wave.gif'
          alt='Jeff Waving'
        />

        <MotionTypo
          className={classes.myNameIs}
          variants={variants.text}
          exit='initial'
          variant='h4'
          color='textPrimary'
          align='center'
          custom={3}
          display='inline'
        >
          My name is{' '}
          <MotionTypo
            variants={variants.text}
            exit='initial'
            variant='h4'
            style={{ color }}
            align='center'
            custom={3}
            display='inline'
          >
            <TypingAnimation
              options={{
                strings: [
                  'Jeffrey',
                  'Jeff',
                  'Jeff Palm',
                  'Jeff Palmer',
                  'Palmer',
                  'Palmytree',
                  'Palmy Palm',
                  'El Jefe'
                ],
                typeSpeed: 30,
                backSpeed: 30,
                loop: true
              }}
            />
          </MotionTypo>
        </MotionTypo>
        <MotionTypo
          className={classes.tagLine}
          variants={variants.text}
          exit='initial'
          variant='h5'
          color='textSecondary'
          align='center'
          custom={3}
          display='inline'
        >
          I am a Full Stack Web Developer with a passion for people, technology,
          and discovery fueled by an endless curiosity.
        </MotionTypo>
        <MotionTypo
          className={classes.about}
          variants={variants.text}
          exit='initial'
          variant='body1'
          color='textPrimary'
          custom={5}
        >
          In March 2020, I was laid off by my employer of 5 years due to the
          COVID-19 pandemic. It was a painful blow, but I decided to take the
          opportunity to buckle down and pursue a career in Web Development
          because I had built multiple websites at my previous job using GUI
          tools and figuring things out as I went, but I never really learned
          how to code. So, I spent all my time since March learning everything I
          can about becoming a Developer. I started with Codecademy's
          self-guided lessons then enrolled and completed DevMountain's Full
          Stack Web Development Bootcamp. Now, I'm on the hunt to find more than
          just a paycheck.
        </MotionTypo>
      </MotionGrid>
    </FullPage>
  );
};

export default AboutPage;
