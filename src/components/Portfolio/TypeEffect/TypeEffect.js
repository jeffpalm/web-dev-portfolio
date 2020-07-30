import React, { useState, useEffect } from 'react'
import './TypeEffect.scss'

const TypeEffect = ({ text, delay = 50, Component, componentProps }) => {
	const [output, setOutput] = useState('')
	const [index, setIndex] = useState(0)

	useEffect(() => {
		const timeout = setTimeout(() => {
			setOutput(output + text.charAt(index))
			if (index < text.length) {
				setIndex(index + 1)
			}
		}, delay)
		return () => {
			clearTimeout(timeout)
		}
	}, [output, index, delay, text])

	return <Component className='TypeEffect' {...componentProps}>{output}</Component>
}

export default TypeEffect
