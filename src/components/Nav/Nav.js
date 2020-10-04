import React, { useEffect, useState } from 'react'
import { ScrollLink } from 'react-scroll'
import { useAnimation } from 'framer-motion'
import {
    MotionAppBar,
    MotionToolbar,
    MotionButton,
    MotionGrid,
} from '../MuiMotion/MuiMotion'
import useStyles from './NavStyle'
import variants from 'components/Nav/NavAnimation'
import { SCROLL_SPEED } from '../../assets/data/constants'
import Palmytree from '../Palmytree/Palmytree'
import SideBar from '../SideBar/SideBar'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { motion } from 'framer-motion'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

const links = [
    { text: 'Home', to: 'home' },
    { text: 'About', to: 'about' },
    { text: 'Skills', to: 'skills' },
    { text: 'Projects', to: 'projects' },
    { text: 'Contact', to: 'contact' },
]

const Link = ScrollLink(MotionButton)

const MobileLink = ScrollLink(motion.a)

const Nav = ({ wS, dynamicHue, newHue }) => {
    const classes = useStyles()
    const linkControls = useAnimation()
    const treeControls = useAnimation()
    const appBarControls = useAnimation()
    const mobileLinkControls = useAnimation()

    const isDesktop = useMediaQuery('(min-width:620px)')

    const [mobileMenu, setMobileMenu] = useState(false)

    const backgroundColor = `hsla(${dynamicHue}, 50%, 30%, 0.8)`

    useEffect(() => {
        const checkPosition = () => {
            if (window.scrollY > 0) {
                linkControls.start('enter')
                treeControls.start('enter')
                appBarControls.start('enter')
                return
            } else {
                linkControls.start('initial')
                treeControls.start('enter')
                appBarControls.start('initial')
                setMobileMenu(false)
                mobileLinkControls.start('initial')
                return
            }
        }
        checkPosition()

        window.addEventListener('scroll', checkPosition)
        return () => {
            window.removeEventListener('scroll', checkPosition)
        }
    }, [appBarControls, linkControls, mobileLinkControls, treeControls])

    useEffect(() => {
        if (mobileMenu) {
            mobileLinkControls.start('enter')
        } else {
            mobileLinkControls.start('initial')
        }
    }, [mobileMenu, mobileLinkControls])

    return (
        <>
            <ClickAwayListener
                onClickAway={() => {
                    mobileLinkControls.start('initial')
                    setMobileMenu(false)
                }}
            >
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
                    style={{ backgroundColor }}
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
                            {isDesktop ? (
                                links.map((link, i) => (
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
                                        isDynamic
                                    >
                                        {link.text}
                                    </Link>
                                ))
                            ) : (
                                <IconButton
                                    edge='start'
                                    color='default'
                                    aria-label='menu'
                                    onClick={() => setMobileMenu(!mobileMenu)}
                                >
                                    {mobileMenu ? <CloseIcon /> : <MenuIcon />}
                                </IconButton>
                            )}
                        </MotionGrid>
                        <MotionGrid
                            className={classes.logoContainer}
                            item
                            variants={variants.logo}
                            initial='initial'
                            animate={treeControls}
                            exit='initial'
                            custom={0}
                            onClick={() => {
                                newHue()
                                treeControls.start({
                                    rotate: [0, 360],
                                    transition: {
                                        duration: 0.3,
                                    },
                                })
                            }}
                        >
                            <Palmytree variant='logo' />
                        </MotionGrid>
                    </MotionToolbar>
                    {mobileMenu && (
                        <MotionGrid
                            className={classes.mobileLinkContainer}
                            container
                            direction='column'
                        >
                            {links.map((link, i) => (
                                <MobileLink
                                    key={`${link.text}-${i}`}
                                    className={classes.MobileLink}
                                    activeClass={classes.activeMobileLink}
                                    smooth
                                    spy
                                    duration={SCROLL_SPEED}
                                    to={link.to}
                                    variants={variants.mobileLink}
                                    initial='initial'
                                    animate={mobileLinkControls}
                                    exit='initial'
                                    custom={i + 1}
                                    style={{
                                        borderBottom:
                                            i === links.length - 1
                                                ? 'none'
                                                : '1px solid grey',
                                    }}
                                    isDynamic
                                >
                                    {link.text}
                                </MobileLink>
                            ))}
                        </MotionGrid>
                    )}
                </MotionAppBar>
            </ClickAwayListener>
            <SideBar
                controls={appBarControls}
                backgroundColor={backgroundColor}
            />
        </>
    )
}

export default Nav
