import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// STYLE/ANIMATION
import useStyles from './ProjectStyle';
// ASSETS
import { tOP } from '../../assets/utils';
import projects from 'assets/data/projects';
// COMPONENTS
import {
  MotionGrid,
  MotionGridList,
  MotionGridListTile,
  MotionTypo,
  MotionButton,
  MotionBox
} from 'components/MuiMotion/MuiMotion';
// THIRD PARTY
import { AnimatePresence, useAnimation } from 'framer-motion';

const Project = ({ activeProject }) => {
  const classes = useStyles();
  const controls = useAnimation();
  const [fullImg, setFullImg] = useState('');
  const [fullImgAlt, setFullImgAlt] = useState('');
  const [project, setProject] = useState(projects[activeProject]);

  useEffect(() => {
    const fadeOutAnimation = async () =>
      await controls.start({
        opacity: 0,
        transition: {
          duration: 0.1
        }
      });

    const changeProject = async () =>
      await tOP(() => setProject(projects[activeProject]), 100);

    const fadeInAnimation = async () =>
      await controls.start({
        opacity: 1,
        transition: { duration: 0.1 }
      });

    const animateAndChangeProject = async () => {
      await fadeOutAnimation();
      await changeProject();
      await fadeInAnimation();
    };

    animateAndChangeProject();

    return () => {
      clearTimeout(changeProject());
    };
  }, [activeProject, controls]);

  return (
    <MotionGrid className={classes.projectContainer}>
      <MotionGrid
        container
        direction='row'
        alignItems='stretch'
        initial={{ opacity: 0 }}
        animate={controls}
      >
        <MotionGrid item container direction='column' xs={12} sm={6}>
          <MotionTypo color='textPrimary' variant='h3' align='center'>
            {project.title}
          </MotionTypo>
          <MotionTypo color='textPrimary' variant='subtitle1' align='center'>
            {project.subtitle}
          </MotionTypo>
          <MotionTypo
            color='textPrimary'
            className={classes.projectLink}
            variant='subtitle2'
            href={project.url}
            target='_blank'
            component='a'
            align='center'
          >
            {project.url.split('').splice(8).join('')}
          </MotionTypo>
          <MotionTypo
            color='textPrimary'
            className={classes.projectLink}
            variant='subtitle2'
            href={project.github}
            target='_blank'
            component='a'
            align='center'
          >
            {project.github.split('').splice(8).join('')}
          </MotionTypo>
          {project.plan && (
            <MotionTypo
              color='textPrimary'
              className={classes.projectLink}
              variant='subtitle2'
              href={project.plan}
              target='_blank'
              component='a'
              align='center'
            >
              Project Plan
            </MotionTypo>
          )}
          <MotionTypo
            className={classes.projectDescription}
            color='textPrimary'
            variant='body1'
          >
            {project.description}
          </MotionTypo>
        </MotionGrid>
        <MotionGrid item container direction='column' xs={12} sm={6}>
          <MotionGridList
            cellHeight={140}
            cellWidth={140}
            className={classes.imgGrid}
            cols={3}
          >
            {project.imgs.map((img) => (
              <MotionGridListTile
                key={img.src}
                cols={1}
                className={classes.imgTile}
                onClick={() => {
                  setFullImg(img.src);
                  setFullImgAlt(img.desc);
                }}
              >
                <img
                  src={img.src}
                  alt={img.desc}
                  className={classes.imgThumb}
                />
              </MotionGridListTile>
            ))}
          </MotionGridList>
        </MotionGrid>
      </MotionGrid>

      {fullImg !== '' && (
        <AnimatePresence>
          <MotionBox
            className={classes.fullSizeImgContainer}
            initial={{
              y: '-100%'
            }}
            animate={{
              y: 0
            }}
            exit={{
              y: '100%'
            }}
            onClick={() => {
              setFullImg('');
              setFullImgAlt('');
            }}
          >
            <img
              className={classes.fullSizeImg}
              src={fullImg}
              alt={fullImgAlt}
            />
            <MotionButton className={classes.closeBtn}>Close</MotionButton>
          </MotionBox>
        </AnimatePresence>
      )}
    </MotionGrid>
  );
};

Project.propTypes = {
  activeProject: PropTypes.number
};

export default Project;
