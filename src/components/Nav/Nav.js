import React, { useRef, useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { motion, useAnimation } from 'framer-motion'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import useVisibility from '../../hooks/useVisibility'

const useStyles = makeStyles(theme => ({
	navContainer: {
		width: '100%',
		height: '100%',
	},
	logoContainer: {},
	logoTitle: {
		width: '100%',
		padding: 0,
		margin: 0,
	},
	logoSubTitle: {
		width: '100%',
	},
	navLinksContainer: {
		height: '100%',
	},
	navBtn: {
		margin: theme.spacing(1),
	},
}))

const variants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		x: 0,
	},
}

const Nav = () => {
	const classes = useStyles()
	const ref = useRef()
	const visible = useVisibility(ref)
	const controls = useAnimation()

	useEffect(() => {
		if (visible) {
			controls.start('visible')
		} else {
			controls.start('hidden')
		}
	}, [visible])

	return (
		<AppBar ref={ref} position='sticky' color='inherit' variant='outlined'>
			<Toolbar>
				<Grid
					className={classes.navContainer}
					container
					justify='space-between'
				>
					<motion.div
						initial={{ x: -100, opacity: 0 }}
						animate={controls}
						variants={variants}
					>
						<Grid
							className={classes.navLinksContainer}
							item
							container
							justify='flex-start'
							alignItems='center'
						>
							<Button className={classes.navBtn} variant='outlined'>
								Home
							</Button>
							<Button className={classes.navBtn} variant='outlined'>
								About
							</Button>
							<Button className={classes.navBtn} variant='outlined'>
								Skills
							</Button>
							<Button className={classes.navBtn} variant='outlined'>
								Projects
							</Button>
							<Button className={classes.navBtn} variant='outlined'>
								Contact
							</Button>
						</Grid>
					</motion.div>
					<motion.div
						initial={{ x: -100, opacity: 0 }}
						animate={controls}
						variants={variants}
					>
						<Grid
							className={classes.logoContainer}
							container
							item
							direction='column'
							justify='flex-start'
							alignItems='flex-start'
						>
							<Typography
								className={classes.logoTitle}
								variant='h6'
								color='textPrimary'
								align='right'
							>
								Jeff Palmer
							</Typography>
							<Typography
								className={classes.logoSubTitle}
								variant='body1'
								color='textPrimary'
								align='right'
							>
								Full-Stack Web Developer
							</Typography>
						</Grid>
					</motion.div>
				</Grid>
			</Toolbar>
		</AppBar>
	)
}

export default Nav
