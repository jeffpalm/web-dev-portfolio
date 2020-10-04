import React, { useState, Suspense, lazy } from 'react'
// STYLE/ANIMATION
import useStyles from './AppStyle'
// VIEWS
import HomePage from 'views/HomePage/HomePage'
// import AboutPage from 'views/AboutPage/AboutPage'
// import SkillsPage from 'views/SkillsPage/SkillsPage'
// import ProjectsPage from 'views/ProjectsPage/ProjectsPage'
// import ContactPage from 'views/ContactPage/ContactPage'
// COMPONENTS
// import Nav from 'components/Nav/Nav'
import NavFallback from '../components/Nav/NavFallback'
import FullPageFallback from 'components/FullPage/FullPageFallback'
// HOOKS
import useScrollPosition from 'hooks/useScrollPosition'
import useDocumentSize from 'hooks/useDocumentSize'
import useHueConversion from 'hooks/useHueConversion'
import useWindowSize from 'hooks/useWindowSize'

// CODE SPLITTING
const Nav = lazy(() => import('components/Nav/Nav'))
const AboutPage = lazy(() => import('views/AboutPage/AboutPage'))
const SkillsPage = lazy(() => import('views/SkillsPage/SkillsPage'))
const ContactPage = lazy(() => import('views/ContactPage/ContactPage'))
const ProjectsPage = lazy(() => import('views/ProjectsPage/ProjectsPage'))

const randomHue = Math.random() * 360

const App = () => {
    const classes = useStyles()
    const wS = useWindowSize()
    const { y } = useScrollPosition()
    const doc = useDocumentSize()

    const [startHue, setStartHue] = useState(randomHue)

    const hue = useHueConversion(y, 0, doc.height, startHue)
    // const dynamicHue = `hsla(${hue}, 50%, 30%, 0.8)`

    const newHue = () => {
        setStartHue(Math.floor(Math.random() * 360))
    }

    return (
        <div className={classes.root}>
            <HomePage id='home' />
            <Suspense fallback={<NavFallback />}>
                <Nav key='nav-bar' wS={wS} dynamicHue={hue} newHue={newHue} />
            </Suspense>
            <Suspense fallback={<FullPageFallback />}>
                <AboutPage id='about' dynamicHue={hue} />
            </Suspense>
            <Suspense fallback={<FullPageFallback />}>
                <SkillsPage id='skills' />
            </Suspense>
            <Suspense fallback={<FullPageFallback />}>
                <ProjectsPage id='projects' />
            </Suspense>
            <Suspense fallback={<FullPageFallback />}>
                <ContactPage id='contact' />
            </Suspense>
        </div>
    )
}

export default App
