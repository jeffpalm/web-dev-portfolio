import React, { useEffect } from 'react'
// import { Link, useLocation } from 'react-router-dom'
import { ScrollLink } from 'react-scroll'
import { useAnimation } from 'framer-motion'
import {
    MotionAppBar,
    MotionToolbar,
    MotionButton,
    MotionGrid,
} from '../MuiMotion/MuiMotion'
import useWindowSize from '../../hooks/useWindowSize'
import useStyles from '../../assets/jss/components/Nav'
import variants from 'assets/animation/components/Nav'
import { SCROLL_SPEED } from '../../assets/constants'
import Palmytree from '../Palmytree/Palmytree'
import SideBar from '../SideBar/SideBar'

const links = [
    { text: 'Home', to: 'home' },
    { text: 'About', to: 'about' },
    { text: 'Skills', to: 'skills' },
    { text: 'Projects', to: 'projects' },
    { text: 'Contact', to: 'contact' },
]

const Link = ScrollLink(MotionButton)

const Nav = () => {
    const classes = useStyles()
    const linkControls = useAnimation()
    const appBarControls = useAnimation()
    // const location = useLocation()
    const wS = useWindowSize()

    useEffect(() => {
        const checkPosition = () => {
            if (window.scrollY > 0) {
                linkControls.start('enter')
                appBarControls.start('enter')
                return
            } else {
                linkControls.start('initial')
                appBarControls.start('initial')
                return
            }
        }
        checkPosition()

        window.addEventListener('scroll', checkPosition)
        return () => {
            window.removeEventListener('scroll', checkPosition)
        }
    }, [appBarControls, linkControls])

    return (
        <>
            <MotionAppBar
                className={classes.AppBar}
                key='nav-app-bar'
                position='sticky'
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
                                className={classes.navBtn}
                                activeClass={classes.activeNavBtn}
                                smooth
                                spy
                                duration={SCROLL_SPEED}
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
                        {/*<MotionButton*/}
                        {/*    className={classes.navBtn}*/}
                        {/*    onClick={() => {*/}
                        {/*        appBarControls.start('mobile')*/}
                        {/*    }}*/}
                        {/*>*/}
                        {/*    Rotate*/}
                        {/*</MotionButton>*/}
                    </MotionGrid>
                    <MotionGrid
                        className={classes.logoContainer}
                        item
                        variants={variants.logo}
                        initial='initial'
                        animate={linkControls}
                        exit='initial'
                        custom={0}
                    >
                        <Palmytree variant='logo' />
                    </MotionGrid>
                </MotionToolbar>
            </MotionAppBar>
            <SideBar controls={appBarControls} />
        </>
    )
}

export default Nav
