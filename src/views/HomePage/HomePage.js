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
import DownArrow from "../../components/DownArrow/DownArrow"

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

        </FullPage>
    )
}

export default HomePage
