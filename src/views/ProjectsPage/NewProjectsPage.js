import React from 'react'
import projects from 'components/Project/projects'
import Project from 'components/Project/Project'
import ProjectToolbar from 'components/Project/ProjectToolbar'
import FullPage from 'components/FullPage/FullPage'
import useStyles from 'assets/jss/pages/ProjectsPage/root'
import useRangeCycle from 'hooks/useRangeCycle'
// import { MotionButton } from 'components/MuiMotion/MuiMotion'

const ProjectsPage = () => {
    const classes = useStyles()
    const {cur, jumpTo} = useRangeCycle(
        0,
        projects.length - 1,
        0
    )

    return (
        <FullPage name='projects' className={classes.root}>
            <ProjectToolbar setActiveProject={jumpTo} activeProject={cur} />
            <Project activeProject={cur} />
        </FullPage>
    )
}

export default ProjectsPage
