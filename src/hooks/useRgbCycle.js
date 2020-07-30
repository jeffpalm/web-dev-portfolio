import { useState, useEffect } from 'react'

const useRgbCycle = (r, g, b) => {
	const [rgb, setRgb] = useState({
		r: r || 0,
		g: g || 254,
		b: b || 150
	})

	useEffect(() => {
		const interval = setInterval(() => {
			let { r, g, b } = rgb
			if (r > 0 && b === 0) {
				setRgb({ r: r - 2, g: g + 2, b })
			}
			if (g > 0 && r === 0) {
				setRgb({ g: g - 2, b: b + 2, r })
			}
			if (b > 0 && g === 0) {
				setRgb({ r: r + 2, b: b - 2, g })
			}
		}, 17)
		return () => {
			clearInterval(interval)
		}
	}, [rgb])

	return `rgb(${rgb.r},${rgb.g},${rgb.b})`
}

export default useRgbCycle
