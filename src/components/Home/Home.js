import React, {useRef} from 'react'
import { makeStyles } from '@material-ui/core/styles'
// import ReactFullpage from '@fullpage/react-fullpage'
import Nav from '../Nav/Nav'
import { Landing, About } from './Pages/Pages'
import ParallaxPage from './Pages/ParallaxPage'
import useSnapToFullPage from '../../hooks/useSnapToFullpage'
import useScroll from '../../hooks/useScroll'
import useWindowSize from '../../hooks/useWindowSize'
// import { motion } from 'framer-motion'

const useStyles = makeStyles(theme => ({
	root: {
    // overflowX: 'hidden'
  },
	pageOne: {
		margin: 0,
		height: '100vh',
		width: '100%',
		backgroundColor: theme.palette.primary.main,
	},
	pageTwo: {
		margin: 0,
		height: '100vh',
		width: '100%',
		backgroundColor: theme.palette.secondary.main,
	},
	pageThree: {
		margin: 0,
		height: '100vh',
		width: '100%',
		backgroundColor: theme.palette.background.default,
	},
}))

const Home = () => {
  const classes = useStyles()
  const ref = useRef()
  const scroll = useScroll()
  const wS = useWindowSize()

  useSnapToFullPage(ref, scroll.y, wS.height)

	return (
		<div ref={ref} className={classes.root}>
			<Landing className={classes.pageOne} />
			<Nav />
			<ParallaxPage className={classes.pageTwo}>
        <About />
      </ParallaxPage>
			<ParallaxPage className={classes.pageThree}>
        <Landing />
      </ParallaxPage>
		</div>
	)
}

export default Home
