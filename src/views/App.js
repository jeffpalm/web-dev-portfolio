import React from 'react'
import AboutPage from 'views/AboutPage/AboutPage'
import SkillsPage from 'views/SkillsPage/SkillsPage'
import ContactPage from 'views/ContactPage/ContactPage'
import HomePageVideo from 'views/HomePage/HomePageVideo'
import ProjectsPage from 'views/ProjectsPage/ProjectsPage'
import ScrollNav from 'components/Nav/ScrollNav'
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
