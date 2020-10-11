import React, { useState } from 'react';
// STYLE/ANIMATION
import useStyles from 'views/ProjectsPage/ProjectsPageStyle';
// ASSETS
import projects from 'assets/data/projects';
// COMPONENTS
import Project from 'components/Project/Project';
import ProjectToolbar from 'components/ProjectToolbar/ProjectToolbar';
import FullPage from 'components/FullPage/FullPage';
import { MotionGrid } from 'components/MuiMotion/MuiMotion';
// HOOKS
import useRangeCycle from 'hooks/useRangeCycle';

const ProjectsPage = () => {
  const classes = useStyles();
  const { cur, jumpTo, next, prev } = useRangeCycle(0, projects.length - 1, 0);
  const [touchStartX, setTouchStartX] = useState(null);

  return (
    <FullPage
      name='projects'
      className={classes.root}
      alignItems='stretch'
      direction='row'
    >
      <MotionGrid
        container
        direction='column'
        wrap='nowrap'
        onTouchStart={(e) => {
          setTouchStartX(e.touches[0].screenX);
        }}
        onTouchEnd={(e) => {
          const touchEndX = e.changedTouches[0].screenX;
          const HORIZONTAL_DEADZONE = 50;

          // console.log(Math.abs(touchEndX - touchStartX))
          if (Math.abs(touchEndX - touchStartX) < HORIZONTAL_DEADZONE) {
            return;
          } else if (touchEndX - touchStartX < 0) {
            next();
          } else if (touchEndX - touchStartX > 0) {
            prev();
          }
        }}
      >
        <ProjectToolbar setActiveProject={jumpTo} activeProject={cur} />
        <Project activeProject={cur} />
      </MotionGrid>
    </FullPage>
  );
};

export default ProjectsPage;
