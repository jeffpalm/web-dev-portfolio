import React, { useState, useEffect, useRef } from 'react'
// import useRgbCycle from '../../hooks/useRgbCycle'
import Typist from 'react-typist'
import { makeStyles } from '@material-ui/core/styles'
// import FullPage from '../FullPage/FullPage'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Fade from 'react-reveal/Fade'

const useStyles = makeStyles(theme => ({
	fullPage: {
		height: '100vh',
		width: '100vw'
	},
	pageOne: {
		backgroundColor: theme.palette.background.default,
		'&downArrow': {
			fill: theme.palette.background.default
		}
	},
	pageTwo: {
		backgroundColor: theme.palette.primary.main
	},
	pageTwoHeading: {
		color: theme.palette.primary.dark
	},
	pageThree: {
		backgroundColor: theme.palette.secondary.dark
	}
}))

//#region
// const Portfolio = () => {
// 	const classes = useStyles()
// 	const rgbOne = useRgbCycle(0, 0, 254)
// 	const rgbTwo = useRgbCycle(0, 0, 0)
// 	const [transitions, setTransitions] = useState({
// 		0: { 0: false },
// 		1: { 0: false },
// 		2: { 0: false }
// 	})
// 	const [timeouts, setTimeouts] = useState([])

// 	useEffect(() => {
// 		return () => {
// 			timeouts.forEach(to => clearTimeout(to))
// 		}
// 		// eslint-disable-next-line react-hooks/exhaustive-deps
// 	}, [])

// 	const fullPageProps = {
// 		slidesNavigation: true,
// 		scrollHorizontally: true,
// 		showActiveTooltip: true,
// 		scrollingSpeed: 500,
// 		afterRender: () => {
// 			setTransitions({
// 				...transitions,
// 				0: { ...transitions[0], 0: true }
// 			})
// 		},
// 		onLeave: (cur, next) => {
// 			console.log(cur, next)
// 			// console.log(cur.index, next.index)
// 			if (cur.index === 1) {
// 				return false
// 			}
// 			let curTransitions = {}
// 			Object.keys(transitions[cur.index]).forEach(
// 				key => (curTransitions[key] = false)
// 			)
// 			setTransitions({
// 				...transitions,
// 				[cur.index]: curTransitions,
// 				[next.index]: { ...transitions[next.index], 0: true }
// 			})
// 		},
// 		afterSlideLoad: (section, cur, next) => {
// 			console.log(section, cur, next)
// 		}
// 	}

