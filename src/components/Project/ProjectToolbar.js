import React from 'react'
import projects from './projects'
import { makeStyles } from '@material-ui/core/styles'
import { MotionGrid, MotionTypo } from 'components/MuiMotion/MuiMotion'
import useCls from 'hooks/useCls'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
        height: 48,
        borderTopLeftRadius: theme.shape.borderRadius,
        borderTopRightRadius: theme.shape.borderRadius,
    },
    defaultTab: {
        backGroundColor: 'none',
        height: '100%',
        width: `calc(100% / ${projects.length})`,
        '&:hover': {
            cursor: 'pointer',
        },
    },
    activeTab: {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.background.default,
        borderTopLeftRadius: theme.shape.borderRadius,
        borderTopRightRadius: theme.shape.borderRadius,
        borderBottom: `1px solid ${theme.palette.primary.main}`,
        transition: 'all 200ms linear'
    },
    inactiveTab: {
        color: theme.palette.text.primary,
    },
}))

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
