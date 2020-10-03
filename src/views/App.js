import React from 'react'
// STYLE/ANIMATION
import useStyles from './AppStyle'
// VIEWS
import AboutPage from 'views/AboutPage/AboutPage'
import SkillsPage from 'views/SkillsPage/SkillsPage'
import ContactPage from 'views/ContactPage/ContactPage'
import HomePage from 'views/HomePage/HomePage'
import ProjectsPage from 'views/ProjectsPage/ProjectsPage'
// COMPONENTS
import Nav from 'components/Nav/Nav'

function App() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <HomePage id='home' />
            <Nav key='nav-bar' />
            <AboutPage id='about' />
            <SkillsPage id='skills' />
            <ProjectsPage id='projects' />
            <ContactPage id='contact' />
        </div>
    )
}

export default App
