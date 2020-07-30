import React from 'react'

const SizedBox = ({
	width = 100,
	height = 'unset',
	bgColor,
	style: styleProp,
	squareProps,
	children
}) => {
	const style = {
		width,
		height,
		backgroundColor: bgColor,
		...styleProp
	}

	return (
		<div style={style} {...squareProps}>
			{children}
		</div>
	)
}

export default SizedBox