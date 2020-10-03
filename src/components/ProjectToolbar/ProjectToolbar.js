import React from 'react'
import projects from 'assets/data/projects'
import { MotionGrid, MotionTypo } from 'components/MuiMotion/MuiMotion'
import useCls from 'hooks/useCls'
import useStyles from './ProjectToolbarStyle'

const Tab = ({
    name,
    isActive,
    activeClass,
    inactiveClass,
    defaultClass,
    onClick,
}) => {
    const containerClasses = useCls([
        defaultClass,
        isActive ? activeClass : inactiveClass,
    ])

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
    )
}

const ProjectToolbar = ({ setActiveProject, activeProject }) => {
    const classes = useStyles()
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
                        key={project.title + '-tab'}
                        name={project.title}
                        onClick={() => {
                            setActiveProject(index)
                        }}
                        isActive={activeProject === index}
                        defaultClass={classes.defaultTab}
                        activeClass={classes.activeTab}
                        inactiveClass={classes.inactiveTab}
                    />
                )
            })}
        </MotionGrid>
    )
}

export default ProjectToolbar
