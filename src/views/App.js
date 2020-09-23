import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import AboutPage from 'views/AboutPage/AboutPage'
import SkillsPage from 'views/SkillsPage/SkillsPage'
import ProjectsPage from 'views/ProjectsPage/ProjectsPage'
import ContactPage from 'views/ContactPage/ContactPage'
import HomePage from 'views/HomePage/HomePage'
// import LandingPage from 'views/LandingPage/LandingPage'
import Nav from 'components/Nav/Nav'
// import SwitchWrapper from 'components/SwitchWrapper/SwitchWrapper'
import useStyles from 'assets/jss/root'

function App() {
    const classes = useStyles()

    return (
        <>
            <Route
                render={({ location }) => (
                    <div className={classes.root}>
                        <Nav key='nav-bar' />
                        <AnimatePresence exitBeforeEnter>
                            {/*<SwitchWrapper>*/}
                            <Switch location={location} key={location.pathname}>
                                <Route exact path='/' component={HomePage} />
                                <Route
                                    exact
                                    path='/about'
                                    component={AboutPage}
                                />
                                <Route
                                    exact
                                    path='/skills'
                                    component={SkillsPage}
                                />
                                <Route
                                    exact
                                    path='/projects'
                                    component={ProjectsPage}
                                />
                                <Route
                                    exact
                                    path='/contact'
                                    component={ContactPage}
                                />
                            </Switch>
                            {/*</SwitchWrapper>*/}
                        </AnimatePresence>
                    </div>
                )}
            />
        </>
    )
}

export default App
