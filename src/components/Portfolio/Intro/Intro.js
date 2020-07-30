import React, { useState, useEffect } from 'react'
import useTypingAnimation from '../../../hooks/useTypingAnimation'
import useWindowSize from '../../../hooks/useWindowSize'
import useDelayedIncrement from '../../../hooks/useDelayedIncrement'
import SizedBox from '../../SizedBox/SizedBox'

const Intro = ({ onFinished }) => {
	const [timing, setTiming] = useState([true])

	const wS = useWindowSize()

	const advanceTiming = () => setTiming([...timing, true])

	const text = {
		title: useTypingAnimation('node', 50, timing[0], advanceTiming),
		nodeLoad1: useTypingAnimation(
			'Welcome to Node.js v12.18.0',
			1,
			timing[1] || false
		),
		nodeLoad2: useTypingAnimation(
			'Type ".help" for more information.',
			1,
			timing[1] || false,
			advanceTiming
		),
		constJp: useTypingAnimation(
			`> const JeffPalmer = require('jeffpalm/dev')`,
			50,
			timing[2] || false,
			advanceTiming
		),
		undefined1: useTypingAnimation(
			'undefined',
			1,
			timing[3] || false,
			advanceTiming
		),
		constPortfolio: useTypingAnimation(
			`> const portfolio = new JeffPalmer()`,
			50,
			timing[4] || false,
			advanceTiming
		),
		undefined2: useTypingAnimation(
			'undefined',
			1,
			timing[5] || false,
			advanceTiming
		),
		portfolioInvoked: useTypingAnimation(
			`> portfolio.init()`,
			50,
			timing[6] || false,
			advanceTiming
		),
		initializingPortfolio: useTypingAnimation(
			'Initializing Portfolio...',
			1,
			timing[7] || false,
			advanceTiming
		),
		loading: useDelayedIncrement(0, wS.width - 68, 0, timing[8] || false)
		// loading: useTypingAnimation(
		// 	String('|').repeat(Math.floor(wS.width / 10)),
		// 	5,
		// 	timing[8] || false,
		// 	() => {
		// 		if (onFinished) {
		// 			onFinished(advanceTiming)
		// 		}
		// 	}
		// ),
	}

	return (
		<>
			<span className={`type-effect ${timing.length === 1 ? 'cursor' : ''}`}>
				$ {text.title}
			</span>
			<span className='type-effect'>{text.nodeLoad1}</span>
			<span className='type-effect'>{text.nodeLoad2}</span>
			<span className={`type-effect ${timing.length === 3 ? 'cursor' : ''}`}>
				{text.constJp}
			</span>
			<span className='type-effect'>{text.undefined1}</span>
			<span className={`type-effect ${timing.length === 5 ? 'cursor' : ''}`}>
				{text.constPortfolio}
			</span>
			<span className='type-effect'>{text.undefined2}</span>
			<span className={`type-effect ${timing.length === 7 ? 'cursor' : ''}`}>
				{text.portfolioInvoked}
			</span>
			<span className='type-effect'>{text.initializingPortfolio}</span>
			<SizedBox
				squareProps={{
					className: 'type-effect'
				}}
        width={text.loading}
        height={10}
				bgColor='#fff'
				style={{
          zIndex: 10
				}}
			>
				{' '}
			</SizedBox>
		</>
	)
}

export default Intro
