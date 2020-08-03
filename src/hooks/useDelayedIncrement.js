import { useState, useEffect } from 'react'

const useDelayedIncrement = (
	start = 0,
	end = 50,
	delay = 50,
	incrementBy = 1,
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
					if (increment + incrementBy > end) {
						setOutput(end)
						setIncrement(end)
					} else {
						setOutput(output + incrementBy)
						setIncrement(increment + incrementBy)
					}
				} else {
					setOutput(end)
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
