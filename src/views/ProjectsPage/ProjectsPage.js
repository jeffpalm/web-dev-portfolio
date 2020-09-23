import React from 'react'
import FullPage from '../../components/FullPage/FullPage'
// import { Typography } from '@material-ui/core'
import {
    MotionPaper,
    MotionTypo,
} from 'components/MuiMotion/MuiMotion'
import useStyles from 'assets/jss/pages/ProjectsPage/root'
import variants from 'assets/animation/pages/ProjectsPage/root'
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
                src: './assets/img/zen-chess/main.png',
            },
            {
                src: './assets/projects/zen-chess/board.png',
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
            },
            {
                src: './assets/projects/the-hub/main.png',
            },
            {
                src: './assets/projects/the-hub/add_ticket.png',
            },
            {
                src: './assets/projects/the-hub/queue.png',
            },
            {
                src: './assets/projects/the-hub/queue_inactive.png',
            },
            {
                src: './assets/projects/the-hub/ticket.png',
            },
        ],
        opensource: false,
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque et omnis aliquam quos quaerat, necessitatibus sit cupiditate magnam tenetur inventore, repellendus numquam cumque sequi est minima sapiente eos natus vitae quae, at ipsa nihil perferendis. Dolorum, culpa sapiente voluptatibus incidunt non quo. Soluta voluptatibus harum a iste id dolores veniam?',
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
            },
            {
                src: './assets/projects/dataspeaks/map.png',
            },
            {
                src: './assets/projects/dataspeaks/state.png',
            },
        ],
        opensource: true,
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque et omnis aliquam quos quaerat, necessitatibus sit cupiditate magnam tenetur inventore, repellendus numquam cumque sequi est minima sapiente eos natus vitae quae, at ipsa nihil perferendis. Dolorum, culpa sapiente voluptatibus incidunt non quo. Soluta voluptatibus harum a iste id dolores veniam?',
    },
]

const Project = ({ bgImg, children, ...props }) => {
    const classes = useStyles()
    return (
        <MotionPaper
            className={classes.projectContainer}
            variants={variants.card}
            style={{
                backgroundImage: 'assets/projects/zen-chess/main.png',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
            {...props}
        >
            {children}
        </MotionPaper>
    )
}

const ProjectsPage = () => {
    const classes = useStyles()

    return (
        <FullPage name='projects'>
            <div className={classes.cardsContainer}>
                {projects.map((project, i) => (
                    <Project key={project.title} bgImg={project.imgs[0].src}>
                        <MotionTypo variant='h3'>{project.title}</MotionTypo>
                        <MotionTypo
                            className={classes.projectLink}
                            variant='subtitle2'
                            href={project.url}
                            target='_blank'
                            component='a'
                        >
                            {project.url}
                        </MotionTypo>
                        <MotionTypo
                            className={classes.projectLink}
                            variant='subtitle2'
                            href={project.github}
                            target='_blank'
                            component='a'
                        >
                            {project.github}
                        </MotionTypo>
                        {/*<img*/}
                        {/*    className={classes.projectImg}*/}
                        {/*    src={project.img[0].src}*/}
                        {/*/>*/}
                        <MotionTypo variant='subtitle1'>
                            {project.subtitle}
                        </MotionTypo>
                    </Project>
                ))}
            </div>
        </FullPage>
    )
}

export default ProjectsPage
