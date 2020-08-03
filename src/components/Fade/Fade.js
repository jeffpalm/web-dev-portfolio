import React, { useEffect, useState, useRef } from 'react'
import { Transition } from 'react-transition-group'

const Fade = ({
	children,
	enter = false,
	delay = 0,
	duration = { enter: 1500, exit: 500 },
	component = 'div',
	componentProps = {},
	transitionProps = {}
}) => {
	const [curEnter, setCurEnter] = useState(enter)
	const [opacity, setOpacity] = useState(0)

	const wrapper = useRef()

	const WrappingComponent = component

	useEffect(() => {
		let timeout
		if (enter !== curEnter) {
			timeout = setTimeout(() => {
				setCurEnter(enter)
			}, delay)
		}
		return () => {
			clearTimeout(timeout)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [curEnter, enter, delay])

	return (
		<Transition
			in={curEnter}
			timeout={{
				enter: duration.enter,
				exit: duration.exit,
				appear: duration.enter
			}}
			nodeRef={wrapper}
			{...transitionProps}
			onEntering={() => setOpacity(1)}
			onExiting={() => setOpacity(0)}
		>
			{status => (
				<WrappingComponent
					{...componentProps}
					style={{
						transition: `opacity ${
							status === 'entering' ? duration.enter : duration.exit
						}ms ease-in-out`,
						opacity
					}}
					ref={wrapper}
				>
					{children}
				</WrappingComponent>
			)}
		</Transition>
	)
}

export default Fade
