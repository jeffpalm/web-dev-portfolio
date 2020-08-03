import React, { useState, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import Intro from './Intro/Intro'
import AnimationTest from './AnimationTest'
import { makeStyles } from '@material-ui/core/styles'
import Fade from '@material-ui/core/Fade'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Loading from './Intro/Loading'
import useWindowSize from '../../hooks/useWindowSize'
import './Portfolio.scss'

const useStyles = makeStyles(theme => ({
	fullPageContainer: {
		height: '100vh',
		width: '100vw',
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(2)
	},
	fullPageSubContainerBordered: {
		height: '100%',
		width: '100%',
		border: '2px solid white',
		borderRadius: 5,
		padding: theme.spacing(2)
	},
	fullPageSubContainer: {
		height: '100%',
		width: '100%',
		overflow: 'hidden'
	},
	animationContainer: {
		width: '100%',
		height: 200
	}
}))

const NewPortfolio = () => {
	const classes = useStyles()

	const [transitions, setTransitions] = useState([true])

	const advanceTransitions = () => setTransitions([...transitions, true])

	const wS = useWindowSize()

	const afterIntro = advanceTiming => {
		advanceTiming && advanceTiming()
		setTransitions([false])
	}

	return (
		<Grid
			className={classes.fullPageContainer}
			container
			direction='column'
			justify='center'
			alignItems='center'
		>
			<Grid
				className={classes.fullPageSubContainerBordered}
				item
				container
				direction='column'
				justify='center'
				alignItems='center'
			>
				<Fade
					in={transitions[0]}
					appear
					mountOnEnter
					unmountOnExit
					onExited={advanceTransitions}
				>
					<Grid
						className={classes.fullPageSubContainer}
						container
						item
						direction='column'
						justify='flex-end'
						wrap='nowrap'
					>
						<Intro onFinished={afterIntro} />
						{/* <Loading
							maxWidth={wS.width ? wS.width - 68 : 1600}
							// start={timing[7] || false}
							start={true}
							duration={1000}
							count={30}
						/> */}
					</Grid>
				</Fade>
				<Fade in={transitions[1]} appear mountOnEnter unmountOnExit>
					<Button variant='outlined' size='large'>
						Enter
					</Button>
				</Fade>
			</Grid>
		</Grid>
	)
}

export default NewPortfolio