// 	const pages = [
// 		{
// 			className: classes.pageOne,
// 			props: {},
// 			transitions: [
// 				{
// 					type: 'Typist',
// 					delay: 0,
// 					props: {
// 						timeout: { enter: 500, exit: 500 }
// 					},
// 					children: () => (
// 						<Typography
// 							className={classes.pageOneHeading}
// 							variant='h2'
// 							align='center'
// 							style={{
// 								// backgroundImage: `-webkit-linear-gradient(180deg, ${rgbOne}, ${rgbTwo})`,
// 								// backgroundClip: 'text',
// 								// WebkitBackgroundClip: 'text',
// 								color: 'rgba(0,0,0,0)'
// 							}}
// 						>
// 							Jeff Palmer
// 						</Typography>
// 					)
// 				},
// 				{
// 					type: 'Grow',
// 					delay: 0,
// 					props: {
// 						timeout: { enter: 1000, exit: 500 }
// 					},
// 					children: () => (
// 						<Typography
// 							variant='body1'
// 							align='center'
// 							style={{
// 								backgroundImage: `-webkit-linear-gradient(180deg, ${rgbTwo}, ${rgbOne})`,
// 								// backgroundClip: 'text',
// 								WebkitBackgroundClip: 'text',
// 								color: 'rgba(0,0,0,0)'
// 							}}
// 						>
// 							Full-stack Web Developer
// 						</Typography>
// 					)
// 				},
// 				{
// 					type: 'Fade',
// 					delay: 0,
// 					props: {
// 						timeout: { enter: 1000, exit: 500 },
// 						mountOnEnter: true
// 					},
// 					children: fullpageApi => (
// 						<div
// 							onClick={() => fullpageApi.moveSectionDown()}
// 							className='down-arrow-container'
// 							style={{
// 								background: `-webkit-linear-gradient(180deg, ${rgbOne}, ${rgbTwo})`
// 							}}
// 						>
// 							<svg width='100' height='50'>
// 								<mask id='down-arrow-mask'>
// 									<rect x='0' y='0' width='100' height='50' fill='white' />
// 									<path
// 										d='M 25 25 L 50 40 L 75 25 L 50 40 L 25 25'
// 										stroke='black'
// 										strokeWidth='5px'
// 									/>
// 								</mask>
// 								<rect
// 									className={classes.pageOne + 'downArrow'}
// 									x='0'
// 									y='0'
// 									width='100'
// 									height='50'
// 									mask='url(#down-arrow-mask)'
// 								/>
// 							</svg>
// 						</div>
// 					)
// 				}
// 			]
// 		},
// 		{
// 			className: classes.pageTwo,
// 			props: {},
// 			transitions: [
// 				{
// 					type: 'Fade',
// 					delay: 0,
// 					props: {
// 						timeout: { enter: 1000, exit: 500 }
// 					},
// 					children: () => (
// 						<div className='slide'>
// 							<Typography className={classes.pageTwoHeading} variant='h1'>
// 								Slide 1
// 							</Typography>
// 						</div>
// 					)
// 				},
// 				{
// 					type: 'Fade',
// 					delay: 0,
// 					props: {
// 						timeout: { enter: 1000, exit: 500 }
// 					},
// 					children: () => (
// 						<div className='slide'>
// 							<Typography className={classes.pageTwoHeading} variant='h1'>
// 								Slide 2
// 							</Typography>
// 						</div>
// 					)
// 				},
// 				{
// 					type: 'Fade',
// 					delay: 0,
// 					props: {
// 						timeout: { enter: 1000, exit: 500 }
// 					},
// 					children: () => (
// 						<div className='slide'>
// 							<Typography className={classes.pageTwoHeading} variant='h1'>
// 								Slide 3
// 							</Typography>
// 						</div>
// 					)
// 				}
// 			]
// 		},
// 		{
// 			className: classes.pageThree,
// 			props: {},
// 			transitions: [
// 				{
// 					type: 'Fade',
// 					delay: 0,
// 					props: {
// 						timeout: { enter: 1000, exit: 500 }
// 					},
// 					children: () => (
// 						<Typography variant='h1' color='textPrimary'>
// 							Page 3
// 						</Typography>
// 					)
// 				}
// 			]
// 		}
// 	]

// 	return (
// 		<>
// 			<FullPage
// 				pages={pages}
// 				transitions={transitions}
// 				setTransitions={setTransitions}
// 				timeouts={timeouts}
// 				setTimeouts={setTimeouts}
// 				fullPageProps={fullPageProps}
// 			/>
// 		</>
// 	)
// }
//#endregion

const Portfolio = () => {
	const classes = useStyles()
	const [transitions, setTransitions] = useState([true])

	return (
		<>
			<Grid
				className={classes.fullPage}
				container
				direction='column'
				alignItems='flex-start'
				justify='flex-end'
			>
				<Typist onTypingDone={() => setTransitions([...transitions, true])}>
					<Typography variant='body1' align='left' display='inline'>
						$ node
					</Typography>
				</Typist>
				<Typography variant='h3' align='left'>
					Welcome to Node.js v.12.18.0
				</Typography>
				<Typography variant='h3' align='left'>
					Type ".help" for more information.
				</Typography>
			</Grid>
			<Grid
				className={classes.fullPage}
				container
				direction='column'
				alignItems='flex-start'
				justify='flex-end'
			>
				<Typist>
					<Typography variant='h3' align='left'>
						const JeffPalmer = require('jeffpalm/dev')
					</Typography>
					<br />
					<br />
					<br />
					<Typography variant='h3' align='left'>
						const portfolio = JeffPalmer()
					</Typography>
					<Typography variant='h3' align='left'>
						portfolio()
					</Typography>
				</Typist>
			</Grid>
		</>
	)
}

export default Portfolio
