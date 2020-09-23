import React from 'react'
import FullPage from '../../components/FullPage/FullPage'
import { MotionTypo } from '../../components/MuiMotion/MuiMotion'
import variants from 'assets/animation/pages/AboutPage/root'
import useStyles from 'assets/jss/pages/AboutPage/root'

const AboutPage = () => {
    const classes = useStyles()

    return (
        <FullPage name='about' className={classes.root}>
            <MotionTypo
                variants={variants.text}
                exit='initial'
                variant='h2'
                color='textPrimary'
                custom={0}
            >
                Core values
            </MotionTypo>
            <MotionTypo
                variants={variants.text}
                exit='initial'
                variant='h4'
                color='textPrimary'
                custom={1}
            >
                Transparency
            </MotionTypo>
            <MotionTypo
                variants={variants.text}
                exit='initial'
                variant='h4'
                color='textPrimary'
                custom={2}
            >
                Accountability
            </MotionTypo>
            <MotionTypo
                variants={variants.text}
                exit='initial'
                variant='h4'
                color='textPrimary'
                custom={3}
            >
                Inclusivity
            </MotionTypo>
            <MotionTypo
                variants={variants.text}
                exit='initial'
                variant='h4'
                color='textPrimary'
                custom={4}
            >
                Teamwork
            </MotionTypo>
        </FullPage>
    )
}

export default AboutPage
