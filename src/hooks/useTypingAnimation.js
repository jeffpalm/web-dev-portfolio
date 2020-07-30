import { useState, useEffect } from 'react'
import { codeColor } from './utils/utils'

const useTypingAnimation = (text, speed, enter = true, onEntered = null) => {
	const [output, setOutput] = useState('')
	const [index, setIndex] = useState(0)

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (enter) {
				setOutput(output + text.charAt(index))
				if (index < text.length) {
					setIndex(index + 1)
				} else {
					if (onEntered) onEntered()
				}
			} else {
				setOutput('')
			}
		}, speed)
		return () => {
			clearTimeout(timeout)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [index, output, speed, text, enter])

	return codeColor(output)
}

export default useTypingAnimation
