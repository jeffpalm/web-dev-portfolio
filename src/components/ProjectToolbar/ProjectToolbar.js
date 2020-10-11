import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './ProjectToolbarStyle';
import projects from 'assets/data/projects';
import { MotionGrid, MotionTypo } from 'components/MuiMotion/MuiMotion';
import useCls from 'hooks/useCls';

const Tab = ({
  name,
  isActive,
  activeClass,
  inactiveClass,
  defaultClass,
  onClick
}) => {
  const containerClasses = useCls([
    defaultClass,
    isActive ? activeClass : inactiveClass
  ]);

  return (
    <MotionGrid
      className={containerClasses}
      onClick={onClick}
      item
      container
      alignItems='center'
      justify='center'
    >
      <MotionTypo variant='h6' align='center' color='inherit'>
        {name}
      </MotionTypo>
    </MotionGrid>
  );
};

Tab.propTypes = {
  name: PropTypes.string,
  isActive: PropTypes.bool,
  activeClass: PropTypes.string,
  inactiveClass: PropTypes.string,
  defaultClass: PropTypes.string,
  onClick: PropTypes.func
};

const ProjectToolbar = ({ setActiveProject, activeProject }) => {
  const classes = useStyles();
  return (
    <MotionGrid
      className={classes.root}
      container
      justify='space-around'
      alignItems='center'
      spacing={0}
    >
      {projects.map((project, index) => {
        return (
          <Tab
            key={`${project.title}-tab`}
            name={project.title}
            onClick={() => {
              setActiveProject(index);
            }}
            isActive={activeProject === index}
            defaultClass={classes.defaultTab}
            activeClass={classes.activeTab}
            inactiveClass={classes.inactiveTab}
          />
        );
      })}
    </MotionGrid>
  );
};

ProjectToolbar.propTypes = {
  setActiveProject: PropTypes.func,
  activeProject: PropTypes.number
};

export default ProjectToolbar;
