import { useState, useEffect } from 'react'

const useDelayedIncrement = (
	start = 0,
	end = 50,
	delay = 50,
	begin = true,
	onEnded = null
) => {
	const [finished, setFinished] = useState(false)
	const [output, setOutput] = useState(start)
	const [increment, setIncrement] = useState(start)

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (begin) {
				if (increment < end && !finished) {
					setOutput(output + 1)
					setIncrement(increment + 1)
				} else {
					setFinished(true)
					if (onEnded) onEnded()
				}
			}
		}, delay)

		if (end !== output && finished) {
			setOutput(end)
		}

		return () => {
			clearTimeout(timeout)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [begin, output, increment, end, delay])

	return output
}

export default useDelayedIncrement
