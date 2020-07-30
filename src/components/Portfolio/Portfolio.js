import React, { useState, useEffect } from 'react'
import Intro from './Intro/Intro'
import AnimationTest from './AnimationTest'
import Fade from '../Fade/Fade'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import './Portfolio.scss'

const useStyles = makeStyles(theme => ({
	fullPageContainer: {
		height: '100vh',
		width: '100vw',
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(2)
	},
	fullPageSubContainer: {
		height: '100%',
		width: '100%',
		border: '2px solid white',
		borderRadius: 5,
		padding: theme.spacing(2)
	}
}))

const NewPortfolio = () => {
	const classes = useStyles()

	const [transitions, setTransitions] = useState([true])

	const afterIntro = advanceTiming => {
		advanceTiming()
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
				className={classes.fullPageSubContainer}
				item
				container
				direction='column'
				justify='flex-end'
			>
				<Fade enter={transitions[0]} delay={500}>
					{/* <Intro /> */}
					<AnimationTest />
					{/* <Intro onFinished={afterIntro} /> */}
				</Fade>
			</Grid>
		</Grid>
	)
}

export default NewPortfolio
