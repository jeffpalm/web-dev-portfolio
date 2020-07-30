import React, { useRef } from 'react'

const AsciiEffect = ({
	renderer,
	charSet,
	options,
	height,
	width,
	children
}) => {
	const DomElement = React.createElement('div')
	const OAscii = React.createElement('table')
	const OCanvas = React.createElement('canvas')
	const oCtx =
		OCanvas.ref.current.getContext && OCanvas.ref.current.getContext('2d')

	return (
		<DomElement>
			<OAscii></OAscii>
		</DomElement>
	)
}
