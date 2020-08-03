import React, { useState, useRef, useLayoutEffect } from 'react'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
	root: {
		position: 'relative',
	},
	overlay: {
		top: 0,
		left: 0,
		width: 100,
		height: 100,
		position: 'absolute',
	},
}))

const ParallaxPage = ({ style, children, className }) => {
	const classes = useStyles()
	const [elementTop, setElementTop] = useState(0)
	const ref = useRef(null)
	const { scrollY } = useViewportScroll()

	const y = useTransform(scrollY, [elementTop, elementTop + 1], [0, -1], {
		clamp: false,
	})
  
	useLayoutEffect(() => {
		const element = ref.current
		element && setElementTop(element.offsetTop)
	}, [ref])

	return (
		<div className={className}>
			<motion.div className={classes.overlay} style={{ ...style, y }} />
			{children}
		</div>
	)
}

export default ParallaxPage