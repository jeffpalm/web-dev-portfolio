import React, { useState, useEffect, useRef } from 'react'
import SizedBox from '../../SizedBox/SizedBox'
import useDelayedIncrement from '../../../hooks/useDelayedIncrement'

const arrayGen = (value = null, n) => {
	let output = []
	for (let i = 0; i < n; i++) {
		output.push(value)
	}
	return output
}

const LoadingBar = ({
	maxWidth,
	height,
	bgColor,
	enter,
	duration,
	boxProps,
	style,
	children,
	delay = 20,
	onEnded = null
}) => {
	const loading = useDelayedIncrement(
		0,
		maxWidth,
		delay,
		Math.floor(maxWidth / (duration / delay)),
		enter,
		onEnded
	)

	return (
		<SizedBox
			width={loading}
			height={enter ? height : 0}
			bgColor={bgColor}
			style={style}
			{...boxProps}
		>
			{children}
		</SizedBox>
	)
}

const Loading = ({
	maxWidth,
	start = true,
	count = 10,
	duration = 1000,
	onEnded = null
}) => {
	const [timing, setTiming] = useState([start])
	const [finished, setFinished] = useState(false)

	const advanceTiming = () => setTiming([...timing, true])

	const charRef = useRef()
	const spaceRef = useRef()

	const charSize = charRef.current && charRef.current.clientWidth

	const loadMsgs = [
		'Initializing Portfolio...',
		'Inspecting visitor awareness...',
		'Notifying SkyNet activation...',
		'Proclaigerizing the mind blow...',
		'Checking with my guy...'
	]

	const charsInSpan = Math.round(maxWidth / charSize)

	const line = (
		sections = 1,
		charLimit,
		separator = ' ',
		separatorCount = 1,
		char = '*'
	) => {
		let output = arrayGen(
			String(char).repeat(
				Math.round(charLimit / sections) - separatorCount + 1
			),
			sections
		)
			.reduce((acc, cur, i, arr) => {
				acc.push(cur)
				if (i !== arr.length - 1) {
					for (let i = 0; i < separatorCount; i++) {
						acc.push(separator)
					}
				}
				return acc
			}, [])
			.join('')

		if (output.length < charLimit) {
			let dif = charLimit - output.length
			if (dif % 2 === 0) {
				let addOns = char.repeat(dif / 2)
				output = addOns + output + addOns
			} else {
				let outStart = char.repeat(Math.floor(dif / 2))
				let outEnd = char.repeat(Math.ceil(dif / 2))
				output = outStart + output + outEnd
			}
		}

		return output.slice(0, charLimit)
	}

	const lineAsym = (
		sections = [],
		charLimit,
		separator = ' ',
		separatorCount = 1
	) => {
		let output = sections
			.reduce((acc, cur, i, arr) => {
				if (i === 0 || i === arr.length - 1) {
					acc.push(cur)
				} else {
					let limit =
						separatorCount % 2 === 0
							? cur.length - 1 - separatorCount / 2
							: cur.length - 1
					acc.push(cur.slice(0, limit))
				}

				for (let i = 0; i < separatorCount; i++) {
					acc.push(separator)
				}
				return acc
			}, [])
			.join('')

		if (output.length < charLimit) {
			output += String('*').repeat(charLimit - output.length)
		}

		return output.slice(0, charLimit)
	}

	const lPart = (num, char) => String(char).repeat(Math.floor(Math.abs(num)))

	const animationMsgs = [
		lineAsym(
			[
				lPart(charsInSpan * 0.2 + 6, '*'),
				lPart(charsInSpan * 0.6 - 12, '*'),
				lPart(charsInSpan * 0.2 + 6, '*')
			],
			charsInSpan
		),
		lineAsym(
			[
				lPart(charsInSpan * 0.2 + 6, '*'),
				lPart(charsInSpan * 0.6 - 12, '*'),
				lPart(charsInSpan * 0.2 + 6, '*')
			],
			charsInSpan,
			' ',
			2
		),
		line(1, charsInSpan),
		line(1, charsInSpan),
		line(1, charsInSpan),
		line(1, charsInSpan),
		line(3, charsInSpan, ' ', 4),
		line(3, charsInSpan, ' ', 4),
		line(3, charsInSpan, ' ', 4),
		line(3, charsInSpan, ' ', 4),
		line(1, charsInSpan),
		line(1, charsInSpan),
		line(1, charsInSpan),
		lineAsym(
			[
				lPart(charsInSpan * 0.2, '*'),
				lPart(charsInSpan * 0.6, '*'),
				lPart(charsInSpan * 0.2, '*')
			],
			charsInSpan
		),
		lineAsym(
			[
				lPart(charsInSpan * 0.2, '*'),
				lPart(charsInSpan * 0.6, '*'),
				lPart(charsInSpan * 0.2, '*')
			],
			charsInSpan
		),
		lineAsym(
			[
				lPart(charsInSpan * 0.2 + 1, '*'),
				lPart(charsInSpan * 0.6 - 2, '*'),
				lPart(charsInSpan * 0.2 + 1, '*')
			],
			charsInSpan
		),
		lineAsym(
			[
				lPart(charsInSpan * 0.2 + 1, '*'),
				lPart(charsInSpan * 0.6 - 2, '*'),
				lPart(charsInSpan * 0.2 + 1, '*')
			],
			charsInSpan
		),
		lineAsym(
			[
				lPart(charsInSpan * 0.2 + 2, '*'),
				lPart(charsInSpan * 0.6 - 4, '*'),
				lPart(charsInSpan * 0.2 + 2, '*')
			],
			charsInSpan
		),
		lineAsym(
			[
				lPart(charsInSpan * 0.2 + 3, '*'),
				lPart(charsInSpan * 0.6 - 6, '*'),
				lPart(charsInSpan * 0.2 + 3, '*')
			],
			charsInSpan
		),
		lineAsym(
			[
				lPart(charsInSpan * 0.2 + 4, '*'),
				lPart(charsInSpan * 0.6 - 8, '*'),
				lPart(charsInSpan * 0.2 + 4, '*')
			],
			charsInSpan
		),
		lineAsym(
			[
				lPart(charsInSpan * 0.2 + 6, '*'),
				lPart(charsInSpan * 0.6 - 12, '*'),
				lPart(charsInSpan * 0.2 + 6, '*')
			],
			charsInSpan
		),
		lineAsym(
			[
				lPart(charsInSpan * 0.2 + 6, '*'),
				lPart(charsInSpan * 0.6 - 12, '*'),
				lPart(charsInSpan * 0.2 + 6, '*')
			],
			charsInSpan,
			' ',
			2
		),
		lineAsym(
			[
				lPart(charsInSpan * 0.2 + 12, '*'),
				lPart(charsInSpan * 0.6 - 24, '*'),
				lPart(charsInSpan * 0.2 + 12, '*')
			],
			charsInSpan,
			' ',
			2
		),
		line(1, charsInSpan),
		line(1, charsInSpan),
		line(1, charsInSpan),
		line(1, charsInSpan),
		line(1, charsInSpan),
		line(1, charsInSpan),
		line(1, charsInSpan),
		line(1, charsInSpan),
		line(1, charsInSpan)
	]

	useEffect(() => {
		if (finished) {
			onEnded && onEnded()
		} else if (!finished && start) {
			setTiming([true])
		}
	}, [finished, onEnded, start])

	return (
		<>
			<span ref={charRef} className='offscreen'>
				*
			</span>
			<span ref={spaceRef} className='offscreen'>
				{' '}
			</span>
			{arrayGen(null, count).map((e, i) => (
				<LoadingBar
					key={`LoadBar-${i}`}
					maxWidth={maxWidth}
					height={20}
					bgColor='#fff'
					enter={timing[i] || false}
					duration={Math.floor(duration / count)}
					style={{
						color: '#303030',
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center',
						flexWrap: 'nowrap',
						overflow: 'hidden'
					}}
					onEnded={() => {
						if (i === count - 1) {
							advanceTiming()
							setFinished(true)
						} else {
							advanceTiming()
						}
					}}
				>
					<span className={`${timing[i] ? 'loading-text' : 'hidden'}`}>
						{charRef.current && animationMsgs[i]}
					</span>
				</LoadingBar>
			))}
		</>
	)
}

export default Loading
