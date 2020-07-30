import React, { useEffect, useState } from 'react'

const Fade = ({
	children,
	enter = true,
	delay = 0,
	afterTransition = null
}) => {
	const [curEnter, setCurEnter] = useState(enter)

	useEffect(() => {
		let timeout
		if (enter !== curEnter) {
			timeout = setTimeout(() => {
				setCurEnter(enter)
				if (afterTransition) {
					afterTransition()
				}
			}, delay)
		}
		return () => {
			clearTimeout(timeout)
		}
	}, [curEnter, enter, delay])

	return <>{curEnter ? children : null}</>
}

export default Fade
