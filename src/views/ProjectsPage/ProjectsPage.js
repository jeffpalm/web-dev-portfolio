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

  const updateTouchStartX = (e) => setTouchStartX(e.touches[0].screenX);

  const determineTouchAction = (startX, endX, deadZone = 50) => {
    const touchDelta = endX - startX;

    if (touchDelta < -deadZone) {
      return next;
    } else if (touchDelta > deadZone) {
      return prev;
    }
    return () => null;
  };

  const takeActionAfterSwipe = (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const action = determineTouchAction(touchStartX, touchEndX);
    action();
  };

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
        onTouchStart={updateTouchStartX}
        onTouchEnd={takeActionAfterSwipe}
      >
        <ProjectToolbar setActiveProject={jumpTo} activeProject={cur} />
        <Project activeProject={cur} />
      </MotionGrid>
    </FullPage>
  );
};

export default ProjectsPage;
