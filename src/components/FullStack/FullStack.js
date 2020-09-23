import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
    MotionGrid,
    MotionTypo,
    MotionIcon,
    MotionGridList,
    MotionGridListTile,
} from '../MuiMotion/MuiMotion'
import useStyles from 'assets/jss/components/FullStack'
import reactIcon from '@iconify/icons-logos/react'
import javascriptIcon from '@iconify/icons-logos/javascript'
import pythonIcon from '@iconify/icons-logos/python'
import sassIcon from '@iconify/icons-logos/sass'
import html5 from '@iconify/icons-logos/html-5'
import css3 from '@iconify/icons-logos/css-3'
import materialUi from '@iconify/icons-logos/material-ui'
import jssIcon from '@iconify/icons-logos/jss'
import nodejsIcon from '@iconify/icons-logos/nodejs'
import handlebarsIcon from '@iconify/icons-logos/handlebars'
import herokuIcon from '@iconify/icons-logos/heroku'
import postgresqlIcon from '@iconify/icons-logos/postgresql'
import digitalOcean from '@iconify/icons-logos/digital-ocean'

const Stack = withStyles(theme => ({
    root: {
        position: 'relative',
        minWidth: 340,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
}))(MotionGrid)

const StackBlock = withStyles(theme => ({
    root: {
        width: '100%',
        height: `calc((100vh - 64px - 16px) / 3)`,
        borderStyle: 'solid',
        borderWidth: 1,
        '&:hover': {
            cursor: 'pointer',
        },
    },
}))(MotionGrid)

const stackBlockVariants = {
    initial: i => ({
        scaleY: 0,
        y: 200 * i,
    }),
    enter: i => ({
        y: [200 * i, 200 * i, 0],
        scaleY: [0, 1, 1],
        transition: {
            duration: 0.5,
            delay: 0.5 * i,
        },
    }),
}

const frontEndSkills = [
    {
        icon: reactIcon,
    },
    {
        icon: javascriptIcon,
    },
    {
        icon: pythonIcon,
    },
    {
        icon: sassIcon,
    },
    {
        icon: html5,
    },
    {
        icon: css3,
    },
    {
        icon: materialUi,
    },
    {
        icon: jssIcon,
    },
]

const backEndSkills = [
    {
        icon: nodejsIcon,
    },
    {
        icon: handlebarsIcon,
    },
    {
        icon: digitalOcean,
    },
]

const dbSkills = [
    {
        icon: postgresqlIcon,
    },
    {
        icon: digitalOcean,
    },
]

const FullStack = props => {
    const classes = useStyles()
    return (
        <Stack className={classes.root}>
            <StackBlock
                className={classes.top}
                variants={stackBlockVariants}
                whileHover='hover'
                initial='initial'
                animate='enter'
                exit='initial'
                custom={2}
                container
                spacing={2}
            >
                <MotionGridList cellHeight={75} spacing={1}>
                    {frontEndSkills.map((skill, i) => (
                        <MotionGridListTile key={`fe-skill-${i}`} cols={1} rows={1}>
                            <MotionIcon
                                icon={skill.icon}
                                iconWidth={50}
                            />
                        </MotionGridListTile>
                    ))}
                </MotionGridList>
            </StackBlock>
            <StackBlock
                className={classes.middle}
                variants={stackBlockVariants}
                whileHover='hover'
                initial='initial'
                animate='enter'
                exit='initial'
                custom={1}
                container
                spacing={2}
            >
                <MotionIcon icon={nodejsIcon} iconWidth='5rem' item xs />
                <MotionIcon icon={handlebarsIcon} iconWidth='5rem' item xs />
                <MotionIcon icon={digitalOcean} iconWidth='5rem' item xs />
            </StackBlock>
            <StackBlock
                className={classes.bottom}
                variants={stackBlockVariants}
                whileHover='hover'
                initial='initial'
                animate='enter'
                exit='initial'
                custom={0}
                container
                spacing={2}
            >
                <MotionIcon icon={postgresqlIcon} iconWidth='5rem' item xs />
                <MotionIcon icon={herokuIcon} iconWidth='5rem' item xs />
            </StackBlock>
            <MotionTypo
                className={classes.vertFullStackText}
                variant='h3'
                color='textPrimary'
                align='left'
            >
                Full-Stack Developer
            </MotionTypo>
        </Stack>
    )
}

export default FullStack
