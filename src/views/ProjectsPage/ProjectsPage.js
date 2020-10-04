import React from 'react'
// STYLE/ANIMATION
import useStyles from 'views/ProjectsPage/ProjectsPageStyle'
// ASSETS
import projects from 'assets/data/projects'
// COMPONENTS
import Project from 'components/Project/Project'
import ProjectToolbar from 'components/ProjectToolbar/ProjectToolbar'
import FullPage from 'components/FullPage/FullPage'
import { MotionGrid } from 'components/MuiMotion/MuiMotion'
// HOOKS
import useRangeCycle from 'hooks/useRangeCycle'

const ProjectsPage = () => {
    const classes = useStyles()
    const { cur, jumpTo } = useRangeCycle(0, projects.length - 1, 0)

    return (
        <FullPage
            name='projects'
            className={classes.root}
            alignItems='stretch'
            direction='row'
        >
            <MotionGrid container direction='column' wrap='nowrap'>
                <ProjectToolbar setActiveProject={jumpTo} activeProject={cur} />
                <Project activeProject={cur} />
            </MotionGrid>
        </FullPage>
    )
}

export default ProjectsPage
