import React, { useState } from 'react'
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
// HOOKS
import useScrollPosition from 'hooks/useScrollPosition'
import useHueConversion from 'hooks/useHueConversion'
import useDocumentSize from '../hooks/useDocumentSize'

const randomHue = Math.random() * 360

const App = () => {
    const classes = useStyles()
    const { y } = useScrollPosition()
    const doc = useDocumentSize()

    const [startHue, setStartHue] = useState(randomHue)

    const hue = useHueConversion(y, 0, doc.height, startHue)
    const backgroundColor = `hsl(${hue}, 40%, 30%)`

    const newHue = () => {
        setStartHue(Math.floor(Math.random() * 360))
    }

    return (
        <div className={classes.root} style={{ backgroundColor }}>
            <HomePage id='home' />
            <Nav key='nav-bar' newHue={newHue} />
            <AboutPage id='about' />
            <SkillsPage id='skills' />
            <ProjectsPage id='projects' />
            <ContactPage id='contact' />
        </div>
    )
}

export default App
