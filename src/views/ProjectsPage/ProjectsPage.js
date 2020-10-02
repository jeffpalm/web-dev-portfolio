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
// import variants from 'assets/animation/pages/ProjectsPage/root'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'
import { motion, AnimatePresence } from 'framer-motion'
import projects from './projects'
// import { SCROLL_SPEED } from '../../assets/constants'
// import { motion } from 'framer-motion'
// import NavigateNextIcon from '@material-ui/icons/NavigateNext'
// import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
// import IconButton from '@material-ui/core/IconButton'



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
            className={classes.projectContainer}
            {...props}
        >
            {curProject === index && (
                <Box p={3} className={classes.projectContainer}>
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
