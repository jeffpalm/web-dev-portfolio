import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { motion } from 'framer-motion'

export const Landing = ({ className }) => {
	return (
		<Grid className={className} container justify='center' alignItems='center'>
			<motion.div animate={{ x: 100 }} transition={{ duration: 1 }}>
				<Typography variant='h1' color='textPrimary'>
					Page One
				</Typography>
			</motion.div>
		</Grid>
	)
}

export const About = ({ className }) => {
	return (
		<Grid
			className={className}
			container
			direction='column'
			justify='center'
			alignItems='center'
		>
			<Typography variant='h1' color='textPrimary'>
				Page Two
			</Typography>
			<Typography variant='h1' color='textPrimary'>
				Page Two
			</Typography>
			<Typography variant='h1' color='textPrimary'>
				Page Two
			</Typography>
		</Grid>
	)
}
