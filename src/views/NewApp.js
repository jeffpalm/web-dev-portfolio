import React from 'react'
// import { Switch, Route } from 'react-router-dom'
// import { AnimatePresence } from 'framer-motion'
import AboutPage from 'views/AboutPage/AboutPage'
import SkillsPage from 'views/SkillsPage/SkillsPage'
import ProjectsPage from 'views/ProjectsPage/ProjectsPage'
import ContactPage from 'views/ContactPage/ContactPage'
// import HomePage from 'views/HomePage/HomePage'
import HomePageVideo from 'views/HomePage/HomePageVideo'
// import LandingPage from 'views/LandingPage/LandingPage'
// import Nav from 'components/Nav/Nav'
import ScrollNav from 'components/Nav/ScrollNav'
// import SwitchWrapper from 'components/SwitchWrapper/SwitchWrapper'
import useStyles from 'assets/jss/root'

function App() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <HomePageVideo id='home' />
            <ScrollNav key='nav-bar' />
            <AboutPage id='about' />
            <SkillsPage id='skills' />
            <ProjectsPage id='projects' />
            <ContactPage id='contact' />
        </div>
    )
}

export default App
