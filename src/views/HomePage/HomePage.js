import React from 'react'
import FullPage from 'components/FullPage/FullPage'
import { MotionTypo } from 'components/MuiMotion/MuiMotion'
import useStyles from 'assets/jss/pages/HomePage/root'
import variants from 'assets/animation/pages/HomePage/root'
import theme from 'assets/jss/theme'
// import BackgroundVideo from 'components/BackgroundVideo/BackgroundVideo'
import { motion } from 'framer-motion'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'
import { ScrollLink } from 'react-scroll'
// import useTypingAnimation from '../../hooks/useTypingAnimation'
import TypingAnimation from '../../components/TypingAnimation/TypingAnimation'
import { SCROLL_SPEED } from '../../assets/constants'

const MotionLink = ScrollLink(motion.a)

const HomePage = () => {
    const classes = useStyles()
    // const text = useTypingAnimation('Hey! My name is Jeff.', 50, 1500)
    return (
        <FullPage name='home'>
            <MotionTypo
                className={classes.text}
                align='left'
                variants={variants.text}
                variant='h4'
                color='textPrimary'
            >
                Hey there!
            </MotionTypo>
            <MotionTypo
                className={classes.text}
                align='left'
                variants={variants.text}
                variant='h4'
                color='textPrimary'
            >
                My name is
                <MotionTypo
                    className={classes.inlineText}
                    align='left'
                    variants={variants.text}
                    variant='h4'
                    color='primary'
                    display='inline'
                >
                    {' '}
                    Jeff
                </MotionTypo>
            </MotionTypo>
            <MotionTypo
                className={classes.text}
                align='left'
                variants={variants.text}
                variant='h4'
                color='textPrimary'
                display='inline'
            >
                I am{' '}
                <MotionTypo
                    className={classes.inlineText}
                    align='left'
                    variants={variants.text}
                    variant='h4'
                    color='secondary'
                    display='inline'
                >
                    <TypingAnimation
                        options={{
                            strings: [
                                'a jack-of-all-trades.',
                                'a master of none.',
                                '> a master of one.',
                                'a full-stack web developer.',
                            ],
                            typeSpeed: 30,
                            backSpeed: 30,
                            loop: true,
                        }}
                    />
                </MotionTypo>
            </MotionTypo>
            <MotionLink
                className={classes.downArrow}
                initial={{
                    y: 200,
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotate: 0,
                    borderRadius: '20%',
                    backgroundColor: theme.palette.primary.main,
                    transition: {
                        delay: 4,
                    },
                }}
                transition={{
                    duration: 0.25,
                    ease: 'easeInOut',
                    // times: [0, 0.2, 0.5, 0.8, 1],
                    // loop: Infinity,
                    // repeatDelay: 2,
                }}
                whileHover={{
                    scale: [1, 1.2, 1.2, 1],
                    rotate: [0, 0, 360, 360],
                    borderRadius: ['20%', '20%', '50%', '50%'],
                    backgroundColor: [
                        theme.palette.primary.main,
                        theme.palette.primary.main,
                        theme.palette.secondary.main,
                        theme.palette.secondary.main,
                    ],
                }}
                to='about'
                smooth
                spy
                duration={SCROLL_SPEED}
            >
                <ArrowDownwardIcon fontSize='large' />
            </MotionLink>
        </FullPage>
    )
}

export default HomePage
