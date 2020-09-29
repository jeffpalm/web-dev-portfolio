import React, { useState } from 'react'
import FullPage from '../../components/FullPage/FullPage'
// import { Typography } from '@material-ui/core'
import {
    MotionGrid,
    MotionGridList,
    MotionGridListTile,
    MotionTypo,
    MotionButton,
} from 'components/MuiMotion/MuiMotion'
import useStyles from 'assets/jss/pages/ProjectsPage/root'
import variants from 'assets/animation/pages/ProjectsPage/root'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import { motion, AnimatePresence } from 'framer-motion'
// import { SCROLL_SPEED } from '../../assets/constants'
// import { motion } from 'framer-motion'
// import NavigateNextIcon from '@material-ui/icons/NavigateNext'
// import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
// import IconButton from '@material-ui/core/IconButton'

const projects = [
    {
        title: 'Zen Chess',
        subtitle: 'Stripped down relaxing online chess',
        url: 'https://zen-chess.com',
        github: 'https://github.com/jeffpalm/zen_chess',
        tech: ['React', 'NodeJS'],
        opensource: true,
        imgs: [
            {
                src: './assets/projects/zen-chess/main.png',
                desc: 'image description',
            },
            {
                src: './assets/projects/zen-chess/board.png',
                desc: 'image description',
            },
        ],
        description:
            "There are already some amazing chess websites out there such as Chess.com and Lichess.org. The stat tracking, learning resources, sophisticated ranking/matchmaking are wonderful. But for me, all that information gets to my head sometimes. I'll get matched up with someone rated higher and psych myself out or somone lower and make dumb mistakes. That's what Zen Chess is for. The times when you just want to play chess and get out of your own head.",
    },
    {
        title: 'The Hub',
        subtitle:
            'An internal process automation and collaboration platform for high-volume, single point of contact (SPOC) retail automotive sales departments focused on the guest experience.',
        url: 'https://the-hub.io',
        github: 'https://github.com/jeffpalm/the-hub',
        tech: ['React', 'NodeJS', 'PostgreSQL'],
        imgs: [
            {
                src: './assets/projects/the-hub/login.png',
                desc: 'image description',
            },
            {
                src: './assets/projects/the-hub/main.png',
                desc: 'image description',
            },
            {
                src: './assets/projects/the-hub/add_ticket.png',
                desc: 'image description',
            },
            {
                src: './assets/projects/the-hub/queue.png',
                desc: 'image description',
            },
            {
                src: './assets/projects/the-hub/queue_inactive.png',
                desc: 'image description',
            },
            {
                src: './assets/projects/the-hub/ticket.png',
                desc: 'image description',
            },
        ],
        opensource: false,
        description: '',
        plan: 'https://1drv.ms/w/s!Al9aA_is_kzmgP7DXrsVBzuVcIG6O6g?e=PzjfyW',
    },
    {
        title: 'Data Speaks',
        subtitle:
            'Data visualization of social inequality and injustice in the U.S.',
        url: 'https://dataspeaks.us',
        github: 'https://github.com/Stories-with-Data/stories-with-data',
        tech: ['React', 'NodeJS', 'PostgreSQL'],
        imgs: [
            {
                src: './assets/projects/dataspeaks/title.png',
                desc: 'image description',
            },
            {
                src: './assets/projects/dataspeaks/map.png',
                desc: 'image description',
            },
            {
                src: './assets/projects/dataspeaks/state.png',
                desc: 'image description',
            },
        ],
        opensource: true,
        description:
            'Using visualizations of data sourced from the FBI, Census Bureau, Department of Justice, and a Harvard study, the goal of DataSpeaks is to educate users on social inequality/injustice in the United States and provide a call to action to get involved with their state representatives. ',
    },
]

const Project = ({ project, index, curProject, children, ...props }) => {
    const classes = useStyles()

    const [fullImg, setFullImg] = useState('')
    const [fullImgAlt, setFullImgAlt] = useState('')

    return (
        <div
            role='tabpanel'
            hidden={curProject !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            // className={classes.projectContainer}
            variants={variants.card}
            {...props}
        >
            {curProject === index && (
                <Box p={3}>
                    <MotionGrid container direction='row' alignItems='stretch'>
                        <MotionGrid
                            item
                            container
                            direction='column'
                            xs={12}
                            sm={6}
                        >
                            <MotionTypo
                                color='textPrimary'
                                variant='h3'
                                align='center'
                            >
                                {project.title}
                            </MotionTypo>
                            <MotionTypo
                                color='textPrimary'
                                variant='subtitle1'
                                align='center'
                            >
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
                        <MotionGrid
                            item
                            container
                            direction='column'
                            xs={12}
                            sm={6}
                        >
                            <MotionGridList
                                cellHeight={140}
                                className={classes.imgGrid}
                                cols={3}
                            >
                                {project.imgs.map(img => (
                                    <MotionGridListTile
                                        key={img.src}
                                        cols={1}
                                        className={classes.imgTile}
                                        onClick={() => {
                                            setFullImg(img.src)
                                            setFullImgAlt(img.desc)
                                        }}
                                    >
                                        <img src={img.src} alt={img.desc} />
                                    </MotionGridListTile>
                                ))}
                            </MotionGridList>
                        </MotionGrid>
                    </MotionGrid>
                </Box>
            )}
            {fullImg !== '' && (
                <AnimatePresence>
                    <motion.div
                        className={classes.fullSizeImgContainer}
                        initial={{
                            y: '-100%',
                        }}
                        animate={{
                            y: 0,
                        }}
                        exit={{
                            y: '100%',
                        }}
                        onClick={() => {
                            setFullImg('')
                            setFullImgAlt('')
                        }}
                    >
                        <img
                            className={classes.fullSizeImg}
                            src={fullImg}
                            alt={fullImgAlt}
                        />
                        <MotionButton className={classes.closeBtn}>
                            Close
                        </MotionButton>
                    </motion.div>
                </AnimatePresence>
            )}
        </div>
    )
}

const a11yProps = i => ({
    id: `full-width-tab-${i}`,
    'aria-controls': `full-width-tabpanel-${i}`,
})

const ProjectsPage = () => {
    const classes = useStyles()
    const [curProject, setCurProject] = useState(0)

    const handleChange = (e, val) => setCurProject(val)

    return (
        <FullPage name='projects' className={classes.root}>
            <div className={classes.cardsContainer}>
                <AppBar
                    position='static'
                    color='default'
                    className={classes.tabBar}
                >
                    <Tabs
                        value={curProject}
                        onChange={handleChange}
                        indicatorColor='primary'
                        textColor='primary'
                        variant='fullWidth'
                    >
                        {projects.map((proj, i) => (
                            <Tab
                                label={proj.title}
                                key={proj.title + ' tab'}
                                {...a11yProps(i)}
                            />
                        ))}
                    </Tabs>
                </AppBar>

                {projects.map((proj, i) => (
                    <Project
                        key={proj.title}
                        index={i}
                        curProject={curProject}
                        project={projects[i]}
                    />
                ))}
            </div>
        </FullPage>
    )
}

export default ProjectsPage
