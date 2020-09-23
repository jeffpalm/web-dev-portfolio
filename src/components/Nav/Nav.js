import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAnimation } from 'framer-motion'
import {
    MotionAppBar,
    MotionToolbar,
    MotionButton,
    MotionGrid,
    MotionTypo,
} from '../MuiMotion/MuiMotion'
import useWindowSize from '../../hooks/useWindowSize'
import useStyles from '../../assets/jss/components/Nav'
import variants from 'assets/animation/components/Nav'

const links = [
    { text: 'Home', to: '/' },
    { text: 'About', to: '/about' },
    { text: 'Skills', to: '/skills' },
    { text: 'Projects', to: '/projects' },
    { text: 'Contact', to: '/contact' },
]

const Nav = () => {
    const classes = useStyles()
    const linkControls = useAnimation()
    const appBarControls = useAnimation()
    const location = useLocation()
    const wS = useWindowSize()

    useEffect(() => {
        // if (window.scrollY > 0) {
            linkControls.start('enter')
            appBarControls.start('enter')
        //     return
        // }
        // window.addEventListener(
        //     'scroll',
        //     () => {
        //         if (window.scrollY > 0) {
        //             linkControls.start('enter')
        //             appBarControls.start('enter')
        //         }
        //     },
        //     { once: true }
        // )
    }, [appBarControls, linkControls])

    return (
        <MotionAppBar
            className={classes.AppBar}
            key='nav-app-bar'
            position='absolute'
            color='inherit'
            variant='outlined'
            variants={variants.appBar(wS)}
            initial='initial'
            animate={appBarControls}
            exit='initial'
        >
            <MotionToolbar key='nav-toolbar'>
                <MotionGrid
                    key='nav-link-container'
                    className={classes.navLinksContainer}
                    item
                    container
                    justify='flex-start'
                    alignItems='center'
                >
                    {links.map((link, i) => (
                        <Link
                            key={`${link.text}-${i}`}
                            className={
                                location.pathname === link.to
                                    ? classes.activeNavBtn
                                    : classes.navBtn
                            }
                            component={MotionButton}
                            to={link.to}
                            variant='outlined'
                            variants={variants.linkBtn}
                            initial='initial'
                            animate={linkControls}
                            exit='initial'
                            custom={i + 1}
                        >
                            {link.text}
                        </Link>
                    ))}
                    <MotionButton
                        className={classes.navBtn}
                        onClick={() => {
                            appBarControls.start('mobile')
                        }}
                    >
                        Rotate
                    </MotionButton>
                </MotionGrid>
                <MotionGrid
                    container
                    item
                    direction='column'
                    justify='flex-start'
                    alignItems='flex-start'
                >
                    <MotionTypo
                        className={classes.logoTitle}
                        variant='h6'
                        color='textPrimary'
                        align='right'
                        variants={variants.logo}
                        initial='initial'
                        animate={linkControls}
                        exit='initial'
                        custom={0}
                    >
                        Jeff Palmer
                    </MotionTypo>
                    <MotionTypo
                        className={classes.logoSubTitle}
                        variant='body1'
                        color='textPrimary'
                        align='right'
                        variants={variants.logo}
                        initial='initial'
                        animate={linkControls}
                        exit='initial'
                        custom={1}
                    >
                        Full-Stack Web Developer
                    </MotionTypo>
                </MotionGrid>
            </MotionToolbar>
        </MotionAppBar>
    )
}

export default Nav
