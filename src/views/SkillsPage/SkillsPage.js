import React from 'react';
// STYLE/ANIMATION
import useStyles from './SkillsPageStyle';
import variants from './SkillsPageAnimation';
// COMPONENTS
import FullPage from 'components/FullPage/FullPage';
import { MotionGrid, MotionTypo } from 'components/MuiMotion/MuiMotion';

const SkillsPage = () => {
  const classes = useStyles();

  return (
    <FullPage name="skills" id="skills-page">
      <MotionGrid container direction="column" alignItems="center">

        <MotionTypo
          className={classes.skillsText}
          variants={variants.text}
          variant="body1"
          custom={0}
          color="textPrimary"
          align="center"
          display="inline"
        >
          At this point in my career, I have worked with enough different technologies and languages to become confident
          in my ability to quickly pick up and become productive in any paradigm. I care most about writing clean code
          and
          using the right tool for the job.
        </MotionTypo>
        <MotionTypo
          className={classes.skillsText}
          variants={variants.text}
          variant="body1"
          custom={0}
          color="textPrimary"
          align="center"
          display="inline"
        >
          With that being said, I have been using the
          <a href="https://wakatime.com" target="_blank" rel="noreferrer">wakatime</a>
          extension since July 2020 in all of my IDEs to track the time I spend
          actively coding regardless of whether the project is closed or open source. These charts stay up to date and
          illustrate the languages I am actively working with this year compared with
          all time for those who may be interested.
        </MotionTypo>
        <MotionGrid container item>
          <MotionGrid
            item
            container
            direction="column"
            alignItems="center"
            xs
            variants={variants.core}
            custom={0}
            exit="initial"
          >
            <img
              alt="Languages used by Jeff Palmer over the past year"
              src="https://wakatime.com/share/@55105af3-6231-4f88-9707-2ef93dc0d512/d7613532-eba1-4842-bb7d-af96e0dfcb96.png"
            />
          </MotionGrid>
          <MotionGrid
            className={classes.tableContainer}
            item
            container
            direction="column"
            alignItems="center"
            variants={variants.core}
            custom={0.5}
            exit="initial"
            sm
          >
            <img
              alt="Languages used by Jeff Palmer all time"
              src="https://wakatime.com/share/@55105af3-6231-4f88-9707-2ef93dc0d512/52c23bc2-bbf2-4a91-9b11-a6acb5e5cdea.png"
            />
          </MotionGrid>
        </MotionGrid>
      </MotionGrid>
    </FullPage>
  );
};

export default SkillsPage;
