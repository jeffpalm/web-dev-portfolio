import React, { useState } from 'react'
import useTypingAnimation from '../../../hooks/useTypingAnimation'
import useWindowSize from '../../../hooks/useWindowSize'
import useDelayedIncrement from '../../../hooks/useDelayedIncrement'
import Loading from './Loading'

const Intro = ({ onFinished }) => {
	const [timing, setTiming] = useState([true])

	const wS = useWindowSize()

	const advanceTiming = () => setTiming([...timing, true])

	const afterIntro = () => {
		onFinished && onFinished()
	}

	const text = {
		title: useTypingAnimation('node', 50, timing[0], true, advanceTiming),
		nodeLoad1: useTypingAnimation(
			'Welcome to Node.js v12.18.0',
			1,
			timing[1] || false,
			false
		),
		nodeLoad2: useTypingAnimation(
			'Type ".help" for more information.',
			1,
			timing[1] || false,
			false,
			advanceTiming
		),
		constJp: useTypingAnimation(
			`> const JeffPalmer = require('jeffpalm/dev')`,
			50,
			timing[2] || false,
			true,
			advanceTiming
		),
		undefined1: useTypingAnimation(
			'undefined',
			1,
			timing[3] || false,
			true,
			advanceTiming
		),
		constPortfolio: useTypingAnimation(
			`> const portfolio = new JeffPalmer()`,
			50,
			timing[4] || false,
			true,
			advanceTiming
		),
		undefined2: useTypingAnimation(
			'undefined',
			1,
			timing[5] || false,
			true,
			advanceTiming
		),
		portfolioInvoked: useTypingAnimation(
			`> portfolio.init()`,
			50,
			timing[6] || false,
			true,
			advanceTiming
		)
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
			<Loading
				maxWidth={wS.width ? wS.width - 68 : 1600}
				start={timing[7] || false}
				duration={5000}
				count={1}
			/>
		</>
	)
}

export default Intro
