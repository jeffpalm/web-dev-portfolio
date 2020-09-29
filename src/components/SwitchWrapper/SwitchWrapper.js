import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import num from 'lodash/number'

const SwitchWrapper = ({ children, ...props }) => {
	const routes = ['/', '/about', '/skills', '/projects', '/contact']
	const [curRoute, setCurRoute] = useState(0)
  const [timestamp, setTimestamp] = useState()
  
  const history = useHistory()
  const location = useLocation()

	const onWheel = e => {
		if (timestamp === undefined) setTimestamp(e.timeStamp)

		if (e.timeStamp - timestamp < 200) return

		let nextRoute

		if (e.deltaY > 0) {
			nextRoute = num.clamp(curRoute + 1, 0, routes.length - 1)
		} else if (e.deltaY < 0) {
			nextRoute = num.clamp(curRoute - 1, 0, routes.length - 1)
		}
		if (nextRoute === curRoute) {
			setTimestamp(e.timeStamp)
			return
		}

		history.push(routes[nextRoute])
		setTimestamp(e.timeStamp)
	}

	// * Prevent default scroll
	useEffect(() => {
		window.addEventListener('wheel', e => e.preventDefault(), {
			passive: false,
		})
		window.addEventListener('touchmove', e => e.preventDefault(), {
			passive: false,
		})
		return () => {
			window.removeEventListener('wheel', e => e.preventDefault(), {
				passive: false,
			})
			window.removeEventListener('touchmove', e => e.preventDefault(), {
				passive: false,
			})
		}
  }, [])
  
  useEffect(() => {
    setCurRoute(routes.indexOf(location.pathname))
  }, [location, routes])

	return (
		<motion.div
			style={{ position: 'relative' }}
			{...props}
			onWheel={onWheel}
		>
			{children}
		</motion.div>
	)
}

export default SwitchWrapper
